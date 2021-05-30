import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  constructor(private http:HttpClient) { }

   
  
  getuser(){
    return this.http.get<any[]>('http://localhost:3000/user')
  }



  addUser(x:User){
    return this.http.post<any>('http://localhost:3000/user', x)
  }

  IsLoggedIn(){
    let token = localStorage.getItem("myToken")
    if(token){
      return true
    }else {
      return false
    }
  }
  
}
