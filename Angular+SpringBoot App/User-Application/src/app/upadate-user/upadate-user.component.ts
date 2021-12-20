import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-upadate-user',
  templateUrl: './upadate-user.component.html',
  styleUrls: ['./upadate-user.component.css']
})
export class UpadateUserComponent implements OnInit {

  constructor(private userService:UserServiceService
    ,private route:ActivatedRoute,private router:Router) { }

  id:number;
  userobj:User=new User();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['userId']
    this.userService.getUserById(this.id).subscribe(data =>{
      this.userobj=data;
    },
    error=>console.log(error));
  }

 
  onSubmit(){

    this.userService.updateUser(this.id,this.userobj).subscribe(data=>{
      this.goToUserList();
    },error=>console.log(error));
  }
  goToUserList(){
    this.router.navigate(['/users']);
  }


}
