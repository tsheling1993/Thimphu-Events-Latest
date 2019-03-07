(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salesadmin-salesadmin-module"],{

/***/ "./src/app/salesadmin/salesadmin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/salesadmin/salesadmin.module.ts ***!
  \*************************************************/
/*! exports provided: SalesadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesadminPageModule", function() { return SalesadminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _salesadmin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salesadmin.page */ "./src/app/salesadmin/salesadmin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _salesadmin_page__WEBPACK_IMPORTED_MODULE_5__["SalesadminPage"]
    }
];
var SalesadminPageModule = /** @class */ (function () {
    function SalesadminPageModule() {
    }
    SalesadminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_salesadmin_page__WEBPACK_IMPORTED_MODULE_5__["SalesadminPage"]]
        })
    ], SalesadminPageModule);
    return SalesadminPageModule;
}());



/***/ }),

/***/ "./src/app/salesadmin/salesadmin.page.html":
/*!*************************************************!*\
  !*** ./src/app/salesadmin/salesadmin.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-back-button style=\"color:white;\"></ion-back-button>\n    <ion-title id=\"title\" style=\"color:white;\">Sales Admin</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-list>\n      <ion-item class=\"contact-special\" button=\"true\" (click)=\"goOffer()\">\n        <p>For offers upload</p>\n      </ion-item> \n      <ion-item class=\"contact-special\" button=\"true\" (click)=\"goUsedItem()\">\n          <p>For used Item upload</p>\n        </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/salesadmin/salesadmin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/salesadmin/salesadmin.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-style {\n  border-style: solid;\n  border-width: 1px;\n  border-color: teal; }\n\n.contact-special {\n  font-size: 16px;\n  word-wrap: normal;\n  color: teal;\n  padding-bottom: 2px; }\n"

/***/ }),

/***/ "./src/app/salesadmin/salesadmin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/salesadmin/salesadmin.page.ts ***!
  \***********************************************/
/*! exports provided: SalesadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesadminPage", function() { return SalesadminPage; });
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


var SalesadminPage = /** @class */ (function () {
    function SalesadminPage(navCtl, menu) {
        this.navCtl = navCtl;
        this.menu = menu;
    }
    SalesadminPage.prototype.ngOnInit = function () {
    };
    SalesadminPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    SalesadminPage.prototype.goOffer = function () {
        this.navCtl.navigateForward('/offer');
    };
    SalesadminPage.prototype.goUsedItem = function () {
        this.navCtl.navigateForward('/useditem');
    };
    SalesadminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-salesadmin',
            template: __webpack_require__(/*! ./salesadmin.page.html */ "./src/app/salesadmin/salesadmin.page.html"),
            styles: [__webpack_require__(/*! ./salesadmin.page.scss */ "./src/app/salesadmin/salesadmin.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], SalesadminPage);
    return SalesadminPage;
}());



/***/ })

}]);
//# sourceMappingURL=salesadmin-salesadmin-module.js.map