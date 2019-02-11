import { Component, OnInit } from '@angular/core';
import { AlertController,MenuController, NavController } from '@ionic/angular';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleMaps, GoogleMap, Environment, Marker, GoogleMapOptions } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-trackgarbagetruck',
  templateUrl: './trackgarbagetruck.page.html',
  styleUrls: ['./trackgarbagetruck.page.scss'],
})
export class TrackgarbagetruckPage implements OnInit {

  map: GoogleMap;

  constructor(private route: ActivatedRoute,
    private alertCtrl:AlertController,
    private menu:MenuController,
    public fs: AngularFirestore,
    private navCtl : NavController,
    ) 
    {
      this.loadGarbageTruck();
      setTimeout(() => {     
        this.loadMap();         
    }, 2000);
    }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }

  async alert(header:any,message:any)
  {
    const alert= await this.alertCtrl.create(
      {
       header:header,
       message:message,
       buttons:['OK'], 
      }
    );
    alert.present();
  }

  lat: number;
  longitude: number;
  routeTo: any;
  routeFrom: any;
  vehNo: any;

  garbageTruckData:any[]=[];
 
  loadGarbageTruck(){
    this.fs.collection('/t_garbage_trucks').doc('BG-1-A1000').get().subscribe(res=>  
      {
        this.garbageTruckData.push({
          lat:res.data().latitude,
          longitude:res.data().longitude,
          routeTo : res.data().to,
          routeFrom : res.data().from,
          vehNo : res.data().vehicleno,
        })
        this.lat = res.data().latitude;
        this.longitude = res.data().longitude,
        this.routeTo = res.data().to,
        this.routeFrom = res.data().from,
        this.vehNo = res.data().vehicleno
      })
      console.log(this.garbageTruckData);
  }

  loadMap(){    
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE':'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs',
      'API_KEY_FOR_BROWSER_DEBUG':'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs'
    });
    
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: this.lat,
           lng: this.longitude
         },
         zoom: 15,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    
    let marker: Marker = this.map.addMarkerSync({
      title: this.routeFrom+" - "+this.routeTo,
      icon: 'blue',
      //animation: 'DROP',
      position: {
        lat: this.lat,
        lng: this.longitude
      }
    });
    marker.showInfoWindow();
  }

  refreshMap(){
    console.log("refresh map");
   this.navCtl.navigateForward('/trackgarbagetruck');
  }
}