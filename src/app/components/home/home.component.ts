import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="row">
  <div class="col-md-6">
  <app-classes></app-classes>
  <hr>
  <app-ng-switch></app-ng-switch>
  </div>
  <div class="col-md-6">
  <app-css></app-css>
  <hr>
  <app-ng-style></app-ng-style>
  <hr>
  <h2>Directives <small><a href="https://angular.io/guide/attribute-directives">docs</a></small></h2>
  <p>To make our own directives </p>
  <p [appHighlighted]="'orange'">Hello I have a directive</p>
  <textarea rows="2" cols="70" disabled>
      <p [appHighlighted]="'orange'">Hello I have a directive</p>
  </textarea>
  <hr>
  <h2>Lifecycle Hooks <small><a href="https://angular.io/guide/lifecycle-hooks">docs</a></small></h2>
  <p>Open console and watch when do they get activated </p>
  </div>
</div>


  
 


 
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
