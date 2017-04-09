import { Directive  ,TemplateRef, ViewContainerRef, Input} from '@angular/core';
import {  AuthService } from './auth.service';
@Directive({
  selector: '[Iflogged]'
})
export class IfloggedDirective {
@Input('Iflogged') state:boolean=true;
  constructor(private tref:TemplateRef<any>,private vcref:ViewContainerRef,private auth:AuthService) {
  console.log("IF LOGGED started!, STATE : "+this.state);
this.auth.isLoggedIn().subscribe((e)=>{
                  console.log("IF LOGGED LIVES, STATE : "+this.state);
                  (e==this.state)?vcref.createEmbeddedView(this.tref):vcref.clear();
          },
err=>console.log(err)
)
   }
}


/*

e/state  T F 
T         T F
F         F T




*/