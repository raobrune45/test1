"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "cases", href: "/cases" },
  { key: "blog", href: "/blog" },
  { key: "contacts", href: "/contacts" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group"
          >
            {/* Leaf icon */}
            <svg
              className="w-8 h-8 text-accent transition-transform group-hover:rotate-12"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M16 4 C24 8 28 18 16 28 C4 18 8 8 16 4Z" />
              <path d="M16 10 L16 24" />
              <path d="M12 16 L16 14" />
              <path d="M20 18 L16 16" />
            </svg>
            <span className="font-serif text-xl text-cream tracking-wide">
              ГумиТехЛаб
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-sm text-muted px-3 py-2 rounded-lg hover:text-cream hover:bg-surface-light/50 transition-all duration-300"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-border/50">
              <LanguageSwitcher />
            </div>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream p-2 rounded-lg hover:bg-surface-light/50 transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 7h16M4 12h12M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-1 border-t border-border/30 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-muted hover:text-cream hover:bg-surface-light/50 px-3 py-2.5 rounded-lg transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <LanguageSwitcher />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
