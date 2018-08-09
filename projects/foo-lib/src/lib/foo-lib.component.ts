import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-lib-component',
  template: `
    <p>
      foo-lib works!
    </p>
  `,
  styles: []
})
export class FooLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
