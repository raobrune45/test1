import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContacts = useTranslations("contacts");

  return (
    <footer className="bg-deep border-t border-border/40 mt-auto relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 leaf-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-7 h-7 text-accent"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M16 4 C24 8 28 18 16 28 C4 18 8 8 16 4Z" />
                <path d="M16 10 L16 24" />
                <path d="M12 16 L16 14" />
                <path d="M20 18 L16 16" />
              </svg>
              <span className="font-serif text-xl text-cream">ГумиТехЛаб</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-accent text-sm tracking-wider uppercase mb-4">
              {t("navigation")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted hover:text-cream transition-colors duration-300">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted hover:text-cream transition-colors duration-300">
                  {tNav("services")}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-muted hover:text-cream transition-colors duration-300">
                  {tNav("cases")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted hover:text-cream transition-colors duration-300">
                  {tNav("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-accent text-sm tracking-wider uppercase mb-4">
              {t("contactUs")}
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {tContacts("phoneText")}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {tContacts("emailText")}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {tContacts("addressText")}
              </li>
            </ul>
          </div>
        </div>

        <div className="botanical-line mt-12 mb-8" />

        <div className="text-center text-sm text-muted/60">
          &copy; {new Date().getFullYear()} ГумиТехЛаб. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
