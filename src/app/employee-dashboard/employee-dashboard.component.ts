import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './emoloyee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  abc=""
  formvalue!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  constructor(private fb: FormBuilder, private api: ApiService) {}
  data!: any;
  ngOnInit(): void {
    this.formvalue = this.fb.group({
      firstname:[''],
      lastname: ['',[Validators.required]],
      email: ['',[Validators.required]],
      salary: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
    });
    this.getAllEmpoloyee();
    
  }
  submitted=false;
  // showChildModals(){
  //   this.api.childModal=true;
  // }
  get f() {
    return this.formvalue.controls;
  }
 
  postEmployeeDetails() {
   
    this.employeeModelObj.firstname = this.formvalue.value.firstname;
    this.employeeModelObj.lastname = this.formvalue.value.lastname;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.salary = this.formvalue.value.salary;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;

    this.api.postEmployee(this.employeeModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Employee Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formvalue.reset();
        this.getAllEmpoloyee();
      },
      (err) => {
        alert('somthing went wrong');
      }
    );
  }

  getAllEmpoloyee() {
    this.api.getEmployee().subscribe((res) => {
      this.data = res;
    });
  }

  deletEmployee(Employee: any) {

    this.api.deletEmployee(Employee.id).subscribe((res) => {
      alert('Employee Deleted');
      this.getAllEmpoloyee();
    });
  }

  onEdit(Employee: any) {
    this.abc="gayatri"
    this.showadd = false;
    this.showupdate = true;
    this.employeeModelObj.id = Employee.id;
    this.formvalue.controls['firstname'].setValue(Employee.firstname);
    this.formvalue.controls['lastname'].setValue(Employee.lastname);
    this.formvalue.controls['email'].setValue(Employee.email);
    this.formvalue.controls['mobile'].setValue(Employee.mobile);
    this.formvalue.controls['salary'].setValue(Employee.salary);
  }
  updateEmployee() {
    this.employeeModelObj.firstname = this.formvalue.value.firstname;
    this.employeeModelObj.lastname = this.formvalue.value.lastname;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.salary = this.formvalue.value.salary;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.api
      .UpdateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe(() => {
        alert('update succsesfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formvalue.reset();
        this.getAllEmpoloyee();
      });
  }
  showadd!: boolean;
  showupdate!: boolean;
  clickAdd() {
    this.abc="hjhbcdhbcghdsvc"
    this.formvalue.reset();
    this.showadd = true;
    this.showupdate = false;
  }
 

    }

