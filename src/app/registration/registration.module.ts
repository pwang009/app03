import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { ListRegistrationComponent } from './list-registration/list-registration.component';
import { DetailRegistrationComponent } from './detail-registration/detail-registration.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    CreateRegistrationComponent,
    ListRegistrationComponent,
    DetailRegistrationComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class RegistrationModule { }
