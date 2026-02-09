"use client";

import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Array<{
    name: string;
    items: string[];
  }>;

  return (
    <section id="skills" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">
          {t("title")}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-semibold text-lightest-slate mb-3">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item}>
                  <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
