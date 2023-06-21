import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { ListRegistrationComponent } from './list-registration/list-registration.component';
import { DetailRegistrationComponent } from './detail-registration/detail-registration.component';

const routes: Routes = [
  // {path:'', redirectTo:'list', pathMatch:'full'},
  {path:'', component: CreateRegistrationComponent},
  {path: 'list', component: ListRegistrationComponent},
  {path: 'detail/:id', component: DetailRegistrationComponent},
  {path: 'update/:id', component: CreateRegistrationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
