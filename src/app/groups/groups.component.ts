import { Component, OnInit } from '@angular/core';
import {  UserService } from '../shareable/user.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
private user;
private userfriends;
private choosenList=[];
  constructor(private userservice:UserService) {
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
if(this.user.friends.length!=i)
  this.choosenList.push(this.user.friends[i]);
  this.userfriends.splice(i,1)

}
  ngOnInit() {
  this.userservice.refreshUserFull().subscribe(
    resp=>{this.userfriends=resp.friends ;this.user=resp},
    err=>console.log(err)

  )


  


}

}
