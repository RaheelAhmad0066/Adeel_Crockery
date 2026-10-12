import { CartItem } from '../models/Product.js';

/**
 * CartViewModel: Manages cart state, reactive updates & calculations
 */
export class CartViewModel {
  constructor() {
    this.items = [
      new CartItem(1, 'Ripple Vase', 100, 1, 'assets/images/cat-ripple-vase.png'),
      new CartItem(2, 'Ceramic Plant Pot', 100, 1, 'assets/images/cat-bulb-vase.png'),
      new CartItem(3, 'Ceramic Glass', 100, 1, 'assets/images/cat-glass-bowl-1.png')
    ];
    this.discountThreshold = 100;
    this.fixedDiscount = 50;
    this.vatRate = 0.16;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this);
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  get totalItemsCount() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  }

  get subtotal() {
    return this.items.reduce((sum, item) => sum + item.total, 0);
  }

  get discount() {
    return this.subtotal > this.discountThreshold ? this.fixedDiscount : 0;
  }

  get vat() {
    return Math.round((this.subtotal - this.discount) * this.vatRate);
  }

  get grandTotal() {
    return Math.max(0, this.subtotal - this.discount + this.vat);
  }

  addItem(name, price, image) {
    const existing = this.items.find(i => i.name === name);
    if (existing) {
      existing.increaseQty(1);
    } else {
      this.items.push(new CartItem(Date.now(), name, price, 1, image));
    }
    this.notify();
  }

  updateQty(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;

    if (delta > 0) {
      item.increaseQty(delta);
    } else {
      item.decreaseQty(Math.abs(delta));
      if (item.qty === 0) {
        this.items = this.items.filter(i => i.id !== id);
      }
    }
    this.notify();
  }

  removeItem(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.notify();
  }

  clear() {
    this.items = [];
    this.notify();
  }
}

