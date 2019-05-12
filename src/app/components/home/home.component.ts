import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `


  <app-ng-style></app-ng-style>
  <hr>
  <app-css></app-css>
  <p>Hello world from app.component</p>
  <hr>
  <app-classes></app-classes>
  <hr>
  <h2>Directives <small><a href="https://angular.io/guide/attribute-directives">docs</a></small></h2>
  <p>To make our own directives </p>
  <p [appHighlighted]="'orange'">Hello I have a directive</p>
  <textarea rows="2" cols="70" disabled> 
      <p [appHighlighted]="'orange'">Hello I have a directive</p>
  </textarea>
  <hr>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}