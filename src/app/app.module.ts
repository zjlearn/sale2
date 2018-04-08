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
import {ProductService} from './shared/services/productService';
import { ListProductsComponent } from './list-products/list-products.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IpsFormComponent } from './ips-form/ips-form.component';
import { SimpleRegisterComponent } from './simple-register/simple-register.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { OverviewComponent } from './my-account/overview/overview.component';
import { MyNavComponent } from './my-account/my-nav/my-nav.component';
import { MyLoanComponent } from './my-account/my-loan/my-loan.component';
import { MyInvestComponent } from './my-account/my-invest/my-invest.component';
import { MySidebarComponent } from './my-account/my-sidebar/my-sidebar.component';
import { MyRootComponent } from './my-account/my-root/my-root.component';
import { MessageComponent } from './my-account/message/message.component';
import { RecordComponent } from './my-account/record/record.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { SecondHeaderComponent } from './shared/second-header/second-header.component';
import { HelpComponent } from './help-center/help/help.component';
import { LoginHelpComponent } from './help-center/login-help/login-help.component';
import { PwHelpComponent } from './help-center/pw-help/pw-help.component';
import { ReauthHelpComponent } from './help-center/reauth-help/reauth-help.component';
import { TempComponent } from './help-center/temp/temp.component';
import {UserService} from './shared/services/user.service';
import {AuthGuardService} from './shared/services/auth-guard.service';
import { AuthenticationComponent } from './my-account/authentication/authentication.component';
import { CouponComponent } from './my-account/coupon/coupon.component';
import { AccountSettingComponent } from './my-account/account-setting/account-setting.component';
import { DepositComponent } from './my-account/deposit/deposit.component';
import { WithdrawComponent } from './my-account/withdraw/withdraw.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


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
    ListProductsComponent,
    IpsFormComponent,
    SimpleRegisterComponent,
    ProductInfoComponent,
    OverviewComponent,
    MyNavComponent,
    MyLoanComponent,
    MyInvestComponent,
    MySidebarComponent,
    MyRootComponent,
    MessageComponent,
    RecordComponent,
    TopHeaderComponent,
    SecondHeaderComponent,
    HelpComponent,
    LoginHelpComponent,
    PwHelpComponent,
    ReauthHelpComponent,
    TempComponent,
    AuthenticationComponent,
    CouponComponent,
    AccountSettingComponent,
    DepositComponent,
    WithdrawComponent
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
  providers: [ProductService, UserService, AuthGuardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
