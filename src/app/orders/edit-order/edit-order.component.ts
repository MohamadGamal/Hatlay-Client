import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService}       from '../../shareable/orders.service'
import { UserService}       from '../../shareable/user.service'
@Component({

  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private route : ActivatedRoute,private ordersservice:OrdersService,private userservice:UserService) { }
private order={_id:0};
  ngOnInit() {
   this.route.params.subscribe(
            (resp) => {
                var id;
                id =resp["id"];
                this.ordersservice.getorder(id).subscribe(    
                  resp=>{this.order=resp;console.log(resp)},
                   err=>console.log(err)
                );
            }
            ,

              err=>console.log(err)
        );
  }
  addentry(mealname,amount,price,comment){



console.log({
  username:this.userservice.getUser().name,
  userId:this.userservice.getUser()._id,
	amount:amount,
    name:mealname,
    price:price	,
    comment:comment
});
this.ordersservice.addmeal(this.order._id,{
  username:this.userservice.getUser().name,
  userId:this.userservice.getUser()._id,
	amount:amount,
    name:mealname,
    price:price	,
    comment:comment
}).subscribe(
(value)=>{value?this.ordersservice.getorder(this.order._id).subscribe(    
                  resp=>{this.order=resp;console.log(resp)},
                   err=>console.log(err)
                ):console.log(value)},

(err)=>{console.log(err)}
)



  }

}
