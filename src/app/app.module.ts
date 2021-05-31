import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './component/shopping-cart/filters/filters.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { ProductItemComponent } from './component/shopping-cart/product-list/product-item/product-item.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/shared/notfound/notfound.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ProductdetailComponent } from './component/productdetail/productdetail.component';
import { AboutComponent } from './component/home/about/about.component';
import { ContactComponent } from './component/home/contact/contact.component';
import { HeaderhomeComponent } from './component/home/headerhome/headerhome.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { MyproductComponent } from './component/myproduct/myproduct.component';

import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

import { DetailComponent } from './component/shopping-cart/detail/detail.component';
import { ProfileComponent } from './component/home/profile/profile.component';
import { HelpComponent } from './component/home/help/help.component';
import { ConditionComponent } from './component/home/condition/condition.component';
import { SettingComponent } from './component/home/setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
    WishlistComponent,
    ProductdetailComponent,
    AboutComponent,
    ContactComponent,
    HeaderhomeComponent,
    ContactusComponent,
    MyproductComponent,
    DetailComponent,
    ProfileComponent,
    HelpComponent,
    ConditionComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
