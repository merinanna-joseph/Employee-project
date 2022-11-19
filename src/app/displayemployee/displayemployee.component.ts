import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {
  employeesList;
  constructor(
    public route: Router,
  ) { }

  ngOnInit() {
    this.employeesList = JSON.parse(localStorage.getItem("employee_list")); 
    console.log(this.employeesList,'"stored')

  }
  onAddEmployeeClick(){
    this.route.navigate(['add_employee/']);

  }
  onRemoveEmployees(){
    localStorage.removeItem("employee_list");
    this.ngOnInit();

  }
}
