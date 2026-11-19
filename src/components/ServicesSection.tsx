import { ArrowUpRight } from 'lucide-react';
import { SERVICES, SERVICES_SECTION, buildWhatsAppLink } from '@/config/site-data';

export function ServicesSection() {
  return (
    <section id="atuacao" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#96684A]">{SERVICES_SECTION.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] sm:text-5xl">{SERVICES_SECTION.title}</h2>
        </div>

        <div data-reveal-group className="mt-12 grid gap-px border border-stone-900/[0.08] bg-stone-900/[0.08] md:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.number} className="flex flex-col bg-white p-6 sm:p-8 lg:p-10">
              <span className="font-display text-5xl italic leading-none text-[#96684A] tabular-nums">{s.number}</span>
              <h3 className="mt-6 font-display text-2xl font-medium leading-[1.1] sm:text-3xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#66625D] sm:text-base">{s.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <li key={h} className="border border-stone-900/[0.08] px-3 py-1.5 text-xs text-[#191817]">
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppLink(s.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Conversar sobre ${s.title} no WhatsApp`}
                className="group mt-8 inline-flex min-h-11 items-center gap-2 self-start border-b border-[#96684A] pb-1 text-sm font-semibold text-[#191817] transition-colors hover:text-[#7A5238]"
              >
                Conversar sobre este serviço
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
