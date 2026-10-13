/**
 * Complete Administrative Dataset for Earthware Crockery & Pottery
 * Powering all Store CMS & Order Management:
 * - Products, Categories & Subcategories from Navbar
 * - Services & Inquiries from /service
 * - News Articles & Ceramic Blog from /news
 * - Homepage Content & Testimonials from /
 * - Orders & Foodpanda-style Deliveries
 */

export const adminKpis = {
  totalRevenue: 284500, // PKR
  revenueGrowth: '+14.2%',
  totalOrders: 148,
  ordersGrowth: '+8.5%',
  activeDeliveries: 4,
  lowStockItems: 3,
  totalCustomers: 92,
  customerGrowth: '+12%',
  avgOrderValue: 1922 // PKR
};

// ================= 1. ORDERS (Foodpanda-style Live Tracker) =================
export const adminOrdersList = [
  {
    id: 'ORD-8921',
    customer: 'Sarah Khan',
    phone: '+92 300 1234567',
    address: 'DHA Phase 5, Sector C, Lahore',
    city: 'Lahore',
    itemsCount: 3,
    items: [
      { name: 'River Vase', qty: 1, price: 100 },
      { name: 'Terracotta Mug', qty: 2, price: 100 }
    ],
    total: 3200,
    status: 'Out for Delivery',
    statusColor: 'purple',
    rider: 'Ali Hassan (Bike-78)',
    riderPhone: '+92 311 4455667',
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Unpaid',
    time: '13 Oct, 04:30 PM'
  },
  {
    id: 'ORD-8920',
    customer: 'Usman Tariq',
    phone: '+92 321 9876543',
    address: 'Gulberg III, Main Boulevard, Lahore',
    city: 'Lahore',
    itemsCount: 1,
    items: [
      { name: 'Box Deal B-Stock ASA', qty: 1, price: 32999 }
    ],
    total: 32999,
    status: 'Preparing',
    statusColor: 'blue',
    rider: 'Assigned (Hamza R.)',
    riderPhone: '+92 320 8899112',
    paymentMethod: 'Online Paid',
    paymentStatus: 'Paid',
    time: '13 Oct, 04:15 PM'
  },
  {
    id: 'ORD-8919',
    customer: 'Ayesha Malik',
    phone: '+92 333 4567890',
    address: 'Model Town, Block J, Lahore',
    city: 'Lahore',
    itemsCount: 4,
    items: [
      { name: 'Ripple Vase', qty: 1, price: 100 },
      { name: 'Glass Bowl Premium', qty: 3, price: 100 }
    ],
    total: 4500,
    status: 'Delivered',
    statusColor: 'emerald',
    rider: 'Zubair Ahmad',
    riderPhone: '+92 302 7788990',
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Paid',
    time: '13 Oct, 03:20 PM'
  },
  {
    id: 'ORD-8918',
    customer: 'Hamza Farooq',
    phone: '+92 301 5551234',
    address: 'Bahria Town, Sector B, Lahore',
    city: 'Lahore',
    itemsCount: 2,
    items: [
      { name: 'Terracotta Mug', qty: 2, price: 100 }
    ],
    total: 2000,
    status: 'Pending',
    statusColor: 'amber',
    rider: 'Unassigned',
    riderPhone: '-',
    paymentMethod: 'Cash on Delivery',
    paymentStatus: 'Unpaid',
    time: '13 Oct, 02:45 PM'
  },
  {
    id: 'ORD-8917',
    customer: 'Zainab Noor',
    phone: '+92 312 8889900',
    address: 'Johar Town, Phase 1, Lahore',
    city: 'Lahore',
    itemsCount: 5,
    items: [
      { name: 'Plate sets', qty: 1, price: 100 },
      { name: 'Cutlery Set', qty: 4, price: 100 }
    ],
    total: 7800,
    status: 'Delivered',
    statusColor: 'emerald',
    rider: 'Bilal Khan',
    riderPhone: '+92 334 1122334',
    paymentMethod: 'Online Paid',
    paymentStatus: 'Paid',
    time: '13 Oct, 01:10 PM'
  }
];

