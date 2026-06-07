import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { localePath } from "@/lib/i18n";

export function BrandMark({
  content,
  compact = false,
}: {
  content: SiteContent;
  compact?: boolean;
}) {
  return (
    <Link
      aria-label={content.brand.name}
      className="group inline-flex items-center gap-3"
      href={localePath(content.locale)}
    >
      <span className="grid size-11 place-items-center rounded-2xl bg-ocean text-lg font-black tracking-tight text-white shadow-[0_18px_40px_rgba(6,61,76,0.2)] ring-1 ring-white/20 transition group-hover:-translate-y-0.5">
        T
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-black tracking-[0.24em] text-ocean">
            {content.brand.name}
          </span>
          <span className="mt-1 text-[0.62rem] font-bold tracking-[0.22em] text-muted">
            {content.brand.descriptor}
          </span>
        </span>
      )}
    </Link>
  );
}
