"use client";

import { useEffect, useState } from "react";
import {
  Terminal, Github, Linkedin, Instagram, Newspaper,
  Check, MapPin, Clock, ArrowLeft,
  MessageCircle, Flame, Zap,
} from "lucide-react";

const WPP = process.env.NEXT_PUBLIC_WPP ?? "";

function wpp(msg: string) {
  return `https://wa.me/${WPP}?text=${encodeURIComponent(msg)}`;
}

/* ── PROMO COUNTDOWN ── */

/** Tempo restante até a próxima meia-noite local. A promo "reseta" todo dia. */
function usePromoCountdown() {
  const [left, setLeft] = useState<{ h: string; m: string; s: string } | null>(null);

  useEffect(() => {
    function tick() {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      const diff = Math.max(0, end.getTime() - now.getTime());
      const total = Math.floor(diff / 1000);
      setLeft({
        h: String(Math.floor(total / 3600)).padStart(2, "0"),
        m: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
        s: String(total % 60).padStart(2, "0"),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return left;
}

function CountdownDigits({ compact = false }: { compact?: boolean }) {
  const left = usePromoCountdown();
  const box = compact
    ? "bg-zinc-950/70 border border-amber-400/30 text-amber-300 font-mono font-bold text-sm px-1.5 py-0.5 rounded-md tabular-nums"
    : "bg-zinc-950/70 border border-amber-400/30 text-amber-300 font-mono font-bold text-base px-2 py-1 rounded-md tabular-nums";

  if (!left) {
    return (
      <span className="flex items-center gap-1">
        <span className={box}>--</span>
        <span className="text-amber-400/60">:</span>
        <span className={box}>--</span>
        <span className="text-amber-400/60">:</span>
        <span className={box}>--</span>
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1">
      <span className={box}>{left.h}</span>
      <span className="text-amber-400/60">:</span>
      <span className={box}>{left.m}</span>
      <span className="text-amber-400/60">:</span>
      <span className={box}>{left.s}</span>
    </span>
  );
}

function PromoBanner() {
  return (
    <a
      href={wpp("Olá, quero a promoção de Landing Page por R$ 50!")}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-amber-400/40 bg-gradient-to-r from-amber-500/[0.14] via-amber-400/[0.06] to-transparent px-5 py-4 transition-all hover:border-amber-400/70"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(251,191,36,0.16),transparent_65%)] pointer-events-none" />
      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Flame className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-sans font-extrabold text-sm sm:text-base text-zinc-100 leading-snug">
              Promoção relâmpago: Landing Page por{" "}
              <span className="text-amber-300">R$ 50</span>{" "}
              <span className="text-zinc-500 font-normal line-through text-xs sm:text-sm">R$ 350</span>
            </p>
            <p className="text-zinc-400 text-xs mt-1">
              Vagas limitadas · oferta encerra em
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 pl-8 sm:pl-0">
          <CountdownDigits compact />
          <span className="hidden sm:inline-flex items-center gap-1.5 font-sans font-bold text-xs bg-amber-400 group-hover:bg-amber-300 text-zinc-950 px-3 py-2 rounded-lg transition-colors whitespace-nowrap">
            <Zap className="w-3.5 h-3.5" />
            garantir
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── MOCKUPS ── */

function WppMockup() {
  return (
    <div className="bg-zinc-950 rounded-lg overflow-hidden mb-5 border border-zinc-800">
      <div className="bg-[#075e54] px-3 py-2 flex items-center gap-2 -mx-0">
        <div className="w-5 h-5 rounded-full bg-[#25d366] flex-shrink-0" />
        <span className="text-[11px] text-white font-medium">Atendimento Automático</span>
      </div>
      <div className="p-3 flex flex-col gap-1.5">
        <div className="self-end bg-[#005c4b] text-[10px] text-[#e5f6df] px-2.5 py-1.5 rounded-xl rounded-tr-sm max-w-[80%] leading-snug">
          Olá, quero agendar
        </div>
        <div className="self-start bg-[#1f2c34] text-[10px] text-[#c9d3d8] px-2.5 py-1.5 rounded-xl rounded-tl-sm max-w-[80%] leading-snug">
          Oi! 😊 Qual serviço você quer agendar?
        </div>
        <div className="self-end bg-[#005c4b] text-[10px] text-[#e5f6df] px-2.5 py-1.5 rounded-xl rounded-tr-sm max-w-[80%] leading-snug">
          Corte de cabelo
        </div>
        <div className="self-start bg-[#1f2c34] text-[10px] text-[#c9d3d8] px-2.5 py-1.5 rounded-xl rounded-tl-sm max-w-[80%] leading-snug">
          Perfeito! Temos horários amanhã às 14h 📅
        </div>
      </div>
    </div>
  );
}

function BrowserMockup() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden mb-5 border border-zinc-800">
      <div className="bg-zinc-800 px-2.5 py-1.5 flex items-center gap-1.5">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="w-2 h-2 rounded-full bg-amber-400/60" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
        </div>
        <div className="flex-1 bg-zinc-950/60 rounded h-3.5 opacity-50 mx-1" />
      </div>
      <div className="p-3 space-y-2">
        <div className="bg-gradient-to-r from-emerald-400/20 via-emerald-400/10 to-transparent h-2 rounded-sm w-3/4" />
        <div className="h-1.5 bg-white/[0.08] rounded-sm w-4/5" />
        <div className="h-1.5 bg-white/[0.08] rounded-sm w-1/2" />
        <div className="h-1 bg-white/[0.04] rounded-sm" />
        <div className="h-1 bg-white/[0.04] rounded-sm w-4/5" />
        <div className="flex gap-1.5 pt-1">
          <div className="bg-emerald-400/70 rounded h-4 w-16" />
          <div className="border border-zinc-600/60 rounded h-4 w-16" />
        </div>
      </div>
    </div>
  );
}

function CatalogMockup() {
  const gradients = [
    "from-[#1e3a4a] to-[#0d2030]",
    "from-[#2a1f3d] to-[#1a0f2e]",
    "from-[#1a2e20] to-[#0d1f14]",
  ];
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden mb-5 border border-zinc-800">
      <div className="p-3">
        <div className="flex justify-between items-center mb-2.5">
          <div className="h-2.5 w-14 bg-white/[0.12] rounded" />
          <div className="flex gap-1">
            <span className="h-1.5 w-5 bg-white/[0.08] rounded" />
            <span className="h-1.5 w-5 bg-white/[0.08] rounded" />
            <span className="h-1.5 w-5 bg-white/[0.08] rounded" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {gradients.map((g, i) => (
            <div key={i} className="bg-zinc-800 rounded-md p-1.5 border border-white/[0.05]">
              <div className={`h-7 rounded-sm mb-1.5 bg-gradient-to-br ${g}`} />
              <div className="h-1 bg-white/[0.10] rounded mb-1" />
              <div className="h-1.5 w-2/5 bg-emerald-400/50 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden mb-5 border border-zinc-800">
      <div className="bg-zinc-800 px-2.5 py-1.5 flex items-center gap-1.5">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="w-2 h-2 rounded-full bg-amber-400/60" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
        </div>
        <div className="flex-1 bg-zinc-950/60 rounded h-3.5 opacity-50 mx-1" />
      </div>
      <div className="p-3">
        <div className="grid grid-cols-2 gap-1.5 mb-2.5">
          <div className="bg-emerald-400/[0.08] border border-emerald-400/20 rounded-md p-2">
            <div className="text-[11px] text-emerald-400 font-bold leading-none mb-1">32</div>
            <div className="h-1 bg-white/[0.06] rounded" />
          </div>
          <div className="bg-violet-400/[0.08] border border-violet-400/20 rounded-md p-2">
            <div className="text-[11px] text-violet-400 font-bold leading-none mb-1">18</div>
            <div className="h-1 bg-white/[0.06] rounded" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 bg-white/[0.08] rounded w-4/5" />
          <div className="h-1.5 bg-white/[0.08] rounded w-1/2" />
          <div className="h-1.5 bg-emerald-400/[0.12] rounded w-2/3" />
        </div>
      </div>
    </div>
  );
}

/* ── SERVICES DATA ── */

type Service = {
  badge: { label: string; cls: string };
  title: string;
  desc: string;
  priceFrom: string;
  price: string;
  pricePeriod?: string;
  includes: string[];
  featured: boolean;
  wppMsg: string;
  outline: boolean;
  Mockup?: () => React.JSX.Element;
  /** Quando presente, o card vira o card de promoção (destaque âmbar + contador). */
  promo?: { oldPrice: string; note: string };
};

const services: Service[] = [
  {
    badge: { label: "🔥 PROMO 24H",      cls: "bg-amber-400/15 border-amber-400/50 text-amber-300"  },
    title: "Landing Page que Converte",
    desc:  "Uma página focada em fazer o cliente entrar em contato ou comprar. Rápida, bonita e que funciona no celular.",
    priceFrom: "hoje por",
    price: "R$ 50",
    includes: [
      "Design com a sua identidade visual",
      "100% responsiva celular e desktop",
      "Formulário de contato + botão WhatsApp",
      "Entrega em até 7 dias úteis",
    ],
    featured: true,
    wppMsg: "Olá, quero a promoção de Landing Page por R$ 50!",
    outline: false,
    Mockup: BrowserMockup,
    promo: { oldPrice: "R$ 350", note: "oferta encerra em" },
  },
  {
    badge: { label: "🔥 Mais pedido",   cls: "bg-amber-400/10 border-amber-400/30 text-amber-400"  },
    title: "Bot de Atendimento no WhatsApp",
    desc:  "Seu WhatsApp respondendo clientes automaticamente, 24h mesmo quando você está atendendo ou dormindo.",
    priceFrom: "valor fixo",
    price: "R$ 350",
    pricePeriod: "+ manutenção opcional",
    includes: [
      "Respostas automáticas inteligentes",
      "Captura do nome e interesse do cliente",
      "Integração com agenda (opcional)",
      "Entrega em até 5 dias úteis",
    ],
    featured: true,
    wppMsg: "Olá, quero o Bot de WhatsApp!",
    outline: false,
    Mockup: WppMockup,
  },
  {
    badge: { label: "📦 Catálogo",       cls: "bg-violet-400/10 border-violet-400/30 text-violet-400" },
    title: "Site Catálogo / Institucional",
    desc:  "Apresente seus produtos ou serviços com profissionalismo. Seu cartão de visitas digital, disponível 24h.",
    priceFrom: "a partir de",
    price: "R$ 700",
    pricePeriod: "valor final após briefing",
    includes: [
      "Até 5 seções / páginas",
      "Galeria de produtos com fotos",
      "Contato direto via WhatsApp",
      "SEO básico para aparecer no Google",
    ],
    featured: false,
    wppMsg: "Olá, quero um Site Catálogo!",
    outline: true,
    Mockup: CatalogMockup,
  },
  {
    badge: { label: "⚙️ Sistema",        cls: "bg-violet-400/10 border-violet-400/30 text-violet-400" },
    title: "Aplicação Web (Sistema)",
    desc:  "Sistema completo para o seu negócio agendamento, cadastro de clientes, painel de controle. Funciona como um app no celular.",
    priceFrom: "estimativa",
    price: "R$ 900–2.000",
    pricePeriod: "orçamento após briefing",
    includes: [
      "Login e área administrativa",
      "Banco de dados em nuvem",
      "Funciona no celular como app",
      "Orçamento detalhado incluído",
    ],
    featured: false,
    wppMsg: "Olá, quero uma aplicação web!",
    outline: true,
    Mockup: DashboardMockup,
  },
  {
    badge: { label: "🛠 Sob demanda",    cls: "bg-red-400/10 border-red-400/30 text-red-400"        },
    title: "Resolver Problema Pontual",
    desc:  "Bug crítico, integração quebrada, feature urgente me manda o problema e eu resolvo. Sem burocracia, cobrado por entrega.",
    priceFrom: "cobrado por",
    price: "entrega",
    pricePeriod: "orçamento antes de começar",
    includes: [
      "Diagnóstico no mesmo dia",
      "Sites, bots, sistemas em geral",
      "Orçamento antes de começar",
      "Pago via Pix, sem contrato longo",
    ],
    featured: false,
    wppMsg: "Olá, preciso resolver um problema!",
    outline: true,
  },
  {
    badge: { label: "🔍 Consultoria",    cls: "bg-red-400/10 border-red-400/30 text-red-400"        },
    title: "Análise de Sistema / Consultoria",
    desc:  "Negócio digital com problema? Analiso o que está errado e entrego um plano claro do que fazer sem jargão técnico.",
    priceFrom: "",
    price: "R$ 80",
    pricePeriod: "/ hora",
    includes: [
      "Revisão completa do que você tem",
      "Identificação do que está travando",
      "Plano de ação em linguagem simples",
      "Reunião de alinhamento inclusa",
    ],
    featured: false,
    wppMsg: "Olá, quero agendar uma consultoria!",
    outline: true,
  },
];

export default function Servicos() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-center">
          <a href="/" className="flex items-center gap-2 font-mono text-sm">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">~/</span>
            <span className="text-zinc-200 font-semibold">catalogo.sh</span>
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-6">
            <PromoBanner />

            <h1 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-tight">
              Seu negócio merece um site que{" "}
              <span className="text-emerald-400">vende de verdade</span>
            </h1>

            <p className="text-zinc-400 leading-relaxed text-base max-w-md">
              Olá eu sou Ivalber Souza, desenvolvedor com +5 anos de experiência. Crio sites, bots e sistemas para pequenos negócios que querem crescer online.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href={wpp("Olá, vi seus serviços e quero um orçamento!")}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-sans font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/20">
                <MessageCircle className="w-4 h-4" />
                pedir orçamento grátis
              </a>
              <a href="/" className="flex items-center gap-2 font-mono text-sm border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 px-4 py-2.5 rounded-xl transition-all">
                <ArrowLeft className="w-4 h-4" />
                ver portfólio
              </a>
            </div>

            <div className="flex gap-8 pt-4 border-t border-zinc-800">
              {[
                { num: "5+",         label: "anos de experiência" },
                { num: "Sites, Apps & Bots", label: "soluções que entrego" },
                { num: "24h",        label: "tempo de resposta"   },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="font-sans font-extrabold text-xl text-zinc-100 leading-none">{num}</p>
                  <p className="text-zinc-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — avatar card */}
          <div className="flex justify-center">
            <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl p-6 w-full max-w-xs relative overflow-hidden">
              <div className="flex flex-col items-center gap-3 mb-5">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://github.com/valb-mig.png"
                      alt="Ivalber Souza"
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/img/me.png"; }}
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-zinc-950 text-xs font-mono font-bold px-2 py-0.5 rounded-lg shadow">
                    @valb-mig
                  </span>
                </div>

                <div className="text-center mt-2">
                  <p className="font-sans font-bold text-zinc-100 text-base">Ivalber Souza</p>
                  <p className="text-zinc-500 text-xs mt-0.5 flex items-center gap-1 justify-center">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    Recife, PE · Freelancer
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {[
                  { icon: Check, text: "Entrega no prazo combinado"     },
                  { icon: Check, text: "Transparência no processo"     },
                  { icon: Clock, text: "Resposta em até 24h"             },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-zinc-400">
                    <Icon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    {text}
                  </div>
                ))}
              </div>

              <a href={wpp("Olá, vi seus serviços!")}
                target="_blank" rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans font-bold text-sm w-full py-2.5 rounded-xl transition-all">
                <MessageCircle className="w-4 h-4" />
                falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="max-w-6xl mx-auto px-4 pb-20">

        <div className="mb-8">
          <h2 className="font-sans font-extrabold text-3xl tracking-tight mb-1">Escolha o serviço ideal para você</h2>
          <p className="text-zinc-400 text-sm">Do mais simples ao mais completo com preços claros e entrega garantida.</p>
          <p className="text-amber-400/90 text-sm mt-2 flex items-center gap-1.5">
            <Flame className="w-4 h-4 flex-shrink-0" />
            Landing Page de <span className="line-through text-zinc-500">R$ 350</span> por <span className="font-bold text-amber-300">R$ 50</span> só enquanto o contador estiver rodando.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc) => (
            <div key={svc.title}
              className={`relative flex flex-col bg-zinc-900 border rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl ${
                svc.promo
                  ? "border-amber-400/50 hover:border-amber-400/80 ring-2 ring-amber-400/20 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20"
                  : svc.featured
                    ? "border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-black/30"
                    : "border-zinc-800 hover:border-zinc-600 hover:shadow-black/30"
              }`}>

              {svc.promo && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-zinc-950 font-sans font-extrabold text-[10px] uppercase tracking-wide px-3 py-1 rounded-full shadow-lg shadow-amber-500/30">
                  oferta por tempo limitado
                </span>
              )}

              {svc.Mockup && <svc.Mockup />}

              <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border w-fit mb-3 ${svc.badge.cls}`}>
                {svc.badge.label}
              </span>

              <p className="font-sans font-bold text-zinc-100 text-base mb-2">{svc.title}</p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4 flex-1">{svc.desc}</p>

              {svc.promo ? (
                <div className="bg-amber-400/[0.08] border border-amber-400/25 rounded-xl px-4 py-3 mb-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-zinc-500 text-xs line-through">de {svc.promo.oldPrice}</span>
                    <span className="text-amber-400/80 text-xs">{svc.priceFrom}</span>
                    <span className="font-sans font-extrabold text-3xl leading-none text-amber-300">{svc.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-amber-400/15 flex-wrap">
                    <span className="text-zinc-400 text-xs">{svc.promo.note}</span>
                    <CountdownDigits compact />
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-800/60 rounded-xl px-4 py-3 mb-4 flex items-baseline gap-2 flex-wrap">
                  {svc.priceFrom && <span className="text-zinc-500 text-xs">{svc.priceFrom}</span>}
                  <span className={`font-sans font-extrabold text-2xl leading-none ${svc.featured ? "text-emerald-400" : "text-zinc-100"}`}>{svc.price}</span>
                  <span className="text-zinc-500 text-xs">{svc.pricePeriod}</span>
                </div>
              )}

              <ul className="space-y-1.5 mb-5">
                {svc.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href={wpp(svc.wppMsg)} target="_blank" rel="noreferrer"
                className={`flex items-center justify-center gap-2 font-sans font-bold text-sm py-2.5 rounded-xl transition-all mt-auto ${
                  svc.promo
                    ? "bg-amber-400 hover:bg-amber-300 text-zinc-950 shadow-lg shadow-amber-500/20"
                    : svc.outline
                      ? "border border-zinc-700 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 hover:bg-emerald-400/5"
                      : "bg-emerald-500 hover:bg-emerald-400 text-zinc-950"
                }`}>
                {svc.promo ? <Zap className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
                {svc.promo ? "garantir promoção" : svc.outline ? "solicitar orçamento" : "quero esse serviço"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl px-8 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.06),transparent_70%)] pointer-events-none" />
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight mb-3">
            Pronto para colocar seu negócio{" "}
            <span className="text-emerald-400">online de verdade?</span>
          </h2>
          <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">
            Me conta o que você precisa pelo WhatsApp. A gente conversa, eu orço e você decide sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={wpp("Olá Ivalber, vi seus serviços e quero conversar!")}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans font-bold text-base px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/20">
              <MessageCircle className="w-5 h-5" />
              falar pelo WhatsApp agora
            </a>
            <a href="mailto:valb-mig@gmail.com"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 font-sans text-sm px-5 py-3 rounded-xl transition-all">
              ✉️ ou manda um e-mail
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm mb-1">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">~/portifolio.sh</span>
            </div>
            <p className="text-xs text-zinc-600 font-mono">Serviços de Ivalber Souza</p>
          </div>
          <div className="flex gap-3">
            {[
              { Icon: Github,    href: "https://github.com/valb-mig"           },
              { Icon: Linkedin,  href: "https://www.linkedin.com/in/valb-mig/" },
              { Icon: Instagram, href: "https://www.instagram.com/valb.mig/"   },
              { Icon: Newspaper, href: "https://valbblog.vercel.app/"           },
            ].map(({ Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800 rounded-lg">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-6 border-t border-zinc-800/50 pt-4">
          <p className="font-mono text-xs text-zinc-600">© 2026 Ivalber Souza</p>
        </div>
      </footer>

    </div>
  );
}
