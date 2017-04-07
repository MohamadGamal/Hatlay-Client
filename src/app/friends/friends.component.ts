import { Component, OnInit } from '@angular/core';
import { AuthService}        from '../shareable/auth.service'
import { Router }            from '@angular/router';
import { User }              from '../model/user.model';
import { UserService}        from '../shareable/user.service'
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']

})
export class FriendsComponent implements OnInit {

  private user=null;

  constructor(private authService:AuthService,private userService:UserService) { 
    console.log("constructor");
    this.user = userService.getUser();
    console.log(userService.getUser());
  }

  ngOnInit() {
    console.log("ngOnInit");
    
  }

}
