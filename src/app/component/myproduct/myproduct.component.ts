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
  addimage:any
  taille:any

  constructor( private ps:ProductService,private toastr:ToastrService, private route:Router) { }

  ngOnInit(): void {
    
  }

  add(f:any){
    this.ps.getProduct().subscribe(res=>{
      this.taille=res.length
      
      
    })
    let data=f.value
    let home = new Product(this.taille,data.titre,data.bio,data.prix,data.img,data.image1,data.image2);
    this.ps.addhome(home).subscribe(
      res=>{
        this.toastr.success("bien ajouté")
        this.route.navigate(['/shop'])
 
      },err=>{
        console.log(err);
        
      }
    )
  }


  addprice(f:any){
    
      this.ischcked=true
    
  }

  Addimage(f:any){
    
    this.addimage=true
  
}

}
