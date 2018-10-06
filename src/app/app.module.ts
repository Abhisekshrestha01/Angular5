import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {SelectRequiredValidatorDirective} from '../app/shared/select-required-validator.directive';

import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRoutes: Routes = [
{path: 'list', component: ListemployeesComponent},
{path: 'create', component: CreateEmployeeComponent},
{path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
