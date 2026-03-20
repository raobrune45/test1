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
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 text-center">
        <p className="text-accent font-medium">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-muted mb-1">{t("formName")}</label>
        <input
          type="text"
          required
          className="w-full bg-surface-light border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">{t("formEmail")}</label>
        <input
          type="email"
          required
          className="w-full bg-surface-light border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">{t("formPhone")}</label>
        <input
          type="tel"
          className="w-full bg-surface-light border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm text-muted mb-1">{t("formMessage")}</label>
        <textarea
          required
          rows={4}
          className="w-full bg-surface-light border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-dark text-black font-semibold py-3 rounded-lg transition-colors"
      >
        {t("formSubmit")}
      </button>
    </form>
  );
}
