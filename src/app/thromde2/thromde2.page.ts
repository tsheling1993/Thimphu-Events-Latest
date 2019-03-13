import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-thromde2',
  templateUrl: './thromde2.page.html',
  styleUrls: ['./thromde2.page.scss'],
})
export class Thromde2Page implements OnInit {

  showCitybusSchedule_var: boolean = true;
  showCitybusTracker_var: boolean = false;

  showGarbageTruck_var: boolean = false;
  showCitybus_var: boolean = true;

  citybusSelectColor: string = "tertiary";
  garbageSelectColor: string = "medium";

  showGarbageTracker_var: boolean = false;
  showGarbageSchedule_var: boolean = true;

  terminalButton: boolean = true;
  destinationButton: boolean = true;

  monSatChanglam_var: boolean = true;
  monSatChubachu_var: boolean = false;
  sunChanglam_var: boolean = false;
  sunChubachu_var: boolean = false;

  submitButton: boolean = true;
  showTimeStatus: boolean = false;

  timeCitybus: any;

  citybusScheduleData:any[]=[];
  timeoutStatus: any;

  constructor(
    private fs: AngularFirestore,
    private navCtl : NavController,
    private menu: MenuController,
    public loadingController: LoadingController
  ) 
  { 
    this.loadCitybusSchedule();
    this.loadGarbageSchedule();
  }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle('myMenu');
  }
  
  customPopoverOptions: any = {
    // header: 'Hair Color',
    // subHeader: 'Select your hair color',
    // message: 'Only select your dominant hair color'
    cssClass: 'destination',
  };

  //Below codes are all for show and hide features

  showGarbageTruck(){
    this.showGarbageTruck_var = true;
    this.showCitybus_var  = false;
    this.garbageSelectColor = "tertiary";
    this.citybusSelectColor = "medium";
  }

  showCitybus(){
    this.showCitybus_var = true;
    this.showGarbageTruck_var = false;
    this.citybusSelectColor = "tertiary";
    this.garbageSelectColor = "medium";
  }

  showGarbageTracker(){
    this.showGarbageTracker_var = true;
    this.showGarbageSchedule_var = false;
  }

  changedDaySelectedCity(){
    this.terminalButton = false;
    this.changedTerminalSelectedCity();
  }

  terminalCity: any;
  daySelectedCity: any;
  destinationCity: any;
  

  changedTerminalSelectedCity(){
    if(this.terminalCity != null){
      this.destinationButton = false;
    }
    console.log("terminal"+this.terminalCity+" day "+this.daySelectedCity);
    if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity"){
      this.monSatChanglam_var = true;
      this.monSatChubachu_var = false;
      this.sunChanglam_var = false;
      this.sunChubachu_var = false;
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity"){
      this.monSatChanglam_var = false;
      this.monSatChubachu_var = true;
      this.sunChanglam_var = false;
      this.sunChubachu_var = false;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity"){
      this.monSatChanglam_var = false;
      this.monSatChubachu_var = false;
      this.sunChanglam_var = true;
      this.sunChubachu_var = false;
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity"){
      this.monSatChanglam_var = false;
      this.monSatChubachu_var = false;
      this.sunChanglam_var = false;
      this.sunChubachu_var = true;
    }
  }
  changedDestinationSelectedCity(){
    if(this.terminalCity != null && this.daySelectedCity != null && this.destinationCity != null){
      this.submitButton = false;
    }
  }

  findTiming(){
    this.showTimeStatus = true;
  
    if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "dechencholing"){
      this.timeCitybus = this.mon_chang_dechencholing;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "babesaViaLungtenphu"){
      this.timeCitybus = this.mon_chang_babesaViaLungtenphu;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhababesaEW"){
      this.timeCitybus = this.mon_chang_olakBabesaEW;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhaViaMC"){
      this.timeCitybus = this.mon_chang_olakViaMC;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "changjijiViaMC"){
      this.timeCitybus = this.mon_chang_changjiViaMC;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "jungshinaPamtsho"){
      this.timeCitybus = this.mon_chang_junshiPamtsho;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "motithang"){
      this.timeCitybus = this.mon_chang_motithang;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoMonFri"){
      this.timeCitybus = this.mon_chuba_hontshoWeekdays;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoSat"){
      this.timeCitybus = this.mon_chuba_hontshoSat;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangMonFri"){
      this.timeCitybus = this.mon_chuba_chamgangWeekdays;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangSat"){
      this.timeCitybus = this.mon_chuba_chamgangSat;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "kuenselphodrang"){
      this.timeCitybus = this.mon_chuba_kuenselphodrang;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "serbithang"){
      this.timeCitybus = this.mon_chuba_serbithang;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "dechencholing"){
      this.timeCitybus = this.sun_chang_dechencholing;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "babesaViaLungtenphu"){
      this.timeCitybus = this.sun_chang_babesaViaLungtenphu;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhababesaEW"){
      this.timeCitybus = this.sun_chang_olakBabesaEW;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "jungshinaPamtsho"){
      this.timeCitybus = this.sun_chang_junshiPamtsho;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "motithang"){
      this.timeCitybus = this.sun_chang_motithang;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoSun"){
      this.timeCitybus = this.sun_chuba_hontsho;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
    else if(this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangSun"){
      this.timeCitybus = this.sun_chuba_chamgang;
      this.showSplittedCityBusResult(this.timeCitybus);
    }
  }

  morningCitySchedule: any;
  lunchCitySchedule: any;

  showSplittedCityBusResult(timeCitybus: any){
    let splitResult = timeCitybus.split("|");
    this.morningCitySchedule = splitResult[0];
    this.lunchCitySchedule = splitResult[1];
  }

  mon_chang_babesaViaLungtenphu: any;
  mon_chang_changjiViaMC: any;
  mon_chang_dechencholing: any;
  mon_chang_junshiPamtsho: any;
  mon_chang_motithang: any;
  mon_chang_olakBabesaEW: any;
  mon_chang_olakViaMC: any;
  mon_chuba_chamgangSat: any;
  mon_chuba_chamgangWeekdays: any;
  mon_chuba_hontshoSat: any;
  mon_chuba_hontshoWeekdays: any;
  mon_chuba_kuenselphodrang: any;
  mon_chuba_serbithang: any;
  sun_chang_babesaViaLungtenphu: any;
  sun_chang_dechencholing: any;
  sun_chang_junshiPamtsho: any;
  sun_chang_motithang: any;
  sun_chang_olakBabesaEW: any;
  sun_chuba_hontsho: any;
  sun_chuba_chamgang: any;

  loadCitybusSchedule(){
    this.fs.collection('/thromde').doc('citybusSchedule').get().subscribe(res=>  
      {
        this.citybusScheduleData.push({
          mon_chang_babesaViaLungtenphu:res.data().mon_chang_babesaViaLungtenphu,
          mon_chang_changjiViaMC:res.data().mon_chang_changjiViaMC,
          mon_chang_dechencholing : res.data().mon_chang_dechencholing,
          mon_chang_junshiPamtsho :res.data().mon_chang_junshiPamtsho,
          mon_chang_motithang : res.data().mon_chang_motithang,
          mon_chang_olakBabesaEW : res.data().mon_chang_olakBabesaEW,
          mon_chang_olakViaMC : res.data().mon_chang_olakViaMC,
          mon_chuba_chamgangSat : res.data().mon_chuba_chamgangSat,
          mon_chuba_chamgangWeekdays : res.data().mon_chuba_chamgangWeekdays,
          mon_chuba_hontshoSat : res.data().mon_chuba_hontshoSat,
          mon_chuba_hontshoWeekdays : res.data().mon_chuba_hontshoWeekdays,
          mon_chuba_kuenselphodrang : res.data().mon_chuba_kuenselphodrang,
          mon_chuba_serbithang : res.data().mon_chuba_serbithang,
          sun_chang_babesaViaLungtenphu : res.data().sun_chang_babesaViaLungtenphu,
          sun_chang_dechencholing : res.data().sun_chang_dechencholing,
          sun_chang_junshiPamtsho : res.data().sun_chang_junshiPamtsho,
          sun_chang_motithang : res.data().sun_chang_motithang,
          sun_chang_olakBabesaEW : res.data().sun_chang_olakBabesaEW,
          sun_chuba_hontsho : res.data().sun_chuba_hontsho,
          sun_chuba_chamgang : res.data().sun_chuba_chamgang
        })
        this.mon_chang_babesaViaLungtenphu = res.data().mon_chang_babesaViaLungtenphu;
        this.mon_chang_changjiViaMC = res.data().mon_chang_changjiViaMC,
        this.mon_chang_dechencholing = res.data().mon_chang_dechencholing,
        this.mon_chang_junshiPamtsho = res.data().mon_chang_junshiPamtsho,
        this.mon_chang_motithang = res.data().mon_chang_motithang,
        this.mon_chang_olakBabesaEW = res.data().mon_chang_olakBabesaEW,
        this.mon_chang_olakViaMC = res.data().mon_chang_olakViaMC,
        this.mon_chuba_chamgangSat = res.data().mon_chuba_chamgangSat,
        this.mon_chuba_chamgangWeekdays = res.data().mon_chuba_chamgangWeekdays,
        this.mon_chuba_hontshoSat = res.data().mon_chuba_hontshoSat,
        this.mon_chuba_hontshoWeekdays = res.data().mon_chuba_hontshoWeekdays,
        this.mon_chuba_kuenselphodrang = res.data().mon_chuba_kuenselphodrang,
        this.mon_chuba_serbithang = res.data().mon_chuba_serbithang,
        this.sun_chang_babesaViaLungtenphu = res.data().sun_chang_babesaViaLungtenphu,
        this.sun_chang_dechencholing = res.data().sun_chang_dechencholing,
        this.sun_chang_junshiPamtsho = res.data().sun_chang_junshiPamtsho,
        this.sun_chang_motithang = res.data().sun_chang_motithang,
        this.sun_chang_olakBabesaEW = res.data().sun_chang_olakBabesaEW,
        this.sun_chuba_hontsho = res.data().sun_chuba_hontsho,
        this.sun_chuba_chamgang = res.data().sun_chuba_chamgang
      })
      console.log(this.citybusScheduleData);
      this.timeoutStatus = setTimeout(() => {
        console.log("value="+this.mon_chang_babesaViaLungtenphu);      
        if(this.mon_chang_babesaViaLungtenphu == undefined){
          console.log("No Internet Connection");
          this.loadingController.dismiss();      
          this.navCtl.navigateForward('/internetstatus');
        }      
    }, 7500);
    }

    ionViewWillLeave(){
      console.log("Leave view");
      clearTimeout(this.timeoutStatus);
    }

  goGarbageTruck(){
    this.navCtl.navigateForward('/trackgarbagetruck');
  }

  //Garbage Schedule
  zoneSelected: any;
  garbageLocation: any;
  locationButton: boolean = true;

  garbageScheduleData:any[]=[];

  centralZone_var: boolean = true;
  southZone_var: boolean = false;
  northZone_var: boolean = false;

  garbageButton: boolean = true;
  garbageResult: any;

  showGarbageResult: boolean = false;

  changedZone(){
    if(this.zoneSelected != null){
      this.locationButton = false;
    }
    if(this.zoneSelected == "central"){
      this.centralZone_var = true;
      this.southZone_var = false;
      this.northZone_var = false;
    }
    else if(this.zoneSelected == "south"){
      this.southZone_var = true;
      this.centralZone_var = false;
      this.northZone_var = false;
    }
    else if(this.zoneSelected == "north"){
      this.northZone_var = true;
      this.centralZone_var = false;
      this.southZone_var = false;
    }

  }

  changedLocation(){
    if(this.garbageLocation != null){
      this.garbageButton = false;
    }
  }

  firstResultGarbage : any;
  secondResultGarbage : any;

  findGarbageSchedule(){
    this.showGarbageResult = true;
    if(this.garbageLocation == "upperMotithang"){
      this.garbageResult = this.upperMotithang;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "lowerMotithang"){
      this.garbageResult = this.lowerMotithang;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "changangkha"){
      this.garbageResult = this.changangkha;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "nppfColony"){
      this.garbageResult = this.nppfColony;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "nordzinAndHongkongMkt"){
      this.garbageResult = this.nordzinLamAndHongMkt;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "nordzinAndPwd"){
      this.garbageResult = this.nordzinLamAndPWD;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "changlamAndCFM"){
      this.garbageResult = this.changlamAndCFM;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "changlamAndChubachu"){
      this.garbageResult = this.changlamAndChubachu;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "changedaphu"){
      this.garbageResult = this.changedaphu;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "changbangdu"){
      this.garbageResult = this.changbangdu;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "policeHospital"){
      this.garbageResult = this.policeCamp;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "changzamtog"){
      this.garbageResult = this.changzamtog;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "changjiji"){
      this.garbageResult = this.changjiji;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "olakha"){
      this.garbageResult = this.olakha;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "lungtenphu"){
      this.garbageResult = this.lungtenphu;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "semtokha"){
      this.garbageResult = this.semtokha;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "babesaGref"){
      this.garbageResult = this.babesaGref;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "yhssBabesa"){
      this.garbageResult = this.YhssBabesa;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "babesaNew"){
      this.garbageResult = this.babesaNew;
      this.showSplittedGarbageResult(this.garbageResult);
    }
    else if(this.garbageLocation == "babesaOld"){
      this.garbageResult = this.babesaOld;
      this.showSplittedGarbageResult(this.garbageResult);
    }
  }

  showSplittedGarbageResult(garbageResult: any){
    let splitResult = garbageResult.split("|");
    this.firstResultGarbage = splitResult[0];
    this.secondResultGarbage = splitResult[1];
  }

  upperMotithang: any;
  lowerMotithang: any;
  changangkha: any;
  nppfColony: any;
  nordzinLamAndHongMkt: any;
  nordzinLamAndPWD: any;
  changlamAndCFM: any;
  changlamAndChubachu: any;
  changedaphu: any;
  changbangdu: any;
  policeCamp: any;
  changzamtog: any;
  changjiji: any;
  olakha: any;
  lungtenphu: any;
  semtokha: any;
  babesaGref: any;
  YhssBabesa: any;
  babesaNew: any;
  babesaOld: any;

  loadGarbageSchedule(){
    this.fs.collection('/thromde').doc('garbageTruckSchedule').get().subscribe(res=>  
      {
        this.garbageScheduleData.push({
          upperMotithang:res.data().upperMotithang,
          lowerMotithang:res.data().lowerMotithang,
          changangkha : res.data().changangkha,
          nppfColony :res.data().nppfColony,
          nordzinLamAndHongMkt : res.data().hongkongMarket,
          nordzinLamAndPWD : res.data().pwdColony,
          changlamAndCFM : res.data().cfmResident,
          changlamAndChubachu : res.data().chubachu,
          changedaphu : res.data().changedaphu,
          changbangdu : res.data().changbangdu,
          policeCamp : res.data().policecamp,
          changzamtog : res.data().changzamtog,
          changjiji : res.data().changjiji,
          olakha : res.data().olakha,
          lungtenphu : res.data().lungtenphu,
          semtokha : res.data().semtokha,
          babesaGref : res.data().babesaGref,
          YhssBabesa : res.data().YHS_Babesa,
          babesaNew : res.data().babesaNewlab,
          babesaOld : res.data().babesaOldLab
        })
        this.upperMotithang = res.data().upperMotithang;
        this.lowerMotithang = res.data().lowerMotithang,
        this.changangkha = res.data().changangkha,
        this.nppfColony = res.data().nppfColony,
        this.nordzinLamAndHongMkt = res.data().hongkongMarket,
        this.nordzinLamAndPWD = res.data().pwdColony,
        this.changlamAndCFM = res.data().cfmResident,
        this.changlamAndChubachu = res.data().chubachu,
        this.changedaphu = res.data().changedaphu,
        this.changbangdu = res.data().changbangdu,
        this.policeCamp = res.data().policecamp,
        this.changzamtog = res.data().changzamtog,
        this.changjiji = res.data().changjiji,
        this.olakha = res.data().olakha,
        this.lungtenphu = res.data().lungtenphu,
        this.semtokha = res.data().semtokha,
        this.babesaGref = res.data().babesaGref,
        this.YhssBabesa = res.data().YHS_Babesa,
        this.babesaNew = res.data().babesaNewlab,
        this.babesaOld = res.data().babesaOldLab
      })
      console.log("Garbage Schedule"+this.garbageScheduleData);
    }
}
