(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-movies-module"],{

/***/ "./src/app/movies/movies.module.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesPageModule", function() { return MoviesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _movies_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies.page */ "./src/app/movies/movies.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _movies_page__WEBPACK_IMPORTED_MODULE_5__["MoviesPage"]
    }
];
var MoviesPageModule = /** @class */ (function () {
    function MoviesPageModule() {
    }
    MoviesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_movies_page__WEBPACK_IMPORTED_MODULE_5__["MoviesPage"]]
        })
    ], MoviesPageModule);
    return MoviesPageModule;
}());



/***/ }),

/***/ "./src/app/movies/movies.page.html":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-back-button style=\"color:white;\"></ion-back-button>\n    <ion-title><b style=\"color:white;\">Movies</b></ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngFor='let data of movie'>\n      <ion-item>\n        <ion-grid>     \n          <ion-row>\n            <ion-col size=\"12\" style=\"text-align: center\">\n              <ion-text style=\"font-family: 'Times New Roman', Times, serif;font-size: 20px; color: dodgerblue\">{{data.movietitle}}</ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <img src=\"{{data.url}}\" style=\"border: 2px; border-style: solid;\" height=150px; width=400px;>\n            </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" style=\"font-family: 'Times New Roman', Times, serif;\">\n              <ion-icon color=\"secondary\" name=\"pin\"></ion-icon>&nbsp;        \n            <span style=\"color:teal;\">Venue:&nbsp;</span>{{data.venue}}\n          </ion-col>\n        </ion-row>\n        <ion-row text-wrap>\n          <ion-col text-wrap size=\"12\" style=\"font-family: 'Times New Roman', Times, serif;\">\n            <ion-icon color=\"secondary\" name=\"time\"></ion-icon>&nbsp;\n            <span style=\"color:teal\">Time:&nbsp;</span>{{data.time}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-wrap size=\"12\" style=\"font-family: 'Times New Roman', Times, serif;\">\n            <ion-icon color=\"secondary\" name=\"pricetag\"></ion-icon>&nbsp;\n            <span style=\"color:teal\">Price:&nbsp;</span>Nu.{{data.price}}/-  \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" style=\"font-family: 'Times New Roman', Times, serif;\">\n            <ion-icon color=\"secondary\" name=\"calendar\"></ion-icon>&nbsp;\n            <span style=\"color:teal\">Start Date:&nbsp;</span>{{data.startdate}}            \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" style=\"font-family: 'Times New Roman', Times, serif;\">\n            <ion-icon color=\"secondary\" name=\"calendar\"></ion-icon>&nbsp;\n            <span style=\"color:teal\">End Date:&nbsp;</span>{{data.enddate}}            \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" style=\"font-family: 'Times New Roman', Times, serif;\">\n            <ion-icon color=\"secondary\" name=\"call\"></ion-icon>&nbsp;\n            <span style=\"color:teal\">Contact:&nbsp;</span><span (click)=\"callMovie(data.contact)\">{{data.contact}}</span>            \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" style=\"font-family: 'Times New Roman', Times, serif;\">\n              <ion-icon color=\"secondary\" name=\"videocam\"></ion-icon>&nbsp;\n            <span button=true style=\"color:black\" (click)=\"tailorLink(data.tailor)\"><span style=\"color:teal\">Watch Tailor</span></span>        \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>   \n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/movies/movies.page.scss":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  background-color: rgba(247, 244, 244, 0.8);\n  border: solid black;\n  border: 1px; }\n"

/***/ }),

/***/ "./src/app/movies/movies.page.ts":
/*!***************************************!*\
  !*** ./src/app/movies/movies.page.ts ***!
  \***************************************/
/*! exports provided: MoviesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesPage", function() { return MoviesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
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





var MoviesPage = /** @class */ (function () {
    function MoviesPage(fs, alertCtrl, navCtrl, iab, menu, callNumber, loadingController) {
        var _this = this;
        this.fs = fs;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.menu = menu;
        this.callNumber = callNumber;
        this.loadingController = loadingController;
        this.movie = [];
        this.presentLoading();
        this.fs.collection('/movies', function (ref) { return ref.orderBy('createdAt', 'desc'); }).get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.movie.push({
                    movietitle: doc.data().movietitle,
                    venue: doc.data().venue,
                    time: doc.data().time,
                    startdate: doc.data().startdate,
                    enddate: doc.data().enddate,
                    price: doc.data().price,
                    contact: doc.data().contact,
                    tailor: doc.data().tailor,
                    url: doc.data().url
                });
                _this.movieTitle = doc.data().movietitle;
                // this.movieList.push(this.movie);
                if (_this.movie) {
                    console.log("up");
                    _this.loadingController.dismiss();
                }
            });
        });
        this.timeoutStatus = setTimeout(function () {
            console.log("value=" + _this.movieTitle);
            if (_this.movieTitle == undefined) {
                console.log("No Internet Connection Movie");
                _this.loadingController.dismiss();
                _this.navCtrl.navigateForward('/internetstatus');
            }
        }, 7500);
        console.log(this.movie);
        // if(this.movie){
        //   console.log("down");
        //   this.loadingController.dismiss();      
        // }
    }
    MoviesPage.prototype.ngOnInit = function () {
    };
    MoviesPage.prototype.ionViewWillLeave = function () {
        console.log("Leave view");
        clearTimeout(this.timeoutStatus);
    };
    MoviesPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    MoviesPage.prototype.tailorLink = function (tailor) {
        console.log("tailor: " + tailor);
        var browser = this.iab.create(tailor);
    };
    MoviesPage.prototype.callMovie = function (contactNo) {
        console.log("no: " + contactNo);
        this.callNumber.callNumber(contactNo.toString(), true);
    };
    MoviesPage.prototype.presentLoading = function () {
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
    MoviesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.page.html */ "./src/app/movies/movies.page.html"),
            styles: [__webpack_require__(/*! ./movies.page.scss */ "./src/app/movies/movies.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MoviesPage);
    return MoviesPage;
}());



/***/ })

}]);
//# sourceMappingURL=movies-movies-module.js.map