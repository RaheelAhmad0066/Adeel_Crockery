/**
 * Exact Categories Data matching Figma Node 1754:1755
 */
export const categoriesData = [
  { id: 1, name: 'River Vase', price: 100, image: 'assets/images/cat-river-vase.png', bg: '#EDEDED' },
  { id: 2, name: 'Ripple Vase', price: 100, image: 'assets/images/cat-ripple-vase.png', bg: '#FFFFFF' },
  { id: 3, name: 'Bulb Vase', price: 100, image: 'assets/images/cat-bulb-vase.png', bg: '#FFFFFF' },
  { id: 4, name: 'Glass Bowl', price: 100, image: 'assets/images/cat-glass-bowl-1.png', bg: '#FFFFFF' },
  { id: 5, name: 'Glass Bowl', price: 100, image: 'assets/images/cat-glass-bowl-2.png', bg: '#FFFFFF', hasNextArrow: true }
];

/**
 * Exact Products Data matching Figma Node 1754:2258
 */
export const productsData = [
  { id: 101, name: 'Box Deal B-Stock ASA', price: 32999, currency: '€', image: 'assets/images/prod-1.png' },
  { id: 102, name: 'Box Deal B-Stock ASA', price: 32999, currency: '€', image: 'assets/images/prod-2.png' },
  { id: 103, name: 'Box Deal B-Stock ASA', price: 32999, currency: '€', image: 'assets/images/prod-3.png' },
  { id: 104, name: 'Box Deal B-Stock ASA', price: 32999, currency: '€', image: 'assets/images/prod-4.png' },
  { id: 105, name: 'Box Deal B-Stock ASA', price: 32999, currency: '€', image: 'assets/images/prod-5.png' }
];

/**
 * Exact Testimonials Data matching Figma Node 1754:3171
 */
export const testimonialsData = [
  {
    id: 't1',
    name: 'Md Hamza',
    location: 'Sydney, Australia.',
    avatar: 'assets/images/avatar-1.png',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, conse cta dipiscing Lorem ipsum',
    bgColor: '#FFF0EB',
    rotation: '-rotate-12',
    isCenter: false
  },
  {
    id: 't2',
    name: 'Jenny Wilson',
    location: 'Miles, Esther',
    avatar: 'assets/images/avatar-jenny.png',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, conse cta dipiscing Lorem ipsum',
    bgColor: '#F0F2E5',
    rotation: 'rotate-0',
    isCenter: true
  },
  {
    id: 't3',
    name: 'Devon Lane',
    location: 'Flores, Juanita',
    avatar: 'assets/images/avatar-devon.png',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, conse cta dipiscing Lorem ipsum',
    bgColor: '#B8DBE5',
    rotation: 'rotate-12',
    isCenter: false
  }
];

/**
 * Exact Blog Data matching Figma Node 1754:3749
 */
export const blogData = {
  featured: [
    {
      id: 'b1',
      author: 'By American Spa Staff',
      date: 'Apr 16, 2004',
      title: 'Stoneware hand thrown pottery mugs',
      excerpt: 'Beth French Pottery - unique hand thrown stoneware mugs - in two sizes - with hand painted design on the exterior and the option...',
      image: 'assets/images/blog-main-1.png'
    },
    {
      id: 'b2',
      author: 'By Kathryn Murphy',
      date: 'Apr 16, 2004',
      title: 'Handcrafted Stoneware Mugs',
      excerpt: 'Beth French Pottery presents unique, hand-thrown stoneware mugs available in two sizes. Featuring hand-painted designs on the...',
      image: 'assets/images/blog-main-2.png'
    }
  ],
  compact: [
    {
      id: 'bc1',
      author: 'By American Spa Staff',
      date: 'Feb 14, 2024',
      title: 'Limited-Edition Handmade Mug',
      description: 'Is it just us, or does this mug look like a sandy beach? It gets its bright color from Brooklyn-based ceramics',
      image: 'assets/images/blog-side-1.png'
    },
    {
      id: 'bc2',
      author: 'By Cameron Williamson',
      date: 'Oct 24, 2024',
      title: '160Z Stoneware Mug SEA Glass',
      description: 'Handle with care. May chip or break on impact. Microwave safe, Dishwasher safe and food safe. Wash with a',
      image: 'assets/images/blog-side-2.png'
    },
    {
      id: 'bc3',
      author: 'By Kathryn Murphy',
      date: 'Sep 22, 2024',
      title: 'Round Enamel Cup Mockup,',
      description: 'Handle with care. May chip or break on impact. Microwave safe, Dishwasher safe and food safe. Wash with a',
      image: 'assets/images/blog-side-3.png'
    },
    {
      id: 'bc4',
      author: 'By Brooklyn Simmons',
      date: 'Apr 14, 2024',
      title: 'Pink - Landscape collection',
      description: 'Care Instructions : Handle with care. May chip or break on impact. Microwave safe Dishwasher safe and',
      image: 'assets/images/blog-side-4.png'
    }
  ]
};

