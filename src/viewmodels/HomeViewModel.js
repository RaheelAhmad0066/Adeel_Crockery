import { productsData, categoriesData, testimonialsData, blogData } from '../data/mockData.js';
import { Product } from '../models/Product.js';

/**
 * HomeViewModel: Encapsulates all view state, pagination, and active testimonials
 */
export class HomeViewModel {
  constructor() {
    this.products = productsData.map(p => new Product(p));
    this.categories = categoriesData;
    this.testimonials = testimonialsData;
    this.blog = blogData;
    this.activeTestimonialIndex = 1; // Jenny Wilson in center
  }

  nextTestimonial() {
    this.activeTestimonialIndex = (this.activeTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.activeTestimonialIndex = (this.activeTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}

