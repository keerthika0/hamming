import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ComponentRoutingModule} from './component-routing.module';
import {NgZorroAntdModule } from '../ng-zorro-antd.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';


import { DashbordComponent } from '../Component/dashbord/dashbord.component';
import { SmarttradeComponent } from '../Component/smarttrade/smarttrade.component';
import { SettingsComponent } from '../Component/settings/settings.component';
import { ActivityLogComponent } from '../Component/settings/activity-log/activity-log.component';
import { ProfileComponent } from '../Component/settings/profile/profile.component';
import { AuthorizeDeviceComponent } from '../Component/settings/authorize-device/authorize-device.component';
import { SecurityComponent } from '../Component/settings/security/security.component';
import { AddkeyComponent } from '../Component/addkey/addkey.component';
import { HeaderComponent } from '../Component/header/header.component';
import { SidenavComponent } from '../Component/sidenav/sidenav.component';
import { ComponentsComponent } from '../Component/components/components.component';


@NgModule({
    declarations:[
        DashbordComponent,
        SmarttradeComponent,
        SettingsComponent,
        ActivityLogComponent,
        ProfileComponent,
        AuthorizeDeviceComponent,
        SecurityComponent,
        AddkeyComponent,
        HeaderComponent,
        SidenavComponent,
        ComponentsComponent,
      

    ],
    imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        ComponentRoutingModule,
        NgZorroAntdModule,
        NgbModule,
        ChartsModule
    ],
    exports:[
        DashbordComponent,
        SmarttradeComponent,
        SettingsComponent,
        ActivityLogComponent,
        ProfileComponent,
        AuthorizeDeviceComponent,
        SecurityComponent,
        AddkeyComponent,
        HeaderComponent,
        SidenavComponent,
        ComponentsComponent
    ],
    providers:[],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class ComponentModule{

}