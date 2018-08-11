webpackJsonp([4],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrCodeModule", function() { return QrCodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_index__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QrCodeModule = /** @class */ (function () {
    function QrCodeModule() {
    }
    QrCodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qrcode__["a" /* QrCodePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__qrcode__["a" /* QrCodePage */]),
                __WEBPACK_IMPORTED_MODULE_3__modules_index__["b" /* SharedModule */]
            ],
            entryComponents: [],
            providers: []
        })
    ], QrCodeModule);
    return QrCodeModule;
}());

//# sourceMappingURL=qrcode.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QrCodePage = /** @class */ (function () {
    function QrCodePage() {
    }
    QrCodePage.prototype.ionViewWillEnter = function () {
    };
    QrCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qrcode',template:/*ion-inline-start:"/Users/dongxingbin/github/ionic3-awesome/src/pages/qrcode/qrcode.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>QrCode</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="wrap">\n    <ion-qrcode [data]="\'扫一扫上面的二维码，有惊喜哦！\'" [size]="180" [level]="\'H\'" [logo]="\'assets/imgs/logo.png\'" [foreground]="\'black\'"></ion-qrcode>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dongxingbin/github/ionic3-awesome/src/pages/qrcode/qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], QrCodePage);
    return QrCodePage;
}());

//# sourceMappingURL=qrcode.js.map

/***/ })

});
//# sourceMappingURL=4.js.map