import { Component,SimpleChanges,OnInit,OnChanges } from '@angular/core';
//import{PostService} from "./post/post.service";
import { Router }            from '@angular/router';
import {AuthService}        from './shareable/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, OnChanges {

  private user=null;
  private x = 1;
  private logined = false;
  
  constructor(private router:Router ,private auth:AuthService){

        if(localStorage.getItem("user")){
          this.user = JSON.parse(localStorage.getItem("user"));
          this.logined = true;
        }else{
          this.user =null;
        }

    this.auth.isLoggedIn().subscribe(loggedIn => {
      console.log(" login ::"+loggedIn);
      this.logined = loggedIn;
      if(loggedIn){
      this.user = JSON.parse(localStorage.getItem("user"));
      }
    });

  }


  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}

  logout(){
    this.auth.logOut();
    this.router.navigate(["/home"]);
  }        

}
