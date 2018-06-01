webpackJsonp([7],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPageModule", function() { return BrowserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrowserPageModule = /** @class */ (function () {
    function BrowserPageModule() {
    }
    BrowserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* BrowserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__browser__["a" /* BrowserPage */])
            ],
            entryComponents: [],
            providers: []
        })
    ], BrowserPageModule);
    return BrowserPageModule;
}());

//# sourceMappingURL=browser.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_popover__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(149);
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
 * Created by DreamBoy on 2016/11/21.
 */





var BrowserPage = /** @class */ (function () {
    function BrowserPage(navCtrl, params, platform, popoverCtrl, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.params = params;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.sanitizer = sanitizer;
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            url: ''
        };
        this.shareConfig = {
            isShow: true
        }; // 分享控制的配置
        var browser = this.params.get('browser');
        if (browser) {
            this.browser.title = browser.title;
            this.browser.url = browser.url;
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);
            if (browser.share) {
                this.browser.share = browser.share;
            }
        }
        else {
            this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
        }
        this.reload();
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], { tabindex: 1 });
            backAction();
        }, 2);
        var self = this;
        this.microAppCall = function (e) {
            if (e.data.msgType == "refresh") {
                self.reload();
            }
            else if (e.data.msgType == "close") {
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], { tabindex: 1 }, { direction: "back" });
            }
            //window.frames[0].postMessage(event.data,'*');
        };
        window.addEventListener('message', this.microAppCall);
    }
    BrowserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
        }
        this.onprogress();
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], { tabindex: 1 }, { direction: "back" });
        };
    };
    BrowserPage.prototype.ionViewDidLeave = function () {
        window.removeEventListener('message', this.microAppCall);
    };
    // 生成随机数
    BrowserPage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    BrowserPage.prototype.onprogress = function () {
        var _this = this;
        // 随机时间
        var timeout = this.random(10, 30);
        var timer = setTimeout(function () {
            if (_this.browser.isLoaded) {
                _this.browser.proObj.style.width = '100%';
                clearTimeout(timer);
                return;
            }
            // 随机进度
            _this.browser.progress += _this.random(1, 5);
            // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
            if (_this.browser.progress > 90) {
                _this.browser.progress = 90;
            }
            _this.browser.proObj.style.width = _this.browser.progress + '%';
            _this.onprogress();
        }, timeout);
    };
    // 如果iframe页面加载成功后
    BrowserPage.prototype.loaded = function () {
        this.browser.isLoaded = true;
    };
    // 显示Popver选项
    BrowserPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var cb = {
            refresh: function () {
                _this.reload();
            },
            close: function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], { tabindex: 1 });
            }
        };
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__browser_popover__["a" /* BrowserPopover */], {
            callback: cb
        });
        popover.present({
            ev: myEvent
        });
    };
    // 重新加载页面
    BrowserPage.prototype.reload = function () {
        var _this = this;
        var title = this.browser.title;
        var url = this.browser.secUrl;
        this.browser.title = '加载中';
        this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        setTimeout(function () {
            _this.browser.isLoaded = false;
            _this.browser.progress = 0;
            if (!_this.browser.proObj) {
                _this.browser.proObj = document.getElementById('progress');
            }
            _this.onprogress();
            _this.browser.title = title;
            _this.browser.secUrl = url;
        }, 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Navbar */])
    ], BrowserPage.prototype, "navBar", void 0);
    BrowserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-browser',template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\pages\browser\browser.html"*/'<ion-header no-shadow>\n  <ion-navbar class="page-navbar">\n    <ion-title>{{browser.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more" style="color: white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content">\n  <!--scroll="true" overflow-scroll="true"-->\n  <div class="progress" [hidden]="browser.isLoaded">\n    <div class="progress-inner" id="progress"></div>\n  </div>\n\n  <iframe #iframe id="iframe" class="iframe" sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms allow-modals"\n    [src]="browser.secUrl" (load)="loaded()" >\n  </iframe>\n</ion-content>\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\pages\browser\browser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], BrowserPage);
    return BrowserPage;
}());

//# sourceMappingURL=browser.js.map

/***/ })

});
//# sourceMappingURL=7.js.map