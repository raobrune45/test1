import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-12">{t("title")}</h1>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-accent mb-4">
          {t("missionTitle")}
        </h2>
        <p className="text-lg text-muted leading-relaxed max-w-3xl">
          {t("missionText")}
        </p>
      </section>

      {/* History */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-accent mb-6">
          {t("historyTitle")}
        </h2>
        <div className="relative pl-6 border-l-2 border-accent/30 space-y-4">
          {history.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[calc(0.75rem+1px)] top-1.5 w-3 h-3 rounded-full bg-accent" />
              <p className="text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-2xl font-semibold text-accent mb-6">
          {t("teamTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-lg p-6"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl font-bold mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-accent text-sm mb-2">{member.role}</p>
              <p className="text-muted text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
