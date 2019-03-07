(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["football-changlimithang-football-changlimithang-module"],{

/***/ "./src/app/football-changlimithang/football-changlimithang.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/football-changlimithang/football-changlimithang.module.ts ***!
  \***************************************************************************/
/*! exports provided: FootballChanglimithangPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballChanglimithangPageModule", function() { return FootballChanglimithangPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _football_changlimithang_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./football-changlimithang.page */ "./src/app/football-changlimithang/football-changlimithang.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _football_changlimithang_page__WEBPACK_IMPORTED_MODULE_5__["FootballChanglimithangPage"]
    }
];
var FootballChanglimithangPageModule = /** @class */ (function () {
    function FootballChanglimithangPageModule() {
    }
    FootballChanglimithangPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_football_changlimithang_page__WEBPACK_IMPORTED_MODULE_5__["FootballChanglimithangPage"]]
        })
    ], FootballChanglimithangPageModule);
    return FootballChanglimithangPageModule;
}());



/***/ }),

/***/ "./src/app/football-changlimithang/football-changlimithang.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/football-changlimithang/football-changlimithang.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n        <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n        <ion-back-button style=\"color:white;\"></ion-back-button>\n        <ion-title style=\"color:white;\">Football Changlimithang</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-tabs>\n        <ion-tab tab=\"status\">\n          <!-- &nbsp;&nbsp;&nbsp;&nbsp;<ion-text center>View Ground Status for This Week.</ion-text> -->\n        <ion-content overflow-scroll=\"false\">       \n          <ion-list>\n            <!-- <ion-item>\n              <ion-text>View Ground Status for This Week.</ion-text>\n            </ion-item>\n            <ion-item>\n            <ion-label>Today: </ion-label>\n            <ion-datetime [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime><br>\n          </ion-item> -->\n      <ion-item center button=\"true\" (click)=\"showChangFullMon()\"><span [(ngClass)]=\"monColor\">Monday</span>\n        <ion-datetime *ngIf=\"monDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>\n      </ion-item>\n        <div *ngIf=\"changFootballMon_var\">\n          <ion-list *ngFor='let data of changFootMonData'>\n            <ion-item *ngIf=\"data.mon8to10am==true\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label> \n            </ion-item>\n            <ion-item *ngIf=\"data.mon8to10am==false\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon10to12am==true\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon10to12am==false\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon12to2pm==true\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon12to2pm==false\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon2to4pm==true\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon2to4pm==false\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon4to6pm==true\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon4to6pm==false\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon6to8pm==true\" >\n              <ion-label >6:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon6to8pm==false\" >\n              <ion-label>6:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon8to10pm==true\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon8to10pm==false\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      <ion-item center button=\"true\" (click)=\"showChangFullTues()\"><span [(ngClass)]=\"tueColor\">Tuesday</span>\n        <ion-datetime *ngIf=\"tueDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>      \n      </ion-item>\n        <div *ngIf=\"changFootballTues_var\">\n          <ion-list *ngFor='let data of changFootTuesData'>\n            <ion-item *ngIf=\"data.tues8to10am==true\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label> \n            </ion-item>\n            <ion-item *ngIf=\"data.tues8to10am==false\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues10to12am==true\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues10to12am==false\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues12to2pm==true\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues12to2pm==false\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues2to4pm==true\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues2to4pm==false\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues4to6pm==true\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues4to6pm==false\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues6to8pm==true\" >\n              <ion-label >6:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.mon6to8pm==false\" >\n              <ion-label>6:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues8to10pm==true\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.tues8to10pm==false\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n      \n      <ion-item center button=\"true\" (click)=\"showChangFullWed()\"><span [(ngClass)]=\"wedColor\">Wednesday</span>\n        <ion-datetime *ngIf=\"wedDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>      \n      </ion-item>\n        <div *ngIf=\"changFootballWed_var\">\n          <ion-list *ngFor='let data of changFootWedData'>\n            <ion-item *ngIf=\"data.wed8to10am==true\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label> \n            </ion-item>\n            <ion-item *ngIf=\"data.wed8to10am==false\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed10to12am==true\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed10to12am==false\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed12to2pm==true\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed12to2pm==false\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed2to4pm==true\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed2to4pm==false\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed4to6pm==true\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed4to6pm==false\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed6to8pm==true\" >\n              <ion-label >6:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed6to8pm==false\" >\n              <ion-label>6:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed8to10pm==true\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.wed8to10pm==false\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n\n      <ion-item center button=\"true\" (click)=\"showChangFullThu()\"><span [(ngClass)]=\"thuColor\">Thursday</span>\n        <ion-datetime *ngIf=\"thuDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>      \n      </ion-item>\n        <div *ngIf=\"changFootballThu_var\">\n          <ion-list *ngFor='let data of changFootThuData'>\n            <ion-item *ngIf=\"data.thu8to10am==true\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label> \n            </ion-item>\n            <ion-item *ngIf=\"data.thu8to10am==false\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu10to12am==true\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu10to12am==false\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu12to2pm==true\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu12to2pm==false\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu2to4pm==true\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu2to4pm==false\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu4to6pm==true\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu4to6pm==false\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu6to8pm==true\" >\n              <ion-label >6:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu6to8pm==false\" >\n              <ion-label>6:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu8to10pm==true\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.thu8to10pm==false\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n\n      <ion-item center button=\"true\" (click)=\"showChangFullFri()\"><span [(ngClass)]=\"friColor\">Friday</span>\n        <ion-datetime *ngIf=\"friDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>      \n      </ion-item>\n        <div *ngIf=\"changFootballFri_var\">\n          <ion-list *ngFor='let data of changFootFriData'>\n            <ion-item *ngIf=\"data.fri8to10am==true\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label> \n            </ion-item>\n            <ion-item *ngIf=\"data.fri8to10am==false\" >\n              <ion-label>8:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri10to12am==true\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri10to12am==false\" >\n              <ion-label>10:00 am - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri12to2pm==true\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri12to2pm==false\" >\n              <ion-label>12:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri2to4pm==true\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri2to4pm==false\" >\n              <ion-label>2:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri4to6pm==true\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri4to6pm==false\" >\n              <ion-label>4:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri6to8pm==true\" >\n              <ion-label >6:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri6to8pm==false\" >\n              <ion-label>6:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri8to10pm==true\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"data.fri8to10pm==false\" >\n              <ion-label>8:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n            </ion-item>\n          </ion-list>\n        </div>\n    \n    <ion-item center button=\"true\" (click)=\"showChangFullSat()\"><span [(ngClass)]=\"satColor\">Saturday</span>\n      <ion-datetime *ngIf=\"satDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>    \n    </ion-item>\n      <div *ngIf=\"changFootballSat_var\">\n        <ion-list *ngFor='let data of changFootSatData'>\n          <ion-item *ngIf=\"data.sat8to10am==true\" >\n            <ion-label>8:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label> \n          </ion-item>\n          <ion-item *ngIf=\"data.sat8to10am==false\" >\n            <ion-label>8:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat10to12am==true\" >\n            <ion-label>10:00 am - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat10to12am==false\" >\n            <ion-label>10:00 am - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat12to2pm==true\" >\n            <ion-label>12:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat12to2pm==false\" >\n            <ion-label>12:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat2to4pm==true\" >\n            <ion-label>2:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat2to4pm==false\" >\n            <ion-label>2:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat4to6pm==true\" >\n            <ion-label>4:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat4to6pm==false\" >\n            <ion-label>4:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat6to8pm==true\" >\n            <ion-label >6:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat6to8pm==false\" >\n            <ion-label>6:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat8to10pm==true\" >\n            <ion-label>8:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sat8to10pm==false\" >\n            <ion-label>8:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n\n    <ion-item center button=\"true\" (click)=\"showChangFullSun()\"><span [(ngClass)]=\"sunColor\">Sunday</span>\n      <ion-datetime *ngIf=\"sunDate\" [disabled]=\"true\" displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\"></ion-datetime>    \n    </ion-item>\n      <div *ngIf=\"changFootballSun_var\">\n        <ion-list *ngFor='let data of changFootSunData'>\n          <ion-item *ngIf=\"data.sun8to10am==true\" >\n            <ion-label>8:00 am - 10:00 am : <span style=\"color: green;\">Available</span></ion-label> \n          </ion-item>\n          <ion-item *ngIf=\"data.sun8to10am==false\" >\n            <ion-label>8:00 am - 10:00 am : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun10to12am==true\" >\n            <ion-label>10:00 am - 12:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun10to12am==false\" >\n            <ion-label>10:00 am - 12:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun12to2pm==true\" >\n            <ion-label>12:00 pm - 2:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun12to2pm==false\" >\n            <ion-label>12:00 pm - 2:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun2to4pm==true\" >\n            <ion-label>2:00 pm - 4:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun2to4pm==false\" >\n            <ion-label>2:00 pm - 4:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun4to6pm==true\" >\n            <ion-label>4:00 pm - 6:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun4to6pm==false\" >\n            <ion-label>4:00 pm - 6:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun6to8pm==true\" >\n            <ion-label >6:00 pm - 8:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun6to8pm==false\" >\n            <ion-label>6:00 pm - 8:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun8to10pm==true\" >\n            <ion-label>8:00 pm - 10:00 pm : <span style=\"color: green;\">Available</span></ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"data.sun8to10pm==false\" >\n            <ion-label>8:00 pm - 10:00 pm : <span style=\"color: red;\">Booked</span></ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon (click)=\"callChang()\" name=\"call\" color=\"tertiary\" size=\"large\"></ion-icon>&nbsp;&nbsp;{{contact_no}}</ion-label>\n        </ion-item>\n    </ion-list>\n    <ion-grid>\n        <ion-row>\n        <div style=\"width:100%; text-align: center;color: rgb(58, 55, 55)\">Color Representation</div>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-icon name=\"square\" class=\"green\" size=\"small\"></ion-icon></ion-col>\n          <ion-col size=\"5\" style=\"color: grey\">This Week</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"3\"><ion-icon name=\"square\" class=\"blue\" size=\"small\"></ion-icon></ion-col>\n          <ion-col size=\"5\" style=\"color: grey\">Next Week</ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-content>\n  </ion-tab>\n  <ion-tab tab=\"price\">   \n    <ion-content overflow-scroll=\"false\">\n    <ion-list>\n        <ion-item>\n          <ion-grid class=\"textstyle\">\n            <ion-row>\n              <ion-col size=\"8\" text-wrap>\n                Weekends (day):                  \n              </ion-col>\n              <ion-col size=\"4\" text-wrap>\n                 Nu. {{price_weekend_day}}/-                \n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\" text-wrap>\n                 Weekends (night):                 \n              </ion-col>\n              <ion-col size=\"4\" text-wrap>\n                Nu. {{price_weekend_night}}/-                \n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\" text-wrap>\n                 Weekdays (day):                \n              </ion-col>\n              <ion-col size=\"4\" text-wrap>\n               Nu. {{price_weekdays_day}}/-                \n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\" text-wrap>\n                Weekdays (night):                 \n              </ion-col>\n              <ion-col size=\"4\" text-wrap>\n              Nu. {{price_weekdays_night}}/-                \n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\" text-wrap>\n                National Holiday (day):                 \n              </ion-col>\n              <ion-col size=\"4\" text-wrap>\n                Nu. {{price_nationalholiday_day}}/-                \n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\" text-wrap>\n                National Holiday (night):                  \n              </ion-col>\n              <ion-col size=\"4\" text-wrap>\n               Nu. {{price_nationalholiday_night}}/-                \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-tab>\n  <ion-tab-bar slot=\"top\">\n    <ion-tab-button tab=\"status\">\n      <ion-label style=\"font-size: 12pt;\" color=\"secondary\">Status</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"price\">\n      <ion-label style=\"font-size: 12pt;\" color=\"secondary\">Pricing</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/football-changlimithang/football-changlimithang.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/football-changlimithang/football-changlimithang.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textstyle {\n  font-size: 16px;\n  word-wrap: normal;\n  color: teal;\n  padding-bottom: 2px; }\n\n.green {\n  color: teal; }\n\n.blue {\n  color: orange; }\n"

