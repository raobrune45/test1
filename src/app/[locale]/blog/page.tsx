import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const tPosts = await getTranslations("blogPosts");

  return (
    <>
      <div className="bg-brand text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
            {t("title")}
          </h1>
          <p className="text-white/70 text-lg">{t("subtitle")}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className={`cedar-card p-7 group block animate-fade-in-up animate-delay-${i + 1}`}
            >
              <time className="text-xs font-medium text-muted uppercase tracking-wider">
                {post.date}
              </time>
              <h2 className="font-serif text-lg font-semibold text-text-primary mt-2 mb-3 group-hover:text-brand transition-colors">
                {tPosts(post.titleKey)}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {tPosts(post.excerptKey)}
              </p>
              <span className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold group-hover:gap-2.5 transition-all">
                {t("readMore")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
