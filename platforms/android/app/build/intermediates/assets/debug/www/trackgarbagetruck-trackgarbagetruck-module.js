(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trackgarbagetruck-trackgarbagetruck-module"],{

/***/ "./src/app/trackgarbagetruck/trackgarbagetruck.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/trackgarbagetruck/trackgarbagetruck.module.ts ***!
  \***************************************************************/
/*! exports provided: TrackgarbagetruckPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackgarbagetruckPageModule", function() { return TrackgarbagetruckPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _trackgarbagetruck_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trackgarbagetruck.page */ "./src/app/trackgarbagetruck/trackgarbagetruck.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _trackgarbagetruck_page__WEBPACK_IMPORTED_MODULE_5__["TrackgarbagetruckPage"]
    }
];
var TrackgarbagetruckPageModule = /** @class */ (function () {
    function TrackgarbagetruckPageModule() {
    }
    TrackgarbagetruckPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_trackgarbagetruck_page__WEBPACK_IMPORTED_MODULE_5__["TrackgarbagetruckPage"]]
        })
    ], TrackgarbagetruckPageModule);
    return TrackgarbagetruckPageModule;
}());



/***/ }),

/***/ "./src/app/trackgarbagetruck/trackgarbagetruck.page.html":
/*!***************************************************************!*\
  !*** ./src/app/trackgarbagetruck/trackgarbagetruck.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-back-button style=\"color:white;\"></ion-back-button>\n    <ion-title id=\"title\" style=\"color:white;\">Track Garbage Truck</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<div style=\"border: 2px; border-style: solid;\" id=\"map_canvas\">\n    <ion-icon name=\"refresh-circle\" size=\"large\" color=\"tertiary\" (click)=\"refreshMap()\"></ion-icon>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/trackgarbagetruck/trackgarbagetruck.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/trackgarbagetruck/trackgarbagetruck.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  height: 98%; }\n"

/***/ }),

/***/ "./src/app/trackgarbagetruck/trackgarbagetruck.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/trackgarbagetruck/trackgarbagetruck.page.ts ***!
  \*************************************************************/
/*! exports provided: TrackgarbagetruckPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackgarbagetruckPage", function() { return TrackgarbagetruckPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
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





var TrackgarbagetruckPage = /** @class */ (function () {
    function TrackgarbagetruckPage(route, alertCtrl, menu, fs, navCtl) {
        var _this = this;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.fs = fs;
        this.navCtl = navCtl;
        this.markerpostition = [];
        this.garbageTruckData = [];
        this.loadGarbageTruck();
        setTimeout(function () {
            _this.loadMap();
        }, 2000);
    }
    TrackgarbagetruckPage.prototype.ngOnInit = function () {
        var _this = this;
        this.intervalStatus = setInterval(function () {
            _this.refreshMap();
        }, 7000);
    };
    TrackgarbagetruckPage.prototype.ionViewWillLeave = function () {
        console.log("Leave view");
        clearInterval(this.intervalStatus);
    };
    TrackgarbagetruckPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    TrackgarbagetruckPage.prototype.alert = function (header, message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: header,
                            message: message,
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackgarbagetruckPage.prototype.refreshMap = function () {
        var _this = this;
        console.log("refresh map");
        this.map.clear();
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var data = _a[_i];
            this.garbageTruckData.pop();
        }
        this.loadGarbageTruck();
        setTimeout(function () {
            _this.loadMapRefresh();
        }, 1000);
        //this.loadMapRefresh();         
    };
    TrackgarbagetruckPage.prototype.loadGarbageTruck = function () {
        var _this = this;
        this.fs.collection('/t_garbage_trucks').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.garbageTruckData.push({
                    position: { lng: doc.data().longitude, lat: doc.data().latitude },
                    title: doc.data().from + ' - ' + doc.data().to + "<br>" + "Type: " + doc.data().type,
                    draggable: true,
                    vehNo: doc.data().vehicleno,
                });
            });
        });
        console.log("Values " + this.garbageTruckData);
    };
    TrackgarbagetruckPage.prototype.loadMap = function () {
        var _this = this;
        _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_4__["Environment"].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs',
            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs'
        });
        var mapOptions = {
            camera: {
                zoom: 15,
                tilt: 30
            }
        };
        this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_4__["GoogleMaps"].create('map_canvas', mapOptions);
        var bounds = [];
        // let markers:Marker []= this.garbageTruckData.map((options)=>{
        this.markers = this.garbageTruckData.map(function (options) {
            bounds.push(options.position);
            return _this.map.addMarkerSync(options);
        });
        // Set a camera position that includes all markers.
        this.map.moveCamera({
            target: bounds
        });
        //this.markers[this.markers.length - 2].showInfoWindow();
    };
    TrackgarbagetruckPage.prototype.loadMapRefresh = function () {
        var _this = this;
        _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_4__["Environment"].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs',
            'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCSBKG782bLxr6qGnsoRCmu4kbKF3iahCs'
        });
        var mapOptions = {
            camera: {
                zoom: 15,
                tilt: 30
            }
        };
        var bounds = [];
        this.markers = this.garbageTruckData.map(function (options) {
            bounds.push(options.position);
            return _this.map.addMarkerSync(options);
        });
        this.map.moveCamera({
            target: bounds
        });
    };
    TrackgarbagetruckPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trackgarbagetruck',
            template: __webpack_require__(/*! ./trackgarbagetruck.page.html */ "./src/app/trackgarbagetruck/trackgarbagetruck.page.html"),
            styles: [__webpack_require__(/*! ./trackgarbagetruck.page.scss */ "./src/app/trackgarbagetruck/trackgarbagetruck.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], TrackgarbagetruckPage);
    return TrackgarbagetruckPage;
}());



/***/ })

}]);
//# sourceMappingURL=trackgarbagetruck-trackgarbagetruck-module.js.map