/**
 * Detailed Products Data matching Figma Shop & Product Detail screens
 */
export const shopProductsData = [
  { 
    id: 'sp-1', 
    name: 'Ceramic Plant Pot', 
    heroSubtitle: 'Terracotta Mug',
    categoryBadge: 'Earthenware',
    badgePill: 'Tea Pot',
    sku: 'TTC-209',
    category: 'Mugs',
    price: 230.80, 
    originalPrice: 230.80,
    currency: '$',
    image: '/assets/images/shop-1.svg', 
    rating: 5,
    description: 'Add a touch of elegance to your space. This sleek, minimalist pot is perfect for any plant, blending style with simplicity for a modern, natural vibe.',
    overview: [
      'Transform your space with the Premium Ceramic Plant Pot, a blend of style, functionality, and craftsmanship. This beautifully designed pot is crafted from high-quality ceramic, ensuring both durability and elegance. With a smooth, matte finish, it provides a refined backdrop that complements any type of greenery, from cascading pothos to vibrant snake plants.',
      'Its generous size offers ample room for plant roots to grow, promoting a healthy environment for your indoor garden. The pot is designed with a drainage hole and matching saucer to prevent overwatering, ensuring your plants thrive.',
      'Its minimalist aesthetic effortlessly fits into any decor style—whether modern, bohemian, or classic—making it a versatile choice for your home or office. Each pot is fired at high temperatures for added strength, resulting in a sturdy piece that maintains its beauty over time. Ideal for plant enthusiasts and home decorators alike, the Premium Ceramic Plant Pot is more than just a planter.'
    ],
    info: {
      dimensions: '14cm H x 15cm W x 15cm D',
      weight: '850 grams',
      material: '100% High-fire Ceramic Glaze & Terracotta',
      drainage: 'Built-in drainage hole with matching ceramic saucer',
      care: 'Wipe clean with a damp cloth. Hand wash recommended. Avoid abrasive cleaners.'
    }
  },
  { 
    id: 'sp-2', 
    name: 'Terracotta Mug', 
    heroSubtitle: 'Terracotta Mug',
    categoryBadge: 'Earthenware',
    badgePill: 'Tea Pot',
    sku: 'TTC-210',
    category: 'Mugs',
    price: 100.00, 
    originalPrice: 120.00,
    currency: '$',
    image: '/assets/images/shop-2.svg', 
    rating: 5,
    description: 'Handcrafted rustic terracotta mug, perfectly sculpted for rich morning coffee and aromatic evening teas.',
    overview: [
      'Handcrafted with organic earth clays, this Terracotta Mug features tactile artisan ridges and a heat-retaining ceramic wall.',
      'Each piece is individually wheel-thrown and wood-fired to achieve its one-of-a-kind color gradient and comfortable ergonomic grip.',
      'Food-safe glazed interior ensures effortless cleaning and preserves beverage aroma without altering flavors.'
    ],
    info: {
      dimensions: '10cm H x 9cm Diameter',
      weight: '380 grams',
      material: 'Natural Terracotta Clay',
      drainage: 'N/A',
      care: 'Dishwasher & Microwave safe. Hand wash recommended.'
    }
  },
  { 
    id: 'sp-3', 
    name: 'Earthenware Tea Pot', 
    heroSubtitle: 'Earthenware Tea Pot',
    categoryBadge: 'Earthenware',
    badgePill: 'Tea Pot',
    sku: 'TTC-211',
    category: 'Tea Sets',
    price: 100.00, 
    originalPrice: 135.00,
    currency: '$',
    image: '/assets/images/shop-3.svg', 
    rating: 5,
    description: 'Traditional earthenware teapot with precision pour spout and heat-insulated natural finish handle.',
    overview: [
      'Engineered for tea connoisseurs, the Earthenware Tea Pot delivers superior thermal insulation for optimal steeping temperatures.',
      'Features an internal ceramic filter grid for loose-leaf teas, ensuring a smooth, sediment-free pour every time.',
      'Finished with a gentle matte earth patina that develops deeper character with each brew.'
    ],
    info: {
      dimensions: '18cm H x 22cm W (with spout & handle)',
      weight: '920 grams',
      material: 'High-density Earthenware',
      drainage: 'Internal strainer spout',
      care: 'Rinse with warm water; do not heat directly over open stove fire.'
    }
  },
  { 
    id: 'sp-4', 
    name: 'Ceramic Glass', 
    heroSubtitle: 'Ceramic Glass Tumbler',
    categoryBadge: 'Drinkware',
    badgePill: 'Cups',
    sku: 'TTC-212',
    category: 'Glass & Cups',
    price: 100.00, 
    originalPrice: 110.00,
    currency: '$',
    image: '/assets/images/shop-4.svg', 
    rating: 5,
    description: 'A contemporary ceramic tumbler designed for chilled juices, cocktails, and sparkling refreshments.',
    overview: [
      'This handcrafted ceramic tumbler brings architectural serenity to your dining table.',
      'Double-walled ceramic texture prevents condensation while keeping cold drinks frosty.',
      'Smooth pastel glaze transitions softly into natural unglazed stoneware base.'
    ],
    info: {
      dimensions: '12cm H x 8cm Diameter',
      weight: '310 grams',
      material: 'Stoneware Ceramic',
      drainage: 'N/A',
      care: 'Dishwasher safe.'
    }
  },
  { 
    id: 'sp-5', 
    name: 'Stoneware Bowl', 
    heroSubtitle: 'Artisan Stoneware Bowl',
    categoryBadge: 'Serveware',
    badgePill: 'Bowls',
    sku: 'TTC-213',
    category: 'Serveware',
    price: 100.00, 
    originalPrice: 125.00,
    currency: '$',
    image: '/assets/images/shop-5.svg', 
    rating: 5,
    description: 'Ribbed stoneware bowl with sea-foam teal interior glaze, ideal for soups, salads, and artisan cereal.',
    overview: [
      'Meticulously thrown on a pottery wheel with deep textured exterior grooves inspired by coastal sea ripples.',
      'The luminous reactive glaze interior contrasts gracefully with the unglazed tactile raw stoneware exterior.',
      'Extremely durable, chip-resistant, and oven safe up to 220°C.'
    ],
    info: {
      dimensions: '8cm H x 17cm Diameter',
      weight: '540 grams',
      material: 'Reactive Glaze Stoneware',
      drainage: 'N/A',
      care: 'Microwave, oven, and dishwasher safe.'
    }
  },
  { 
    id: 'sp-6', 
    name: 'Ceramic Glass', 
    heroSubtitle: 'Ceramic Glass Tumbler',
    categoryBadge: 'Drinkware',
    badgePill: 'Cups',
    sku: 'TTC-214',
    category: 'Glass & Cups',
    price: 100.00, 
    originalPrice: 110.00,
    currency: '$',
    image: '/assets/images/shop-4.svg', 
    rating: 5,
    description: 'A contemporary ceramic tumbler designed for chilled juices, cocktails, and sparkling refreshments.',
    overview: [
      'This handcrafted ceramic tumbler brings architectural serenity to your dining table.',
      'Double-walled ceramic texture prevents condensation while keeping cold drinks frosty.',
      'Smooth pastel glaze transitions softly into natural unglazed stoneware base.'
    ],
    info: {
      dimensions: '12cm H x 8cm Diameter',
      weight: '310 grams',
      material: 'Stoneware Ceramic',
      drainage: 'N/A',
      care: 'Dishwasher safe.'
    }
  },
  { 
    id: 'sp-7', 
    name: 'Ceramic Plant Pot', 
    heroSubtitle: 'Terracotta Mug',
    categoryBadge: 'Earthenware',
    badgePill: 'Tea Pot',
    sku: 'TTC-215',
    category: 'Planters',
    price: 100.00, 
    originalPrice: 120.00,
    currency: '$',
    image: '/assets/images/shop-1.svg', 
    rating: 5,
    description: 'Transform your space with the Premium Ceramic Plant Pot, crafted from high-quality ceramic.',
    overview: [
      'Transform your space with the Premium Ceramic Plant Pot, a blend of style, functionality, and craftsmanship.',
      'Its generous size offers ample room for plant roots to grow, promoting a healthy environment for your indoor garden.',
      'Its minimalist aesthetic effortlessly fits into any decor style—whether modern, bohemian, or classic.'
    ],
    info: {
      dimensions: '14cm H x 15cm W x 15cm D',
      weight: '850 grams',
      material: '100% High-fire Ceramic Glaze & Terracotta',
      drainage: 'Built-in drainage hole with matching ceramic saucer',
      care: 'Wipe clean with a damp cloth.'
    }
  },
  { 
    id: 'sp-8', 
    name: 'Terracotta Mug', 
    heroSubtitle: 'Terracotta Mug',
    categoryBadge: 'Earthenware',
    badgePill: 'Tea Pot',
    sku: 'TTC-216',
    category: 'Mugs',
    price: 100.00, 
    originalPrice: 120.00,
    currency: '$',
    image: '/assets/images/shop-2.svg', 
    rating: 5,
    description: 'Handcrafted rustic terracotta mug, perfectly sculpted for rich morning coffee and aromatic evening teas.',
    overview: [
      'Handcrafted with organic earth clays, this Terracotta Mug features tactile artisan ridges and a heat-retaining ceramic wall.',
      'Each piece is individually wheel-thrown and wood-fired to achieve its one-of-a-kind color gradient.',
      'Food-safe glazed interior ensures effortless cleaning and preserves beverage aroma.'
    ],
    info: {
      dimensions: '10cm H x 9cm Diameter',
      weight: '380 grams',
      material: 'Natural Terracotta Clay',
      drainage: 'N/A',
      care: 'Dishwasher & Microwave safe.'
    }
  }
];

