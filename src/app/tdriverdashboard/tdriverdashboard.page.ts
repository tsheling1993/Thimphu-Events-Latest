import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { ActivatedRoute,NavigationEnd,Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-tdriverdashboard',
  templateUrl: './tdriverdashboard.page.html',
  styleUrls: ['./tdriverdashboard.page.scss'],
})
export class TdriverdashboardPage implements OnInit {

  vehNo: any;
  routeFrom: any="";
  routeTo: any="";
  vehicleno:any;
  from:any;
  type:any;
  detailPH:any;
  wasteType:any="";
  details:any="";
  geoSubscription: Subscription;
  to:any;

  stopButton: boolean = true;

  constructor(
    private firebase: Firebase,
    public afs: AngularFirestore,
    public route: ActivatedRoute,
    public router: Router,
    public alertCtrl: AlertController,
    public geolocation: Geolocation,
    private menu: MenuController,
    public natStor: NativeStorage,
    private navCtl : NavController,
    public backgroundMode: BackgroundMode,
    private platform: Platform,
  ) { 
    this.vehicleno=this.route.snapshot.params['vehno'];
    this.router.events.subscribe((e:any)=>
  {
    if(e instanceof NavigationEnd)
    {
      this.loadData();
    }
  })

  this.platform.ready().then(() => {
    this.backgroundMode.enable();    
  });
  }

  ngOnInit() {
    this.loadData();
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }

  loadData()
  {
    this.afs.collection('t_garbage_trucks').doc(`${this.vehicleno}`).get().subscribe(
      res=>
      {
        this.from=res.data().from;
        this.to=res.data().to;
        this.type=res.data().type;
        this.detailPH=res.data().details;
        console.log("from="+res.data().from+" and "+this.from);
        
        this.routeFrom = res.data().from;    
        this.routeTo = res.data().to;
        this.wasteType = res.data().type;    
        this.details = res.data().details;     
      }

    )
  }

  async openOptions()
  {
    const alert= await this.alertCtrl.create(
      {
        header:'Admin Options',
        message:'Clear Field Details',
        cssClass: 'alert',
        buttons:[
          {
            text:'Cancel',
            role:'cancel',
            handler:()=>{}
          },
          {
            text:'Clear',
            handler:()=>
            {
              this.afs.collection('t_garbage_trucks').doc(`${this.vehicleno}`).update(
                {
                  from:'Select Source',
                  to:'Select Destination',
                  type:'Not Set',
                  details: 'No Details'
                }
              )
            }
          }
        ]
        
      }
    )
    alert.present();
  }

  start()
  {
    if(this.routeFrom==""||this.wasteType=="")
    {
      this.alertGeneral("Empty Field(s)",'Fields "From","To", and "Waste Type" are mandatory.');
    }
    else if(this.details=="")
    {
      this.stopButton = false;

      this.backgroundMode.enable();
      this.backgroundMode.setDefaults({ 
        text:'Your Location Details are tracked'
      });
      this.afs.collection('t_garbage_trucks').doc(`${this.vehicleno}`).update(
        {
          from:this.routeFrom,
          // to:this.routeTo,
          type:this.wasteType,
          details:'No Details'

        }
      ).then(()=>
    {
      this.alertGeneral("Journey Started","Details of this truck's journey are now Online");
    }).catch(()=>
      {
        this.alertGeneral("Error","No Internet Connection")
      });
      this.geoSubscription=this.geolocation.watchPosition().subscribe(data=>
        {
          console.log('running geolocation');
          this.afs.collection('t_garbage_trucks').doc(`${this.vehicleno}`).update(
            {
              latitude:data.coords.latitude,
              longitude:data.coords.longitude
            }
          )
        });
    }
    else{

      this.stopButton = false;
      
      this.backgroundMode.enable();
      this.backgroundMode.setDefaults({ 
        text:'Your Location Details are tracked'
      });
      this.afs.collection('t_garbage_trucks').doc(`${this.vehicleno}`).update(
        {
          from:this.routeFrom,
          // to:this.routeTo,
          type:this.wasteType,
          details:this.details,
        }
      ).then(()=>
      {
        this.alertGeneral("Journey Started","Details of this truck's journey are now online");
      }).catch(()=>
      {
        this.alertGeneral("Error","No Internet Connection");
      });
      this.geoSubscription=this.geolocation.watchPosition().subscribe(data=>
        {
          console.log("running geolocation")
          this.afs.collection('t_garbage_trucks').doc(`${this.vehicleno}`).update(
            {
              latitude:data.coords.latitude,
              longitude:data.coords.longitude
            }
          )
        });  
    }
  }

  stop()
  {
    this.geoSubscription.unsubscribe();
  }

  async alertGeneral(header:any,message:any)
  {
    const alert= await this.alertCtrl.create(
      {
        header:header,
        message:message,
        cssClass:'alert',
        buttons:['Okay']
      }
    )
    alert.present();
  }

  logout(){
    this.natStor.remove('drivertok');
    this.navCtl.navigateForward('/thromdedriver');    
  }
}