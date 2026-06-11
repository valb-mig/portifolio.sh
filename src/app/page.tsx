"use client";

import { useState, useEffect, useRef } from "react";
import {
  Terminal, Github, Linkedin, Instagram, MailIcon, Newspaper,
  Eye, ChevronRight,
  Code2, Globe, ExternalLink,
  Calendar, MapPin, Award, BookOpen, ArrowUpRight
} from "lucide-react";
import GitActivity from "@/components/ui/GitActivity";

const t = {
  pt: {
    git_last_commit: "último código que escrevi",
    git_no_commit:   "nada por aqui ainda...",
    git_today:       "commits hoje",
    git_today_one:   "commit hoje",
    git_loading:     "carregando...",
    git_repo:        "em",
    nav: ["sobre", "experiência", "tecnologias", "projetos"],
    hero_greeting: "olá, eu sou",
    hero_role: "Backend Developer",
    hero_subtitle: "4+ anos construindo sistemas robustos com PHP, DDD e boas práticas de engenharia.",
    hero_cv: "visualizar cv",
    hero_contact: "me contate",
    hero_status: "disponível para oportunidades",
    about_title: "sobre",
    about_cmd: "cat about.md",
    about_text: `Sou desenvolvedor backend especializado em PHP com mais de 5 anos de experiência. Tenho forte domínio em arquitetura de software — DDD, MVC, Clean Code, SOLID e Design Patterns — construindo sistemas escaláveis e de fácil manutenção.

Atualmente no Grupo Abraz como Analista de Desenvolvimento, atuando em melhorias de sistemas internos e externos, novos sistemas e integrações complexas entre APIs.

Embora meu foco seja o backend, quando o projeto exige, viro designer também. Flexibilidade é parte do jogo.`,
    about_cert: "Inglês C1 — EF SET 68/100",
    exp_title: "experiência",
    exp_cmd: "cat experience.log",
    exp_company: "Grupo Abraz",
    exp_since: "desde out/2022",
    exp_location: "Pernambuco, Brasil",
    freelance_cmd:   "cat freelance.log",
    exp_roles: [
      { role: "Analista de Desenvolvimento", period: "jan/2025 → presente", desc: "Desenvolvimento de novos sistemas e integração complexa entre APIs. Liderança técnica em projetos internos." },
      { role: "Assistente Técnico de Desenvolvimento", period: "mai/2024 → dez/2024", desc: "Melhorias nos sistemas internos e externos. Desenvolvimento full-cycle com foco em qualidade de código." },
      { role: "Estagiário de Desenvolvimento", period: "out/2022 → abr/2024", desc: "Ajustes e melhorias em sistemas internos e externos. Aprendizado prático com tecnologias de produção." },
    ],
    tech_title: "tecnologias",
    tech_cmd: "ls -la skills/",
    proj_title: "projetos",
    proj_cmd: "git log --oneline projects/",
    proj_view: "ver no github",
    footer_desc: "Portfólio de Ivalber Souza",
    footer_copy: "© 2026 Ivalber Souza",
    edu_title: "education.log",
    edu_course: "Análise e Desenvolvimento de Sistemas",
    edu_school: "UNINTER Centro Universitário Internacional",
    edu_period: "mai/2022 → out/2024",
  },
  en: {
    git_last_commit: "last thing I coded",
    git_no_commit:   "nothing pushed yet...",
    git_today:       "commits today",
    git_today_one:   "commit today",
    git_loading:     "loading...",
    git_repo:        "in",
    nav: ["about", "experience", "technologies", "projects"],
    hero_greeting: "hey, I'm",
    hero_role: "Backend Developer",
    hero_subtitle: "4+ years building robust systems with PHP, DDD and solid engineering practices.",
    hero_cv: "view resume",
    hero_contact: "contact me",
    hero_status: "open to opportunities",
    about_title: "about",
    about_cmd: "cat about.md",
    about_text: `I'm a backend developer specialized in PHP with 4+ years of experience. Strong background in software architecture — DDD, MVC, Clean Code, SOLID and Design Patterns — building scalable and maintainable systems.

Currently at Grupo Abraz as a Development Analyst, working on internal and external system improvements, new systems and complex API integrations.

Although my focus is backend, when the project demands it, I become a designer too. Flexibility is part of the game.`,
    about_cert: "English C1 — EF SET 68/100",
    exp_title: "experience",
    exp_cmd: "cat experience.log",
    exp_company: "Grupo Abraz",
    exp_since: "since oct/2022",
    exp_location: "Pernambuco, Brazil",
    freelance_cmd:   "cat freelance.log",
    exp_roles: [
      { role: "Development Analyst", period: "jan/2025 → present", desc: "New system development and complex API integrations. Technical leadership on internal projects." },
      { role: "Technical Development Assistant", period: "may/2024 → dec/2024", desc: "Internal and external system improvements. Full-cycle development focused on code quality." },
      { role: "Development Intern", period: "oct/2022 → apr/2024", desc: "Fixes and improvements in internal and external systems. Hands-on learning with production technologies." },
    ],
    tech_title: "technologies",
    tech_cmd: "ls -la skills/",
    proj_title: "projects",
    proj_cmd: "git log --oneline projects/",
    proj_view: "view on github",
    footer_desc: "Portifolio of Ivalber Souza",
    footer_copy: "© 2026 Ivalber Souza",
    edu_title: "education.log",
    edu_course: "Systems Analysis and Development",
    edu_school: "UNINTER International University Center",
    edu_period: "may/2022 → oct/2024",
  }
};

