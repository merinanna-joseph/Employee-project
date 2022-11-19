import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  roles=['Admin','Manager','HR','Developer'];
  submitted = false;
  singleEmployee = {};
  employeeDetails:any = [];
  storedEmployees;
  phonenotadded:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public route: Router,

    ) { }
    phone: FormArray;

    employeeForm: FormGroup = this.formBuilder.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      dob: ['',Validators.required],
      role: ['',Validators.required],
      phone:  new FormArray([],Validators.required),
      gender: ['',Validators.required],
    });
  ngOnInit() {
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      phone: ['',Validators.required],
    });
  }
  
  addItem(): void {
    this.phone = this.employeeForm.get('phone') as FormArray;
    this.phone.push(this.createItem());
  }
  get empfun() { return this.employeeForm.controls; }

  onEmployeeSave(){
    console.log("hlo")
    this.submitted = true;
    if((<FormArray>this.employeeForm.get('phone')).controls[0].invalid){
      this.phonenotadded = false;
    }
    else{
      this.phonenotadded = true;
    }
    if (this.employeeForm.invalid) {
      return;
    }
    
    console.log(this.empfun.name.value)
    this.singleEmployee = {
      name : this.empfun.name.value,
      address : this.empfun.address.value,
      dob : this.empfun.dob.value,
      role : this.empfun.role.value,
      phone :this.phone.value,
      gender :this.empfun.gender.value,
    }
    // const add = this.employeeForm.get('phone') as FormArray;
    // add.push(this.formBuilder.group({
    //   phone: [],
      
    // }))
    // console.log(add)
    this.storedEmployees = JSON.parse(localStorage.getItem("employee_list")); //get employess
    console.log(this.storedEmployees,'"stored')
    if(this.storedEmployees){
      this.storedEmployees.push(this.singleEmployee);
      console.log(this.storedEmployees,"hi");

      localStorage.setItem("employee_list", JSON.stringify(this.storedEmployees)); //store employees
      this.route.navigate(['display_employee/']);

    }else{
    this.employeeDetails.push(this.singleEmployee);
    console.log(this.employeeDetails,"hlo");
    localStorage.setItem("employee_list", JSON.stringify(this.employeeDetails)); 
    this.route.navigate(['display_employee/']);

    }
    
  }
  onCancelClick(){
    this.route.navigate(['display_employee/']);

  }
}
