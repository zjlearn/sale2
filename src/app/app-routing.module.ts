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
import {MessageComponent} from './my-account/message/message.component';
import {RecordComponent} from './my-account/record/record.component';
import {HelpComponent} from './help-center/help/help.component';
import {LoginHelpComponent} from './help-center/login-help/login-help.component';
import {PwHelpComponent} from './help-center/pw-help/pw-help.component';
import {ReauthHelpComponent} from './help-center/reauth-help/reauth-help.component';
import {AuthenticationComponent} from './my-account/authentication/authentication.component';
import {CouponComponent} from './my-account/coupon/coupon.component';
import {AccountSettingComponent} from './my-account/account-setting/account-setting.component';
import {DepositComponent} from './my-account/deposit/deposit.component';
import {WithdrawComponent} from './my-account/withdraw/withdraw.component';

import {AuthGuardService} from './shared/services/auth-guard.service';

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
  {path: 'auth', component: AuthenticationComponent},
  {
    path: 'account', component: MyRootComponent, children: [
      {path: '', component: OverviewComponent},
      {path: 'myLoan', component: MyLoanComponent},
      {path: 'myInvest', component: MyInvestComponent},
      {path: 'overView', component: OverviewComponent},
      {path: 'message', component: MessageComponent},
      {path: 'record', component: RecordComponent},
      {path: 'coupon', component: CouponComponent},
      {path: 'setting', component: AccountSettingComponent},
      {path: 'deposit', component: DepositComponent},
      {path: 'withdraw', component: WithdrawComponent},
    ], canActivate: [AuthGuardService]
  }, {
    path: 'help', component: HelpComponent, children: [
      {path: '', component: LoginHelpComponent},
      {path: 'loginHelp', component: LoginHelpComponent},
      {path: 'pwHelp', component: PwHelpComponent},
      {path: 'reauthHelp', component: ReauthHelpComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

