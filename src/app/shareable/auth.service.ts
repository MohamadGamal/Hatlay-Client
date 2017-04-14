import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

import { UserService } from './user.service';

import { HttpClientService } from '../shareable/http-client.service'
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private loggedIn = false;
  private user = {};

  getUser() {
    return this.user;
  }


  private logger = new BehaviorSubject<boolean>(false);
  isLoggedIn(): Observable<boolean> {
    console.log("change in loggedIn");
    return this.logger.asObservable();
  }


  private postsUrl = 'http://localhost:8000/user';  // URL to web api


  constructor(private http: HttpClientService, private userService: UserService) {

  }
  lookupuserData() {

    if (localStorage.getItem('token')&&localStorage.getItem('site_user')) {
      console.log(localStorage.getItem('site_user'));
      this.userService.setUser(JSON.parse(localStorage.getItem('site_user')))
      console.log(this.userService.getUser());
      this.loggedIn = true;
      this.logger.next(this.loggedIn);
      return true;
    }
return false;


  }
  doLogin(user: User) {
    return this.http
      .post(this.postsUrl + "/login", JSON.stringify(user))
      .toPromise()
      .then(res => {
        if (res.json().token) {
          console.log(res.json());
          localStorage.setItem('token', res.json().token);
          localStorage.setItem('site_user',  JSON.stringify(res.json().user));
          this.loggedIn = true;
          this.userService.setUser(res.json().user);
          this.logger.next(this.loggedIn);
          console.log(res.json().user);
          console.log(this.userService.getUser());

          return true;
        } else {
          return false;
        }

      })
      .catch(res => { return false; });

  }


  logOut() {
    localStorage.removeItem('token');
    this.userService.setUser(null);
    this.loggedIn = false;
    this.logger.next(this.loggedIn);
  }

  //    private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  doRegister(user: User) {

    return this.http
      .post(this.postsUrl + "/register", JSON.stringify(user))
      .toPromise()
      .then(res => {
        if (res.json().token) {
          console.log("in true");

          localStorage.setItem('token', res.json().token);
          this.loggedIn = true;
          this.user = res.json().user;
          this.logger.next(this.loggedIn);
          return true;
        } else {
          return false;
        }
      })
      .catch(res => {
        console.log("errrrror");
        console.log(res.json());
        return false;
      });

  }

}


