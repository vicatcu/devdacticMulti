import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'academy-academyLib',
  template: `
    <ion-icon name="home" color="red"></ion-icon>
  `,
  styles: []
})
export class AcademyLibComponent implements OnInit {

  constructor() {

    console.log('HELLO ACADEMY LIB COMPONENT');

  }

  ngOnInit() {
  }

}
