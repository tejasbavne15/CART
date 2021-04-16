import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any;

  cartTotal = 0;

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product : Product | any) =>   {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach((item: { qty: number; price: number; })=>{
      this.cartTotal += (item.qty * item.price)
    })
  }
  DeleteProduct(){
    var status = confirm ('Are You Sure, Want to Delete');
    if (status == true){
      this.cartItems.splice(index,1);
    }
  }
}

function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}
