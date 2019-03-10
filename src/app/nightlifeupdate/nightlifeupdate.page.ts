import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-nightlifeupdate',
  templateUrl: './nightlifeupdate.page.html',
  styleUrls: ['./nightlifeupdate.page.scss'],
})
export class NightlifeupdatePage implements OnInit {

  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rPrice : any;
  rDetail : any;
  date : any;
  rData:any[]=[];

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
  }

  loadData(){
    // this.fs.collection('/t_nightlife',ref=>ref.orderBy('date', 'desc')).get().subscribe(res=>
    //   {
    //     res.forEach((doc:any)=>
    //   {
    //     this.rData.push({
    //       date :doc.data().date,
    //       title:doc.data().title,
    //       time : doc.data().time,
    //       venue:doc.data().venue,
    //       price:doc.data().price,
    //       detail : doc.data().detail,
    //     })
    //     this.rDate = doc.data().date;
    //     this.rTitle = doc.data().title;
    //     this.rTime = doc.data().time;
    //     this.rVenue = doc.data().venue;
    //     this.rPrice = doc.data().price;
    //     this.rDetail = doc.data().detail;
    //   });
    //   })
    //   console.log(this.rData);
    this.fs.collection('/t_nightlife').doc(`${this.title}`).get().subscribe(res=>
      //this.fs.collection('/movies').doc('ddd').get().subscribe(res=>
  
        {
        //   res.forEach((doc:any)=>
       
        // {
          this.rData.push({
            date :res.data().date,
            title:res.data().title,
            time : res.data().time,
            venue:res.data().venue,
            price:res.data().price,
            detail : res.data().detail,
          })
            this.rDate = res.data().date;
            this.rTitle = res.data().title;
            this.rTime = res.data().time;
            this.rVenue = res.data().venue;
            this.rPrice = res.data().price;
            this.rDetail = res.data().detail; 
        })
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
    //for uploading the the data
    // insertFs(){
    //   // this.fs.collection('/t_nightlife').add(
    // this.fs.collection('/t_nightlife').doc(`${this.rTitle}`).set(
    //     {
    //     date : this.rDate,
    //     title : this.rTitle,
    //     time : this.rTime,
    //     venue : this.rVenue,
    //     price : this.rPrice,
    //     detail : this.rDetail 
    //   }
    //   ).then(data=>
    //     {
    //       console.log("reach here with data: "+data);
    //         this.alert("For Information","Insertion successful");
    //         this.navCtl.navigateForward('/nightlife');
    //     }
    //     )
    // }

    insertFs(){
      let basePath:string="/t_nightlife";
      //let file = this.selectedFiles.item(0)
     // this.currentUpload = new Upload(file);
      this.fs.collection(`${basePath}`).doc(`${this.rTitle}`).update(
        {
          date : this.rDate,
          title : this.rTitle,
          time : this.rTime,
          venue : this.rVenue,
          price : this.rPrice,
          detail : this.rDetail 
      }
      ).then(data=>
        {
          console.log("reach here with data: "+data);
            this.alert("For Information","update successful");
            this.navCtl.navigateForward('/nightlife');
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
      );
    }
}
