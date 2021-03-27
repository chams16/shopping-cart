import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product

  @Input() addedtowish:boolean | undefined
  constructor(
    private messengerservice: MessengerService,
    private cartservice: CartService,
    private wishlist:WishlistService
  ) { }

  ngOnInit(): void {

  }

  addToCart(){
    //console.log("hello")
    this.cartservice.addproducttocart(this.productItem).subscribe(() => {
      this.messengerservice.sendMsg(this.productItem)
    })
    
  }

  addtowishlist(){
     this.wishlist.addtowishlist(this.productItem.id).subscribe(()=>{
     this.addedtowish=true
    // console.log("hello")
    })
  }

  removefromwish(){
     this.wishlist.removefromwishlist(this.productItem.id).subscribe(()=>{
      this.addedtowish=false
     // console.log("buy")
    })
  }

}
