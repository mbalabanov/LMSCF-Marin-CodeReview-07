import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travelitems } from '../travelinfos';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  travelitems = travelitems;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(travelitem) {
    this.cartService.addToCart(travelitem);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }

}
