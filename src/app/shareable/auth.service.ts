import { Injectable } from '@angular/core';
import {Http ,Headers} from '@angular/http';
import { User }        from '../model/user.model';
import {Subject,Observable} from 'rxjs';
@Injectable()
export class AuthService {

  private loggedIn = false;
  private logger = new Subject<boolean>();
  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }


  private headers = new Headers({'Content-Type': 'application/json'});
  private postsUrl = 'http://localhost:8000/user';  // URL to web api

  constructor(private http: Http) {

  }
  doLogin(user:User) {
    console.log(JSON.stringify(user));
    return this.http
          .post(this.postsUrl+"/login",JSON.stringify(user),{headers:this.headers})
          .toPromise()
          .then(res =>{
            if(res.json().token){
              // store username and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user',JSON.stringify(res.json().user));
              localStorage.setItem('token', res.json().token);

              this.loggedIn = true;
              this.logger.next(this.loggedIn);
              return true;              
            }else{
              return false;
            }
            
          })
          .catch(res=>{ return false;});

  }


  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

  //    private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  doRegister(user:User){
    console.log(JSON.stringify(user));
    return this.http
          .post(this.postsUrl+"/register",JSON.stringify(user),{headers:this.headers})
          .toPromise()
          .then(res => {
            if(res.json().token){
              // store username and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user',JSON.stringify(res.json().user));
              localStorage.setItem('token', res.json().token);

              return true;              
            }else{
              return false;
            }
          })
          .catch(res=>{ return false;});

  }

}


