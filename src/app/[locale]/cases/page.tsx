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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg text-muted mb-12 max-w-2xl">{t("subtitle")}</p>

      <div className="space-y-8">
        {cases.map((c, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-lg p-8 hover:border-accent/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="text-sm text-muted">{c.region}</p>
              </div>
              <div className="bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap">
                {c.result}
              </div>
            </div>
            <p className="text-muted leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
