(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-sales-module"],{

/***/ "./src/app/sales/sales.module.ts":
/*!***************************************!*\
  !*** ./src/app/sales/sales.module.ts ***!
  \***************************************/
/*! exports provided: SalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPageModule", function() { return SalesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales.page */ "./src/app/sales/sales.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _sales_page__WEBPACK_IMPORTED_MODULE_5__["SalesPage"]
    }
];
var SalesPageModule = /** @class */ (function () {
    function SalesPageModule() {
    }
    SalesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_sales_page__WEBPACK_IMPORTED_MODULE_5__["SalesPage"]]
        })
    ], SalesPageModule);
    return SalesPageModule;
}());



/***/ }),

/***/ "./src/app/sales/sales.page.html":
/*!***************************************!*\
  !*** ./src/app/sales/sales.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-back-button style=\"color:white;\"></ion-back-button>\n    <ion-title><b style=\"color:white;\">Sales</b></ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab tab=\"offer\">\n      <ion-content overflow-scroll=\"false\">\n      <!-- for displaying the offer data -->\n      <ion-list *ngFor='let data of sales'>\n        <ion-card>\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                  <ion-col size=\"12\">\n                      <!-- <b>Title:&nbsp;&nbsp;</b>{{data.salestitle}}<br><br> -->\n                      <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><b>Title:&nbsp;</b></span>\n                      <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\"><b>{{data.salestitle}}</b></span>\n                      <img src=\"{{data.url}}\" height=150px; width=400px;>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"12\">\n                    <div style=\"text-align: right; color:dodgerblue; font-family: 'Times New Roman', Times, serif;\"><ion-icon name=\"calendar\"></ion-icon>{{data.uploaddate}}</div>\n                    <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon name=\"list\"></ion-icon><b>Details:</b>&nbsp;&nbsp;</span>\n                    <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.detail}}</span><br>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content> \n        </ion-card> \n      </ion-list>\n    </ion-content>\n    </ion-tab>\n    <!-- for displaying the useditem data -->\n    <ion-tab tab=\"useditem\">\n        <ion-content overflow-scroll=\"false\">\n        <ion-list *ngFor='let data of items'>\n          \n            <ion-card>\n              <ion-card-content>\n                  <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"12\">\n                            <div><span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><b>Type:&nbsp;</b></span>\n                              <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\"><b>{{data.itemtitle}}</b></span></div>\n                            <ion-slides pager=\"true\" [options]=\"slideOpts\">\n                              <ion-slide><img src=\"{{data.url1}}\" style=\"height:150px; width:400px\" (click)=\"viewImg1(data.url1)\"></ion-slide>\n                              <ion-slide><img src=\"{{data.url2}}\" style=\"height:150px; width:400px\" (click)=\"viewImg2(data.url2)\"></ion-slide>\n                              <ion-slide><img src=\"{{data.url3}}\" style=\"height:150px; width:400px\" (click)=\"viewImg3(data.url3)\"></ion-slide>\n                            </ion-slides>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                          <div style=\"text-align: right; color:dodgerblue;font-family: 'Times New Roman', Times, serif;\"><ion-icon name=\"calendar\"></ion-icon>{{data.uploaddate}}</div>\n                          <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon name=\"pricetags\"></ion-icon><b>Price:&nbsp;&nbsp;</b></span>\n                          <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.itemprice}}</span><br>\n                          <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon name=\"call\"></ion-icon><b>Contact:&nbsp;&nbsp;</b></span>\n                          <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.itemcontact}}</span><br>\n                          <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon name=\"list\"></ion-icon><b>Details:&nbsp;&nbsp;</b></span>\n                          <span style=\"color:black;font-family: 'Times New Roman', Times, serif;\">{{data.detail}}</span><br>\n                          <span style=\"color:teal;font-family: 'Times New Roman', Times, serif;\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon><b>Status:</b>&nbsp;&nbsp;<ion-badge color=\"secondary\">{{data.itemstatus}}</ion-badge></span>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  </ion-card-content>\n                </ion-card>  \n          </ion-list>\n      </ion-content>\n      </ion-tab>\n    <ion-tab-bar slot=\"top\">\n        <ion-tab-button tab=\"offer\">\n          <ion-label style=\"font-size: 12pt;font-family: 'Times New Roman', Times, serif;\">Offers</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"useditem\">\n          <ion-label style=\"font-size: 12pt;font-family: 'Times New Roman', Times, serif;\">Used Items</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n</ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sales/sales.page.scss":
/*!***************************************!*\
  !*** ./src/app/sales/sales.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  background-color: rgba(247, 244, 244, 0.8);\n  border: solid black;\n  border: 1px; }\n\n.scroll {\n  height: 1000px; }\n"

/***/ }),

