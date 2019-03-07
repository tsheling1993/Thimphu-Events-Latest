(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tdriverdashboard-tdriverdashboard-module"],{

/***/ "./src/app/tdriverdashboard/tdriverdashboard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/tdriverdashboard/tdriverdashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: TdriverdashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdriverdashboardPageModule", function() { return TdriverdashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _tdriverdashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tdriverdashboard.page */ "./src/app/tdriverdashboard/tdriverdashboard.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tdriverdashboard_page__WEBPACK_IMPORTED_MODULE_5__["TdriverdashboardPage"]
    }
];
var TdriverdashboardPageModule = /** @class */ (function () {
    function TdriverdashboardPageModule() {
    }
    TdriverdashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tdriverdashboard_page__WEBPACK_IMPORTED_MODULE_5__["TdriverdashboardPage"]]
        })
    ], TdriverdashboardPageModule);
    return TdriverdashboardPageModule;
}());



/***/ }),

/***/ "./src/app/tdriverdashboard/tdriverdashboard.page.html":
/*!*************************************************************!*\
  !*** ./src/app/tdriverdashboard/tdriverdashboard.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n          <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n        <ion-back-button style=\"color:rgb(255, 255, 255);\"></ion-back-button>\n        <ion-title style=\"color:white;\"><b>Driver Dashboard</b></ion-title>\n        <ion-button style=\"--background:transparent;\" (click)=\"openOptions()\" slot=\"right\"><ion-icon name=\"options\"></ion-icon></ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\"><ion-label><b>Vehicle No:</b></ion-label></ion-col>\n      <ion-col size=\"5\"><ion-label>{{vehicleno}}</ion-label></ion-col>\n      <ion-col size=\"3\"><ion-label style=\"color:dodgerblue;\" (click)=\"logout()\">Logout</ion-label></ion-col>\n      <!-- <ion-button color=\"secondary\"  expand=\"full\">Log Out</ion-button> -->\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <div style=\"text-align: center;color:teal\"><b>SET DETAILS</b></div>\n    <ion-row>\n      <ion-col size=\"3\"><br><b>From:</b></ion-col>\n      <ion-col size=\"7\">\n          <ion-select class=\"input_border\" interface=\"popover\" placeholder=\"Select Location\" [(ngModel)]=\"routeFrom\">\n            <ion-select-option value=\"town\">Town</ion-select-option>       \n            <ion-select-option value=\"changjiji\">Changjiji</ion-select-option>       \n            <ion-select-option value=\"changzamtog\">Changzamtog</ion-select-option>       \n            <ion-select-option value=\"babesa\">Babesa</ion-select-option>       \n            <ion-select-option value=\"olakha\">Olakha</ion-select-option>       \n            <ion-select-option value=\"motithang\">Motithang</ion-select-option>      \n          </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\"><br><b>To:</b></ion-col>\n      <ion-col size=\"7\">\n        <ion-select class=\"input_border\" interface=\"popover\" placeholder=\"Select Destination\" [(ngModel)]=\"routeTo\">\n          <ion-select-option value=\"town\">Town</ion-select-option>       \n          <ion-select-option value=\"changjiji\">Changjiji</ion-select-option>       \n          <ion-select-option value=\"changzamtog\">Changzamtog</ion-select-option>       \n          <ion-select-option value=\"babesa\">Babesa</ion-select-option>       \n          <ion-select-option value=\"olakha\">Olakha</ion-select-option>       \n          <ion-select-option value=\"motithang\">Motithang</ion-select-option>      \n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\"><br><b>Type:</b></ion-col>\n      <ion-col size=\"6\">\n        <ion-select class=\"input_border\" interface=\"popover\" placeholder=\"Select Type\" [(ngModel)]=\"wasteType\">\n          <ion-select-option value=\"wet\">Wet</ion-select-option>       \n          <ion-select-option value=\"dry\">Dry</ion-select-option>       \n          <ion-select-option value=\"both\">Both</ion-select-option>             \n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\"><b>Descriptions:</b> </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"10\"> \n        <ion-textarea class=\"input_border\" placeholder=\"Write other details (Optional)\" [(ngModel)]=\"details\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col size=\"5\"> \n        <ion-button color=\"tertiary\" (click)=\"start()\" expand=\"full\">Start</ion-button>\n      </ion-col>\n      <ion-col size=\"5\"> \n        <ion-button color=\"tertiary\" [disabled]=\"stopButton\" (click)=\"stop()\" expand=\"full\">Stop</ion-button>        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/tdriverdashboard/tdriverdashboard.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/tdriverdashboard/tdriverdashboard.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input_border {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  border-color: teal; }\n"

/***/ }),

/***/ "./src/app/tdriverdashboard/tdriverdashboard.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/tdriverdashboard/tdriverdashboard.page.ts ***!
  \***********************************************************/
/*! exports provided: TdriverdashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdriverdashboardPage", function() { return TdriverdashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase/ngx */ "./node_modules/@ionic-native/firebase/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
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








