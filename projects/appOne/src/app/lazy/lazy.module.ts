import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcademyLibModule, AcademyLibComponent } from 'academy-lib';

@NgModule({
  imports: [
    AcademyLibModule,
    RouterModule.forChild([
      { path: '', component: AcademyLibComponent, pathMatch: 'full' }
    ])
  ]
})
export class LazyModule { }