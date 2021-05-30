import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  
  wishlist :Product[]=[]
  empty: boolean | undefined;
  constructor(
    private wishlistservice: WishlistService,
    private productservice: ProductService
  ) { }

  ngOnInit(): void {
    this.loadwishlist()
    this.getproduct()
  }

  loadwishlist(){
    this.wishlistservice.getfavoris().subscribe(Product=>{
      this.wishlist = Product
      if (this.wishlist.length==0){
        this.empty =true
      }else{
        this.empty=false
      console.log(this.wishlist)
    }})
  }

  getproduct(){
    this.productservice.getProduct().subscribe((products)=>{
      products.filter(element => {
       this.wishlist.forEach(item => {
          if(element.id==item.id){
            console.log(element)
          }
         
        })
       })
    })
  }

}










