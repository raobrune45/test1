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
      <div className="bg-brand/5 border border-brand/20 rounded-lg p-10 text-center animate-fade-in-up">
        <svg className="w-12 h-12 text-brand mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-brand font-serif text-lg font-semibold">{t("formSuccess")}</p>
      </div>
    );
  }

  const inputClasses = "w-full bg-white border border-border rounded-md px-4 py-2.5 text-text-primary placeholder:text-muted/60 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          {t("formName")}
        </label>
        <input type="text" required className={inputClasses} />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          {t("formEmail")}
        </label>
        <input type="email" required className={inputClasses} />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          {t("formPhone")}
        </label>
        <input type="tel" className={inputClasses} />
      </div>
      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          {t("formMessage")}
        </label>
        <textarea required rows={4} className={`${inputClasses} resize-none`} />
      </div>
      <button type="submit" className="btn-primary w-full">
        {t("formSubmit")}
      </button>
    </form>
  );
}
