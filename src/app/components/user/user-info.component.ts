import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  template: `
    <p>
      user-info works!
    </p>
  `,
  styles: []
})
export class UserInfoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(params => {
      console.log('Info user father route params', params);
    });
  }

  ngOnInit() {
  }

}
