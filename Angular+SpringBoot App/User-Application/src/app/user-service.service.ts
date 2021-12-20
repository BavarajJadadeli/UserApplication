import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  constructor(private httpClient:HttpClient) { }

  getAllUser():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:9001/users/getAllUser");
  }
  createUser(user:User):Observable<object>{
   return this.httpClient.post("http://localhost:9001/users/newUser",user);
  }
  getUserById(userId:number):Observable<User>{
    return this.httpClient.get<User>("http://localhost:9001/users/getById/"+userId)
  }

  updateUser(userId:number,user:User):Observable<object>{
    return this.httpClient.post("http://localhost:9001/users/updateuser/"+userId,user);
   }

   DeleteUser(userId:number):Observable<object>{
     return this.httpClient.delete("http://localhost:9001/users/delete/"+userId);

  }
  SearchUserByName(firstName:String):Observable<Object>{
    return this.httpClient.get<User>("http://localhost:9001/users/getByName"+firstName)
  }
  
  
}
