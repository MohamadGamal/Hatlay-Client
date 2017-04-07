import { Component, OnInit } from '@angular/core';
import {UserService}        from '../../shareable/user.service'


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  private user;
  private  URL ="http://localhost:8000/user/";
  private toggleRestaur= false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    console.log(this.user);
  }

  addSearchResult(resturent){
      console.log(resturent);
  }

}
