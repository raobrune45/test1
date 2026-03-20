"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex gap-0.5 text-sm bg-surface rounded-lg p-0.5">
      <button
        onClick={() => switchLocale("ru")}
        className={`px-3 py-1.5 rounded-md transition-all duration-300 ${
          locale === "ru"
            ? "bg-accent text-deep font-semibold shadow-sm"
            : "text-muted hover:text-cream"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1.5 rounded-md transition-all duration-300 ${
          locale === "en"
            ? "bg-accent text-deep font-semibold shadow-sm"
            : "text-muted hover:text-cream"
        }`}
      >
        EN
      </button>
    </div>
  );
}
