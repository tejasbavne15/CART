import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ShoppingcartComponent } from './component/shoppingcart/shoppingcart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import{PageNotFoundComponent} from './component/shared/page-not-found/page-not-found.component';


const routes: Routes =[
    {path:'',redirectTo:'/shop', pathMatch:'full'},
    {path: 'login' , component: LoginComponent},
    {path: 'register' , component:RegisterComponent},
    {path: 'shop' , component:ShoppingcartComponent},
    {path:'**', component:PageNotFoundComponent},
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ],
})

export class AppRoutingModule {
}