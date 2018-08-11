webpackJsonp([5],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerprintPageModule", function() { return FingerprintPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fingerprint__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FingerprintPageModule = /** @class */ (function () {
    function FingerprintPageModule() {
    }
    FingerprintPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fingerprint__["a" /* FingerprintPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fingerprint__["a" /* FingerprintPage */]),
            ],
        })
    ], FingerprintPageModule);
    return FingerprintPageModule;
}());

//# sourceMappingURL=fingerprint.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FingerprintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FingerprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FingerprintPage = /** @class */ (function () {
    function FingerprintPage(navCtrl, faio, alertCtrl) {
        this.navCtrl = navCtrl;
        this.faio = faio;
        this.alertCtrl = alertCtrl;
        this.isToggled = false;
    }
    FingerprintPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FingerprintPage');
    };
    FingerprintPage.prototype.show = function () {
        var _this = this;
        this.faio.isAvailable().then(function (result) {
            _this.faio.show({
                clientId: 'Fingerprint-awesome',
                clientSecret: 'password',
                disableBackup: true,
                localizedFallbackTitle: '指纹认证',
                localizedReason: '输入指纹' // Only for iOS
            }).then(function (result) {
                _this.navCtrl.pop();
            }).catch(function (error) {
                var alert = _this.alertCtrl.create({
                    title: '错误',
                    subTitle: error,
                    buttons: ['关闭']
                });
                alert.present();
                _this.isToggled = false;
            });
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: '错误',
                subTitle: '本机不支持指纹认证',
                buttons: ['关闭']
            });
            alert.present();
            _this.isToggled = false;
        });
    };
    FingerprintPage.prototype.nofity = function () {
        if (this.isToggled) {
            this.show();
        }
    };
    FingerprintPage.prototype.logIn = function (username, password) {
        this.navCtrl.pop();
    };
    FingerprintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fingerprint',template:/*ion-inline-start:"/Users/dongxingbin/github/ionic3-awesome/src/pages/fingerprint/fingerprint.html"*/'<!--\n  Generated template for the FingerprintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n      <ion-label fixed>账号</ion-label>\n      <ion-input type="text" placeholder="请输入账号" #username></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>密码</ion-label>\n      <ion-input type="password" placeholder="请输入密码" #password></ion-input>\n    </ion-item>\n  <ion-item no-lines>\n    <label item-right>指纹登陆</label>\n    <ion-toggle [(ngModel)]="isToggled" (ionChange)="nofity()"></ion-toggle>\n  </ion-item>\n\n  <div style="text-align: center; margin-left: 30px; margin-right: 30px;">\n    <button ion-button block (click)="logIn(username, password)">\n      登录\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dongxingbin/github/ionic3-awesome/src/pages/fingerprint/fingerprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], FingerprintPage);
    return FingerprintPage;
}());

//# sourceMappingURL=fingerprint.js.map

/***/ })

});
//# sourceMappingURL=5.js.map