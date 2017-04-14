import { Injectable } from '@angular/core';
import { HttpClientService } from '../shareable/http-client.service'
import { Subject,Observable} from 'rxjs';
@Injectable()
export class GroupService {
  private Url = 'https://hatlay.herokuapp.com/group/'
  constructor(private http: HttpClientService){
  }
  public addgroup(group) : Observable<any> {
 
console.log(this.Url+"/");
return this.http.post(this.Url+"/",group)
.map(response => response.json()?response.json():false )
.catch(response=> Observable.throw('errrror'));


  }

}
