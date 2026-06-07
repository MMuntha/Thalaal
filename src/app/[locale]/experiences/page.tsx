import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { FadeUp } from "@/components/fade-up";
import { ChevronIcon, Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { contentRepository } from "@/lib/content-repository";
import { isLocale, localePath } from "@/lib/i18n";

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
    title: content.navigation[1].label,
    description: content.experiencesPage.description,
  };
}

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = await contentRepository.getSiteContent(locale);

  return (
    <main className="pt-28">
      <section className="section-pad pt-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <FadeUp>
              <SectionHeading
                as="h1"
                description={content.experiencesPage.description}
                eyebrow={content.experiencesPage.eyebrow}
                title={content.experiencesPage.title}
              />
            </FadeUp>
            <FadeUp delay={0.08}>
              <div className="rounded-[2rem] border border-gold/30 bg-gold/10 p-6 text-ocean">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gold text-white">
                    <Icon className="size-5" name="sparkles" />
                  </div>
                  <p className="text-lg font-bold leading-8">
                    {content.experiencesPage.note}
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell grid gap-8">
          {content.experiences.map((experience, index) => (
            <FadeUp delay={index * 0.06} key={experience.id}>
              <article className="overflow-hidden rounded-[2.25rem] bg-white shadow-premium">
                <div
                  className={`grid gap-0 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[380px] overflow-hidden">
                    <Image
                      alt={experience.imageAlt}
                      className="object-cover"
                      fill
                      preload={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      src={experience.image}
                    />
                    <div className="absolute start-6 top-6 rounded-full border border-white/28 bg-white/18 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                      {experience.duration}
                    </div>
                  </div>
                  <div className="p-7 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-ocean"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] text-ocean sm:text-4xl">
                      {experience.title}
                    </h2>
                    <p className="mt-4 text-lg leading-9 text-muted">
                      {experience.description}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-sm font-bold text-lagoon">
                      <Icon className="size-4 text-gold" name="users" />
                      {experience.bestFor}
                    </div>
                    <ul className="mt-7 grid gap-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          className="flex items-start gap-3 text-base leading-7 text-ink"
                          key={highlight}
                        >
                          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-gold/16 text-gold">
                            <Icon className="size-3.5" name="check" />
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <ButtonLink
                      className="mt-8"
                      href={`${localePath(locale, "/contact")}?experience=${
                        experience.id
                      }`}
                    >
                      {content.common.requestTrip}
                      <ChevronIcon className="size-4" />
                    </ButtonLink>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <FadeUp>
            <div className="rounded-[2.25rem] bg-ocean p-8 text-white shadow-premium sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
                    {content.experiencesPage.includedTitle}
                  </span>
                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    {content.common.planTrip}
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {content.experiencesPage.included.map((item) => (
                    <div
                      className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 text-white/82"
                      key={item}
                    >
                      <Icon className="mt-1 size-4 shrink-0 text-gold" name="check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
