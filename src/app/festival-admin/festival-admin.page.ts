import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController, LoadingController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-festival-admin',
  templateUrl: './festival-admin.page.html',
  styleUrls: ['./festival-admin.page.scss'],
})
export class FestivalAdminPage implements OnInit {
  rTitle : any;
  rDate : any;
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
    private menu: MenuController,
    public loadingController: LoadingController,
  ) { 
      this.loadData();
  }

  ngOnInit() {
    //for getting the data of festival from the firebase
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  loadData(){
    this.presentLoading();
    this.fs.collection('/t_festival').get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.rData.push({
          title:doc.data().title,
          date :doc.data().date,
          time : doc.data().time,
          venue:doc.data().venue,
          detail : doc.data().detail,
        })
        if(this.rData){
          console.log("up");
          this.loadingController.dismiss();      
        }
      })
      })
      console.log(this.rData);
  }

  goAddMore(){
    this.navCtl.navigateForward('/festivaladdmore');
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
    let basePath:string="/t_festival";
    this.fs.collection(`${basePath}`).doc(`${title}`).delete().then(data=>
      {
          this.alert("For Information","Deletion successful");
          this.navCtl.navigateForward('/nationalfest');
      }
      )
  }
  //for updating the item
  goEdit(title : any){
    console.log(title);
    this.navCtl.navigateForward('/festivalupdate/'+title);
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
