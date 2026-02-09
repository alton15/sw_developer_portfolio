"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useState, useEffect } from "react";

const navItems = ["about", "experience", "projects", "skills"] as const;

export default function Header() {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("about");
        return;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 100) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-lightest-slate sm:text-4xl">
          {t("header.name")}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
          {t("header.role")}
        </h2>
        <p className="mt-4 leading-normal text-slate">
          {t("header.tagline")}
        </p>

        <nav className="nav hidden lg:block mt-16">
          <ul className="w-max">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`group flex items-center py-3 transition-all ${
                    activeSection === item ? "text-lightest-slate" : ""
                  }`}
                >
                  <span
                    className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-lightest-slate ${
                      activeSection === item
                        ? "w-16 bg-lightest-slate"
                        : "w-8 bg-slate"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-lightest-slate ${
                      activeSection === item
                        ? "text-lightest-slate"
                        : "text-slate"
                    }`}
                  >
                    {t(`nav.${item}`)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
          <li>
            <a
              href="https://github.com/alton15"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate hover:text-lightest-slate transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kikang-kim/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate hover:text-lightest-slate transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="mailto:alton6303@gmail.com"
              className="block text-slate hover:text-lightest-slate transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </li>
        </ul>

        <div className="mt-6">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
