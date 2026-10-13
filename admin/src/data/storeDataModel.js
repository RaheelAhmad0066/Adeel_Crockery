/**
 * Master Shared Store Data Model
 * Connects Web Storefront (Home, Shop, Categories, Navbar) directly with Admin Panel CMS
 */

// 1. HOME HERO BANNER CMS (Controls Figma Hero Section)
export const initialHeroBanner = {
  headline: "Feel it, Feel the Uniqueness.",
  subtitle: "Is filament of the highest quality that we are proud to offer our customers.",
  ctaText: "Buy Now",
  ctaLink: "#products",
  image: "/assets/images/hero-pot.png",
  bgPattern: "/assets/images/Hero Section.svg"
};

// 2. NAVBAR CATEGORIES & EXACT SUBCATEGORIES (From Figma Navbar & Shop Bar)
export const initialNavbarCategories = [
  {
    id: "cat-crockery",
    name: "Crockery",
    slug: "crockery",
    status: "Active",
    subcategories: [
      { name: "Plate sets", slug: "plate-sets" },
      { name: "Tea cups and Saucers", slug: "tea-cups-and-saucers" },
      { name: "2-Tier & 3-Tier", slug: "2-tier-3-tier" },
      { name: "Dessert Set", slug: "dessert-set" },
      { name: "Cutlery", slug: "cutlery" },
      { name: "Cake Stand", slug: "cake-stand" },
      { name: "Cake Lifter", slug: "cake-lifter" },
      { name: "Mugs", slug: "mugs" },
      { name: "Trays", slug: "trays" },
      { name: "Glass and water set", slug: "glass-and-water-set" },
      { name: "Jars", slug: "jars" },
      { name: "GlassLock Storage Containers", slug: "glasslock-containers" }
    ]
  },
  {
    id: "cat-new-arrivals",
    name: "New Arrivals",
    slug: "new-arrivals",
    status: "Active",
    subcategories: [
      { name: "Autumn Collection", slug: "autumn-collection" },
      { name: "Limited Edition", slug: "limited-edition" }
    ]
  },
  {
    id: "cat-silverware",
    name: "Silverware",
    slug: "silverware",
    status: "Active",
    subcategories: [
      { name: "Silver Bowl", slug: "silver-bowl" },
      { name: "Silver Platters", slug: "silver-platters" },
      { name: "Chafing Dish", slug: "chafing-dish" }
    ]
  },
  {
    id: "cat-copperware",
    name: "Copperware",
    slug: "copperware",
    status: "Active",
    subcategories: [
      { name: "Hammered Bowls", slug: "copperware" },
      { name: "Water Vessels", slug: "copperware" }
    ]
  },
  {
    id: "cat-brass-ware",
    name: "Brass Ware",
    slug: "brass-ware",
    status: "Active",
    subcategories: [
      { name: "Brass Ware", slug: "brass-ware" },
      { name: "Brass Serving / Thaal", slug: "brass-serving-thaal" },
      { name: "Brass Chafing Dish", slug: "brass-chafing-dish" }
    ]
  },
  {
    id: "cat-serveware",
    name: "Serveware",
    slug: "serveware",
    status: "Active",
    subcategories: [
      { name: "Serving Platters", slug: "serveware" },
      { name: "Salad Bowls", slug: "serveware" }
    ]
  },
  {
    id: "cat-casserole-dish",
    name: "Casserole Dish",
    slug: "casserole-dish",
    status: "Active",
    subcategories: [
      { name: "Clay Casseroles", slug: "casserole-dish" },
      { name: "Double Handled", slug: "casserole-dish" }
    ]
  },
  {
    id: "cat-home-decor",
    name: "Home Decor",
    slug: "home-decor",
    status: "Active",
    subcategories: [
      { name: "Candle stands", slug: "candle-stands" },
      { name: "Accessories", slug: "accessories" },
      { name: "Planters", slug: "planters" },
      { name: "Table mats/ placemats", slug: "table-mats-placemats" }
    ]
  },
  {
    id: "cat-bathroom-set",
    name: "Bathroom Set",
    slug: "bathroom-set",
    status: "Active",
    subcategories: [
      { name: "Soap Dishes", slug: "bathroom-set" },
      { name: "Tumblers & Holders", slug: "bathroom-set" }
    ]
  }
];

