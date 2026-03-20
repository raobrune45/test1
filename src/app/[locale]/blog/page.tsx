import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const t = useTranslations("blog");
  const tPosts = useTranslations("blogPosts");
  const locale = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg text-muted mb-12">{t("subtitle")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="bg-surface border border-border rounded-lg p-6 hover:border-accent/50 transition-colors block group"
          >
            <time className="text-xs text-muted">{post.date}</time>
            <h2 className="text-lg font-semibold mt-2 mb-3 group-hover:text-accent transition-colors">
              {tPosts(post.titleKey)}
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {tPosts(post.excerptKey)}
            </p>
            <span className="text-accent text-sm font-medium">
              {t("readMore")} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
