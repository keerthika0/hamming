import { NgModule } from "@angular/core";
import {RouterModule,Routes} from '@angular/router'


import { AddkeyComponent } from '../Component/addkey/addkey.component';
import { DashbordComponent } from '../Component/dashbord/dashbord.component';
import { SmarttradeComponent } from '../Component/smarttrade/smarttrade.component';
import { SettingsComponent} from '../Component/settings/settings.component';
import {ComponentsComponent } from './components/components.component'

const routes: Routes=[
    {path:'',component:AddkeyComponent},
    {path:'components',component:DashbordComponent},
    {path:'smarttrade',component:SmarttradeComponent},
    {path:'settings',component:SettingsComponent},
    {path:"**" , component:DashbordComponent}
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ComponentRoutingModule{

}