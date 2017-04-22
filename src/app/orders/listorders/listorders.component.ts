import { Component, OnInit,EventEmitter } from '@angular/core';
import { OrdersService } from '../../shareable/orders.service';
import { UserService } from '../../shareable/user.service';
import { PropertymatcherPipe } from '../../shareable/propertymatcher.pipe';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {
  private orderslist = [];
  private modalord;
  constructor(private ordersservice: OrdersService, private userservice: UserService) { }

  ngOnInit() {
    this.ordersservice.getorders(this.userservice.getUser()._id).subscribe(
      resp => { this.orderslist = resp; console.log(resp) },
      err => console.log(err)
    );



  }

  finishorder(orderid) {
    this.ordersservice.finishorder(orderid).subscribe(
      resp => {
        this.ordersservice.getorders(this.userservice.getUser()._id).subscribe(
          resp => {


            this.orderslist = resp;
            this.ordersservice.finalizeorder(orderid).subscribe(
              resp => { this.modalord = resp; this.openModal();console.log(resp) },
              err => console.log(err)
            );
            console.log(resp)
          },
          err => console.log(err)
        );


      },
      err => console.log(err)
    );



  }
  removeorder(orderid) {
    this.ordersservice.removeorder(orderid).subscribe(
      resp => {
        this.ordersservice.getorders(this.userservice.getUser()._id).subscribe(
          resp => { this.orderslist = resp; console.log(resp) },
          err => console.log(err)
        );


      },
      err => console.log(err)
    );



  }


  modal3Action = new EventEmitter<string | MaterializeAction>();
 openModal() {
    
    this.modal3Action.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modal3Action.emit({ action: "modal", params: ['close'] });
  }
}
