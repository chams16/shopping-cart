import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carTotal=0
  cartItem :Item[] =[];
  constructor(
    private messengerservice:MessengerService,
    private cartservice: CartService
  ) { }
  
  ngOnInit() {
    this.subscription()
    this.loadcartitem()
  }
  
 subscription(){
  this.messengerservice.getMsg().subscribe((product:any)=> {
    this.loadcartitem()
   })
 }

 loadcartitem(){
  this.cartservice.getcartitem().subscribe((item:CartItem[]) =>{
     this.cartItem=item
     this.calculatetotal()
  })
 }

  

  calculatetotal(){
    this.carTotal=0
     this.cartItem.forEach(item =>{
     this.carTotal += (item.qty*item.price)
      })
  }


}

