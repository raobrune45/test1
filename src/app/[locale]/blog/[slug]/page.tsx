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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-2 text-accent text-sm hover:gap-3 transition-all duration-300 group"
      >
        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {t("backToBlog")}
      </Link>

      <article className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          <time className="text-sm text-muted tracking-wider uppercase">
            {t("published")}: {post.date}
          </time>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-cream leading-tight mb-4">
          {tPosts(post.titleKey)}
        </h1>

        <div className="botanical-line max-w-[80px] mb-10" />

        <div className="text-muted leading-relaxed whitespace-pre-line text-lg">
          {tPosts(post.contentKey)}
        </div>
      </article>
    </div>
  );
}
