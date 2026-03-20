import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContacts = useTranslations("contacts");

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-accent font-bold text-lg mb-3">ГумиТехЛаб</h3>
            <p className="text-muted text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t("navigation")}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  {tNav("services")}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-foreground transition-colors">
                  {tNav("cases")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  {tNav("blog")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t("contactUs")}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>{tContacts("phoneText")}</li>
              <li>{tContacts("emailText")}</li>
              <li>{tContacts("addressText")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} ГумиТехЛаб. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
