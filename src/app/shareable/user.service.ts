import { Injectable } from '@angular/core';
import { HttpClientService } from '../shareable/http-client.service'

@Injectable()
export class UserService {

  private URL = 'http://localhost:8000/user/';  // URL to web api

  constructor(private http: HttpClientService) {

  }

  public getUser(){
    var user = JSON.parse(localStorage.getItem("user"));
    return user ;
  }

  public follow(id){
    return this.http
          .get(this.URL+"/friend/"+id)
          .toPromise()
          .then(res =>true)
          .catch(res => false );
  }
  public unfollow(id){
    return this.http
          .delete(this.URL+"/friend/"+id)
          .toPromise()
          .then(res =>true)
          .catch(res => false );

  }


}
