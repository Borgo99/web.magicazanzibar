import type { Metadata } from "next";
import localFont from "next/font/local";
import Headbar from "../_components/Headbar";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { ITour } from "../_components/interfaces";
import AboutUs from "../_components/AboutUs";
import Footer from "../_components/Footer";
import data from "../../data/tours.json";
import ToursListSection from "../_components/ToursListSection";

const tours: Record<string, ITour[]> = data as Record<string, ITour[]>;

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "it"].map((locale) => ({ locale }));
}

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Magica Zanzibar",
  description: "Embark on an unforgettable adventure with us!",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};
export default async function layout({
  children,
  params: { locale },
}: Readonly<Props>) {
  const messages = await getMessages(locale);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Headbar />
          <main
            style={{
              maxWidth: "140rem",
              margin: "0 auto",
            }}
          >
            {children}
            <ToursListSection tours={tours[locale]} />
            <AboutUs />
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
