(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"],{

/***/ "./src/app/aboutus/aboutus.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_5__["AboutusPage"]
    }
];
var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_5__["AboutusPage"]]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());



/***/ }),

/***/ "./src/app/aboutus/aboutus.page.html":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-buttons>\n        <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n        <ion-back-button style=\"color:white;\"></ion-back-button>\n        <ion-title id=\"title\" style=\"color:white;\"><b>About us</b></ion-title>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-text color=\"dark\" style=\"font-family: 'Times New Roman', Times, serif;\">\n              <b>Vision</b>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text style=\"font-family: 'Times New Roman', Times, serif;\">\n                To deliver high quality informations and related services that will enhance the well being of the\n                Bhutanese people.\n            </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text color=\"dark\" style=\"font-family: 'Times New Roman', Times, serif;\">\n                <b>Mission</b>\n            </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text style=\"font-family: 'Times New Roman', Times, serif;\">\n              To be a number one chosen areas of information and related sevices.\n            </ion-text>\n          </ion-col>\n        </ion-row>\n        </ion-grid> -->\n        <ion-list>\n            <ion-item class=\"about-special\" button=\"true\" (click)=\"aboutApp()\">\n              <p>About this app</p>\n            </ion-item>\n            <!-- <div *ngIf=\"showaboutapp\">  -->\n            <div>\n            <ion-item style=\"color: black; background:#eeeeee;border-radius: 5px;font-family: 'Times New Roman', Times, serif;\" slot=\"fixed\">\n                Want to know what's happening in and around you? Experience convenience at your fingertips as ThimphuEvent Mobile App brings this information to your smartphone both android and IOS.\n                We are more than just a information provider. Discover our full network and range of services via our app!\n              </ion-item>\n              \n              <ion-item style=\"color: black; background:#eeeeee;border-radius: 5px;font-family: 'Times New Roman', Times, serif;\" slot=\"fixed\">\n                  \n                <ul>\n                    <span style=\"color: teal;\">\n                        <b>This app would be great for:</b>\n                    </span>\n                    <li>Knowing various events in Thimphu region</li>\n                    <li>Knowing the status of football ground booking</li>\n                    <li>Knowing the schedule and timing for city bus and garbage truck</li>\n                    <li>Platform for buying the second hand stuffs</li>\n                    <li>Tracking the city bus and Garbage Truck</li>\n                  </ul>\n                </ion-item>\n              </div>\n            <ion-item class=\"about-special\" button=\"true\" (click)=\"postDeveloper()\">\n              <p>Developers</p>\n            </ion-item>\n            <div *ngIf=\"showdeveloper\">\n            <ion-item style=\"color: black; background:#eeeeee;border-radius: 5px;font-family: 'Times New Roman', Times, serif;\" slot=\"fixed\">\n              Kinley Dorji<br>\n              kd77144@gmail.com<br>\n              17981803\n            </ion-item>\n            <ion-item style=\"color: black; background:#eeeeee;border-radius: 5px;font-family: 'Times New Roman', Times, serif;\" slot=\"fixed\">\n              Sonam Dorji<br> \n              sonamfechurdorji@gmail.com<br>\n              17285733\n            </ion-item>\n            <ion-item style=\"color: black; background:#eeeeee;border-radius: 5px;font-family: 'Times New Roman', Times, serif;\" slot=\"fixed\">\n              Tashi Wangchuk<br>\n              tashioongchuk@gmail.com<br>\n              17714389\n            </ion-item>\n          </div>\n        </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-special {\n  font-size: 18px;\n  word-wrap: normal;\n  color: teal; }\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusPage = /** @class */ (function () {
    function AboutusPage(menu) {
        this.menu = menu;
        this.showaboutapp = false;
        this.showdeveloper = false;
    }
    AboutusPage.prototype.ngOnInit = function () {
    };
    AboutusPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    AboutusPage.prototype.aboutApp = function () {
        this.showaboutapp = true;
        this.showdeveloper = false;
    };
    AboutusPage.prototype.postDeveloper = function () {
        this.showaboutapp = false;
        this.showdeveloper = true;
    };
    AboutusPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.page.html */ "./src/app/aboutus/aboutus.page.html"),
            styles: [__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/aboutus/aboutus.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], AboutusPage);
    return AboutusPage;
}());



/***/ })

}]);
//# sourceMappingURL=aboutus-aboutus-module.js.map