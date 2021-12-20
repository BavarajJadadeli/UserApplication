import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  userObj:User;
  userId:number
  constructor(private userservice:UserServiceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.userId=this.router.snapshot.params['userId'];
    this.userObj=new User();
    this.userservice.getUserById(this.userId).subscribe( data => {
      this.userObj = data;
    });
    
  }

  userDetailsList(){
    this.route.navigate(['/users']);
  }

}
