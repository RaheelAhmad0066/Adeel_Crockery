/**
 * Cart Item Model & Domain Logic
 */
export class CartItem {
  constructor(id, name, price, qty = 1, image = '', currency = 'USD') {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.qty = Number(qty);
    this.image = image;
    this.currency = currency;
  }

  get total() {
    return this.price * this.qty;
  }

  increaseQty(amount = 1) {
    this.qty += amount;
  }

  decreaseQty(amount = 1) {
    this.qty = Math.max(0, this.qty - amount);
  }
}

/**
 * Product Model
 */
export class Product {
  constructor({ id, name, price, image, currency = '€' }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.currency = currency;
  }

  get formattedPrice() {
    return `${this.currency}${this.price}`;
  }
}

