import { Award, BookOpen, Trophy } from 'lucide-react';
import { PRESS_SECTION } from '@/config/site-data';

export function PressAwardsSection() {
  const p = PRESS_SECTION;
  return (
    <section id="premiacoes" className="bg-[#191817] px-4 py-14 text-[#F5F3EF] sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C79A7B]">{p.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] sm:text-5xl">{p.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F5F3EF]/70 sm:text-lg">{p.intro}</p>
        </div>

        <div data-reveal-group className="mt-12 grid gap-px border border-[#F5F3EF]/10 bg-[#F5F3EF]/10 lg:grid-cols-3">
          <article className="bg-[#191817] p-6 sm:p-8">
            <Award className="h-6 w-6 text-[#C79A7B]" aria-hidden="true" />
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#F5F3EF]/60">{p.casacor.label}</p>
            <h3 className="mt-3 font-display text-2xl leading-[1.1] sm:text-3xl">{p.casacor.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#F5F3EF]/70">{p.casacor.text}</p>
          </article>

          <article className="bg-[#191817] p-6 sm:p-8">
            <Trophy className="h-6 w-6 text-[#C79A7B]" aria-hidden="true" />
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#F5F3EF]/60">{p.contest.label}</p>
            <ul className="mt-4 space-y-5">
              {p.contest.results.map((r) => (
                <li key={r.place} className="flex items-baseline gap-4">
                  <span className="font-display text-5xl italic leading-none text-[#C79A7B] tabular-nums">{r.place}</span>
                  <span className="text-base leading-snug">
                    <span className="block text-xs uppercase tracking-[0.15em] text-[#F5F3EF]/60">Lugar</span>
                    {r.category}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[#191817] p-6 sm:p-8">
            <BookOpen className="h-6 w-6 text-[#C79A7B]" aria-hidden="true" />
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#F5F3EF]/60">{p.publications.label}</p>
            <ul className="mt-4 divide-y divide-[#F5F3EF]/10">
              {p.publications.items.map((item) => (
                <li key={item} className="py-3 font-display text-2xl leading-tight first:pt-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
