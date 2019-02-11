import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-thromdedriver',
  templateUrl: './thromdedriver.page.html',
  styleUrls: ['./thromdedriver.page.scss'],
})
export class ThromdedriverPage implements OnInit {
  vehNo: any;
  password:any;
  driver: any[]=[];
  constructor(
    private navCtl : NavController,
    private afs: AngularFirestore,
    private alertCtrl: AlertController,
    // public natStor: NativeStorage
  ) { }

  ngOnInit() {
  }

  login(){
    this.afs.collection('t_garbage_trucks').doc(`${this.vehNo}`).get().subscribe(
      res=>
      {

          if(res.data().password==this.password)
          {
            this.driver.push({
              vehileno:res.data().vehicleno,
              password:res.data().password
            });
            // this.natStor.setItem('drivertok',{vehno:this.vehNo,password:this.password});
            this.navCtl.navigateForward('/tdriverdashboard/'+this.vehNo);
          }
          else
          {
            this.alertGeneral("Error",`Password is incorrect.<br>Please try again`);
          }
      },
      error=>
      {
          this.alertGeneral("Error",`No driver account associated with given vehicle number <b>OR</b> No internet Connection.`);
      }
    )
    
  }

  async alertGeneral(header:any,message:any)
  {
    const alert= await this.alertCtrl.create(
      {
        header:header,
        message:message,
        cssClass:'alert',
        buttons:['Okay']
      }
    )
    alert.present();
  }

}