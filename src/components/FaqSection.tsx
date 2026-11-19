'use client';

import { useId, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQ_ITEMS, FAQ_SECTION } from '@/config/site-data';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-[#EAE6DF] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#96684A]">{FAQ_SECTION.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] sm:text-4xl lg:text-5xl">{FAQ_SECTION.title}</h2>
        </div>

        <div data-reveal className="border-t border-stone-900/[0.15] lg:col-span-8">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <div key={item.question} className="border-b border-stone-900/[0.15]">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-xs tabular-nums text-[#96684A]">0{i + 1}</span>
                      <span className="font-display text-xl leading-snug text-[#191817] sm:text-2xl">{item.question}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border border-stone-900/[0.15] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    >
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} data-open={open} className="accordion-content">
                  <div className="accordion-inner">
                    <p className="pb-6 pl-8 pr-12 text-sm leading-relaxed text-[#66625D] sm:pl-10 sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
