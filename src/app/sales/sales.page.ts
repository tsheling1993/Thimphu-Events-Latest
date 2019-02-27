import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { url } from 'inspector';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
  
})
export class SalesPage implements OnInit {
  salesTitle : any;
  uploadDate : any;
  salesDetail : any;
  sales:any[]=[];
  items:any[]=[];
  salesList: Array<any[]>;
  title:any;
  desc:any;
  timeoutStatus: any;
  slideOpts = {
    effect: 'fade',
  };
  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu: MenuController,
    private photoViewer: PhotoViewer,
    public loadingController: LoadingController
  )
  { 
    this.presentLoading();
    this.fs.collection('/sales',ref=>ref.orderBy('createdAt','desc')).get().subscribe(res=>
    {
      res.forEach((doc:any)=>
    {
      this.sales.push({
        salestitle:doc.data().salestitle,
        uploaddate :doc.data().uploaddate,
        detail : doc.data().detail,
        url: doc.data().url
      })
      this.salesTitle = doc.data().salestitle;
      // this.movieList.push(this.movie);
      if(this.sales){
        console.log("up");
        this.loadingController.dismiss();      
      }
    });
    })
    console.log(this.sales);
    //for retriving useditem data
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
          url1: doc.data().url1,
          url2: doc.data().url2,
          url3: doc.data().url3,
        })
        // this.movieList.push(this.movie);
      });
      })
      console.log(this.items);
      this.timeoutStatus = setTimeout(() => {
        console.log("value="+this.salesTitle);      
        if(this.salesTitle == undefined){
          console.log("No Internet Connection");
          this.loadingController.dismiss();      
          this.navCtrl.navigateForward('/internetstatus');
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
  viewImg1(url1: any){
    ///this.photoViewer.show('url1');
    this.photoViewer.show(url1, '', {share: true});
  }

  viewImg2(url2 : any){
    this.photoViewer.show(url2, '', {share: true});
  }

  viewImg3(url3 : any){
    this.photoViewer.show(url3, '', {share: true});
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

