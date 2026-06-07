import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { FadeUp } from "@/components/fade-up";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { contentRepository } from "@/lib/content-repository";
import { isLocale } from "@/lib/i18n";

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
    title: content.navigation[2].label,
    description: content.contactPage.description,
  };
}

export default async function ContactPage({
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
          <FadeUp>
            <SectionHeading
              align="center"
              as="h1"
              description={content.contactPage.description}
              eyebrow={content.contactPage.eyebrow}
              title={content.contactPage.title}
            />
          </FadeUp>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-premium">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <FadeUp className="relative min-h-[420px] lg:min-h-full">
                <Image
                  alt={content.contactPage.imageAlt}
                  className="object-cover"
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  src={content.contactPage.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/72 via-ocean/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-10">
                  <h2 className="text-3xl font-black tracking-[-0.04em]">
                    {content.contactPage.detailsTitle}
                  </h2>
                  <p className="mt-4 max-w-md leading-8 text-white/78">
                    {content.contactPage.detailsDescription}
                  </p>
                  <div className="mt-7 grid gap-3 text-sm font-semibold text-white/82">
                    <a
                      className="inline-flex items-center gap-3"
                      href={`mailto:${content.contactPage.email}`}
                    >
                      <Icon className="size-4 text-gold" name="mail" />
                      {content.contactPage.email}
                    </a>
                    <span className="inline-flex items-center gap-3">
                      <Icon className="size-4 text-gold" name="map" />
                      {content.contactPage.location}
                    </span>
                    <span className="inline-flex items-center gap-3">
                      <Icon className="size-4 text-gold" name="calendar" />
                      {content.contactPage.responseTime}
                    </span>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.08}>
                <div className="p-6 sm:p-10 lg:p-12">
                  <div className="mb-8">
                    <span className="text-sm font-bold uppercase tracking-[0.24em] text-gold">
                      {content.contactPage.eyebrow}
                    </span>
                    <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-ocean sm:text-4xl">
                      {content.contactPage.form.title}
                    </h2>
                    <p className="mt-3 leading-8 text-muted">
                      {content.contactPage.form.description}
                    </p>
                  </div>
                  <ContactForm content={content} />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
