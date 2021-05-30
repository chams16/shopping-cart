import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  productdetail:any=[]
  id: any;

  constructor(
    private route:ActivatedRoute,
    private ps:ProductService,

  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.getOne(this.id)
    console.log(this.id);


  }

  getOne(x:any){
    this.ps.getSingleProduct(x).subscribe(
      res=>{
        this.productdetail=res
        console.log(this.productdetail);
      }
    )
  }

}
