(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["footmatchadmin-footmatchadmin-module"],{

/***/ "./src/app/footmatchadmin/footmatchadmin.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/footmatchadmin/footmatchadmin.module.ts ***!
  \*********************************************************/
/*! exports provided: FootmatchadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootmatchadminPageModule", function() { return FootmatchadminPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _footmatchadmin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footmatchadmin.page */ "./src/app/footmatchadmin/footmatchadmin.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _footmatchadmin_page__WEBPACK_IMPORTED_MODULE_5__["FootmatchadminPage"]
    }
];
var FootmatchadminPageModule = /** @class */ (function () {
    function FootmatchadminPageModule() {
    }
    FootmatchadminPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_footmatchadmin_page__WEBPACK_IMPORTED_MODULE_5__["FootmatchadminPage"]]
        })
    ], FootmatchadminPageModule);
    return FootmatchadminPageModule;
}());



/***/ }),

/***/ "./src/app/footmatchadmin/footmatchadmin.page.html":
/*!*********************************************************!*\
  !*** ./src/app/footmatchadmin/footmatchadmin.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar color=\"tertiary\">\n      <ion-buttons>\n      <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n      <ion-back-button style=\"color:white;\"></ion-back-button>\n      <ion-title id=\"title\" style=\"color:white;\">FootballMatch Admin</ion-title>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n      <ion-list *ngFor='let data of match'>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <div class=\"btn-style\">{{data.matchtitle}} {{data.matchtime}} {{data.matchdate}}</div>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <ion-button class=\"btnstyle\" (click)=\"goDelete(data.matchtitle,data.matchdate,data.matchtime)\" color=\"danger\">Delete</ion-button>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <ion-button class=\"btnstyle\" (click)=\"goEdit(data.matchtitle+data.matchdate+data.matchtime)\" color=\"secondary\">Edit</ion-button>\n                </ion-col>\n            </ion-row>   \n      </ion-list>\n      <p button=\"true\" (click)=\"goAddMore()\" style=\"color:dodgerblue\">Add more...</p>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/footmatchadmin/footmatchadmin.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/footmatchadmin/footmatchadmin.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-style {\n  border-style: solid;\n  border-width: 1px;\n  border-color: teal; }\n\n.btnstyle {\n  text-transform: none; }\n\n.btn-style {\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/footmatchadmin/footmatchadmin.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/footmatchadmin/footmatchadmin.page.ts ***!
  \*******************************************************/
/*! exports provided: FootmatchadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootmatchadminPage", function() { return FootmatchadminPage; });
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



var FootmatchadminPage = /** @class */ (function () {
    function FootmatchadminPage(fs, altCtl, navCtl, menu, loadingController) {
        var _this = this;
        this.fs = fs;
        this.altCtl = altCtl;
        this.navCtl = navCtl;
        this.menu = menu;
        this.loadingController = loadingController;
        this.matchData = [];
        this.match = [];
        this.movie = [];
        this.showaddnew = false;
        this.presentLoading();
        this.fs.collection('/t_football_match', function (ref) { return ref.orderBy('matchdate', 'desc'); }).get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.match.push({
                    matchtitle: doc.data().matchtitle,
                    matchteam1: doc.data().matchteam1,
                    matchteam2: doc.data().matchteam2,
                    matchsore: doc.data().matchsore,
                    matchvenue: doc.data().matchvenue,
                    matchtime: doc.data().matchtime,
                    matchdate: doc.data().matchdate,
                });
                // this.movieList.push(this.movie);
                console.log("match data:" + _this.match);
                if (_this.match) {
                    console.log("up");
                    _this.loadingController.dismiss();
                }
            });
        });
    }
    FootmatchadminPage.prototype.ngOnInit = function () {
    };
    FootmatchadminPage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    FootmatchadminPage.prototype.goAddMore = function () {
        this.navCtl.navigateForward('/footmatchaddmore');
    };
    FootmatchadminPage.prototype.alert = function (header, message) {
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
    FootmatchadminPage.prototype.goDelete = function (matchtitle, matchdate, matchtime) {
        this.presentAlertConfirm(matchtitle, matchdate, matchtime);
    };
    //for updating the item
    FootmatchadminPage.prototype.goEdit = function (matchtitle) {
        console.log(matchtitle);
        this.navCtl.navigateForward('/matchupdate/' + matchtitle);
    };
    FootmatchadminPage.prototype.deleteSure = function (matchtitle) {
        var _this = this;
        var basePath = "/t_football_match";
        this.fs.collection("" + basePath).doc("" + matchtitle).delete().then(function (data) {
            _this.alert("For Information", "Deletion successful");
            _this.navCtl.navigateForward('football');
        });
    };
    FootmatchadminPage.prototype.presentAlertConfirm = function (matchtitle, matchdate, matchtime) {
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
                                        _this.deleteSure(matchtitle + matchdate + matchtime);
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
    FootmatchadminPage.prototype.presentLoading = function () {
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
    FootmatchadminPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footmatchadmin',
            template: __webpack_require__(/*! ./footmatchadmin.page.html */ "./src/app/footmatchadmin/footmatchadmin.page.html"),
            styles: [__webpack_require__(/*! ./footmatchadmin.page.scss */ "./src/app/footmatchadmin/footmatchadmin.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], FootmatchadminPage);
    return FootmatchadminPage;
}());



/***/ })

}]);
//# sourceMappingURL=footmatchadmin-footmatchadmin-module.js.map