import Image from 'next/image';
import { ABOUT } from '@/config/site-data';

export function AboutSection() {
  const [before, after] = ABOUT.title.split(', com ');
  return (
    <section id="sobre" className="bg-[#EAE6DF] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="relative lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-stone-900/[0.08] lg:aspect-[16/11]">
            <Image
              src="/images/residencia.jpg"
              alt={ABOUT.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <dl className="mt-px grid grid-cols-3 border border-t-0 border-stone-900/[0.08] bg-white">
            {ABOUT.principles.map((item) => (
              <div key={item.label} className="border-r border-stone-900/[0.08] p-3 last:border-r-0 sm:p-5">
                <dt className="font-display text-xl text-[#96684A] tabular-nums sm:text-3xl">{item.number}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-[#66625D] sm:text-xs">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal className="lg:col-span-5 lg:pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#96684A]">{ABOUT.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-[1.06] sm:text-4xl lg:text-5xl">
            {before}, com <em className="italic text-[#96684A]">{after}</em>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#66625D]">
            {ABOUT.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <p className="mt-8 font-display text-2xl italic text-[#191817]">Tainá Pravato</p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#66625D]">Arquiteta e designer</p>
        </div>
      </div>
    </section>
  );
}
