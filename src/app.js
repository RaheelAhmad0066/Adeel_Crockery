/**
 * Application Entry Point (MVVM Bootstrapper)
 */
import { CartViewModel } from './viewmodels/CartViewModel.js';
import { HomeViewModel } from './viewmodels/HomeViewModel.js';
import { CartDrawerView } from './views/components/CartDrawer.js';
import { renderProductCard, renderCategoryCard } from './views/components/ProductCard.js';
import { renderTestimonialCarousel } from './views/components/Testimonials.js';
import { NotificationService } from './services/NotificationService.js';

class App {
  constructor() {
    this.cartVM = new CartViewModel();
    this.homeVM = new HomeViewModel();
    this.cartView = null;
  }

  init() {
    // 1. Initialize Views
    this.cartView = new CartDrawerView(this.cartVM);

    // 2. Render Products
    this.renderProducts();

    // 3. Render Categories with horizontal scroll trigger
    this.renderCategories();

    // 4. Render Testimonials
    this.setupTestimonials();

    // 5. Setup Navigation, Newsletter, and Checkout
    this.setupNavigation();
    this.setupNewsletter();
    this.setupCheckout();
    this.bindStaticActions();
  }

  renderProducts() {
    const container = document.getElementById('products-grid-container');
    if (!container) return;
    container.innerHTML = '';
    this.homeVM.products.forEach(product => {
      const card = renderProductCard(product, (p) => {
        this.cartVM.addItem(p.name, p.price, p.image);
        this.cartView.open();
        NotificationService.showToast(`Added "${p.name}" to cart!`);
      });
      container.appendChild(card);
    });
  }

  renderCategories() {
    const container = document.getElementById('categories-grid-container');
    if (!container) return;
    container.innerHTML = '';
    this.homeVM.categories.forEach(cat => {
      const card = renderCategoryCard(cat, (item) => {
        this.cartVM.addItem(item.name, item.price, item.image);
        this.cartView.open();
        NotificationService.showToast(`Added "${item.name}" to cart!`);
      });
      container.appendChild(card);
    });

    // Arrow click to scroll categories to the right
    const scrollBtn = document.getElementById('cat-scroll-right-btn');
    if (scrollBtn) {
      scrollBtn.onclick = () => {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      };
    }
  }

  setupTestimonials() {
    const render = () => {
      renderTestimonialCarousel(this.homeVM.testimonials, this.homeVM.activeTestimonialIndex);
      
      const prevBtn = document.getElementById('test-prev-btn');
      const nextBtn = document.getElementById('test-next-btn');
      const prevCard = document.getElementById('test-prev-card');
      const nextCard = document.getElementById('test-next-card');

      if (prevBtn) prevBtn.onclick = () => { this.homeVM.prevTestimonial(); render(); };
      if (nextBtn) nextBtn.onclick = () => { this.homeVM.nextTestimonial(); render(); };
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
          NotificationService.showToast('Your cart is empty!');
          return;
        }
        alert('Order placed successfully! Thank you for choosing Earthware.');
        this.cartVM.clearCart();
        this.cartView.close();
      };
    }
  }

  bindStaticActions() {
    document.querySelectorAll('[data-add-cat]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.addCat);
        const cat = this.homeVM.categories.find(c => c.id === id);
        if (cat) {
          this.cartVM.addItem(cat.name, cat.price, cat.image);
          this.cartView.open();
          NotificationService.showToast(`Added "${cat.name}" to cart!`);
        }
      });
    });

    document.querySelectorAll('[data-add-prod]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.addProd);
        const prod = this.homeVM.products.find(p => p.id === id);
        if (prod) {
          this.cartVM.addItem(prod.name, prod.price, prod.image);
          this.cartView.open();
          NotificationService.showToast(`Added "${prod.name}" to cart!`);
        }
      });
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
