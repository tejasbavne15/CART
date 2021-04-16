import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {wishlistUrl} from '../../../src/app/config/api';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }
  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result:any[] | any) => {
        let productIds: any[] =[]

        result.forEach((item: { id: number; }) => productIds.push(item.id))

        return productIds;
      })
    )
  }

  addToWishlist(productId: number){
    return this.http.post(wishlistUrl, {id: productId})

  }
  removeFromWishlist(productId: number){
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
