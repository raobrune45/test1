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
    { title: t("benefit1Title"), desc: t("benefit1Desc"), icon: "microscope" },
    { title: t("benefit2Title"), desc: t("benefit2Desc"), icon: "chart" },
    { title: t("benefit3Title"), desc: t("benefit3Desc"), icon: "leaf" },
    { title: t("benefit4Title"), desc: t("benefit4Desc"), icon: "check" },
  ];

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  const icons: Record<string, React.ReactNode> = {
    microscope: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    chart: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    leaf: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M12 3 C18 6 21 14 12 24 C3 14 6 6 12 3Z" />
        <path d="M12 8 L12 20" />
        <path d="M9 14 L12 12" />
        <path d="M15 16 L12 14" />
      </svg>
    ),
    check: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient min-h-[85vh] flex items-center px-4">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full border border-accent/10 animate-fade-in-up animate-delay-4" />
        <div className="absolute bottom-32 left-[10%] w-40 h-40 rounded-full border border-border/30 animate-fade-in-up animate-delay-5" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-block text-accent font-sans text-sm tracking-[0.3em] uppercase mb-6 border border-accent/30 px-4 py-1.5 rounded-full">
                {t("heroSubtitle").split(".")[0]}
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.1] mb-8 animate-fade-in-up animate-delay-1">
              {t("heroTitle")}
            </h1>

            <p className="text-lg sm:text-xl text-muted max-w-xl mb-10 leading-relaxed animate-fade-in-up animate-delay-2">
              {t("heroSubtitle")}
            </p>

            <div className="animate-fade-in-up animate-delay-3">
              <Link
                href="./services"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-deep font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
              >
                {t("heroCta")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-4">
              {t("benefitsTitle")}
            </h2>
            <div className="botanical-line max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`bg-surface-light/50 border border-border rounded-xl p-8 card-glow animate-fade-in-up animate-delay-${i + 1}`}
              >
                <div className="text-accent mb-5">{icons[b.icon]}</div>
                <h3 className="font-serif text-lg text-cream mb-3">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-4">
              {t("statsTitle")}
            </h2>
            <div className="botanical-line max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center p-8 rounded-xl border border-border/50 bg-surface/30 animate-fade-in-up animate-delay-${i + 1}`}
              >
                <div className="font-serif text-4xl sm:text-5xl text-accent mb-3">
                  {s.value}
                </div>
                <div className="text-muted text-sm tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
