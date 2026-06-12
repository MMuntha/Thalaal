import type { SiteContent } from "./types";

const images = {
  hero: "/images/hero-beach.jpg",
  resort: "/images/resort-bungalow.jpg",
  coast: "/images/galle-coast.jpg",
  beach: "/images/beach-resort.jpg",
  tea: "/images/tea-fields.jpg",
  teaWide: "/images/tea-hills.jpg",
  elephants: "/images/elephants-river.jpg",
  elephant: "/images/elephants-field.jpg",
};

export const staticContent: Record<"ar" | "en", SiteContent> = {
  ar: {
    locale: "ar",
    direction: "rtl",
    metadata: {
      title: "Thalaal | لانكا تورز",
      description:
        "رحلات خاصة ومريحة في سريلانكا للعائلات والأزواج والمسافرين العرب، مع سائق خاص ومساعدة في اختيار الطعام الحلال.",
    },
    brand: {
      name: "طلال",
      descriptor: "لانكا تورز",
    },
    navigation: [
      { label: "الرئيسية", path: "" },
      { label: "التجارب", path: "/experiences" },
      { label: "خطط رحلتك", path: "/contact" },
    ],
    common: {
      planTrip: "خطط رحلتك",
      whatsapp: "تواصل عبر واتساب",
      discover: "اكتشف المزيد",
      requestTrip: "اطلب هذه الرحلة",
      viewExperiences: "استكشف التجارب",
      languageLabel: "English",
      initialWhatsAppMessage:
        "مرحباً، أود التخطيط لرحلة خاصة إلى سريلانكا مع THALAL. هل يمكنكم مساعدتي؟",
    },
    home: {
      hero: {
        eyebrow: "رحلات خاصة في جزيرة سريلانكا",
        title: "سريلانكا، على طريقتكم",
        description:
          "رحلات هادئة ومصممة بعناية للعائلات والأزواج العرب، تجمع بين الطبيعة الساحرة والفنادق المختارة والسائق الخاص.",
        image: images.hero,
        imageAlt: "شاطئ استوائي فاخر بمياه صافية في سريلانكا",
        assurance: ["رحلات خاصة", "سائق مخصص", "مساعدة للطعام الحلال"],
      },
      trust: [
        {
          icon: "car",
          title: "تنقل خاص",
          description: "سيارة مريحة وسائق خاص طوال الرحلة",
        },
        {
          icon: "family",
          title: "مناسب للعائلات",
          description: "وتيرة مريحة وخيارات تناسب الأطفال",
        },
        {
          icon: "moon",
          title: "مساعدة حلال",
          description: "إرشاد لاختيار المطاعم والوجبات المناسبة",
        },
        {
          icon: "language",
          title: "تواصل واضح",
          description: "خدمة ودعم بالعربية والإنجليزية",
        },
      ],
      experiences: {
        eyebrow: "تجارب مختارة",
        title: "رحلة خاصة، لا برنامج جاهز",
        description:
          "نبدأ بما تحبونه ثم نصمم التفاصيل حول وقتكم واهتماماتكم وطريقة سفركم.",
      },
      why: {
        eyebrow: "لماذا THALAAL",
        title: "راحة العائلة في قلب كل تفصيلة",
        description:
          "من لحظة الوصول إلى آخر غروب، نرتب تجربة سلسة تمنحكم الخصوصية والمرونة ووقتاً حقيقياً للاستمتاع.",
        image: images.resort,
        imageAlt: "منتجع ساحلي هادئ تحيط به أشجار النخيل",
        points: [
          {
            icon: "sparkles",
            title: "اختيارات مدروسة",
            description: "فنادق وتجارب نختارها للجودة والراحة، لا للكثرة.",
          },
          {
            icon: "shield",
            title: "رحلة مطمئنة",
            description: "تنسيق واضح ودعم مستمر خلال أيام الرحلة.",
          },
          {
            icon: "heart",
            title: "مرونة حقيقية",
            description: "نعدل الإيقاع والخطة بما يناسب عائلتكم.",
          },
        ],
      },
      destinations: {
        eyebrow: "وجوه سريلانكا",
        title: "جزيرة صغيرة، عوالم كثيرة",
        description:
          "استيقظوا بين مزارع الشاي، شاهدوا الحياة البرية، ثم اختموا اليوم على شاطئ هادئ.",
        items: [
          {
            title: "الساحل الجنوبي",
            subtitle: "شواطئ هادئة وإقامات مطلة على المحيط",
            image: images.coast,
            imageAlt: "إطلالة هادئة على ساحل استوائي",
          },
          {
            title: "مرتفعات الشاي",
            subtitle: "ضباب الصباح والقطارات والجبال الخضراء",
            image: images.tea,
            imageAlt: "مزارع الشاي الخضراء في مرتفعات سريلانكا",
          },
          {
            title: "الحياة البرية",
            subtitle: "سفاري خاص ولقاءات لا تنسى مع الطبيعة",
            image: images.elephants,
            imageAlt: "فيلة آسيوية تعبر نهراً في الطبيعة",
          },
          {
            title: "إقامات استثنائية",
            subtitle: "فلل ومنتجعات مختارة للخصوصية والراحة",
            image: images.beach,
            imageAlt: "منتجع فاخر بين الأشجار والمياه الزرقاء",
          },
        ],
      },
      journey: {
        eyebrow: "رحلة مقترحة",
        title: "من المدينة إلى الجبال ثم البحر",
        description:
          "نموذج لعشرة أيام متوازنة. كل محطة قابلة للتعديل حسب موعدكم واهتماماتكم.",
        stops: [
          {
            city: "كولومبو",
            description: "استقبال خاص وراحة بعد الوصول",
            nights: "ليلة واحدة",
          },
          {
            city: "كاندي",
            description: "الثقافة والحدائق والمناظر الهادئة",
            nights: "ليلتان",
          },
          {
            city: "نوارا إليا",
            description: "مزارع الشاي والهواء الجبلي",
            nights: "ليلتان",
          },
          {
            city: "الساحل الجنوبي",
            description: "استرخاء وشاطئ وتجارب بحرية",
            nights: "أربع ليالٍ",
          },
        ],
      },
      testimonial: {
        quote:
          "كانت الرحلة هادئة ومنظمة، والأجمل أننا لم نشعر بأننا نتبع جدولاً مزدحماً. كان هناك وقت للعائلة ومرونة في كل يوم.",
        author: "عائلة من دبي",
        trip: "رحلة عائلية خاصة · 10 أيام",
      },
      finalCta: {
        eyebrow: "ابدأوا من هنا",
        title: "أخبرونا كيف تتخيلون رحلتكم",
        description:
          "أرسلوا الموعد وعدد المسافرين وما تحبونه، وسنقترح برنامجاً خاصاً يناسبكم.",
      },
    },
    experiencesPage: {
      eyebrow: "تجارب THALAAL",
      title: "أربع بدايات، ورحلة واحدة تخصكم",
      description:
        "هذه ليست باقات مغلقة. اختاروا التجربة الأقرب لكم، وسنصمم المدة والفنادق والمحطات حول احتياجاتكم.",
      note: "جميع البرامج خاصة وقابلة للتخصيص بالكامل.",
      includedTitle: "أساس كل رحلة",
      included: [
        "سيارة خاصة مكيفة وسائق مخصص",
        "فنادق مختارة حسب الميزانية والأسلوب",
        "برنامج يومي مرن دون استعجال",
        "مساعدة في خيارات الطعام الحلال",
        "دعم قبل الرحلة وأثناءها",
      ],
    },
    contactPage: {
      eyebrow: "خطط رحلتك",
      title: "رحلتكم تبدأ بمحادثة بسيطة",
      description:
        "شاركونا التفاصيل الأساسية، وسنساعدكم على تحويلها إلى رحلة خاصة ومريحة في سريلانكا.",
      image: images.teaWide,
      imageAlt: "جبال خضراء ومزارع شاي في سريلانكا",
      detailsTitle: "تفضلون الحديث مباشرة؟",
      detailsDescription:
        "يمكنكم إرسال رسالة عبر واتساب أو البريد، وسنعود إليكم بأسئلة بسيطة قبل إعداد المقترح.",
      responseTime: "عادة نرد خلال يوم عمل واحد",
      email: "sammuhajireen@gmail.com",
      contacts: [
        {
          name: "Muhajireen",
          phone: "+94772481814",
          displayPhone: "+94 772 481 814",
          whatsapp: true,
        },
        {
          name: "Ikram",
          phone: "+94777681835",
          displayPhone: "+94 777 681 835",
        },
      ],
      location: "كولومبو، سريلانكا",
      form: {
        title: "أخبرونا عن رحلتكم",
        description: "لا نحتاج كل التفاصيل الآن. يكفي أن نعرف نقطة البداية.",
        name: "الاسم الكامل",
        whatsapp: "رقم الواتساب",
        country: "الدولة",
        month: "شهر السفر",
        adults: "عدد البالغين",
        children: "عدد الأطفال",
        tripType: "نوع الرحلة",
        message: "ما الذي تتمنون تجربته؟",
        submit: "إرسال التفاصيل عبر واتساب",
        successTitle: "تم تجهيز رسالتكم",
        successMessage:
          "سيفتح واتساب الآن مع تفاصيل الطلب. أرسلوا الرسالة لبدء التخطيط.",
        required: "هذا الحقل مطلوب",
        tripOptions: [
          { value: "family", label: "عائلية" },
          { value: "honeymoon", label: "شهر عسل" },
          { value: "luxury", label: "فاخرة" },
          { value: "adventure", label: "مغامرات وطبيعة" },
          { value: "beach", label: "شاطئية" },
          { value: "custom", label: "رحلة مخصصة" },
        ],
      },
    },
    footer: {
      description:
        "رحلات سريلانكا الخاصة، مصممة براحة وخصوصية للمسافرين العرب.",
      explore: "استكشف",
      contact: "تواصل",
      rights: "جميع الحقوق محفوظة.",
    },
    experiences: [
      {
        id: "family",
        title: "عطلة العائلة",
        description:
          "أيام متوازنة بين الطبيعة والأنشطة الخفيفة ووقت الاسترخاء، مع تنقل مريح وإقامات تناسب العائلات.",
        duration: "8–12 يوماً",
        bestFor: "العائلات والأطفال",
        image: images.hero,
        imageAlt: "شاطئ استوائي مناسب لعطلة عائلية",
        tags: ["سائق خاص", "مناسب للأطفال", "وتيرة مريحة"],
        highlights: [
          "غرف أو فلل عائلية مختارة",
          "أنشطة تناسب أعمار الأطفال",
          "توقفات مرنة وأيام غير مزدحمة",
        ],
      },
      {
        id: "honeymoon",
        title: "رحلة شهر العسل",
        description:
          "إقامات رومانسية ومناظر هادئة وتجارب خاصة تمنحكما مساحة للاحتفال بعيداً عن البرامج التقليدية.",
        duration: "7–10 أيام",
        bestFor: "الأزواج",
        image: images.coast,
        imageAlt: "إطلالة محيطية هادئة لرحلة شهر عسل",
        tags: ["إقامات رومانسية", "تجارب خاصة", "شاطئ وجبال"],
        highlights: [
          "فلل وفنادق بوتيك مختارة",
          "عشاء وتجارب خاصة عند الطلب",
          "مزيج هادئ بين الجبال والساحل",
        ],
      },
      {
        id: "chauffeur",
        title: "جولة السائق الخاص",
        description:
          "استكشفوا الجزيرة براحتكم مع سائق مخصص وخطة مرنة تربط المدن الثقافية والمرتفعات والساحل.",
        duration: "7–14 يوماً",
        bestFor: "العائلات والمجموعات الخاصة",
        image: images.tea,
        imageAlt: "طريق بين مزارع الشاي في سريلانكا",
        tags: ["مرونة كاملة", "تنقل خاص", "عدة مدن"],
        highlights: [
          "سيارة تناسب حجم المجموعة",
          "تعديل الخطة أثناء الرحلة",
          "اقتراحات يومية دون ضغط",
        ],
      },
      {
        id: "hills-beach",
        title: "المرتفعات والشاطئ",
        description:
          "ابدأوا بين مزارع الشاي والهواء البارد، ثم انتقلوا إلى منتجع ساحلي لأيام من الهدوء.",
        duration: "9–12 يوماً",
        bestFor: "من يريد تنوعاً متوازناً",
        image: images.beach,
        imageAlt: "منتجع ساحلي تحيط به الطبيعة الاستوائية",
        tags: ["مزارع الشاي", "قطار جبلي", "منتجع ساحلي"],
        highlights: [
          "كاندي ونوارا إليا أو إيلا",
          "رحلة قطار ذات مناظر خلابة",
          "ثلاث أو أربع ليالٍ على الساحل",
        ],
      },
    ],
  },
  en: {
    locale: "en",
    direction: "ltr",
    metadata: {
      title: "Thalaal | Lanka Tours",
      description:
        "Private, comfortable Sri Lanka journeys for Arab families, couples and small groups, with a personal chauffeur and halal dining guidance.",
    },
    brand: {
      name: "THALAL",
      descriptor: "Lanka Tours",
    },
    navigation: [
      { label: "Home", path: "" },
      { label: "Experiences", path: "/experiences" },
      { label: "Plan Your Trip", path: "/contact" },
    ],
    common: {
      planTrip: "Plan Your Trip",
      whatsapp: "Chat on WhatsApp",
      discover: "Discover More",
      requestTrip: "Request This Journey",
      viewExperiences: "Explore Experiences",
      languageLabel: "العربية",
      initialWhatsAppMessage:
        "Hello, I would like to plan a private Sri Lanka trip with THALAL. Can you help me?",
    },
    home: {
      hero: {
        eyebrow: "Private journeys across Sri Lanka",
        title: "Sri Lanka, entirely your own",
        description:
          "Calm, carefully designed journeys for Arab families and couples, bringing together remarkable nature, selected stays and a private chauffeur.",
        image: images.hero,
        imageAlt: "Clear tropical water along a beautiful island beach",
        assurance: [
          "Private journeys",
          "Dedicated chauffeur",
          "Halal dining guidance",
        ],
      },
      trust: [
        {
          icon: "car",
          title: "Private travel",
          description: "A comfortable vehicle and personal chauffeur",
        },
        {
          icon: "family",
          title: "Family considered",
          description: "Gentle pacing and child-friendly choices",
        },
        {
          icon: "moon",
          title: "Halal guidance",
          description: "Help identifying suitable meals and restaurants",
        },
        {
          icon: "language",
          title: "Clear communication",
          description: "Friendly support in Arabic and English",
        },
      ],
      experiences: {
        eyebrow: "Curated experiences",
        title: "A private journey, never an off-the-shelf package",
        description:
          "We begin with what you love, then shape every detail around your time, interests and way of travelling.",
      },
      why: {
        eyebrow: "Why THALAAL",
        title: "Your family’s comfort is part of every detail",
        description:
          "From the arrival welcome to the final sunset, we arrange a seamless experience with privacy, flexibility and room to enjoy the moment.",
        image: images.resort,
        imageAlt: "A peaceful coastal resort surrounded by palm trees",
        points: [
          {
            icon: "sparkles",
            title: "Thoughtful choices",
            description:
              "Stays and experiences selected for quality, not volume.",
          },
          {
            icon: "shield",
            title: "Travel with confidence",
            description:
              "Clear coordination and support throughout the journey.",
          },
          {
            icon: "heart",
            title: "Genuine flexibility",
            description: "We adapt the pace and plan to suit your family.",
          },
        ],
      },
      destinations: {
        eyebrow: "Many sides of Sri Lanka",
        title: "One small island, countless worlds",
        description:
          "Wake among tea fields, encounter remarkable wildlife, then end the day beside a quiet ocean.",
        items: [
          {
            title: "The southern coast",
            subtitle: "Quiet beaches and stays overlooking the ocean",
            image: images.coast,
            imageAlt: "A peaceful tropical coastline",
          },
          {
            title: "The tea country",
            subtitle: "Morning mist, mountain trains and green hills",
            image: images.tea,
            imageAlt: "Green tea fields in the Sri Lankan highlands",
          },
          {
            title: "The wild",
            subtitle: "Private safaris and unforgettable nature encounters",
            image: images.elephants,
            imageAlt: "Asian elephants crossing a river in the wild",
          },
          {
            title: "Exceptional stays",
            subtitle: "Villas and resorts selected for privacy and comfort",
            image: images.beach,
            imageAlt: "A beautiful resort between trees and blue water",
          },
        ],
      },
      journey: {
        eyebrow: "A sample journey",
        title: "From city to highlands, then the sea",
        description:
          "An idea for ten well-paced days. Every stop can be changed around your dates and interests.",
        stops: [
          {
            city: "Colombo",
            description: "Private welcome and time to settle in",
            nights: "1 night",
          },
          {
            city: "Kandy",
            description: "Culture, gardens and peaceful views",
            nights: "2 nights",
          },
          {
            city: "Nuwara Eliya",
            description: "Tea country and cool mountain air",
            nights: "2 nights",
          },
          {
            city: "Southern coast",
            description: "Unhurried beach time and ocean experiences",
            nights: "4 nights",
          },
        ],
      },
      testimonial: {
        quote:
          "The journey felt calm and beautifully organised. Best of all, it never felt like we were following a crowded schedule. There was time for the family and flexibility every day.",
        author: "A family from Dubai",
        trip: "Private family journey · 10 days",
      },
      finalCta: {
        eyebrow: "Begin here",
        title: "Tell us how you imagine your journey",
        description:
          "Share your dates, group size and what you enjoy. We will suggest a private itinerary shaped around you.",
      },
    },
    experiencesPage: {
      eyebrow: "THALAAL experiences",
      title: "Four starting points. One journey that is yours.",
      description:
        "These are not fixed packages. Choose the experience closest to you and we will shape the duration, stays and route around your needs.",
      note: "Every journey is private and fully customisable.",
      includedTitle: "The foundation of every journey",
      included: [
        "A private air-conditioned vehicle and chauffeur",
        "Selected hotels suited to your budget and style",
        "A flexible daily plan without rushing",
        "Guidance with halal dining options",
        "Support before and throughout your journey",
      ],
    },
    contactPage: {
      eyebrow: "Plan your trip",
      title: "Your journey begins with a simple conversation",
      description:
        "Share the essential details and we will help turn them into a comfortable, private journey through Sri Lanka.",
      image: images.teaWide,
      imageAlt: "Green mountains and tea country in Sri Lanka",
      detailsTitle: "Prefer to talk directly?",
      detailsDescription:
        "Send us a WhatsApp message or email. We will come back with a few simple questions before preparing your suggestion.",
      responseTime: "We usually reply within one working day",
      email: "sammuhajireen@gmail.com",
      contacts: [
        {
          name: "Muhajireen",
          phone: "+94772481814",
          displayPhone: "+94 772 481 814",
          whatsapp: true,
        },
        {
          name: "Ikram",
          phone: "+94777681835",
          displayPhone: "+94 777 681 835",
        },
      ],
      location: "Colombo, Sri Lanka",
      form: {
        title: "Tell us about your journey",
        description:
          "You do not need every detail yet. We only need a starting point.",
        name: "Full Name",
        whatsapp: "WhatsApp Number",
        country: "Country",
        month: "Travel Month",
        adults: "Number of Adults",
        children: "Number of Children",
        tripType: "Trip Type",
        message: "What would you love to experience?",
        submit: "Send Details on WhatsApp",
        successTitle: "Your message is ready",
        successMessage:
          "WhatsApp will open with your trip details. Send the message to begin planning.",
        required: "This field is required",
        tripOptions: [
          { value: "family", label: "Family" },
          { value: "honeymoon", label: "Honeymoon" },
          { value: "luxury", label: "Luxury" },
          { value: "adventure", label: "Adventure & Nature" },
          { value: "beach", label: "Beach" },
          { value: "custom", label: "Custom Journey" },
        ],
      },
    },
    footer: {
      description:
        "Private Sri Lanka journeys designed with comfort and privacy for Arab travellers.",
      explore: "Explore",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    experiences: [
      {
        id: "family",
        title: "The Family Holiday",
        description:
          "Well-paced days blending nature, gentle activities and time to unwind, with comfortable travel and family-suited stays.",
        duration: "8–12 days",
        bestFor: "Families with children",
        image: images.hero,
        imageAlt: "A tropical beach suited to a family holiday",
        tags: ["Private chauffeur", "Child-friendly", "Gentle pace"],
        highlights: [
          "Selected family rooms or private villas",
          "Activities matched to children’s ages",
          "Flexible stops and uncrowded days",
        ],
      },
      {
        id: "honeymoon",
        title: "The Honeymoon Escape",
        description:
          "Romantic stays, quiet scenery and private experiences that give you space to celebrate beyond a traditional itinerary.",
        duration: "7–10 days",
        bestFor: "Couples",
        image: images.coast,
        imageAlt: "A peaceful ocean view for a honeymoon journey",
        tags: ["Romantic stays", "Private moments", "Coast & hills"],
        highlights: [
          "Selected boutique hotels and villas",
          "Private dining and experiences on request",
          "A calm balance of highlands and coast",
        ],
      },
      {
        id: "chauffeur",
        title: "The Private Chauffeur Journey",
        description:
          "Explore the island at your own pace with a dedicated chauffeur and a flexible route through culture, highlands and coast.",
        duration: "7–14 days",
        bestFor: "Families and private groups",
        image: images.tea,
        imageAlt: "A road through Sri Lanka's tea country",
        tags: ["Total flexibility", "Private travel", "Multi-city"],
        highlights: [
          "A vehicle suited to your group size",
          "Freedom to adjust plans as you travel",
          "Daily guidance without a rigid schedule",
        ],
      },
      {
        id: "hills-beach",
        title: "The Hills & Beach Journey",
        description:
          "Begin among tea fields and cool mountain air, then move to a coastal resort for a few wonderfully slow days.",
        duration: "9–12 days",
        bestFor: "Travellers who want balance",
        image: images.beach,
        imageAlt: "A coastal resort surrounded by tropical nature",
        tags: ["Tea country", "Scenic train", "Beach resort"],
        highlights: [
          "Kandy and Nuwara Eliya or Ella",
          "A scenic highland train journey",
          "Three or four nights by the coast",
        ],
      },
    ],
  },
};
