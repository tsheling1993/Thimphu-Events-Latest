import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TdriverdashboardPage } from './tdriverdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: TdriverdashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TdriverdashboardPage]
})
export class TdriverdashboardPageModule {}
