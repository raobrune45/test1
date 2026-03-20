"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const t = useTranslations("contacts");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-accent/10 border border-accent/30 rounded-xl p-10 text-center animate-fade-in-up">
        <svg className="w-12 h-12 text-accent mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-accent font-serif text-lg">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-muted mb-2 tracking-wide">
          {t("formName")}
        </label>
        <input
          type="text"
          required
          className="w-full bg-surface-light/50 border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-2 tracking-wide">
          {t("formEmail")}
        </label>
        <input
          type="email"
          required
          className="w-full bg-surface-light/50 border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-2 tracking-wide">
          {t("formPhone")}
        </label>
        <input
          type="tel"
          className="w-full bg-surface-light/50 border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-2 tracking-wide">
          {t("formMessage")}
        </label>
        <textarea
          required
          rows={4}
          className="w-full bg-surface-light/50 border border-border rounded-lg px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-dark text-deep font-semibold py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 tracking-wide"
      >
        {t("formSubmit")}
      </button>
    </form>
  );
}
