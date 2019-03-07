(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thromde-thromde-module"],{

/***/ "./src/app/thromde/thromde.module.ts":
/*!*******************************************!*\
  !*** ./src/app/thromde/thromde.module.ts ***!
  \*******************************************/
/*! exports provided: ThromdePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThromdePageModule", function() { return ThromdePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _thromde_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thromde.page */ "./src/app/thromde/thromde.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _thromde_page__WEBPACK_IMPORTED_MODULE_5__["ThromdePage"]
    }
];
var ThromdePageModule = /** @class */ (function () {
    function ThromdePageModule() {
    }
    ThromdePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_thromde_page__WEBPACK_IMPORTED_MODULE_5__["ThromdePage"]]
        })
    ], ThromdePageModule);
    return ThromdePageModule;
}());



/***/ }),

/***/ "./src/app/thromde/thromde.page.html":
/*!*******************************************!*\
  !*** ./src/app/thromde/thromde.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-back-button style=\"color:white;\"></ion-back-button>\n    <ion-title id=\"title\" style=\"color:white;\">Thromde</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<ion-tabs>\n<ion-tab tab=\"citybus\">\n    <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" no-padding>\n              <ion-button expand=\"full\" no-margin [color]=\"trackCSelectColor\" style=\"color:white;\" (click)=\"showTrackC()\">\n                  Track \n                </ion-button>\n          </ion-col>\n          <ion-col size=\"6\" no-padding>\n              <ion-button expand=\"full\" no-margin [color]=\"scheCSelectColor\" style=\"color:white;\" (click)=\"showScheC()\">\n                  Schedule\n                </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"showTrackC_var\" >\n          <ion-col>\n              <ion-label style=\"font-size: 10pt\">Babesa Return via Samardzingkha</ion-label><ion-button (click)=\"goTrackCMap()\">Track</ion-button><br>\n              <ion-label style=\"font-size: 10pt\">Samardzingkha Return via Babesa/Olakha</ion-label><ion-button (click)=\"goTrackCMap()\">Track</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"showScheC_var\" class=\"animateAppearDown\">\n         <!-- To-Do: add city bus schedule here -->\n        </ion-row>\n      </ion-grid>\n</ion-tab>\n<ion-tab tab=\"garbagetruck\">\n    <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\" no-padding>\n              <ion-button expand=\"full\" no-margin [color]=\"trackGSelectColor\" style=\"color:white;\" (click)=\"showTrackG()\">\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Track&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </ion-button>\n          </ion-col>\n          <ion-col size=\"6\" no-padding>\n              <ion-button expand=\"full\" no-margin [color]=\"scheGSelectColor\" style=\"color:white;\" (click)=\"showScheG()\">\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Schedule&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"showTrackG_var\"class=\"animateAppearDown\" >\n          <ion-col >\n              <ion-label style=\"font-size: 10pt\">Upper Thimphu Garbage Truck</ion-label><ion-button (click)=\"goTrackGMap()\">Track</ion-button><br>\n              <ion-label style=\"font-size: 10pt\">Lower Thimphu Garbage Truck</ion-label><ion-button (click)=\"goTrackGsMap()\">Track</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"showScheG_var\" class=\"animateAppearDown\">\n         <!-- To-Do: add garbage truck schedule here -->\n        </ion-row>\n      </ion-grid>\n</ion-tab>\n<ion-tab-bar slot=\"top\" style=\"border-left: 2px solid grey; border-right: 2px solid grey; border-bottom: 2px solid grey; border-radius: 5%;\">\n  <ion-tab-button tab=\"citybus\" style=\"border-right: 1px solid grey;\" >\n    <ion-label style=\"font-size: 12pt;\" color=\"tertiary\">City Bus</ion-label>\n  </ion-tab-button>\n  <ion-tab-button tab=\"garbagetruck\" style=\"border-left:1px solid grey;\" >\n    <ion-label style=\"font-size: 12pt;\" color=\"tertiary\">Garbage Truck</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n</ion-tabs>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/thromde/thromde.page.scss":
/*!*******************************************!*\
  !*** ./src/app/thromde/thromde.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thromde/thromde.page.ts":
/*!*****************************************!*\
  !*** ./src/app/thromde/thromde.page.ts ***!
  \*****************************************/
/*! exports provided: ThromdePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThromdePage", function() { return ThromdePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThromdePage = /** @class */ (function () {
    function ThromdePage(navCtrl, geolocation, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.menu = menu;
        this.trackCSelectColor = "tertiary";
        this.scheCSelectColor = "medium";
        this.trackGSelectColor = "tertiary";
        this.scheGSelectColor = "medium";
        this.showTrackC_var = true;
        this.showScheC_var = false;
        this.showTrackG_var = true;
        this.showScheG_var = false;
        this.geolocation.watchPosition().subscribe(function (data) {
            _this.latitude = data.coords.latitude;
            _this.longitude = data.coords.longitude;
        });
    }
    ThromdePage.prototype.ngOnInit = function () {
    };
    ThromdePage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    ThromdePage.prototype.showTrackC = function () {
        this.trackCSelectColor = "tertiary";
        this.scheCSelectColor = "medium";
        this.showTrackC_var = true;
        this.showScheC_var = false;
        console.log("showTrackCity");
    };
    ThromdePage.prototype.showScheC = function () {
        this.trackCSelectColor = "medium";
        this.scheCSelectColor = "tertiary";
        this.showTrackC_var = false;
        this.showScheC_var = true;
        console.log("showSchedule city");
    };
    ThromdePage.prototype.showTrackG = function () {
        this.trackGSelectColor = "tertiary";
        this.scheGSelectColor = "medium";
        this.showTrackG_var = true;
        this.showScheG_var = false;
    };
    ThromdePage.prototype.showScheG = function () {
        this.trackGSelectColor = "medium";
        this.scheGSelectColor = "tertiary";
        this.showTrackG_var = false;
        this.showScheG_var = true;
    };
    ThromdePage.prototype.goTrackCMap = function () {
        this.navCtrl.navigateForward('/trackcitybus/' + this.latitude + "/" + this.longitude);
    };
    ThromdePage.prototype.goTrackGMap = function () {
        this.navCtrl.navigateForward('/trackgarbagetruck/' + this.latitude + "/" + this.longitude);
    };
    ThromdePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thromde',
            template: __webpack_require__(/*! ./thromde.page.html */ "./src/app/thromde/thromde.page.html"),
            styles: [__webpack_require__(/*! ./thromde.page.scss */ "./src/app/thromde/thromde.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], ThromdePage);
    return ThromdePage;
}());



/***/ })

}]);
//# sourceMappingURL=thromde-thromde-module.js.map