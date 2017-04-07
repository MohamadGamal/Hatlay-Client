import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  private  URL ="http://localhost:8000/user/";
  private toggleRestaur= false;
  constructor() { }

  ngOnInit() {
  }



  addSearchResult(resturent){
      console.log(resturent);
  }

}
