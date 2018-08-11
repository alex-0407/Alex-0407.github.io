webpackJsonp([3],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]
            ]
        })
    ], VideoPageModule);
    return VideoPageModule;
}());

//# sourceMappingURL=video.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VideoPage.prototype.ionViewWillEnter = function () {
    };
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage.prototype.ionViewWillLeave = function () {
        this.playPause();
    };
    VideoPage.prototype.playPause = function () {
        var myVideo = document.getElementsByTagName('video')[0];
        if (myVideo.paused) {
            myVideo.play();
        }
        else {
            myVideo.pause();
        }
    };
    VideoPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/dongxingbin/github/ionic3-awesome/src/pages/video/video.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>video</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen>\n  <h1 text-center>最后一滴水</h1>\n  <video autoplay loop src="assets/video/water.mp4"></video>\n  <img class="cover" src="assets/imgs/1.jpg"/>\n\n  <ion-slides autoplay="1000" pager loop>\n    <ion-slide>\n      <h4>词曲：陈越</h4>\n      <p>演唱：陈斯</p>\n    </ion-slide>\n    <ion-slide>\n      <h4>只剩下最后一滴水</h4>\n      <p>我听见地球在哭,青山和绿水渐渐消逝,只留下一片荒芜</p>\n    </ion-slide>\n    <ion-slide>\n      <h4>只剩下最后一滴水</h4>\n      <p>我听见人类在哭,眼睁睁 看着万物消失,剩下我好孤独</p>\n    </ion-slide>\n    <ion-slide>\n      <h4>我听见地球在哭</h4>\n      <p>看见大地裂开深深的痛楚,是否一定等到无可退路,才能醒悟</p>\n    </ion-slide>\n    <ion-slide>\n      <h4>我听见地球在哭</h4>\n      <p>看见大地裂开深深的痛楚,是否一定等到无可退路,才能醒悟</p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/dongxingbin/github/ionic3-awesome/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ })

});
//# sourceMappingURL=3.js.map