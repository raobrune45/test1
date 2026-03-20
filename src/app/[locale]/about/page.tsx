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

  const teamColors = ["#2d5a2d", "#4a6b35", "#3d5a3d"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Title */}
      <div className="mb-20">
        <span className="text-accent text-sm tracking-[0.2em] uppercase font-sans">
          {t("title")}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-cream mt-3">
          {t("title")}
        </h1>
      </div>

      {/* Mission */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-2xl text-accent mb-2">
            {t("missionTitle")}
          </h2>
          <div className="botanical-line max-w-[80px]" />
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg text-muted leading-relaxed">
            {t("missionText")}
          </p>
        </div>
      </section>

      {/* History */}
      <section className="mb-24">
        <h2 className="font-serif text-2xl text-accent mb-10">
          {t("historyTitle")}
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent" />

          <div className="space-y-8">
            {history.map((item, i) => (
              <div
                key={i}
                className={`relative pl-10 animate-fade-in-up animate-delay-${Math.min(i + 1, 6)}`}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-accent/40 bg-deep flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="font-serif text-2xl text-accent mb-10">
          {t("teamTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className={`bg-surface/60 border border-border rounded-xl p-8 card-glow animate-fade-in-up animate-delay-${i + 1}`}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl text-cream mb-5"
                style={{ backgroundColor: teamColors[i] }}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="font-serif text-xl text-cream">{member.name}</h3>
              <p className="text-accent text-sm mt-1 mb-3 tracking-wide">
                {member.role}
              </p>
              <p className="text-muted text-sm leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
