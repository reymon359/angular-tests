import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
  <h2>css <small><a href="https://angular.io/guide/component-styles">docs</a></small></h2>
  <p>Use it to change the css from an unic component</p>
    <p>
      css works!
    </p>
  `,
  styles: [`
  p{
    color:red;
    font-size:20px;
  }`]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
