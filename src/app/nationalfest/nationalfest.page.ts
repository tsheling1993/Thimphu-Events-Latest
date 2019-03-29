import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-nationalfest',
  templateUrl: './nationalfest.page.html',
  styleUrls: ['./nationalfest.page.scss'],
})
export class NationalfestPage implements OnInit {
  rTitle : any;
  rDate : any;
  rTime : any;
  rVenue : any;
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
  ) { 
    //for getting the data of festival from the firebase
    this.presentLoading();
    //this.fs.collection('/t_festival').get().subscribe(res=>
      this.fs.collection('/t_festival',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.rData.push({
          title:doc.data().title,
          date :doc.data().date,
          time : doc.data().time,
          venue:doc.data().venue,
          detail : doc.data().detail,
          url: doc.data().url
        })
        this.rTitle = doc.data().title;
        if(this.rData){
          console.log("up");
          this.loadingController.dismiss();      
        }
      })
      })
      console.log(this.rData);
      this.timeoutStatus = setTimeout(() => {
        console.log("value="+this.rTitle);      
        if(this.rTitle == undefined){
          console.log("No Internet Connection");
          this.loadingController.dismiss();      
          this.navCtl.navigateForward('/internetstatus');
        }      
    }, 5000);
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
