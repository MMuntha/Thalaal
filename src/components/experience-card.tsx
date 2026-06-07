import Image from "next/image";
import type { Experience, Locale } from "@/content/types";
import { localePath } from "@/lib/i18n";
import { ButtonLink } from "./button-link";
import { ChevronIcon, Icon } from "./icons";

export function ExperienceCard({
  experience,
  locale,
  cta,
  featured = false,
}: {
  experience: Experience;
  locale: Locale;
  cta: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[2rem] premium-card ${
        featured ? "min-h-full" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={experience.imageAlt}
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src={experience.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/54 via-ocean/8 to-transparent opacity-80 transition group-hover:opacity-95" />
        <div className="absolute start-5 top-5 rounded-full border border-white/30 bg-white/18 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
          {experience.duration}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="mb-4 flex flex-wrap gap-2">
          {experience.tags.slice(0, 3).map((tag) => (
            <span
              className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-ocean"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-black tracking-[-0.03em] text-ocean">
          {experience.title}
        </h3>
        <p className="mt-3 text-base leading-8 text-muted">
          {experience.description}
        </p>
        <div className="mt-5 flex items-center gap-3 text-sm font-bold text-lagoon">
          <Icon className="size-4 text-gold" name="users" />
          {experience.bestFor}
        </div>
        <ButtonLink
          className="mt-6 w-full"
          href={`${localePath(locale, "/contact")}?experience=${experience.id}`}
          variant="secondary"
        >
          {cta}
          <ChevronIcon className="size-4" />
        </ButtonLink>
      </div>
    </article>
  );
}
