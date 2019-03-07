(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["footbal-full-admin-footbal-full-admin-module"],{

/***/ "./src/app/footbal-full-admin/footbal-full-admin.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/footbal-full-admin/footbal-full-admin.module.ts ***!
  \*****************************************************************/
/*! exports provided: FootbalFullAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbalFullAdminPageModule", function() { return FootbalFullAdminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _footbal_full_admin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footbal-full-admin.page */ "./src/app/footbal-full-admin/footbal-full-admin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _footbal_full_admin_page__WEBPACK_IMPORTED_MODULE_5__["FootbalFullAdminPage"]
    }
];
var FootbalFullAdminPageModule = /** @class */ (function () {
    function FootbalFullAdminPageModule() {
    }
    FootbalFullAdminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_footbal_full_admin_page__WEBPACK_IMPORTED_MODULE_5__["FootbalFullAdminPage"]]
        })
    ], FootbalFullAdminPageModule);
    return FootbalFullAdminPageModule;
}());



/***/ }),

/***/ "./src/app/footbal-full-admin/footbal-full-admin.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/footbal-full-admin/footbal-full-admin.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n          <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n        <ion-back-button style=\"color:rgb(255, 255, 255);\"></ion-back-button>\n        <ion-title style=\"color:white;\"><b>Football Full Admin</b></ion-title>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <br><ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/monday')\">Monday</ion-button>\n      <div *ngIf=\"day=='/monday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_8to10am\" (ionChange)=\"changeStatus('time_8to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_10to12am\" (ionChange)=\"changeStatus('time_10to12am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_12to2pm\" (ionChange)=\"changeStatus('time_12to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_2to4pm\" (ionChange)=\"changeStatus('time_2to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_4to6pm\" (ionChange)=\"changeStatus('time_4to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_6to8pm\" (ionChange)=\"changeStatus('time_6to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"mon_8to10pm\" (ionChange)=\"changeStatus('time_8to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n    </div>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/tuesday')\">Tuesday</ion-button>\n      <div *ngIf=\"day=='/tuesday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_8to10am\" (ionChange)=\"changeStatus('time_8to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_10to12am\" (ionChange)=\"changeStatus('time_10to12am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_12to2pm\" (ionChange)=\"changeStatus('time_12to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_2to4pm\" (ionChange)=\"changeStatus('time_2to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_4to6pm\" (ionChange)=\"changeStatus('time_4to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_6to8pm\" (ionChange)=\"changeStatus('time_6to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"tues_8to10pm\" (ionChange)=\"changeStatus('time_8to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n        </div>\n  \n  <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/wednesday')\">Wednesday</ion-button>\n      <div *ngIf=\"day=='/wednesday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_8to10am\" (ionChange)=\"changeStatus('time_8to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_10to12am\" (ionChange)=\"changeStatus('time_10to12am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_12to2pm\" (ionChange)=\"changeStatus('time_12to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_2to4pm\" (ionChange)=\"changeStatus('time_2to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_4to6pm\" (ionChange)=\"changeStatus('time_4to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_6to8pm\" (ionChange)=\"changeStatus('time_6to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"wed_8to10pm\" (ionChange)=\"changeStatus('time_8to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>\n  \n  <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/thursday')\">Thursday</ion-button>\n      <div *ngIf=\"day=='/thursday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_8to10am\" (ionChange)=\"changeStatus('time_8to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_10to12am\" (ionChange)=\"changeStatus('time_10to12am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_12to2pm\" (ionChange)=\"changeStatus('time_12to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_2to4pm\" (ionChange)=\"changeStatus('time_2to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_4to6pm\" (ionChange)=\"changeStatus('time_4to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_6to8pm\" (ionChange)=\"changeStatus('time_6to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"thu_8to10pm\" (ionChange)=\"changeStatus('time_8to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>  \n\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/friday')\">Friday</ion-button>\n      <div *ngIf=\"day=='/friday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_8to10am\" (ionChange)=\"changeStatus('time_8to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_10to12am\" (ionChange)=\"changeStatus('time_10to12am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_12to2pm\" (ionChange)=\"changeStatus('time_12to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_2to4pm\" (ionChange)=\"changeStatus('time_2to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_4to6pm\" (ionChange)=\"changeStatus('time_4to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_6to8pm\" (ionChange)=\"changeStatus('time_6to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"fri_8to10pm\" (ionChange)=\"changeStatus('time_8to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>  \n\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/saturday')\">Saturday</ion-button>\n      <div *ngIf=\"day=='/saturday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_8to10am\" (ionChange)=\"changeStatus('time_8to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_10to12am\" (ionChange)=\"changeStatus('time_10to12am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_12to2pm\" (ionChange)=\"changeStatus('time_12to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_2to4pm\" (ionChange)=\"changeStatus('time_2to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_4to6pm\" (ionChange)=\"changeStatus('time_4to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_6to8pm\" (ionChange)=\"changeStatus('time_6to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sat_8to10pm\" (ionChange)=\"changeStatus('time_8to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>  \n\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"goDay('/sunday')\">Sunday</ion-button>\n      <div *ngIf=\"day=='/sunday'\">\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Turn Off For Whole Day:</strong> </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_all\" (ionFocus)=\"presentAlertConfirm()\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n\n        <ion-list>\n          <ion-item>\n            <ion-label>8:00 am - 10:00 am : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_8to10am\" (ionChange)=\"changeStatus('time_8to10am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>10:00 am - 12:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_10to12am\" (ionChange)=\"changeStatus('time_10to12am_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>12:00 pm - 2:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_12to2pm\" (ionChange)=\"changeStatus('time_12to2pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>2:00 pm - 4:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_2to4pm\" (ionChange)=\"changeStatus('time_2to4pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>4:00 pm - 6:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_4to6pm\" (ionChange)=\"changeStatus('time_4to6pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>6:00 pm - 8:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_6to8pm\" (ionChange)=\"changeStatus('time_6to8pm_arg',day)\"></ion-toggle>\n          </ion-item>\n          <ion-item>\n            <ion-label>8:00 pm - 10:00 pm : </ion-label>\n            <ion-toggle color=\"secondary\" [(ngModel)]=\"sun_8to10pm\" (ionChange)=\"changeStatus('time_8to10pm_arg',day)\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/footbal-full-admin/footbal-full-admin.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/footbal-full-admin/footbal-full-admin.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footbal-full-admin/footbal-full-admin.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/footbal-full-admin/footbal-full-admin.page.ts ***!
  \***************************************************************/
