(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thromde2-thromde2-module"],{

/***/ "./src/app/thromde2/thromde2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/thromde2/thromde2.module.ts ***!
  \*********************************************/
/*! exports provided: Thromde2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thromde2PageModule", function() { return Thromde2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _thromde2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thromde2.page */ "./src/app/thromde2/thromde2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _thromde2_page__WEBPACK_IMPORTED_MODULE_5__["Thromde2Page"]
    }
];
var Thromde2PageModule = /** @class */ (function () {
    function Thromde2PageModule() {
    }
    Thromde2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_thromde2_page__WEBPACK_IMPORTED_MODULE_5__["Thromde2Page"]]
        })
    ], Thromde2PageModule);
    return Thromde2PageModule;
}());



/***/ }),

/***/ "./src/app/thromde2/thromde2.page.html":
/*!*********************************************!*\
  !*** ./src/app/thromde2/thromde2.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n      <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n      <ion-back-button style=\"color:white;\"></ion-back-button>\n      <ion-title id=\"title\" style=\"color:white;\">Thromde</ion-title>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid no-padding>\n        <ion-row padding>\n          <ion-col size=\"5\" no-padding>\n              <ion-button expand=\"full\" no-margin [color]=\"citybusSelectColor\" (click)=\"showCitybus()\">\n                  City Bus\n                  <ion-icon slot=\"start\" *ngIf=\"showCitybus_var\" name=\"arrow-dropdown\"></ion-icon>\n                </ion-button>\n          </ion-col>\n          <ion-col size=\"7\" no-padding>\n              <ion-button expand=\"full\" no-margin [color]=\"garbageSelectColor\" (click)=\"showGarbageTruck()\">\n                  Garbage Truck\n                  <ion-icon *ngIf=\"showGarbageTruck_var\" slot=\"start\" name=\"arrow-dropdown\"></ion-icon>\n                </ion-button>\n          </ion-col>\n        </ion-row>\n    \n        <!-- show when selected City Bus -->\n        <div *ngIf=\"showCitybus_var\">\n            <ion-row padding>\n              <ion-col size=\"5\" no-padding>\n                  <ion-button expand=\"full\" no-margin [color]=\"citybusScheduleColor\" (click)=\"showCitybusSchedule()\">\n                      Schedule_CB\n                      <ion-icon *ngIf=\"showCitybusSchedule_var\" slot=\"start\" name=\"arrow-dropdown\"></ion-icon>\n                    </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" no-padding>\n                  <ion-button expand=\"full\" no-margin [color]=\"citybusTrackerColor\" (click)=\"showCitybusTracker()\">\n                      Tracker_CB\n                      <ion-icon *ngIf=\"showCitybusTracker_var\" slot=\"start\" name=\"arrow-dropdown\"></ion-icon>\n                    </ion-button>\n              </ion-col>\n            </ion-row>\n            \n            <!-- for city bus schedule -->\n            <div *ngIf=\"showCitybusSchedule_var\">\n                <ion-row padding>\n                    <ion-col size=\"3\">\n                        <br><b>Day:</b> \n                    </ion-col>\n                    <ion-col size=\"9\">\n                      <ion-select class=\"input_border\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select Day\" [(ngModel)]=\"daySelectedCity\" (ionChange)=\"changedDaySelectedCity()\">\n                        <ion-select-option value=\"dayCityMonSat\" >Monday to Saturday</ion-select-option>\n                        <ion-select-option value=\"dayCitySun\" >Sunday</ion-select-option>\n                      </ion-select>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row padding>\n                      <ion-col size=\"3\">\n                          <br><b>From:</b> \n                      </ion-col>\n                    <ion-col size=\"8\">\n                      <ion-select class=\"input_border\" [disabled]=\"terminalButton\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select Terminal\" [(ngModel)]=\"terminalCity\" (ionChange)=\"changedTerminalSelectedCity()\">\n                        <ion-select-option value=\"changlamCity\" >Changlam City Bus</ion-select-option>\n                        <ion-select-option value=\"chubachuCity\" >Chubachu Parking</ion-select-option>\n                      </ion-select>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row padding>\n                        <ion-col size=\"3\">\n                            <br><b>To:</b> \n                        </ion-col>\n                      <ion-col size=\"8\">\n                        <ion-select *ngIf=\"monSatChanglam_var\" class=\"input_border\" [disabled]=\"destinationButton\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select Destination\" [(ngModel)]=\"destinationCity\" (ionChange)=\"changedDestinationSelectedCity()\">\n                          <ion-select-option value=\"dechencholing\" >Dechencholing</ion-select-option>\n                          <ion-select-option value=\"babesaViaLungtenphu\" >Babesa via Lungtenphu</ion-select-option>\n                          <ion-select-option value=\"olakhababesaEW\" >Olakha/Babesa (Expressway)</ion-select-option>\n                          <ion-select-option value=\"olakhaViaMC\" >Olakha via Mem.Chorten/Dzong</ion-select-option>\n                          <ion-select-option value=\"changjijiViaMC\" >Changjiji via Mem.Chorten/Dzong</ion-select-option>\n                          <ion-select-option value=\"jungshinaPamtsho\" >Jungshina/Pamtsho</ion-select-option>\n                          <ion-select-option value=\"motithang\" >Motithang</ion-select-option>       \n                        </ion-select>\n\n                          <!-- from chubachu NPPF terminal -->\n                        <ion-select *ngIf=\"monSatChubachu_var\" class=\"input_border\" [disabled]=\"destinationButton\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select Destination\" [(ngModel)]=\"destinationCity\" (ionChange)=\"changedDestinationSelectedCity()\">\n                          <ion-select-option value=\"hontshoMonFri\" >Hontsho (Mon-Fri)</ion-select-option>       \n                          <ion-select-option value=\"hontshoSat\" >Hontsho (Sat)</ion-select-option>       \n                          <ion-select-option value=\"chamgangMonFri\" >Chamgang (Mon-Fri)</ion-select-option>       \n                          <ion-select-option value=\"chamgangSat\">Chamgang (Sat)</ion-select-option>       \n                          <ion-select-option value=\"kuenselphodrang\" >Kuensel Phodrang</ion-select-option>       \n                          <ion-select-option value=\"serbithang\" >Serbithang</ion-select-option>      \n                        </ion-select>\n\n                        <!-- sunday changlam terminal -->\n                        <ion-select *ngIf=\"sunChanglam_var\" class=\"input_border\" [disabled]=\"destinationButton\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select Destination\" [(ngModel)]=\"destinationCity\" (ionChange)=\"changedDestinationSelectedCity()\">\n                            <ion-select-option value=\"dechencholing\" >Dechencholing</ion-select-option>\n                            <ion-select-option value=\"babesaViaLungtenphu\" >Babesa via Lungtenphu</ion-select-option>\n                            <ion-select-option value=\"olakhababesaEW\" >Olakha/Babesa (Expressway)</ion-select-option>\n                            <ion-select-option value=\"jungshinaPamtsho\" >Jungshina/Pamtsho</ion-select-option>\n                            <ion-select-option value=\"motithang\" >Motithang</ion-select-option> \n                        </ion-select>                      \n                          \n                        <!-- sunday NPPF chubachu -->\n                        <ion-select *ngIf=\"sunChubachu_var\" class=\"input_border\" [disabled]=\"destinationButton\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select Destination\" [(ngModel)]=\"destinationCity\" (ionChange)=\"changedDestinationSelectedCity()\">\n                            <ion-select-option value=\"hontshoSun\">Hontsho</ion-select-option>      \n                            <ion-select-option value=\"chamgangSun\">Chamgang</ion-select-option> \n                        </ion-select>\n                      </ion-col>\n                    </ion-row>\n\n                    <ion-row padding>\n                        <ion-col size=\"3\">\n                        </ion-col>\n                        <ion-col size=\"5\">\n                            <ion-button color=\"tertiary\" (click)=\"findTiming()\" [disabled]=\"submitButton\">Find Timing</ion-button>\n                        </ion-col>\n                    </ion-row> \n                    <ion-list *ngIf=\"showTimeStatus\">\n                        <ion-item class=\"resultBox\">\n                            <ion-row>\n                            <ion-col>\n                                <b>Time:</b> <br>{{timeCitybus}}                                                             \n                            </ion-col>\n                            </ion-row>\n                        </ion-item>\n                        <ion-item class=\"source\">\n                            source: citybus site\n                        </ion-item>\n                    </ion-list>\n            </div>\n    \n            <!-- city bus tracker -->\n            <div *ngIf=\"showCitybusTracker_var\">\n                <ion-row padding>\n                    <ion-col size=\"10\">\n                          Sorry! Its currently not available.\n                    </ion-col>\n                  </ion-row>\n                  <ion-row padding>\n                      <ion-col size=\"7\">\n                      </ion-col>\n                      <ion-col size=\"5\">\n                      </ion-col>\n                  </ion-row>\n            </div>\n      </div>\n    \n      <!-- Show when selected garbage truck -->\n      <div *ngIf=\"showGarbageTruck_var\">\n          <ion-row padding>\n              <ion-col size=\"5\" no-padding>\n                  <ion-button expand=\"full\" no-margin [color]=\"garbageScheduleColor\" (click)=\"showGarbageSchedule()\">\n                      Schedule_GT\n                      <ion-icon *ngIf=\"showGarbageSchedule_var\" slot=\"start\" name=\"arrow-dropdown\"></ion-icon>\n                    </ion-button>\n              </ion-col>\n              <ion-col size=\"6\" no-padding>\n                  <ion-button expand=\"full\" no-margin [color]=\"garbageTrackerColor\" (click)=\"showGarbageTracker()\">\n                      Tracker_GT\n                      <ion-icon *ngIf=\"showGarbageTracker_var\" slot=\"start\" name=\"arrow-dropdown\"></ion-icon>\n                    </ion-button>\n              </ion-col>\n            </ion-row>\n      \n            <!-- for garbage schedule -->\n            <div *ngIf=\"showGarbageSchedule_var\">\n                <ion-row padding>\n                  <ion-col size=\"10\">\n                    Sorry! Its currently not available.                       \n                  </ion-col>\n                </ion-row>\n    \n                <ion-row padding>\n                    <ion-col size=\"10\">\n                        \n                    </ion-col>\n                  </ion-row>\n    \n                  <ion-row padding>\n                      <ion-col size=\"7\">\n                      </ion-col>\n                      <ion-col size=\"5\">\n                      </ion-col>\n                  </ion-row>\n            </div>\n    \n            <!-- garbage tracker -->\n            <div *ngIf=\"showGarbageTracker_var\">\n                <ion-row padding>\n                    <ion-col size=\"10\">\n                        <ion-button (click)=\"goGarbageTruck()\" color=\"tertiary\">Track Garbage Truck</ion-button>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row padding>\n                      <ion-col size=\"7\">\n                      </ion-col>\n                      <ion-col size=\"5\">\n                      </ion-col>\n                  </ion-row>\n            </div>\n\n      </div>\n      </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/thromde2/thromde2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/thromde2/thromde2.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input_border {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  border-color: teal; }\n\n.destination {\n  color: red;\n  background-color: yellow;\n  font-size: 10px; }\n\n.resultBox {\n  background-color: rgba(197, 188, 188, 0.8);\n  border: 1px; }\n\n.source {\n  font-size: 10pt;\n  color: #2045ad; }\n"

/***/ }),

