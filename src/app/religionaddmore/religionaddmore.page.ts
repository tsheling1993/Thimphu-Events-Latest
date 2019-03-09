import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Upload } from '../../models/upload/upload';
import { UploadpicService } from '../../services/uploadpic/uploadpic.service';

@Component({
  selector: 'app-religionaddmore',
  templateUrl: './religionaddmore.page.html',
  styleUrls: ['./religionaddmore.page.scss'],
})
export class ReligionaddmorePage implements OnInit {

  rDate : any;
  rTitle : any;
  rTime : any;
  rVenue : any;
  rDetail : any;
  date : any;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(
    private fs : AngularFirestore,
    private altCtl : AlertController,
    private navCtl : NavController,
    private datePicker: DatePicker,
    private menu: MenuController,
    private uploadServ: UploadpicService,
  ) {}
  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  detectFiles(event:any){
    this.selectedFiles = event.target.files;
  }
    //for uploading the the data
    // insertFs(){
    //   // this.fs.collection('/t_religious').add(
    // this.fs.collection('/t_religious').doc(`${this.rTitle}`).set(
    //     {
    //     date : this.rDate,
    //     title : this.rTitle,
    //     time : this.rTime,
    //     venue : this.rVenue,
    //     detail : this.rDetail 
    //   }
    //   ).then(data=>
    //     {
    //       console.log("reach here with data: "+data);
    //         this.alert("For Information","Insertion successful");
    //         this.navCtl.navigateForward('/religious');
    //     }
    //     )
    // }
  
    insertFs(){
      let basePath:string="/t_religious";
      let file = this.selectedFiles.item(0)
      this.currentUpload = new Upload(file);
      this.fs.collection(`${basePath}`).doc(`${this.rTitle}`).set(
        {
          date : this.rDate,
          title : this.rTitle,
          time : this.rTime,
          venue : this.rVenue,
          detail : this.rDetail
      }
      ).then(data=>
        {
          console.log("reach here with data: "+data);
            this.alert("For Information","Insertion successful");
            this.navCtl.navigateForward('/religious');
          console.log(data);
          this.uploadServ.pushUpload1(this.currentUpload,basePath,this.rTitle);
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
