import { Component, OnInit } from '@angular/core';
import { UserService }        from '../../shareable/user.service'
import { FilterPipe }         from '../../filter.pipe'
import { OrdersService}       from '../../shareable/orders.service'

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],

})
export class AddOrderComponent implements OnInit {
  private user;
  private searchTerm;
  private inviated=[];
  private restaurant ={};
  private newRestaurant ={};

  private order = {};

  private allFriendsAndGroups=[];

  private  URL ="http://localhost:8000/resturant/";
  private toggleRestaur= false;
  private toggleSelectedRest = true;
  constructor(private userService: UserService ,private orderService:OrdersService) { 
      this.user={};
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.allFriendsAndGroups.push.apply(this.allFriendsAndGroups,this.user.groups);
    this.allFriendsAndGroups.push.apply(this.allFriendsAndGroups,this.user.friends);

    console.log(this.allFriendsAndGroups);
  }

  addSearchResult(restaurant){
    this.restaurant = restaurant;
    this.toggleSelectedRest = !this.toggleSelectedRest;
  }

  addRestuernt(){

      this.orderService.addRestaurant(this.newRestaurant)
          .subscribe(
              res=>{
                this.restaurant=res;
                this.toggleSelectedRest = !this.toggleSelectedRest;
                this.toggleRestaur =  !this.toggleRestaur; 
                this.newRestaurant = {}; 
              },
              err=>console.log(err)
          )  
  }

  invaite(item){
        this.inviated.push(item);
        this.allFriendsAndGroups.splice(this.allFriendsAndGroups.indexOf(item),1)
        this.searchTerm="";

  }
  remove(item){
        this.allFriendsAndGroups.push(item);
        this.inviated.splice(this.inviated.indexOf(item),1)    
  }

  addOrder(){

    console.log(this.order)

  }

  

}
