import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { User } from '../../models/User';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   

  constructor(
    private toastr:ToastrService,
    private auth:AuthentificationService,
    private route:Router
  ) { }

  ngOnInit() {
    let islogged = this.auth.IsLoggedIn
    if (islogged()){
      this.route.navigate(['/home'])
    }
  }

  
  register(registerform:any){
    let data = registerform.value
    let utilisateur = new User(data.name,data.username,data.email,data.password,data.type)
    this.auth.addUser(utilisateur).subscribe(
      res=>{
        this.toastr.success("bienvenue entre nous")
        this.route.navigate(['/login'])
      },err=>{
        console.log(err);
        
      }
    )
    
    



  }

}