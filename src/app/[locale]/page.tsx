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
    { title: t("benefit1Title"), desc: t("benefit1Desc"), icon: "🔬" },
    { title: t("benefit2Title"), desc: t("benefit2Desc"), icon: "📈" },
    { title: t("benefit3Title"), desc: t("benefit3Desc"), icon: "🌱" },
    { title: t("benefit4Title"), desc: t("benefit4Desc"), icon: "✓" },
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
      <section className="relative py-24 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8">
            {t("heroSubtitle")}
          </p>
          <Link
            href="./services"
            className="inline-block bg-accent hover:bg-accent-dark text-black font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t("heroCta")}
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("benefitsTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-surface-light border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("statsTitle")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  {s.value}
                </div>
                <div className="text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
