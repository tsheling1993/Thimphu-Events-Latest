import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AlertController, NavController, List, MenuController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {
  matchTitle : any;
  matchVenue : any;
  matchTime : any;
  matchDate : any;
  matchTeam1 : any;
  matchTeam2 : any;
  matchScore : any;
  date : any;
  matchData:any[]=[];
  title:any;
  desc:any;
  match:any[]=[];
  matchList: Array<any[]>;

  timeoutStatus: any;
 
  constructor
  (
    private fs: AngularFirestore,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private menu:MenuController
  ) 
  {
    this.fs.collection('/t_football_match',ref=>ref.orderBy('matchdate', 'desc')).get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.match.push({
          matchtitle : doc.data().matchtitle,
          matchteam1 : doc.data().matchteam1,
          matchteam2 : doc.data().matchteam2,
          matchsore : doc.data().matchsore,
          matchvenue : doc.data().matchvenue,
          matchtime : doc.data().matchtime,
          matchdate : doc.data().matchdate
          
        })
        this.matchTitle = doc.data().matchtitle;
        // this.movieList.push(this.movie);
       // console.log("match data:"+this.match);
      });
      })
      this.timeoutStatus = setTimeout(() => {
        console.log("value="+this.matchTitle);      
        if(this.matchTitle == undefined){
          console.log("No Internet Connection");
          //this.loadingController.dismiss();      
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

  showChangFootball(){
    this.navCtrl.navigateForward('/football-changlimithang');
  }

  showChangFutsal(){
    this.navCtrl.navigateForward('/futsal-changlimithang');
  }
  
  showYDF(){
    this.navCtrl.navigateForward('/football-ydf');
  }

  showSerbithang(){
    this.navCtrl.navigateForward('/football-serbithang');    
  }
  showChangjijiFull(){
    this.navCtrl.navigateForward('/football-changjiji');    
  }
  showChangjijiFutsal(){
    this.navCtrl.navigateForward('/futsal-changjiji');    
  }
  showBabesa(){
    this.navCtrl.navigateForward('/football-babesa');    
  }
}

