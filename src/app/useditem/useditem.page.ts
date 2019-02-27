import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import * as _ from 'lodash';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

@Component({
  selector: 'app-useditem',
  templateUrl: './useditem.page.html',
  styleUrls: ['./useditem.page.scss'],
})
export class UseditemPage implements OnInit {
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
  items:any[]=[];
  salesList: Array<any[]>;
  constructor(private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private fstorage:AngularFireStorage,
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
    //for retriving useditem data
    this.presentLoading();
    this.fs.collection('/useditems',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.items.push({
          itemtitle:doc.data().itemtitle,
          uploaddate :doc.data().uploaddate,
          itemprice : doc.data().itemprice,
          itemcontact : doc.data().itemcontact,
          detail : doc.data().detail,
          itemstatus : doc.data().itemstatus,
          name1: doc.data().name1,
          name2: doc.data().name2,
          name3: doc.data().name3,
        })
        if(this.items){
          console.log("up");
          this.loadingController.dismiss();      
        }
      });
      })
      console.log(this.items);
  }
goAddMore(){
  this.navCtl.navigateForward('/useditemaddmore');
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
goDelete(itemtitle:any, name1:any, name2:any, name3:any){
 this.presentAlertConfirm(itemtitle, name1, name2, name3);
}

deleteSure(itemtitle, name1, name2, name3){
  let basePath:string="/useditems";
  this.fs.collection(`${basePath}`).doc(`${itemtitle}`).delete().then(data=>
    {
        this.alert("For Information","Deletion successful");
        this.navCtl.navigateForward('/sales');
    }
    )
    this.fstorage.storage.ref(`${basePath}/${name1}`).delete();
    this.fstorage.storage.ref(`${basePath}/${name2}`).delete();
    this.fstorage.storage.ref(`${basePath}/${name3}`).delete();
}
//for updating the item
goEdit(itemtitle : any){
  console.log(itemtitle);
  this.navCtl.navigateForward('/useditemupdate/'+itemtitle);
  }

  async presentAlertConfirm(title, name1, name2, name3) {
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
            this.deleteSure(title, name1, name2, name3)
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
