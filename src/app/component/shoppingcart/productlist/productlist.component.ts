import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import{ProductService} from '../../../services/product.service';
import { WishlistService } from '../../../services/wishlist.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList: Product[] = []
  wishlist: any[] =[];

  constructor(private productservice:ProductService,
    private wishlistService: WishlistService,
    ) { }

  ngOnInit(): any {
    this.loadProducts();
    this.loadwishlist();
  }
   loadProducts(){
    this.productservice.getProducts().subscribe((products)=>{
      this.productList = products;
    })
   }

   loadwishlist(){
     this.wishlistService.getWishlist().subscribe(productIds => {
       this.wishlist = productIds
     })
   }
  }
