(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["footbal-futsal-admin-footbal-futsal-admin-module"],{

/***/ "./src/app/footbal-futsal-admin/footbal-futsal-admin.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/footbal-futsal-admin/footbal-futsal-admin.module.ts ***!
  \*********************************************************************/
/*! exports provided: FootbalFutsalAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbalFutsalAdminPageModule", function() { return FootbalFutsalAdminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _footbal_futsal_admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footbal-futsal-admin.page */ "./src/app/footbal-futsal-admin/footbal-futsal-admin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _footbal_futsal_admin_page__WEBPACK_IMPORTED_MODULE_5__["FootbalFutsalAdminPage"]
    }
];
var FootbalFutsalAdminPageModule = /** @class */ (function () {
    function FootbalFutsalAdminPageModule() {
    }
    FootbalFutsalAdminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_footbal_futsal_admin_page__WEBPACK_IMPORTED_MODULE_5__["FootbalFutsalAdminPage"]]
        })
    ], FootbalFutsalAdminPageModule);
    return FootbalFutsalAdminPageModule;
}());



/***/ }),

/***/ "./src/app/footbal-futsal-admin/footbal-futsal-admin.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/footbal-futsal-admin/footbal-futsal-admin.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n        <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n        <ion-back-button style=\"color:rgb(255, 255, 255);\"></ion-back-button>\n        <ion-title style=\"color:white;\"><b>Futsal Admin</b></ion-title>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <br><ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/monday')\">Monday</ion-button>\n      <div *ngIf=\"day=='/monday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 9:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_8to9am\" (ionChange)=\"changeStatus('time_8to9am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_9to10am\" (ionChange)=\"changeStatus('time_9to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 11:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_10to11am\" (ionChange)=\"changeStatus('time_10to11am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>11:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_11to12pm\" (ionChange)=\"changeStatus('time_11to12pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 1:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_12to1pm\" (ionChange)=\"changeStatus('time_12to1pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>1:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_1to2pm\" (ionChange)=\"changeStatus('time_1to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 3:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_2to3pm\" (ionChange)=\"changeStatus('time_2to3pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>3:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_3to4pm\" (ionChange)=\"changeStatus('time_3to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 5:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_4to5pm\" (ionChange)=\"changeStatus('time_4to5pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>5:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_5to6pm\" (ionChange)=\"changeStatus('time_5to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 7:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_6to7pm\" (ionChange)=\"changeStatus('time_6to7pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>7:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_7to8pm\" (ionChange)=\"changeStatus('time_7to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 9:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_8to9pm\" (ionChange)=\"changeStatus('time_8to9pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_9to10pm\" (ionChange)=\"changeStatus('time_9to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n    </div>\n\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/tuesday')\">Tuesday</ion-button>\n    <div *ngIf=\"day=='/tuesday'\">\n      <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 9:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_8to9am\" (ionChange)=\"changeStatus('time_8to9am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_9to10am\" (ionChange)=\"changeStatus('time_9to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 11:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_10to11am\" (ionChange)=\"changeStatus('time_10to11am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>11:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_11to12pm\" (ionChange)=\"changeStatus('time_11to12pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 1:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_12to1pm\" (ionChange)=\"changeStatus('time_12to1pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>1:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_1to2pm\" (ionChange)=\"changeStatus('time_1to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 3:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_2to3pm\" (ionChange)=\"changeStatus('time_2to3pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>3:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_3to4pm\" (ionChange)=\"changeStatus('time_3to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 5:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_4to5pm\" (ionChange)=\"changeStatus('time_4to5pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>5:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_5to6pm\" (ionChange)=\"changeStatus('time_5to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 7:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_6to7pm\" (ionChange)=\"changeStatus('time_6to7pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>7:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_7to8pm\" (ionChange)=\"changeStatus('time_7to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 9:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_8to9pm\" (ionChange)=\"changeStatus('time_8to9pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_9to10pm\" (ionChange)=\"changeStatus('time_9to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>  \n    </div>\n  \n   <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/wednesday')\">Wednesday</ion-button>\n      <div *ngIf=\"day=='/wednesday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 9:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_8to9am\" (ionChange)=\"changeStatus('time_8to9am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_9to10am\" (ionChange)=\"changeStatus('time_9to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 11:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_10to11am\" (ionChange)=\"changeStatus('time_10to11am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>11:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_11to12pm\" (ionChange)=\"changeStatus('time_11to12pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 1:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_12to1pm\" (ionChange)=\"changeStatus('time_12to1pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>1:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_1to2pm\" (ionChange)=\"changeStatus('time_1to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 3:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_2to3pm\" (ionChange)=\"changeStatus('time_2to3pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>3:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_3to4pm\" (ionChange)=\"changeStatus('time_3to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 5:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_4to5pm\" (ionChange)=\"changeStatus('time_4to5pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>5:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_5to6pm\" (ionChange)=\"changeStatus('time_5to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 7:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_6to7pm\" (ionChange)=\"changeStatus('time_6to7pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>7:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_7to8pm\" (ionChange)=\"changeStatus('time_7to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 9:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_8to9pm\" (ionChange)=\"changeStatus('time_8to9pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_9to10pm\" (ionChange)=\"changeStatus('time_9to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n    </div>\n  \n    <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/thursday')\">Thursday</ion-button>\n      <div *ngIf=\"day=='/thursday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 9:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_8to9am\" (ionChange)=\"changeStatus('time_8to9am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_9to10am\" (ionChange)=\"changeStatus('time_9to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 11:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_10to11am\" (ionChange)=\"changeStatus('time_10to11am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>11:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_11to12pm\" (ionChange)=\"changeStatus('time_11to12pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 1:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_12to1pm\" (ionChange)=\"changeStatus('time_12to1pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>1:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_1to2pm\" (ionChange)=\"changeStatus('time_1to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 3:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_2to3pm\" (ionChange)=\"changeStatus('time_2to3pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>3:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_3to4pm\" (ionChange)=\"changeStatus('time_3to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 5:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_4to5pm\" (ionChange)=\"changeStatus('time_4to5pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>5:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_5to6pm\" (ionChange)=\"changeStatus('time_5to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 7:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_6to7pm\" (ionChange)=\"changeStatus('time_6to7pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>7:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_7to8pm\" (ionChange)=\"changeStatus('time_7to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 9:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_8to9pm\" (ionChange)=\"changeStatus('time_8to9pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_9to10pm\" (ionChange)=\"changeStatus('time_9to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n    </div> \n\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/friday')\">Friday</ion-button>\n        <div *ngIf=\"day=='/friday'\">\n          <ion-list>\n            <ion-item>\n              <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n            </ion-item>\n          </ion-list>\n\n          <ion-list>\n            <ion-item>\n              <ion-label>8:00 am - 9:00 am : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_8to9am\" (ionChange)=\"changeStatus('time_8to9am_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>9:00 am - 10:00 am : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_9to10am\" (ionChange)=\"changeStatus('time_9to10am_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>10:00 am - 11:00 am : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_10to11am\" (ionChange)=\"changeStatus('time_10to11am_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>11:00 am - 12:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_11to12pm\" (ionChange)=\"changeStatus('time_11to12pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>12:00 pm - 1:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_12to1pm\" (ionChange)=\"changeStatus('time_12to1pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>1:00 pm - 2:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_1to2pm\" (ionChange)=\"changeStatus('time_1to2pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>2:00 pm - 3:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_2to3pm\" (ionChange)=\"changeStatus('time_2to3pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>3:00 pm - 4:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_3to4pm\" (ionChange)=\"changeStatus('time_3to4pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>4:00 pm - 5:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_4to5pm\" (ionChange)=\"changeStatus('time_4to5pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>5:00 pm - 6:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_5to6pm\" (ionChange)=\"changeStatus('time_5to6pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>6:00 pm - 7:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_6to7pm\" (ionChange)=\"changeStatus('time_6to7pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>7:00 pm - 8:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_7to8pm\" (ionChange)=\"changeStatus('time_7to8pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>8:00 pm - 9:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_8to9pm\" (ionChange)=\"changeStatus('time_8to9pm_arg',day)\"></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>9:00 pm - 10:00 pm : </ion-label>\n              <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_9to10pm\" (ionChange)=\"changeStatus('time_9to10pm_arg',day)\"></ion-toggle>\n            </ion-item>\n          </ion-list>\n      </div>  \n\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/saturday')\">Saturday</ion-button>\n      <div *ngIf=\"day=='/saturday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 9:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_8to9am\" (ionChange)=\"changeStatus('time_8to9am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_9to10am\" (ionChange)=\"changeStatus('time_9to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 11:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_10to11am\" (ionChange)=\"changeStatus('time_10to11am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>11:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_11to12pm\" (ionChange)=\"changeStatus('time_11to12pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 1:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_12to1pm\" (ionChange)=\"changeStatus('time_12to1pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>1:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_1to2pm\" (ionChange)=\"changeStatus('time_1to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 3:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_2to3pm\" (ionChange)=\"changeStatus('time_2to3pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>3:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_3to4pm\" (ionChange)=\"changeStatus('time_3to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 5:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_4to5pm\" (ionChange)=\"changeStatus('time_4to5pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>5:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_5to6pm\" (ionChange)=\"changeStatus('time_5to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 7:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_6to7pm\" (ionChange)=\"changeStatus('time_6to7pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>7:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_7to8pm\" (ionChange)=\"changeStatus('time_7to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 9:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_8to9pm\" (ionChange)=\"changeStatus('time_8to9pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_9to10pm\" (ionChange)=\"changeStatus('time_9to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n    </div>    \n\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/sunday')\">Sunday</ion-button>\n      <div *ngIf=\"day=='/sunday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 9:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_8to9am\" (ionChange)=\"changeStatus('time_8to9am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_9to10am\" (ionChange)=\"changeStatus('time_9to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 11:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_10to11am\" (ionChange)=\"changeStatus('time_10to11am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>11:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_11to12pm\" (ionChange)=\"changeStatus('time_11to12pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 1:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_12to1pm\" (ionChange)=\"changeStatus('time_12to1pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>1:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_1to2pm\" (ionChange)=\"changeStatus('time_1to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 3:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_2to3pm\" (ionChange)=\"changeStatus('time_2to3pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>3:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_3to4pm\" (ionChange)=\"changeStatus('time_3to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 5:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_4to5pm\" (ionChange)=\"changeStatus('time_4to5pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>5:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_5to6pm\" (ionChange)=\"changeStatus('time_5to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 7:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_6to7pm\" (ionChange)=\"changeStatus('time_6to7pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>7:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_7to8pm\" (ionChange)=\"changeStatus('time_7to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 9:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_8to9pm\" (ionChange)=\"changeStatus('time_8to9pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>9:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_9to10pm\" (ionChange)=\"changeStatus('time_9to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n    </div> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/footbal-futsal-admin/footbal-futsal-admin.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/footbal-futsal-admin/footbal-futsal-admin.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footbal-futsal-admin/footbal-futsal-admin.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/footbal-futsal-admin/footbal-futsal-admin.page.ts ***!
  \*******************************************************************/
