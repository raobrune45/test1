import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  const services = [
    { title: t("service1Title"), desc: t("service1Desc") },
    { title: t("service2Title"), desc: t("service2Desc") },
    { title: t("service3Title"), desc: t("service3Desc") },
    { title: t("service4Title"), desc: t("service4Desc") },
    { title: t("service5Title"), desc: t("service5Desc") },
    { title: t("service6Title"), desc: t("service6Desc") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg text-muted mb-12 max-w-2xl">{t("subtitle")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent font-bold mb-4 group-hover:bg-accent/30 transition-colors">
              {i + 1}
            </div>
            <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
