import { Injectable } from '@angular/core';
import { HttpClientService } from '../shareable/http-client.service'

import { UserService } from '../shareable/user.service'
import { Subject,Observable} from 'rxjs';

@Injectable()
export class OrdersService {
  private Url = 'http://localhost:8000/order/'
  constructor(private http: HttpClientService) { }

       getorders(id) : Observable<any> {
 

return this.http.get(this.Url+"/user/"+id)
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
         getnotifs(arrf) : Observable<any> {


return this.http.get(this.Url+"/notifs/"+(arrf.toString()).replace(/([^,]+)/g,"\"$1\"").replace(/(.+)/g,"[$1]"))
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
 getorder(id) : Observable<any> {
 

return this.http.get(this.Url+"/"+id)
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
   removeorder(id) : Observable<any> {
 


return this.http.delete(this.Url+"/"+id)
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
   finishorder(id) : Observable<any> {
 

return this.http.put(this.Url+"/"+id+"/status/",{status:"Finished"})
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
    finalizeorder(id) : Observable<any> {
 

return this.http.get(this.Url+"/"+id+"/finalize/")
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
     addorder(order) : Observable<any> {

    return this.http.post(this.Url + "/", order)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));

  }
       addmeal(id,meal) : Observable<any> {
console.log(this.Url +id+"/meal/");
console.log(meal)
    return this.http.post(this.Url +id+"/meal/", meal)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));

  }
  deletemeal(id,mid) : Observable<any> {
console.log(this.Url +id+"/meal/");

    return this.http.delete(this.Url +id+"/meal/"+mid)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));

  }
         adduser(id,user) : Observable<any> {
console.log(this.Url +id+"/user/");
console.log(user)
    return this.http.post(this.Url +id+"/meal/", user)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));

  }

  public addRestaurant(restaurant):Observable<any> {
    return this.http.post('http://localhost:8000/resturant/', restaurant)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));

  }

}
