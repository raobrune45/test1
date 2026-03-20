export interface BlogPost {
  slug: string;
  date: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "humic-acids-guide",
    date: "2024-11-15",
    titleKey: "post1Title",
    excerptKey: "post1Excerpt",
    contentKey: "post1Content",
  },
  {
    slug: "biostimulants-2024",
    date: "2024-10-22",
    titleKey: "post2Title",
    excerptKey: "post2Excerpt",
    contentKey: "post2Content",
  },
  {
    slug: "soil-microbiome",
    date: "2024-09-10",
    titleKey: "post3Title",
    excerptKey: "post3Excerpt",
    contentKey: "post3Content",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
