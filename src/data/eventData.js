// Single Source of Truth for GENZATRI 2026 Event Data

export const EVENT_DETAILS = {
  name: "GENZATRI 2026",
  tagline: "AC DOME GARBA",
  datesShort: "16 – 19 October 2026",
  datesFull: "16–19 October 2026",
  timing: "4 Nights Uninterrupted (8:00 PM to 5:00 AM)",
  targetCountdownDate: "2026-10-16T20:00:00+05:30",
  venueShort: "Gujarat University Convention & Exhibition Centre",
  venueAddress: "Memnagar, Ahmedabad",
  venueFullAddress: "132 Feet Ring Rd, Near Helmet Circle, Memnagar, Ahmedabad, Gujarat 380052",
  googleMapsUrl: "https://maps.google.com/?q=Gujarat+University+Convention+and+Exhibition+Centre+Ahmedabad",
  mapImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
};

export const PASSES = [
  {
    id: "solo",
    name: "SOLO PASS",
    categoryLabel: "INDIVIDUAL",
    stubLabel: "SOLO",
    price: 999,
    formattedPrice: "₹999",
    banner: "OFFICIAL SOLO ENTRY PASS",
    description: "For the Individual Groove",
  },
  {
    id: "couple",
    name: "2 PERSON ENTRY",
    categoryLabel: "DUO PAIR",
    stubLabel: "2 PERSON",
    price: 1799,
    formattedPrice: "₹1,799",
    banner: "OFFICIAL 2 PERSON ENTRY PASS",
    description: "Entry for 2 Persons",
  },
  {
    id: "group",
    name: "YOUR TRIBE PASS (20 PEOPLE)",
    categoryLabel: "TRIBE PASS",
    stubLabel: "TRIBE",
    price: 16999,
    formattedPrice: "₹16,999",
    banner: "SPECIAL YOUR TRIBE PASS",
    description: "Bigger Tribe Bigger Celebrations",
  }
];

export const TICKET_URLS = {
  bookmyshow: "https://in.bookmyshow.com/activities/genzatri-ahmedabad-s-ac-dome/ET00517258",
  district: "https://www.district.in/events/genzatri-ahmedabads-ac-dome-oct16-2026-buy-tickets"
};

export const TICKET_PARTNERS = [
  { name: "meepass", label: "MiPass", url: null, color: "#120A14", active: false },
  { name: "bookmyshow", label: "BookMyShow", url: TICKET_URLS.bookmyshow, color: "#EC5E2A", active: true },
  { name: "district", label: "District by Zomato", url: TICKET_URLS.district, color: "#9C27B0", active: true }
];

export const FEATURES = [
  {
    id: 1,
    title: "AC DOME",
    subtitle: "Stay cool. Dance longer.",
    image: "/assets/images/artist_card_5_user.jpg"
  },
  {
    id: 2,
    title: "8,000+ KHELIYAS",
    subtitle: "Bigger energy. Bigger vibes.",
    image: "/assets/images/artist_card_3_user.jpg"
  },
  {
    id: 3,
    title: "FOOD & BEVERAGE STALLS",
    subtitle: "Delicious bites all night.",
    image: "/assets/images/artist_card_4_user.jpg"
  },
  {
    id: 4,
    title: "HIGH SECURITY",
    subtitle: "Dance worry-free.",
    image: "/assets/images/artist_card_2_user.jpg"
  },
  {
    id: 5,
    title: "LIVE MUSIC & SINGERS",
    subtitle: "Non-stop Garba beats.",
    image: "/assets/images/artist_card_1_user.jpg"
  },
  {
    id: 6,
    title: "LIVE DJ & BOLLYWOOD BEATS",
    subtitle: "Late night explosive party.",
    image: "/assets/images/dj_bollywood_beats.jpg"
  },
  {
    id: 7,
    title: "16 - 19 OCTOBER 2026",
    subtitle: "Mark your dates.",
    image: "/assets/images/ac_dome_garba.jpg"
  }
];

