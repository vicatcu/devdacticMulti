import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AcademyLibModule } from 'academy-lib';
import { OtherLibModule } from 'other-lib';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademyLibModule,
    OtherLibModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
