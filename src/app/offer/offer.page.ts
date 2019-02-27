import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController,LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  salesTitle : any;
  itemTitle : any;
  itemPrice : any;
  itemContact : any;
  itemDetail : any;
  itemStatus : any;
  uploadDate : any;
  salesDetail : any;
  date : any;
  salesData:any[]=[];
  title:any;
  desc:any;
  sales:any[]=[];
  salesList: Array<any[]>;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    public loadingController: LoadingController,
    private fstorage:AngularFireStorage,
    private menu: MenuController) {
      this.loadData();
     }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  loadData(){
    //for retriving useditem data
    this.presentLoading();
    this.fs.collection('/sales',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.sales.push({
          salestitle:doc.data().salestitle,
          uploaddate :doc.data().uploaddate,
          detail : doc.data().detail,
          name: doc.data().name
        })
        if(this.sales){
          console.log("up");
          this.loadingController.dismiss();      
        }
      });
      })
      console.log(this.sales);
  }

goAddMore(){
  this.navCtl.navigateForward('/offeraddmore');
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
goDelete(salestitle:any, name: any){
 this.presentAlertConfirm(salestitle, name);
}
deleteSure(salestitle: any, name:any){
  let basePath:string="/sales";
  this.fs.collection(`${basePath}`).doc(`${salestitle}`).delete().then(data=>
    {
        this.alert("For Information","Deletion successful");
        this.navCtl.navigateForward('/sales');
    }
    )
    this.fstorage.storage.ref(`${basePath}/${name}`).delete();
}
//for updating the item
goEdit(salestitle : any){
  console.log(salestitle);
  this.navCtl.navigateForward('/offerupdate/'+salestitle);
  }

  async presentAlertConfirm(title: any, name: any) {
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
            this.deleteSure(title, name)
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
