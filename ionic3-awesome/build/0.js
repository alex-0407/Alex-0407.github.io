webpackJsonp([0],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squeak__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__squeak__["a" /* SqueakPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__squeak__["a" /* SqueakPage */]),
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=squeak.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqueakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_utils__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SqueakPage = /** @class */ (function () {
    function SqueakPage(navCtrl, clipboard) {
        this.navCtrl = navCtrl;
        this.clipboard = clipboard;
    }
    SqueakPage.prototype.ionViewWillEnter = function () {
    };
    SqueakPage.prototype.ionViewWillLeave = function () {
        this.clipboard.copy('');
    };
    SqueakPage.prototype.getSqueak = function () {
        var _this = this;
        this.clipboard.paste().then(function (resolve) {
            if (resolve && resolve != '') {
                if (__WEBPACK_IMPORTED_MODULE_3__common_utils__["a" /* Utils */].isValidateUrl(resolve)) {
                    var browser = {
                        title: '百度',
                        url: resolve
                    };
                    _this.navCtrl.push('browser', { browser: browser });
                }
                else {
                    alert(resolve);
                }
            }
        }, function (reject) {
            // alert('Error: ' + reject);
        });
    };
    SqueakPage.prototype.generateSqueak = function () {
        var num = Math.floor(Math.random() * 10);
        if (num % 3 == 0) {
            this.clipboard.copy('我就是你想要的口令');
            alert('生成的吱口令: ' + '我就是你想要的口令');
        }
        if (num % 3 == 1) {
            this.clipboard.copy('http://www.baidu.com');
            alert('生成的吱口令: ' + 'http://www.baidu.com');
        }
        if (num % 3 == 2) {
            this.clipboard.copy('hello, baby!');
            alert('生成的吱口令: ' + 'hello, baby!');
        }
    };
    SqueakPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-squeak',template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\pages\squeak\squeak.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>吱口令</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="getSqueak();" class="item-1 theme-button-bg">获取吱口令</button>\n  <button ion-button block (click)="generateSqueak();" class="item-1 theme-button-bg">生成吱口令</button>\n</ion-content>\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\pages\squeak\squeak.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */]])
    ], SqueakPage);
    return SqueakPage;
}());

//# sourceMappingURL=squeak.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/**
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isValidateUrl = function (value) {
        var v = new RegExp("^((https|http|ftp|rtsp|mms)?://)"
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
            + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
            + "|" // 允许IP和DOMAIN（域名）
            + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|" // a slash isn't required if there is no file name
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$");
        if (v.test(value)) {
            return true;
        }
        else {
            return false;
        }
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

/***/ })

});
//# sourceMappingURL=0.js.map