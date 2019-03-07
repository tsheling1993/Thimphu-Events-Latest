import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FootballSerbithangPage } from './football-serbithang.page';

const routes: Routes = [
  {
    path: '',
    component: FootballSerbithangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FootballSerbithangPage]
})
export class FootballSerbithangPageModule {}
