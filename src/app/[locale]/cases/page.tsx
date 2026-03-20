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

  return (
    <>
      <div className="bg-brand text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
            {t("title")}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`cedar-card p-8 animate-fade-in-up animate-delay-${i + 1}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-text-primary">
                    {c.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-muted" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {c.region}
                  </p>
                </div>
                <span className="inline-block bg-brand/8 text-brand text-sm font-semibold px-4 py-2 rounded-md whitespace-nowrap">
                  {c.result}
                </span>
              </div>
              <p className="text-text-secondary leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
