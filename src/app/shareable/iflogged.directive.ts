import { Directive  ,TemplateRef, ViewContainerRef, Input} from '@angular/core';
import {  AuthService } from './auth.service';
@Directive({
  selector: '[Iflogged]'
})
export class IfloggedDirective {
@Input('Iflogged') set val(state){
  // console.log("STATE Before: "+state);
      state!==false?state==true?"":state=true:"";
      this.auth.isLoggedIn().subscribe(
                    e=>{
                  
                  //              console.log(" LIVE, STATE : "+state);
                              (state?e:!e)?this.vcref.createEmbeddedView(this.tref):this.vcref.clear();
                                  
                        },
                  err=>console.log(err)
      )


};
  constructor(private tref:TemplateRef<any>,private vcref:ViewContainerRef,private auth:AuthService) {

   }
}


/*

e/state  T F 
T         T F
F         F T




*/