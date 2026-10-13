// Clean Modular Data Store for Crockery / Shop / Categories
export const categoryTitles = {
  'brass-serving-thaal': 'Brass Serving / Thaal',
  'brass-ware': 'Brass Ware',
  'brass-chafing-dish': 'Brass Chafing Dish',
  'silver-bowl': 'Silver Bowl',
  'silver-platters': 'Silver Platters',
  'chafing-dish': 'Chafing Dish',
  'copperware': 'Copperware',
  'serveware': 'Serveware',
  'casserole-dish': 'Casserole Dish',
  'plate-sets': 'Plate sets',
  'tea-cups-and-saucers': 'Tea cups and Saucers',
  '2-tier-3-tier': '2-Tier & 3-Tier',
  'dessert-set': 'Dessert Set',
  'cutlery': 'Cutlery',
  'cake-stand': 'Cake Stand',
  'cake-lifter': 'Cake Lifter',
  'mugs': 'Mugs',
  'trays': 'Trays',
  'glass-and-water-set': 'Glass and water set',
  'jars': 'Jars',
  'glasslock-containers': 'GlassLock Storage Containers',
  'candle-stands': 'Candle stands',
  'accessories': 'Accessories',
  'planters': 'Planters',
  'table-mats-placemats': 'Table mats/ placemats',
  'bathroom-set': 'Bathroom Set'
};

// General Shop Products (Figma Pottery items)
export const ceramicPotteryProducts = [
  { 
    id: 'sp-1', 
    name: 'Ceramic Plant Pot', 
    type: 'plant-pot', 
    material: 'ceramic', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-1.svg', 
    category: 'planters',
    rating: 5 
  },
  { 
    id: 'sp-2', 
    name: 'Terracotta Mug', 
    type: 'mug', 
    material: 'terracotta', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-2.svg', 
    category: 'mugs',
    rating: 5 
  },
  { 
    id: 'sp-3', 
    name: 'Earthenware Tea Pot', 
    type: 'tea-pot', 
    material: 'earthenware', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-3.svg', 
    category: 'tea-sets',
    rating: 5 
  },
  { 
    id: 'sp-4', 
    name: 'Ceramic Glass', 
    type: 'glass', 
    material: 'ceramic', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-4.svg', 
    category: 'glass-and-water-set',
    rating: 5 
  },
  { 
    id: 'sp-5', 
    name: 'Stoneware Bowl', 
    type: 'bowl', 
    material: 'ceramic', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-5.svg', 
    category: 'serveware',
    rating: 5 
  },
  { 
    id: 'sp-6', 
    name: 'Ceramic Glass', 
    type: 'glass', 
    material: 'ceramic', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-4.svg', 
    category: 'glass-and-water-set',
    rating: 5 
  },
  { 
    id: 'sp-7', 
    name: 'Ceramic Plant Pot', 
    type: 'plant-pot', 
    material: 'ceramic', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-1.svg', 
    category: 'planters',
    rating: 5 
  },
  { 
    id: 'sp-8', 
    name: 'Terracotta Mug', 
    type: 'mug', 
    material: 'terracotta', 
    price: 100, 
    priceDisplay: 'PKR 100', 
    isSoldOut: false, 
    image: '/assets/images/shop-2.svg', 
    category: 'mugs',
    rating: 5 
  }
];

// Category Products (Brassware, Serveware, etc.)
export const categoryProducts = [
  { 
    id: 'bp-1', 
    name: 'Brass serving platter', 
    type: 'platter', 
    material: 'brass', 
    price: 23500, 
    priceDisplay: 'Rs.23,500.00 PKR', 
    isSoldOut: true, 
    image: '/assets/images/about-promo-1.png', 
    category: 'brass-serving-thaal'
  },
  { 
    id: 'bp-2', 
    name: 'Royal Gold Hammered Brass Platter', 
    type: 'platter', 
    material: 'brass', 
    price: 17500, 
    priceDisplay: 'From Rs.17,500.00 PKR', 
    isSoldOut: false, 
    image: '/assets/images/about-promo-2.png', 
    category: 'brass-serving-thaal'
  },
  { 
    id: 'bp-3', 
    name: 'Royal Brass Handi Dish', 
    type: 'handi', 
    material: 'brass', 
    price: 18500, 
    priceDisplay: 'From Rs.18,500.00 PKR', 
    isSoldOut: false, 
    image: '/assets/images/image-removebg-preview 1.png', 
    category: 'brass-serving-thaal'
  },
  { 
    id: 'bp-4', 
    name: 'Brass Serving Platter', 
    type: 'platter', 
    material: 'brass', 
    price: 22000, 
    priceDisplay: 'From Rs.22,000.00 PKR', 
    isSoldOut: false, 
    image: '/assets/images/shop-3.svg', 
    category: 'brass-serving-thaal'
  },
  { 
    id: 'bp-5', 
    name: 'Handcrafted Brass Thaal', 
    type: 'thaal', 
    material: 'brass', 
    price: 19500, 
    priceDisplay: 'From Rs.19,500.00 PKR', 
    isSoldOut: false, 
    image: '/assets/images/shop-5.svg', 
    category: 'brass-serving-thaal'
  },
  { 
    id: 'bp-6', 
    name: 'Royal Silver Chafing Dish', 
    type: 'chafing', 
    material: 'silver', 
    price: 26000, 
    priceDisplay: 'Rs.26,000.00 PKR', 
    isSoldOut: false, 
    image: '/assets/images/cat-bulb-vase.png', 
    category: 'brass-serving-thaal'
  },
  { 
    id: 'bp-7', 
    name: 'Luxury Brass Bowl', 
    type: 'bowl', 
    material: 'brass', 
    price: 14500, 
    priceDisplay: 'Rs.14,500.00 PKR', 
    isSoldOut: false, 
    image: '/assets/images/cat-ripple-vase.png', 
    category: 'brass-serving-thaal'
  }
];

