import { Component, OnInit } from '@angular/core';
import { UserService} from "../shareable/user.service"
import { User} from "../model/user.model"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user = new User();
  private editMode = true;
  private progress = false;

  image={};
  name ;

  constructor(private userService: UserService) { 
      this.user = this.userService.getUser();
      this.name = this.user.name;
      
  }
  
  ngOnInit(){

  }

uploaded(file){
  this.user.image=file;
}
saveChange(){
      this.progress = true ; 
      this.user.name = this.name;
      this.userService.updateUser(this.user).then(
        res=>{
              this.editMode = false ; 
              this.progress = false ; 
        })
      .catch(
        res =>{
          console.log("try agian !");
      })

}

}
