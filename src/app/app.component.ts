import { Component, SimpleChanges, OnInit, OnChanges, OnDestroy,EventEmitter } from '@angular/core';
import { SocketIOServiceService } from './socket-ioservice.service'
//import{PostService} from "./post/post.service";
import { Router } from '@angular/router';
import { AuthService } from './shareable/auth.service'
import { UserService } from './shareable/user.service'
import { MaterializeAction } from 'angular2-materialize';

import { IfloggedDirective }   from './shareable/iflogged.directive'

@Component({
  selector   :   'app-root'              ,
  templateUrl:   './app.component.html'  ,
  styleUrls  : [ './app.component.css' ],
  providers  : [ SocketIOServiceService ]

})
export class AppComponent implements OnInit, OnChanges {
  private user = null;
  private logined = false;
  
  messages = [];
  
  notificationNmber = 0;

  connection;
  message;
  constructor(private router: Router, private authService: AuthService
    , private userService: UserService, private socketIOServiceService: SocketIOServiceService) {
      this.authService.lookupuserData();
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.logined = loggedIn;
      this.user = this.userService.getUser();
        console.log(this.userService.getUser());

      if(this.user){
              console.log("start ")
              this.connection = this.socketIOServiceService
                          .getMessages()
                          .subscribe(message => 
                            { 
                              this.messages.push(message);
                              this.notificationNmber++;
                            });
        
      }else{
            if(this.connection)
             this.connection.unsubscribe();        
      }

    });
  }


  ngOnChanges(changes: SimpleChanges): void { }

  logout() {
    this.authService.logOut();
     this.connection.unsubscribe();
    this.router.navigate(["/home"]);
  }

  showSideNav() {

  }

  sendMessage() { 
    this.socketIOServiceService.sendMessage(this.message); 
    this.message = ''; } 
  
  ngOnInit() { 
  } 

  ngOnDestroy() { this.connection.unsubscribe(); }

  modalActions = new EventEmitter<string|MaterializeAction>();
  modalMenuActions = new EventEmitter<string|MaterializeAction>();

  openModal() {
    this.notificationNmber=0;
    console.log(this.userService.clearNotification());

    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  openMenuModal() {
    this.modalMenuActions.emit({action:"modal",params:['open']});
  }
  closeMenuModal() {
    this.modalMenuActions.emit({action:"modal",params:['close']});
  }


}