// ================= 2. NAVBAR CATEGORIES & SUBCATEGORIES =================
export const adminCategoriesList = [
  {
    id: 'cat-crockery',
    name: 'Crockery',
    badge: 'Primary',
    productCount: 48,
    status: 'Active',
    subcategories: [
      'Plate sets', 'Tea cups and Saucers', '2-Tier & 3-Tier', 'Dessert Set',
      'Cutlery', 'Cake Stand', 'Cake Lifter', 'Mugs', 'Trays',
      'Glass and water set', 'Jars', 'GlassLock Storage Containers'
    ]
  },
  {
    id: 'cat-new-arrivals',
    name: 'New Arrivals',
    badge: 'Trending',
    productCount: 16,
    status: 'Active',
    subcategories: ['Autumn Glazes', 'Hand-thrown Mugs', 'Mini Planters']
  },
  {
    id: 'cat-silverware',
    name: 'Silverware',
    badge: 'Luxury',
    productCount: 12,
    status: 'Active',
    subcategories: ['Silver Bowl', 'Silver Platters', 'Chafing Dish']
  },
  {
    id: 'cat-copperware',
    name: 'Copperware',
    badge: 'Traditional',
    productCount: 9,
    status: 'Active',
    subcategories: ['Hand-hammered Bowls', 'Copper Water Vessels', 'Serving Sets']
  },
  {
    id: 'cat-brass-ware',
    name: 'Brass Ware',
    badge: 'Artisanal',
    productCount: 14,
    status: 'Active',
    subcategories: ['Brass Ware', 'Brass Serving / Thaal', 'Brass Chafing Dish']
  },
  {
    id: 'cat-serveware',
    name: 'Serveware',
    badge: 'Popular',
    productCount: 22,
    status: 'Active',
    subcategories: ['Dinner Platters', 'Salad Bowls', 'Serving Spoons']
  },
  {
    id: 'cat-casserole-dish',
    name: 'Casserole Dish',
    badge: 'Kitchen',
    productCount: 8,
    status: 'Active',
    subcategories: ['Clay Casseroles', 'Double Handled Dishes', 'Baking Vessels']
  },
  {
    id: 'cat-home-decor',
    name: 'Home Decor',
    badge: 'Featured',
    productCount: 30,
    status: 'Active',
    subcategories: ['Candle stands', 'Accessories', 'Planters', 'Table mats/ placemats']
  },
  {
    id: 'cat-bathroom-set',
    name: 'Bathroom Set',
    badge: 'Lifestyle',
    productCount: 6,
    status: 'Active',
    subcategories: ['Ceramic Soap Dishes', 'Toothbrush Holders', 'Lotion Dispensers']
  }
];

// ================= 3. PRODUCTS INVENTORY =================
export const adminProductsList = [
  {
    id: 'P-101',
    name: 'River Vase',
    category: 'Home Decor',
    subcategory: 'Accessories',
    price: 100,
    costPrice: 65,
    stock: 24,
    sku: 'EW-RV-01',
    image: '/assets/images/cat-river-vase.png',
    status: 'In Stock'
  },
  {
    id: 'P-102',
    name: 'Ripple Vase',
    category: 'Home Decor',
    subcategory: 'Planters',
    price: 100,
    costPrice: 70,
    stock: 18,
    sku: 'EW-RP-02',
    image: '/assets/images/cat-ripple-vase.png',
    status: 'In Stock'
  },
  {
    id: 'P-103',
    name: 'Box Deal B-Stock ASA',
    category: 'Crockery',
    subcategory: 'Plate sets',
    price: 32999,
    costPrice: 22000,
    stock: 5,
    sku: 'EW-BX-03',
    image: '/assets/images/prod-1.png',
    status: 'Low Stock'
  },
  {
    id: 'P-104',
    name: 'Terracotta Mug',
    category: 'Crockery',
    subcategory: 'Mugs',
    price: 100,
    costPrice: 50,
    stock: 42,
    sku: 'EW-TM-04',
    image: '/assets/images/shop-2.svg',
    status: 'In Stock'
  },
  {
    id: 'P-105',
    name: 'Ceramic Plant Pot',
    category: 'Home Decor',
    subcategory: 'Planters',
    price: 100,
    costPrice: 55,
    stock: 2,
    sku: 'EW-CP-05',
    image: '/assets/images/shop-1.svg',
    status: 'Low Stock'
  },
  {
    id: 'P-106',
    name: 'Glass Bowl Premium',
    category: 'Crockery',
    subcategory: 'Glass and water set',
    price: 100,
    costPrice: 60,
    stock: 0,
    sku: 'EW-GB-06',
    image: '/assets/images/cat-glass-bowl-1.png',
    status: 'Out of Stock'
  },
  {
    id: 'P-107',
    name: 'Tea Cups & Saucers Set',
    category: 'Crockery',
    subcategory: 'Tea cups and Saucers',
    price: 100,
    costPrice: 68,
    stock: 15,
    sku: 'EW-TC-07',
    image: '/assets/images/cat-glass-bowl-2.png',
    status: 'In Stock'
  }
];

