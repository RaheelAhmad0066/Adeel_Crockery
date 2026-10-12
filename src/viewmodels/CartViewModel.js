import { CartItem } from '../models/Product.js';

const STORAGE_KEY = 'earthware_cart_items_v2';

const DEFAULT_PREFILLED_ITEMS = [
  { id: 'sp-1', name: 'Ceramic Plant Pot', price: 230.80, qty: 1, image: '/assets/images/shop-1.svg' },
  { id: 'sp-2', name: 'Terracotta Mug', price: 100.00, qty: 2, image: '/assets/images/shop-2.svg' },
  { id: 'sp-3', name: 'Earthenware Tea Pot', price: 100.00, qty: 1, image: '/assets/images/shop-3.svg' }
];

/**
 * CartViewModel: Manages cart state, reactive updates, localStorage persistence & calculations
 */
export class CartViewModel {
  constructor() {
    this.listeners = [];
    this.discountThreshold = 150;
    this.fixedDiscount = 20;
    this.vatRate = 0.16;
    this.items = this.loadItems();
  }

  loadItems() {
    if (typeof window === 'undefined') {
      return DEFAULT_PREFILLED_ITEMS.map(i => new CartItem(i.id, i.name, i.price, i.qty, i.image));
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map(i => new CartItem(i.id, i.name, i.price, i.qty, i.image));
        }
      }
    } catch (e) {
      console.warn('Failed to load cart from localStorage', e);
    }

    // Default pre-populated items
    const seeded = DEFAULT_PREFILLED_ITEMS.map(i => new CartItem(i.id, i.name, i.price, i.qty, i.image));
    this.saveItems(seeded);
    return seeded;
  }

  saveItems(itemsToSave = this.items) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsToSave));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this);
  }

  notify() {
    this.saveItems();
    this.listeners.forEach(fn => fn(this));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cart:changed', { detail: this }));
    }
  }

  get totalItemsCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  get subtotal() {
    return Number(this.items.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2));
  }

  get discount() {
    return this.subtotal >= this.discountThreshold ? this.fixedDiscount : 0;
  }

  get vat() {
    return Number(((this.subtotal - this.discount) * this.vatRate).toFixed(2));
  }

  get grandTotal() {
    return Number(Math.max(0, this.subtotal - this.discount + this.vat).toFixed(2));
  }

  addItem(name, price, image, qty = 1, id = null) {
    const cleanImage = image ? (image.startsWith('/') ? image : `/${image}`) : '/assets/images/shop-1.svg';
    const itemId = id || `cart-${Date.now()}`;
    const numPrice = Number(price) || 100;
    const numQty = Number(qty) || 1;

    const existing = this.items.find(i => i.name === name || (id && String(i.id) === String(id)));
    if (existing) {
      existing.increaseQty(numQty);
    } else {
      this.items.push(new CartItem(itemId, name, numPrice, numQty, cleanImage));
    }
    this.notify();
  }

  updateQty(id, delta) {
    const item = this.items.find(i => String(i.id) === String(id));
    if (!item) return;

    if (delta > 0) {
      item.increaseQty(delta);
    } else {
      item.decreaseQty(Math.abs(delta));
      if (item.qty <= 0) {
        this.items = this.items.filter(i => String(i.id) !== String(id));
      }
    }
    this.notify();
  }

  removeItem(id) {
    this.items = this.items.filter(i => String(i.id) !== String(id));
    this.notify();
  }

  clear() {
    this.items = [];
    this.notify();
  }

  resetToDefault() {
    this.items = DEFAULT_PREFILLED_ITEMS.map(i => new CartItem(i.id, i.name, i.price, i.qty, i.image));
    this.notify();
  }
}
