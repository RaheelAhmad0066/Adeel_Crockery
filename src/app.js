/**
 * Application Entry Point (MVVM Bootstrapper)
 */
import { CartViewModel } from './viewmodels/CartViewModel.js';
import { HomeViewModel } from './viewmodels/HomeViewModel.js';
import { CartDrawerView } from './views/components/CartDrawer.js';
import { renderTestimonialCarousel } from './views/components/Testimonials.js';
import { NotificationService } from './services/NotificationService.js';

class App {
  constructor() {
    this.cartVM = new CartViewModel();
    this.homeVM = new HomeViewModel();
    this.cartView = null;
  }

  init() {
    // 1. Initialize Cart Drawer View & View-Model
    this.cartView = new CartDrawerView(this.cartVM);

    // 2. Setup Category scroll triggers
    this.setupCategoriesScroll();

    // 3. Render Testimonials Carousel if container exists
    this.setupTestimonials();

    // 4. Setup Navigation & Mobile menu
    this.setupNavigation();

    // 5. Setup Newsletter
    this.setupNewsletter();

    // 6. Setup Checkout button
    this.setupCheckout();

    // 7. Bind Global Add-To-Cart actions & Custom Events
    this.bindCartActions();
  }

  setupCategoriesScroll() {
    const container = document.getElementById('categories-grid-container');
    const scrollBtn = document.getElementById('cat-scroll-right-btn');
    if (container && scrollBtn) {
      scrollBtn.onclick = () => {
        container.scrollBy({ left: 320, behavior: 'smooth' });
      };
    }
  }

  setupTestimonials() {
    const container = document.getElementById('testimonials-grid-container');
    if (!container) return;

    const render = () => {
      renderTestimonialCarousel(this.homeVM.testimonials, this.homeVM.activeTestimonialIndex);
      
      const prevBtn = document.getElementById('test-prev-btn');
      const nextBtn = document.getElementById('test-next-btn');
      const prevBtnMob = document.getElementById('test-prev-btn-mob');
      const nextBtnMob = document.getElementById('test-next-btn-mob');
      const prevCard = document.getElementById('test-prev-card');
      const nextCard = document.getElementById('test-next-card');

      if (prevBtn) prevBtn.onclick = () => { this.homeVM.prevTestimonial(); render(); };
      if (nextBtn) nextBtn.onclick = () => { this.homeVM.nextTestimonial(); render(); };
      if (prevBtnMob) prevBtnMob.onclick = () => { this.homeVM.prevTestimonial(); render(); };
      if (nextBtnMob) nextBtnMob.onclick = () => { this.homeVM.nextTestimonial(); render(); };
      if (prevCard) prevCard.onclick = () => { this.homeVM.prevTestimonial(); render(); };
      if (nextCard) nextCard.onclick = () => { this.homeVM.nextTestimonial(); render(); };
    };

    render();
  }

  setupNavigation() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  setupNewsletter() {
    const form = document.getElementById('newsletter-form');
    const msg = document.getElementById('newsletter-msg');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('newsletter-email');
        if (input && input.value) {
          if (msg) msg.classList.remove('hidden');
          input.value = '';
          NotificationService.showToast('🎉 Subscribed successfully!');
          if (msg) setTimeout(() => msg.classList.add('hidden'), 5000);
        }
      });
    }
  }

  setupCheckout() {
    const checkoutBtn = document.getElementById('checkout-order-btn');
    if (checkoutBtn) {
      checkoutBtn.onclick = () => {
        if (this.cartVM.items.length === 0) {
          NotificationService.showToast('Your cart is empty! Add products to proceed.');
          return;
        }
        alert(`Order placed successfully!\nTotal: $${this.cartVM.grandTotal} USD\nThank you for choosing Earthware Pottery.`);
        this.cartVM.clear();
        this.cartView.close();
      };
    }
  }

  bindCartActions() {
    // A. Listen for programmatic cart:add custom events from any page
    window.addEventListener('cart:add', (e) => {
      if (e.detail) {
        const { name, price, image, quantity = 1, id } = e.detail;
        this.cartVM.addItem(name, price, image, quantity, id);
        this.cartView.open();
        NotificationService.showToast(`Added "${name}" to cart!`);
      }
    });

    // B. Delegate clicks on any button with data-add-to-cart or class .add-to-cart-btn
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.add-to-cart-btn, .similar-add-to-cart-btn, [data-add-cat], [data-add-prod]');
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      const id = target.dataset.id || target.dataset.addCat || target.dataset.addProd;
      const name = target.dataset.name;
      const price = target.dataset.price;
      const image = target.dataset.image;

      if (name && price) {
        this.cartVM.addItem(name, price, image, 1, id);
        this.cartView.open();
        NotificationService.showToast(`Added "${name}" to cart!`);
      } else if (id && target.hasAttribute('data-add-cat')) {
        const cat = this.homeVM.categories.find(c => c.id === Number(id));
        if (cat) {
          this.cartVM.addItem(cat.name, cat.price, cat.image, 1, `cat-${cat.id}`);
          this.cartView.open();
          NotificationService.showToast(`Added "${cat.name}" to cart!`);
        }
      } else if (id && target.hasAttribute('data-add-prod')) {
        const prod = this.homeVM.products.find(p => p.id === Number(id));
        if (prod) {
          this.cartVM.addItem(prod.name, prod.price, prod.image, 1, `prod-${prod.id}`);
          this.cartView.open();
          NotificationService.showToast(`Added "${prod.name}" to cart!`);
        }
      }
    });
  }
}

function boot() {
  const app = new App();
  app.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
