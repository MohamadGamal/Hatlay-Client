import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-singlegroup',
  template: `
    <p>
      singlegroup Works!
      {{mgroup}}
      {{sv}}
      HEY
    </p>
  `,
  styles: []
})
export class SinglegroupComponent implements OnInit {

  @Input('group')  mgroup="kek";
  private sv="FDDFD";
  constructor() { }

  ngOnInit() {

  }

}