// ================= 4. SERVICES DATA (/service) =================
export const adminServicesList = [
  {
    id: 'srv-1',
    title: 'Gift Items & Corporate Boxes',
    category: 'Gifting',
    description: 'Exquisite range of pottery services designed to elevate and enhance your living space.',
    image: '/assets/images/shop-2.svg',
    activeRequests: 4,
    status: 'Published'
  },
  {
    id: 'srv-2',
    title: 'Office & Desk Planters',
    category: 'Commercial',
    description: 'Artisan hand-finished desk planters and containers suited for contemporary workspaces.',
    image: '/assets/images/shop-1.svg',
    activeRequests: 2,
    status: 'Published'
  },
  {
    id: 'srv-3',
    title: 'Bespoke Custom Tableware',
    category: 'Custom Craft',
    description: 'Bespoke hand-crafted earthenware tea and beverage vessels made with organic local clays.',
    image: '/assets/images/shop-2.svg',
    activeRequests: 7,
    status: 'Published'
  },
  {
    id: 'srv-4',
    title: 'Home Decor & Ambient Ceramics',
    category: 'Interior Decor',
    description: 'Tactile pastel ceramic tumblers and minimalist decorative pieces for table settings.',
    image: '/assets/images/shop-4.svg',
    activeRequests: 3,
    status: 'Published'
  },
  {
    id: 'srv-5',
    title: 'Restorative Pottery Repair',
    category: 'Restoration',
    description: 'Artisanal kintsugi and ceramic restoration services for cherished heirloom pottery.',
    image: '/assets/images/shop-5.svg',
    activeRequests: 5,
    status: 'Published'
  }
];

// Client inquiries sent via /service
export const adminServiceInquiries = [
  {
    id: 'INQ-401',
    client: 'Hashim Associates',
    service: 'Office & Desk Planters (Bulk)',
    email: 'contact@hashim.pk',
    phone: '+92 300 4545123',
    units: 50,
    budget: 'PKR 45,000',
    status: 'New Inquiry',
    date: '13 Oct'
  },
  {
    id: 'INQ-402',
    client: 'Laila Weddings',
    service: 'Gift Items & Favors',
    email: 'laila.wed@gmail.com',
    phone: '+92 321 7766554',
    units: 120,
    budget: 'PKR 110,000',
    status: 'Quote Sent',
    date: '12 Oct'
  }
];

