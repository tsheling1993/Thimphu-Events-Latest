import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController,LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-nightlifeadmin',
  templateUrl: './nightlifeadmin.page.html',
  styleUrls: ['./nightlifeadmin.page.scss'],
})
export class NightlifeadminPage implements OnInit {

  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rPrice : any;
  rDetail : any;
  date : any;
  rData:any[]=[];
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    public loadingController: LoadingController,
    private menu: MenuController) { 
      this.loadData();
    }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  loadData(){
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
        })
        if(this.rData){
          console.log("up");
          this.loadingController.dismiss();      
        }
      });
      })
      console.log(this.rData);
  }
goAddMore(){
  this.navCtl.navigateForward('/nightlifeaddmore');
}

async alert(header:string,message:string)
{
  const alert=await this.altCtl.create({
    header:header,
    message: message,
    cssClass:'ok',
    buttons:['OK']
  });
  alert.present();
}
//for deleting the movie item
goDelete(title:any){
  this.presentAlertConfirm(title);
}

deleteSure(title){
  let basePath:string="/t_nightlife";
  this.fs.collection(`${basePath}`).doc(`${title}`).delete().then(data=>
    {
        this.alert("For Information","Deletion successful");
        this.navCtl.navigateForward('/nightlife');
    }
    )
}
//for updating the item
goEdit(title : any){
  console.log(title);
  this.navCtl.navigateForward('/nightlifeupdate/'+title);
  }

  async presentAlertConfirm(title) {
    const alert = await this.altCtl.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteSure(title)
          }
        }
      ]
    });

    await alert.present();
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
