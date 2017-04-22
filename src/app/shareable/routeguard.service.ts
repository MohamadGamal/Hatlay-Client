import { Injectable } from '@angular/core';
import { CanActivate , CanActivateChild }    from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()

export class RouteguardService implements CanActivate ,CanActivateChild{
private loggedin=false;
  constructor(private router:Router,private authservice:AuthService) { 
    this.authservice.isLoggedIn().subscribe((next)=>this.loggedin=next,(err)=>console.log(err));
  }
  auth(){

     if(this.loggedin)
    return true;

    this.router.navigate(['/login']);
    return false
  }
canActivate() {
   return this.auth();
  }
  canActivateChild() {
     return this.auth();
}

}
