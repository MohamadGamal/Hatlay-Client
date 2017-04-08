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
 getorder(id) : Observable<any> {
 

return this.http.get(this.Url+"/"+id)
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
     addorder(group) : Observable<any> {
 

return this.http.post(this.Url+"/",group)
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }

}
