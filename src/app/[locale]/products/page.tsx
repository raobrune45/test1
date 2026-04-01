import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("nav");

  return (
    <div className="max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-3xl font-bold text-cdr-text-emphasis mb-4">
        {t("products")}
      </h1>
      <p className="text-cdr-text-secondary">
        Страница в разработке — контент будет добавлен позже.
      </p>
    </div>
  );
}
