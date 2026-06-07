import { MessageCircle } from "lucide-react";
import type { SiteContent } from "@/content/types";

export function FloatingWhatsApp({ content }: { content: SiteContent }) {
  return (
    <a
      aria-label={content.common.whatsapp}
      className="fixed bottom-5 end-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_18px_40px_rgba(31,168,85,0.32)] transition hover:-translate-y-1 hover:bg-[#168846]"
      href={`https://wa.me/?text=${encodeURIComponent(
        content.home.finalCta.title,
      )}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="size-6" />
    </a>
  );
}
