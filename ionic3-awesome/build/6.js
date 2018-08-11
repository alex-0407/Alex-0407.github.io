webpackJsonp([6],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailModule", function() { return ContactDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_detail__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactDetailModule = /** @class */ (function () {
    function ContactDetailModule() {
    }
    ContactDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_detail__["a" /* ContactDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_detail__["a" /* ContactDetailPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contact_detail__["a" /* ContactDetailPage */]
            ],
            providers: []
        })
    ], ContactDetailModule);
    return ContactDetailModule;
}());

//# sourceMappingURL=contact-detail.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactDetailPage = /** @class */ (function () {
    function ContactDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.get('item');
    }
    ContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"/Users/dongxingbin/github/ionic3-awesome/src/pages/contact-detail/contact-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-list no-border no-lines="true">\n    <ion-item-divider no-border no-lines="true" color="light"></ion-item-divider>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img\n          [src]="item ? item.avatar : \'https://raw.githubusercontent.com/ionic-team/ionic-preview-app/master/src/assets/img/avatar-ts-woody.png\'">\n      </ion-thumbnail>\n      <h2>{{item ? item.name : \'zhangsan\'}}</h2>\n    </ion-item>\n  </ion-list>\n  <ion-list no-lines="true">\n    <ion-item class="item-bottom-line">\n      <ion-icon name="female" class="theme-icon" item-start *ngIf="item.gender==\'女\'"></ion-icon>\n      <ion-icon name="male" class="theme-icon" item-start *ngIf="item.gender==\'男\'"></ion-icon>\n      性别\n      <ion-note item-end>\n        {{item ? item.gender : \'\'}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list no-lines="true">\n    <ion-item class="item-bottom-line">\n      <ion-icon name="call" class="theme-icon" item-start></ion-icon>\n      电话\n      <ion-note item-end>\n        {{item ? item.phone : \'12345678123\'}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="mail" class="theme-icon" item-start></ion-icon>\n      邮箱\n      <ion-note item-end>\n        {{item ? item.mail : \'666666@qq.com\'}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dongxingbin/github/ionic3-awesome/src/pages/contact-detail/contact-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map