(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["othersupdate-othersupdate-module"],{

/***/ "./src/app/othersupdate/othersupdate.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/othersupdate/othersupdate.module.ts ***!
  \*****************************************************/
/*! exports provided: OthersupdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersupdatePageModule", function() { return OthersupdatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _othersupdate_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./othersupdate.page */ "./src/app/othersupdate/othersupdate.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _othersupdate_page__WEBPACK_IMPORTED_MODULE_5__["OthersupdatePage"]
    }
];
var OthersupdatePageModule = /** @class */ (function () {
    function OthersupdatePageModule() {
    }
    OthersupdatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_othersupdate_page__WEBPACK_IMPORTED_MODULE_5__["OthersupdatePage"]]
        })
    ], OthersupdatePageModule);
    return OthersupdatePageModule;
}());



/***/ }),

/***/ "./src/app/othersupdate/othersupdate.page.html":
/*!*****************************************************!*\
  !*** ./src/app/othersupdate/othersupdate.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-back-button style=\"color:white;\"></ion-back-button>\n    <ion-title id=\"title\" style=\"color:white;\">Others Update</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor='let data of rData'>\n    <ion-row>\n        <ion-col size=\"6\">\n            {{data.title}}\n        </ion-col>\n        <ion-col size=\"3\">\n            <ion-button class=\"btnstyle\" (click)=\"goDelete(data.title)\" color=\"danger\">Delete</ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n            <ion-button class=\"btnstyle\" (click)=\"goEdit(data.title)\" color=\"secondary\">Edit</ion-button>\n        </ion-col>\n    </ion-row>   \n</ion-list>\n<p button=\"true\" (click)=\"goAddMore()\" style=\"color:dodgerblue\">Add more...</p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/othersupdate/othersupdate.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/othersupdate/othersupdate.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/othersupdate/othersupdate.page.ts":
/*!***************************************************!*\
  !*** ./src/app/othersupdate/othersupdate.page.ts ***!
  \***************************************************/
/*! exports provided: OthersupdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersupdatePage", function() { return OthersupdatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
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




var OthersupdatePage = /** @class */ (function () {
    function OthersupdatePage(fs, altCtl, navCtl, datePicker, menu, loadingController) {
        this.fs = fs;
        this.altCtl = altCtl;
        this.navCtl = navCtl;
        this.datePicker = datePicker;
        this.menu = menu;
        this.loadingController = loadingController;
        this.rData = [];
        this.loadData();
    }
    OthersupdatePage.prototype.ngOnInit = function () {
        //for retriving the entertainment data from the database
    };
    OthersupdatePage.prototype.loadData = function () {
        var _this = this;
        this.presentLoading();
        this.fs.collection('/t_other', function (ref) { return ref.orderBy('date', 'desc'); }).get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.rData.push({
                    date: doc.data().date,
                    title: doc.data().title,
                    time: doc.data().time,
                    venue: doc.data().venue,
                    detail: doc.data().detail,
                });
                if (_this.rData) {
                    console.log("up");
                    _this.loadingController.dismiss();
                }
            });
        });
        console.log(this.rData);
    };
    OthersupdatePage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    OthersupdatePage.prototype.goAddMore = function () {
        this.navCtl.navigateForward('/otheradmin');
    };
    OthersupdatePage.prototype.alert = function (header, message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtl.create({
                            header: header,
                            message: message,
                            cssClass: 'ok',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    //for deleting the movie item
    OthersupdatePage.prototype.goDelete = function (tilte) {
        this.presentAlertConfirm(tilte);
    };
    OthersupdatePage.prototype.deleteSure = function (tilte) {
        var _this = this;
        var basePath = "/t_other";
        this.fs.collection("" + basePath).doc("" + tilte).delete().then(function (data) {
            _this.alert("For Information", "Deletion successful");
            _this.navCtl.navigateForward('/others');
        });
    };
    //for updating the item
    OthersupdatePage.prototype.goEdit = function (title) {
        console.log(title);
        this.navCtl.navigateForward('/othersedit/' + title);
    };
    OthersupdatePage.prototype.presentAlertConfirm = function (tilte) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtl.create({
                            header: 'Confirm!',
                            message: 'Are you sure you want to delete?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.deleteSure(tilte);
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
    OthersupdatePage.prototype.presentLoading = function () {
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
    OthersupdatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-othersupdate',
            template: __webpack_require__(/*! ./othersupdate.page.html */ "./src/app/othersupdate/othersupdate.page.html"),
            styles: [__webpack_require__(/*! ./othersupdate.page.scss */ "./src/app/othersupdate/othersupdate.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], OthersupdatePage);
    return OthersupdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=othersupdate-othersupdate-module.js.map