import Image from 'next/image';
import { ArrowDown, Landmark, MapPin, MessageCircle, Star } from 'lucide-react';
import { CREDIBILITY, HERO, SITE_CONFIG } from '@/config/site-data';

const ICONS = { star: Star, landmark: Landmark, 'map-pin': MapPin } as const;

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[88dvh] flex-col justify-end overflow-hidden px-4 pb-12 pt-24 sm:min-h-[95dvh] sm:px-6 md:justify-center md:pb-16 lg:px-8"
    >
      {/* Imagem 2 em tela cheia (mobile e desktop) */}
      <Image
        src="/images/hero.jpg"
        alt={HERO.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_60%] md:object-[50%_55%]"
      />
      {/* Proteção de leitura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#F5F3EF] from-25% via-[#F5F3EF]/85 via-50% to-transparent to-90% md:bg-gradient-to-r md:from-[#F5F3EF] md:from-30% md:via-[#F5F3EF]/85 md:via-50% md:to-transparent md:to-85%"
      />

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <p
            data-hero
            className="text-[11px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-[#96684A] sm:text-xs"
          >
            {HERO.eyebrow}
          </p>
          <h1 data-hero className="mt-4 font-display text-3xl font-medium leading-[1.06] text-[#191817] sm:text-5xl lg:text-6xl">
            {HERO.titleStart} <em className="italic text-[#96684A]">{HERO.titleEmphasis}</em>{' '}
            {HERO.titleEnd}
          </h1>
          <p data-hero className="mt-5 max-w-xl text-base leading-relaxed text-[#191817]/80 sm:text-lg">
            {HERO.subheadline}
          </p>

          <div data-hero className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
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
              className="group inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-[#191817] underline-offset-8 hover:underline sm:text-base"
            >
              {HERO.secondaryCta}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          <ul
            data-hero
            className="mt-8 flex flex-col gap-2.5 border-t border-stone-900/[0.12] pt-5 text-sm text-[#191817]/85 sm:flex-row sm:flex-wrap sm:gap-x-6"
          >
            {CREDIBILITY.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <li key={item.label} className="flex items-center gap-2 tabular-nums">
                  <Icon
                    className={`h-4 w-4 shrink-0 text-[#96684A] ${item.icon === 'star' ? 'fill-[#96684A]' : ''}`}
                    aria-hidden="true"
                  />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
