import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems = [];

  constructor() { }

  addToCart(travelitem) {
    this.cartitems.push(travelitem);
  }
 
  getItems() {
    return this.cartitems;
  }
 
  clearCart() {
    this.cartitems = [];
    return this.cartitems;
  }

}
