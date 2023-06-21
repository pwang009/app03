import { RegistrationModule } from './registration/registration.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './registration/create-registration/create-registration.component';
import { ListRegistrationComponent } from './registration/list-registration/list-registration.component';
import { DetailRegistrationComponent } from './registration/detail-registration/detail-registration.component';

const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  // {path:'register', component: CreateRegistrationComponent},
  // {path: 'list', component: ListRegistrationComponent},
  // {path: 'detail/:id', component: DetailRegistrationComponent},
  // {path: 'update/:id', component: CreateRegistrationComponent}
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule) },
  // { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule), data: {breadcrumb: {skip: true }} },
  { path: 'register', loadChildren: () => import('./registration/registration.module').then(mod => mod.RegistrationModule), data: {breadcrumb: {skip: true }}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
