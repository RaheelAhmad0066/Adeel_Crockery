/**
 * Earthware Minimal Fast Functional Store Engine
 * Pure Vanilla JS — Zero Bloat, Instant Performance
 */

// Cart State Management
const cartState = {
  items: [
    { id: 1, name: 'Ripple Vase', price: 100, qty: 1, image: 'assets/images/cat-ripple-vase.png' },
    { id: 2, name: 'Ceramic Plant Pot', price: 100, qty: 1, image: 'assets/images/cat-bulb-vase.png' },
    { id: 3, name: 'Ceramic Glass', price: 100, qty: 1, image: 'assets/images/cat-glass-bowl-1.png' }
  ],
  discount: 50,
  vatRate: 0.16
};

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const countBadges = document.querySelectorAll('.cart-count-badge');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const vatEl = document.getElementById('cart-vat');
  const totalEl = document.getElementById('cart-total');

  const totalQty = cartState.items.reduce((acc, item) => acc + item.qty, 0);
  countBadges.forEach(badge => badge.textContent = totalQty);

  if (!container) return;

  if (cartState.items.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 space-y-3">
        <div class="text-4xl text-neutral-300">🛒</div>
        <p class="text-neutral-500 font-medium">Your cart is currently empty</p>
        <button onclick="closeCart()" class="text-sm font-semibold underline text-neutral-800">Continue Shopping</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0 USD';
    if (discountEl) discountEl.textContent = '$0 USD';
    if (vatEl) vatEl.textContent = '$0 USD';
    if (totalEl) totalEl.textContent = '$0 USD';
    return;
  }

  container.innerHTML = cartState.items.map(item => `
    <div class="flex items-center gap-4 pb-4 border-b border-neutral-100 transition-all duration-200">
      <div class="w-16 h-16 bg-[#FAF7F5] rounded-xl p-1 flex items-center justify-center flex-shrink-0">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain">
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="font-semibold text-neutral-900 text-sm sm:text-base truncate">${item.name}</h4>
        <span class="text-sm font-medium text-neutral-500">$${item.price} USD</span>
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50 text-xs font-semibold">
            <button onclick="updateQty(${item.id}, -1)" class="px-2 py-1 hover:bg-neutral-200 transition-colors">-</button>
            <span class="px-2.5 py-1 text-neutral-800">${item.qty}</span>
            <button onclick="updateQty(${item.id}, 1)" class="px-2 py-1 hover:bg-neutral-200 transition-colors">+</button>
          </div>
          <button onclick="removeItem(${item.id})" class="text-xs text-red-500 hover:text-red-700 font-medium transition-colors">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cartState.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = subtotal > 100 ? cartState.discount : 0;
  const vat = Math.round((subtotal - discount) * cartState.vatRate);
  const total = Math.max(0, subtotal - discount + vat);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal} USD`;
  if (discountEl) discountEl.textContent = discount > 0 ? `-$${discount} USD` : '$0 USD';
  if (vatEl) vatEl.textContent = `$${vat} USD`;
  if (totalEl) totalEl.textContent = `$${total} USD`;
}

function updateQty(id, delta) {
  const item = cartState.items.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cartState.items = cartState.items.filter(i => i.id !== id);
    }
    renderCart();
  }
}

function removeItem(id) {
  cartState.items = cartState.items.filter(i => i.id !== id);
  renderCart();
  showToast('Item removed from cart');
}

function addToCart(name, price, image) {
  const existing = cartState.items.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cartState.items.push({
      id: Date.now(),
      name,
      price,
      qty: 1,
      image
    });
  }
  renderCart();
  openCart();
  showToast(`Added "${name}" to your cart!`);
}

// Drawer Controls
function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }
}

// Toast notification banner
function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white px-5 py-3 rounded-full text-sm font-medium shadow-2xl toast-animate pointer-events-none';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.display = 'none';
  }, 2500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  // Mobile menu drawer
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Cart open/close triggers
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Newsletter subscription
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-msg');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      if (input && input.value) {
        newsletterMsg.classList.remove('hidden');
        input.value = '';
        showToast('🎉 Subscribed successfully!');
        setTimeout(() => {
          newsletterMsg.classList.add('hidden');
        }, 5000);
      }
    });
  }
});
