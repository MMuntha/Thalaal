export type Locale = "ar" | "en";

export type IconKey =
  | "arrow"
  | "beach"
  | "calendar"
  | "car"
  | "check"
  | "family"
  | "heart"
  | "language"
  | "leaf"
  | "mail"
  | "map"
  | "moon"
  | "phone"
  | "shield"
  | "sparkles"
  | "star"
  | "users";

export interface NavigationItem {
  label: string;
  path: "" | "/experiences" | "/contact";
}

export interface TrustItem {
  icon: IconKey;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  duration: string;
  bestFor: string;
  image: string;
  imageAlt: string;
  tags: string[];
  highlights: string[];
}

export interface Destination {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export interface JourneyStop {
  city: string;
  description: string;
  nights: string;
}

export interface FormOption {
  value: string;
  label: string;
}

export interface SiteContent {
  locale: Locale;
  direction: "rtl" | "ltr";
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    descriptor: string;
  };
  navigation: NavigationItem[];
  common: {
    planTrip: string;
    whatsapp: string;
    discover: string;
    requestTrip: string;
    viewExperiences: string;
    languageLabel: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      assurance: string[];
    };
    trust: TrustItem[];
    experiences: {
      eyebrow: string;
      title: string;
      description: string;
    };
    why: {
      eyebrow: string;
      title: string;
      description: string;
      image: string;
      imageAlt: string;
      points: TrustItem[];
    };
    destinations: {
      eyebrow: string;
      title: string;
      description: string;
      items: Destination[];
    };
    journey: {
      eyebrow: string;
      title: string;
      description: string;
      stops: JourneyStop[];
    };
    testimonial: {
      quote: string;
      author: string;
      trip: string;
    };
    finalCta: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
  experiencesPage: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    includedTitle: string;
    included: string[];
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    detailsTitle: string;
    detailsDescription: string;
    responseTime: string;
    email: string;
    location: string;
    form: {
      title: string;
      description: string;
      name: string;
      whatsapp: string;
      country: string;
      month: string;
      adults: string;
      children: string;
      tripType: string;
      message: string;
      submit: string;
      successTitle: string;
      successMessage: string;
      required: string;
      tripOptions: FormOption[];
    };
  };
  footer: {
    description: string;
    explore: string;
    contact: string;
    rights: string;
  };
  experiences: Experience[];
}
