import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
formdata:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formdata=this.fb.group({
      fname:["",Validators.required, Validators.minLength(4)],
      lname:["", Validators.required],
      name:["",  Validators.required],
      dob:["",Validators.required]

    })
  }

  get name(){  
    return this.formdata.get('name');  
  } 


  Update(){
    this.formdata.patchValue({
      name: 'Nancy',
    lname:"mane"
    });
  }

  
data(formdata:FormGroup){
  
    // console.log('Valid?', formdata.valid); // true or false
    console.log('Name', formdata.value);


  }
 
}

