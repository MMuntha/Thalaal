"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";
import { locales, localePath, switchLocalePath } from "@/lib/i18n";
import { BrandMark } from "./brand-mark";

export function SiteHeader({ content }: { content: SiteContent }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === localePath(content.locale);
  const otherLocale = locales.find((locale) => locale !== content.locale) ?? "en";
  const solid = !isHome || isScrolled || isOpen;

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 36);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        solid
          ? "border-b border-line/80 bg-ivory/92 shadow-[0_16px_48px_rgba(6,61,76,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell">
        <nav className="flex min-h-20 items-center justify-between gap-5">
          <BrandMark content={content} />

          <div className="hidden items-center gap-1 rounded-full border border-white/16 bg-white/12 p-1 text-sm font-semibold backdrop-blur-lg lg:flex">
            {content.navigation.map((item) => (
              <Link
                className={`rounded-full px-4 py-2 transition ${
                  solid
                    ? "text-ocean hover:bg-mist"
                    : "text-white hover:bg-white/16"
                }`}
                href={localePath(content.locale, item.path)}
                key={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                solid
                  ? "text-ocean hover:bg-mist"
                  : "text-white hover:bg-white/16"
              }`}
              href={switchLocalePath(pathname, otherLocale)}
            >
              {content.common.languageLabel}
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(31,168,85,0.22)] transition hover:-translate-y-0.5 hover:bg-[#168846]"
              href={`https://wa.me/?text=${encodeURIComponent(
                content.home.finalCta.title,
              )}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              {content.common.whatsapp}
            </a>
          </div>

          <button
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className={`grid size-11 place-items-center rounded-full border transition lg:hidden ${
              solid
                ? "border-line bg-white text-ocean"
                : "border-white/30 bg-white/10 text-white"
            }`}
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {isOpen && (
          <div className="mb-4 rounded-[1.75rem] border border-line bg-white p-3 shadow-premium lg:hidden">
            <div className="grid gap-1">
              {content.navigation.map((item) => (
                <Link
                  className="rounded-2xl px-4 py-3 text-base font-bold text-ocean hover:bg-mist"
                  href={localePath(content.locale, item.path)}
                  key={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="rounded-2xl px-4 py-3 text-base font-bold text-ocean hover:bg-mist"
                href={switchLocalePath(pathname, otherLocale)}
                onClick={() => setIsOpen(false)}
              >
                {content.common.languageLabel}
              </Link>
              <a
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-4 py-3 text-base font-bold text-white"
                href={`https://wa.me/?text=${encodeURIComponent(
                  content.home.finalCta.title,
                )}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" className="size-5" />
                {content.common.whatsapp}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
