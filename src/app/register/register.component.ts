import { Component, OnInit } from '@angular/core';
import { AuthService }   from '../shareable/auth.service';
import { Router }            from '@angular/router';
import { User }              from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]

})
export class RegisterComponent implements OnInit {

  user :User;

  constructor( private authService:AuthService,private router:Router ) {
    this.user = new User();
   }

  ngOnInit() {
    
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