export function getProductById(id) {
  if (!id) return shopProductsData[0];
  const found = shopProductsData.find((p) => String(p.id) === String(id));
  if (found) return found;

  // Check categoriesData or productsData fallback
  const catFound = categoriesData.find((c) => String(c.id) === String(id));
  if (catFound) {
    return {
      id: catFound.id,
      name: catFound.name,
      heroSubtitle: catFound.name,
      categoryBadge: 'Ceramics',
      badgePill: 'Handcrafted',
      sku: `CAT-00${catFound.id}`,
      category: 'Vases & Bowls',
      price: Number(catFound.price) || 100.00,
      originalPrice: (Number(catFound.price) || 100.00) + 20,
      currency: '$',
      image: catFound.image.startsWith('/') ? catFound.image : `/${catFound.image}`,
      rating: 5,
      description: 'Add a touch of elegance to your space. Handcrafted with authentic European ceramics and high durability glaze.',
      overview: shopProductsData[0].overview,
      info: shopProductsData[0].info
    };
  }

  const prodFound = productsData.find((p) => String(p.id) === String(id));
  if (prodFound) {
    return {
      id: prodFound.id,
      name: prodFound.name,
      heroSubtitle: prodFound.name,
      categoryBadge: 'Artisan Pottery',
      badgePill: 'Special Edition',
      sku: `PROD-${prodFound.id}`,
      category: 'Artisan Mugs',
      price: Number(prodFound.price) || 32999,
      originalPrice: (Number(prodFound.price) || 32999),
      currency: prodFound.currency || '€',
      image: prodFound.image.startsWith('/') ? prodFound.image : `/${prodFound.image}`,
      rating: 5,
      description: 'Premium European crafted collection item. Exceptional finish and strict quality control guarantee.',
      overview: shopProductsData[0].overview,
      info: shopProductsData[0].info
    };
  }

  return shopProductsData[0];
}

