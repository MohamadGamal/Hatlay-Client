import { Injectable } from '@angular/core';

import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserSearchService {
  private url ;
  constructor(private http: Http) { }
    setUrl(url:string){
        this.url=url;
    }
    search(term: string): Observable<any[]> {
    return this.http
               .get(this.url+term)
               .map(response => response.json() as any[]);
  }

}
