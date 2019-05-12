import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

  alert = 'alert-danger';

  // tslint:disable-next-line:ban-types
  properties: Object = {
    danger: true
  };

  loading = false;

  constructor() { }

  ngOnInit() {
  }

  executeProcess() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2500);
  }

}
