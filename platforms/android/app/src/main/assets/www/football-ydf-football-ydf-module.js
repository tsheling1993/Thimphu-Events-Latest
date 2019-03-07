(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["football-ydf-football-ydf-module"],{

/***/ "./src/app/football-ydf/football-ydf.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/football-ydf/football-ydf.module.ts ***!
  \*****************************************************/
/*! exports provided: FootballYdfPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballYdfPageModule", function() { return FootballYdfPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _football_ydf_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./football-ydf.page */ "./src/app/football-ydf/football-ydf.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _football_ydf_page__WEBPACK_IMPORTED_MODULE_5__["FootballYdfPage"]
    }
];
var FootballYdfPageModule = /** @class */ (function () {
    function FootballYdfPageModule() {
    }
    FootballYdfPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_football_ydf_page__WEBPACK_IMPORTED_MODULE_5__["FootballYdfPage"]]
        })
    ], FootballYdfPageModule);
    return FootballYdfPageModule;
}());



/***/ }),

/***/ "./src/app/football-ydf/football-ydf.page.html":
/*!*****************************************************!*\
  !*** ./src/app/football-ydf/football-ydf.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-buttons>\n            <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n          <ion-back-button style=\"color:white;\"></ion-back-button>\n          <ion-title style=\"color:white;\">Futsal YDF</ion-title>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-tabs>\n        <ion-tab tab=\"status\">\n          <!-- &nbsp;&nbsp;&nbsp;&nbsp;<ion-text center>View Ground Status for This Week.</ion-text> -->\n          <ion-content overflow-scroll=\"false\">  \n          <ion-list>\n            <!-- <ion-item>\n              <ion-text>View Ground Status for This Week.</ion-text>\n            </ion-item>\n            <ion-item>\n              <ion-label>Today: </ion-label>\n              <ion-datetime [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime><br>\n            </ion-item> -->\n            <ion-item center button=\"true\" (click)=\"showChangFutsalMon()\"><span [(ngClass)]=\"monColor\">Monday</span>\n              <ion-datetime *ngIf=\"monDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>    \n            </ion-item>\n              <div *ngIf=\"changFutsalMon_var\">\n                <ion-list *ngFor='let data of changFutsalMonData'>\n                  <ion-item *ngIf=\"data.mon8to9am==true\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: green;\">Available</span></ion-label> \n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon8to9am==false\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon9to10am==true\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon9to10am==false\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon10to11am==true\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon10to11am==false\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon11to12pm==true\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon11to12pm==false\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon12to1pm==true\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon12to1pm==false\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon1to2pm==true\" >\n                    <ion-label >1:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon1to2pm==false\" >\n                    <ion-label>1:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon2to3pm==true\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon2to3pm==false\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon3to4pm==true\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon3to4pm==false\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon4to5pm==true\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon4to5pm==false\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon5to6pm==true\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon5to6pm==false\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon6to7pm==true\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon6to7pm==false\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon7to8pm==true\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon7to8pm==false\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon8to9pm==true\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon8to9pm==false\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon9to10pm==true\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.mon9to10pm==false\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>      \n                </ion-list>\n              </div>\n            \n            <ion-item center button=\"true\" (click)=\"showChangFutsalTues()\"><span [(ngClass)]=\"tueColor\">Tuesday</span>\n              <ion-datetime *ngIf=\"tueDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>    \n            </ion-item>\n            <div *ngIf=\"changFutsalTues_var\">\n                <ion-list *ngFor='let data of changFutsalTuesData'>\n                  <ion-item *ngIf=\"data.tues8to9am==true\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: green;\">Available</span></ion-label> \n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues8to9am==false\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues9to10am==true\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues9to10am==false\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues10to11am==true\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues10to11am==false\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues11to12pm==true\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues11to12pm==false\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues12to1pm==true\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues12to1pm==false\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues1to2pm==true\" >\n                    <ion-label >1:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues1to2pm==false\" >\n                    <ion-label>1:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues2to3pm==true\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues2to3pm==false\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues3to4pm==true\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues3to4pm==false\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues4to5pm==true\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues4to5pm==false\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues5to6pm==true\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues5to6pm==false\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues6to7pm==true\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues6to7pm==false\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues7to8pm==true\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues7to8pm==false\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues8to9pm==true\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues8to9pm==false\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues9to10pm==true\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.tues9to10pm==false\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>      \n                </ion-list>\n              </div>  \n        \n            <ion-item center button=\"true\" (click)=\"showChangFutsalWed()\"><span [(ngClass)]=\"wedColor\">Wednesday</span>\n              <ion-datetime *ngIf=\"wedDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>    \n            </ion-item>\n            <div *ngIf=\"changFutsalWed_var\">\n                <ion-list *ngFor='let data of changFutsalWedData'>\n                  <ion-item *ngIf=\"data.wed8to9am==true\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: green;\">Available</span></ion-label> \n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed8to9am==false\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed9to10am==true\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed9to10am==false\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed10to11am==true\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed10to11am==false\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed11to12pm==true\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed11to12pm==false\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed12to1pm==true\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed12to1pm==false\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed1to2pm==true\" >\n                    <ion-label >1:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed1to2pm==false\" >\n                    <ion-label>1:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed2to3pm==true\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed2to3pm==false\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed3to4pm==true\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed3to4pm==false\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed4to5pm==true\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed4to5pm==false\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed5to6pm==true\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed5to6pm==false\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed6to7pm==true\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed6to7pm==false\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed7to8pm==true\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed7to8pm==false\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed8to9pm==true\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed8to9pm==false\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed9to10pm==true\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.wed9to10pm==false\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>      \n                </ion-list>\n              </div>  \n        \n            <ion-item center button=\"true\" (click)=\"showChangFutsalThu()\"><span [(ngClass)]=\"thuColor\">Thursday</span>\n              <ion-datetime *ngIf=\"thuDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>    \n            </ion-item>\n            <div *ngIf=\"changFutsalThu_var\">\n                <ion-list *ngFor='let data of changFutsalThuData'>\n                  <ion-item *ngIf=\"data.thu8to9am==true\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: green;\">Available</span></ion-label> \n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu8to9am==false\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu9to10am==true\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu9to10am==false\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu10to11am==true\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu10to11am==false\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu11to12pm==true\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu11to12pm==false\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu12to1pm==true\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu12to1pm==false\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu1to2pm==true\" >\n                    <ion-label >1:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu1to2pm==false\" >\n                    <ion-label>1:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu2to3pm==true\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu2to3pm==false\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu3to4pm==true\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu3to4pm==false\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu4to5pm==true\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu4to5pm==false\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu5to6pm==true\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu5to6pm==false\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu6to7pm==true\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu6to7pm==false\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu7to8pm==true\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu7to8pm==false\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu8to9pm==true\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu8to9pm==false\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu9to10pm==true\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.thu9to10pm==false\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>      \n                </ion-list>\n              </div> \n              \n            <ion-item center button=\"true\" (click)=\"showChangFutsalFri()\"><span [(ngClass)]=\"friColor\">Friday</span>\n              <ion-datetime *ngIf=\"friDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>    \n            </ion-item>\n            <div *ngIf=\"changFutsalFri_var\">\n                <ion-list *ngFor='let data of changFutsalFriData'>\n                  <ion-item *ngIf=\"data.fri8to9am==true\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: green;\">Available</span></ion-label> \n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri8to9am==false\" >\n                    <ion-label>8:00 am - 9:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri9to10am==true\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri9to10am==false\" >\n                    <ion-label>9:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri10to11am==true\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri10to11am==false\" >\n                    <ion-label>10:00 am - 11:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri11to12pm==true\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri11to12pm==false\" >\n                    <ion-label>11:00 pm - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri12to1pm==true\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri12to1pm==false\" >\n                    <ion-label>12:00 pm - 1:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri1to2pm==true\" >\n                    <ion-label >1:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri1to2pm==false\" >\n                    <ion-label>1:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri2to3pm==true\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri2to3pm==false\" >\n                    <ion-label>2:00 pm - 3:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri3to4pm==true\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri3to4pm==false\" >\n                    <ion-label>3:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri4to5pm==true\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri4to5pm==false\" >\n                    <ion-label>4:00 pm - 5:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri5to6pm==true\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri5to6pm==false\" >\n                    <ion-label>5:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri6to7pm==true\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri6to7pm==false\" >\n                    <ion-label>6:00 pm - 7:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri7to8pm==true\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri7to8pm==false\" >\n                    <ion-label>7:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri8to9pm==true\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri8to9pm==false\" >\n                    <ion-label>8:00 pm - 9:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri9to10pm==true\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                  </ion-item>\n                  <ion-item *ngIf=\"data.fri9to10pm==false\" >\n                    <ion-label>9:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                  </ion-item>      \n                </ion-list>\n              </div> \n        \n              <ion-item center button=\"true\" (click)=\"showChangFutsalSat()\"><span [(ngClass)]=\"satColor\">Saturday</span>\n                <ion-datetime *ngIf=\"satDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>      \n              </ion-item>\n              <div *ngIf=\"changFutsalSat_var\">\n                  <ion-list *ngFor='let data of changFutsalSatData'>\n                    <ion-item *ngIf=\"data.sat8to9am==true\" >\n                      <ion-label>8:00 am - 9:00 am : <span style=\"color: green;\">Available</span></ion-label> \n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat8to9am==false\" >\n                      <ion-label>8:00 am - 9:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat9to10am==true\" >\n                      <ion-label>9:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat9to10am==false\" >\n                      <ion-label>9:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat10to11am==true\" >\n                      <ion-label>10:00 am - 11:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat10to11am==false\" >\n                      <ion-label>10:00 am - 11:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat11to12pm==true\" >\n                      <ion-label>11:00 pm - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat11to12pm==false\" >\n                      <ion-label>11:00 pm - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat12to1pm==true\" >\n                      <ion-label>12:00 pm - 1:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat12to1pm==false\" >\n                      <ion-label>12:00 pm - 1:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat1to2pm==true\" >\n                      <ion-label >1:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat1to2pm==false\" >\n                      <ion-label>1:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat2to3pm==true\" >\n                      <ion-label>2:00 pm - 3:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat2to3pm==false\" >\n                      <ion-label>2:00 pm - 3:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat3to4pm==true\" >\n                      <ion-label>3:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat3to4pm==false\" >\n                      <ion-label>3:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat4to5pm==true\" >\n                      <ion-label>4:00 pm - 5:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat4to5pm==false\" >\n                      <ion-label>4:00 pm - 5:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat5to6pm==true\" >\n                      <ion-label>5:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat5to6pm==false\" >\n                      <ion-label>5:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat6to7pm==true\" >\n                      <ion-label>6:00 pm - 7:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat6to7pm==false\" >\n                      <ion-label>6:00 pm - 7:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat7to8pm==true\" >\n                      <ion-label>7:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat7to8pm==false\" >\n                      <ion-label>7:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat8to9pm==true\" >\n                      <ion-label>8:00 pm - 9:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat8to9pm==false\" >\n                      <ion-label>8:00 pm - 9:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat9to10pm==true\" >\n                      <ion-label>9:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sat9to10pm==false\" >\n                      <ion-label>9:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>      \n                  </ion-list>\n                </div> \n        \n                <ion-item center button=\"true\" (click)=\"showChangFutsalSun()\"><span [(ngClass)]=\"sunColor\">Sunday</span>\n                  <ion-datetime *ngIf=\"sunDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>        \n                </ion-item>\n                <div *ngIf=\"changFutsalSun_var\">\n                  <ion-list *ngFor='let data of changFutsalSunData'>\n                    <ion-item *ngIf=\"data.sun8to9am==true\" >\n                      <ion-label>8:00 am - 9:00 am : <span style=\"color: green;\">Available</span></ion-label> \n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun8to9am==false\" >\n                      <ion-label>8:00 am - 9:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun9to10am==true\" >\n                      <ion-label>9:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun9to10am==false\" >\n                      <ion-label>9:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun10to11am==true\" >\n                      <ion-label>10:00 am - 11:00 am : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun10to11am==false\" >\n                      <ion-label>10:00 am - 11:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun11to12pm==true\" >\n                      <ion-label>11:00 pm - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun11to12pm==false\" >\n                      <ion-label>11:00 pm - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun12to1pm==true\" >\n                      <ion-label>12:00 pm - 1:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun12to1pm==false\" >\n                      <ion-label>12:00 pm - 1:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun1to2pm==true\" >\n                      <ion-label >1:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun1to2pm==false\" >\n                      <ion-label>1:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun2to3pm==true\" >\n                      <ion-label>2:00 pm - 3:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun2to3pm==false\" >\n                      <ion-label>2:00 pm - 3:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun3to4pm==true\" >\n                      <ion-label>3:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun3to4pm==false\" >\n                      <ion-label>3:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun4to5pm==true\" >\n                      <ion-label>4:00 pm - 5:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun4to5pm==false\" >\n                      <ion-label>4:00 pm - 5:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun5to6pm==true\" >\n                      <ion-label>5:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun5to6pm==false\" >\n                      <ion-label>5:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun6to7pm==true\" >\n                      <ion-label>6:00 pm - 7:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun6to7pm==false\" >\n                      <ion-label>6:00 pm - 7:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun7to8pm==true\" >\n                      <ion-label>7:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun7to8pm==false\" >\n                      <ion-label>7:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun8to9pm==true\" >  \n                      <ion-label>8:00 pm - 9:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun8to9pm==false\" >\n                      <ion-label>8:00 pm - 9:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun9to10pm==true\" >\n                      <ion-label>9:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n                    </ion-item>\n                    <ion-item *ngIf=\"data.sun9to10pm==false\" >\n                      <ion-label>9:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n                    </ion-item>      \n                  </ion-list>\n                </div>\n                <ion-item>\n                    <ion-label text-wrap>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon (click)=\"callChang()\" name=\"call\" color=\"tertiary\" size=\"large\"></ion-icon>&nbsp;&nbsp;{{contact_no}}</ion-label>\n                  </ion-item>\n            </ion-list>\n            <ion-grid>\n                <ion-row>\n                <div style=\"width:100%; text-align: center;color: rgb(58, 55, 55)\">Color Representation</div>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"3\"></ion-col>\n                  <ion-col size=\"3\"><ion-icon name=\"square\" class=\"green\" size=\"small\"></ion-icon></ion-col>\n                  <ion-col size=\"5\" style=\"color: grey\">This Week</ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"3\"></ion-col>\n                  <ion-col size=\"3\"><ion-icon name=\"square\" class=\"blue\" size=\"small\"></ion-icon></ion-col>\n                  <ion-col size=\"5\" style=\"color: grey\">Next Week</ion-col>\n                </ion-row>\n              </ion-grid>\n          </ion-content>\n          </ion-tab>\n          <ion-tab tab=\"price\">\n            <ion-content overflow-scroll=\"false\">\n            <ion-list>\n                <ion-item>\n                  <ion-grid class=\"textstyle\">\n                    <ion-row>\n                      <ion-col size=\"8\" text-wrap>\n                        Weekends (day):                  \n                      </ion-col>\n                      <ion-col size=\"4\" text-wrap>\n                         Nu. {{price_weekend_day}}/-                \n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"8\" text-wrap>\n                         Weekends (night):                 \n                      </ion-col>\n                      <ion-col size=\"4\" text-wrap>\n                        Nu. {{price_weekend_night}}/-                \n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"8\" text-wrap>\n                         Weekdays (day):                \n                      </ion-col>\n                      <ion-col size=\"4\" text-wrap>\n                       Nu. {{price_weekdays_day}}/-                \n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"8\" text-wrap>\n                        Weekdays (night):                 \n                      </ion-col>\n                      <ion-col size=\"4\" text-wrap>\n                      Nu. {{price_weekdays_night}}/-                \n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"8\" text-wrap>\n                        National Holiday (day):                 \n                      </ion-col>\n                      <ion-col size=\"4\" text-wrap>\n                        Nu. {{price_nationalholiday_day}}/-                \n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"8\" text-wrap>\n                        National Holiday (night):                  \n                      </ion-col>\n                      <ion-col size=\"4\" text-wrap>\n                       Nu. {{price_nationalholiday_night}}/-                \n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n              </ion-list>\n              </ion-content>\n          </ion-tab>\n            <ion-tab-bar slot=\"top\">\n              <ion-tab-button tab=\"status\">\n                <ion-label style=\"font-size: 12pt;\" color=\"secondary\">Status</ion-label>\n              </ion-tab-button>\n              <ion-tab-button tab=\"price\">\n                <ion-label style=\"font-size: 12pt;\" color=\"secondary\">Pricing</ion-label>\n              </ion-tab-button>\n            </ion-tab-bar>\n          </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/football-ydf/football-ydf.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/football-ydf/football-ydf.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textstyle {\n  font-size: 16px;\n  word-wrap: normal;\n  color: teal;\n  padding-bottom: 2px; }\n\n.green {\n  color: teal; }\n\n.blue {\n  color: orange; }\n"

/***/ }),

