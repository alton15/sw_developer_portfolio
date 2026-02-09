"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-teal bg-teal/10"
            : "text-slate hover:text-lightest-slate"
        }`}
      >
        EN
      </button>
      <span className="text-slate">|</span>
      <button
        onClick={() => switchLocale("ko")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "ko"
            ? "text-teal bg-teal/10"
            : "text-slate hover:text-lightest-slate"
        }`}
      >
        한국어
      </button>
    </div>
  );
}
