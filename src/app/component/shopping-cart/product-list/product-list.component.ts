import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  wishlist: number[]=[]
  productList: Product[] =[]
  constructor(
    private productservice: ProductService,
    private wishservice:WishlistService
  ) { }

  ngOnInit() {
    this.loadproduct()
    this.loadwishlist()
  }

  loadproduct(){
    this.productservice.getProduct().subscribe((products)=>{
      this.productList=products
    })
  }


loadwishlist(){
  this.wishservice.getwishlist().subscribe((productIds)=>{
    this.wishlist=productIds
    console.log(productIds)
  })
}
}
