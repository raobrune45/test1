import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContacts = useTranslations("contacts");

  return (
    <footer className="bg-brand text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <svg className="w-6 h-6 text-white/80" viewBox="0 0 28 28" fill="currentColor">
                <path d="M14 2C14 2 6 8 6 16c0 5.523 3.582 10 8 10s8-4.477 8-10c0-8-8-14-8-14z"/>
              </svg>
              <span className="font-serif text-lg font-semibold">ГумиТехЛаб</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
              {t("navigation")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  {tNav("services")}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-white/70 hover:text-white transition-colors">
                  {tNav("cases")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                  {tNav("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
              {t("contactUs")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{tContacts("phoneText")}</li>
              <li>{tContacts("emailText")}</li>
              <li>{tContacts("addressText")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} ГумиТехЛаб. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
