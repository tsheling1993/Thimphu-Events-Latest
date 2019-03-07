import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-internetstatus',
  templateUrl: './internetstatus.page.html',
  styleUrls: ['./internetstatus.page.scss'],
})
export class InternetstatusPage implements OnInit {
  
  constructor(  private menu:MenuController,) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
}
