import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../shareable/orders.service';
import { UserService } from '../shareable/user.service';
import { MaterializeAction } from 'angular2-materialize';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[]
})
export class HomeComponent implements OnInit {
  notifs=[];
  private friendsmap;
  constructor(private route: ActivatedRoute,private ordersservice: OrdersService, private userservice: UserService) {
   this.friendsmap={};
    console.log( this.friendsmap)
    var friendlist=this.userservice.getUser().friends.map((val,index)=>val._id)
              this.userservice.getUser().friends.forEach((val)=>this.friendsmap[val._id]=val.name)
    this.ordersservice.getnotifs(friendlist).subscribe((res)=>{console.log(res);this.notifs=res},(err)=>console.log(err));
   
  
}

  ngOnInit() {
  }

}
