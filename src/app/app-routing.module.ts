import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DisplayemployeeComponent } from './displayemployee/displayemployee.component';


const routes: Routes = [
  { path: '', component:DisplayemployeeComponent},
  { path: 'display_employee', component:DisplayemployeeComponent},

  { path: 'add_employee', component:AddemployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