/***/ "./src/app/football-ydf/football-ydf.page.ts":
/*!***************************************************!*\
  !*** ./src/app/football-ydf/football-ydf.page.ts ***!
  \***************************************************/
/*! exports provided: FootballYdfPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballYdfPage", function() { return FootballYdfPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FootballYdfPage = /** @class */ (function () {
    function FootballYdfPage(fs, menu, navCtrl, callNumber, alertController) {
        this.fs = fs;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.date = new Date().toISOString();
        this.changFutsalMon_var = false;
        this.changFutsalTues_var = false;
        this.changFutsalWed_var = false;
        this.changFutsalThu_var = false;
        this.changFutsalFri_var = false;
        this.changFutsalSat_var = false;
        this.changFutsalSun_var = false;
        this.changFutsalMonData = [];
        this.changFutsalTuesData = [];
        this.changFutsalWedData = [];
        this.changFutsalThuData = [];
        this.changFutsalFriData = [];
        this.changFutsalSatData = [];
        this.changFutsalSunData = [];
        this.monColor = "green";
        this.tueColor = "green";
        this.wedColor = "green";
        this.thuColor = "green";
        this.friColor = "green";
        this.satColor = "green";
        this.sunColor = "green";
        //to show date on current day
        this.monDate = false;
        this.tueDate = false;
        this.wedDate = false;
        this.thuDate = false;
        this.friDate = false;
        this.satDate = false;
        this.sunDate = false;
        this.changFutsalPriceData = [];
        console.log("in constructor");
        this.loadFromFirestoreFutsalMonday();
        this.loadFromFirestoreFutsalTuesday();
        this.loadFromFirestoreFutsalWednesday();
        this.loadFromFirestoreFutsalThursday();
        this.loadFromFirestoreFutsalFriday();
        this.loadFromFirestoreFutsalSaturday();
        this.loadFromFirestoreFutsalSunday();
        this.loadPriceDetail();
        this.getDay();
    }
    FootballYdfPage.prototype.ngOnInit = function () {
    };
    FootballYdfPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    FootballYdfPage.prototype.getDay = function () {
        var currentDate = new Date();
        var weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        this.day = weekdays[currentDate.getDay()];
        console.log("Day: " + this.day);
        //this.day = "monday"
        //change color of dat text
        if (this.day == "monday") {
            this.monDate = true;
        }
        else if (this.day == "tuesday") {
            this.monColor = "blue";
            this.tueDate = true;
        }
        else if (this.day == "wednesday") {
            this.monColor = "blue";
            this.tueColor = "blue";
            this.wedDate = true;
        }
        else if (this.day == "thursday") {
            this.monColor = "blue";
            this.tueColor = "blue";
            this.wedColor = "blue";
            this.thuDate = true;
        }
        else if (this.day == "friday") {
            this.monColor = "blue";
            this.tueColor = "blue";
            this.wedColor = "blue";
            this.thuColor = "blue";
            this.friDate = true;
        }
        else if (this.day == "saturday") {
            this.monColor = "blue";
            this.tueColor = "blue";
            this.wedColor = "blue";
            this.thuColor = "blue";
            this.friColor = "blue";
            this.satDate = true;
        }
        else if (this.day == "sunday") {
            this.monColor = "blue";
            this.tueColor = "blue";
            this.wedColor = "blue";
            this.thuColor = "blue";
            this.friColor = "blue";
            this.satColor = "blue";
            this.sunDate = true;
        }
    };
    FootballYdfPage.prototype.showChangFutsalMon = function () {
        this.checkRegisterStatus();
        this.changFutsalTues_var = false;
        this.changFutsalWed_var = false;
        this.changFutsalThu_var = false;
        this.changFutsalFri_var = false;
        this.changFutsalSat_var = false;
        this.changFutsalSun_var = false;
        if (this.changFutsalMon_var == false) {
            this.changFutsalMon_var = true;
        }
        else {
            this.changFutsalMon_var = false;
        }
    };
    FootballYdfPage.prototype.showChangFutsalTues = function () {
        this.checkRegisterStatus();
        this.changFutsalMon_var = false;
        this.changFutsalWed_var = false;
        this.changFutsalThu_var = false;
        this.changFutsalFri_var = false;
        this.changFutsalSat_var = false;
        this.changFutsalSun_var = false;
        if (this.changFutsalTues_var == false) {
            this.changFutsalTues_var = true;
        }
        else {
            this.changFutsalTues_var = false;
        }
    };
    FootballYdfPage.prototype.showChangFutsalWed = function () {
        this.checkRegisterStatus();
        this.changFutsalMon_var = false;
        this.changFutsalTues_var = false;
        this.changFutsalThu_var = false;
        this.changFutsalFri_var = false;
        this.changFutsalSat_var = false;
        this.changFutsalSun_var = false;
        if (this.changFutsalWed_var == false) {
            this.changFutsalWed_var = true;
        }
        else {
            this.changFutsalWed_var = false;
        }
    };
    FootballYdfPage.prototype.showChangFutsalThu = function () {
        this.checkRegisterStatus();
        this.changFutsalMon_var = false;
        this.changFutsalTues_var = false;
        this.changFutsalWed_var = false;
        this.changFutsalFri_var = false;
        this.changFutsalSat_var = false;
        this.changFutsalSun_var = false;
        if (this.changFutsalThu_var == false) {
            this.changFutsalThu_var = true;
        }
        else {
            this.changFutsalThu_var = false;
        }
    };
    FootballYdfPage.prototype.showChangFutsalFri = function () {
        this.checkRegisterStatus();
        this.changFutsalMon_var = false;
        this.changFutsalTues_var = false;
        this.changFutsalWed_var = false;
        this.changFutsalThu_var = false;
        this.changFutsalSat_var = false;
        this.changFutsalSun_var = false;
        if (this.changFutsalFri_var == false) {
            this.changFutsalFri_var = true;
        }
        else {
            this.changFutsalFri_var = false;
        }
    };
    FootballYdfPage.prototype.showChangFutsalSat = function () {
        this.checkRegisterStatus();
        this.changFutsalMon_var = false;
        this.changFutsalTues_var = false;
        this.changFutsalWed_var = false;
        this.changFutsalThu_var = false;
        this.changFutsalFri_var = false;
        this.changFutsalSun_var = false;
        if (this.changFutsalSat_var == false) {
            this.changFutsalSat_var = true;
        }
        else {
            this.changFutsalSat_var = false;
        }
    };
    FootballYdfPage.prototype.showChangFutsalSun = function () {
        this.checkRegisterStatus();
        this.changFutsalMon_var = false;
        this.changFutsalTues_var = false;
        this.changFutsalWed_var = false;
        this.changFutsalThu_var = false;
        this.changFutsalFri_var = false;
        this.changFutsalSat_var = false;
        if (this.changFutsalSun_var == false) {
            this.changFutsalSun_var = true;
        }
        else {
            this.changFutsalSun_var = false;
        }
    };
    FootballYdfPage.prototype.loadFromFirestoreFutsalMonday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').collection('/monday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalMonData.push({
                    mon8to9am: doc.data().time_8to9am,
                    mon9to10am: doc.data().time_9to10am,
                    mon10to11am: doc.data().time_10to11am,
                    mon11to12pm: doc.data().time_11to12pm,
                    mon12to1pm: doc.data().time_12to1pm,
                    mon1to2pm: doc.data().time_1to2pm,
                    mon2to3pm: doc.data().time_2to3pm,
                    mon3to4pm: doc.data().time_3to4pm,
                    mon4to5pm: doc.data().time_4to5pm,
                    mon5to6pm: doc.data().time_5to6pm,
                    mon6to7pm: doc.data().time_6to7pm,
                    mon7to8pm: doc.data().time_7to8pm,
                    mon8to9pm: doc.data().time_8to9pm,
                    mon9to10pm: doc.data().time_9to10pm
                });
            });
        });
        console.log(this.changFutsalMonData);
    };
    FootballYdfPage.prototype.loadFromFirestoreFutsalTuesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').collection('/tuesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalTuesData.push({
                    tues8to9am: doc.data().time_8to9am,
                    tues9to10am: doc.data().time_9to10am,
                    tues10to11am: doc.data().time_10to11am,
                    tues11to12pm: doc.data().time_11to12pm,
                    tues12to1pm: doc.data().time_12to1pm,
                    tues1to2pm: doc.data().time_1to2pm,
                    tues2to3pm: doc.data().time_2to3pm,
                    tues3to4pm: doc.data().time_3to4pm,
                    tues4to5pm: doc.data().time_4to5pm,
                    tues5to6pm: doc.data().time_5to6pm,
                    tues6to7pm: doc.data().time_6to7pm,
                    tues7to8pm: doc.data().time_7to8pm,
                    tues8to9pm: doc.data().time_8to9pm,
                    tues9to10pm: doc.data().time_9to10pm
                });
            });
        });
        console.log(this.changFutsalTuesData);
    };
    FootballYdfPage.prototype.loadFromFirestoreFutsalWednesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').collection('/wednesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalWedData.push({
                    wed8to9am: doc.data().time_8to9am,
                    wed9to10am: doc.data().time_9to10am,
                    wed10to11am: doc.data().time_10to11am,
                    wed11to12pm: doc.data().time_11to12pm,
                    wed12to1pm: doc.data().time_12to1pm,
                    wed1to2pm: doc.data().time_1to2pm,
                    wed2to3pm: doc.data().time_2to3pm,
                    wed3to4pm: doc.data().time_3to4pm,
                    wed4to5pm: doc.data().time_4to5pm,
                    wed5to6pm: doc.data().time_5to6pm,
                    wed6to7pm: doc.data().time_6to7pm,
                    wed7to8pm: doc.data().time_7to8pm,
                    wed8to9pm: doc.data().time_8to9pm,
                    wed9to10pm: doc.data().time_9to10pm
                });
            });
        });
        console.log(this.changFutsalWedData);
    };
    FootballYdfPage.prototype.loadFromFirestoreFutsalThursday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').collection('/thursday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalThuData.push({
                    thu8to9am: doc.data().time_8to9am,
                    thu9to10am: doc.data().time_9to10am,
                    thu10to11am: doc.data().time_10to11am,
                    thu11to12pm: doc.data().time_11to12pm,
                    thu12to1pm: doc.data().time_12to1pm,
                    thu1to2pm: doc.data().time_1to2pm,
                    thu2to3pm: doc.data().time_2to3pm,
                    thu3to4pm: doc.data().time_3to4pm,
                    thu4to5pm: doc.data().time_4to5pm,
                    thu5to6pm: doc.data().time_5to6pm,
                    thu6to7pm: doc.data().time_6to7pm,
                    thu7to8pm: doc.data().time_7to8pm,
                    thu8to9pm: doc.data().time_8to9pm,
                    thu9to10pm: doc.data().time_9to10pm
                });
            });
        });
        console.log(this.changFutsalThuData);
    };
    FootballYdfPage.prototype.loadFromFirestoreFutsalFriday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').collection('/friday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalFriData.push({
                    fri8to9am: doc.data().time_8to9am,
                    fri9to10am: doc.data().time_9to10am,
                    fri10to11am: doc.data().time_10to11am,
                    fri11to12pm: doc.data().time_11to12pm,
                    fri12to1pm: doc.data().time_12to1pm,
                    fri1to2pm: doc.data().time_1to2pm,
                    fri2to3pm: doc.data().time_2to3pm,
                    fri3to4pm: doc.data().time_3to4pm,
                    fri4to5pm: doc.data().time_4to5pm,
                    fri5to6pm: doc.data().time_5to6pm,
                    fri6to7pm: doc.data().time_6to7pm,
                    fri7to8pm: doc.data().time_7to8pm,
                    fri8to9pm: doc.data().time_8to9pm,
                    fri9to10pm: doc.data().time_9to10pm
                });
            });
        });
        console.log(this.changFutsalFriData);
    };
    FootballYdfPage.prototype.loadFromFirestoreFutsalSaturday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').collection('/saturday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalSatData.push({
                    sat8to9am: doc.data().time_8to9am,
                    sat9to10am: doc.data().time_9to10am,
                    sat10to11am: doc.data().time_10to11am,
                    sat11to12pm: doc.data().time_11to12pm,
                    sat12to1pm: doc.data().time_12to1pm,
                    sat1to2pm: doc.data().time_1to2pm,
                    sat2to3pm: doc.data().time_2to3pm,
                    sat3to4pm: doc.data().time_3to4pm,
                    sat4to5pm: doc.data().time_4to5pm,
                    sat5to6pm: doc.data().time_5to6pm,
                    sat6to7pm: doc.data().time_6to7pm,
                    sat7to8pm: doc.data().time_7to8pm,
                    sat8to9pm: doc.data().time_8to9pm,
                    sat9to10pm: doc.data().time_9to10pm
                });
            });
        });
        console.log(this.changFutsalSatData);
    };
    FootballYdfPage.prototype.loadFromFirestoreFutsalSunday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').collection('/sunday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalSunData.push({
                    sun8to9am: doc.data().time_8to9am,
                    sun9to10am: doc.data().time_9to10am,
                    sun10to11am: doc.data().time_10to11am,
                    sun11to12pm: doc.data().time_11to12pm,
                    sun12to1pm: doc.data().time_12to1pm,
                    sun1to2pm: doc.data().time_1to2pm,
                    sun2to3pm: doc.data().time_2to3pm,
                    sun3to4pm: doc.data().time_3to4pm,
                    sun4to5pm: doc.data().time_4to5pm,
                    sun5to6pm: doc.data().time_5to6pm,
                    sun6to7pm: doc.data().time_6to7pm,
                    sun7to8pm: doc.data().time_7to8pm,
                    sun8to9pm: doc.data().time_8to9pm,
                    sun9to10pm: doc.data().time_9to10pm
                });
            });
        });
        console.log(this.changFutsalSunData);
    };
    FootballYdfPage.prototype.loadPriceDetail = function () {
        var _this = this;
        this.fs.collection('/football').doc('ydf').get().subscribe(function (res) {
            _this.changFutsalPriceData.push({
                contact_no: res.data().contact_no,
                price_nationalholiday_day: res.data().price_nationalholiday_day,
                price_nationalholiday_night: res.data().price_nationalholiday_night,
                price_weekend_day: res.data().price_weekend_day,
                price_weekend_night: res.data().price_weekend_night,
                price_weekdays_day: res.data().price_weekdays_day,
                price_weekdays_night: res.data().price_weekdays_night,
                registeredStatus: res.data().registeredStatus
            });
            _this.contact_no = res.data().contact_no;
            _this.price_nationalholiday_day = res.data().price_nationalholiday_day,
                _this.price_nationalholiday_night = res.data().price_nationalholiday_night,
                _this.price_weekend_day = res.data().price_weekend_day,
                _this.price_weekend_night = res.data().price_weekend_night,
                _this.price_weekdays_day = res.data().price_weekdays_day,
                _this.price_weekdays_night = res.data().price_weekdays_night,
                _this.registeredStatus = res.data().registeredStatus;
        });
        console.log(this.changFutsalPriceData);
    };
    FootballYdfPage.prototype.callChang = function () {
        this.callNumber.callNumber(this.contact_no.toString(), true);
    };
    FootballYdfPage.prototype.checkRegisterStatus = function () {
        console.log("Here ");
        if (this.registeredStatus == false) {
            console.log("Not registered!");
            this.presentAlert();
        }
    };
    FootballYdfPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Sorry',
                            //subHeader: '',
                            message: 'This ground is not registered with the app. Currently its data is not online.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FootballYdfPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-football-ydf',
            template: __webpack_require__(/*! ./football-ydf.page.html */ "./src/app/football-ydf/football-ydf.page.html"),
            styles: [__webpack_require__(/*! ./football-ydf.page.scss */ "./src/app/football-ydf/football-ydf.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], FootballYdfPage);
    return FootballYdfPage;
}());



/***/ })

}]);
//# sourceMappingURL=football-ydf-football-ydf-module.js.map