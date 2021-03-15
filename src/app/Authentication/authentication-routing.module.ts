import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from '../Shared/auth.guard';

import { EmailVerificationComponent } from '../Authentication/email-verification/email-verification.component';
import { ForgotPasswordComponent } from '../Authentication/forgot-password/forgot-password.component';
import { VerifyAccountComponent } from '../Authentication/verify-account/verify-account.component';
import {ResetPasswordComponent} from '../Authentication/reset-password/reset-password.component';
import { SigninComponent } from '../Authentication/signin/signin.component';
import { SignupEmailComponent } from '../Authentication/signup/signup.component'



const routes: Routes=[
    { path: '', component: SignupEmailComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'singnupEmail', component: SignupEmailComponent },
    { path: 'emailVerification', component: EmailVerificationComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'verify-account', component: VerifyAccountComponent },
    { path: 'confirmEmail/:id', redirectTo:"/signin",pathMatch:'full'},
    { path: 'recover/:id',component:ResetPasswordComponent},
    // { path: 'components',component:ComponentsComponent,children:[{path:'components',component:DashbordComponent},
    //                                                             {path:'smarttrade',component:SmarttradeComponent},
    //                                                              {path:'settings',component:SettingsComponent},
    //                                                              { path: 'addkey',component:AddkeyComponent}]},
    {path:'components',loadChildren:()=>import('../Component/component.module')
    .then(m=>m.ComponentModule)},
  
    { path: '**',redirectTo:"/signin",pathMatch:'full'}   
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthenticationRoutingModule{

}