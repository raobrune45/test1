import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const history = [
    t("history1"),
    t("history2"),
    t("history3"),
    t("history4"),
    t("history5"),
    t("history6"),
  ];

  const team = [
    { name: t("team1Name"), role: t("team1Role"), desc: t("team1Desc") },
    { name: t("team2Name"), role: t("team2Role"), desc: t("team2Desc") },
    { name: t("team3Name"), role: t("team3Role"), desc: t("team3Desc") },
  ];

  return (
    <>
      <div className="bg-cdr-bg-brand-spruce text-cdr-text-inverse py-14 px-4">
        <div className="max-w-[1232px] mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">
            {t("title")}
          </h1>
        </div>
      </div>

      <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl font-bold text-cdr-text-emphasis mb-2">
            {t("missionTitle")}
          </h2>
          <div className="cedar-divider mb-6" />
          <p className="text-lg text-cdr-text-secondary leading-relaxed max-w-3xl">
            {t("missionText")}
          </p>
        </section>

        {/* History */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl font-bold text-cdr-text-emphasis mb-2">
            {t("historyTitle")}
          </h2>
          <div className="cedar-divider mb-8" />

          <div className="relative pl-8 border-l-2 border-cdr-bg-brand-spruce/20 space-y-6">
            {history.map((item, i) => (
              <div
                key={i}
                className={`relative animate-fade-in-up animate-delay-${Math.min(i + 1, 6)}`}
              >
                <div className="absolute -left-[calc(1rem+1px)] top-1.5 w-4 h-4 rounded-cdr-round border-2 border-cdr-bg-brand-spruce bg-cdr-bg-secondary" />
                <p className="text-cdr-text-secondary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-cdr-text-emphasis mb-2">
            {t("teamTitle")}
          </h2>
          <div className="cedar-divider mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className={`cedar-card p-7 animate-fade-in-up animate-delay-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-cdr-round bg-cdr-bg-brand-spruce flex items-center justify-center text-cdr-text-inverse font-serif text-xl font-bold mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-cdr-text-emphasis text-lg">
                  {member.name}
                </h3>
                <p className="text-cdr-text-brand text-sm font-medium mt-0.5 mb-3">
                  {member.role}
                </p>
                <p className="text-cdr-text-secondary text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
