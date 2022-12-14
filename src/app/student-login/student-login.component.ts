import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
newData;
 date:any;
 formdata:FormGroup;
 
  constructor(private fb:FormBuilder) { 
   
    
    
  }
 
  ngOnInit(): void {
    var today=new Date()
    this.date=today.getFullYear()
    let string="ashndvckjsdncvsdcbsdcgkncncjhcd"
    this.newData=string
    this.formdata=this.fb.group({
      name:["",Validators.required],
      lastname:["",Validators.required],
      sername:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
  
    })
 }
 va;
 data1(val){
  this.va=val
  console.log(val)
 }
 ngOnChanges(): void {
console.log("kashi")
  console.log(this.va)
 }

}
