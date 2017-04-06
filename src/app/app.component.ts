import { Component,SimpleChanges,OnInit,OnChanges } from '@angular/core';
//import{PostService} from "./post/post.service";
import { Router }           from '@angular/router';
import {AuthService}        from './shareable/auth.service'
import {UserService}        from './shareable/user.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, OnChanges {
  private user=null;
  private logined = false;
  
  constructor(private router:Router ,private authService:AuthService ,private userService:UserService){
    this.authService.isLoggedIn().subscribe(loggedIn =>{
       this.logined = loggedIn;
       this.user=this.authService.getUser();
       console.log(this.authService.getUser());
      });
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {}

  logout(){
    this.authService.logOut();
    this.router.navigate(["/home"]);
  }

  showSideNav(){
    
  }        

}
