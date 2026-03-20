import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.flatMap((post) =>
    ["ru", "en"].map((locale) => ({ locale, slug: post.slug }))
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  const t = await getTranslations("blog");
  const tPosts = await getTranslations("blogPosts");

  return (
    <>
      <div className="bg-brand text-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-1.5 text-white/70 text-sm hover:text-white transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {t("backToBlog")}
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <time className="text-sm text-muted font-medium uppercase tracking-wider">
          {t("published")}: {post.date}
        </time>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary leading-tight mt-3 mb-4">
          {tPosts(post.titleKey)}
        </h1>

        <div className="cedar-divider mb-10" />

        <div className="text-text-secondary leading-relaxed whitespace-pre-line text-lg max-w-[634px]">
          {tPosts(post.contentKey)}
        </div>
      </article>
    </>
  );
}
