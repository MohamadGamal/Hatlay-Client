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
  private restaurant ;
  private newRestaurant ={};
  private resturantimage;
private order ={name:"",time:""};
  private allFriendsAndGroups=[];

  private  URL ="http://localhost:8000/resturant/";
  private toggleRestaur= false;
  private toggleSelectedRest = true;
  constructor(private userService: UserService ,private orderService:OrdersService) { 
      this.user={};
  }

  ngOnInit() {
    //a=[1,2,
    this.user = this.userService.getUser();
    this.allFriendsAndGroups=this.allFriendsAndGroups.concat(this.user.groups.map((val)=>{val.difftype="Groups";return val}));
      this.allFriendsAndGroups=this.allFriendsAndGroups.concat(this.user.friends.map((val)=>{val.difftype="Friends";return val}));

    console.log('allfs and grs',this.allFriendsAndGroups);
  }

  addSearchResult(restaurant){
    this.restaurant = restaurant;
    this.toggleSelectedRest = !this.toggleSelectedRest;
  }

  addRestuernt(){
console.log("tbd",this.newRestaurant);
      this.orderService.addRestaurant(this.newRestaurant)
          .subscribe(
              res=>{
                this.restaurant=res;
                console.log(res)
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





        if(item.difftype=="Groups")
            for ( var i of this.allFriendsAndGroups.filter((val)=>val.difftype=="Friends") )
                if (item.users.filter((val)=>val==i._id).length)
                      this.allFriendsAndGroups.splice(this.allFriendsAndGroups.indexOf(i),1)






        this.searchTerm="";

  }
  remove(item){
        if(item.difftype=="Groups")
            for ( var i of item.users )
                if (this.user.friends.filter((val)=>val._id==i).length && !(this.allFriendsAndGroups.filter((val)=>val._id==i).length))
                      {let user=this.user.friends.filter((val)=>val._id==i)[0];user.difftype="Friends";this.allFriendsAndGroups.push(user);}
        this.allFriendsAndGroups.push(item);
        this.inviated.splice(this.inviated.indexOf(item),1)    
  }
uploaded(menu){
this.newRestaurant['menu']=menu;


}
  addOrder(){
    
    var endjob={};
    endjob[this.user._id]={userId:this.user._id,name:this.user.name}
     for ( var myuser of this.inviated.filter((val)=>val.difftype=="Friends") )
       { 
         console.log("Friend",myuser)

           }
    for ( var i of this.inviated.filter((val)=>val.difftype=="Groups") )
       { 
         let myuser={}       
         for (var us of i.users){
                console.log(i);
                let myuser=this.user.friends.filter((val)=>val._id==us)[0] 
                console.log(myuser)
                endjob[myuser._id]={userId:myuser._id,name:myuser.name,groupId:i._id,groupname:i.name}
              }



       }
let users=[];
for( var user in endjob)
  users.push(endjob[user]);


let myorder={
name:this.order.name,
time:this.order.time,
users:users,
resturant:this.restaurant._id,
adminId:this.user._id


}
console.log(myorder);
this.orderService.addorder(myorder).subscribe((resp)=>console.log(resp),(err)=>console.log(err))
console.log(this.order);
console.log("Ejob",endjob)
  }

  

}
