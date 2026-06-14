import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { BrandMark } from "./brand-mark";
import { Icon } from "./icons";

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="bg-ocean text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <div className="[&_span]:!text-white">
              <BrandMark content={content} />
            </div>
            <p className="mt-5 text-base leading-8 text-white/72">
              {content.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
              {content.footer.explore}
            </h3>
            <div className="mt-5 grid gap-3">
              {content.navigation.map((item) => (
                <Link
                  className="text-white/72 transition hover:text-white"
                  href={localePath(content.locale, item.path)}
                  key={item.path}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
              {content.footer.contact}
            </h3>
            <div className="mt-5 grid gap-3 text-white/72">
              {content.contactPage.contacts.map((contact) => (
                <a
                  key={contact.phone}
                  className="inline-flex items-center gap-3 transition hover:text-white"
                  href={`tel:${contact.phone}`}
                >
                  <Icon className="size-4 text-gold" name="phone" />
                  {contact.displayPhone}
                </a>
              ))}
              <a
                className="inline-flex items-center gap-3 transition hover:text-white"
                href={`mailto:${content.contactPage.email}`}
              >
                <Icon className="size-4 text-gold" name="mail" />
                {content.contactPage.email}
              </a>
              <span className="inline-flex items-center gap-3">
                <Icon className="size-4 text-gold" name="map" />
                {content.contactPage.location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/12 pt-6 text-sm text-white/58">
          © {new Date().getFullYear()} {content.brand.name}.{" "}
          {content.footer.rights}
        </div>
      </div>
    </footer>
  );
}
