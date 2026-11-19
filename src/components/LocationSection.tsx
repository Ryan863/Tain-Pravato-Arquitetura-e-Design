import { Accessibility, Clock, Mail, MapPin, MessageCircle, Navigation, ArrowUpRight } from 'lucide-react';
import { LOCATION, SITE_CONFIG } from '@/config/site-data';

export function LocationSection() {
  return (
    <section id="contato" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#96684A]">{LOCATION.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] sm:text-5xl">{LOCATION.title}</h2>
        </div>

        <div data-reveal-group className="mt-12 grid gap-px border border-stone-900/[0.08] bg-stone-900/[0.08] lg:grid-cols-2">
          <div className="bg-white p-6 sm:p-8 lg:p-10">
            <MapPin className="h-6 w-6 text-[#96684A]" aria-hidden="true" />
            <h3 className="mt-5 font-display text-2xl sm:text-3xl">Escritório no Centro de Chapecó</h3>
            <address className="mt-3 not-italic leading-relaxed text-[#66625D]">{SITE_CONFIG.address.full}</address>
            <p className="mt-5 flex items-start gap-3 border border-stone-900/[0.08] bg-[#F5F3EF] p-4 text-sm text-[#191817]">
              <Accessibility className="mt-0.5 h-5 w-5 shrink-0 text-[#96684A]" aria-hidden="true" />
              {LOCATION.accessibility}
            </p>
            <a
              href={SITE_CONFIG.mapsRouteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center gap-2 bg-[#191817] px-6 py-3 text-sm font-semibold text-[#F5F3EF] transition-colors hover:bg-[#96684A]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              {LOCATION.routeCta}
            </a>

            <div className="mt-10 border-t border-stone-900/[0.08] pt-8">
              <h3 className="flex items-center gap-2 font-display text-2xl">
                <Clock className="h-5 w-5 text-[#96684A]" aria-hidden="true" />
                Horários de atendimento
              </h3>
              <table className="mt-4 w-full text-sm">
                <caption className="sr-only">Horários de atendimento</caption>
                <tbody>
                  {LOCATION.hours.map((h) => (
                    <tr key={h.day} className="border-b border-stone-900/[0.08] last:border-b-0">
                      <th scope="row" className="py-3 pr-4 text-left font-medium">{h.day}</th>
                      <td className="py-3 text-right tabular-nums text-[#66625D]">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col bg-[#191817] p-6 text-[#F5F3EF] sm:p-8 lg:p-10">
            <h3 className="font-display text-2xl sm:text-3xl">Canais diretos</h3>
            <ul className="mt-6 flex-1 divide-y divide-[#F5F3EF]/10">
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-14 items-center justify-between gap-3 py-4"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-[#C79A7B]" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.15em] text-[#F5F3EF]/60">WhatsApp</span>
                      <span className="tabular-nums">{SITE_CONFIG.phoneDisplay}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="group flex min-h-14 items-center justify-between gap-3 py-4">
                  <span className="flex min-w-0 items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-[#C79A7B]" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.15em] text-[#F5F3EF]/60">E-mail</span>
                      <span className="block break-all">{SITE_CONFIG.email}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-14 items-center justify-between gap-3 py-4">
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.15em] text-[#F5F3EF]/60">Instagram</span>
                    <span className="block break-all">{SITE_CONFIG.instagramHandle}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={SITE_CONFIG.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-14 items-center justify-between gap-3 py-4">
                  <span>
                    <span className="block text-xs uppercase tracking-[0.15em] text-[#F5F3EF]/60">LinkedIn</span>
                    <span>Tainá Pravato</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
