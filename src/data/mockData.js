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
