import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userobj:User=new User();
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private userservice:UserServiceService,
    private router:Router,private formBuilder: FormBuilder) {
      this.dateFrom = dayjs('10.30.2021');
  
     }
     datePickerConfig = {
      format: 'YYYY-MM-DD ',
      monthFormat: 'MMM, YYYY',
      startDate: '01.01.2012',
    }
    dateofBirth = dayjs();
    dateFrom;  
    
Pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
picodepattern="^([0-9]{4}|[0-9]{6})$";
  ngOnInit(): void {
   this.saveUser();

   this.registerForm = new FormGroup({
    firstname: new FormControl(this.userobj.firstName, [Validators.required, Validators.minLength(4)]),
    lastname: new FormControl(this.userobj.lastName, [Validators.required, Validators.minLength(4)]),
    email:  new FormControl(this.userobj.email,[Validators.required, Validators.email,Validators.pattern(this.Pattern)]),
    adress:new FormControl(this.userobj.adress,[Validators.required]),
    pincode: new FormControl(this.userobj.pincode,[Validators.required,Validators.pattern(this.picodepattern)])
  });
  
}
  
  saveUser(){
    this.userservice.createUser(this.userobj).subscribe(data=>{
      console.log(data);
      this.goToUserList()
    },
    error=>console.log(error));
    
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    
    console.log(this.userobj);
    this.saveUser()
  }

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email(){return this.registerForm.get('email');}
  get adress(){return this.registerForm.get('adress')};
  get pincode(){return this.registerForm.get('pincode')}
}
 