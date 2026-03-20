import { getTranslations, setRequestLocale } from "next-intl/server";

const serviceIcons = [
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M12 3C12 3 5 11 5 15.5C5 19.09 8.13 22 12 22C15.87 22 19 19.09 19 15.5C19 11 12 3 12 3Z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>,
  <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>,
  <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>,
  <svg key="6" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v-3.75m0 0h-.008v.008H6.75v-.008zm0 2.25h.008v.008H6.75v-.008zm2.25 0h.008v.008H9v-.008z" />
  </svg>,
];

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
    <>
      <div className="bg-cdr-bg-brand-spruce text-cdr-text-inverse py-14 px-4">
        <div className="max-w-[1232px] mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
            {t("title")}
          </h1>
          <p className="text-cdr-text-inverse/70 text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`cedar-card p-7 group animate-fade-in-up animate-delay-${(i % 3) + 1}`}
            >
              <div className="w-11 h-11 rounded-cdr-softest bg-cdr-bg-brand-spruce/8 flex items-center justify-center text-cdr-text-brand mb-5 group-hover:bg-cdr-bg-brand-spruce/15 transition-colors">
                {serviceIcons[i]}
              </div>
              <h3 className="font-serif text-lg font-semibold text-cdr-text-emphasis mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-cdr-text-secondary leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
