import { Component } from '@angular/core';

import { Platform, MenuController, NavController, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { FcmService } from './fcm.service';
import { tap } from 'rxjs/operators';
import { async } from 'q';
declare var FCMPlugin;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu:MenuController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private fcm: FCM,
    private router: Router,
    public toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.subscribeToTopic('notifi');
      this.fcm.getToken().then(token => {
        console.log(token);
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });
    });
    this.fcm.onNotification().subscribe(data => {
      console.log(data);
      if (data.wasTapped) {
        console.log('Received in background');
        this.router.navigate([data.landing_page]);
      } else {
        console.log('Received in foreground');
        this.router.navigate([data.landing_page]);
      }
    });
  }
  Fcm()
  {
    
  }
  async makeToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });
    toast.present();
  }
  goAdminLogin(){
    this.navCtrl.navigateForward('/admin');
    this.menu.toggle('myMenu');
   
  }

  async alertAdminLogin()
  {
    //console.log("in alert share="+vehicleNo,custName,consignment,custMac,driverMac);

    const alert=await this.alertCtrl.create({
      header:'Admin Login',
      inputs:[
        {
          type:'text',
          name:'customer_cont',
          placeholder:'Admin User '
        },
        {
          type:'password',
          name:'customer_cont',
          placeholder:'Password '
        },
      ],
      buttons:[
        {
          text:'Login',
          handler:(data)=>
          {
            this.goAdminLogin();
          }
        }
      ]
    });
    alert.present();
  }

  goContact(){
    this.menu.toggle('myMenu');
   this.navCtrl.navigateForward('/contact');
  }
  goAboutUs(){
    this.menu.toggle('myMenu');
   this.navCtrl.navigateForward('/aboutus');
  }
  goHome(){
    this.menu.toggle('myMenu');
   this.navCtrl.navigateRoot('/home');
  }
}
