import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { wishlistUrl } from '../../config/api';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  constructor(
    private http:HttpClient
  ) { }

  getwishlist(): Observable<any[]>{
    return this.http.get<any[]>(wishlistUrl).pipe(
      map((result: any) => {
        let productIds: any[] = [];
        result.forEach((item: any) => {
          productIds.push(item.id);
        });
        return productIds;
      })
    );
  }

  addtowishlist(productId:any){
      return this.http.post(wishlistUrl, {id:productId})
  }

  removefromwishlist(productId:any){
    return this.http.delete(wishlistUrl+'/'+productId)
  }

  getfavoris(){
    return this.http.get<Product[]>(wishlistUrl)
  }


  
}
