import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  islogged!:boolean
  user:any=[];
  

  constructor(
    private route:Router,
    private auth:AuthentificationService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    let islogged = this.auth.IsLoggedIn
    if (islogged()){
      this.route.navigate(['/home'])
    }
  }

  

  //fonction pour identifier 
  enter(loginform:any){
    let entrer = loginform.value
    this.auth.getuser().subscribe(data=>{
      this.user = data
      this.user.forEach((i: any)=>{
        if (i.email==entrer.username && i.password==entrer.password){
          console.log("hello")
          let token = i.id
          localStorage.setItem("myToken",token)
          
          this.toastr.success('you are welcome!', 'hello!');
          
          this.route.navigate(['/home'])
        }else{
          console.log("error")
          //when there's eroor in the identification

        }
      })
      
    
    })
  }
  

}
