(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["football-admin-football-admin-module"],{

/***/ "./src/app/football-admin/football-admin.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/football-admin/football-admin.module.ts ***!
  \*********************************************************/
/*! exports provided: FootballAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballAdminPageModule", function() { return FootballAdminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _football_admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./football-admin.page */ "./src/app/football-admin/football-admin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _football_admin_page__WEBPACK_IMPORTED_MODULE_5__["FootballAdminPage"]
    }
];
var FootballAdminPageModule = /** @class */ (function () {
    function FootballAdminPageModule() {
    }
    FootballAdminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_football_admin_page__WEBPACK_IMPORTED_MODULE_5__["FootballAdminPage"]]
        })
    ], FootballAdminPageModule);
    return FootballAdminPageModule;
}());



/***/ }),

/***/ "./src/app/football-admin/football-admin.page.html":
/*!*********************************************************!*\
  !*** ./src/app/football-admin/football-admin.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n        <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n      <ion-back-button style=\"color:rgb(255, 255, 255);\"></ion-back-button>\n      <ion-title style=\"color:white;\"><b>Football Admin</b></ion-title>\n    </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <br><br><br><br>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"viewStatus()\">View</ion-button>\n    <div>\n      <br><ion-button expand=\"full\" color=\"primary\" (click)=\"goAdminFullGround()\">Football Full Ground</ion-button><br>\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"goAdminFutsal()\">Futsal Ground</ion-button>\n    </div>\n    <div>\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"gomatch()\">Football match</ion-button>\n    </div> -->\n\n    <ion-list>\n        <ion-item class=\"contact-special\" button=\"true\" (click)=\"updateStatus()\">\n          <p>View</p>\n        </ion-item>\n        <ion-item class=\"contact-special\" button=\"true\" (click)=\"goAdminFullGround()\">\n          <p>Football Full Ground</p>\n        </ion-item>\n        <ion-item class=\"contact-special\" button=\"true\" (click)=\"goAdminFutsal()\">\n          <p>Futsal Ground</p>\n        </ion-item> \n        <ion-item class=\"contact-special\" button=\"true\" (click)=\"gomatch()\">\n            <p>Football match</p>\n          </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/football-admin/football-admin.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/football-admin/football-admin.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-special {\n  font-size: 16px;\n  word-wrap: normal;\n  color: teal;\n  padding-bottom: 2px; }\n"

/***/ }),

/***/ "./src/app/football-admin/football-admin.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/football-admin/football-admin.page.ts ***!
  \*******************************************************/
/*! exports provided: FootballAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballAdminPage", function() { return FootballAdminPage; });
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


var FootballAdminPage = /** @class */ (function () {
    function FootballAdminPage(navCtl, menu) {
        this.navCtl = navCtl;
        this.menu = menu;
        this.showGround_var = false;
    }
    FootballAdminPage.prototype.ngOnInit = function () {
    };
    FootballAdminPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    FootballAdminPage.prototype.updateStatus = function () {
        if (this.showGround_var == false) {
            this.showGround_var = true;
        }
        else {
            this.showGround_var = false;
        }
    };
    FootballAdminPage.prototype.goAdminFullGround = function () {
        this.navCtl.navigateForward('/footbalFullAdmin');
    };
    FootballAdminPage.prototype.goAdminFutsal = function () {
        this.navCtl.navigateForward('/footbalFutsalAdmin');
    };
    FootballAdminPage.prototype.gomatch = function () {
        this.navCtl.navigateForward('/footmatchadmin');
    };
    FootballAdminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-football-admin',
            template: __webpack_require__(/*! ./football-admin.page.html */ "./src/app/football-admin/football-admin.page.html"),
            styles: [__webpack_require__(/*! ./football-admin.page.scss */ "./src/app/football-admin/football-admin.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], FootballAdminPage);
    return FootballAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=football-admin-football-admin-module.js.map