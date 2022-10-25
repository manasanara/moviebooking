import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { TrillerComponent } from './triller/triller.component';
import { DramaComponent } from './drama/drama.component';
import { ActionComponent } from './action/action.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { UserdataComponent } from './userdata/userdata.component';
import { SuccessComponent } from './success/success.component';
import { EditdataComponent } from './editdata/editdata.component';
const routes: Routes = [
  {path:'home',component:HomeComponent,children:[
    {path:'action',component:ActionComponent},
    {path:'triller',component:TrillerComponent},
    {path:'drama',component:DramaComponent}
  ]},
  { path:'moviedetail',component:MoviedetailComponent},
  {path:'login/:id',component:LoginComponent},
  {path:'userregistration',component:UserregistrationComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'success',component:SuccessComponent},
  {path:'editdata',component:EditdataComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
