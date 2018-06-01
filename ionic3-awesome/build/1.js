webpackJsonp([1],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_qqsdk__ = __webpack_require__(697);
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
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_qqsdk__["a" /* QQSDK */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QQSDK; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @name QQSDK
 * @description
 * This Plugin is a wrapper around the Tencent QQ SDK for Android and iOS. Provides access to QQ ssoLogin, QQ Sharing, QQZone Sharing etc.
 *
 * Requires Cordova plugin: `cordova-plugin-qqsdk`. For more info, please see the [QQSDK plugin docs](https://github.com/iVanPan/Cordova_QQ).
 *
 * @usage
 * ```typescript
 * import { QQSDK, QQShareOptions } from '@ionic-native/qqsdk';
 *
 * constructor(private qq: QQSDK) { }
 *
 * ...
 *
 *
 * const options: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 *   scene: this.qq.Scene.QQ,
 *   title: 'This is a title for cordova-plugin-qqsdk',
 *   url: 'https://cordova.apache.org/',
 *   image: 'https://cordova.apache.org/static/img/cordova_bot.png',
 *   description: 'This is  Cordova QQ share description',
 *   flashUrl:  'http://stream20.qqmusic.qq.com/30577158.mp3',
 * };
 *
 * const clientOptions: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 * };
 *
 * const shareTextOptions: QQShareOptions = {
 *   client: this.qq.ClientType.QQ,
 *   text: 'This is Share Text',
 *   scene: this.qq.Scene.QQ,
 * };
 *
 * this.qq.ssoLogin(clientOptions)
 *    .then(result => {
 *       // Success
 *       console.log('token is ' + result.access_token);
 *       console.log('userid is ' + result.userid);
 *       console.log('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
 *    })
 *    .catch(error => {
 *       console.log(error); // Failed
 *    });
 *
 * this.qq.logout()
 *    .then(() => {
 *       console.log('logout success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * this.qq.checkClientInstalled(clientOptions)
 *    .then(() => {
 *       console.log('Installed');
 *    })
 *    .catch(() => {
 *       console.log('Not Installed');
 *    });
 *
 * this.qq.shareText(shareTextOptions)
 *    .then(() => {
 *       console.log('shareText success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * this.qq.shareImage(options)
 *    .then(() => {
 *       console.log('shareImage success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 * }
 *
 * this.qq.shareNews(options)
 *    .then(() => {
 *       console.log('shareNews success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 * }
 *
 * this.qq.shareAudio(options)
 *    .then(() => {
 *       console.log('shareAudio success');
 *    })
 *    .catch(error => {
 *       console.log(error);
 *    });
 *
 * ```
 *
 * @interfaces
 * QQShareOptions
 */
var QQSDK = (function (_super) {
    __extends(QQSDK, _super);
    function QQSDK() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * QQ Share Scene
         */
        _this.Scene = {
            QQ: 0,
            QQZone: 1,
            Favorite: 2
        };
        /**
         *  client type:  QQ application or TIM application
         */
        _this.ClientType = {
            QQ: 0,
            TIM: 1
        };
        return _this;
    }
    /**
     * open QQ or TIM client perform ssoLogin
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.ssoLogin = function (options) {
        return;
    };
    QQSDK.prototype.logout = function () {
        return;
    };
    /**
     * Detect if the QQ application or TIM application is installed on the device.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.checkClientInstalled = function (options) {
        return;
    };
    /**
     * shareText
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareText = function (options) {
        return;
    };
    /**
     * shareImage
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareImage = function (options) {
        return;
    };
    /**
     * shareNews
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareNews = function (options) {
        return;
    };
    /**
     * shareAudio
     * @param options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    QQSDK.prototype.shareAudio = function (options) {
        return;
    };
    QQSDK.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    QQSDK.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QQSDK.prototype, "ssoLogin", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QQSDK.prototype, "logout", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QQSDK.prototype, "checkClientInstalled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QQSDK.prototype, "shareText", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QQSDK.prototype, "shareImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QQSDK.prototype, "shareNews", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QQSDK.prototype, "shareAudio", null);
    QQSDK = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'QQSDK',
            plugin: 'cordova-plugin-qqsdk',
            pluginRef: 'QQSDK',
            repo: 'https://github.com/iVanPan/Cordova_QQ',
            platforms: ['Android', 'iOS'],
            install: 'ionic cordova plugin add cordova-plugin-qqsdk --variable QQ_APP_ID=YOUR_QQ_APPID',
            installVariables: ['QQ_APP_ID'],
        })
    ], QQSDK);
    return QQSDK;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_qqsdk__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, actionSheetCtrl, alertCtrl, themeService, cToast, qq) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.themeService = themeService;
        this.cToast = cToast;
        this.qq = qq;
        this.options = {
            client: this.qq.ClientType.QQ,
            scene: this.qq.Scene.QQ,
            title: 'This is a title for cordova-plugin-qqsdk',
            url: 'https://cordova.apache.org/',
            image: 'https://cordova.apache.org/static/img/cordova_bot.png',
            description: 'This is  Cordova QQ share description',
            flashUrl: 'http://stream20.qqmusic.qq.com/30577158.mp3',
        };
        this.clientOptions = {
            client: this.qq.ClientType.QQ,
        };
        this.shareTextOptions = {
            client: this.qq.ClientType.QQ,
            text: 'This is Share Text',
            scene: this.qq.Scene.QQ,
        };
        // 获取当前主题
        this.themeService.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        console.log('this.selectedTheme: ' + this.selectedTheme);
    }
    HomePage.prototype.goToQrcode = function () {
        this.navCtrl.push('page-qrcode');
    };
    HomePage.prototype.changeTheme = function () {
        console.log('changeTheme: ' + this.selectedTheme);
        if (this.selectedTheme === 'dark-theme') {
            // 改变
            this.themeService.setActiveTheme('light-theme');
            console.log('curTheme: ' + 'light-theme');
        }
        else {
            this.themeService.setActiveTheme('dark-theme');
            console.log('curTheme: ' + 'dark-theme');
        }
    };
    HomePage.prototype.goToGrid9 = function () {
        this.navCtrl.push('tabs-feature');
    };
    HomePage.prototype.goContact = function () {
        this.navCtrl.push('contact');
    };
    HomePage.prototype.goSqueak = function () {
        this.navCtrl.push('squeak');
    };
    HomePage.prototype.goVideo = function () {
        this.navCtrl.push('video');
    };
    HomePage.prototype.testToast = function () {
        this.cToast.show('自定义Toast', 2000);
    };
    HomePage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl
            .create({
            title: '更换头像',
            cssClass: 'photoChoice-ios',
            buttons: [
                {
                    text: '拍照',
                    icon: 'ios-arrow-forward',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: '从相册选择',
                    icon: 'ios-arrow-forward',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.shareWxSession = function () {
        var wechat = window.Wechat;
        wechat.isInstalled(function (installed) {
            if (!installed) {
                alert('您没有安装微信！');
                return;
            }
        }, function (reason) {
            alert("Failed: " + reason);
        });
        wechat.share({
            message: {
                title: '分享到朋友圈',
                description: '分享到朋友圈',
                // thumb: this.shareImg,
                media: {
                    type: wechat.Type.LINK,
                    webpageUrl: 'www.baidu.com'
                }
            },
            scene: wechat.Scene.SESSION // share to SESSION
        }, function () {
            alert('分享成功');
        }, function (reason) {
            alert("Failed: " + reason);
        });
    };
    HomePage.prototype.shareWxTimeLine = function () {
        var wechat = window.Wechat;
        wechat.isInstalled(function (installed) {
            if (!installed) {
                alert('您没有安装微信！');
                return;
            }
        }, function (reason) {
            alert("Failed: " + reason);
        });
        wechat.share({
            message: {
                title: '分享给好友',
                description: '分享给好友',
                // thumb: this.shareImg,
                media: {
                    type: wechat.Type.LINK,
                    webpageUrl: 'www.baidu.com'
                }
            },
            scene: wechat.Scene.TIMELINE // share to Timeline
        }, function () {
            alert('分享成功');
        }, function (reason) {
            alert("Failed: " + reason);
        });
    };
    HomePage.prototype.shareQQ = function () {
        // this.qq.shareText(this.shareTextOptions)
        //   .then(() => {
        //     alert('shareText success');
        //   })
        //   .catch(error => {
        //     alert(error);
        //   });
        var qq = window.QQSDK;
        var that = this;
        qq.checkClientInstalled(function () {
            var args = {};
            args.scene = qq.Scene.QQ; //QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            args.url = 'https://cordova.apache.org/';
            args.title = "分享到qq";
            args.description = "分享到qq";
            args.image = 'https://cordova.apache.org/static/img/cordova_bot.png';
            qq.shareNews(function () {
                alert('分享成功');
            }, function (failReason) {
                alert(failReason);
            }, args);
        }, function () {
            // if installed QQ Client version is not supported sso,also will get this error
            alert('您没有安装QQ！');
        });
    };
    HomePage.prototype.shareQZone = function () {
        var qq = window.QQSDK;
        qq.checkClientInstalled(function () {
            var args = {};
            args.scene = qq.Scene.QQZone; //QQSDK.Scene.QQZone,QQSDK.Scene.Favorite
            args.url = 'https://cordova.apache.org/';
            args.title = "分享到qq空间";
            args.description = "分享到qq空间";
            args.image = 'https://cordova.apache.org/static/img/cordova_bot.png';
            qq.shareNews(function () {
                alert('分享成功');
            }, function (failReason) {
                alert(failReason);
            }, args);
        }, function () {
            // if installed QQ Client version is not supported sso,also will get this error
            alert('您没有安装QQ！');
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines="true">\n    <ion-item (click)="changeTheme();">\n      <ion-icon name="moon" item-start class="theme-icon" *ngIf="selectedTheme === \'dark-theme\'"></ion-icon>\n      <ion-icon name="sunny" item-start class="theme-icon" *ngIf="selectedTheme === \'light-theme\'"></ion-icon>\n      <span class="text">主题</span>\n    </ion-item>\n    <ion-item (click)="goToQrcode();">\n      <ion-icon name="barcode" item-start class="theme-icon"></ion-icon>\n      <span class="text">二维码</span>\n    </ion-item>\n    <ion-item (click)="goToGrid9();" *ngIf="false">\n      <ion-icon name="grid" item-start class="theme-icon"></ion-icon>\n      <span class="text">九宫格</span>\n    </ion-item>\n    <ion-item (click)="goContact();">\n      <ion-icon name="person" item-start class="theme-icon"></ion-icon>\n      <span class="text">通讯录</span>\n    </ion-item>\n    <ion-item (click)="goSqueak();" *ngIf="false">\n      <ion-icon name="musical-note" item-start class="theme-icon"></ion-icon>\n      <span class="text">吱口令</span>\n    </ion-item>\n    <ion-item (click)="goVideo();">\n      <ion-icon name="logo-youtube" item-start class="theme-icon"></ion-icon>\n      <span class="text">video</span>\n    </ion-item>\n    <ion-item (click)="testToast();">\n      <ion-icon name="ios-alert-outline" item-start class="theme-icon"></ion-icon>\n      <span class="text">自定义toast</span>\n    </ion-item>\n    <ion-item (click)="presentActionSheet();">\n      <ion-icon name="ios-alert" item-start class="theme-icon"></ion-icon>\n      <span class="text">actionSheet</span>\n    </ion-item>\n    <ion-item (click)="shareWxSession();" *ngIf="false">\n      <ion-icon name="at" item-start class="theme-icon"></ion-icon>\n      <span class="text">分享到朋友圈</span>\n    </ion-item>\n    <ion-item (click)="shareWxTimeLine();" *ngIf="false">\n      <ion-icon name="contacts" item-start class="theme-icon"></ion-icon>\n      <span class="text">分享给好友</span>\n    </ion-item>\n    <ion-item (click)="shareQQ();" *ngIf="false">\n      <ion-icon name="at" item-start class="theme-icon"></ion-icon>\n      <span class="text">分享到qq</span>\n    </ion-item>\n    <ion-item (click)="shareQZone();" *ngIf="false">\n      <ion-icon name="contacts" item-start class="theme-icon"></ion-icon>\n      <span class="text">分享到qq空间</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* ThemeService */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* CToastProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_qqsdk__["a" /* QQSDK */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map