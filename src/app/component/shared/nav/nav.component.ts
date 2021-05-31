import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  constructor(
    private route:Router,
    private auth:AuthentificationService,
    private toastr:ToastrService
  ) { }

   islogged:any

   

  ngOnInit(): void {
   this.islogged = this.auth.IsLoggedIn()
   
   
  }

  logout(){

    localStorage.removeItem("myToken")
    this.islogged = this.auth.IsLoggedIn()
    this.route.navigate(['/login'])
  }

}
