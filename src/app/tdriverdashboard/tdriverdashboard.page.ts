import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-tdriverdashboard',
  templateUrl: './tdriverdashboard.page.html',
  styleUrls: ['./tdriverdashboard.page.scss'],
})
export class TdriverdashboardPage implements OnInit {

  vehNo: any;
  latitude: number;
  longitude: number;
  routeFrom: any;
  routeTo: any;
  constructor(
    private firebase: Firebase
  ) { }

  ngOnInit() {
  }

}
