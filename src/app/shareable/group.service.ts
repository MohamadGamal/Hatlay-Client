import { Injectable } from '@angular/core';
import { HttpClientService } from '../shareable/http-client.service'
import { Subject, Observable } from 'rxjs';

import { UserService } from './user.service'
@Injectable()
export class GroupService {
  private Url = 'http://localhost:8000/group/'
  constructor(private http: HttpClientService, private userservice: UserService) {
  }
  public addgroup(group): Observable<any> {

    console.log(this.Url + "/");
    return this.http.post(this.Url + "/", group)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));


  }
  public getgroup(groupid): Observable<any> {

    console.log(this.Url + "/");
    return this.http.get(this.Url + "/" + groupid)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));


  }

  public addusergroup(groupid, userid): Observable<any> {
    this.userservice.addgrouptouser(userid, groupid);
    return this.http.post(this.Url + "/" + groupid + "/" + "user/", { id: userid })
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));


  }
  public removeusergroup(groupid, userid): Observable<any> {
    this.userservice.removegroupfromuser(userid, groupid);
    return this.http.delete(this.Url + "/" + groupid + "/" + "user/" + userid)
      .map(response => response.json() ? response.json() : false)
      .catch(response => Observable.throw('errrror'));


  }


}
