import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const benefits = [
    {
      title: t("benefit1Title"),
      desc: t("benefit1Desc"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      title: t("benefit2Title"),
      desc: t("benefit2Desc"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      title: t("benefit3Title"),
      desc: t("benefit3Desc"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M12 3C18 6 21 14 12 24C3 14 6 6 12 3Z" />
          <path d="M12 8v12M9 14l3-2M15 16l-3-2" />
        </svg>
      ),
    },
    {
      title: t("benefit4Title"),
      desc: t("benefit4Desc"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-cdr-bg-brand-spruce text-cdr-text-inverse">
        <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-lg sm:text-xl text-cdr-text-inverse/75 mb-10 leading-relaxed max-w-xl">
              {t("heroSubtitle")}
            </p>
            <Link
              href="./services"
              className="inline-flex items-center gap-2 bg-cdr-bg-secondary text-cdr-text-brand font-semibold px-7 py-3.5 rounded-cdr-softest hover:bg-cdr-warm-50 transition-colors group shadow-cdr-raised"
            >
              {t("heroCta")}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-cdr-bg-surface-secondary">
        <div className="max-w-[1232px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cdr-text-emphasis mb-3">
              {t("benefitsTitle")}
            </h2>
            <div className="cedar-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`cedar-card p-7 animate-fade-in-up animate-delay-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-cdr-softest bg-cdr-bg-brand-spruce/8 flex items-center justify-center text-cdr-text-brand mb-5">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-cdr-text-emphasis mb-2">{b.title}</h3>
                <p className="text-sm text-cdr-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-cdr-bg-secondary">
        <div className="max-w-[1232px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cdr-text-emphasis mb-3">
              {t("statsTitle")}
            </h2>
            <div className="cedar-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center p-8 rounded-cdr-softest bg-cdr-bg-surface-secondary shadow-cdr-raised animate-fade-in-up animate-delay-${i + 1}`}
              >
                <div className="font-serif text-4xl sm:text-5xl font-bold text-cdr-text-brand mb-2">
                  {s.value}
                </div>
                <div className="text-cdr-text-secondary text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
