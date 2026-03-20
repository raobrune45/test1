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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 group"
          >
            {/* Leaf mark */}
            <svg
              className="w-7 h-7 text-brand transition-transform group-hover:scale-105"
              viewBox="0 0 28 28"
              fill="currentColor"
            >
              <path d="M14 2C14 2 6 8 6 16c0 5.523 3.582 10 8 10s8-4.477 8-10c0-8-8-14-8-14zm0 4c3 3.5 5 7.5 5 10 0 3.314-2.239 6-5 6s-5-2.686-5-6c0-2.5 2-6.5 5-10z" opacity="0.2"/>
              <path d="M14 2C14 2 6 8 6 16c0 5.523 3.582 10 8 10s8-4.477 8-10c0-8-8-14-8-14z"/>
              <path d="M14 10v12" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M11 15l3-2" stroke="white" strokeWidth="1" fill="none"/>
              <path d="M17 17l-3-2" stroke="white" strokeWidth="1" fill="none"/>
            </svg>
            <span className="font-serif text-lg font-semibold text-brand tracking-tight">
              ГумиТехЛаб
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-text-primary px-3 py-2 rounded hover:bg-surface transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-border-light">
              <LanguageSwitcher />
            </div>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-2 rounded hover:bg-surface transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-border-light pt-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-text-primary px-3 py-2.5 rounded hover:bg-surface transition-colors"
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
