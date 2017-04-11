import { Component, OnInit } from '@angular/core';
import {  UserService } from '../shareable/user.service';
import {  GroupService } from '../shareable/group.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
private user;
private userfriends;
private choosenList=[];
private img=null;
  constructor(private userservice:UserService,private groupservice:GroupService) {
   // console.log(userservice.refreshUserFull());
//console.log(userservice.getUserFull());

}
   removefromlist(index){
  this.userfriends.push(this.choosenList[index]);
  this.choosenList.splice(index,1)
}
addtolist(email){
var i=0;
while(this.user.friends.length!=i&&this.user.friends[i].email!=email&&++i);
console.log(i,email);
if(this.user.friends.length!=i){
      this.choosenList.push(this.user.friends[i]);
      this.userfriends.splice(i,1)
    }

}
addgroup(name){


   
  
    var group={name:name,users:this.choosenList.map(n=>n._id),adminId:this.user._id}
     this.img ? group["image"]= this.img:"";
   //console.log(group);
     this.groupservice.addgroup(group).subscribe(
      res=>{if(res._id){
        for (var elem of this.choosenList)
         { this.userservice.addgrouptouser(elem._id,res._id).subscribe(res=>console.log(res),err=>console.log(err))
          console.log("PAIR GROUP:",elem._id,res._id)}
           console.log("PAIR USER:",this.user._id,res._id)
           console.log("RESID:",res._id)
           this.userservice.addgrouptouser(this.user._id,res._id).subscribe(res=>{this.initaall()},err=>console.log(err))
            
            }
          
      else console.log(res)  
      }
            
            ,
      err=>console.log(err)
     );
     
   

}
uploaded(file){

this.img=file;
console.log(file);

}
 initaall(){

this.choosenList=[];
console.log(this.choosenList)
  this.userservice.refreshUserFull().subscribe(
    resp=>{this.userfriends=resp.friends ;this.user=resp;console.log(resp)},
    err=>console.log(err)
  )


}
  ngOnInit() {
this.initaall();
}

}
