import { Component, OnInit ,Output ,EventEmitter,Input } from '@angular/core';

import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {UserSearchService}  from './user-search.service'

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers:[UserSearchService]
})
export class UserSearchComponent implements OnInit {
  @Output() selectedObject = new EventEmitter();
  @Input () url ;

  objects:Observable<any[]>;
  private searchTerms = new Subject<string>();
  constructor(private router: Router, private userSearchService : UserSearchService) { 

  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    console.log(this.url);
    this.userSearchService.setUrl(this.url);
    
    this.objects = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.userSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });
      
  }
  // gotoDetail(user: User): void {
  //   let link = ['/detail', user.name];
  //   this.router.navigate(link);
  // }    
  selectObject(user){
    this.selectedObject.emit(user);
    this.searchTerms.next("");
  }
  follow(){

  }

}
