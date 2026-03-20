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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className={`bg-surface/60 border border-border rounded-xl p-8 card-glow group block animate-fade-in-up animate-delay-${i + 1}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
              <time className="text-xs text-muted tracking-wider uppercase">
                {post.date}
              </time>
            </div>

            <h2 className="font-serif text-xl text-cream mb-3 group-hover:text-accent transition-colors duration-300">
              {tPosts(post.titleKey)}
            </h2>

            <p className="text-sm text-muted leading-relaxed mb-6">
              {tPosts(post.excerptKey)}
            </p>

            <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
              {t("readMore")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
