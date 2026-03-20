import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

export default function ContactsPage() {
  const t = useTranslations("contacts");

  const info = [
    { title: t("addressTitle"), text: t("addressText") },
    { title: t("phoneTitle"), text: t("phoneText") },
    { title: t("emailTitle"), text: t("emailText") },
    { title: t("hoursTitle"), text: t("hoursText") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg text-muted mb-12">{t("subtitle")}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>

        <div className="space-y-6">
          {info.map((item, i) => (
            <div key={i} className="bg-surface border border-border rounded-lg p-5">
              <h3 className="font-semibold text-accent mb-1">{item.title}</h3>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="bg-surface border border-border rounded-lg h-48 flex items-center justify-center text-muted">
            <svg className="w-8 h-8 mr-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Map
          </div>
        </div>
      </div>
    </div>
  );
}