/***/ "./src/app/sales/sales.page.ts":
/*!*************************************!*\
  !*** ./src/app/sales/sales.page.ts ***!
  \*************************************/
/*! exports provided: SalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPage", function() { return SalesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
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





var SalesPage = /** @class */ (function () {
    function SalesPage(fs, alertCtrl, navCtrl, iab, menu, photoViewer, loadingController) {
        var _this = this;
        this.fs = fs;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.menu = menu;
        this.photoViewer = photoViewer;
        this.loadingController = loadingController;
        this.sales = [];
        this.items = [];
        this.slideOpts = {
            effect: 'fade',
        };
        this.presentLoading();
        this.fs.collection('/sales', function (ref) { return ref.orderBy('createdAt', 'desc'); }).get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.sales.push({
                    salestitle: doc.data().salestitle,
                    uploaddate: doc.data().uploaddate,
                    detail: doc.data().detail,
                    url: doc.data().url
                });
                _this.salesTitle = doc.data().salestitle;
                // this.movieList.push(this.movie);
                if (_this.sales) {
                    console.log("up");
                    _this.loadingController.dismiss();
                }
            });
        });
        console.log(this.sales);
        //for retriving useditem data
        this.fs.collection('/useditems', function (ref) { return ref.orderBy('createdAt', 'desc'); }).get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.items.push({
                    itemtitle: doc.data().itemtitle,
                    uploaddate: doc.data().uploaddate,
                    itemprice: doc.data().itemprice,
                    itemcontact: doc.data().itemcontact,
                    detail: doc.data().detail,
                    itemstatus: doc.data().itemstatus,
                    url1: doc.data().url1,
                    url2: doc.data().url2,
                    url3: doc.data().url3,
                });
                // this.movieList.push(this.movie);
            });
        });
        console.log(this.items);
        this.timeoutStatus = setTimeout(function () {
            console.log("value=" + _this.salesTitle);
            if (_this.salesTitle == undefined) {
                console.log("No Internet Connection");
                _this.loadingController.dismiss();
                _this.navCtrl.navigateForward('/internetstatus');
            }
        }, 7500);
    }
    SalesPage.prototype.ionViewWillLeave = function () {
        console.log("Leave view");
        clearTimeout(this.timeoutStatus);
    };
    SalesPage.prototype.ngOnInit = function () {
    };
    SalesPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    SalesPage.prototype.viewImg1 = function (url1) {
        ///this.photoViewer.show('url1');
        this.photoViewer.show(url1, '', { share: true });
    };
    SalesPage.prototype.viewImg2 = function (url2) {
        this.photoViewer.show(url2, '', { share: true });
    };
    SalesPage.prototype.viewImg3 = function (url3) {
        this.photoViewer.show(url3, '', { share: true });
    };
    SalesPage.prototype.presentLoading = function () {
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
    SalesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales',
            template: __webpack_require__(/*! ./sales.page.html */ "./src/app/sales/sales.page.html"),
            styles: [__webpack_require__(/*! ./sales.page.scss */ "./src/app/sales/sales.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], SalesPage);
    return SalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=sales-sales-module.js.map