const technologies = [
  { name: "PHP",        icon: "/assets/tech/php.svg",        category: "language",     level: 95 },
  { name: "Laravel",    icon: "/assets/tech/laravel.svg",     category: "framework",    level: 90 },
  { name: "Symfony",    icon: "/assets/tech/symfony.svg",     category: "framework",    level: 75 },
  { name: "Laminas",    icon: "/assets/tech/laminas.svg",     category: "framework",    level: 70 },
  { name: "MySQL",      icon: "/assets/tech/mysql.svg",       category: "database",     level: 88 },
  { name: "Docker",     icon: "/assets/tech/docker.svg",      category: "tool",         level: 85 },
  { name: "Git",        icon: "/assets/tech/git.svg",         category: "tool",         level: 92 },
  { name: "CI/CD",      icon: "/assets/tech/cicd.svg",        category: "devops",       level: 78 },
  { name: "TypeScript", icon: "/assets/tech/typescript.svg",  category: "language",     level: 72 },
  { name: "Node.js",    icon: "/assets/tech/nodejs.svg",      category: "runtime",      level: 68 },
  { name: "Next.js",    icon: "/assets/tech/nextjs.svg",      category: "framework",    level: 65 },
];

const projects = [
  {
    name: "php.eco",
    desc_pt: "🌿 Biblioteca PHP leve para lidar com resultados e erros sem exceptions.",
    desc_en: "🌿 Lightweight PHP library for handling results and errors without exceptions.",
    url: "https://github.com/valb-mig/php.eco",
    tags: ["PHP"],
    type: "lib",
  },
  {
    name: "react-native.macro-tracker",
    desc_pt: "📱 App de controle de macronutrientes com dark mode, metas diárias, gráficos e busca via Open Food Facts.",
    desc_en: "📱 Macro tracking app with dark mode, daily goals, progress charts and Open Food Facts search.",
    url: "https://github.com/valb-mig/react-native.macro-tracker",
    tags: ["React Native", "TypeScript"],
    type: "mobile",
  },
  {
    name: "php.rpg-playground",
    desc_pt: "🎲 WIP — Biblioteca de componentes de RPG de mesa feita em PHP.",
    desc_en: "🎲 WIP — PHP library for tabletop RPG components.",
    url: "https://github.com/valb-mig/php.rpg-playground",
    tags: ["PHP"],
    type: "lib",
  },
  {
    name: "nextjs.edit.r",
    desc_pt: "📝 Editor de código simples baseado em Monaco.",
    desc_en: "📝 Simple Monaco-based code editor.",
    url: "https://github.com/valb-mig/nextjs.edit.r",
    tags: ["JavaScript", "Next.js"],
    type: "web",
  },
  {
    name: "php.convert-php",
    desc_pt: "📚 Biblioteca PHP para converter qualquer tipo de arquivo de planilha.",
    desc_en: "📚 PHP library to convert any spreadsheet file type.",
    url: "https://github.com/valb-mig/php.convert-php",
    tags: ["PHP"],
    type: "lib",
  },
  {
    name: "node.rpg.playground.websocket",
    desc_pt: "🤖 Websocket dedicado para o RPG Playground.",
    desc_en: "🤖 Dedicated WebSocket server for RPG Playground.",
    url: "https://github.com/valb-mig/node.rpg.playground.websocket",
    tags: ["Node.js", "Socket.io"],
    type: "api",
  },
  {
    name: "todo-web-app",
    desc_pt: "📎 Aplicação todo list full-stack com Next.js.",
    desc_en: "📎 Full-stack todo app built with Next.js.",
    url: "https://github.com/valb-mig/todo-web-app",
    tags: ["JavaScript", "Next.js"],
    type: "web",
  },
];

