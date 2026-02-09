"use client";

import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as Array<{
    name: string;
    period: string;
    description: string;
    highlights: string[];
    tech: string[];
  }>;

  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-lightest-slate lg:sr-only">
          {t("title")}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {items.map((item, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-navy-light/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
                  {item.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-lightest-slate">
                    <span className="inline-flex items-baseline font-medium leading-tight text-lightest-slate group-hover:text-teal transition-colors text-base">
                      {item.name}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate">
                    {item.description}
                  </p>
                  <ul className="mt-2 text-sm leading-normal text-slate">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 mb-1">
                        <span className="text-teal mt-1.5 text-[8px]">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies used">
                    {item.tech.map((tech) => (
                      <li key={tech}>
                        <div className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
