import { NAV_LINKS, SITE_CONFIG } from '@/config/site-data';

export function FooterSection() {
  return (
    <footer className="bg-[#191817] px-4 py-12 text-[#F5F3EF] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-semibold tracking-[0.12em]">{SITE_CONFIG.shortName}</p>
          <p className="mt-1.5 flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#F5F3EF]/60">
            <span aria-hidden="true" className="h-px w-5 bg-[#C79A7B]" />
            {SITE_CONFIG.tagline}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F5F3EF]/65">
            Arquitetura contemporânea e design de interiores sob medida em Chapecó - SC e São Paulo.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-11 items-center text-sm text-[#F5F3EF]/80 hover:text-[#C79A7B]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-1 text-sm text-[#F5F3EF]/80 md:col-span-4">
          <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center tabular-nums hover:text-[#C79A7B]">
            {SITE_CONFIG.phoneDisplay}
          </a>
          <a href={`mailto:${SITE_CONFIG.email}`} className="flex min-h-11 items-center break-all hover:text-[#C79A7B]">
            {SITE_CONFIG.email}
          </a>
          <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center break-all hover:text-[#C79A7B]">
            {SITE_CONFIG.instagramHandle}
          </a>
          <p className="pt-2 text-[#F5F3EF]/60">{SITE_CONFIG.address.full}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-[#F5F3EF]/10 pt-6 text-xs text-[#F5F3EF]/50 sm:flex-row sm:justify-between">
        <p>
          © {SITE_CONFIG.foundedYear}–2026 {SITE_CONFIG.legalName}
        </p>
        <p className="tabular-nums">CNPJ {SITE_CONFIG.cnpj}</p>
      </div>
    </footer>
  );
}
