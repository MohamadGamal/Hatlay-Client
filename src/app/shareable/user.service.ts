import { Injectable } from '@angular/core';
import { AuthService }       from './auth.service';
import {Http ,Headers} from '@angular/http';
import {Observable} from 'rxjs';
@Injectable()
export class UserService {
private user;
private userFull={};
private Url = 'http://localhost:8000/user';
 private headers = new Headers({'Content-Type': 'application/json'});
   
  constructor(private http: Http) { 
  }
  getUser(){
    return this.user;
  }
  public setUser(user){

 this.user=user;

  }
    public getUserFull(){
       return this.userFull;
    }

  public refreshUserFull() : Observable<any> {
console.log(this.Url+"/"+this.user.id);
return this.http.get(this.Url+"/"+this.user.id)
.map(response => response.json()? this.userFull=response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
  public reloadUser(){
    var user = JSON.parse(localStorage.getItem("user"));
    return user ;
  }


}
