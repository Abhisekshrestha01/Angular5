import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {SelectRequiredValidatorDirective} from '../app/shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective} from '../app/shared/confirm-equal-validator.directive';
import { EmployeeService} from '../app/employees/employees.service';

import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';

const appRoutes: Routes = [
{path: 'list', component: ListemployeesComponent},
{path: 'create', component: CreateEmployeeComponent, canDeactivate:[CreateEmployeeCanDeactivateGuardService]},
{path: 'employee/:id', component: EmployeeDetailsComponent},
//{path: 'employee/:id/:gender', component: ListemployeesComponent}, if need to pass more then two parameter
{path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
