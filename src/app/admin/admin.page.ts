import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';
import { Upload } from '../../models/upload/upload';
import {Router,NavigationEnd} from '@angular/router';
import * as _ from 'lodash';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  movieTitle : any;
  movieVenue : any;
  movieTime : any;
  startDate : any;
  endDate : any;
  moviePrice : any;
  movieContact : any;
  movieTailor : any;
  date : any;
  movieData:any[]=[];
  title:any;
  desc:any;
  selectedFiles: FileList;
  currentUpload: Upload;
  showmovies : boolean = false;
  thromLogStat:boolean=false;
  vehNo:any;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private uploadServ: UploadpicService,
    private menu: MenuController,
    public natStor: NativeStorage,
    public router: Router
  )
  {
    //for retriving the data
    // this.fs.collection('/movies').get().subscribe(res=>
    //   {
    //     res.forEach((doc : any)=>
    //     {
    //       this.movieData.push({
    //         movietitle : doc.data().movietitle,
    //         venue : doc.data().venue
    //       })
    //     });
    //   })
    //   console.log(this.movieData);
    this.router.events.subscribe((e:any)=>
  {
    if(e instanceof NavigationEnd)
    {
      this.natStor.getItem('drivertok').then(
        data=>
        {
          if(data)
          {
            this.thromLogStat=true;
            this.vehNo=data.vehno;
          }
  
        }
      )
    }
  })
  }

  detectFiles(event:any){
    this.selectedFiles = event.target.files;
  }
  ngOnInit() {
  }
  // uploadSingle() {
  //   let file = this.selectedFiles.item(0)
  //   this.currentUpload = new Upload(file);
  //   this.uploadServ.pushUpload(this.currentUpload)
  // }

  // uploadMulti() {
  //   let files = this.selectedFiles
  //   let filesIndex = _.range(files.length)
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.uploadServ.pushUpload(this.currentUpload)}
  //   )
  // }
  //for uploading the the data
  insertFs(){
    let basePath:string="/movies";
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.fs.collection(`${basePath}`).doc(`${this.movieTitle}`).set(
      {
      movietitle : this.movieTitle,
      venue : this.movieVenue,
      time : this.movieTime,
      startdate : this.startDate, 
      enddate : this.endDate,
      price : this.moviePrice,
      contact : this.movieContact,
      tailor : this.movieTailor
    }
    ).then(data=>
      {
        console.log("reach here with data: "+data);
          this.alert("For Information","Insertion successful");
          this.navCtl.navigateForward('/movies');
        console.log(data);
        this.uploadServ.pushUpload1(this.currentUpload,basePath,this.movieTitle);
      }
      )
      
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


  pickDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date =>{
        let dateArray=date.toString().split(' ');
        this.startDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
        err => console.log('Error occurred while getting date: ', err)
      }
    
      //console.log('Got date: ', date),
      
      
    );
  }
  pickEndDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => 
      {
        let dateArray=date.toString().split(' ');
        this.endDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
        err => console.log('Error occurred while getting date: ', err)
      }
      
    );
  }

  movies(){
    this.navCtl.navigateForward('/movieadmin');
  }
  football(){
    this.showmovies = false;
  }
  nightlife(){
    this.showmovies = false;
    this.navCtl.navigateForward('/nightlifeadmin');
  }
  music(){
    this.navCtl.navigateForward('/entertainmentAdmin');
    this.showmovies = false;
  }
  religion(){
    this.navCtl.navigateForward('/religionAdmin');
  }

  goFootballAdmin(){
    this.navCtl.navigateForward('/footballAdmin');
  }
  nationalfest(){
    this.showmovies = false;
    this.navCtl.navigateForward('/festivalAdmin');
  }
  specialSale(){
    this.showmovies = false;
    this.navCtl.navigateForward('/salesadmin');
  }
  thromde(){
    this.showmovies = false;
    
    if(this.thromLogStat==true)
    {
      this.navCtl.navigateForward('tdriverdashboard/'+this.vehNo);
    }
    else{
     this.navCtl.navigateForward('/thromdedriver');  
    }  
  }
  others(){
    this.showmovies = false;
   
    this.navCtl.navigateForward('/othersupdate');
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }
  goRadio(){
    this.navCtl.navigateForward('/radioadmin');
  }  
}