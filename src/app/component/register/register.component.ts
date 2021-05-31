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
    
    
  }

  
  register(registerform:any){
    let data = registerform.value
    console.log(data);
    
    let utilisateur = new User(data.name,data.username,data.email,data.phone,data.password,data.type)
    this.auth.addUser(utilisateur).subscribe(
      res=>{
        console.log(res);
  
        this.route.navigate(['/login'])
        this.toastr.success("bienvenue entre nous")
      },err=>{
        console.log(err);
        
      }
    )
    
    



  }

}