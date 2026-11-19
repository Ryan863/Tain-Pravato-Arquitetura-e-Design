import { MessageCircle } from 'lucide-react';
import { CLOSING, SITE_CONFIG } from '@/config/site-data';

export function ClosingSection() {
  return (
    <section className="bg-[#EAE6DF] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div data-reveal className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-medium leading-[1.06] sm:text-5xl lg:text-6xl">
          Vamos projetar um espaço <em className="italic text-[#96684A]">atemporal</em> pensado exclusivamente para você
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#66625D] sm:text-lg">{CLOSING.text}</p>
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 bg-[#96684A] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#7A5238]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {CLOSING.cta}
        </a>
      </div>
    </section>
  );
}
