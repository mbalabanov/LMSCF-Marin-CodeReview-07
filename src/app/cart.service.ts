import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems = [];

  constructor() { }

  addToCart(travelitem) {

    console.log('Travelitem aus Service-Funktion');
    console.log(travelitem);

    this.cartitems.push(travelitem);

    console.log('Cartitems aus Service-Funktion nach dem Pushen');
    console.log(this.cartitems);
  }
 
  getItems() {
    return this.cartitems;
  }
 
  clearCart() {
    this.cartitems = [];
    return this.cartitems;
  }

}
