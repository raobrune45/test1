import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cases");

  const cases = [
    {
      title: t("case1Title"),
      region: t("case1Region"),
      result: t("case1Result"),
      desc: t("case1Desc"),
    },
    {
      title: t("case2Title"),
      region: t("case2Region"),
      result: t("case2Result"),
      desc: t("case2Desc"),
    },
    {
      title: t("case3Title"),
      region: t("case3Region"),
      result: t("case3Result"),
      desc: t("case3Desc"),
    },
  ];

  const caseIcons = [
    // Wheat
    <svg key="wheat" className="w-10 h-10 text-accent/40" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 40 40">
      <path d="M20 35V15" />
      <path d="M20 15C20 15 14 12 14 8C14 4 20 5 20 5" />
      <path d="M20 15C20 15 26 12 26 8C26 4 20 5 20 5" />
      <path d="M20 22C20 22 14 19 14 15C14 11 20 12 20 12" />
      <path d="M20 22C20 22 26 19 26 15C26 11 20 12 20 12" />
    </svg>,
    // Greenhouse
    <svg key="greenhouse" className="w-10 h-10 text-accent/40" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 40 40">
      <path d="M5 30 L5 15 Q20 2 35 15 L35 30 Z" />
      <path d="M15 30V20" />
      <path d="M25 30V20" />
      <path d="M5 22H35" />
    </svg>,
    // Soil/roots
    <svg key="soil" className="w-10 h-10 text-accent/40" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 40 40">
      <path d="M5 18H35" />
      <path d="M20 18V10C20 10 25 8 25 5" />
      <path d="M20 18V28" />
      <path d="M20 24C16 24 14 28 12 30" />
      <path d="M20 22C24 22 26 26 28 30" />
    </svg>,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl mb-16">
        <span className="text-accent text-sm tracking-[0.2em] uppercase font-sans">
          {t("title")}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-cream mt-3 mb-5">
          {t("subtitle")}
        </h1>
        <div className="botanical-line max-w-[120px]" />
      </div>

      <div className="space-y-8">
        {cases.map((c, i) => (
          <div
            key={i}
            className={`bg-surface/60 border border-border rounded-xl p-8 sm:p-10 card-glow animate-fade-in-up animate-delay-${i + 1}`}
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <div className="shrink-0 hidden sm:flex w-20 h-20 rounded-xl bg-surface-light/50 border border-border/50 items-center justify-center">
                {caseIcons[i]}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl text-cream">{c.title}</h3>
                    <p className="text-sm text-muted mt-1 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-accent/50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {c.region}
                    </p>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 text-accent text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap">
                    {c.result}
                  </div>
                </div>
                <p className="text-muted leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
