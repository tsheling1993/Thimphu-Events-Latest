import { Component, OnInit } from '@angular/core';
import { AlertController,MenuController, NavController } from '@ionic/angular';
import { ActivatedRoute,Router,NavigationEnd } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleMaps, GoogleMap, Environment, Marker, MarkerOptions, GoogleMapOptions } from '@ionic-native/google-maps/ngx';
import { latLng, Bounds } from 'leaflet';

@Component({
  selector: 'app-trackgarbagetruck',
  templateUrl: './trackgarbagetruck.page.html',
  styleUrls: ['./trackgarbagetruck.page.scss'],
})
export class TrackgarbagetruckPage implements OnInit {

  public map: GoogleMap;
  markerpostition:any[]=[];
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

    intervalStatus: any;
    ngOnInit() {
      this.intervalStatus = setInterval(() => {
        this.refreshMap();
      }, 10000);
    }

    ionViewWillLeave(){
      console.log("Leave view");
      clearInterval(this.intervalStatus);
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
  // routeTo: any;
  routeFrom: any;
  vehNo: any;

  garbageTruckData:any[]=[];

  refreshMap(){
    console.log("refresh map");
    this.map.clear();
    for(let data of this.markers)
    {
      this.garbageTruckData.pop(); 
    }
    this.loadGarbageTruck();
      setTimeout(() => {     
        this.loadMapRefresh();         
    }, 1000);
       //this.loadMapRefresh();         
  }
 
  loadGarbageTruck(){
    this.fs.collection('/t_garbage_trucks').get().subscribe(res=>
      {
        res.forEach((doc:any)=>
      {
        this.garbageTruckData.push({
          position:{lng:doc.data().longitude,lat:doc.data().latitude},
          // title: doc.data().from+' - '+doc.data().to+`\n`+"Type: "+doc.data().type,
          title: doc.data().from+`\n`+"Type: "+doc.data().type,          
          draggable: true,
          vehNo : doc.data().vehicleno,
        })
      });
      })
      console.log("Values "+this.garbageTruckData);
  }

  markers:Marker [];

  loadMap(){    
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE':'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs',
      'API_KEY_FOR_BROWSER_DEBUG':'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs'
    });
    
    let mapOptions: GoogleMapOptions = {
      camera: {
         zoom: 15,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

      var bounds = [];
      // let markers:Marker []= this.garbageTruckData.map((options)=>{
      this.markers = this.garbageTruckData.map((options)=>{  
      bounds.push(options.position);
        return this.map.addMarkerSync(options);
      });
  
      // Set a camera position that includes all markers.
      this.map.moveCamera({
        target: bounds
      });

       //this.markers[this.markers.length - 2].showInfoWindow();
  }

  loadMapRefresh(){    
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE':'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs',
      'API_KEY_FOR_BROWSER_DEBUG':'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs'
    });
    
    let mapOptions: GoogleMapOptions = {
      camera: {
         zoom: 15,
         tilt: 30
       }
    };

      var bounds = [];
      this.markers = this.garbageTruckData.map((options)=>{  
      bounds.push(options.position);
        return this.map.addMarkerSync(options);
      });
  
      this.map.moveCamera({
        target: bounds
      });
     
  }
}