import { ArrowUpRight, Quote } from 'lucide-react';
import { REVIEWS, SITE_CONFIG } from '@/config/site-data';

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#96684A]">{REVIEWS.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] sm:text-5xl">{REVIEWS.title}</h2>
          </div>
          <p className="inline-flex self-start border border-stone-900/[0.08] bg-white px-4 py-3 text-sm font-semibold tabular-nums">
            <span className="text-[#96684A]">{REVIEWS.badge}</span>
          </p>
        </div>

        <div data-reveal-group className="mt-12 grid gap-px border border-stone-900/[0.08] bg-stone-900/[0.08] md:grid-cols-2">
          {REVIEWS.items.map((r) => (
            <figure key={r.quote} className="flex flex-col bg-white p-6 sm:p-8 lg:p-10">
              <Quote className="h-7 w-7 text-[#96684A]" aria-hidden="true" />
              <p className="sr-only">Avaliação 5 de 5 estrelas no Google</p>
              <blockquote className="mt-5 font-display text-2xl leading-[1.25] text-[#191817] sm:text-3xl">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#66625D]">
                <span aria-hidden="true" className="text-[#96684A]">★★★★★</span>
                {r.context} · Google
              </figcaption>
            </figure>
          ))}
        </div>

        <div data-reveal className="mt-8 flex flex-col gap-5 border border-stone-900/[0.08] bg-[#EAE6DF] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[#66625D] sm:text-base">{REVIEWS.portfolioInvite}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#191817] px-5 py-3 text-sm font-semibold text-[#F5F3EF] transition-colors hover:bg-[#96684A]"
            >
              {SITE_CONFIG.instagramHandle}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#191817] px-5 py-3 text-sm font-semibold text-[#191817] transition-colors hover:bg-[#191817] hover:text-[#F5F3EF]"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
