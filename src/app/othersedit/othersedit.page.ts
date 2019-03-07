import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-othersedit',
  templateUrl: './othersedit.page.html',
  styleUrls: ['./othersedit.page.scss'],
})
export class OtherseditPage implements OnInit {

  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rDetail : any;
  date : any;

  rData:any[]=[];
  
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController
  ){}

  ngOnInit() {
    //for retriving the entertainment data from the database
    this.fs.collection('/t_other',ref=>ref.orderBy('date', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
        {
          this.rData.push({
            date : doc.data().date,
            title : doc.data().title,
            time : doc.data().time,
            venue : doc.data().venue,
            detail : doc.data().detail,
          })
          this.rDate = doc.data().date;
          this.rTitle = doc.data().title;
          this.rTime = doc.data().time;
          this.rVenue = doc.data().venue;
          this.rDetail = doc.data().detail;
        })
      })
      console.log(this.rData);
  }

  //this is the function for uploading data for Entertainment
  insertFs(){
    // this.fs.collection('/t_other').add(
    this.fs.collection('/t_other').doc(`${this.rTitle}`).set(
      {
        date : this.rDate,
        title : this.rTitle,
        time : this.rTime,
        venue : this.rVenue,
        detail : this.rDetail
      }
    ).then(data=>
      {
        console.log("reach here with entertainment data: "+data);
        this.alert("For Information","Insertion of the data was successful. press ok to exit...")
        this.navCtl.navigateForward('/others');
      })
  }

  //for the alert
  async alert(header : string, message : string)
  {
    const alert = await this.altCtl.create({
      header : header,
      message : message,
      cssClass : 'ok',
      buttons : ['OK']
    });
    alert.present();
  }

  //for picking the date from datepicker
  // pickDate(){
  //   this.datePicker.show({
  //     date : new Date(),
  //     mode : 'date',
  //     androidTheme : this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
  //   }).then(date=>
  //     this.rDate = date, 
  //     err => console.log('error occur while getting the date', err)
  //     );
  //   }

  pickDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      //androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      androidTheme : this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        let dateArray=date.toString().split(' ');
        this.rDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
        err => console.log('Error occurred while getting date: ', err)
      }
    );
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

}
