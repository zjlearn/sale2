import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbootstrapModule} from './ngbootstrap/ngbootstrap.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { InvestComponent } from './invest/invest.component';
import { LoanComponent } from './loan/loan.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductService} from './shared/productService';
import { ListProductsComponent } from './list-products/list-products.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent,
    NavComponent,
    FooterComponent,
    InvestComponent,
    LoanComponent,
    RegisterComponent,
    HomeComponent,
    AboutUsComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    NgbootstrapModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
