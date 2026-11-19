'use client';

import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/config/site-data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-stone-900/[0.08] bg-[#F5F3EF]/90 backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-[#F5F3EF]/85 via-[#F5F3EF]/40 to-transparent'
        }`}
      >
        <nav
          aria-label="Principal"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
        >
          <a href="#topo" className="flex flex-col leading-none" aria-label={`${SITE_CONFIG.brandName} - início`}>
            <span className="font-display text-xl font-semibold tracking-[0.12em] text-[#191817] sm:text-2xl">
              {SITE_CONFIG.shortName}
            </span>
            <span className="mt-1.5 flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#66625D]">
              <span aria-hidden="true" className="h-px w-5 bg-[#96684A]" />
              {SITE_CONFIG.tagline}
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 text-sm font-medium text-[#191817]"
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#96684A] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 bg-[#96684A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7A5238] lg:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-[#191817] lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[70] flex flex-col bg-[#F5F3EF] px-4 pb-8 pt-4 transition-all duration-500 sm:px-6 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'
        }`}
      >
        <div className="flex h-12 items-center justify-between">
          <span className="font-display text-xl font-semibold tracking-[0.12em]">
            {SITE_CONFIG.shortName}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="mt-8 flex flex-1 flex-col">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} className="border-b border-stone-900/[0.08]">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex min-h-14 items-baseline gap-4 py-4 font-display text-3xl text-[#191817]"
              >
                <span className="text-xs tabular-nums text-[#96684A]">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          className="mt-6 inline-flex min-h-14 items-center justify-center gap-2 bg-[#96684A] px-6 text-base font-semibold text-white hover:bg-[#7A5238]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Iniciar conversa no WhatsApp
        </a>
      </div>
    </>
  );
}