/*! exports provided: FootbalFullAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbalFullAdminPage", function() { return FootbalFullAdminPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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



var FootbalFullAdminPage = /** @class */ (function () {
    function FootbalFullAdminPage(fs, menu, alertController, loadingController) {
        this.fs = fs;
        this.menu = menu;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.time_all = true;
        this.changFootMonData = [];
        this.changFootTuesData = [];
        this.changFootWedData = [];
        this.changFootThuData = [];
        this.changFootFriData = [];
        this.changFootSatData = [];
        this.changFootSunData = [];
        //local variable. It is not for sending to firebase, it is only for storing from firebase and 
        //to show in client side
        this.mon_all = true;
        this.tues_all = true;
        this.wed_all = true;
        this.thu_all = true;
        this.fri_all = true;
        this.sat_all = true;
        this.sun_all = true;
        //this.presentLoading();
        this.loadFromFirestoreMonday();
        this.loadFromFirestoreTuesday();
        this.loadFromFirestoreWednesday();
        this.loadFromFirestoreThursday();
        this.loadFromFirestoreFriday();
        this.loadFromFirestoreSaturday();
        this.loadFromFirestoreSunday();
        //this.loadingController.dismiss();      
    }
    FootbalFullAdminPage.prototype.ngOnInit = function () {
    };
    FootbalFullAdminPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    FootbalFullAdminPage.prototype.goDay = function (day) {
        console.log("show day=" + day);
        this.day = day;
    };
    FootbalFullAdminPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            // message: 'Hellooo',
                            duration: 15000,
                            spinner: 'crescent',
                            cssClass: 'loaderClass'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FootbalFullAdminPage.prototype.presentAlertConfirm = function () {
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
    FootbalFullAdminPage.prototype.allToggle = function () {
        if (this.day == "/monday") {
            if (this.mon_all == true) {
                this.mon_8to10am = true;
                this.mon_10to12am = true;
                this.mon_12to2pm = true;
                this.mon_2to4pm = true;
                this.mon_4to6pm = true;
                this.mon_6to8pm = true;
                this.mon_8to10pm = true;
            }
            else {
                this.mon_8to10am = false;
                this.mon_10to12am = false;
                this.mon_12to2pm = false;
                this.mon_2to4pm = false;
                this.mon_4to6pm = false;
                this.mon_6to8pm = false;
                this.mon_8to10pm = false;
            }
        }
        else if (this.day == "/tuesday") {
            if (this.tues_all == true) {
                this.tues_8to10am = true;
                this.tues_10to12am = true;
                this.tues_12to2pm = true;
                this.tues_2to4pm = true;
                this.tues_4to6pm = true;
                this.tues_6to8pm = true;
                this.tues_8to10pm = true;
            }
            else {
                this.tues_8to10am = false;
                this.tues_10to12am = false;
                this.tues_12to2pm = false;
                this.tues_2to4pm = false;
                this.tues_4to6pm = false;
                this.tues_6to8pm = false;
                this.tues_8to10pm = false;
            }
        }
        else if (this.day == "/wednesday") {
            if (this.wed_all == true) {
                this.wed_8to10am = true;
                this.wed_10to12am = true;
                this.wed_12to2pm = true;
                this.wed_2to4pm = true;
                this.wed_4to6pm = true;
                this.wed_6to8pm = true;
                this.wed_8to10pm = true;
            }
            else {
                this.wed_8to10am = false;
                this.wed_10to12am = false;
                this.wed_12to2pm = false;
                this.wed_2to4pm = false;
                this.wed_4to6pm = false;
                this.wed_6to8pm = false;
                this.wed_8to10pm = false;
            }
        }
        else if (this.day == "/thursday") {
            if (this.thu_all == true) {
                this.thu_8to10am = true;
                this.thu_10to12am = true;
                this.thu_12to2pm = true;
                this.thu_2to4pm = true;
                this.thu_4to6pm = true;
                this.thu_6to8pm = true;
                this.thu_8to10pm = true;
            }
            else {
                this.thu_8to10am = false;
                this.thu_10to12am = false;
                this.thu_12to2pm = false;
                this.thu_2to4pm = false;
                this.thu_4to6pm = false;
                this.thu_6to8pm = false;
                this.thu_8to10pm = false;
            }
        }
        else if (this.day == "/friday") {
            if (this.fri_all == true) {
                this.fri_8to10am = true;
                this.fri_10to12am = true;
                this.fri_12to2pm = true;
                this.fri_2to4pm = true;
                this.fri_4to6pm = true;
                this.fri_6to8pm = true;
                this.fri_8to10pm = true;
            }
            else {
                this.fri_8to10am = false;
                this.fri_10to12am = false;
                this.fri_12to2pm = false;
                this.fri_2to4pm = false;
                this.fri_4to6pm = false;
                this.fri_6to8pm = false;
                this.fri_8to10pm = false;
            }
        }
        else if (this.day == "/saturday") {
            if (this.sat_all == true) {
                this.sat_8to10am = true;
                this.sat_10to12am = true;
                this.sat_12to2pm = true;
                this.sat_2to4pm = true;
                this.sat_4to6pm = true;
                this.sat_6to8pm = true;
                this.sat_8to10pm = true;
            }
            else {
                this.sat_8to10am = false;
                this.sat_10to12am = false;
                this.sat_12to2pm = false;
                this.sat_2to4pm = false;
                this.sat_4to6pm = false;
                this.sat_6to8pm = false;
                this.sat_8to10pm = false;
            }
        }
        else if (this.day == "/sunday") {
            if (this.sun_all == true) {
                this.sun_8to10am = true;
                this.sun_10to12am = true;
                this.sun_12to2pm = true;
                this.sun_2to4pm = true;
                this.sun_4to6pm = true;
                this.sun_6to8pm = true;
                this.sun_8to10pm = true;
            }
            else {
                this.sun_8to10am = false;
                this.sun_10to12am = false;
                this.sun_12to2pm = false;
                this.sun_2to4pm = false;
                this.sun_4to6pm = false;
                this.sun_6to8pm = false;
                this.sun_8to10pm = false;
            }
        }
    };
    FootbalFullAdminPage.prototype.changeStatus = function (time_status, day) {
        console.log("day selected=" + day);
        if (time_status == "time_8to10am_arg") {
            console.log(day + " 8 to 10 am");
            if (day == "/monday") {
                this.updateOnFirebase('time_8to10am_arg', this.mon_8to10am, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_8to10am_arg', this.tues_8to10am, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_8to10am_arg', this.wed_8to10am, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_8to10am_arg', this.thu_8to10am, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_8to10am_arg', this.fri_8to10am, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_8to10am_arg', this.sat_8to10am, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_8to10am_arg', this.sun_8to10am, day);
            }
        }
        else if (time_status == "time_10to12am_arg") {
            console.log(day + " 10 to 12 am");
            if (day == "/monday") {
                this.updateOnFirebase('time_10to12am_arg', this.mon_10to12am, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_10to12am_arg', this.tues_10to12am, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_10to12am_arg', this.wed_10to12am, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_10to12am_arg', this.thu_10to12am, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_10to12am_arg', this.fri_10to12am, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_10to12am_arg', this.sat_10to12am, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_10to12am_arg', this.sun_10to12am, day);
            }
        }
        else if (time_status == "time_12to2pm_arg") {
            console.log(day + " 12 to 2 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_12to2pm_arg', this.mon_12to2pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_12to2pm_arg', this.tues_12to2pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_12to2pm_arg', this.wed_12to2pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_12to2pm_arg', this.thu_12to2pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_12to2pm_arg', this.fri_12to2pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_12to2pm_arg', this.sat_12to2pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_12to2pm_arg', this.sun_12to2pm, day);
            }
        }
        else if (time_status == "time_2to4pm_arg") {
            console.log(day + " 2 to 4 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_2to4pm_arg', this.mon_2to4pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_2to4pm_arg', this.tues_2to4pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_2to4pm_arg', this.wed_2to4pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_2to4pm_arg', this.thu_2to4pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_2to4pm_arg', this.fri_2to4pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_2to4pm_arg', this.sat_2to4pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_2to4pm_arg', this.sun_2to4pm, day);
            }
        }
        else if (time_status == "time_4to6pm_arg") {
            console.log(day + " 4 to 6 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_4to6pm_arg', this.mon_4to6pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_4to6pm_arg', this.tues_4to6pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_4to6pm_arg', this.wed_4to6pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_4to6pm_arg', this.thu_4to6pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_4to6pm_arg', this.fri_4to6pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_4to6pm_arg', this.sat_4to6pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_4to6pm_arg', this.sun_4to6pm, day);
            }
        }
        else if (time_status == "time_6to8pm_arg") {
            console.log(day + " 6 to 8 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_6to8pm_arg', this.mon_6to8pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_6to8pm_arg', this.tues_6to8pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_6to8pm_arg', this.wed_6to8pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_6to8pm_arg', this.thu_6to8pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_6to8pm_arg', this.fri_6to8pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_6to8pm_arg', this.sat_6to8pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_6to8pm_arg', this.sun_6to8pm, day);
            }
        }
        else if (time_status == "time_8to10pm_arg") {
            console.log(day + " 8 to 10 pm");
            if (day == "/monday") {
                this.updateOnFirebase('time_8to10pm_arg', this.mon_8to10pm, day);
            }
            else if (day == "/tuesday") {
                this.updateOnFirebase('time_8to10pm_arg', this.tues_8to10pm, day);
            }
            else if (day == "/wednesday") {
                this.updateOnFirebase('time_8to10pm_arg', this.wed_8to10pm, day);
            }
            else if (day == "/thursday") {
                this.updateOnFirebase('time_8to10pm_arg', this.thu_8to10pm, day);
            }
            else if (day == "/friday") {
                this.updateOnFirebase('time_8to10pm_arg', this.fri_8to10pm, day);
            }
            else if (day == "/saturday") {
                this.updateOnFirebase('time_8to10pm_arg', this.sat_8to10pm, day);
            }
            else if (day == "/sunday") {
                this.updateOnFirebase('time_8to10pm_arg', this.sun_8to10pm, day);
            }
        }
    };
    FootbalFullAdminPage.prototype.updateOnFirebase = function (time_key, time_val, day) {
        //console.log(time_key);
        if (time_key == "time_8to10am_arg") {
            console.log("inside fs update" + day);
            this.fs.collection('/football').doc('Changlimithang_Full').collection("" + day).doc('time').update({
                time_8to10am: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_10to12am_arg") {
            this.fs.collection('/football').doc('Changlimithang_Full').collection("" + day).doc('time').update({
                time_10to12am: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_12to2pm_arg") {
            this.fs.collection('/football').doc('Changlimithang_Full').collection("" + day).doc('time').update({
                time_12to2pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_2to4pm_arg") {
            this.fs.collection('/football').doc('Changlimithang_Full').collection("" + day).doc('time').update({
                time_2to4pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_4to6pm_arg") {
            this.fs.collection('/football').doc('Changlimithang_Full').collection("" + day).doc('time').update({
                time_4to6pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_6to8pm_arg") {
            this.fs.collection('/football').doc('Changlimithang_Full').collection("" + day).doc('time').update({
                time_6to8pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
        else if (time_key == "time_8to10pm_arg") {
            this.fs.collection('/football').doc('Changlimithang_Full').collection("" + day).doc('time').update({
                time_8to10pm: time_val,
            }).then(function (data) {
                console.log(data);
            });
        }
    };
    FootbalFullAdminPage.prototype.loadFromFirestoreMonday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/monday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootMonData.push({
                    time_8to10am: doc.data().time_8to10am,
                    time_10to12am: doc.data().time_10to12am,
                    time_12to2pm: doc.data().time_12to2pm,
                    time_2to4pm: doc.data().time_2to4pm,
                    time_4to6pm: doc.data().time_4to6pm,
                    time_6to8pm: doc.data().time_6to8pm,
                    time_8to10pm: doc.data().time_8to10pm
                });
                _this.mon_8to10am = doc.data().time_8to10am;
                _this.mon_10to12am = doc.data().time_10to12am;
                _this.mon_12to2pm = doc.data().time_12to2pm;
                _this.mon_2to4pm = doc.data().time_2to4pm;
                _this.mon_4to6pm = doc.data().time_4to6pm;
                _this.mon_6to8pm = doc.data().time_6to8pm;
                _this.mon_8to10pm = doc.data().time_8to10pm;
            });
        });
        console.log(this.changFootMonData);
    };
    FootbalFullAdminPage.prototype.loadFromFirestoreTuesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/tuesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootTuesData.push({
                    time_8to10am: doc.data().time_8to10am,
                    time_10to12am: doc.data().time_10to12am,
                    time_12to2pm: doc.data().time_12to2pm,
                    time_2to4pm: doc.data().time_2to4pm,
                    time_4to6pm: doc.data().time_4to6pm,
                    time_6to8pm: doc.data().time_6to8pm,
                    time_8to10pm: doc.data().time_8to10pm
                });
                _this.tues_8to10am = doc.data().time_8to10am;
                _this.tues_10to12am = doc.data().time_10to12am;
                _this.tues_12to2pm = doc.data().time_12to2pm;
                _this.tues_2to4pm = doc.data().time_2to4pm;
                _this.tues_4to6pm = doc.data().time_4to6pm;
                _this.tues_6to8pm = doc.data().time_6to8pm;
                _this.tues_8to10pm = doc.data().time_8to10pm;
            });
        });
        console.log(this.changFootTuesData);
    };
    FootbalFullAdminPage.prototype.loadFromFirestoreWednesday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/wednesday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootWedData.push({
                    time_8to10am: doc.data().time_8to10am,
                    time_10to12am: doc.data().time_10to12am,
                    time_12to2pm: doc.data().time_12to2pm,
                    time_2to4pm: doc.data().time_2to4pm,
                    time_4to6pm: doc.data().time_4to6pm,
                    time_6to8pm: doc.data().time_6to8pm,
                    time_8to10pm: doc.data().time_8to10pm
                });
                _this.wed_8to10am = doc.data().time_8to10am;
                _this.wed_10to12am = doc.data().time_10to12am;
                _this.wed_12to2pm = doc.data().time_12to2pm;
                _this.wed_2to4pm = doc.data().time_2to4pm;
                _this.wed_4to6pm = doc.data().time_4to6pm;
                _this.wed_6to8pm = doc.data().time_6to8pm;
                _this.wed_8to10pm = doc.data().time_8to10pm;
            });
        });
        console.log(this.changFootWedData);
    };
    FootbalFullAdminPage.prototype.loadFromFirestoreThursday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/thursday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootThuData.push({
                    time_8to10am: doc.data().time_8to10am,
                    time_10to12am: doc.data().time_10to12am,
                    time_12to2pm: doc.data().time_12to2pm,
                    time_2to4pm: doc.data().time_2to4pm,
                    time_4to6pm: doc.data().time_4to6pm,
                    time_6to8pm: doc.data().time_6to8pm,
                    time_8to10pm: doc.data().time_8to10pm
                });
                _this.thu_8to10am = doc.data().time_8to10am;
                _this.thu_10to12am = doc.data().time_10to12am;
                _this.thu_12to2pm = doc.data().time_12to2pm;
                _this.thu_2to4pm = doc.data().time_2to4pm;
                _this.thu_4to6pm = doc.data().time_4to6pm;
                _this.thu_6to8pm = doc.data().time_6to8pm;
                _this.thu_8to10pm = doc.data().time_8to10pm;
            });
        });
        console.log(this.changFootThuData);
    };
    FootbalFullAdminPage.prototype.loadFromFirestoreFriday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/friday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootFriData.push({
                    time_8to10am: doc.data().time_8to10am,
                    time_10to12am: doc.data().time_10to12am,
                    time_12to2pm: doc.data().time_12to2pm,
                    time_2to4pm: doc.data().time_2to4pm,
                    time_4to6pm: doc.data().time_4to6pm,
                    time_6to8pm: doc.data().time_6to8pm,
                    time_8to10pm: doc.data().time_8to10pm
                });
                _this.fri_8to10am = doc.data().time_8to10am;
                _this.fri_10to12am = doc.data().time_10to12am;
                _this.fri_12to2pm = doc.data().time_12to2pm;
                _this.fri_2to4pm = doc.data().time_2to4pm;
                _this.fri_4to6pm = doc.data().time_4to6pm;
                _this.fri_6to8pm = doc.data().time_6to8pm;
                _this.fri_8to10pm = doc.data().time_8to10pm;
            });
        });
        console.log(this.changFootFriData);
    };
    FootbalFullAdminPage.prototype.loadFromFirestoreSaturday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/saturday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootSatData.push({
                    time_8to10am: doc.data().time_8to10am,
                    time_10to12am: doc.data().time_10to12am,
                    time_12to2pm: doc.data().time_12to2pm,
                    time_2to4pm: doc.data().time_2to4pm,
                    time_4to6pm: doc.data().time_4to6pm,
                    time_6to8pm: doc.data().time_6to8pm,
                    time_8to10pm: doc.data().time_8to10pm
                });
                _this.sat_8to10am = doc.data().time_8to10am;
                _this.sat_10to12am = doc.data().time_10to12am;
                _this.sat_12to2pm = doc.data().time_12to2pm;
                _this.sat_2to4pm = doc.data().time_2to4pm;
                _this.sat_4to6pm = doc.data().time_4to6pm;
                _this.sat_6to8pm = doc.data().time_6to8pm;
                _this.sat_8to10pm = doc.data().time_8to10pm;
            });
        });
        console.log(this.changFootSatData);
    };
    FootbalFullAdminPage.prototype.loadFromFirestoreSunday = function () {
        var _this = this;
        this.fs.collection('/football').doc('Changlimithang_Full').collection('/sunday').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.changFootSunData.push({
                    time_8to10am: doc.data().time_8to10am,
                    time_10to12am: doc.data().time_10to12am,
                    time_12to2pm: doc.data().time_12to2pm,
                    time_2to4pm: doc.data().time_2to4pm,
                    time_4to6pm: doc.data().time_4to6pm,
                    time_6to8pm: doc.data().time_6to8pm,
                    time_8to10pm: doc.data().time_8to10pm
                });
                _this.sun_8to10am = doc.data().time_8to10am;
                _this.sun_10to12am = doc.data().time_10to12am;
                _this.sun_12to2pm = doc.data().time_12to2pm;
                _this.sun_2to4pm = doc.data().time_2to4pm;
                _this.sun_4to6pm = doc.data().time_4to6pm;
                _this.sun_6to8pm = doc.data().time_6to8pm;
                _this.sun_8to10pm = doc.data().time_8to10pm;
            });
        });
        console.log(this.changFootSunData);
    };
    FootbalFullAdminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footbal-full-admin',
            template: __webpack_require__(/*! ./footbal-full-admin.page.html */ "./src/app/footbal-full-admin/footbal-full-admin.page.html"),
            styles: [__webpack_require__(/*! ./footbal-full-admin.page.scss */ "./src/app/footbal-full-admin/footbal-full-admin.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], FootbalFullAdminPage);
    return FootbalFullAdminPage;
}());



/***/ })

}]);
//# sourceMappingURL=footbal-full-admin-footbal-full-admin-module.js.map