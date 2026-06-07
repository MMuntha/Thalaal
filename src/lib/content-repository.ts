import { staticContent } from "@/content/static-content";
import type { Locale, SiteContent } from "@/content/types";

export interface ContentRepository {
  getSiteContent(locale: Locale): Promise<SiteContent>;
}

class StaticContentRepository implements ContentRepository {
  async getSiteContent(locale: Locale): Promise<SiteContent> {
    return staticContent[locale];
  }
}

// Replace this instance with an API-backed repository when content moves remote.
export const contentRepository: ContentRepository =
  new StaticContentRepository();
