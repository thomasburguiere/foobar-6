import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-foo-lib',
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
