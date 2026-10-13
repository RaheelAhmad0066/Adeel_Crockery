/**
 * CartDrawer View Component
 * Binds reactively to CartViewModel
 */
export class CartDrawerView {
  constructor(cartVM) {
    this.vm = cartVM;
    this.container = document.getElementById('cart-items-container');
    this.drawer = document.getElementById('cart-drawer');
    this.overlay = document.getElementById('cart-overlay');
    this.countBadges = document.querySelectorAll('.cart-count-badge');
    this.subtotalEl = document.getElementById('cart-subtotal');
    this.discountEl = document.getElementById('cart-discount');
    this.vatEl = document.getElementById('cart-vat');
    this.totalEl = document.getElementById('cart-total');

    this.bindEvents();
    this.vm.subscribe(() => this.render());
  }

  bindEvents() {
    const cartBtn = document.getElementById('cart-btn');
    const closeBtn = document.getElementById('close-cart-btn');

    if (cartBtn) cartBtn.addEventListener('click', () => this.open());
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());
  }

  open() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.remove('translate-x-full');
      this.overlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.add('translate-x-full');
      this.overlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }

  render() {
    this.countBadges.forEach(b => b.textContent = this.vm.totalItemsCount);

    if (this.subtotalEl) this.subtotalEl.textContent = `PKR ${this.vm.subtotal}`;
    if (this.discountEl) this.discountEl.textContent = this.vm.discount > 0 ? `-PKR ${this.vm.discount}` : 'PKR 0';
    if (this.vatEl) this.vatEl.textContent = `PKR ${this.vm.vat}`;
    if (this.totalEl) this.totalEl.textContent = `PKR ${this.vm.grandTotal}`;

    if (!this.container) return;

    if (this.vm.items.length === 0) {
      this.container.innerHTML = `
        <div class="text-center py-12 space-y-3">
          <div class="text-4xl text-neutral-300">🛒</div>
          <p class="text-neutral-500 font-medium">Your cart is currently empty</p>
          <button id="empty-continue-btn" class="text-sm font-semibold underline text-neutral-800">Continue Shopping</button>
        </div>
      `;
      const btn = this.container.querySelector('#empty-continue-btn');
      if (btn) btn.addEventListener('click', () => this.close());
      return;
    }

    this.container.innerHTML = this.vm.items.map(item => `
      <div class="flex items-center gap-4 pb-4 border-b border-neutral-100 transition-all duration-200">
        <div class="w-16 h-16 bg-[#FAF7F5] rounded-xl p-1 flex items-center justify-center flex-shrink-0">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain">
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-semibold text-neutral-900 text-sm sm:text-base truncate">${item.name}</h4>
          <span class="text-sm font-medium text-neutral-500">PKR ${item.price}</span>
          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50 text-xs font-semibold">
              <button data-action="dec" data-id="${item.id}" class="px-2 py-1 hover:bg-neutral-200 transition-colors">-</button>
              <span class="px-2.5 py-1 text-neutral-800">${item.qty}</span>
              <button data-action="inc" data-id="${item.id}" class="px-2 py-1 hover:bg-neutral-200 transition-colors">+</button>
            </div>
            <button data-action="remove" data-id="${item.id}" class="text-xs text-red-500 hover:text-red-700 font-medium transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>
    `).join('');

    this.container.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const action = btn.dataset.action;
        if (action === 'inc') this.vm.updateQty(id, 1);
        if (action === 'dec') this.vm.updateQty(id, -1);
        if (action === 'remove') this.vm.removeItem(id);
      });
    });
  }
}

