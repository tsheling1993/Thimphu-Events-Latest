(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nationalfest-nationalfest-module"],{

/***/ "./src/app/nationalfest/nationalfest.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/nationalfest/nationalfest.module.ts ***!
  \*****************************************************/
/*! exports provided: NationalfestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalfestPageModule", function() { return NationalfestPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _nationalfest_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nationalfest.page */ "./src/app/nationalfest/nationalfest.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _nationalfest_page__WEBPACK_IMPORTED_MODULE_5__["NationalfestPage"]
    }
];
var NationalfestPageModule = /** @class */ (function () {
    function NationalfestPageModule() {
    }
    NationalfestPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_nationalfest_page__WEBPACK_IMPORTED_MODULE_5__["NationalfestPage"]]
        })
    ], NationalfestPageModule);
    return NationalfestPageModule;
}());



/***/ }),

/***/ "./src/app/nationalfest/nationalfest.page.html":
/*!*****************************************************!*\
  !*** ./src/app/nationalfest/nationalfest.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n      <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n      <ion-back-button style=\"color:white;\"></ion-back-button>\n      <ion-title id=\"title\" style=\"color:white;\">National Festival</ion-title>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n        <img src=\"assets/img/fes.jpg\" height=100px; width=400px;>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor='let data of rData'>\n    <ion-card-content>\n        <div style=\"color:dodgerblue; text-align: right\">{{data.date}}</div>\n        <div style=\"color:dodgerblue;font-family: 'Times New Roman', Times, serif;\"><b>Title:&nbsp;</b>{{data.title}}</div>\n        <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon color=\"secondary\" name=\"time\"></ion-icon>&nbsp;<b>Time:</b></span>&nbsp;<span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.time}}</span><br>\n        <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon color=\"secondary\" name=\"pin\"></ion-icon>&nbsp;<b>Venue:</b></span>&nbsp;<span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.venue}}</span><br>\n        <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon color=\"secondary\" name=\"list\"></ion-icon>&nbsp;<b>Details:</b></span>&nbsp;<span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.detail}}</span><br>\n    </ion-card-content>\n  </ion-card>    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/nationalfest/nationalfest.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/nationalfest/nationalfest.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  background-color: rgba(247, 244, 244, 0.8);\n  border: solid black;\n  border: 1px; }\n"

/***/ }),

/***/ "./src/app/nationalfest/nationalfest.page.ts":
/*!***************************************************!*\
  !*** ./src/app/nationalfest/nationalfest.page.ts ***!
  \***************************************************/
/*! exports provided: NationalfestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalfestPage", function() { return NationalfestPage; });
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




var NationalfestPage = /** @class */ (function () {
    function NationalfestPage(fs, altCtl, navCtl, datePicker, menu, loadingController) {
        var _this = this;
        this.fs = fs;
        this.altCtl = altCtl;
        this.navCtl = navCtl;
        this.datePicker = datePicker;
        this.menu = menu;
        this.loadingController = loadingController;
        this.rData = [];
        //for getting the data of festival from the firebase
        this.presentLoading();
        this.fs.collection('/t_festival').get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.rData.push({
                    title: doc.data().title,
                    date: doc.data().date,
                    time: doc.data().time,
                    venue: doc.data().venue,
                    detail: doc.data().detail,
                });
                _this.rTitle = doc.data().title;
                if (_this.rData) {
                    console.log("up");
                    _this.loadingController.dismiss();
                }
            });
        });
        console.log(this.rData);
        this.timeoutStatus = setTimeout(function () {
            console.log("value=" + _this.rTitle);
            if (_this.rTitle == undefined) {
                console.log("No Internet Connection");
                _this.loadingController.dismiss();
                _this.navCtl.navigateForward('/internetstatus');
            }
        }, 5000);
    }
    NationalfestPage.prototype.ionViewWillLeave = function () {
        console.log("Leave view");
        clearTimeout(this.timeoutStatus);
    };
    NationalfestPage.prototype.ngOnInit = function () {
    };
    NationalfestPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    NationalfestPage.prototype.presentLoading = function () {
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
    NationalfestPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nationalfest',
            template: __webpack_require__(/*! ./nationalfest.page.html */ "./src/app/nationalfest/nationalfest.page.html"),
            styles: [__webpack_require__(/*! ./nationalfest.page.scss */ "./src/app/nationalfest/nationalfest.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], NationalfestPage);
    return NationalfestPage;
}());



/***/ })

}]);
//# sourceMappingURL=nationalfest-nationalfest-module.js.map