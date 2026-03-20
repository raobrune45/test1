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
        className={`px-2.5 py-1 rounded font-medium transition-colors ${
          locale === "ru"
            ? "bg-brand text-white"
            : "text-muted hover:text-text-primary hover:bg-surface"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2.5 py-1 rounded font-medium transition-colors ${
          locale === "en"
            ? "bg-brand text-white"
            : "text-muted hover:text-text-primary hover:bg-surface"
        }`}
      >
        EN
      </button>
    </div>
  );
}
