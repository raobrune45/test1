import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}

function BlogPostContent({
  post,
}: {
  post: NonNullable<ReturnType<typeof getPost>>;
}) {
  const t = useTranslations("blog");
  const tPosts = useTranslations("blogPosts");
  const locale = useLocale();

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
        <div className="prose prose-invert max-w-none text-muted leading-relaxed whitespace-pre-line">
          {tPosts(post.contentKey)}
        </div>
      </article>
    </div>
  );
}
