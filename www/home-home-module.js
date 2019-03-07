(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n      <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n      <ion-back-button style=\"color:white;\"></ion-back-button>\n      <ion-title id=\"title\" style=\"color:white;\"><b>Thimphu Events</b></ion-title>\n      <!-- <ion-button (click)=\"admin()\"><p class=\"help\" style=\"color:white;\"><b>admin</b></p></ion-button> -->\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content no-padding style=\"text-align: center;\"><br><br>\n    <ion-grid text-wrap no-padding >\n        <ion-row class=\"row\">\n        <ion-col (click)=\"goMovies()\" class=\"col\" size=\"4\">\n            <img src=\"assets/img/movie3.jpg\" height=\"100%\" width=\"110%\">\n        </ion-col>\n        <ion-col (click)=\"goFootball()\" class=\"col\" size=\"4\" >\n            <img src=\"assets/img/football3.jpg\" height=\"100%\" width=\"110%\">\n        </ion-col>\n        <ion-col (click)=\"goNightLife()\" class=\"col\" size=\"4\">\n            <img src=\"assets/img/party3.jpg\" height=\"100%\" width=\"110%\">\n        </ion-col>\n        </ion-row>\n        <ion-row class=\"label\">\n        <ion-col style=\"color:#008080;\">Movies</ion-col>\n        <ion-col style=\"color:#008080;\">Football</ion-col>\n        <ion-col style=\"color:#008080;\">Night Life</ion-col>\n        </ion-row>\n        <ion-row class=\"row\">\n            <ion-col (click)=\"goMusicOrDance()\" class=\"col\" size=\"4\">\n                <img src=\"assets/img/enter3.jpg\" height=\"100%\" width=\"110%\">\n            \n            </ion-col>\n            <ion-col (click)=\"goReligious()\" class=\"col\" size=\"4\">\n                <img src=\"assets/img/religious3.jpg\" height=\"100%\" width=\"110%\">\n            \n            </ion-col>\n            <ion-col (click)=\"goNatFest()\" class=\"col\" size=\"4\">\n                <img src=\"assets/img/fest3.jpg\" height=\"100%\" width=\"110%\">\n                \n            </ion-col>\n        </ion-row>\n        <ion-row class=\"label\">\n            <ion-col style=\"color:#008080;\">Entertainment</ion-col>\n            <ion-col style=\"color:#008080;\">Religious</ion-col>\n            <ion-col style=\"color:#008080;\">Festival</ion-col>\n            </ion-row>\n        <ion-row class=\"row\">\n            <ion-col (click)=\"goSales()\" class=\"col\" size=\"4\">\n                <img src=\"assets/img/sales3.jpg\" height=\"100%\" width=\"110%\">\n                \n            </ion-col>\n            <ion-col (click)=\"goThromde()\" class=\"col\" size=\"4\">\n                <img src=\"assets/img/thromde3.jpg\" height=\"100%\" width=\"110%\">\n                \n            </ion-col>\n            <ion-col (click)=\"goOthers()\" class=\"col\" size=\"4\">\n                <img src=\"assets/img/other3.jpg\" height=\"100%\" width=\"110%\">\n                \n                </ion-col>\n            </ion-row>\n            <ion-row class=\"label\">\n            <ion-col style=\"color:#008080;\">Special Sales/Buy</ion-col>\n            <ion-col style=\"color:#008080;\">Thromde Services</ion-col>\n            <ion-col style=\"color:#008080;\">Others</ion-col>\n            </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-top: 0%; }\n\n.label {\n  margin-top: 0%;\n  color: #ee7f18; }\n"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
    }
    HomePage.prototype.goMovies = function () {
        this.navCtrl.navigateForward('/movies');
    };
    HomePage.prototype.goFootball = function () {
        this.navCtrl.navigateForward('/football');
    };
    HomePage.prototype.goNightLife = function () {
        this.navCtrl.navigateForward('/nightlife');
    };
    HomePage.prototype.goMusicOrDance = function () {
        this.navCtrl.navigateForward('/musicordance');
    };
    HomePage.prototype.goReligious = function () {
        this.navCtrl.navigateForward('/religious');
    };
    HomePage.prototype.goNatFest = function () {
        this.navCtrl.navigateForward('/nationalfest');
    };
    HomePage.prototype.goSales = function () {
        this.navCtrl.navigateForward('/sales');
    };
    HomePage.prototype.goThromde = function () {
        this.navCtrl.navigateForward('/thromde2');
    };
    HomePage.prototype.goOthers = function () {
        this.navCtrl.navigateForward('/others');
    };
    HomePage.prototype.admin = function () {
        this.navCtrl.navigateForward('/admin');
    };
    HomePage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map