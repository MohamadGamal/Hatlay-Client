import { Component, OnInit } from '@angular/core';
import {  OrdersService } from '../../shareable/orders.service';
import {  UserService } from '../../shareable/user.service';
@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {
private orderslist=[];
  constructor(private ordersservice:OrdersService,private userservice:UserService ) { }

  ngOnInit() {
    this.ordersservice.getorders(this.userservice.getUser()._id).subscribe(    
    resp=>{this.orderslist=resp;console.log(resp)},
    err=>console.log(err)
  );


    
  }

}
