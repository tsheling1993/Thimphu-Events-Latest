(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["football-football-module"],{

/***/ "./src/app/football/football.module.ts":
/*!*********************************************!*\
  !*** ./src/app/football/football.module.ts ***!
  \*********************************************/
/*! exports provided: FootballPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballPageModule", function() { return FootballPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _football_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./football.page */ "./src/app/football/football.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _football_page__WEBPACK_IMPORTED_MODULE_5__["FootballPage"]
    }
];
var FootballPageModule = /** @class */ (function () {
    function FootballPageModule() {
    }
    FootballPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_football_page__WEBPACK_IMPORTED_MODULE_5__["FootballPage"]]
        })
    ], FootballPageModule);
    return FootballPageModule;
}());



/***/ }),

/***/ "./src/app/football/football.page.html":
/*!*********************************************!*\
  !*** ./src/app/football/football.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n          <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n        <ion-back-button style=\"color:white;\"></ion-back-button>\n        <ion-title style=\"color:white;\">Football</ion-title>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab tab=\"ground_status\">\n      <ion-content overflow-scroll=\"false\">\n        <ion-list>\n          <ion-item class=\"contact-special\" button=\"true\" (click)=\"showChangFootball()\">\n            <p>Changlimithang Football</p>\n          </ion-item>     \n          <ion-item class=\"contact-special\" button=\"true\" (click)=\"showChangFutsal()\">\n            <p>Changlimithang Futsal</p>\n          </ion-item>\n          <ion-item class=\"contact-special\" button=\"true\" (click)=\"showChangjijiFull()\">\n            <p>Changjiji Football</p>\n          </ion-item>\n          <ion-item class=\"contact-special\" button=\"true\" (click)=\"showChangjijiFutsal()\">\n            <p>Changjiji Futsal</p>\n          </ion-item>\n          <ion-item class=\"contact-special\" button=\"true\" (click)=\"showYDF()\">\n            <p>YDF Futsal</p>\n          </ion-item>\n          <ion-item class=\"contact-special\" button=\"true\" (click)=\"showBabesa()\">\n            <p>Babesa Futsal</p>\n          </ion-item>\n          <ion-item class=\"contact-special\" button=\"true\" (click)=\"showSerbithang()\">\n            <p>Serbithang Football</p>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-tab>\n\n    <ion-tab tab=\"match\">\n      <ion-content padding overflow-scroll=\"false\">\n        <!-- <ion-list *ngFor=\"let data of match\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"date\">\n                <ion-badge color=\"success\"  class=\"font-style\"><b><ion-icon name=\"football\"></ion-icon>{{data.matchtitle}}</b></ion-badge>\n                <div style=\"color:dodgerblue; text-align: right\"><ion-icon name=\"calendar\"></ion-icon>{{data.matchdate}}, {{data.matchtime}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col  class=\"date\"><span style=\"color:dodgerblue; text-align: right\"><ion-icon name=\"pin\"></ion-icon><b>Venue:&nbsp;</b></span>{{data.matchvenue}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\" class=\"font-style\">\n              {{data.matchteam1}}\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-badge color=\"secondary\"  class=\"font-style\">{{data.matchsore}}</ion-badge>\n            </ion-col>\n            <ion-col size=\"5\"  class=\"font-style\">\n              {{data.matchteam2}}\n            </ion-col>\n          </ion-row>\n          <hr>\n        </ion-grid>\n       </ion-list> -->\n\n       <!-- <ion-card *ngFor=\"let data of match\">\n         <ion-card-content> -->\n           <!-- <div class=\"date\">\n            <span class=\"font-style\">{{data.matchtitle}}</span>\n            <div style=\"color:dodgerblue; text-align: right\"><ion-icon name=\"calendar\"></ion-icon>{{data.matchdate}}, {{data.matchtime}}</div>\n          </div>\n          <div class=\"date\"><span style=\"color:dodgerblue; text-align: right\"><ion-icon name=\"pin\"></ion-icon><b>Venue:&nbsp;</b></span>{{data.matchvenue}}</div>\n         <ion-grid>\n           <ion-row>\n             <ion-col size=\"5\" class=\"font-style\">\n                <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.matchteam1}}<ion-icon name=\"football\"></ion-icon></span>\n             </ion-col>\n             <ion-col size=\"2\">\n                <ion-badge color=\"secondary\"  class=\"font-style\">{{data.matchsore}}</ion-badge>\n             </ion-col>\n             <ion-col size=\"5\"  class=\"font-style\">\n                <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.matchteam2}}<ion-icon name=\"football\"></ion-icon></span>\n             </ion-col>\n           </ion-row>\n         </ion-grid> -->\n\n         <ion-grid padding *ngFor=\"let data of match\">\n           <ion-row>\n             <ion-col size=\"12\" style=\"background-color: rgb(243, 233, 233)\">\n              <div style=\"width: 100%; text-align: center;font-size: 12pt;color: rgb(146, 146, 140);font-family: 'Times New Roman', Times, serif;\">{{data.matchdate}}</div>\n             </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col size=\"12\">\n             <div style=\"width: 100%; text-align: center;font-size: 12pt;color: rgb(49, 49, 47);font-family: 'Times New Roman', Times, serif;\"><span style=\"background-color: rgb(243, 233, 233)\">{{data.matchtime}}</span></div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"4\" class=\"font-style\">\n               <span style=\"color:rgb(48, 46, 46);font-family: 'Times New Roman', Times, serif; font-size: 12pt;\">{{data.matchteam1}}</span>\n            </ion-col>\n            <ion-col size=\"2\">\n               <ion-badge color=\"secondary\"  class=\"font-style\">{{data.matchsore}}</ion-badge>\n            </ion-col>\n            <ion-col size=\"5\"  class=\"font-style\">\n               <span style=\"color:rgb(48, 46, 46);font-family: 'Times New Roman', Times, serif;font-size: 12pt;\">{{data.matchteam2}}</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n                <div style=\"width: 100%; text-align: center;font-size: 12pt;color: rgb(146, 146, 140);font-family: 'Times New Roman', Times, serif;\">{{data.matchvenue}}<br>{{data.matchtitle}}</div>\n            </ion-col>\n          </ion-row>\n         </ion-grid>\n        <!-- </ion-card-content>\n       </ion-card> -->\n\n      </ion-content>\n    </ion-tab>\n\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"ground_status\">\n        <ion-label style=\"font-size: 12pt; font-family: 'Times New Roman', Times, serif;\">Ground Status</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"match\">\n        <ion-label style=\"font-size: 12pt; font-family: 'Times New Roman', Times, serif;\">Match</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/football/football.page.scss":
/*!*********************************************!*\
  !*** ./src/app/football/football.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-special {\n  font-size: 16px;\n  word-wrap: normal;\n  color: teal;\n  padding-bottom: 2px; }\n\n.date {\n  font-size: 14px;\n  color: dodgerblue;\n  font-family: \"Times New Roman\", Times, serif; }\n\n.t_bg {\n  background-color: thistle; }\n\nhr {\n  width: 100%;\n  height: 1px;\n  background-color: teal;\n  border: 0 none; }\n\n.font-style {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/football/football.page.ts":
/*!*******************************************!*\
  !*** ./src/app/football/football.page.ts ***!
  \*******************************************/
