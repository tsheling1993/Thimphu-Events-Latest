import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { FCM } from '@ionic-native/fcm/ngx';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    public platform: Platform,
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    public fcm: FCM
    ) { }
  async getToken() {

    let token;
  
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    } 
  
    if (this.platform.is('ios')) {
      token = await this.firebaseNative.getToken();
      await this.firebaseNative.grantPermission();
    } 
    
    return this.saveTokenToFirestore(token)
  }

  private saveTokenToFirestore(token) {
    if (!token) return;

  const devicesRef = this.afs.collection('devices')

  const docData = { 
    token,
    userId: 'testUser',
  }

  return devicesRef.doc(token).set(docData)
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.fcm.onNotification().subscribe(data=>
      {
        console.log(data);
      })
  }
  
}
