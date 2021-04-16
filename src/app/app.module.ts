import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule,} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { ShoppingcartComponent } from './component/shoppingcart/shoppingcart.component';
import { FilterComponent } from './component/shoppingcart/filter/filter.component';
import { ProductlistComponent } from './component/shoppingcart/productlist/productlist.component';
import { CartComponent } from './component/shoppingcart/cart/cart.component';
import { CartItemComponent } from './component/shoppingcart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component/shoppingcart/productlist/product-item/product-item.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingcartComponent,
    FilterComponent,
    ProductlistComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
