"use client";

import { useTranslations } from "next-intl";

type LanguageItem = {
  name: string;
  level: string;
};

export default function Languages() {
  const t = useTranslations("languages");
  const items = (t.raw("items") as Array<LanguageItem>) ?? [];

  return (
    <section id="languages" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">
          {t("title")}
        </h2>
      </div>
      <ul className="group/list">
        {items.map((item) => (
          <li key={item.name} className="mb-8">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
                {item.level}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-lightest-slate">
                  <span className="inline-flex items-baseline font-medium leading-tight text-lightest-slate group-hover:text-teal transition-colors text-base">
                    {item.name}
                  </span>
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
