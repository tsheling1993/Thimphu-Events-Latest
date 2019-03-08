import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController,MenuController, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-nightlife',
  templateUrl: './nightlife.page.html',
  styleUrls: ['./nightlife.page.scss'],
})
export class NightlifePage implements OnInit {

  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rPrice : any;
  rDetail : any;
  date : any;
  rData:any[]=[];

  timeoutStatus: any;

  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController,
    public loadingController: LoadingController
  ) 
   { 
    this.presentLoading();
    this.fs.collection('/t_nightlife',ref=>ref.orderBy('date', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.rData.push({
          date :doc.data().date,
          title:doc.data().title,
          time : doc.data().time,
          venue:doc.data().venue,
          price:doc.data().price,
          detail : doc.data().detail,
          url: doc.data().url
        })
        this.rTitle = doc.data().title;
        if(this.rData){
          console.log("up");
          this.loadingController.dismiss();      
        }
      });
      })
      console.log(this.rData);
      this.timeoutStatus = setTimeout(() => {
        console.log("value="+this.rTitle);      
        if(this.rTitle == undefined){
          console.log("No Internet Connection");
          this.loadingController.dismiss();      
          this.navCtl.navigateForward('/internetstatus');
        }      
    }, 7500);
   }
   ionViewWillLeave(){
    console.log("Leave view");
    clearTimeout(this.timeoutStatus);
  }
  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
     // message: 'Hellooo',
      duration: 15000,
      spinner: 'crescent',
      cssClass: 'loaderClass'
    });
    return await loading.present();
  }
}
