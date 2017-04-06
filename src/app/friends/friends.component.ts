import { Component, OnInit } from '@angular/core';
import { AuthService}        from '../shareable/auth.service'
import { Router }            from '@angular/router';
import { User }              from '../model/user.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']

})
export class FriendsComponent implements OnInit {

  private user=null;

  constructor(private authService:AuthService) { 
    console.log("constructor");
    this.user = authService.getUser();
    console.log(authService.getUser());
  }

  ngOnInit() {
    console.log("ngOnInit");
    
  }

}
