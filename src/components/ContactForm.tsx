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
      <div className="bg-cdr-bg-success border border-cdr-border-success/30 rounded-cdr-softest p-10 text-center animate-fade-in-up">
        <svg className="w-12 h-12 text-cdr-text-success mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-cdr-text-success font-serif text-lg font-semibold">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="cedar-label">{t("formName")}</label>
        <input type="text" required className="cedar-input" />
      </div>
      <div>
        <label className="cedar-label">{t("formEmail")}</label>
        <input type="email" required className="cedar-input" />
      </div>
      <div>
        <label className="cedar-label">{t("formPhone")}</label>
        <input type="tel" className="cedar-input" />
      </div>
      <div>
        <label className="cedar-label">{t("formMessage")}</label>
        <textarea required rows={4} className="cedar-input resize-none" />
      </div>
      <button type="submit" className="btn-primary w-full">
        {t("formSubmit")}
      </button>
    </form>
  );
}
