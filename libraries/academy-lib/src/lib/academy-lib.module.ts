import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademyLibComponent } from './academy-lib.component';

const routes: Routes = [
  {
    path: '',
    component: AcademyLibComponent
  }
];

@NgModule({
  declarations: [AcademyLibComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AcademyLibModule { }
