webpackJsonp([9],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SettingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ThemeService = /** @class */ (function () {
    function ThemeService() {
        // theme 是 BehaviorSubject实例
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    ThemeService.prototype.setActiveTheme = function (val) {
        // 改变值
        this.theme.next(val);
    };
    ThemeService.prototype.getActiveTheme = function () {
        // 观察
        return this.theme.asObservable();
    };
    ThemeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ThemeService);
    return ThemeService;
}());

//# sourceMappingURL=theme.service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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


var TabsPage = /** @class */ (function () {
    function TabsPage(navparams) {
        this.navparams = navparams;
        this.tab1Root = 'tabs-home';
        this.tab2Root = 'tabs-feature';
        this.tab3Root = 'tabs-about';
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        if (this.navparams.get("tabindex") == 1)
            this.tabRef.select(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Apps" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		688,
		8
	],
	"../pages/browser/browser.module": [
		690,
		7
	],
	"../pages/contact-detail/contact-detail.module": [
		689,
		6
	],
	"../pages/contact/contact.module": [
		691,
		5
	],
	"../pages/feature/feature.module": [
		692,
		4
	],
	"../pages/home/home.module": [
		694,
		1
	],
	"../pages/qrcode/qrcode.module": [
		693,
		3
	],
	"../pages/squeak/squeak.module": [
		695,
		0
	],
	"../pages/video/video.module": [
		696,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CToastProvider; });
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

/*
  Generated class for the CToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CToastProvider = /** @class */ (function () {
    function CToastProvider() {
        console.log('Hello CToastProvider Provider');
    }
    CToastProvider.prototype.show = function (message, duration) {
    };
    CToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CToastProvider);
    return CToastProvider;
}());

//# sourceMappingURL=c-toast.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_cell__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlphaSectionComponent = /** @class */ (function () {
    function AlphaSectionComponent(elementRef) {
        this.elementRef = elementRef;
        this._current = false;
    }
    AlphaSectionComponent.prototype.getElementRef = function () {
        return this.elementRef;
    };
    AlphaSectionComponent.prototype.ngAfterViewChecked = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AlphaSectionComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__alpha_cell__["a" /* AlphaCellComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], AlphaSectionComponent.prototype, "_listOfAlphaCell", void 0);
    AlphaSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-alpha-section',
            template: "\n      <div class=\"alpha-section\" [class.alpha-section-current]=\"_current\">\n            <!-- group-->\n            <div class=\"alpha-section-index\" >\n              {{index}}\n            </div>\n\n            <!--\u5206\u7EC4\u4E0B\u7684\u8BE6\u7EC6\u5185\u5BB9-->\n            <div class=\"alpha-section-main\">\n              <ng-content>\n\n              </ng-content>\n            </div>\n        </div>\n    ",
            styles: ["\n    .alpha-section-index{\n      margin: 0;\n      padding: 2px 10px 2px 10px;\n      background-color: #f4f4f4;\n      /*border-bottom: 1px solid #dedede;*/\n    }\n\n    .alpha-section-main{\n      /*border-bottom: 1px solid #dedede;*/\n    }\n\n    .alpha-section-current .alpha-section-index{\n        position: sticky;\n        position: -webkit-sticky;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        z-index: 3;\n        transform: translateZ(0px);\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AlphaSectionComponent);
    return AlphaSectionComponent;
}());

//# sourceMappingURL=alpha-section.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaCellComponent; });
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

