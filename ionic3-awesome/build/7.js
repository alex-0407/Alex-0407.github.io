webpackJsonp([7],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangecityPageModule", function() { return ChangecityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changecity__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_multi_picker__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion_multi_picker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangecityPageModule = /** @class */ (function () {
    function ChangecityPageModule() {
    }
    ChangecityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changecity__["a" /* ChangecityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__changecity__["a" /* ChangecityPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ion_multi_picker__["MultiPickerModule"]
            ],
        })
    ], ChangecityPageModule);
    return ChangecityPageModule;
}());

//# sourceMappingURL=changecity.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangecityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__ = __webpack_require__(362);
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
 * Generated class for the ChangecityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangecityPage = /** @class */ (function () {
    function ChangecityPage(navCtrl, navParams, storage, weatherProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.weatherProvider = weatherProvider;
        this.storage.get('location').then(function (val) {
            if (val != null) {
                var location_1 = JSON.parse(val);
                _this.city = location_1.city;
            }
            else {
                _this.city = '唐山';
            }
        });
        this.cityBkData = this.navParams.get('cityBkData');
        this.cityColumns = weatherProvider.citys;
    }
    ChangecityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangecityPage');
    };
    ChangecityPage.prototype.saveForm = function () {
        var _this = this;
        var location = {
            city: this.city
        };
        this.cityBkData(this.city).then(function (result) {
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
        this.storage.set('location', JSON.stringify(location));
    };
    ChangecityPage.prototype.saveCitySelect = function () {
        var _this = this;
        var location = {
            city: this.city
        };
        var isSave = false;
        var cityArr = document.getElementById('cities').innerText;
        if (cityArr) {
            var cityTmp = cityArr.split('-');
            if (cityTmp[2] && cityTmp[2] != '市辖区') {
                location.city = cityTmp[2];
                isSave = true;
            }
        }
        if (isSave) {
            this.cityBkData(this.city).then(function (result) {
                _this.navCtrl.pop();
            }, function (err) {
                console.log(err);
            });
            this.storage.set('location', JSON.stringify(location));
        }
    };
    ChangecityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changecity',template:/*ion-inline-start:"/Users/dongxingbin/github/ionic3-awesome/src/pages/changecity/changecity.html"*/'<!--\n  Generated template for the ChangecityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>changecity</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <form (ngSubmit)="saveForm()">\n          <ion-item>\n            <ion-label fixed>\n              城市\n            </ion-label>\n            <ion-input [(ngModel)]="city" name="city" type="text"></ion-input>\n          </ion-item>\n          <button ion-button type="submit" class="ion">保存</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="pin" item-start></ion-icon>\n      <ion-label>城市</ion-label>\n      <ion-multi-picker id="cities" item-content [multiPickerColumns]="cityColumns" [separator]="\'-\'" [cancelText]="\'取消\'" [doneText]="\'完成\'"></ion-multi-picker>\n    </ion-item>\n    <button ion-button class="ion" (click)="saveCitySelect();">保存</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dongxingbin/github/ionic3-awesome/src/pages/changecity/changecity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_weather_weather__["a" /* WeatherProvider */]])
    ], ChangecityPage);
    return ChangecityPage;
}());

//# sourceMappingURL=changecity.js.map

/***/ })

});
//# sourceMappingURL=7.js.map