import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <h2>NgStyle <small><a href="https://angular.io/api/common/NgStyle">docs</a></small></h2>
    <p [ngStyle]="{">
      Hello world... this is a tag
    </p>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