/***/ }),

/***/ "./src/app/football-changlimithang/football-changlimithang.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/football-changlimithang/football-changlimithang.page.ts ***!
  \*************************************************************************/
/*! exports provided: FootballChanglimithangPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballChanglimithangPage", function() { return FootballChanglimithangPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var FootballChanglimithangPage = /** @class */ (function () {
    function FootballChanglimithangPage(fs, menu, navCtrl, callNumber, router, alertController) {
        this.fs = fs;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.router = router;
        this.alertController = alertController;
        this.date = new Date().toISOString();
        this.changFootballMon_var = false;
        this.changFootballTues_var = false;
        this.changFootballWed_var = false;
        this.changFootballThu_var = false;
        this.changFootballFri_var = false;
        this.changFootballSat_var = false;
        this.changFootballSun_var = false;
        this.changFootMonData = [];
        this.changFootTuesData = [];
        this.changFootWedData = [];
        this.changFootThuData = [];
        this.changFootFriData = [];
        this.changFootSatData = [];
        this.changFootSunData = [];
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
        this.changFootballPriceData = [];
        this.loadFromFirestoreMonday();
        this.loadFromFirestoreTuesday();
        this.loadFromFirestoreWednesday();
        this.loadFromFirestoreThursday();
        this.loadFromFirestoreFriday();
        this.loadFromFirestoreSaturday();
        this.loadFromFirestoreSunday();
        this.loadPriceDetail();
        this.getDay();
        // this.router.events.subscribe((e:any)=>
        // {
        //   if(e instanceof NavigationEnd)
        //   {
        //     this.loadData();
        //   }
        // })
    }
    FootballChanglimithangPage.prototype.getDay = function () {
        var currentDate = new Date();
        var weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        this.day = weekdays[currentDate.getDay()];
        console.log("Day: " + this.day);
        //this.day = "wednesday"
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
    FootballChanglimithangPage.prototype.ngOnInit = function () {
    };
    FootballChanglimithangPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    FootballChanglimithangPage.prototype.showChangFullMon = function () {
        this.checkRegisterStatus();
        this.changFootballTues_var = false;
        this.changFootballWed_var = false;
        this.changFootballThu_var = false;
        this.changFootballFri_var = false;
        this.changFootballSat_var = false;
        this.changFootballSun_var = false;
        if (this.changFootballMon_var == false) {
            this.changFootballMon_var = true;
        }
        else {
            this.changFootballMon_var = false;
        }
    };
    FootballChanglimithangPage.prototype.showChangFullTues = function () {
        this.checkRegisterStatus();
        this.changFootballMon_var = false;
        this.changFootballWed_var = false;
        this.changFootballThu_var = false;
        this.changFootballFri_var = false;
        this.changFootballSat_var = false;
        this.changFootballSun_var = false;
        if (this.changFootballTues_var == false) {
            this.changFootballTues_var = true;
        }
        else {
            this.changFootballTues_var = false;
        }
    };
    FootballChanglimithangPage.prototype.showChangFullWed = function () {
        this.checkRegisterStatus();
        console.log("wednesday");
        this.changFootballMon_var = false;
        this.changFootballTues_var = false;
        this.changFootballThu_var = false;
        this.changFootballFri_var = false;
        this.changFootballSat_var = false;
        this.changFootballSun_var = false;
        if (this.changFootballWed_var == false) {
            this.changFootballWed_var = true;
            console.log("wednesday true");
        }
        else {
            this.changFootballWed_var = false;
        }
    };
    FootballChanglimithangPage.prototype.showChangFullThu = function () {
        this.checkRegisterStatus();
        console.log("thursday");
        this.changFootballMon_var = false;
        this.changFootballTues_var = false;
        this.changFootballWed_var = false;
        this.changFootballFri_var = false;
        this.changFootballSat_var = false;
        this.changFootballSun_var = false;
        if (this.changFootballThu_var == false) {
            this.changFootballThu_var = true;
            console.log("thursday true");
        }
        else {
            this.changFootballThu_var = false;
        }
    };
    FootballChanglimithangPage.prototype.showChangFullFri = function () {
        this.checkRegisterStatus();
        console.log("friday");
        this.changFootballMon_var = false;
        this.changFootballTues_var = false;
        this.changFootballWed_var = false;
        this.changFootballThu_var = false;
        this.changFootballSat_var = false;
        this.changFootballSun_var = false;
        if (this.changFootballFri_var == false) {
            this.changFootballFri_var = true;
            console.log("friday true");
        }
        else {
            this.changFootballFri_var = false;
        }
    };
    FootballChanglimithangPage.prototype.showChangFullSat = function () {
        this.checkRegisterStatus();
        console.log("saturday");
        this.changFootballMon_var = false;
        this.changFootballTues_var = false;
        this.changFootballWed_var = false;
        this.changFootballThu_var = false;
        this.changFootballFri_var = false;
        this.changFootballSun_var = false;
        if (this.changFootballSat_var == false) {
            this.changFootballSat_var = true;
            console.log("saturday true");
        }
        else {
            this.changFootballSat_var = false;
        }
    };
    FootballChanglimithangPage.prototype.showChangFullSun = function () {
        this.checkRegisterStatus();
        console.log("sunday");
        this.changFootballMon_var = false;
        this.changFootballTues_var = false;
        this.changFootballWed_var = false;
        this.changFootballThu_var = false;
        this.changFootballFri_var = false;
        this.changFootballSat_var = false;
        if (this.changFootballSun_var == false) {
            this.changFootballSun_var = true;
            console.log("sunday true");
        }
        else {
            this.changFootballSun_var = false;
        }
    };
    FootballChanglimithangPage.prototype.loadFromFirestoreMonday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootMonData.push({
                    mon8to10am: doc.data().time_8to10am,
                    mon10to12am: doc.data().time_10to12am,
                    mon12to2pm: doc.data().time_12to2pm,
                    mon2to4pm: doc.data().time_2to4pm,
                    mon4to6pm: doc.data().time_4to6pm,
                    mon6to8pm: doc.data().time_6to8pm,
                    mon8to10pm: doc.data().time_8to10pm
                });
            });
        });
        console.log(this.changFootMonData);
    };
    FootballChanglimithangPage.prototype.loadFromFirestoreTuesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/tuesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootTuesData.push({
                    tues8to10am: doc.data().time_8to10am,
                    tues10to12am: doc.data().time_10to12am,
                    tues12to2pm: doc.data().time_12to2pm,
                    tues2to4pm: doc.data().time_2to4pm,
                    tues4to6pm: doc.data().time_4to6pm,
                    tues6to8pm: doc.data().time_6to8pm,
                    tues8to10pm: doc.data().time_8to10pm
                });
            });
        });
        console.log(this.changFootTuesData);
    };
    FootballChanglimithangPage.prototype.loadFromFirestoreWednesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/wednesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootWedData.push({
                    wed8to10am: doc.data().time_8to10am,
                    wed10to12am: doc.data().time_10to12am,
                    wed12to2pm: doc.data().time_12to2pm,
                    wed2to4pm: doc.data().time_2to4pm,
                    wed4to6pm: doc.data().time_4to6pm,
                    wed6to8pm: doc.data().time_6to8pm,
                    wed8to10pm: doc.data().time_8to10pm
                });
            });
        });
        console.log(this.changFootWedData);
    };
    FootballChanglimithangPage.prototype.loadFromFirestoreThursday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/thursday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootThuData.push({
                    thu8to10am: doc.data().time_8to10am,
                    thu10to12am: doc.data().time_10to12am,
                    thu12to2pm: doc.data().time_12to2pm,
                    thu2to4pm: doc.data().time_2to4pm,
                    thu4to6pm: doc.data().time_4to6pm,
                    thu6to8pm: doc.data().time_6to8pm,
                    thu8to10pm: doc.data().time_8to10pm
                });
            });
        });
        console.log(this.changFootFriData);
    };
    FootballChanglimithangPage.prototype.loadFromFirestoreFriday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/friday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootFriData.push({
                    fri8to10am: doc.data().time_8to10am,
                    fri10to12am: doc.data().time_10to12am,
                    fri12to2pm: doc.data().time_12to2pm,
                    fri2to4pm: doc.data().time_2to4pm,
                    fri4to6pm: doc.data().time_4to6pm,
                    fri6to8pm: doc.data().time_6to8pm,
                    fri8to10pm: doc.data().time_8to10pm
                });
            });
        });
        console.log(this.changFootFriData);
    };
    FootballChanglimithangPage.prototype.loadFromFirestoreSaturday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/saturday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootSatData.push({
                    sat8to10am: doc.data().time_8to10am,
                    sat10to12am: doc.data().time_10to12am,
                    sat12to2pm: doc.data().time_12to2pm,
                    sat2to4pm: doc.data().time_2to4pm,
                    sat4to6pm: doc.data().time_4to6pm,
                    sat6to8pm: doc.data().time_6to8pm,
                    sat8to10pm: doc.data().time_8to10pm
                });
            });
        });
        console.log(this.changFootFriData);
    };
    FootballChanglimithangPage.prototype.loadFromFirestoreSunday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/sunday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootSunData.push({
                    sun8to10am: doc.data().time_8to10am,
                    sun10to12am: doc.data().time_10to12am,
                    sun12to2pm: doc.data().time_12to2pm,
                    sun2to4pm: doc.data().time_2to4pm,
                    sun4to6pm: doc.data().time_4to6pm,
                    sun6to8pm: doc.data().time_6to8pm,
                    sun8to10pm: doc.data().time_8to10pm
                });
            });
        });
        console.log(this.changFootSunData);
    };
    FootballChanglimithangPage.prototype.loadPriceDetail = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').get().subscribe(function (res) {
            _this.changFootballPriceData.push({
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
        console.log(this.changFootballPriceData);
    };
    FootballChanglimithangPage.prototype.callChang = function () {
        this.callNumber.callNumber(this.contact_no.toString(), true);
    };
    FootballChanglimithangPage.prototype.checkRegisterStatus = function () {
        console.log("Here ");
        if (this.registeredStatus == false) {
            console.log("Not registered!");
            this.presentAlert();
        }
    };
    FootballChanglimithangPage.prototype.presentAlert = function () {
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
    FootballChanglimithangPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-football-changlimithang',
            template: __webpack_require__(/*! ./football-changlimithang.page.html */ "./src/app/football-changlimithang/football-changlimithang.page.html"),
            styles: [__webpack_require__(/*! ./football-changlimithang.page.scss */ "./src/app/football-changlimithang/football-changlimithang.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], FootballChanglimithangPage);
    return FootballChanglimithangPage;
}());



/***/ })

}]);
//# sourceMappingURL=football-changlimithang-football-changlimithang-module.js.map