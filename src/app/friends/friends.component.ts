import { Component, OnInit } from '@angular/core';
import { AuthService}        from '../shareable/auth.service'
import { Router }            from '@angular/router';
import { User }              from '../model/user.model';
import { UserService}        from '../shareable/user.service'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']

})
export class FriendsComponent implements OnInit {

  private user=null;
  private friend = null;
  private isFriend = false;
  //// search url 
  private  URL ="http://localhost:8000/user/";

  constructor(private authService:AuthService ,private userService:UserService) { 


    console.log("constructor");
    this.user = userService.getUser();
    console.log(userService.getUser());

  }

  ngOnInit() {
    console.log("ngOnInit");
    
  }

  addSearchResult(friend){
      this.isFriend = false;
      this.friend = friend;
      console.log(this.user)
      for(var i = 0 ; i<this.user.friends.length;i++){
        if(this.friend._id == this.user.friends[i]._id ){
          this.isFriend = true;
          break;
        }
      }
    }

  unfollow(id){
        if(this.userService.unfollow(id)){
          for(var i = 0 ; i<this.user.friends.length;i++){
              if(id == this.user.friends[i]._id ){
                  this.user.friends.splice(i,1);
                  this.friend=null;
                  break;
                }
              }
        console.log(this.user);
        }else{
          console.log("error");
        }        
    }

  follow(friend){
        if(this.userService.follow(friend._id)){
          this.friend=null;
          this.user.friends.push(friend);
        }else{
              console.log("error");      
        }

    }  

}
