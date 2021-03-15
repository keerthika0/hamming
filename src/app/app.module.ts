import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, en_US} from 'ng-zorro-antd/i18n';



import { ChartsModule } from 'ng2-charts';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationModule } from '../app/Authentication/authentication.module';
import { AuthenticationRoutingModule } from '../app/Authentication/authentication-routing.module';
import { HttpRequestInterceptor } from './Shared/HttpInterceptor';




@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    NgZorroAntdModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
  ],
  providers: [CookieService, [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US }
  ],],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
  
 }
Endline



