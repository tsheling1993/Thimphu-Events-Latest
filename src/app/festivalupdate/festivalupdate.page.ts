import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-festivalupdate',
  templateUrl: './festivalupdate.page.html',
  styleUrls: ['./festivalupdate.page.scss'],
})
export class FestivalupdatePage implements OnInit {

  rTitle : any;
  rDate : any;
  rTime : any;
  rVenue : any;
  rDetail : any;
  date : any;
  rData : any[] = [];
  title: string=this.route.snapshot.params['title'];
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController,
    public route: ActivatedRoute
  ) { 
    this.loadData();
  }

  ngOnInit() {
    //for getting the data of festival from the firebase
    // this.fs.collection('/t_festival').get().subscribe(res=>
    //   {
    //     res.forEach((doc:any)=>
    //   {
    //     this.rData.push({
    //       title:doc.data().title,
    //       date :doc.data().date,
    //       time : doc.data().time,
    //       venue:doc.data().venue,
    //       detail : doc.data().detail,
    //     })
    //     this.rTitle = doc.data().title;
    //     this.rDate = doc.data().date;
    //     this.rTime = doc.data().time;
    //     this.rVenue = doc.data().venue;
    //     this.rDetail = doc.data().detail;
    //   })
    //   })
    //   console.log(this.rData);
  }
  loadData(){
    this.fs.collection('/t_festival').doc(`${this.title}`).get().subscribe(res=>
      //this.fs.collection('/movies').doc('ddd').get().subscribe(res=>
  
        {
        //   res.forEach((doc:any)=>
       
        // {
          this.rData.push({
            title:res.data().title,
           date :res.data().date,
           time : res.data().time,
           venue:res.data().venue,
           detail : res.data().detail,
         })
         this.rTitle = res.data().title;
         this.rDate = res.data().date;
         this.rTime = res.data().time;
         this.rVenue = res.data().venue;
         this.rDetail = res.data().detail;
     })
  }

  //for uploading the the data
  // insertFs(){
  //   // this.fs.collection('/t_festival').add(
  //   this.fs.collection('/t_festival').doc(`${this.rTitle}`).set(
  //     {
  //     title : this.rTitle,
  //     date : this.rDate,
  //     time : this.rTime,
  //     venue : this.rVenue,
  //     detail : this.rDetail 
  //   }
  //   ).then(data=>
  //     {
  //       console.log("reach here with data: "+data);
  //         this.alert("For Information","Data Insertion successful");
  //         this.navCtl.navigateForward('/nationalfest');
  //     }
  //     )
  // }

  insertFs(){
    let basePath:string="/t_festival";
    //let file = this.selectedFiles.item(0)
   // this.currentUpload = new Upload(file);
    this.fs.collection(`${basePath}`).doc(`${this.rTitle}`).update(
      {
        title : this.rTitle,
        date : this.rDate,
        time : this.rTime,
        venue : this.rVenue,
        detail : this.rDetail 
      }
    ).then(data=>
      {
        console.log("reach here with data: "+data);
          this.alert("For Information","update successful");
          this.navCtl.navigateForward('/nationalfest');
        console.log(data);
        //this.uploadServ.pushUpload1(this.currentUpload,basePath,this.movieTitle);
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
      // androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      androidTheme : this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date =>{
        let dateArray=date.toString().split(' ');
        this.rDate=dateArray[0]+" "+dateArray[1]+" "+dateArray[2]+" "+dateArray[3]
        err => console.log('Error occurred while getting date: ', err)
      }
    
      //console.log('Got date: ', date),
      
    );
  }

  openMenu(){
    this.menu.toggle('myMenu');
  }

}
