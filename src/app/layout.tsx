import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ГумиТехЛаб — Инновационные удобрения",
  description:
    "Научная лаборатория по разработке и производству технологичных удобрений для современного земледелия",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
