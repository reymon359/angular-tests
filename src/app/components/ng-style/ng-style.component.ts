import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <h2>NgStyle <small><a href="https://angular.io/api/common/NgStyle">docs</a></small></h2>
  <p>Use it to change the style attribute from an element</p>

    <p [style.fontSize.px]="size">
      Hello world... this is a tag
    </p>

    <button class="btn btn-primary mr-2" (click)="size = size + 5">
    <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="size = size - 5">
    <i class="fas fa-minus"></i>
    </button><br><br>
    <textarea  rows="10" cols="70" disabled>    size = 10;
    <p [style.fontSize.px]="size">
      Hello world... this is a tag
    </p>
    <button class="btn btn-primary mr-2" (click)="size = size + 5">
      <i class="fas fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="size = size - 5">
      <i class="fas fa-minus"></i>
    </button> </textarea>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size = 10;


  constructor() { }

  ngOnInit() {
  }

}
