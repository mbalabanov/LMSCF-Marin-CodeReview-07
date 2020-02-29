import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  cartitems;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartitems = this.cartService.getItems();
  }

}
