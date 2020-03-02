import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AcademyLibComponent } from './academy-lib.component';

@NgModule({
  declarations: [AcademyLibComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: []
})
export class AcademyLibModule { }