function TerminalWindow({ title, children, className = "", animate = false, inView = true }: {
  title: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  inView?: boolean;
}) {
  return (
    <div className={`bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/40 transition-all duration-700 ${animate ? (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6") : ""} ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-1.5">
          <span className={`w-3 h-3 rounded-full transition-colors duration-500 ${inView ? "bg-red-500/70" : "bg-zinc-700"}`} />
          <span className={`w-3 h-3 rounded-full transition-colors duration-700 ${inView ? "bg-yellow-500/70" : "bg-zinc-700"}`} />
          <span className={`w-3 h-3 rounded-full transition-colors duration-1000 ${inView ? "bg-green-500/70" : "bg-zinc-700"}`} />
        </div>
        <span className="text-xs text-zinc-500 font-mono ml-2">{title}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

const useTypingLines = (lines: string[], inView: boolean, speed = 18) => {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setDisplayed([]);
    setLineIdx(0);
    setCharIdx(0);
  }, [inView]);

  useEffect(() => {
    if (!inView || lineIdx >= lines.length) return;
    if (charIdx < lines[lineIdx].length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          next[lineIdx] = (next[lineIdx] ?? "") + lines[lineIdx][charIdx];
          return next;
        });
        setCharIdx(c => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx(l => l + 1);
        setCharIdx(0);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [inView, lineIdx, charIdx, lines, speed]);

  return displayed;
};

function SectionTitle({ title, cmd }: { title: string; cmd: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-2">
        <span className="text-emerald-400">❯</span>
        <span>{cmd}</span>
      </div>
      <h2 className="text-2xl font-bold text-zinc-100 font-mono">
        <span className="text-emerald-400">#</span> {title}
      </h2>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const text = t[lang];

  const useInView = (threshold = 0.15) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setInView(true); },
        { threshold }
      );
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
    return { ref, inView };
  };

  const aboutView   = useInView();
  const expView     = useInView();
  const techView    = useInView();
  const projView    = useInView();

  // Typewriter for hero
  const heroText = `${text.hero_greeting} Ivalber Souza`;
  useEffect(() => {
    setTyped("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < heroText.length) {
        setTyped(heroText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(v => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const heroLines = [
    "name:     Ivalber Souza",
    "role:     PHP Backend Developer",
    "focus:    DDD, Clean Code, SOLID",
    "location: Recife, PE 🇧🇷",
    "company:  Grupo Abraz",
    "english:  C1 Proficient",
  ];
  
  const heroTyped = useTypingLines(heroLines, true, 14);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono text-sm">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">~/</span>
            <span className="text-zinc-200 font-semibold">portifolio.sh</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {text.nav.map((item, i) => (
              <a
                key={i}
                href={`#${["about", "experience", "technologies", "projects"][i]}`}
                className="font-mono text-xs text-zinc-400 hover:text-emerald-400 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-all"
              >
                <span className="text-emerald-400/60">./</span>{item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="font-mono text-xs border border-zinc-700 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-400 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Globe className="w-3 h-3" />
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <a href="https://github.com/valb-mig" target="_blank" rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-800 rounded-lg">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/valb-mig/" target="_blank" rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-800 rounded-lg">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/dev.valb/" target="_blank" rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-800 rounded-lg">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://valbblog.vercel.app/" target="_blank" rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-1.5 hover:bg-zinc-800 rounded-lg">
              <Newspaper className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {text.hero_status}
            </div>

            <h1 className="font-mono text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-zinc-400 text-2xl block mb-1">
                {typed.split(" ")[0]}{" "}
                <span className="text-zinc-300">{typed.split(" ").slice(1, 3).join(" ")}</span>{" "}
                <span className="text-emerald-400 font-extrabold">{typed.split(" ").slice(3).join(" ")}</span>
                {showCursor && <span className="text-emerald-400">▋</span>}
              </span>
            </h1>

            <div className="font-mono">
              <span className="text-zinc-500 text-sm">role: </span>
              <span className="text-emerald-300 font-semibold">{text.hero_role}</span>
              <span className="text-zinc-600 mx-2">|</span>
              <span className="text-zinc-500 text-sm">exp: </span>
              <span className="text-zinc-200 text-sm">4+ anos</span>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm max-w-md">
              {text.hero_subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`doc/${lang}/ivalber-souza.pdf`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-mono text-sm border border-zinc-700 hover:border-emerald-500/60 text-zinc-300 hover:text-emerald-400 px-4 py-2 rounded-lg transition-all hover:bg-emerald-400/5"
              >
                <Eye className="w-4 h-4" />
                {text.hero_cv}
              </a>
              <a
                href="mailto:valb-mig@gmail.com"
                className="flex items-center gap-2 font-mono text-sm bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-4 py-2 rounded-lg transition-all"
              >
                <MailIcon className="w-4 h-4" />
                {text.hero_contact}
              </a>
              {lang === "pt" && (
                <a
                  href="/servicos"
                  className="flex items-center gap-2 font-mono text-sm border border-emerald-500/40 bg-emerald-400/5 text-emerald-400 hover:bg-emerald-400/10 px-4 py-2 rounded-lg transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  catálogo
                </a>
              )}
            </div>
          </div>

          <TerminalWindow title="valb@arch — zsh">
            <div className="font-mono text-sm space-y-3">
              <div>
                <span className="text-emerald-400">❯ </span>
                <span className="text-zinc-300">whoami</span>
              </div>
              <div className="pl-4 space-y-1 min-h-[144px]">
                {heroLines.map((line, i) => {
                  const parts = line.split(/:(.+)/);
                  const key   = parts[0];
                  const val   = parts[1] ?? "";
                  const raw   = heroTyped[i];
                  if (raw === undefined) return null;
                  const typedKey = raw.slice(0, key.length);
                  const typedVal = raw.slice(key.length);
                  return (
                    <div key={i}>
                      <span className="text-zinc-500">{typedKey}{raw.length > key.length ? ":" : ""}</span>
                      <span className="text-zinc-200">{typedVal}</span>
                      {i === heroTyped.length - 1 && heroTyped[heroLines.length - 1] === undefined && (
                        <span className="animate-pulse text-emerald-400">▋</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="pt-1">
                <span className="text-emerald-400">❯ </span>
                <span className="text-zinc-300">cat skills.txt</span>
              </div>
              <div className="pl-4 flex flex-wrap gap-2">
                {["PHP", "Laravel", "DDD", "Docker", "MySQL", "CI/CD", "Git"].map(s => (
                  <span key={s} className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-300 px-2 py-0.5 rounded font-mono">{s}</span>
                ))}
              </div>
              <div className="pt-1 flex items-center gap-1">
                <span className="text-emerald-400">❯ </span>
                <span className="animate-pulse text-emerald-400">▋</span>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <GitActivity lang={lang} text={text} />

      <section id="about" ref={aboutView.ref} className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle title={text.about_title} cmd={text.about_cmd} />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl">
                <img
                  src="https://github.com/valb-mig.png"
                  alt="Ivalber Souza"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "img/me.png"; }}
                />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-zinc-950 text-xs font-mono font-bold px-2 py-1 rounded-lg">
                @valb-mig
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-2 w-full justify-center">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                {text.about_cert}
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-2 w-full justify-center">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Recife, PE
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <TerminalWindow title="about.md" animate inView={aboutView.inView}>
              <div className="font-mono text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {text.about_text}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </section>

      <section id="experience" ref={expView.ref} className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle title={text.exp_title} cmd={text.exp_cmd} />
        <div className="mb-6">
          <TerminalWindow title={text.edu_title} className="max-w-6xl" animate inView={expView.inView}>
            <div className="flex items-center justify-between font-mono">
              <div>
                <p className="text-zinc-200 font-semibold text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  {text.edu_course}
                </p>
                <p className="text-zinc-500 text-xs mt-1">{text.edu_school}</p>
                <p className="text-emerald-400/70 text-xs mt-0.5">{text.edu_period}</p>
              </div>
            </div>
          </TerminalWindow>
        </div>
        <div className="mt-6">
          <TerminalWindow title="experience.log" className="max-w-6xl" animate inView={expView.inView}>
            <div className="space-y-1 font-mono">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-zinc-100">{text.exp_company}</span>
                    <span className="text-xs bg-emerald-400/15 text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded-full font-mono">
                      atual
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{text.exp_since}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{text.exp_location}</span>
                  </div>
                </div>
                <img src="/img/logos/grupo_abraz.png" alt="Grupo Abraz" className="w-16 h-16 rounded-xl object-contain opacity-80" />
              </div>

              <div className="space-y-5">
                {text.exp_roles.map((r, i) => (
                  <div key={i} className="pl-4 border-l-2 border-zinc-800 hover:border-emerald-500/40 transition-colors">
                    <div>
                      <p className="text-zinc-200 font-semibold text-sm">{r.role}</p>
                      <p className="text-emerald-400/70 text-xs mt-0.5">{r.period}</p>
                    </div>
                    <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 mb-3">sistemas auxiliados</p>
                <div className="flex gap-4">
                  {[
                    { src: "/img/logos/grupo_abraz.png", href: "https://www.abraz.srv.br/", alt: "Grupo Abraz" },
                    { src: "/img/logos/abvm.png", href: "https://www.abraz.adv.br/", alt: "ABVM" },
                    { src: "/img/logos/debito_zero.png", href: "https://debitozero.com.br/", alt: "Débito Zero" },
                  ].map((logo) => (
                    <a key={logo.alt} href={logo.href} target="_blank" rel="noreferrer"
                      className="w-14 h-14 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-105 flex items-center justify-center bg-zinc-900">
                      <img src={logo.src} alt={logo.alt} className="w-10 h-10 object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
        <div className="mt-6">
          <TerminalWindow title="freelance.log" className="max-w-6xl" animate inView={expView.inView}>
            <div className="space-y-1 font-mono">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-zinc-100">Mapion</span>
                    <span className="text-xs bg-zinc-700/40 text-zinc-400 border border-zinc-700 px-2 py-0.5 rounded-full font-mono">
                      freelance
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {lang === "pt" ? "~4 meses · 2024" : "~4 months · 2024"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      <a href="https://www.mapion.com.br/" target="_blank" rel="noreferrer"
                        className="hover:text-emerald-400 transition-colors">
                        mapion.com.br
                      </a>
                    </span>
                  </div>
                </div>
                <img
                  src="/img/logos/mapion.png"
                  alt="Mapion"
                  className="w-14 h-14 rounded-full object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>

              <div className="pl-4 border-l-2 border-zinc-800 hover:border-yellow-500/40 transition-colors">
                <p className="text-zinc-200 font-semibold text-sm">
                  {lang === "pt" ? "Desenvolvedor Mobile · Prototipação & API" : "Mobile Developer · Prototyping & API"}
                </p>
                <p className="text-yellow-400/70 text-xs mt-0.5">
                  {lang === "pt" ? "aplicativo de localização de veículos por placa" : "vehicle tracking app by license plate"}
                </p>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  {lang === "pt"
                    ? "Desenvolvimento completo do protótipo de aplicativo mobile para localização de veículos por placa. Responsável por toda a aplicação — captura, diagramas, alinhamento com o cliente e apoio na construção da API de registros."
                    : "Full development of the mobile app prototype for vehicle tracking by license plate. Responsible for the entire application — capture, diagrams, client alignment and support in building the records API."
                  }
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["React Native", "Mobile", "API", "Prototipação"].map(tag => (
                    <span key={tag} className="text-xs font-mono bg-zinc-800 border border-zinc-700 text-zinc-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      <section id="technologies" ref={techView.ref} className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle title={text.tech_title} cmd={text.tech_cmd} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 hover:bg-zinc-800/60 cursor-default"
              style={{
                opacity:         techView.inView ? 1 : 0,
                transform:       techView.inView ? "translateY(0)" : "translateY(20px)",
                transition:      "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease, background 0.2s ease",
                transitionDelay: techView.inView ? `${i * 60}ms` : "0ms",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.2"; }}
                />
                <div>
                  <p className="font-mono text-sm font-semibold text-zinc-200">{tech.name}</p>
                  <p className="text-xs text-zinc-600 font-mono">{tech.category}</p>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-1">
                <div
                  className="bg-emerald-500 h-1 rounded-full"
                  style={{
                    width:           techView.inView ? `${tech.level}%` : "0%",
                    transition:      "width 0.8s ease",
                    transitionDelay: techView.inView ? `${i * 60 + 300}ms` : "0ms",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" ref={projView.ref} className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle title={text.proj_title} cmd={text.proj_cmd} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 hover:bg-zinc-800/40 block"
              style={{
                opacity:         projView.inView ? 1 : 0,
                transform:       projView.inView ? "translateY(0)" : "translateY(20px)",
                transition:      "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease, background 0.2s ease",
                transitionDelay: projView.inView ? `${i * 80}ms` : "0ms",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs text-zinc-500 font-mono bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded">{p.type}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="font-mono text-sm font-bold text-zinc-200 mb-2 group-hover:text-emerald-300 transition-colors">{p.name}</p>
              <p className="text-zinc-500 text-xs leading-relaxed mb-4">
                {lang === "pt" ? p.desc_pt : p.desc_en}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono bg-zinc-800 border border-zinc-700 text-zinc-400 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/valb-mig"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm border border-zinc-700 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-400 px-5 py-2.5 rounded-lg transition-all hover:bg-emerald-400/5"
          >
            <Github className="w-4 h-4" />
            ver mais no github
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-sm mb-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">~/portifolio.sh</span>
              </div>
              <p className="text-xs text-zinc-600 font-mono">{text.footer_desc}</p>
            </div>
            <div className="flex gap-3">
              {[
                { icon: Github,    href: "https://github.com/valb-mig",                label: "GitHub"    },
                { icon: Linkedin,  href: "https://www.linkedin.com/in/valb-mig/",      label: "LinkedIn"  },
                { icon: Instagram, href: "https://www.instagram.com/valb.mig/",        label: "Instagram" },
                { icon: MailIcon,  href: "mailto:valb-mig@gmail.com",                  label: "Email"     },
                { icon: Newspaper, href: "https://valbblog.vercel.app/",               label: "Blog"      },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800 rounded-lg">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800/50 flex items-center justify-between">
            <p className="font-mono text-xs text-zinc-600">{text.footer_copy}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
