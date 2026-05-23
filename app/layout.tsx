import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const BASE_URL = "https://maviclinic.kz";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "MAVI clinic — Стоматология нового уровня",
    template: "%s | MAVI clinic",
  },
  description:
    "Современная стоматологическая клиника в Караганде. Имплантация, ортодонтия, терапия и эстетическая стоматология с передовыми технологиями и индивидуальным подходом.",
  keywords: [
    "стоматология Караганда",
    "стоматолог Караганда",
    "имплантация зубов",
    "ортодонт Караганда",
    "MAVI clinic",
    "лечение зубов Караганда",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: BASE_URL,
    siteName: "MAVI clinic",
    title: "MAVI clinic — Стоматология нового уровня",
    description:
      "Современная стоматологическая клиника в Караганде. Имплантация, ортодонтия, терапия и эстетическая стоматология.",
  },
  verification: {
    yandex: "54f527c4d655818a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
