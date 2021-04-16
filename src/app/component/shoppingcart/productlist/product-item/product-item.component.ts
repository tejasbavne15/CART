import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../../../../models/product';
import {MessengerService} from '../../../../services/messenger.service';
import {CartService} from '../../../../services/cart.service';
import { WishlistService } from 'projects/smartshopping/src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;

  @Input()
  addedToWishlist!: boolean;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    })
  }
}