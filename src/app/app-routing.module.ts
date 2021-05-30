import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/shared/notfound/notfound.component';
import { HomeComponent } from './component/home/home.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { MyproductComponent } from './component/myproduct/myproduct.component';
import { DetailComponent } from './component/shopping-cart/detail/detail.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'shop', component: ShoppingCartComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'myproduct', component: MyproductComponent, canActivate:[AuthGuard]},
  {path:'register', component: RegisterComponent, canActivate:[AuthGuard]},
  {path:'home', component: HomeComponent},
  {path:'wishlist', component: WishlistComponent, canActivate:[AuthGuard]},
  {path:'contactus', component: ContactusComponent},
  {path:'detail/:id', component: DetailComponent, canActivate:[AuthGuard]},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
