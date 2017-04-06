import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { 

  }

  public getUser(){
    var user = JSON.parse(localStorage.getItem("user"));
    return user ;
  }


}
