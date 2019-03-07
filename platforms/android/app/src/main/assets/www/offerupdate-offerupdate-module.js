(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offerupdate-offerupdate-module"],{

/***/ "./src/app/offerupdate/offerupdate.module.ts":
/*!***************************************************!*\
  !*** ./src/app/offerupdate/offerupdate.module.ts ***!
  \***************************************************/
/*! exports provided: OfferupdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferupdatePageModule", function() { return OfferupdatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _offerupdate_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offerupdate.page */ "./src/app/offerupdate/offerupdate.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _offerupdate_page__WEBPACK_IMPORTED_MODULE_5__["OfferupdatePage"]
    }
];
var OfferupdatePageModule = /** @class */ (function () {
    function OfferupdatePageModule() {
    }
    OfferupdatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_offerupdate_page__WEBPACK_IMPORTED_MODULE_5__["OfferupdatePage"]]
        })
    ], OfferupdatePageModule);
    return OfferupdatePageModule;
}());



/***/ }),

/***/ "./src/app/offerupdate/offerupdate.page.html":
/*!***************************************************!*\
  !*** ./src/app/offerupdate/offerupdate.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons>\n    <ion-button (click)=\"openMenu()\" style=\"color:white;\"><ion-icon name=\"menu\"></ion-icon></ion-button>\n    <ion-back-button style=\"color:white;\"></ion-back-button>\n    <ion-title id=\"title\" style=\"color:white;\">Offer Update</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<!-- for uploading offers details -->\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"4\">\n      Offer Title:\n    </ion-col>\n    <ion-col size=\"8\">\n        <ion-input type=\"text\" class=\"m-style\" [(ngModel)]=\"salesTitle\"></ion-input>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-label>Date:</ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n        <ion-input type=\"text\" button=true, value={{Date}} (click)=\"pickDate()\" class=\"m-style\" [(ngModel)]=\"uploadDate\"></ion-input>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-label>Details:</ion-label>\n    </ion-col>\n    <ion-col size=\"8\">\n        <ion-textarea type=\"text\" class=\"m-style\" [(ngModel)]=\"salesDetail\"></ion-textarea>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><ion-label>Image:</ion-label></ion-col>\n    <ion-col>\n        <ion-label>\n            <input type=\"file\" (change)=\"detectSalesFiles($event)\">\n         </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"insertFs()\" color=\"secondary\"> update offer</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/offerupdate/offerupdate.page.scss":
/*!***************************************************!*\
  !*** ./src/app/offerupdate/offerupdate.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-style {\n  border-style: solid;\n  border-width: 1px;\n  border-color: teal; }\n"

/***/ }),

/***/ "./src/app/offerupdate/offerupdate.page.ts":
/*!*************************************************!*\
  !*** ./src/app/offerupdate/offerupdate.page.ts ***!
  \*************************************************/
/*! exports provided: OfferupdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferupdatePage", function() { return OfferupdatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _services_uploadpic_uploadpic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/uploadpic/uploadpic.service */ "./src/services/uploadpic/uploadpic.service.ts");
/* harmony import */ var _models_upload_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/upload/upload */ "./src/models/upload/upload.ts");
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






var OfferupdatePage = /** @class */ (function () {
    function OfferupdatePage(fs, altCtl, navCtl, datePicker, uploadServ, menu) {
        this.fs = fs;
        this.altCtl = altCtl;
        this.navCtl = navCtl;
        this.datePicker = datePicker;
        this.uploadServ = uploadServ;
        this.menu = menu;
        this.salesData = [];
        this.sales = [];
        this.loadData();
    }
    OfferupdatePage.prototype.ngOnInit = function () {
        //for retriving useditem data
    };
    OfferupdatePage.prototype.openMenu = function () {
        this.menu.toggle('myMenu');
    };
    OfferupdatePage.prototype.loadData = function () {
        var _this = this;
        this.fs.collection('/sales', function (ref) { return ref.orderBy('createdAt', 'desc'); }).get().subscribe(function (res) {
            res.forEach(function (doc) {
                _this.sales.push({
                    salestitle: doc.data().salestitle,
                    uploaddate: doc.data().uploaddate,
                    detail: doc.data().detail,
                });
                _this.salesTitle = doc.data().salestitle;
                _this.uploadDate = doc.data().uploaddate;
                _this.salesDetail = doc.data().detail;
            });
        });
        console.log(this.sales);
    };
    OfferupdatePage.prototype.detectSalesFiles = function (event) {
        this.selectedFiles = event.target.files;
    };
    OfferupdatePage.prototype.insertFs = function () {
        var _this = this;
        var basePath = "/sales";
        var file = this.selectedFiles.item(0);
        this.currentUpload = new _models_upload_upload__WEBPACK_IMPORTED_MODULE_5__["Upload"](file);
        this.fs.collection("" + basePath).doc("" + this.salesTitle).set({
            salestitle: this.salesTitle,
            uploaddate: this.uploadDate,
            detail: this.salesDetail,
        }).then(function (data) {
            console.log("reach here with data: " + data);
            _this.alert("For Information", "Insertion successful");
            _this.navCtl.navigateForward('/sales');
            console.log(data);
            _this.uploadServ.pushUpload1(_this.currentUpload, basePath, _this.salesTitle);
        });
    };
    OfferupdatePage.prototype.alert = function (header, message) {
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
    OfferupdatePage.prototype.pickDate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            // androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        }).then(function (date) {
            var dateArray = date.toString().split(' ');
            _this.uploadDate = dateArray[0] + " " + dateArray[1] + " " + dateArray[2] + " " + dateArray[3];
            (function (err) { return console.log('Error occurred while getting date: ', err); });
        }
        //console.log('Got date: ', date),
        );
    };
    OfferupdatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offerupdate',
            template: __webpack_require__(/*! ./offerupdate.page.html */ "./src/app/offerupdate/offerupdate.page.html"),
            styles: [__webpack_require__(/*! ./offerupdate.page.scss */ "./src/app/offerupdate/offerupdate.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
            _services_uploadpic_uploadpic_service__WEBPACK_IMPORTED_MODULE_4__["UploadpicService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], OfferupdatePage);
    return OfferupdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=offerupdate-offerupdate-module.js.map