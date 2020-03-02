import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'academy-academyLib',
  template: `
    <p>
      academy-lib works! update
    </p>
    <p>
      <lib-other-lib></lib-other-lib>
    </p>
  `,
  styles: []
})
export class AcademyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
