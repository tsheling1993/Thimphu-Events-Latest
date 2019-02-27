import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movieTitle : any;
  movieVenue : any;
  movieTime : any;
  startDate : any;
  endDate : any;
  moviePrice : any;
  movieContact : any;
  movieTailor : any;
  movie:any[]=[];
  movieList: Array<any[]>;
  title:any;
  desc:any;

  timeoutStatus: any;

  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu:MenuController,
    private callNumber: CallNumber,
    public loadingController: LoadingController
  )
  { 
    this.presentLoading();
    this.fs.collection('/movies',ref=>ref.orderBy('createdAt', 'desc')).get().subscribe(res=>
    {
      res.forEach((doc:any)=>
    {
      this.movie.push({
        movietitle:doc.data().movietitle,
        venue:doc.data().venue,
        time : doc.data().time,
        startdate :doc.data().startdate,
        enddate : doc.data().enddate,
        price : doc.data().price,
        contact : doc.data().contact,
        tailor : doc.data().tailor,
        url: doc.data().url
      })
      this.movieTitle = doc.data().movietitle;
      // this.movieList.push(this.movie);
      if(this.movie){
        console.log("up");
        this.loadingController.dismiss();      
      }
    });
    })
    this.timeoutStatus = setTimeout(() => {
      console.log("value="+this.movieTitle);      
      if(this.movieTitle == undefined){
        console.log("No Internet Connection Movie");
        this.loadingController.dismiss();      
        this.navCtrl.navigateForward('/internetstatus');
      }      
  }, 7500);
    console.log(this.movie);
    // if(this.movie){
    //   console.log("down");
    //   this.loadingController.dismiss();      
    // }
  }
  
  ngOnInit() {
  }

  ionViewWillLeave(){
    console.log("Leave view");
    clearTimeout(this.timeoutStatus);
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  tailorLink(tailor: any){
    console.log("tailor: "+tailor);
    const browser = this.iab.create(tailor);
  }

  callMovie(contactNo: any){
    console.log("no: "+contactNo);
    this.callNumber.callNumber(contactNo.toString(), true)
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
