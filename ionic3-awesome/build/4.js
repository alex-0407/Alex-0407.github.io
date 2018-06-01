webpackJsonp([4],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_index__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeatureModule = /** @class */ (function () {
    function FeatureModule() {
    }
    FeatureModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feature__["a" /* FeaturePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feature__["a" /* FeaturePage */]),
                __WEBPACK_IMPORTED_MODULE_3__modules_index__["b" /* SharedModule */]
            ],
            providers: []
        })
    ], FeatureModule);
    return FeatureModule;
}());

//# sourceMappingURL=feature.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturePage = /** @class */ (function () {
    function FeaturePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.appCollections = [];
        this.appCollections = {
            "appId": 1,
            "name": "apps",
            "key": "appModules",
            "description": "app模块配置",
            "modules": [{
                    "moduleId": 1,
                    "moduleGroupId": 1,
                    "moduleGroupName": null,
                    "name": "二维码",
                    "key": "qrcode",
                    "category": "二维码",
                    "image": "http://iconfont.alicdn.com/t/1494395652678.png@100h_100w.jpg",
                    "link": "page-qrcode",
                    "path": "",
                    "params": "",
                    "checked": true,
                    "isThirdParty": false
                }, {
                    "moduleId": 2,
                    "moduleGroupId": 1,
                    "moduleGroupName": null,
                    "name": "关于",
                    "key": "about",
                    "category": "about",
                    "image": "http://iconfont.alicdn.com/t/1508911280546.jpg@100h_100w.jpg",
                    "link": "tabs-about",
                    "path": "",
                    "params": "",
                    "checked": true,
                    "isThirdParty": false
                }, {
                    "moduleId": 3,
                    "moduleGroupId": 1,
                    "moduleGroupName": null,
                    "name": "百度",
                    "key": "baidu",
                    "category": "website",
                    "image": "https://www.baidu.com/img/baidu_jgylogo3.gif",
                    "link": "https://www.baidu.com",
                    "path": "",
                    "params": "",
                    "checked": true,
                    "isThirdParty": true
                }, {
                    "moduleId": 5,
                    "moduleGroupId": 1,
                    "moduleGroupName": null,
                    "name": "网易",
                    "key": "wangyi",
                    "category": "website",
                    "image": "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2490895003,2642262494&fm=58&s=2370E532CFA568134854D6FC0300F020",
                    "link": "http://www.163.com/",
                    "path": "",
                    "params": "",
                    "checked": true,
                    "isThirdParty": true
                }, {
                    "moduleId": 6,
                    "moduleGroupId": 1,
                    "moduleGroupName": null,
                    "name": "腾讯",
                    "key": "tencent",
                    "category": "website",
                    "image": "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2878042398,2115472320&fm=58&s=CFD77C9681A54D1118E7A556030000B3&bpow=121&bpoh=75",
                    "link": "http://www.qq.com/",
                    "path": "",
                    "params": "",
                    "checked": true,
                    "isThirdParty": true
                }, {
                    "moduleId": 7,
                    "moduleGroupId": 1,
                    "moduleGroupName": null,
                    "name": "美团",
                    "key": "meituan",
                    "category": "website",
                    "image": "https://s0.meituan.net/bs/fe-web-meituan/404d350/img/logo.png",
                    "link": "https://sz.meituan.com",
                    "path": "",
                    "params": "",
                    "checked": true,
                    "isThirdParty": true
                }]
        };
    }
    FeaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feature',template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\pages\feature\feature.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Apps\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid9  [data]="appCollections" [showTitle]="true">\n\n  </ion-grid9>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\pages\feature\feature.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FeaturePage);
    return FeaturePage;
}());

//# sourceMappingURL=feature.js.map

/***/ })

});
//# sourceMappingURL=4.js.map