// 3. MASTER PRODUCTS INVENTORY (Both Home Carousel, Home Grid & Shop)
export const initialProducts = [
  // Home Categories Carousel Items
  {
    id: "PROD-001",
    name: "River Vase",
    category: "Home Decor",
    subcategory: "Accessories",
    price: 100,
    costPrice: 65,
    stock: 24,
    sku: "EW-RV-01",
    image: "/assets/images/cat-river-vase.png",
    showOnHomeCategories: true,
    showOnHomeFeatured: false,
    status: "In Stock"
  },
  {
    id: "PROD-002",
    name: "Ripple Vase",
    category: "Home Decor",
    subcategory: "Planters",
    price: 100,
    costPrice: 70,
    stock: 18,
    sku: "EW-RP-02",
    image: "/assets/images/cat-ripple-vase.png",
    showOnHomeCategories: true,
    showOnHomeFeatured: false,
    status: "In Stock"
  },
  {
    id: "PROD-003",
    name: "Bulb Vase",
    category: "Home Decor",
    subcategory: "Planters",
    price: 100,
    costPrice: 60,
    stock: 12,
    sku: "EW-BV-03",
    image: "/assets/images/cat-bulb-vase.png",
    showOnHomeCategories: true,
    showOnHomeFeatured: false,
    status: "In Stock"
  },
  {
    id: "PROD-004",
    name: "Glass Bowl Premium",
    category: "Crockery",
    subcategory: "Glass and water set",
    price: 100,
    costPrice: 58,
    stock: 15,
    sku: "EW-GB-04",
    image: "/assets/images/cat-glass-bowl-1.png",
    showOnHomeCategories: true,
    showOnHomeFeatured: false,
    status: "In Stock"
  },
  {
    id: "PROD-005",
    name: "Glass Bowl Wide",
    category: "Crockery",
    subcategory: "Glass and water set",
    price: 100,
    costPrice: 60,
    stock: 9,
    sku: "EW-GB-05",
    image: "/assets/images/cat-glass-bowl-2.png",
    showOnHomeCategories: true,
    showOnHomeFeatured: false,
    status: "In Stock"
  },

  // Home Featured 4-Grid Items (Figma "Box Deal B-Stock ASA")
  {
    id: "PROD-006",
    name: "Box Deal B-Stock ASA (Set 1)",
    category: "Crockery",
    subcategory: "Plate sets",
    price: 32999,
    costPrice: 22000,
    stock: 7,
    sku: "EW-BX-01",
    image: "/assets/images/prod-1.png",
    showOnHomeCategories: false,
    showOnHomeFeatured: true,
    status: "In Stock"
  },
  {
    id: "PROD-007",
    name: "Box Deal B-Stock ASA (Set 2)",
    category: "Crockery",
    subcategory: "Plate sets",
    price: 32999,
    costPrice: 22000,
    stock: 5,
    sku: "EW-BX-02",
    image: "/assets/images/prod-2.png",
    showOnHomeCategories: false,
    showOnHomeFeatured: true,
    status: "In Stock"
  },
  {
    id: "PROD-008",
    name: "Box Deal B-Stock ASA (Set 3)",
    category: "Crockery",
    subcategory: "Plate sets",
    price: 32999,
    costPrice: 22000,
    stock: 3,
    sku: "EW-BX-03",
    image: "/assets/images/prod-3.png",
    showOnHomeCategories: false,
    showOnHomeFeatured: true,
    status: "Low Stock"
  },
  {
    id: "PROD-009",
    name: "Box Deal B-Stock ASA (Set 4)",
    category: "Crockery",
    subcategory: "Plate sets",
    price: 32999,
    costPrice: 22000,
    stock: 11,
    sku: "EW-BX-04",
    image: "/assets/images/prod-4.png",
    showOnHomeCategories: false,
    showOnHomeFeatured: true,
    status: "In Stock"
  },

  // Silverware Items
  {
    id: "PROD-010",
    name: "Royal Silver Bowl",
    category: "Silverware",
    subcategory: "Silver Bowl",
    price: 4500,
    costPrice: 3100,
    stock: 14,
    sku: "EW-SV-01",
    image: "/assets/images/cat-glass-bowl-1.png",
    showOnHomeCategories: false,
    showOnHomeFeatured: false,
    status: "In Stock"
  },
  {
    id: "PROD-011",
    name: "Embossed Silver Platter",
    category: "Silverware",
    subcategory: "Silver Platters",
    price: 8200,
    costPrice: 5600,
    stock: 6,
    sku: "EW-SV-02",
    image: "/assets/images/prod-2.png",
    showOnHomeCategories: false,
    showOnHomeFeatured: false,
    status: "In Stock"
  },

  // Brass Ware Items
  {
    id: "PROD-012",
    name: "Handmade Brass Serving Thaal",
    category: "Brass Ware",
    subcategory: "Brass Serving / Thaal",
    price: 6800,
    costPrice: 4800,
    stock: 8,
    sku: "EW-BW-01",
    image: "/assets/images/shop-2.svg",
    showOnHomeCategories: false,
    showOnHomeFeatured: false,
    status: "In Stock"
  },

  // Mugs & Cups
  {
    id: "PROD-013",
    name: "Terracotta Artisan Mug",
    category: "Crockery",
    subcategory: "Mugs",
    price: 100,
    costPrice: 50,
    stock: 45,
    sku: "EW-TM-13",
    image: "/assets/images/shop-2.svg",
    showOnHomeCategories: false,
    showOnHomeFeatured: false,
    status: "In Stock"
  }
];

// Helper to get all categories flat list
export function getAvailableCategories() {
  return initialNavbarCategories.map(c => c.name);
}

