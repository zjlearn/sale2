import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {InvestComponent} from './invest/invest.component';
import {LoanComponent} from './loan/loan.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {IpsFormComponent} from './ips-form/ips-form.component';
import {MyRootComponent} from './my-account/my-root/my-root.component';
import {OverviewComponent} from './my-account/overview/overview.component';
import {MyLoanComponent} from './my-account/my-loan/my-loan.component';
import {MyInvestComponent} from './my-account/my-invest/my-invest.component';


// 组件之间的路由关系
export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'invest', component: InvestComponent},
  {path: 'loan', component: LoanComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'ipsForm', component: IpsFormComponent},
  {
    path: 'account', component: MyRootComponent, children: [
      {path: '', component: OverviewComponent},
      {path: 'myLoan', component: MyLoanComponent},
      {path: 'myInvest', component: MyInvestComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

