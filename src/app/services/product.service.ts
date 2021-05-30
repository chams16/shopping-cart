import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { detaillistUrl, productlistUrl } from 'src/config/api';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(
    private http:HttpClient
  ) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(productlistUrl);
  }

  getSingleProduct(id:number): Observable<Product[]> {
    return this.http.get<Product[]>(detaillistUrl + id);
  }

  addhome(x:Product){
    return this.http.post<any> ('http://localhost:3000/products',x);
  }
}
