import { Component, OnInit } from '@angular/core';
import {AuthService}        from '../shareable/auth.service'
import { Router }            from '@angular/router';
import { User }              from '../model/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private user :User = new User();
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  login(){
        console.log(this.user);
        this.authService.doLogin(this.user).then(
        res=>{
          if(res){
            this.router.navigate(["/home"]);
          }
          else{
            console.log(res);
          }
        } 
    );

  }

}