/***/ "./src/app/thromde2/thromde2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/thromde2/thromde2.page.ts ***!
  \*******************************************/
/*! exports provided: Thromde2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thromde2Page", function() { return Thromde2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Thromde2Page = /** @class */ (function () {
    function Thromde2Page(fs, navCtl, menu, loadingController) {
        this.fs = fs;
        this.navCtl = navCtl;
        this.menu = menu;
        this.loadingController = loadingController;
        this.showCitybusSchedule_var = true;
        this.showCitybusTracker_var = false;
        this.showGarbageTruck_var = false;
        this.showCitybus_var = true;
        this.citybusScheduleColor = "tertiary";
        this.citybusTrackerColor = "medium";
        this.citybusSelectColor = "tertiary";
        this.garbageSelectColor = "medium";
        this.garbageScheduleColor = "tertiary";
        this.garbageTrackerColor = "medium";
        this.showGarbageTracker_var = false;
        this.showGarbageSchedule_var = true;
        this.terminalButton = true;
        this.destinationButton = true;
        this.monSatChanglam_var = true;
        this.monSatChubachu_var = false;
        this.sunChanglam_var = false;
        this.sunChubachu_var = false;
        this.submitButton = true;
        this.showTimeStatus = false;
        this.citybusScheduleData = [];
        this.customPopoverOptions = {
            // header: 'Hair Color',
            // subHeader: 'Select your hair color',
            // message: 'Only select your dominant hair color'
            cssClass: 'destination',
        };
        this.loadCitybusSchedule();
    }
    Thromde2Page.prototype.ngOnInit = function () {
    };
    Thromde2Page.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    //Below codes are all for show and hide features
    Thromde2Page.prototype.showCitybusTracker = function () {
        this.showCitybusTracker_var = true;
        this.showCitybusSchedule_var = false;
        this.citybusScheduleColor = "medium";
        this.citybusTrackerColor = "tertiary";
    };
    Thromde2Page.prototype.showCitybusSchedule = function () {
        this.showCitybusSchedule_var = true;
        this.showCitybusTracker_var = false;
        this.citybusScheduleColor = "tertiary";
        this.citybusTrackerColor = "medium";
    };
    Thromde2Page.prototype.showGarbageTruck = function () {
        this.showGarbageTruck_var = true;
        this.showCitybus_var = false;
        this.garbageSelectColor = "tertiary";
        this.citybusSelectColor = "medium";
    };
    Thromde2Page.prototype.showCitybus = function () {
        this.showCitybus_var = true;
        this.showGarbageTruck_var = false;
        this.citybusSelectColor = "tertiary";
        this.garbageSelectColor = "medium";
    };
    Thromde2Page.prototype.showGarbageSchedule = function () {
        this.showGarbageSchedule_var = true;
        this.showGarbageTracker_var = false;
        this.garbageScheduleColor = "tertiary";
        this.garbageTrackerColor = "medium";
    };
    Thromde2Page.prototype.showGarbageTracker = function () {
        this.showGarbageTracker_var = true;
        this.showGarbageSchedule_var = false;
        this.garbageScheduleColor = "medium";
        this.garbageTrackerColor = "tertiary";
    };
    Thromde2Page.prototype.changedDaySelectedCity = function () {
        this.terminalButton = false;
        this.changedTerminalSelectedCity();
    };
    Thromde2Page.prototype.changedTerminalSelectedCity = function () {
        if (this.terminalCity != null) {
            this.destinationButton = false;
        }
        console.log("terminal" + this.terminalCity + " day " + this.daySelectedCity);
        if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity") {
            this.monSatChanglam_var = true;
            this.monSatChubachu_var = false;
            this.sunChanglam_var = false;
            this.sunChubachu_var = false;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity") {
            this.monSatChanglam_var = false;
            this.monSatChubachu_var = true;
            this.sunChanglam_var = false;
            this.sunChubachu_var = false;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity") {
            this.monSatChanglam_var = false;
            this.monSatChubachu_var = false;
            this.sunChanglam_var = true;
            this.sunChubachu_var = false;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity") {
            this.monSatChanglam_var = false;
            this.monSatChubachu_var = false;
            this.sunChanglam_var = false;
            this.sunChubachu_var = true;
        }
    };
    Thromde2Page.prototype.changedDestinationSelectedCity = function () {
        if (this.terminalCity != null && this.daySelectedCity != null && this.destinationCity != null) {
            this.submitButton = false;
        }
    };
    Thromde2Page.prototype.findTiming = function () {
        this.showTimeStatus = true;
        // if()
        //   terminalCity: any;
        // daySelectedCity: any;
        // destinationCity: any;
        if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "dechencholing") {
            this.timeCitybus = this.mon_chang_dechencholing;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "babesaViaLungtenphu") {
            this.timeCitybus = this.mon_chang_babesaViaLungtenphu;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhababesaEW") {
            this.timeCitybus = this.mon_chang_olakBabesaEW;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhaViaMC") {
            this.timeCitybus = this.mon_chang_olakViaMC;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "changjijiViaMC") {
            this.timeCitybus = this.mon_chang_changjiViaMC;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "jungshinaPamtsho") {
            this.timeCitybus = this.mon_chang_junshiPamtsho;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "changlamCity" && this.destinationCity == "motithang") {
            this.timeCitybus = this.mon_chang_motithang;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoMonFri") {
            this.timeCitybus = this.mon_chuba_hontshoWeekdays;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoSat") {
            this.timeCitybus = this.mon_chuba_hontshoSat;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangMonFri") {
            this.timeCitybus = this.mon_chuba_chamgangWeekdays;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangSat") {
            this.timeCitybus = this.mon_chuba_chamgangSat;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "kuenselphodrang") {
            this.timeCitybus = this.mon_chuba_kuenselphodrang;
        }
        else if (this.daySelectedCity == "dayCityMonSat" && this.terminalCity == "chubachuCity" && this.destinationCity == "serbithang") {
            this.timeCitybus = this.mon_chuba_serbithang;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "dechencholing") {
            this.timeCitybus = this.sun_chang_dechencholing;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "babesaViaLungtenphu") {
            this.timeCitybus = this.sun_chang_babesaViaLungtenphu;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "olakhababesaEW") {
            this.timeCitybus = this.sun_chang_olakBabesaEW;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "jungshinaPamtsho") {
            this.timeCitybus = this.sun_chang_junshiPamtsho;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "changlamCity" && this.destinationCity == "motithang") {
            this.timeCitybus = this.sun_chang_motithang;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity" && this.destinationCity == "hontshoSun") {
            this.timeCitybus = this.sun_chuba_hontsho;
        }
        else if (this.daySelectedCity == "dayCitySun" && this.terminalCity == "chubachuCity" && this.destinationCity == "chamgangSun") {
            this.timeCitybus = this.sun_chuba_chamgang;
        }
    };
    Thromde2Page.prototype.loadCitybusSchedule = function () {
        var _this = this;
        this.fs.collection('/thromde').doc('citybusSchedule').get().subscribe(function (res) {
            _this.citybusScheduleData.push({
                mon_chang_babesaViaLungtenphu: res.data().mon_chang_babesaViaLungtenphu,
                mon_chang_changjiViaMC: res.data().mon_chang_changjiViaMC,
                mon_chang_dechencholing: res.data().mon_chang_dechencholing,
                mon_chang_junshiPamtsho: res.data().mon_chang_junshiPamtsho,
                mon_chang_motithang: res.data().mon_chang_motithang,
                mon_chang_olakBabesaEW: res.data().mon_chang_olakBabesaEW,
                mon_chang_olakViaMC: res.data().mon_chang_olakViaMC,
                mon_chuba_chamgangSat: res.data().mon_chuba_chamgangSat,
                mon_chuba_chamgangWeekdays: res.data().mon_chuba_chamgangWeekdays,
                mon_chuba_hontshoSat: res.data().mon_chuba_hontshoSat,
                mon_chuba_hontshoWeekdays: res.data().mon_chuba_hontshoWeekdays,
                mon_chuba_kuenselphodrang: res.data().mon_chuba_kuenselphodrang,
                mon_chuba_serbithang: res.data().mon_chuba_serbithang,
                sun_chang_babesaViaLungtenphu: res.data().sun_chang_babesaViaLungtenphu,
                sun_chang_dechencholing: res.data().sun_chang_dechencholing,
                sun_chang_junshiPamtsho: res.data().sun_chang_junshiPamtsho,
                sun_chang_motithang: res.data().sun_chang_motithang,
                sun_chang_olakBabesaEW: res.data().sun_chang_olakBabesaEW,
                sun_chuba_hontsho: res.data().sun_chuba_hontsho,
                sun_chuba_chamgang: res.data().sun_chuba_chamgang
            });
            _this.mon_chang_babesaViaLungtenphu = res.data().mon_chang_babesaViaLungtenphu;
            _this.mon_chang_changjiViaMC = res.data().mon_chang_changjiViaMC,
                _this.mon_chang_dechencholing = res.data().mon_chang_dechencholing,
                _this.mon_chang_junshiPamtsho = res.data().mon_chang_junshiPamtsho,
                _this.mon_chang_motithang = res.data().mon_chang_motithang,
                _this.mon_chang_olakBabesaEW = res.data().mon_chang_olakBabesaEW,
                _this.mon_chang_olakViaMC = res.data().mon_chang_olakViaMC,
                _this.mon_chuba_chamgangSat = res.data().mon_chuba_chamgangSat,
                _this.mon_chuba_chamgangWeekdays = res.data().mon_chuba_chamgangWeekdays,
                _this.mon_chuba_hontshoSat = res.data().mon_chuba_hontshoSat,
                _this.mon_chuba_hontshoWeekdays = res.data().mon_chuba_hontshoWeekdays,
                _this.mon_chuba_kuenselphodrang = res.data().mon_chuba_kuenselphodrang,
                _this.mon_chuba_serbithang = res.data().mon_chuba_serbithang,
                _this.sun_chang_babesaViaLungtenphu = res.data().sun_chang_babesaViaLungtenphu,
                _this.sun_chang_dechencholing = res.data().sun_chang_dechencholing,
                _this.sun_chang_junshiPamtsho = res.data().sun_chang_junshiPamtsho,
                _this.sun_chang_motithang = res.data().sun_chang_motithang,
                _this.sun_chang_olakBabesaEW = res.data().sun_chang_olakBabesaEW,
                _this.sun_chuba_hontsho = res.data().sun_chuba_hontsho,
                _this.sun_chuba_chamgang = res.data().sun_chuba_chamgang;
        });
        console.log(this.citybusScheduleData);
        this.timeoutStatus = setTimeout(function () {
            console.log("value=" + _this.mon_chang_babesaViaLungtenphu);
            if (_this.mon_chang_babesaViaLungtenphu == undefined) {
                console.log("No Internet Connection");
                _this.loadingController.dismiss();
                _this.navCtl.navigateForward('/internetstatus');
            }
        }, 7500);
    };
    Thromde2Page.prototype.ionViewWillLeave = function () {
        console.log("Leave view");
        clearTimeout(this.timeoutStatus);
    };
    Thromde2Page.prototype.goGarbageTruck = function () {
        this.navCtl.navigateForward('/trackgarbagetruck');
    };
    Thromde2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thromde2',
            template: __webpack_require__(/*! ./thromde2.page.html */ "./src/app/thromde2/thromde2.page.html"),
            styles: [__webpack_require__(/*! ./thromde2.page.scss */ "./src/app/thromde2/thromde2.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], Thromde2Page);
    return Thromde2Page;
}());



/***/ })

}]);
//# sourceMappingURL=thromde2-thromde2-module.js.map