/*! exports provided: FootbalFutsalAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbalFutsalAdminPage", function() { return FootbalFutsalAdminPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
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



var FootbalFutsalAdminPage = /** @class */ (function () {
    function FootbalFutsalAdminPage(fs, menu, alertController) {
        this.fs = fs;
        this.menu = menu;
        this.alertController = alertController;
        this.time_all = true;
        this.changFutsalMonData = [];
        this.changFutsalTuesData = [];
        this.changFutsalWedData = [];
        this.changFutsalThuData = [];
        this.changFutsalFriData = [];
        this.changFutsalSatData = [];
        this.changFutsalSunData = [];
        this.mon_all = true;
        this.tues_all = true;
        this.wed_all = true;
        this.thu_all = true;
        this.fri_all = true;
        this.sat_all = true;
        this.sun_all = true;
        this.loadFromFirestoreMonday();
        this.loadFromFirestoreTuesday();
        this.loadFromFirestoreWednesday();
        this.loadFromFirestoreThursday();
        this.loadFromFirestoreFriday();
        this.loadFromFirestoreSaturday();
        this.loadFromFirestoreSunday();
    }
    FootbalFutsalAdminPage.prototype.ngOnInit = function () {
    };
    FootbalFutsalAdminPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    FootbalFutsalAdminPage.prototype.goDay = function (day) {
        console.log("show day=" + day);
        this.day = day;
    };
    FootbalFutsalAdminPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Changes will be made for all timing which cannot be reset. Are you sure to proceed?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        if (_this.day == '/monday') {
                                            if (_this.mon_all == true) {
                                                _this.mon_all = false;
                                                console.log("blah: false" + _this.mon_all);
                                            }
                                            else {
                                                _this.mon_all = true;
                                                console.log("blah: true" + _this.mon_all);
                                            }
                                        }
                                        else if (_this.day == '/tuesday') {
                                            if (_this.tues_all == true) {
                                                _this.tues_all = false;
                                            }
                                            else {
                                                _this.tues_all = true;
                                            }
                                        }
                                        else if (_this.day == '/wednesday') {
                                            if (_this.wed_all == true) {
                                                _this.wed_all = false;
                                            }
                                            else {
                                                _this.wed_all = true;
                                            }
                                        }
                                        else if (_this.day == '/thursday') {
                                            if (_this.thu_all == true) {
                                                _this.thu_all = false;
                                            }
                                            else {
                                                _this.thu_all = true;
                                            }
                                        }
                                        else if (_this.day == '/friday') {
                                            if (_this.fri_all == true) {
                                                _this.fri_all = false;
                                            }
                                            else {
                                                _this.fri_all = true;
                                            }
                                        }
                                        else if (_this.day == '/saturday') {
                                            if (_this.sat_all == true) {
                                                _this.sat_all = false;
                                            }
                                            else {
                                                _this.sat_all = true;
                                            }
                                        }
                                        else if (_this.day == '/sunday') {
                                            if (_this.sun_all == true) {
                                                _this.sun_all = false;
                                            }
                                            else {
                                                _this.sun_all = true;
                                            }
                                        }
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.allToggle();
                                    }
                                }
                            ]
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
    FootbalFutsalAdminPage.prototype.allToggle = function () {
        if (this.day == "/monday") {
            if (this.mon_all == true) {
                this.mon_8to9am = true;
                this.mon_9to10am = true;
                this.mon_10to11am = true;
                this.mon_11to12pm = true;
                this.mon_12to1pm = true;
                this.mon_1to2pm = true;
                this.mon_2to3pm = true;
                this.mon_3to4pm = true;
                this.mon_4to5pm = true;
                this.mon_5to6pm = true;
                this.mon_6to7pm = true;
                this.mon_7to8pm = true;
                this.mon_8to9pm = true;
                this.mon_9to10pm = true;
            }
            else {
                this.mon_8to9am = false;
                this.mon_9to10am = false;
                this.mon_10to11am = false;
                this.mon_11to12pm = false;
                this.mon_12to1pm = false;
                this.mon_1to2pm = false;
                this.mon_2to3pm = false;
                this.mon_3to4pm = false;
                this.mon_4to5pm = false;
                this.mon_5to6pm = false;
                this.mon_6to7pm = false;
                this.mon_7to8pm = false;
                this.mon_8to9pm = false;
                this.mon_9to10pm = false;
            }
        }
        else if (this.day == "/tuesday") {
            if (this.tues_all == true) {
                this.tues_8to9am = true;
                this.tues_9to10am = true;
                this.tues_10to11am = true;
                this.tues_11to12pm = true;
                this.tues_12to1pm = true;
                this.tues_1to2pm = true;
                this.tues_2to3pm = true;
                this.tues_3to4pm = true;
                this.tues_4to5pm = true;
                this.tues_5to6pm = true;
                this.tues_6to7pm = true;
                this.tues_7to8pm = true;
                this.tues_8to9pm = true;
                this.tues_9to10pm = true;
            }
            else {
                this.tues_8to9am = false;
                this.tues_9to10am = false;
                this.tues_10to11am = false;
                this.tues_11to12pm = false;
                this.tues_12to1pm = false;
                this.tues_1to2pm = false;
                this.tues_2to3pm = false;
                this.tues_3to4pm = false;
                this.tues_4to5pm = false;
                this.tues_5to6pm = false;
                this.tues_6to7pm = false;
                this.tues_7to8pm = false;
                this.tues_8to9pm = false;
                this.tues_9to10pm = false;
            }
        }
        else if (this.day == "/wednesday") {
            if (this.wed_all == true) {
                this.wed_8to9am = true;
                this.wed_9to10am = true;
                this.wed_10to11am = true;
                this.wed_11to12pm = true;
                this.wed_12to1pm = true;
                this.wed_1to2pm = true;
                this.wed_2to3pm = true;
                this.wed_3to4pm = true;
                this.wed_4to5pm = true;
                this.wed_5to6pm = true;
                this.wed_6to7pm = true;
                this.wed_7to8pm = true;
                this.wed_8to9pm = true;
                this.wed_9to10pm = true;
            }
            else {
                this.wed_8to9am = false;
                this.wed_9to10am = false;
                this.wed_10to11am = false;
                this.wed_11to12pm = false;
                this.wed_12to1pm = false;
                this.wed_1to2pm = false;
                this.wed_2to3pm = false;
                this.wed_3to4pm = false;
                this.wed_4to5pm = false;
                this.wed_5to6pm = false;
                this.wed_6to7pm = false;
                this.wed_7to8pm = false;
                this.wed_8to9pm = false;
                this.wed_9to10pm = false;
            }
        }
        else if (this.day == "/thursday") {
            if (this.thu_all == true) {
                this.thu_8to9am = true;
                this.thu_9to10am = true;
                this.thu_10to11am = true;
                this.thu_11to12pm = true;
                this.thu_12to1pm = true;
                this.thu_1to2pm = true;
                this.thu_2to3pm = true;
                this.thu_3to4pm = true;
                this.thu_4to5pm = true;
                this.thu_5to6pm = true;
                this.thu_6to7pm = true;
                this.thu_7to8pm = true;
                this.thu_8to9pm = true;
                this.thu_9to10pm = true;
            }
            else {
                this.thu_8to9am = false;
                this.thu_9to10am = false;
                this.thu_10to11am = false;
                this.thu_11to12pm = false;
                this.thu_12to1pm = false;
                this.thu_1to2pm = false;
                this.thu_2to3pm = false;
                this.thu_3to4pm = false;
                this.thu_4to5pm = false;
                this.thu_5to6pm = false;
                this.thu_6to7pm = false;
                this.thu_7to8pm = false;
                this.thu_8to9pm = false;
                this.thu_9to10pm = false;
            }
        }
        else if (this.day == "/friday") {
            if (this.fri_all == true) {
                this.fri_8to9am = true;
                this.fri_9to10am = true;
                this.fri_10to11am = true;
                this.fri_11to12pm = true;
                this.fri_12to1pm = true;
                this.fri_1to2pm = true;
                this.fri_2to3pm = true;
                this.fri_3to4pm = true;
                this.fri_4to5pm = true;
                this.fri_5to6pm = true;
                this.fri_6to7pm = true;
                this.fri_7to8pm = true;
                this.fri_8to9pm = true;
                this.fri_9to10pm = true;
            }
            else {
                this.fri_8to9am = false;
                this.fri_9to10am = false;
                this.fri_10to11am = false;
                this.fri_11to12pm = false;
                this.fri_12to1pm = false;
                this.fri_1to2pm = false;
                this.fri_2to3pm = false;
                this.fri_3to4pm = false;
                this.fri_4to5pm = false;
                this.fri_5to6pm = false;
                this.fri_6to7pm = false;
                this.fri_7to8pm = false;
                this.fri_8to9pm = false;
                this.fri_9to10pm = false;
            }
        }
        else if (this.day == "/saturday") {
            if (this.sat_all == true) {
                this.sat_8to9am = true;
                this.sat_9to10am = true;
                this.sat_10to11am = true;
                this.sat_11to12pm = true;
                this.sat_12to1pm = true;
                this.sat_1to2pm = true;
                this.sat_2to3pm = true;
                this.sat_3to4pm = true;
                this.sat_4to5pm = true;
                this.sat_5to6pm = true;
                this.sat_6to7pm = true;
                this.sat_7to8pm = true;
                this.sat_8to9pm = true;
                this.sat_9to10pm = true;
            }
            else {
                this.sat_8to9am = false;
                this.sat_9to10am = false;
                this.sat_10to11am = false;
                this.sat_11to12pm = false;
                this.sat_12to1pm = false;
                this.sat_1to2pm = false;
                this.sat_2to3pm = false;
                this.sat_3to4pm = false;
                this.sat_4to5pm = false;
                this.sat_5to6pm = false;
                this.sat_6to7pm = false;
                this.sat_7to8pm = false;
                this.sat_8to9pm = false;
                this.sat_9to10pm = false;
            }
        }
        else if (this.day == "/sunday") {
            if (this.sun_all == true) {
                this.sun_8to9am = true;
                this.sun_9to10am = true;
                this.sun_10to11am = true;
                this.sun_11to12pm = true;
                this.sun_12to1pm = true;
                this.sun_1to2pm = true;
                this.sun_2to3pm = true;
                this.sun_3to4pm = true;
                this.sun_4to5pm = true;
                this.sun_5to6pm = true;
                this.sun_6to7pm = true;
                this.sun_7to8pm = true;
                this.sun_8to9pm = true;
                this.sun_9to10pm = true;
            }
            else {
                this.sun_8to9am = false;
                this.sun_9to10am = false;
                this.sun_10to11am = false;
                this.sun_11to12pm = false;
                this.sun_12to1pm = false;
                this.sun_1to2pm = false;
                this.sun_2to3pm = false;
                this.sun_3to4pm = false;
                this.sun_4to5pm = false;
                this.sun_5to6pm = false;
                this.sun_6to7pm = false;
                this.sun_7to8pm = false;
                this.sun_8to9pm = false;
                this.sun_9to10pm = false;
            }
        }
    };
    FootbalFutsalAdminPage.prototype.changeStatus = function (time_status, day) {
        console.log("day selected=" + day);
        if (time_status == "time_8to9am_arg") {
            console.log(day + " 8 to 9 am");
            if (day == "/monday") {
                this.updateOnFirebase('time_8to9am_arg', this.mon_8to9am, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_8to9am_arg', this.tues_8to9am, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_8to9am_arg', this.wed_8to9am, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_8to9am_arg', this.thu_8to9am, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_8to9am_arg', this.fri_8to9am, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_8to9am_arg', this.sat_8to9am, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_8to9am_arg', this.sun_8to9am, day);
            }
        }
        else if (time_status == "time_9to10am_arg") {
            console.log(day + " 9 to 10 am");
            if (day == "/monday") {
                this.updateOnFirebase('time_9to10am_arg', this.mon_9to10am, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_9to10am_arg', this.tues_9to10am, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_9to10am_arg', this.wed_9to10am, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_9to10am_arg', this.thu_9to10am, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_9to10am_arg', this.fri_9to10am, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_9to10am_arg', this.sat_9to10am, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_9to10am_arg', this.sun_9to10am, day);
            }
        }
        else if (time_status == "time_10to11am_arg") {
            console.log(day + " 10 to 11 am");
            if (day == "/monday") {
                this.updateOnFirebase('time_10to11am_arg', this.mon_10to11am, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_10to11am_arg', this.tues_10to11am, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_10to11am_arg', this.wed_10to11am, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_10to11am_arg', this.thu_10to11am, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_10to11am_arg', this.fri_10to11am, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_10to11am_arg', this.sat_10to11am, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_10to11am_arg', this.sun_10to11am, day);
            }
        }
        else if (time_status == "time_11to12pm_arg") {
            console.log(day + " 11 to 12 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_11to12pm_arg', this.mon_11to12pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_11to12pm_arg', this.tues_11to12pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_11to12pm_arg', this.wed_11to12pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_11to12pm_arg', this.thu_11to12pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_11to12pm_arg', this.fri_11to12pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_11to12pm_arg', this.sat_11to12pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_11to12pm_arg', this.sun_11to12pm, day);
            }
        }
        else if (time_status == "time_12to1pm_arg") {
            console.log(day + " 12 to 1 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_12to1pm_arg', this.mon_12to1pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_12to1pm_arg', this.tues_12to1pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_12to1pm_arg', this.wed_12to1pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_12to1pm_arg', this.thu_12to1pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_12to1pm_arg', this.fri_12to1pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_12to1pm_arg', this.sat_12to1pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_12to1pm_arg', this.sun_12to1pm, day);
            }
        }
        else if (time_status == "time_1to2pm_arg") {
            console.log(day + " 1 to 2 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_1to2pm_arg', this.mon_1to2pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_1to2pm_arg', this.tues_1to2pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_1to2pm_arg', this.wed_1to2pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_1to2pm_arg', this.thu_1to2pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_1to2pm_arg', this.fri_1to2pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_1to2pm_arg', this.sat_1to2pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_1to2pm_arg', this.sun_1to2pm, day);
            }
        }
        else if (time_status == "time_1to2pm_arg") {
            console.log(day + " 1 to 2 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_1to2pm_arg', this.mon_1to2pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_1to2pm_arg', this.tues_1to2pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_1to2pm_arg', this.wed_1to2pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_1to2pm_arg', this.thu_1to2pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_1to2pm_arg', this.fri_1to2pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_1to2pm_arg', this.sat_1to2pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_1to2pm_arg', this.sun_1to2pm, day);
            }
        }
        else if (time_status == "time_2to3pm_arg") {
            console.log(day + " 2 to 3 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_2to3pm_arg', this.mon_2to3pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_2to3pm_arg', this.tues_2to3pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_2to3pm_arg', this.wed_2to3pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_2to3pm_arg', this.thu_2to3pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_2to3pm_arg', this.fri_2to3pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_2to3pm_arg', this.sat_2to3pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_2to3pm_arg', this.sun_2to3pm, day);
            }
        }
        else if (time_status == "time_3to4pm_arg") {
            console.log(day + " 3 to 4 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_3to4pm_arg', this.mon_3to4pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_3to4pm_arg', this.tues_3to4pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_3to4pm_arg', this.wed_3to4pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_3to4pm_arg', this.thu_3to4pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_3to4pm_arg', this.fri_3to4pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_3to4pm_arg', this.sat_3to4pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_3to4pm_arg', this.sun_3to4pm, day);
            }
        }
        else if (time_status == "time_4to5pm_arg") {
            console.log(day + " 4 to 5 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_4to5pm_arg', this.mon_4to5pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_4to5pm_arg', this.tues_4to5pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_4to5pm_arg', this.wed_4to5pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_4to5pm_arg', this.thu_4to5pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_4to5pm_arg', this.fri_4to5pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_4to5pm_arg', this.sat_4to5pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_4to5pm_arg', this.sun_4to5pm, day);
            }
        }
        else if (time_status == "time_5to6pm_arg") {
            console.log(day + " 5 to 6 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_5to6pm_arg', this.mon_5to6pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_5to6pm_arg', this.tues_5to6pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_5to6pm_arg', this.wed_5to6pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_5to6pm_arg', this.thu_5to6pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_5to6pm_arg', this.fri_5to6pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_5to6pm_arg', this.sat_5to6pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_5to6pm_arg', this.sun_5to6pm, day);
            }
        }
        else if (time_status == "time_6to7pm_arg") {
            console.log(day + " 6 to 7 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_6to7pm_arg', this.mon_6to7pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_6to7pm_arg', this.tues_6to7pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_6to7pm_arg', this.wed_6to7pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_6to7pm_arg', this.thu_6to7pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_6to7pm_arg', this.fri_6to7pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_6to7pm_arg', this.sat_6to7pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_6to7pm_arg', this.sun_6to7pm, day);
            }
        }
        else if (time_status == "time_7to8pm_arg") {
            console.log(day + " 7 to 8 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_7to8pm_arg', this.mon_7to8pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_7to8pm_arg', this.tues_7to8pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_7to8pm_arg', this.wed_7to8pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_7to8pm_arg', this.thu_7to8pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_7to8pm_arg', this.fri_7to8pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_7to8pm_arg', this.sat_7to8pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_7to8pm_arg', this.sun_7to8pm, day);
            }
        }
        else if (time_status == "time_8to9pm_arg") {
            console.log(day + " 8 to 9 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_8to9pm_arg', this.mon_8to9pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_8to9pm_arg', this.tues_8to9pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_8to9pm_arg', this.wed_8to9pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_8to9pm_arg', this.thu_8to9pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_8to9pm_arg', this.fri_8to9pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_8to9pm_arg', this.sat_8to9pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_8to9pm_arg', this.sun_8to9pm, day);
            }
        }
        else if (time_status == "time_9to10pm_arg") {
            console.log(day + " 9 to 10 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_9to10pm_arg', this.mon_9to10pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_9to10pm_arg', this.tues_9to10pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_9to10pm_arg', this.wed_9to10pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_9to10pm_arg', this.thu_9to10pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_9to10pm_arg', this.fri_9to10pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_9to10pm_arg', this.sat_9to10pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_9to10pm_arg', this.sun_9to10pm, day);
            }
        }
    };
    FootbalFutsalAdminPage.prototype.updateOnFirebase = function (time_key, time_val, day) {
        //console.log(time_key);
        if (time_key == "time_8to9am_arg") {
            console.log("inside fs update" + day);
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_8to9am: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_9to10am_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_9to10am: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_10to11am_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_10to11am: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_11to12pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_11to12pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_12to1pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_12to1pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_1to2pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_1to2pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_2to3pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_2to3pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_3to4pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_3to4pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_4to5pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_4to5pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_5to6pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_5to6pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_6to7pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_6to7pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_7to8pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_7to8pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_8to9pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_8to9pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_9to10pm_arg") {
            this.fs.collection('/football').doc('ChanglimithangFutsal').collection("" + day).doc('time').update({
                time_9to10pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
    };
    FootbalFutsalAdminPage.prototype.loadFromFirestoreMonday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/monday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalMonData.push({
                    time_8to9am: doc.data().time_8to9am,
                    time_9to10am: doc.data().time_9to10am,
                    time_10to11am: doc.data().time_10to11pm,
                    time_11to12pm: doc.data().time_11to12pm,
                    time_12to1pm: doc.data().time_12to1pm,
                    time_1to2pm: doc.data().time_1to2pm,
                    time_2to3pm: doc.data().time_2to3pm,
                    time_3to4pm: doc.data().time_3to4pm,
                    time_4to5pm: doc.data().time_4to5pm,
                    time_5to6pm: doc.data().time_5to6pm,
                    time_6to7pm: doc.data().time_6to7pm,
                    time_7to8pm: doc.data().time_7to8pm,
                    time_8to9pm: doc.data().time_8to9pm,
                    time_9to10pm: doc.data().time_9to10pm
                });
                _this.mon_8to9am = doc.data().time_8to9am;
                _this.mon_9to10am = doc.data().time_9to10am;
                _this.mon_10to11am = doc.data().time_10to11am;
                _this.mon_11to12pm = doc.data().time_11to12pm;
                _this.mon_12to1pm = doc.data().time_12to1pm;
                _this.mon_1to2pm = doc.data().time_1to2pm;
                _this.mon_2to3pm = doc.data().time_2to3pm;
                _this.mon_3to4pm = doc.data().time_3to4pm;
                _this.mon_4to5pm = doc.data().time_4to5pm;
                _this.mon_5to6pm = doc.data().time_5to6pm;
                _this.mon_6to7pm = doc.data().time_6to7pm;
                _this.mon_7to8pm = doc.data().time_7to8pm;
                _this.mon_8to9pm = doc.data().time_8to9pm;
                _this.mon_9to10pm = doc.data().time_9to10pm;
            });
        });
        console.log(this.changFutsalMonData);
    };
    FootbalFutsalAdminPage.prototype.loadFromFirestoreTuesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/tuesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalTuesData.push({
                    time_8to9am: doc.data().time_8to9am,
                    time_9to10am: doc.data().time_9to10am,
                    time_10to11am: doc.data().time_10to11pm,
                    time_11to12pm: doc.data().time_11to12pm,
                    time_12to1pm: doc.data().time_12to1pm,
                    time_1to2pm: doc.data().time_1to2pm,
                    time_2to3pm: doc.data().time_2to3pm,
                    time_3to4pm: doc.data().time_3to4pm,
                    time_4to5pm: doc.data().time_4to5pm,
                    time_5to6pm: doc.data().time_5to6pm,
                    time_6to7pm: doc.data().time_6to7pm,
                    time_7to8pm: doc.data().time_7to8pm,
                    time_8to9pm: doc.data().time_8to9pm,
                    time_9to10pm: doc.data().time_9to10pm
                });
                _this.tues_8to9am = doc.data().time_8to9am;
                _this.tues_9to10am = doc.data().time_9to10am;
                _this.tues_10to11am = doc.data().time_10to11am;
                _this.tues_11to12pm = doc.data().time_11to12pm;
                _this.tues_12to1pm = doc.data().time_12to1pm;
                _this.tues_1to2pm = doc.data().time_1to2pm;
                _this.tues_2to3pm = doc.data().time_2to3pm;
                _this.tues_3to4pm = doc.data().time_3to4pm;
                _this.tues_4to5pm = doc.data().time_4to5pm;
                _this.tues_5to6pm = doc.data().time_5to6pm;
                _this.tues_6to7pm = doc.data().time_6to7pm;
                _this.tues_7to8pm = doc.data().time_7to8pm;
                _this.tues_8to9pm = doc.data().time_8to9pm;
                _this.tues_9to10pm = doc.data().time_9to10pm;
            });
        });
        console.log(this.changFutsalTuesData);
    };
    FootbalFutsalAdminPage.prototype.loadFromFirestoreWednesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/wednesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalWedData.push({
                    time_8to9am: doc.data().time_8to9am,
                    time_9to10am: doc.data().time_9to10am,
                    time_10to11am: doc.data().time_10to11pm,
                    time_11to12pm: doc.data().time_11to12pm,
                    time_12to1pm: doc.data().time_12to1pm,
                    time_1to2pm: doc.data().time_1to2pm,
                    time_2to3pm: doc.data().time_2to3pm,
                    time_3to4pm: doc.data().time_3to4pm,
                    time_4to5pm: doc.data().time_4to5pm,
                    time_5to6pm: doc.data().time_5to6pm,
                    time_6to7pm: doc.data().time_6to7pm,
                    time_7to8pm: doc.data().time_7to8pm,
                    time_8to9pm: doc.data().time_8to9pm,
                    time_9to10pm: doc.data().time_9to10pm
                });
                _this.wed_8to9am = doc.data().time_8to9am;
                _this.wed_9to10am = doc.data().time_9to10am;
                _this.wed_10to11am = doc.data().time_10to11am;
                _this.wed_11to12pm = doc.data().time_11to12pm;
                _this.wed_12to1pm = doc.data().time_12to1pm;
                _this.wed_1to2pm = doc.data().time_1to2pm;
                _this.wed_2to3pm = doc.data().time_2to3pm;
                _this.wed_3to4pm = doc.data().time_3to4pm;
                _this.wed_4to5pm = doc.data().time_4to5pm;
                _this.wed_5to6pm = doc.data().time_5to6pm;
                _this.wed_6to7pm = doc.data().time_6to7pm;
                _this.wed_7to8pm = doc.data().time_7to8pm;
                _this.wed_8to9pm = doc.data().time_8to9pm;
                _this.wed_9to10pm = doc.data().time_9to10pm;
            });
        });
        console.log(this.changFutsalWedData);
    };
    FootbalFutsalAdminPage.prototype.loadFromFirestoreThursday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/thursday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalThuData.push({
                    time_8to9am: doc.data().time_8to9am,
                    time_9to10am: doc.data().time_9to10am,
                    time_10to11am: doc.data().time_10to11pm,
                    time_11to12pm: doc.data().time_11to12pm,
                    time_12to1pm: doc.data().time_12to1pm,
                    time_1to2pm: doc.data().time_1to2pm,
                    time_2to3pm: doc.data().time_2to3pm,
                    time_3to4pm: doc.data().time_3to4pm,
                    time_4to5pm: doc.data().time_4to5pm,
                    time_5to6pm: doc.data().time_5to6pm,
                    time_6to7pm: doc.data().time_6to7pm,
                    time_7to8pm: doc.data().time_7to8pm,
                    time_8to9pm: doc.data().time_8to9pm,
                    time_9to10pm: doc.data().time_9to10pm
                });
                _this.thu_8to9am = doc.data().time_8to9am;
                _this.thu_9to10am = doc.data().time_9to10am;
                _this.thu_10to11am = doc.data().time_10to11am;
                _this.thu_11to12pm = doc.data().time_11to12pm;
                _this.thu_12to1pm = doc.data().time_12to1pm;
                _this.thu_1to2pm = doc.data().time_1to2pm;
                _this.thu_2to3pm = doc.data().time_2to3pm;
                _this.thu_3to4pm = doc.data().time_3to4pm;
                _this.thu_4to5pm = doc.data().time_4to5pm;
                _this.thu_5to6pm = doc.data().time_5to6pm;
                _this.thu_6to7pm = doc.data().time_6to7pm;
                _this.thu_7to8pm = doc.data().time_7to8pm;
                _this.thu_8to9pm = doc.data().time_8to9pm;
                _this.thu_9to10pm = doc.data().time_9to10pm;
            });
        });
        console.log(this.changFutsalThuData);
    };
    FootbalFutsalAdminPage.prototype.loadFromFirestoreFriday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/friday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalFriData.push({
                    time_8to9am: doc.data().time_8to9am,
                    time_9to10am: doc.data().time_9to10am,
                    time_10to11am: doc.data().time_10to11pm,
                    time_11to12pm: doc.data().time_11to12pm,
                    time_12to1pm: doc.data().time_12to1pm,
                    time_1to2pm: doc.data().time_1to2pm,
                    time_2to3pm: doc.data().time_2to3pm,
                    time_3to4pm: doc.data().time_3to4pm,
                    time_4to5pm: doc.data().time_4to5pm,
                    time_5to6pm: doc.data().time_5to6pm,
                    time_6to7pm: doc.data().time_6to7pm,
                    time_7to8pm: doc.data().time_7to8pm,
                    time_8to9pm: doc.data().time_8to9pm,
                    time_9to10pm: doc.data().time_9to10pm
                });
                _this.fri_8to9am = doc.data().time_8to9am;
                _this.fri_9to10am = doc.data().time_9to10am;
                _this.fri_10to11am = doc.data().time_10to11am;
                _this.fri_11to12pm = doc.data().time_11to12pm;
                _this.fri_12to1pm = doc.data().time_12to1pm;
                _this.fri_1to2pm = doc.data().time_1to2pm;
                _this.fri_2to3pm = doc.data().time_2to3pm;
                _this.fri_3to4pm = doc.data().time_3to4pm;
                _this.fri_4to5pm = doc.data().time_4to5pm;
                _this.fri_5to6pm = doc.data().time_5to6pm;
                _this.fri_6to7pm = doc.data().time_6to7pm;
                _this.fri_7to8pm = doc.data().time_7to8pm;
                _this.fri_8to9pm = doc.data().time_8to9pm;
                _this.fri_9to10pm = doc.data().time_9to10pm;
            });
        });
        console.log(this.changFutsalFriData);
    };
    FootbalFutsalAdminPage.prototype.loadFromFirestoreSaturday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/saturday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalSatData.push({
                    time_8to9am: doc.data().time_8to9am,
                    time_9to10am: doc.data().time_9to10am,
                    time_10to11am: doc.data().time_10to11pm,
                    time_11to12pm: doc.data().time_11to12pm,
                    time_12to1pm: doc.data().time_12to1pm,
                    time_1to2pm: doc.data().time_1to2pm,
                    time_2to3pm: doc.data().time_2to3pm,
                    time_3to4pm: doc.data().time_3to4pm,
                    time_4to5pm: doc.data().time_4to5pm,
                    time_5to6pm: doc.data().time_5to6pm,
                    time_6to7pm: doc.data().time_6to7pm,
                    time_7to8pm: doc.data().time_7to8pm,
                    time_8to9pm: doc.data().time_8to9pm,
                    time_9to10pm: doc.data().time_9to10pm
                });
                _this.sat_8to9am = doc.data().time_8to9am;
                _this.sat_9to10am = doc.data().time_9to10am;
                _this.sat_10to11am = doc.data().time_10to11am;
                _this.sat_11to12pm = doc.data().time_11to12pm;
                _this.sat_12to1pm = doc.data().time_12to1pm;
                _this.sat_1to2pm = doc.data().time_1to2pm;
                _this.sat_2to3pm = doc.data().time_2to3pm;
                _this.sat_3to4pm = doc.data().time_3to4pm;
                _this.sat_4to5pm = doc.data().time_4to5pm;
                _this.sat_5to6pm = doc.data().time_5to6pm;
                _this.sat_6to7pm = doc.data().time_6to7pm;
                _this.sat_7to8pm = doc.data().time_7to8pm;
                _this.sat_8to9pm = doc.data().time_8to9pm;
                _this.sat_9to10pm = doc.data().time_9to10pm;
            });
        });
        console.log(this.changFutsalSatData);
    };
    FootbalFutsalAdminPage.prototype.loadFromFirestoreSunday = function () {
        var _this = this;
        this.fs.collection('/football').doc('ChanglimithangFutsal').collection('/sunday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFutsalSunData.push({
                    time_8to9am: doc.data().time_8to9am,
                    time_9to10am: doc.data().time_9to10am,
                    time_10to11am: doc.data().time_10to11pm,
                    time_11to12pm: doc.data().time_11to12pm,
                    time_12to1pm: doc.data().time_12to1pm,
                    time_1to2pm: doc.data().time_1to2pm,
                    time_2to3pm: doc.data().time_2to3pm,
                    time_3to4pm: doc.data().time_3to4pm,
                    time_4to5pm: doc.data().time_4to5pm,
                    time_5to6pm: doc.data().time_5to6pm,
                    time_6to7pm: doc.data().time_6to7pm,
                    time_7to8pm: doc.data().time_7to8pm,
                    time_8to9pm: doc.data().time_8to9pm,
                    time_9to10pm: doc.data().time_9to10pm
                });
                _this.sun_8to9am = doc.data().time_8to9am;
                _this.sun_9to10am = doc.data().time_9to10am;
                _this.sun_10to11am = doc.data().time_10to11am;
                _this.sun_11to12pm = doc.data().time_11to12pm;
                _this.sun_12to1pm = doc.data().time_12to1pm;
                _this.sun_1to2pm = doc.data().time_1to2pm;
                _this.sun_2to3pm = doc.data().time_2to3pm;
                _this.sun_3to4pm = doc.data().time_3to4pm;
                _this.sun_4to5pm = doc.data().time_4to5pm;
                _this.sun_5to6pm = doc.data().time_5to6pm;
                _this.sun_6to7pm = doc.data().time_6to7pm;
                _this.sun_7to8pm = doc.data().time_7to8pm;
                _this.sun_8to9pm = doc.data().time_8to9pm;
                _this.sun_9to10pm = doc.data().time_9to10pm;
            });
        });
        console.log(this.changFutsalSunData);
    };
    FootbalFutsalAdminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footbal-futsal-admin',
            template: __webpack_require__(/*! ./footbal-futsal-admin.page.html */ "./src/app/footbal-futsal-admin/footbal-futsal-admin.page.html"),
            styles: [__webpack_require__(/*! ./footbal-futsal-admin.page.scss */ "./src/app/footbal-futsal-admin/footbal-futsal-admin.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], FootbalFutsalAdminPage);
    return FootbalFutsalAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=footbal-futsal-admin-footbal-futsal-admin-module.js.map