// ================= 5. BLOG & NEWS CMS (/news) =================
export const adminArticlesList = [
  {
    id: 'art-1',
    title: 'Limited-Edition Handmade Mug',
    author: 'American Spa Staff',
    date: 'Apr 16, 2024',
    category: 'Ceramic Art',
    views: '1,420',
    status: 'Published',
    tags: ['TERRATASSE', 'EARTHSIP', 'CLAYCRAFT']
  },
  {
    id: 'art-2',
    title: 'Spa Treatments: Luxury for Wellness',
    author: 'American Spa Staff',
    date: 'Apr 16, 2024',
    category: 'Wellness',
    views: '890',
    status: 'Published',
    tags: ['PURECLAY', 'MUGAURA']
  },
  {
    id: 'art-3',
    title: 'Stoneware hand thrown pottery mugs',
    author: 'Beth French Pottery',
    date: 'Apr 16, 2024',
    category: 'Technique',
    views: '2,140',
    status: 'Published',
    tags: ['ECOMUG', 'CLAYCRAFT']
  }
];

// ================= 6. HOMEPAGE CMS & CONTENT =================
export const adminHomeContent = {
  hero: {
    badge: 'Feel it, Feel the Uniqueness.',
    title: 'Feel it, Feel the Uniqueness.',
    subtitle: 'Is filament of the highest quality that we are proud to offer our customers.',
    ctaText: 'Buy Now',
    ctaLink: '#products'
  },
  promo: {
    newsletterDiscount: 'Special PKR discount on your first order',
    couponCode: 'WELCOME15',
    activeDiscountValue: 'PKR 1,500'
  },
  testimonials: [
    {
      name: 'Md Hamza',
      location: 'Sydney, Australia',
      quote: 'Exceptional craftsmanship and unique earthenware textures.',
      avatar: '/assets/images/avatar-1.png'
    },
    {
      name: 'Jenny Wilson',
      location: 'Miles, Esther',
      quote: 'Handcrafted stoneware mugs of genuine heirloom quality.',
      avatar: '/assets/images/avatar-jenny.png'
    },
    {
      name: 'Devon Lane',
      location: 'Flores, Juanita',
      quote: 'Fast shipping, elegant glazes, and stunning pottery.',
      avatar: '/assets/images/avatar-devon.png'
    }
  ]
};

// ================= 7. SUBSCRIBERS LIST =================
export const adminSubscribersList = [
  { email: 'sarah.k@gmail.com', date: 'Today, 02:10 PM', coupon: 'WELCOME15' },
  { email: 'usman.pottery@yahoo.com', date: 'Today, 11:45 AM', coupon: 'WELCOME15' },
  { email: 'amna.design@hotmail.com', date: 'Yesterday', coupon: 'WELCOME15' },
  { email: 'zubair.art@outlook.com', date: '11 Oct', coupon: 'WELCOME15' }
];

// ================= 8. CUSTOMERS DIRECTORY =================
export const adminCustomersList = [
  {
    id: 'CUST-01',
    name: 'Sarah Khan',
    email: 'sarah.khan@example.com',
    phone: '+92 300 1234567',
    location: 'Lahore, Punjab',
    ordersCount: 4,
    totalSpent: 12400,
    lastOrder: 'Today'
  },
  {
    id: 'CUST-02',
    name: 'Usman Tariq',
    email: 'usman.tariq@gmail.com',
    phone: '+92 321 9876543',
    location: 'Lahore, Punjab',
    ordersCount: 2,
    totalSpent: 45999,
    lastOrder: 'Today'
  },
  {
    id: 'CUST-03',
    name: 'Ayesha Malik',
    email: 'ayesha.m@outlook.com',
    phone: '+92 333 4567890',
    location: 'Lahore, Punjab',
    ordersCount: 6,
    totalSpent: 28500,
    lastOrder: 'Today'
  },
  {
    id: 'CUST-04',
    name: 'Hamza Farooq',
    email: 'hamza.f@yahoo.com',
    phone: '+92 301 5551234',
    location: 'Lahore, Punjab',
    ordersCount: 1,
    totalSpent: 2000,
    lastOrder: 'Today'
  },
  {
    id: 'CUST-05',
    name: 'Zainab Noor',
    email: 'zainab.noor@hotmail.com',
    phone: '+92 312 8889900',
    location: 'Lahore, Punjab',
    ordersCount: 8,
    totalSpent: 39800,
    lastOrder: 'Yesterday'
  }
];
