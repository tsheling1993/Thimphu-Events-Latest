import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-musicordance',
  templateUrl: './musicordance.page.html',
  styleUrls: ['./musicordance.page.scss'],
})
export class MusicordancePage implements OnInit {
  rTitle : any;
  rVenue : any;
  rTime : any;
  rDate : any;
  rContact : any;
  rLink : any;
  rDetail : any;
  date : any;
  rData:any[]=[];
  eData : any[]=[];
  changeradiovalley: boolean = false;
  changekuzueng: boolean = false;
  changekuzudzo: boolean = false;
  changeyeya: boolean = false;
  changebbseng: boolean = false;
  changebbsdzo: boolean = false;
  showentertainment : boolean =true;
  
  timeoutStatus: any;
  
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu:MenuController,
    public loadingController: LoadingController
  ) { 
    //for retriving the entertainment data from the database
    this.presentLoading();
    this.fs.collection('/t_entertainment',ref=>ref.orderBy('date', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
        {
          this.rData.push({
            tilte : doc.data().tilte,
            venue : doc.data().venue,
            time : doc.data().time,
            date : doc.data().date,
            contact : doc.data().contract,
            detail : doc.data().detail,
            url: doc.data().url
          })
          this.rTitle = doc.data().tilte;
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
  //this part is for the radio programs
  ShowradioVally(){
    this.changeradiovalley = true;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = false;
    this.showentertainment = false;
  }
  showKuzuE(){
    this.changeradiovalley = false;
    this.changekuzueng = true;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = false;
  }
  showKuzuD(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = true;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = false;
  }
  showYeya(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = true;
    this.changebbseng = false;
    this.changebbsdzo = false;
  }
  showBbsE(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = true;
    this.changebbsdzo = false;
  }
  showBbsD(){
    this.changeradiovalley = false;
    this.changekuzueng = false;
    this.changekuzudzo = false;
    this.changeyeya = false;
    this.changebbseng = false;
    this.changebbsdzo = true;
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
