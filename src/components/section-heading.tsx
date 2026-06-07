import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  as = "h2",
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  as?: "h1" | "h2";
  children?: ReactNode;
}) {
  const isCentered = align === "center";
  const Heading = as;

  return (
    <div
      className={`flex flex-col gap-4 ${
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <span className="text-sm font-bold uppercase tracking-[0.26em] text-gold">
        {eyebrow}
      </span>
      <Heading className="text-balance text-4xl font-black leading-tight tracking-[-0.04em] text-ocean sm:text-5xl">
        {title}
      </Heading>
      {description && (
        <p className="text-lg leading-8 text-muted sm:text-xl">{description}</p>
      )}
      {children}
    </div>
  );
}
