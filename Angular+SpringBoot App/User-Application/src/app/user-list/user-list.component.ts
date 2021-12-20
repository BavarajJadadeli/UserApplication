import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[];
  userObj:User=new User();
  searchtext;
  constructor(private userservice:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    this.userservice.getAllUser().subscribe(data=>{
      this.users=data
    });
  }
  updateUser(userId:number){
 
    this.router.navigate(['/updateUser',userId]);
  }
  deleteUser(userId:number){

    this.userservice.DeleteUser(userId).subscribe(data=>{
      console.log(data);
      this.getUser();
      

    });
  }
 
  userDetails(userId:number){
    this.router.navigate(['/userDetails',userId]);
  }

  key:String='dateofbirth';
  reverse:boolean=false;
  sort(key){
    this.key;
    this.reverse=!this;
  }
  
}