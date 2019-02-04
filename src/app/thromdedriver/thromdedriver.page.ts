import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-thromdedriver',
  templateUrl: './thromdedriver.page.html',
  styleUrls: ['./thromdedriver.page.scss'],
})
export class ThromdedriverPage implements OnInit {

  constructor(
    private navCtl : NavController,
  ) { }

  ngOnInit() {
  }

  login(){
    this.navCtl.navigateForward('/tdriverdashboard');
  }
}