export const ARTISTS = [
  {
    id: 1,
    name: "MITESH BHATT & NIMA BHATT",
    date: "16 OCT",
    night: "NIGHT 1 · GRAND OPENING",
    image: "/assets/images/artist_mitesh_nima.jpg",
    genre: "Traditional Garba Fusion"
  },
  {
    id: 2,
    name: "NAMRATA SONI",
    date: "17 OCT",
    night: "NIGHT 2 · HIGH ENERGY",
    image: "/assets/images/artist_namrata_soni.jpg",
    genre: "Electrifying Folk Vocals"
  },
  {
    id: 3,
    name: "DR MITALI NAG",
    date: "18 OCT",
    night: "NIGHT 3 · SOULFUL BEATS",
    image: "/assets/images/artist_mitali_nag.jpg",
    genre: "Sufi & Classical Garba"
  },
  {
    id: 4,
    name: "VYAAS BROTHERS DHOL BAND",
    date: "19 OCT",
    night: "19 OCT · GRAND FINALE",
    image: "/assets/images/artist_vyaas_brothers.jpg",
    genre: "Traditional Gujarati Dhol"
  },
  {
    id: 5,
    name: "RAJESH NAYAK & TEAM",
    date: "16 - 19 OCT",
    night: "TRIBE SPECIAL · ALL 4 DAYS",
    image: "/assets/images/artist_card_5_user.jpg",
    genre: "Authentic Gujarati Garba"
  },
  {
    id: 6,
    name: "ATRANGI BAND",
    date: "16 – 19 OCT",
    night: "ALL 4 NIGHTS · 12:00 AM – 2:30 AM",
    image: "/assets/images/artist_atrangi_band_poster.jpg",
    genre: "Bollywood Garba & High Fusion"
  }
];

export const REELS = [
  {
    id: 1,
    image: "/assets/images/ac_dome_garba.jpg",
    views: "1.2M",
    likes: "84K"
  },
  {
    id: 2,
    image: "/assets/images/gallery_1.jpg",
    views: "950K",
    likes: "62K"
  },
  {
    id: 3,
    image: "/assets/images/gallery_2.jpg",
    views: "2.1M",
    likes: "140K"
  },
  {
    id: 4,
    image: "/assets/images/gallery_3.jpg",
    views: "1.8M",
    likes: "110K"
  },
  {
    id: 5,
    image: "/assets/images/hero_garba_dancer.jpg",
    views: "800K",
    likes: "55K"
  },
  {
    id: 6,
    image: "/assets/images/gallery_4.jpg",
    views: "1.5M",
    likes: "98K"
  },
  {
    id: 7,
    image: "/assets/images/gallery_5.jpg",
    views: "3.4M",
    likes: "250K"
  }
];

// 100% Local Real Garba Festival Photos for Gallery (100% reliable loading)
export const GALLERY_PHOTOS = [
  {
    id: 1,
    image: "/assets/images/gallery_1.jpg",
    title: "AC Dome Arena View"
  },
  {
    id: 2,
    image: "/assets/images/gallery_2.jpg",
    title: "Garba Night Energy"
  },
  {
    id: 3,
    image: "/assets/images/gallery_3.jpg",
    title: "Dandiya Beats"
  },
  {
    id: 4,
    image: "/assets/images/gallery_4.jpg",
    title: "Tribe Celebration"
  },
  {
    id: 5,
    image: "/assets/images/gallery_5.jpg",
    title: "Live Concert Lights"
  },
  {
    id: 6,
    image: "/assets/images/gallery_6.jpg",
    title: "Festive Vibes"
  }
];

export const FAQS = [
  {
    id: 1,
    question: "What are the event dates and timings for GENZATRI 2026?",
    answer: "GENZATRI 2026 takes place from 16th to 19th October 2026 at Gujarat University Convention & Exhibition Centre, Ahmedabad. The event runs uninterrupted every night from 8:00 PM to 5:00 AM."
  },
  {
    id: 2,
    question: "Is the Garba venue fully air-conditioned?",
    answer: "Yes! GENZATRI is held inside Gujarat's largest state-of-the-art Air-Conditioned Dome Arena, keeping all 8,000+ Kheliyas cool and comfortable all night long."
  },
  {
    id: 3,
    question: "What ticket pass options are available?",
    answer: "We offer Solo Passes (₹999), 2 Person Entry Passes (₹1,799), and Special Your Tribe Passes for 20 people (₹16,999). Passes are available on BookMyShow and District."
  },
  {
    id: 4,
    question: "Is traditional Gujarati attire required for entry?",
    answer: "Traditional Garba attire (Chaniya Choli for women, Khediyu/Kurta-Pyjama for men) is mandatory to enter the Garba arena and participate."
  },
  {
    id: 5,
    question: "Are food stalls and parking facilities available?",
    answer: "Yes, the venue features premium multi-cuisine food & beverage stalls and ample secure parking spaces for cars and two-wheelers."
  },
  {
    id: 6,
    question: "What is the entry policy and security level?",
    answer: "We maintain strict 24/7 security with CCTV surveillance, female security officers, and digital pass validation at all entry points."
  }
];
