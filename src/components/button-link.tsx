import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ocean text-white shadow-[0_18px_38px_rgba(6,61,76,0.24)] hover:-translate-y-0.5 hover:bg-[#052f3a] hover:shadow-[0_24px_48px_rgba(6,61,76,0.28)]",
  secondary:
    "border border-gold/55 bg-white/82 text-ocean shadow-[0_16px_34px_rgba(6,61,76,0.1)] hover:-translate-y-0.5 hover:border-gold hover:bg-white",
  ghost:
    "border border-white/40 bg-white/12 text-white backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/20",
  whatsapp:
    "bg-whatsapp text-white shadow-[0_18px_38px_rgba(31,168,85,0.25)] hover:-translate-y-0.5 hover:bg-[#168846]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