var AlphaCellComponent = /** @class */ (function () {
    function AlphaCellComponent() {
    }
    AlphaCellComponent.prototype.ngOnInit = function () { };
    AlphaCellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-alpha-cell',
            template: "\n      <div class=\"alpha-cell\">\n        <div class=\"alpha-cell-item\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    ",
            styles: ["\n      .alpha-cell{\n        background-color: #fff;\n        padding-left:10px\n      }\n\n      .alpha-cell-item{\n        box-sizing: border-box;\n        color: inherit;\n        min-height: 40px;\n        display: block;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none;\n        border-bottom: 1px solid #F2F4F7;\n        width: 100%;\n        display: flex;\n        align-items: center;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], AlphaCellComponent);
    return AlphaCellComponent;
}());

//# sourceMappingURL=alpha-cell.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__(375);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_list_alpha_list_module__ = __webpack_require__(666);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__alpha_list_alpha_list_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__theme_theme_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c_toast_c_toast__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__theme_theme_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__c_toast_c_toast__["a"]; });



//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_section__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlphaListComponent = /** @class */ (function () {
    function AlphaListComponent() {
        this._flag = true;
        this._indexes = []; //右侧导航
        this._offsetTops = []; // 每个AlphaSection 的offsetTop
        this._indicatorTime = null;
        this._showModal = false;
        this.hasTop = false;
    }
    AlphaListComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._flag && this._listOfAlphaSection) {
            this._listOfAlphaSection.forEach(function (section) {
                _this._indexes.push(section.index);
                var offsetTop = section.getElementRef().nativeElement.offsetTop;
                _this._offsetTops.push(offsetTop);
            });
            this._flag = false;
            if (this.hasTop) {
                this._indexes.unshift('#');
                this._offsetTops.unshift(0);
            }
        }
    };
    AlphaListComponent.prototype.onScroll = function (e) {
        var _this = this;
        e.preventDefault();
        var scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;
        this._offsetTops.forEach(function (v, i) {
            if (scrollTopOffsetTop >= v) {
                _this._currentIndicator = _this._indexes[i];
                //
                _this.setCurrentSection(_this._currentIndicator);
            }
        });
    };
    AlphaListComponent.prototype.touchstart = function (e) {
        this._navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
    };
    AlphaListComponent.prototype.touchmove = function (e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
    };
    AlphaListComponent.prototype.touchend = function (e) {
        var _this = this;
        this._indicatorTime = setTimeout(function () {
            _this._showModal = false;
            _this._currentIndicator = '';
        }, 500);
    };
    AlphaListComponent.prototype.scrollList = function (y) {
        var currentItem = document.elementFromPoint(this._navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('alpha-bar')) {
            return;
        }
        this._currentIndicator = currentItem['innerText'];
        var index = this._indexes.indexOf(this._currentIndicator);
        this.scrollContent.nativeElement.scrollTop = this._offsetTops[index];
        this._showModal = true;
        if (this._indicatorTime) {
            clearTimeout(this._indicatorTime);
        }
    };
    AlphaListComponent.prototype.setCurrentSection = function (currentindex) {
        var listArray = this._listOfAlphaSection.toArray();
        listArray.forEach(function (section) {
            if (section.index === currentindex) {
                section._current = true;
            }
            else {
                section._current = false;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlphaListComponent.prototype, "hasTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('top'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AlphaListComponent.prototype, "top", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__alpha_section__["a" /* AlphaSectionComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], AlphaListComponent.prototype, "_listOfAlphaSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AlphaListComponent.prototype, "scrollContent", void 0);
    AlphaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-alpha-list',
            template: "\n    <div class=\"alpha-list\">\n      <div class=\"alpha-list-wrapper\"  #scrollContent tappable (scroll)=\"onScroll($event)\">\n        <ng-content select=\"[top]\"></ng-content>\n        <ng-content></ng-content>\n      </div>\n\n      <div class=\"alpha-list-nav\" (touchstart)=\"touchstart($event)\" (touchmove)=\"touchmove($event)\" (touchend)=\"touchend($event)\">\n        <div class=\"alpha-bar\" *ngFor=\"let index of _indexes;\"\n             [class.alpha-list-nav-activate]=\"index === _currentIndicator\">\n          {{index}}\n        </div>\n      </div>\n      \n      <div class=\"modal\" [class.show]=\"_showModal\">\n        {{_currentIndicator}}\n      </div>\n    </div>\n  ",
            styles: ["\n    ::-webkit-scrollbar {\n      width: 0\n    }\n\n    .alpha-list{\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      height: 100%;\n      overflow: hidden;\n      transform:translate(0,0);\n    }\n\n    .alpha-list-wrapper{\n      width: 100%;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .alpha-list-nav{\n      width:6%;\n      position: absolute;\n      right: 0;\n      top: 50px;\n      display: flex;\n      justify-content: flex-start;\n      flex-direction: column;\n      text-align: center;\n      background-color: rgba(245, 245, 245, 0.3);\n      height: 100%;\n      z-index: 1000;\n      -webkit-touch-callout: none;\n    }\n\n    .alpha-bar{\n      padding: 2px 6px;\n      font-size: 16px;\n    }\n\n    .alpha-list-nav-activate{\n      color: red;\n    }\n\n    .modal {\n      top: 50%;\n      left: 50%;\n      z-index: 100;\n      position: fixed;\n      pointer-events: none;\n      width: 20vw;\n      height: 20vw;\n      line-height: 20vw;\n      margin-left: -10vw;\n      margin-top: -10vw;\n      color: #fff;\n      font-size: 3em;\n      text-align: center;\n      border-radius: 8px;\n      background-color: rgba(0, 0, 0, 0.52);\n      -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      -webkit-transition: opacity .5s;\n      -o-transition: opacity .5s;\n      transition: opacity .5s;\n      opacity: 0;\n    }\n\n    .modal.show {\n      opacity: 1;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], AlphaListComponent);
    return AlphaListComponent;
}());

//# sourceMappingURL=alpha-list.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserPopover; });
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
/**
 * Created by admin on 2016/11/22.
 */


var BrowserPopover = /** @class */ (function () {
    function BrowserPopover(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.parentCallback = this.navParams.data.callback;
    }
    // 刷新
    BrowserPopover.prototype.refresh = function () {
        this.parentCallback.refresh();
        this.viewCtrl.dismiss();
    };
    BrowserPopover.prototype.close = function () {
        this.viewCtrl.dismiss();
        this.parentCallback.close();
    };
    BrowserPopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n     <button ion-item detail-none (click)=\"refresh()\">\u5237\u65B0</button>\n      <button ion-item detail-none (click)=\"close()\">\u5173\u95ED</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BrowserPopover);
    return BrowserPopover;
}());

//# sourceMappingURL=browser-popover.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_browser_browser_popover__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_index__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_c_toast_c_toast__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_browser_browser_popover__["a" /* BrowserPopover */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    // iconMode: 'ios',
                    // mode: 'ios',
                    // backButtonText: '返回',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition',
                    tabsHideOnSubPages: 'true' //ionic3隐藏全部子页面tabs
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutModule', name: 'tabs-about', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-detail/contact-detail.module#ContactDetailModule', name: 'contact-detail', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/browser/browser.module#BrowserPageModule', name: 'browser', segment: 'browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'contact', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feature/feature.module#FeatureModule', name: 'tabs-feature', segment: 'feature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qrcode/qrcode.module#QrCodeModule', name: 'page-qrcode', segment: 'qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'tabs-home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/squeak/squeak.module#HomeModule', name: 'squeak', segment: 'squeak', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'video', segment: 'video', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__modules_index__["b" /* SharedModule */]
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_browser_browser_popover__["a" /* BrowserPopover */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme_service__["a" /* ThemeService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__["a" /* Clipboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_c_toast_c_toast__["a" /* CToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_index__["c" /* QrCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_index__["b" /* Grid9Component */],
                __WEBPACK_IMPORTED_MODULE_3__components_index__["a" /* CToastComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_index__["c" /* QrCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_index__["b" /* Grid9Component */],
                __WEBPACK_IMPORTED_MODULE_3__components_index__["a" /* CToastComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__components_index__["a" /* CToastComponent */]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__qrcode_qrcode__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_grid9_grid9__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_c_toast_c_toast__ = __webpack_require__(381);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__qrcode_qrcode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_grid9_grid9__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__components_c_toast_c_toast__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qrcanvas__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qrcanvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qrcanvas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrCodeComponent = /** @class */ (function () {
    function QrCodeComponent(elementRef) {
        this.elementRef = elementRef;
        this.effects = ['none', 'liquid', 'round', 'spot'];
    }
    QrCodeComponent.prototype.ngAfterViewInit = function () {
        // this.generateQrCode();
    };
    QrCodeComponent.prototype.ngOnChanges = function (changes) {
        if ('background' in changes ||
            'backgroundAlpha' in changes ||
            'foreground' in changes ||
            'foregroundAlpha' in changes ||
            'colorOut' in changes ||
            'colorIn' in changes ||
            'level' in changes ||
            'mime' in changes ||
            'padding' in changes ||
            'size' in changes ||
            'data' in changes ||
            'logo' in changes ||
            'canvas' in changes) {
            this.generateQrCode();
        }
    };
    QrCodeComponent.prototype.generateQrCode = function () {
        var _this = this;
        var innerHTML = "";
        this.elementRef.nativeElement.querySelector('#qrcode').innerHTML = innerHTML;
        // document.getElementById('qrcode').innerText = '';
        var colorFore = this.foreground;
        var colorOut = this.colorOut;
        var colorIn = this.colorIn;
        this.options = {
            cellSize: 8,
            size: this.size,
            correctLevel: 'H',
            data: this.data,
            // logo: {
            //   image: image,
            //   size: 10 / 100,
            // },
            foreground: [
                // foreground color
                { style: colorFore },
                // outer squares of the positioner
                { row: 0, rows: 4, col: 0, cols: 4, style: colorOut },
                { row: -4, rows: 4, col: 0, cols: 4, style: colorOut },
                { row: 0, rows: 4, col: -4, cols: 4, style: colorOut },
                // inner squares of the positioner
                { row: 1, rows: 2, col: 1, cols: 2, style: colorIn },
                { row: -3, rows: 2, col: 1, cols: 2, style: colorIn },
                { row: 1, rows: 2, col: -3, cols: 2, style: colorIn },
            ],
            background: this.background,
            effect: {
                key: 'none',
                value: 1,
            }
        };
        this.options.effect.key = this.effects[Math.floor(Math.random() * this.effects.length)];
        if (this.logo) {
            var image = new Image();
            image.src = this.logo;
            this.options.logo = {
                image: image,
                size: 10 / 100
            };
            image.onload = function () {
                var canvas = __WEBPACK_IMPORTED_MODULE_1_qrcanvas___default()(_this.options);
                // document.getElementById('qrcode').appendChild(canvas);
                _this.elementRef.nativeElement.querySelector('#qrcode').appendChild(canvas);
            };
        }
        else {
            var canvas = __WEBPACK_IMPORTED_MODULE_1_qrcanvas___default()(this.options);
            // document.getElementById('qrcode').appendChild(canvas);
            this.elementRef.nativeElement.querySelector('#qrcode').appendChild(canvas);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "logo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "background", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "foreground", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "colorOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "colorIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], QrCodeComponent.prototype, "level", void 0);
    QrCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-qrcode',template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\modules\shared\components\qrcode\qrcode.html"*/'<div id="qrcode" (click)="generateQrCode()"></div>\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\modules\shared\components\qrcode\qrcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], QrCodeComponent);
    return QrCodeComponent;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid9Component; });
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


var Grid9Component = /** @class */ (function () {
    function Grid9Component(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Grid9Component.prototype.detail = function (module) {
        if (!module.link)
            return;
        if (!module.isThirdParty) {
            this.navCtrl.push(module.link, { item: module });
            return;
        }
        else {
            var browser = {
                title: module.name,
                url: module.link
            };
            this.navCtrl.push('browser', { browser: browser });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], Grid9Component.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], Grid9Component.prototype, "showTitle", void 0);
    Grid9Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-grid9',template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\modules\shared\components\grid9\grid9.html"*/'<ion-card>\n\n  <ion-card-content class="card-header" *ngIf="showTitle">\n\n    <div class="card-title">\n\n      {{data.name}}\n\n    </div>\n\n  </ion-card-content>\n\n  <ion-row>\n\n    <ion-col class="col"\n\n             *ngFor="let module of data.modules">\n\n      <div (click)="detail(module)">\n\n        <div class="p-img">\n\n          <img class="img" [src]="module.image"/>\n\n        </div>\n\n        <div class="name">{{module.name}}</div>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-card>\n\n\n\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\modules\shared\components\grid9\grid9.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Grid9Component);
    return Grid9Component;
}());

//# sourceMappingURL=grid9.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers__ = __webpack_require__(346);
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
 * Generated class for the CToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CToastComponent = /** @class */ (function () {
    function CToastComponent(cToast) {
        this.cToast = cToast;
        this.active = false;
        this.message = '自定义Toast';
        //  定义隐藏动画的变量
        this.hide = false;
        console.log('Hello CToastComponent Component');
        this.cToast.show = this.show.bind(this);
    }
    CToastComponent.prototype.show = function (message, duration) {
        var _this = this;
        this.message = message;
        this.active = true;
        setTimeout(function () {
            _this.hide = true;
            setTimeout(function () {
                _this.hide = false;
                _this.active = false;
            }, 200); // 隐藏动画完后再移除
        }, duration);
    };
    CToastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'c-toast',template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\modules\shared\components\c-toast\c-toast.html"*/'<!-- Generated template for the CToastComponent component -->\n<div class="c-toast" *ngIf="active" [class.c-show]="active" [class.c-hide]="hide">\n  <div>\n    {{ message }}\n  </div>\n</div>\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\modules\shared\components\c-toast\c-toast.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_providers__["a" /* CToastProvider */]])
    ], CToastComponent);
    return CToastComponent;
}());

//# sourceMappingURL=c-toast.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_list__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alpha_section__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alpha_cell__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AlphaListModule = /** @class */ (function () {
    function AlphaListModule() {
    }
    AlphaListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__alpha_list__["a" /* AlphaListComponent */],
                __WEBPACK_IMPORTED_MODULE_2__alpha_section__["a" /* AlphaSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__alpha_cell__["a" /* AlphaCellComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__alpha_list__["a" /* AlphaListComponent */],
                __WEBPACK_IMPORTED_MODULE_2__alpha_section__["a" /* AlphaSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__alpha_cell__["a" /* AlphaCellComponent */]
            ]
        })
    ], AlphaListModule);
    return AlphaListModule;
}());

//# sourceMappingURL=alpha-list.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme_service__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, themeService) {
        var _this = this;
        this.themeService = themeService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.themeService.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\alex\github\ionic3-awesome\src\app\app.html"*/'<c-toast></c-toast>\n<ion-nav [root]="rootPage" [class]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"C:\alex\github\ionic3-awesome\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme_service__["a" /* ThemeService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map