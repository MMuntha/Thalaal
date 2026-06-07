import type { Locale } from "@/content/types";

export const locales: Locale[] = ["ar", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(
  locale: Locale,
  path: "" | "/experiences" | "/contact" = "",
) {
  return `/${locale}${path}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/") || `/${locale}`;
}
