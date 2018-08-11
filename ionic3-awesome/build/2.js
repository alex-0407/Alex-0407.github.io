webpackJsonp([2],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPageModule", function() { return WeatherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WeatherPageModule = /** @class */ (function () {
    function WeatherPageModule() {
    }
    WeatherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__weather__["a" /* WeatherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__weather__["a" /* WeatherPage */])
            ],
        })
    ], WeatherPageModule);
    return WeatherPageModule;
}());

//# sourceMappingURL=weather.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_weather_weather__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(361);
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
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WeatherPage = /** @class */ (function () {
    function WeatherPage(navCtrl, navParams, weatherProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.weatherProvider = weatherProvider;
        this.storage = storage;
    }
    WeatherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WeatherPage');
    };
    WeatherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // 每次进入重新获取
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    city: '唐山'
                };
            }
            _this.weatherProvider.getWeather(_this.location.city).subscribe(function (result) {
                _this.weatherResult = result;
                _this.weather = _this.weatherResult.result;
                _this.weatherImg = 'http://www.moji.com//templets/mojichina/images/weather/weather/w' + _this.weather.img + '.png';
            });
        });
    };
    WeatherPage.prototype.changeCity = function () {
        var cityBkData = function (msg) {
            return new Promise(function (resolve, reject) {
                if (msg != undefined) {
                    resolve(true);
                }
                else {
                    reject(Error('error'));
                }
            });
        };
        this.navCtrl.push('ChangecityPage', { 'cityBkData': cityBkData });
    };
    WeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-weather',template:/*ion-inline-start:"/Users/dongxingbin/github/ionic3-awesome/src/pages/weather/weather.html"*/'<!--\n  Generated template for the WeatherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>weather</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="home">\n  <ion-grid *ngIf="weather">\n    <ion-row>\n      <ion-col>\n        <div class="location" (click)="changeCity();">{{weather.city}}</div>\n      </ion-col>\n      <ion-col>\n        <div class="icon">\n          <img src="{{weatherImg}}" alt="">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 class="temp">{{weather.temp}}℃</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col width=100>\n        <ion-list>\n          <ion-item>\n            <strong>温度：</strong>{{weather.templow}}℃ -- {{weather.temphigh}}℃\n          </ion-item>\n          <ion-item>\n            <strong>风向：</strong>{{weather.winddirect}}\n          </ion-item>\n          <ion-item>\n            <strong>湿度：</strong>{{weather.humidity}}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/dongxingbin/github/ionic3-awesome/src/pages/weather/weather.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__providers_weather_weather__["a" /* WeatherProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], WeatherPage);
    return WeatherPage;
}());

//# sourceMappingURL=weather.js.map

/***/ })

});
//# sourceMappingURL=2.js.map