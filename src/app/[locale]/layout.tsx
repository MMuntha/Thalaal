import "@fontsource-variable/inter";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contentRepository } from "@/lib/content-repository";
import { isLocale, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = await contentRepository.getSiteContent(locale);

  return {
    title: {
      default: content.metadata.title,
      template: `%s | ${content.brand.name}`,
    },
    description: content.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = await contentRepository.getSiteContent(locale);

  return (
    <html data-scroll-behavior="smooth" dir={content.direction} lang={content.locale}>
      <body>
        <SiteHeader content={content} />
        {children}
        <SiteFooter content={content} />
        <FloatingWhatsApp content={content} />
      </body>
    </html>
  );
}
