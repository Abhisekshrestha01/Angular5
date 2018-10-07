import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employees.service';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  
  employees: Employee[];
  employeeToDisplay:Employee;
  private arrayIndex = 1;
  
  constructor(private _employeeService:EmployeeService, private _router: Router) {
    
    
    }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    
  }

  onClick(employeeId: number){
    this._router.navigate(['/employee', employeeId])
  }
}
