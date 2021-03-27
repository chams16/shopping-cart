import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { productlistUrl } from 'src/config/api';


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
}
