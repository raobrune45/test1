import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/ContactForm";

const contactIcons = [
  // Address
  <svg key="addr" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
  // Phone
  <svg key="phone" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>,
  // Email
  <svg key="email" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>,
  // Clock
  <svg key="clock" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contacts");

  const info = [
    { title: t("addressTitle"), text: t("addressText") },
    { title: t("phoneTitle"), text: t("phoneText") },
    { title: t("emailTitle"), text: t("emailText") },
    { title: t("hoursTitle"), text: t("hoursText") },
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-surface/60 border border-border rounded-xl p-8 sm:p-10">
          <ContactForm />
        </div>

        {/* Info */}
        <div className="space-y-5">
          {info.map((item, i) => (
            <div
              key={i}
              className={`bg-surface/60 border border-border rounded-xl p-6 card-glow flex items-start gap-4 animate-fade-in-up animate-delay-${i + 1}`}
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                {contactIcons[i]}
              </div>
              <div>
                <h3 className="font-serif text-cream mb-1">{item.title}</h3>
                <p className="text-muted text-sm">{item.text}</p>
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="bg-surface/60 border border-border rounded-xl h-48 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 leaf-pattern" />
            <div className="relative flex items-center gap-2 text-muted/40">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              Map
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
