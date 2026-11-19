import Image from 'next/image';
import { ArrowDown, Award, MapPin, MessageCircle, Star, Trophy } from 'lucide-react';
import { CREDIBILITY, HERO, SITE_CONFIG } from '@/config/site-data';

const ICONS = { star: Star, award: Award, trophy: Trophy, 'map-pin': MapPin } as const;

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[88dvh] flex-col justify-end overflow-hidden bg-[#191817] text-[#F5F3EF] sm:min-h-[95dvh] lg:min-h-[100dvh]"
    >
      {/* Foto vertical no celular */}
      <Image
        src="/images/hero.jpg"
        alt={HERO.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-top md:hidden"
      />
      {/* Foto horizontal no desktop/tablet */}
      <Image
        src="/images/residencia.jpg"
        alt={HERO.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-30 hidden object-cover object-[70%_50%] md:block"
      />

      {/* Camadas de leitura cinematográficas (escuras) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t from-[#191817] from-10% via-[#191817]/65 via-50% to-[#191817]/10 md:bg-gradient-to-r md:from-[#191817]/95 md:from-20% md:via-[#191817]/65 md:via-45% md:to-[#191817]/5"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#191817]/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 hidden h-48 bg-gradient-to-t from-[#191817]/90 to-transparent md:block"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-8 pt-24 sm:px-6 md:justify-center md:pb-6 lg:px-8">
        <div className="max-w-2xl">
          <p
            data-hero
            className="text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-[#D9B79C] sm:text-xs"
          >
            {HERO.eyebrow}
          </p>
          <h1
            data-hero
            className="mt-4 font-display text-3xl font-medium leading-[1.06] text-[#F5F3EF] sm:text-5xl lg:text-6xl"
          >
            {HERO.titleStart}{' '}
            <em className="italic text-[#D9B79C]">
              {HERO.titleEmphasis} {HERO.titleEnd}
            </em>
          </h1>
          <span data-hero className="mt-6 block h-px w-12 bg-[#D9B79C]/60" aria-hidden="true" />
          <p data-hero className="mt-5 max-w-xl text-base leading-relaxed text-[#F5F3EF]/80 sm:text-lg">
            {HERO.subheadline}
          </p>

          <div data-hero className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#96684A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7A5238] sm:text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {HERO.primaryCta}
            </a>
            <a
              href="#atuacao"
              className="group inline-flex min-h-12 items-center justify-center gap-3 px-2 text-sm font-semibold text-[#F5F3EF] sm:text-base"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F3EF]/40 transition-colors group-hover:bg-[#F5F3EF]/10">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </span>
              {HERO.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Barra de credibilidade em estilo de especificações */}
      <div data-hero className="relative mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
        <ul className="grid grid-cols-2 gap-px border-t border-[#F5F3EF]/15 pt-5 lg:grid-cols-4 lg:gap-0">
          {CREDIBILITY.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li
                key={item.label}
                className="flex items-center gap-3 py-3 pr-3 lg:border-r lg:border-[#F5F3EF]/15 lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <Icon className="h-6 w-6 shrink-0 text-[#D9B79C]" strokeWidth={1.25} aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-display text-xl leading-none tabular-nums sm:text-3xl">{item.value}</span>
                  <span className="mt-1 block text-[10px] uppercase leading-snug tracking-[0.12em] text-[#F5F3EF]/60 sm:text-[11px]">
                    {item.label}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
