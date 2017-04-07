import { Injectable } from '@angular/core';
import { HttpClientService } from '../shareable/http-client.service'
import { Subject,Observable} from 'rxjs';
@Injectable()
export class OrdersService {
 private Url = 'http://localhost:8000/order/'
  constructor(private http: HttpClientService) { }
      public getorder(id) : Observable<any> {
 

return this.http.get(this.Url+"/")
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }
    public addorder(group) : Observable<any> {
 

return this.http.post(this.Url+"/",group)
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }

}
