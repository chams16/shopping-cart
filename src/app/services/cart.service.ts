import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { cartUrl } from 'src/config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  constructor(
    private http:HttpClient
  ) { }

  getcartitem(): Observable<CartItem []>{
    return this.http.get<CartItem[]>(cartUrl).pipe(
        map((result:any[])=>{
           let cartItems: CartItem[]=[]
           
           for(let i of result){
            let productexist = false

            for(let item in cartItems) {
              if(cartItems[item].productId=== i.product.id){
                cartItems[item].qty++
                productexist = true
              }
            }
            if(!productexist){
                cartItems.push(new CartItem(i.id,i.product))
            }
           }
           return cartItems
        })
        
    )
  }

  //maintain the cart to the initial case which is 0
  deletecartitem(cart:any){
     return this.http.delete(cartUrl,cart);
  }

  addproducttocart(product:Product):Observable<any>{
    return this.http.post(cartUrl, {product})

  }

}
