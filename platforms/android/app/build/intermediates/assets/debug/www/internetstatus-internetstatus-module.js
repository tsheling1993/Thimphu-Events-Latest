(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internetstatus-internetstatus-module"],{

/***/ "./src/app/internetstatus/internetstatus.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/internetstatus/internetstatus.module.ts ***!
  \*********************************************************/
/*! exports provided: InternetstatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetstatusPageModule", function() { return InternetstatusPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _internetstatus_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internetstatus.page */ "./src/app/internetstatus/internetstatus.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _internetstatus_page__WEBPACK_IMPORTED_MODULE_5__["InternetstatusPage"]
    }
];
var InternetstatusPageModule = /** @class */ (function () {
    function InternetstatusPageModule() {
    }
    InternetstatusPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_internetstatus_page__WEBPACK_IMPORTED_MODULE_5__["InternetstatusPage"]]
        })
    ], InternetstatusPageModule);
    return InternetstatusPageModule;
}());



/***/ }),

/***/ "./src/app/internetstatus/internetstatus.page.html":
/*!*********************************************************!*\
  !*** ./src/app/internetstatus/internetstatus.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-title><b style=\"color:white;\">No Internet connection</b></ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n        </ion-col>\n        <ion-col size=\"3\">\n            <ion-icon style=\"color:dodgerblue;height: 160px;width: 160px\" size=\"large\" name=\"wifi\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p style=\"color:red;font-family: 'Times New Roman', Times, serif;text-align: center;font-size: 18px\">\n            Sorry! You don't have an Internet connection or something went wrong...\n          </p>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/internetstatus/internetstatus.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/internetstatus/internetstatus.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/internetstatus/internetstatus.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/internetstatus/internetstatus.page.ts ***!
  \*******************************************************/
/*! exports provided: InternetstatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetstatusPage", function() { return InternetstatusPage; });
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


var InternetstatusPage = /** @class */ (function () {
    function InternetstatusPage(menu) {
        this.menu = menu;
    }
    InternetstatusPage.prototype.ngOnInit = function () {
    };
    InternetstatusPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    InternetstatusPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internetstatus',
            template: __webpack_require__(/*! ./internetstatus.page.html */ "./src/app/internetstatus/internetstatus.page.html"),
            styles: [__webpack_require__(/*! ./internetstatus.page.scss */ "./src/app/internetstatus/internetstatus.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], InternetstatusPage);
    return InternetstatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=internetstatus-internetstatus-module.js.map