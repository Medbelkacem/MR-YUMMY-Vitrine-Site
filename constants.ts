
import { MenuSection, Offer } from './types';

export const WHATSAPP_NUMBER = "213676818999";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/mr_yummy_batna/",
  facebook: "https://www.facebook.com/mryummybatna/",
  tiktok: "https://www.tiktok.com/@mryummybatna05?_r=1&_t=ZS-92Kz5i9ZGwG",
  whatsapp: WHATSAPP_LINK
};

export const GALLERY_IMAGES = [
  "/assets/5.jpg",
  "/assets/6.jpg",
  "/assets/7.jpg"
];

// Fallback images if assets aren't present
export const FALLBACK_GALLERY = [
  "https://picsum.photos/id/163/800/600",
  "https://picsum.photos/id/429/800/600",
  "https://picsum.photos/id/488/800/600",
  "https://picsum.photos/id/292/800/600",
  "https://picsum.photos/id/1080/800/600",
  "https://picsum.photos/id/102/800/600",
  "https://picsum.photos/id/225/800/600"
];

export const MENU_DATA: MenuSection[] = [
  {
    title: "🍔 NOS BURGERS",
    id: "burgers",
    items: [
      { id: "b1", name: "SMASH BURGER", price: 390 },
      { id: "b2", name: "DOUBLE SMASH (150g)", price: 490 },
      { id: "b3", name: "ZINGER", price: 400 },
      { id: "b4", name: "GRILLED CHICKEN", price: 350 },
      { id: "b5", name: "SMOKY", price: 490 },
      { id: "b6", name: "YUMMY", price: 490 },
      { id: "b7", name: "TONER", price: 450 },
      { id: "b8", name: "CHILI LIME", price: 400 }
    ]
  },
  {
    title: "📦 BOX MEALS",
    id: "box-meals",
    items: [
      { id: "bm1", name: "CHEESE BOX", price: 790 },
      { id: "bm2", name: "BURGER FRIES", price: 590 },
      { id: "bm3", name: "ZINGER BOX", price: 790 }
    ]
  },
  {
    title: "🍟 SNACKS",
    id: "snacks",
    items: [
      { id: "s1", name: "CHEESE FRIES", price: 250 },
      { id: "s2", name: "CHILI LIME FRIES", price: 550 },
      { id: "s3", name: "CHICKEN POPCORN", price: 490 },
      { id: "s4", name: "JALAPEÑO FRIES", price: 490 },
      { id: "s5", name: "CHICKEN FRITES", price: 490 },
      { id: "s6", name: "CHICKEN POUTINE", price: 550 },
      { id: "s7", name: "SAUCE FRIES (NEW)", price: 350 },
      { id: "s8", name: "SAUCE FRIES EXTRA CHEESE (NEW)", price: 400 },
      { id: "s9", name: "CHICKEN SALAD", price: 490 },
      { id: "s10", name: "CHICKEN RIZO", price: 490 },
      { id: "s11", name: "PERI PERI RICE", price: 590 },
      { id: "s12", name: "RICE", price: 300 }
    ]
  },
  {
    title: "🌮 TACOS (Simple / Double)",
    id: "tacos",
    items: [
      { id: "t1", name: "POULET", price: 450, description: "Simple: 450 DA / Double: 550 DA" },
      { id: "t2", name: "VIANDE", price: 450, description: "Simple: 450 DA / Double: 550 DA" },
      { id: "t3", name: "MERGUEZ", price: 450, description: "Simple: 450 DA / Double: 550 DA" },
      { id: "t4", name: "TENDERS", price: 450, description: "Simple: 450 DA / Double: 550 DA" },
      { id: "t5", name: "YUMMY", price: 500, description: "Simple: 500 DA / Double: 600 DA" },
      { id: "t6", name: "THE KING", price: 500, description: "Simple: 500 DA / Double: 600 DA" },
      { id: "t7", name: "HAPPY", price: 500, description: "Simple: 500 DA / Double: 600 DA" },
      { id: "t8", name: "MIXTO MIXTE", price: 450, description: "Simple: 450 DA / Double: 550 DA" },
      { id: "t9", name: "MIXTO FROMAGE", price: 500, description: "Simple: 500 DA / Double: 600 DA" }
    ]
  },
  {
    title: "TACO SUPPLEMENTS",
    id: "taco-supplements",
    items: [
      { id: "ts1", name: "Gratiné (Extra fromage)", price: 150 },
      { id: "ts2", name: "Soujouk poulet", price: 100 },
      { id: "ts3", name: "Soujouk viande", price: 100 },
      { id: "ts4", name: "Onion crispy", price: 50 }
    ]
  },
  {
    title: "⭐️ SIGNATURES BY MR YUMMY",
    id: "signatures",
    items: [
      { id: "sig1", name: "CRISPS", price: 650 },
      { id: "sig2", name: "VEGI", price: 650 },
      { id: "sig3", name: "TOKYUM CRUNCH", price: 650 }
    ]
  },
  {
    title: "🥪 SANDWICHES & BOX",
    id: "sandwiches",
    items: [
      { id: "sw1", name: "TWISTER WRAP", price: 500 },
      { id: "sw2", name: "MEXICAN CHICKEN", price: 500 },
      { id: "sw3", name: "TWISTER BOX", price: 790 },
      { id: "sw4", name: "TACO BOX", price: 790 },
      { id: "sw5", name: "HAPPY BOX", price: 1290 },
      { id: "sw6", name: "HAPPY TENDERS", price: 1600 },
      { id: "sw7", name: "MENU KIDS", price: 450 }
    ]
  },
  {
    title: "🍗 BROASTED CHICKEN MEALS",
    id: "broasted",
    items: [
      { id: "br1", name: "TENDERS MEAL", price: 750 },
      { id: "br2", name: "CHILI LIME MEAL", price: 750 },
      { id: "br3", name: "BONELESS MEAL", price: 750 },
      { id: "br4", name: "SMART MEAL", price: 790 },
      { id: "br5", name: "3 PCS BROASTED", price: 300 },
      { id: "br6", name: "7 PCS BROASTED", price: 600 },
      { id: "br7", name: "SUPER MEGA DEAL", price: 1600 },
      { id: "br8", name: "DREAM BOX", price: 1550 },
      { id: "br9", name: "FAMILY MEAL COMBO", price: 3100 }
    ]
  },
  {
    title: "🍗 GRILLED CHICKEN MEALS",
    id: "grilled",
    items: [
      { id: "gr1", name: "MINGS MEAL", price: 750 },
      { id: "gr2", name: "3 PCS PERI PERI", price: 300 },
      { id: "gr3", name: "2 PCS PERI PERI", price: 700 },
      { id: "gr4", name: "MIXTE BOURAK", price: 790 },
      { id: "gr5", name: "5 PCS BOURAK", price: 500 },
      { id: "gr6", name: "10 PCS BOURAK", price: 950 },
      { id: "gr7", name: "FRIENDSHIP MEAL", price: 1390 },
      { id: "gr8", name: "HAPPY WINGS", price: 1290 },
      { id: "gr9", name: "FAMILY MEAL COMBO (Grill)", price: 3100 },
      { id: "gr10", name: "MIXTE FAMILY COMBO", price: 3250 }
    ]
  },
  {
    title: "➕ EXTRAS",
    id: "extras",
    items: [
      { id: "ex1", name: "Poulet", price: 100 },
      { id: "ex2", name: "Ailes grillées", price: 550 },
      { id: "ex3", name: "Coleslaw", price: 150 },
      { id: "ex4", name: "Fromage (Jben)", price: 200 },
      { id: "ex5", name: "Poulet haché", price: 50 },
      { id: "ex6", name: "4 Tenders", price: 550 },
      { id: "ex7", name: "Frites", price: 100 }
    ]
  },
  {
    title: "🍕 PIZZA - Sauce Tomate",
    id: "pizza-tomato",
    items: [
      { id: "pt1", name: "Margherita", price: 350, description: "L 350 DA | XL 650 DA | XXL 900 DA" },
      { id: "pt2", name: "Viande hachée", price: 550, description: "L 550 DA | XL 1100 DA | XXL 1500 DA" },
      { id: "pt3", name: "Poulet", price: 550, description: "L 550 DA | XL 1050 DA | XXL 1450 DA" },
      { id: "pt4", name: "Merguez", price: 550, description: "L 550 DA | XL 1100 DA | XXL 1500 DA" },
      { id: "pt5", name: "Végétarienne", price: 500, description: "L 500 DA | XL 950 DA | XXL 1350 DA" },
      { id: "pt6", name: "Thon", price: 600, description: "L 600 DA | XL 1200 DA | XXL 1600 DA" },
      { id: "pt7", name: "3 Fromages", price: 650, description: "L 650 DA | XL 1200 DA | XXL 1600 DA" },
      { id: "pt8", name: "Poulet fumé", price: 650, description: "L 650 DA | XL 1300 DA | XXL 1600 DA" },
      { id: "pt9", name: "Zinger", price: 600, description: "L 600 DA | XL 1150 DA | XXL 1600 DA" },
      { id: "pt10", name: "Regina", price: 750, description: "L 750 DA | XL 1400 DA | XXL 1750 DA" }
    ]
  },
  {
    title: "🍕 PIZZA - Crème Fraîche",
    id: "pizza-cream",
    items: [
      { id: "pc1", name: "Margherita", price: 400, description: "L 400 DA | XL 750 DA | XXL 950 DA" },
      { id: "pc2", name: "Viande hachée", price: 600, description: "L 600 DA | XL 1150 DA | XXL 1600 DA" },
      { id: "pc3", name: "Poulet", price: 600, description: "L 600 DA | XL 1150 DA | XXL 1600 DA" },
      { id: "pc4", name: "Merguez", price: 600, description: "L 600 DA | XL 1150 DA | XXL 1600 DA" },
      { id: "pc5", name: "4 Fromages", price: 700, description: "L 700 DA | XL 1350 DA | XXL 1800 DA" },
      { id: "pc6", name: "Poulet fumé", price: 700, description: "L 700 DA | XL 1350 DA | XXL 1700 DA" },
      { id: "pc7", name: "Zinger", price: 650, description: "L 650 DA | XL 1250 DA | XXL 1700 DA" },
      { id: "pc8", name: "Panaché 1", price: 600, description: "L 600 DA | XL 1150 DA | XXL 1650 DA" },
      { id: "pc9", name: "Panaché 2", price: 600, description: "L 600 DA | XL 1150 DA | XXL 1650 DA" },
      { id: "pc10", name: "Regina", price: 800, description: "L 800 DA | XL 1500 DA | XXL 1850 DA" },
      { id: "pc11", name: "Pizza Yummy", price: 850, description: "L 850 DA | XL 1550 DA | XXL 1950 DA" }
    ]
  },
  {
    title: "EXTRAS PIZZA",
    id: "pizza-extras",
    items: [
      { id: "pe1", name: "Champignons", price: 200 },
      { id: "pe2", name: "Soujouk", price: 250 }
    ]
  }
];

export const OFFERS: Offer[] = [
  {
    title: "🎟 Fidelity Card",
    description: "50 points = 500 DA discount on your next order!",
    icon: "fa-id-card"
  },
  {
    title: "🎓 Student Discount",
    description: "Show your student ID and get 15% OFF every meal.",
    icon: "fa-graduation-cap"
  }
];

export const LOCATIONS = [
  {
    name: "Location 1",
    url: "https://maps.app.goo.gl/9pAP25ShB26dbwjE6"
  },
  {
    name: "Location 2",
    url: "https://maps.app.goo.gl/Qr9pdXJZkRXiNyrg7"
  }
];
