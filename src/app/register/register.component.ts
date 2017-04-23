import { Component, OnInit } from '@angular/core';
import { AuthService }       from '../shareable/auth.service';
import { Router }            from '@angular/router';
import { User }              from '../model/user.model';
import {Facebook} from './ng2-facebook-class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {

  private user :User = new User();
  public facebook;
  constructor( private authService:AuthService,private router:Router ) {
    this.user = new User();
   }

  ngOnInit() {
    this.facebook = new Facebook('442178426131458')
    this.facebook.init();
    console.log();
  }

  login() {
        // this.facebook.login();
        this.facebook.login();;

      }
  
  register(){
    this.authService.doRegister(this.user).then(
        res=>{
          if(res){
            this.router.navigate(["/home"]);
          }
          else{
            console.log(res);
          }
        } 
    );
      console.log(this.user);

    }

}
