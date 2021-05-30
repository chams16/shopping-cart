import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';

import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {

  ischcked:any
  taille:any

  constructor( private ps:ProductService,private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.ps.getProduct().subscribe(res=>{
      this.taille=res.length
      console.log(this.taille);
      
    })
  }

  add(f:any){
    let data=f.value
    let home = new Product(this.taille+1,data.titre,data.bio,data.prix,data.img);
    this.ps.addhome(home).subscribe(
      res=>{
        this.toastr.success("hello")
        this.route.navigate(['/shop'])
 
      },err=>{
        console.log(err);
        
      }
    )
  }


  addprice(f:any){
    
      this.ischcked=true
    
  }

}