var TdriverdashboardPage = /** @class */ (function () {
    function TdriverdashboardPage(firebase, afs, route, router, alertCtrl, geolocation, menu, natStor, navCtl, backgroundMode, platform) {
        var _this = this;
        this.firebase = firebase;
        this.afs = afs;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.menu = menu;
        this.natStor = natStor;
        this.navCtl = navCtl;
        this.backgroundMode = backgroundMode;
        this.platform = platform;
        this.routeFrom = "";
        this.routeTo = "";
        this.wasteType = "";
        this.details = "";
        this.stopButton = true;
        this.vehicleno = this.route.snapshot.params['vehno'];
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.loadData();
            }
        });
        this.platform.ready().then(function () {
            _this.backgroundMode.enable();
        });
    }
    TdriverdashboardPage.prototype.ngOnInit = function () {
        this.loadData();
    };
    TdriverdashboardPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    TdriverdashboardPage.prototype.loadData = function () {
        var _this = this;
        this.afs.collection('t_garbage_trucks').doc("" + this.vehicleno).get().subscribe(function (res) {
            _this.from = res.data().from;
            _this.to = res.data().to;
            _this.type = res.data().type;
            _this.detailPH = res.data().details;
            console.log("from=" + res.data().from + " and " + _this.from);
            _this.routeFrom = res.data().from;
            _this.routeTo = res.data().to;
            _this.wasteType = res.data().type;
            _this.details = res.data().details;
        });
    };
    TdriverdashboardPage.prototype.openOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Admin Options',
                            message: 'Clear Field Details',
                            cssClass: 'alert',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () { }
                                },
                                {
                                    text: 'Clear',
                                    handler: function () {
                                        _this.afs.collection('t_garbage_trucks').doc("" + _this.vehicleno).update({
                                            from: 'Select Source',
                                            to: 'Select Destination',
                                            type: 'Not Set',
                                            details: 'No Details'
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TdriverdashboardPage.prototype.start = function () {
        var _this = this;
        if (this.routeFrom == "" || this.routeTo == "" || this.wasteType == "") {
            this.alertGeneral("Empty Field(s)", 'Fields "From","To", and "Waste Type" are mandatory.');
        }
        else if (this.details == "") {
            this.stopButton = false;
            this.backgroundMode.enable();
            this.backgroundMode.setDefaults({
                text: 'Your Location Details are tracked'
            });
            this.afs.collection('t_garbage_trucks').doc("" + this.vehicleno).update({
                from: this.routeFrom,
                to: this.routeTo,
                type: this.wasteType,
                details: 'No Details'
            }).then(function () {
                _this.alertGeneral("Journey Started", "Details of this truck's journey are now Online");
            }).catch(function () {
                _this.alertGeneral("Error", "No Internet Connection");
            });
            this.geoSubscription = this.geolocation.watchPosition().subscribe(function (data) {
                console.log('running geolocation');
                _this.afs.collection('t_garbage_trucks').doc("" + _this.vehicleno).update({
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude
                });
            });
        }
        else {
            this.stopButton = false;
            this.backgroundMode.enable();
            this.backgroundMode.setDefaults({
                text: 'Your Location Details are tracked'
            });
            this.afs.collection('t_garbage_trucks').doc("" + this.vehicleno).update({
                from: this.routeFrom,
                to: this.routeTo,
                type: this.wasteType,
                details: this.details,
            }).then(function () {
                _this.alertGeneral("Journey Started", "Details of this truck's journey are now online");
            }).catch(function () {
                _this.alertGeneral("Error", "No Internet Connection");
            });
            this.geoSubscription = this.geolocation.watchPosition().subscribe(function (data) {
                console.log("running geolocation");
                _this.afs.collection('t_garbage_trucks').doc("" + _this.vehicleno).update({
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude
                });
            });
        }
    };
    TdriverdashboardPage.prototype.stop = function () {
        this.geoSubscription.unsubscribe();
    };
    TdriverdashboardPage.prototype.alertGeneral = function (header, message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: header,
                            message: message,
                            cssClass: 'alert',
                            buttons: ['Okay']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TdriverdashboardPage.prototype.logout = function () {
        this.natStor.remove('drivertok');
        this.navCtl.navigateForward('/thromdedriver');
    };
    TdriverdashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tdriverdashboard',
            template: __webpack_require__(/*! ./tdriverdashboard.page.html */ "./src/app/tdriverdashboard/tdriverdashboard.page.html"),
            styles: [__webpack_require__(/*! ./tdriverdashboard.page.scss */ "./src/app/tdriverdashboard/tdriverdashboard.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_native_firebase_ngx__WEBPACK_IMPORTED_MODULE_3__["Firebase"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__["BackgroundMode"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], TdriverdashboardPage);
    return TdriverdashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=tdriverdashboard-tdriverdashboard-module.js.map