import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';

import {AuthenticationRoutingModule} from './authentication-routing.module';



import { ForgotPasswordComponent } from '../Authentication/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from '../Authentication/email-verification/email-verification.component';
import { VerifyAccountComponent } from '../Authentication/verify-account/verify-account.component';
import { ResetPasswordComponent } from '../Authentication/reset-password/reset-password.component';
import { SigninComponent } from '../Authentication/signin/signin.component';

import { SignupEmailComponent } from '../Authentication/signup/signup.component'
import {ComponentModule} from '../Component/component.module';

@NgModule({
    declarations:[
        ForgotPasswordComponent,
        EmailVerificationComponent,
        VerifyAccountComponent,
        ResetPasswordComponent,
        SigninComponent,
        SignupEmailComponent,
      
    ],
    imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        NgbModule,
        CommonModule,
        AuthenticationRoutingModule,
        ChartsModule,
        ComponentModule
    ],
    exports:[],
    providers:[],
    
})
export class AuthenticationModule{
}