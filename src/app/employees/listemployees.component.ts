import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employees.service';


@Component({
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  
  employees: Employee[];
    
  constructor(private _employeeService:EmployeeService) {
    this.employees = this._employeeService.getEmployees();
    }

  ngOnInit() {
  }

}
