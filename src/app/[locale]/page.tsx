import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { ExperienceCard } from "@/components/experience-card";
import { FadeUp } from "@/components/fade-up";
import { ChevronIcon, Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { contentRepository } from "@/lib/content-repository";
import { isLocale, localePath } from "@/lib/i18n";
import { getWhatsAppContact, whatsappUrl } from "@/lib/whatsapp";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = await contentRepository.getSiteContent(locale);
  const featuredExperiences = content.experiences.slice(0, 4);
  const whatsappContact = getWhatsAppContact(content.contactPage.contacts);

  return (
    <main>
      <section className="relative isolate min-h-[92vh] overflow-hidden rounded-b-[2.5rem] bg-ocean text-white">
        <Image
          alt={content.home.hero.imageAlt}
          className="hero-zoom object-cover"
          fill
          preload
          sizes="100vw"
          src={content.home.hero.image}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="container-shell relative z-10 flex min-h-[92vh] items-end pb-12 pt-32 sm:pb-16 lg:items-center lg:pb-0">
          <div className="max-w-4xl">
            <FadeUp>
              <span className="inline-flex rounded-full border border-white/24 bg-white/12 px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                {content.home.hero.eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="mt-6 text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                {content.home.hero.title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-white/82 sm:text-2xl">
                {content.home.hero.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={localePath(locale, "/contact")}>
                  {content.common.planTrip}
                  <ChevronIcon className="size-4" />
                </ButtonLink>
                <ButtonLink
                  external
                  href={whatsappUrl(
                    whatsappContact,
                    content.common.initialWhatsAppMessage,
                  )}
                  variant="ghost"
                >
                  {content.common.whatsapp}
                </ButtonLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                {content.home.hero.assurance.map((item) => (
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88 backdrop-blur-md"
                    key={item}
                  >
                    <Icon className="size-4 text-gold" name="check" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="container-shell relative z-20 -mt-10">
        <div className="grid gap-3 rounded-[2rem] border border-line bg-white p-4 shadow-premium sm:grid-cols-2 lg:grid-cols-4">
          {content.home.trust.map((item) => (
            <div className="rounded-[1.5rem] bg-ivory/70 p-5" key={item.title}>
              <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-ocean text-white">
                <Icon className="size-5" name={item.icon} />
              </div>
              <h2 className="text-lg font-black text-ocean">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <FadeUp>
            <SectionHeading
              align="center"
              description={content.home.experiences.description}
              eyebrow={content.home.experiences.eyebrow}
              title={content.home.experiences.title}
            />
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredExperiences.map((experience, index) => (
              <FadeUp delay={index * 0.06} key={experience.id}>
                <ExperienceCard
                  cta={content.common.requestTrip}
                  experience={experience}
                  featured
                  locale={locale}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist/70 py-20">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeUp>
            <div className="relative min-h-[460px] overflow-hidden rounded-[2.25rem] shadow-premium">
              <Image
                alt={content.home.why.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                src={content.home.why.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/48 to-transparent" />
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <SectionHeading
                description={content.home.why.description}
                eyebrow={content.home.why.eyebrow}
                title={content.home.why.title}
              />
            </FadeUp>
            <div className="mt-8 grid gap-4">
              {content.home.why.points.map((item, index) => (
                <FadeUp delay={index * 0.06} key={item.title}>
                  <div className="premium-card flex gap-4 rounded-[1.5rem] p-5">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold/16 text-gold">
                      <Icon className="size-5" name={item.icon} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-ocean">
                        {item.title}
                      </h3>
                      <p className="mt-1 leading-7 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <FadeUp>
              <SectionHeading
                description={content.home.destinations.description}
                eyebrow={content.home.destinations.eyebrow}
                title={content.home.destinations.title}
              />
            </FadeUp>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.home.destinations.items.map((destination, index) => (
              <FadeUp delay={index * 0.06} key={destination.title}>
                <article className="group relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-card">
                  <Image
                    alt={destination.imageAlt}
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    src={destination.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/84 via-ocean/24 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-black tracking-[-0.03em]">
                      {destination.title}
                    </h3>
                    <p className="mt-2 leading-7 text-white/78">
                      {destination.subtitle}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sand/55">
        <div className="container-shell">
          <FadeUp>
            <SectionHeading
              align="center"
              description={content.home.journey.description}
              eyebrow={content.home.journey.eyebrow}
              title={content.home.journey.title}
            />
          </FadeUp>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {content.home.journey.stops.map((stop, index) => (
              <FadeUp delay={index * 0.07} key={stop.city}>
                <article className="relative rounded-[1.75rem] bg-white p-6 shadow-card">
                  <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-ocean text-lg font-black text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                    {stop.nights}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-ocean">
                    {stop.city}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{stop.description}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <FadeUp>
            <div className="mx-auto max-w-4xl rounded-[2.25rem] bg-ocean p-8 text-center text-white shadow-premium sm:p-12">
              <Icon className="mx-auto size-9 text-gold" name="star" />
              <blockquote className="mt-6 text-2xl font-semibold leading-10 sm:text-3xl">
                “{content.home.testimonial.quote}”
              </blockquote>
              <p className="mt-6 font-black text-gold">
                {content.home.testimonial.author}
              </p>
              <p className="mt-1 text-white/62">
                {content.home.testimonial.trip}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <FadeUp>
            <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-premium">
              <div className="grid items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-12">
                  <SectionHeading
                    description={content.home.finalCta.description}
                    eyebrow={content.home.finalCta.eyebrow}
                    title={content.home.finalCta.title}
                  />
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={localePath(locale, "/contact")}>
                      {content.common.planTrip}
                      <ChevronIcon className="size-4" />
                    </ButtonLink>
                    <ButtonLink
                      href={localePath(locale, "/experiences")}
                      variant="secondary"
                    >
                      {content.common.viewExperiences}
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative min-h-[360px]">
                  <Image
                    alt={content.home.destinations.items[1].imageAlt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    src={content.home.destinations.items[1].image}
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
