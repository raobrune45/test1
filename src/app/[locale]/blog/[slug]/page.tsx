import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href={`/${locale}/blog`}
        className="text-accent text-sm hover:underline"
      >
        {t("backToBlog")}
      </Link>

      <article className="mt-6">
        <time className="text-sm text-muted">
          {t("published")}: {post.date}
        </time>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-8">
          {tPosts(post.titleKey)}
        </h1>
        <div className="max-w-none text-muted leading-relaxed whitespace-pre-line">
          {tPosts(post.contentKey)}
        </div>
      </article>
    </div>
  );
}
