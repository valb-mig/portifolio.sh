"use client";

import { ArrowUpRight, Clock, Code2, GitBranch, Zap } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";

interface GitActivityProps {
  lang: "pt" | "en";
  text: {
    git_last_commit: string;
    git_no_commit: string;
    git_today: string;
    git_today_one: string;
    git_loading: string;
    git_repo: string;
  };
}

export default function GitActivity({ lang, text }: GitActivityProps) {

  const [lastCommit, setLastCommit] = useState<{
    message: string;
    repo: string;
    date: string;
    url: string;
  } | null>(null);
  const [todayCount, setTodayCount] = useState<number | null>(null);
  const [ghLoading, setGhLoading] = useState(true);

  const [waka, setWaka] = useState<{
    total: string | null;
    topLang: string | null;
    topHours: string | null;
  } | null>(null);
  const [wakaLoading, setWakaLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const reposRes = await fetch("https://api.github.com/users/valb-mig/repos?sort=pushed&per_page=5");
        const repos = await reposRes.json();

        const latestRepo = repos[0];
        const commitsRes = await fetch(`https://api.github.com/repos/${latestRepo.full_name}/commits?per_page=1`);
        const commits = await commitsRes.json();
        const commit = commits[0];

        setLastCommit({
          message: commit.commit?.message ?? "sem mensagem",
          repo: latestRepo.name,
          date: commit.commit?.author?.date ?? latestRepo.pushed_at,
          url: latestRepo.html_url,
        });

        const today = new Date().toISOString().split("T")[0];
        const sinceToday = new Date(today).toISOString();

        const countPromises = repos.map((repo: any) =>
          fetch(`https://api.github.com/repos/${repo.full_name}/commits?author=valb-mig&since=${sinceToday}&per_page=100`)
            .then(r => r.json())
            .then((c: any[]) => Array.isArray(c) ? c.length : 0)
        );

        const counts = await Promise.all(countPromises);
        setTodayCount(counts.reduce((a, b) => a + b, 0));

      } catch {
      } finally {
        setGhLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  useEffect(() => {
    async function fetchWaka() {
      try {
        const res = await fetch("/api/wakatime");
        const data = await res.json();
        setWaka(data);
      } catch {
      } finally {
        setWakaLoading(false);
      }
    }
    fetchWaka();
  }, []);

  const timeAgo = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (lang === "pt") {
      if (mins < 1) return "agora mesmo";
      if (mins < 60) return `${mins} min atrás`;
      if (hours < 24) return `${hours}h atrás`;
      return `${days}d atrás`;
    } else {
      if (mins < 1) return "just now";
      if (mins < 60) return `${mins} min ago`;
      if (hours < 24) return `${hours}h ago`;
      return `${days}d ago`;
    }
  };

  const wakaLabel = lang === "pt"
    ? { title: "horas codando essa semana", lang: "linguagem favorita", noData: "ainda sem dados" }
    : { title: "hours coding this week", lang: "top language", noData: "no data yet" };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-3">

      <div className="border border-zinc-800 rounded-xl bg-zinc-900/40 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        <div className="flex items-start gap-3">
          <div className="mt-0.5 w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
            <GitBranch className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-mono mb-0.5">{text.git_last_commit}</p>
            {ghLoading ? (
              <div className="h-4 w-48 bg-zinc-800 rounded animate-pulse" />
            ) : lastCommit ? (
              <>
                <a
                  href={lastCommit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm text-zinc-200 hover:text-emerald-400 transition-colors line-clamp-1 flex items-center gap-1.5 group"
                >
                  <span className="text-emerald-400/60">❯</span>
                  {lastCommit.message}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
                <p className="text-xs text-zinc-600 font-mono mt-0.5">
                  {text.git_repo} <span className="text-zinc-500">{lastCommit.repo}</span>
                  <span className="mx-1.5 text-zinc-700">·</span>
                  {timeAgo(lastCommit.date)}
                </p>
              </>
            ) : (
              <p className="font-mono text-sm text-zinc-500">{text.git_no_commit}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:flex-shrink-0">
          {ghLoading ? (
            <div className="h-8 w-32 bg-zinc-800 rounded animate-pulse" />
          ) : (
            <div className="flex items-center gap-2 bg-zinc-800/60 border border-zinc-700 rounded-lg px-3 py-2">
              <Zap className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
              <span className="font-mono text-xs text-zinc-400">
                {todayCount === 0
                  ? text.git_no_commit
                  : todayCount === null
                    ? text.git_loading
                    : (
                      <>
                        <span className="text-zinc-100 font-bold">{todayCount}</span>
                        {" "}{todayCount === 1 ? text.git_today_one : text.git_today} 🔥
                      </>
                    )
                }
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="border border-zinc-800 rounded-xl bg-zinc-900/40 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        <div className="flex items-start gap-3">
          <div className="mt-0.5 w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
            <Clock className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500 font-mono mb-0.5">{wakaLabel.title}</p>
            {wakaLoading ? (
              <div className="h-4 w-36 bg-zinc-800 rounded animate-pulse" />
            ) : waka?.total ? (
              <p className="font-mono text-sm text-zinc-200">
                <span className="text-violet-400 font-bold">{waka.total}</span>
              </p>
            ) : (
              <p className="font-mono text-sm text-zinc-500">{wakaLabel.noData}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:flex-shrink-0">
          {wakaLoading ? (
            <div className="h-8 w-32 bg-zinc-800 rounded animate-pulse" />
          ) : waka?.topLang ? (
            <div className="flex items-center gap-2 bg-zinc-800/60 border border-zinc-700 rounded-lg px-3 py-2">
              <Code2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
              <span className="font-mono text-xs text-zinc-400">
                {wakaLabel.lang}:{" "}
                <span className="text-zinc-100 font-bold">{waka.topLang}</span>
                {waka.topHours && (
                  <span className="text-zinc-600 ml-1">· {waka.topHours}</span>
                )}
              </span>
            </div>
          ) : null}
        </div>

      </div>
    </div>
  );
}