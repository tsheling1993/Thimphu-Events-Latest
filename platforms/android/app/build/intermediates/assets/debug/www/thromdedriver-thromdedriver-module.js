(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thromdedriver-thromdedriver-module"],{

/***/ "./src/app/thromdedriver/thromdedriver.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/thromdedriver/thromdedriver.module.ts ***!
  \*******************************************************/
/*! exports provided: ThromdedriverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThromdedriverPageModule", function() { return ThromdedriverPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _thromdedriver_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thromdedriver.page */ "./src/app/thromdedriver/thromdedriver.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _thromdedriver_page__WEBPACK_IMPORTED_MODULE_5__["ThromdedriverPage"]
    }
];
var ThromdedriverPageModule = /** @class */ (function () {
    function ThromdedriverPageModule() {
    }
    ThromdedriverPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_thromdedriver_page__WEBPACK_IMPORTED_MODULE_5__["ThromdedriverPage"]]
        })
    ], ThromdedriverPageModule);
    return ThromdedriverPageModule;
}());



/***/ }),

/***/ "./src/app/thromdedriver/thromdedriver.page.html":
/*!*******************************************************!*\
  !*** ./src/app/thromdedriver/thromdedriver.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n          <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n        <ion-back-button style=\"color:rgb(255, 255, 255);\"></ion-back-button>\n        <ion-title style=\"color:white;\"><b>Thromde Driver</b></ion-title>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-list>\n          <ion-row>\n            <ion-col size=\"3\"></ion-col>\n            <ion-col size=\"6\">\n              <ion-item>\n                <img src=\"assets/img/thromde.png\" height=\"120px\" width=\"120px\">\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"3\"></ion-col>\n          </ion-row><br><br>\n          <ion-row>\n            <ion-col>\n              <ion-input color=\"secondary\" class=\"input_border\" placeholder=\"Vehicle no. eg: BG-1-A2343\" [(ngModel)]=\"vehNo\"></ion-input>\n            </ion-col>\n          </ion-row>\n           <ion-row>\n            <ion-col>\n              <ion-input color=\"secondary\" class=\"input_border\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <ion-button color=\"tertiary\" expand=\"full\" (click)=\"login()\"> Login </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/thromdedriver/thromdedriver.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/thromdedriver/thromdedriver.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input_border {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  border-color: teal; }\n"

/***/ }),

/***/ "./src/app/thromdedriver/thromdedriver.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/thromdedriver/thromdedriver.page.ts ***!
  \*****************************************************/
/*! exports provided: ThromdedriverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThromdedriverPage", function() { return ThromdedriverPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
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




var ThromdedriverPage = /** @class */ (function () {
    function ThromdedriverPage(navCtl, afs, alertCtrl, natStor, menu) {
        this.navCtl = navCtl;
        this.afs = afs;
        this.alertCtrl = alertCtrl;
        this.natStor = natStor;
        this.menu = menu;
        this.driver = [];
    }
    ThromdedriverPage.prototype.ngOnInit = function () {
    };
    ThromdedriverPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    ThromdedriverPage.prototype.login = function () {
        var _this = this;
        this.afs.collection('t_garbage_trucks').doc("" + this.vehNo).get().subscribe(function (res) {
            if (res.data().password == _this.password) {
                _this.driver.push({
                    vehileno: res.data().vehicleno,
                    password: res.data().password
                });
                _this.natStor.setItem('drivertok', { vehno: _this.vehNo, password: _this.password });
                _this.navCtl.navigateForward('/tdriverdashboard/' + _this.vehNo);
            }
            else {
                _this.alertGeneral("Error", "Password is incorrect.<br>Please try again");
            }
        }, function (error) {
            _this.alertGeneral("Error", "No driver account associated with given vehicle number <b>OR</b> No internet Connection.");
        });
    };
    ThromdedriverPage.prototype.alertGeneral = function (header, message) {
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
    ThromdedriverPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thromdedriver',
            template: __webpack_require__(/*! ./thromdedriver.page.html */ "./src/app/thromdedriver/thromdedriver.page.html"),
            styles: [__webpack_require__(/*! ./thromdedriver.page.scss */ "./src/app/thromdedriver/thromdedriver.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], ThromdedriverPage);
    return ThromdedriverPage;
}());



/***/ })

}]);
//# sourceMappingURL=thromdedriver-thromdedriver-module.js.map