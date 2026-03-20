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
    <div className="flex gap-0.5 text-sm">
      <button
        onClick={() => switchLocale("ru")}
        className={`px-2.5 py-1 rounded-cdr-softer font-medium transition-colors ${
          locale === "ru"
            ? "bg-cdr-btn-primary-bg text-cdr-btn-primary-text"
            : "text-cdr-warm-700 hover:text-cdr-text-emphasis hover:bg-cdr-warm-100"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2.5 py-1 rounded-cdr-softer font-medium transition-colors ${
          locale === "en"
            ? "bg-cdr-btn-primary-bg text-cdr-btn-primary-text"
            : "text-cdr-warm-700 hover:text-cdr-text-emphasis hover:bg-cdr-warm-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
