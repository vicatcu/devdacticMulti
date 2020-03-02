import { NgModule } from '@angular/core';
import { AcademyLibComponent } from './academy-lib.component';
import { OtherLibModule } from 'other-lib';

@NgModule({
  declarations: [AcademyLibComponent],
  imports: [
    OtherLibModule
  ],
  exports: [AcademyLibComponent]
})
export class AcademyLibModule { }
