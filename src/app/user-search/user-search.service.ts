import { Injectable } from '@angular/core';

import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserSearchService {

  constructor(private http: Http) { }

    search(term: string): Observable<any[]> {
    return this.http
               .get(`http://localhost:8000/user/${term}`)
               .map(response => response.json() as any[]);
  }

}
