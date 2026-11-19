'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function LandingPageClient({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Hero: timeline de entrada
        const heroItems = gsap.utils.toArray<HTMLElement>('[data-hero]');
        if (heroItems.length) {
          gsap.from(heroItems, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          });
        }

        // Elementos isolados
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          });
        });

        // Grids: filhos diretos em cascata
        gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
          gsap.from(Array.from(group.children), {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
            scrollTrigger: { trigger: group, start: 'top 90%', once: true },
          });
        });

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener('load', refresh, { once: true });
        const t = window.setTimeout(refresh, 400);
        return () => {
          window.removeEventListener('load', refresh);
          window.clearTimeout(t);
        };
      });

      return () => mm.revert();
    },
    { scope: mainRef },
  );

  return (
    <div ref={mainRef} className="relative overflow-x-clip">
      {children}
    </div>
  );
}
