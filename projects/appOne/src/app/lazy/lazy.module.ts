import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademyLibModule, AcademyLibComponent } from 'academy-lib';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademyLibModule,
    RouterModule.forChild([
      { path: '', component: AcademyLibComponent, pathMatch: 'full' }
    ])
  ]
})
export class LazyModule { }