/*! exports provided: FootballPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballPage", function() { return FootballPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FootballPage = /** @class */ (function () {
    function FootballPage(fs, alertCtrl, navCtrl, iab, menu) {
        var _this = this;
        this.fs = fs;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.menu = menu;
        this.matchData = [];
        this.match = [];
        this.fs.collection('/t_football_match', function (ref) { return ref.orderBy('matchdate', 'desc'); }).get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.match.push({
                    matchtitle: doc.data().matchtitle,
                    matchteam1: doc.data().matchteam1,
                    matchteam2: doc.data().matchteam2,
                    matchsore: doc.data().matchsore,
                    matchvenue: doc.data().matchvenue,
                    matchtime: doc.data().matchtime,
                    matchdate: doc.data().matchdate
                });
                _this.matchTitle = doc.data().matchtitle;
                // this.movieList.push(this.movie);
                // console.log("match data:"+this.match);
            });
        });
        this.timeoutStatus = setTimeout(function () {
            console.log("value=" + _this.matchTitle);
            if (_this.matchTitle == undefined) {
                console.log("No Internet Connection");
                //this.loadingController.dismiss();      
                _this.navCtrl.navigateForward('/internetstatus');
            }
        }, 7500);
    }
    FootballPage.prototype.ionViewWillLeave = function () {
        console.log("Leave view");
        clearTimeout(this.timeoutStatus);
    };
    FootballPage.prototype.ngOnInit = function () {
    };
    FootballPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    FootballPage.prototype.showChangFootball = function () {
        this.navCtrl.navigateForward('/football-changlimithang');
    };
    FootballPage.prototype.showChangFutsal = function () {
        this.navCtrl.navigateForward('/futsal-changlimithang');
    };
    FootballPage.prototype.showYDF = function () {
        this.navCtrl.navigateForward('/football-ydf');
    };
    FootballPage.prototype.showSerbithang = function () {
        this.navCtrl.navigateForward('/football-serbithang');
    };
    FootballPage.prototype.showChangjijiFull = function () {
        this.navCtrl.navigateForward('/football-changjiji');
    };
    FootballPage.prototype.showChangjijiFutsal = function () {
        this.navCtrl.navigateForward('/futsal-changjiji');
    };
    FootballPage.prototype.showBabesa = function () {
        this.navCtrl.navigateForward('/football-babesa');
    };
    FootballPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-football',
            template: __webpack_require__(/*! ./football.page.html */ "./src/app/football/football.page.html"),
            styles: [__webpack_require__(/*! ./football.page.scss */ "./src/app/football/football.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], FootballPage);
    return FootballPage;
}());



/***/ })

}]);
//# sourceMappingURL=football-football-module.js.map