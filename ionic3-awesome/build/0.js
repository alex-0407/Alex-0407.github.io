webpackJsonp([0],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_index__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_3__modules_index__["a" /* AlphaListModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
            ],
            providers: []
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_alpha_list_alpha_list__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.data = [];
        this.items = [];
        this.isFilter = false;
        this.data = [{
                'id': 'A',
                'items': [{
                        'name': '阿珂',
                        'avatar': 'assets/imgs/ake.jpg',
                        'phone': '13900010008',
                        'mail': 'ake@163.com',
                        'gender': '女',
                        'fl': 'A'
                    }]
            }, {
                'id': 'D',
                'items': [{
                        'name': '妲己',
                        'avatar': 'assets/imgs/daji.jpg',
                        'phone': '1390011011',
                        'mail': 'daji@163.com',
                        'gender': '女',
                        'fl': 'D'
                    },
                    {
                        'name': '貂蝉',
                        'avatar': 'assets/imgs/diaochan.jpg',
                        'phone': '13900010001',
                        'mail': 'diaochan@163.com',
                        'gender': '女',
                        'fl': 'D'
                    },
                    {
                        'name': '狄仁杰',
                        'avatar': 'assets/imgs/direnjie.jpg',
                        'phone': '13900010001',
                        'mail': 'direnjie@163.com',
                        'gender': '男',
                        'fl': 'D'
                    }]
            }, {
                'id': 'H',
                'items': [{
                        'name': '猴子',
                        'avatar': 'assets/imgs/houzi.jpg',
                        'phone': '13900010002',
                        'mail': 'houzi@163.com',
                        'gender': '男',
                        'fl': 'H'
                    }]
            }, {
                'id': 'L',
                'items': [{
                        'name': '李白',
                        'avatar': 'assets/imgs/libai.jpg',
                        'phone': '13900011012',
                        'mail': 'libai@163.com',
                        'gender': '男',
                        'fl': 'L'
                    }]
            }, {
                'id': 'N',
                'items': [{
                        'name': '娜可露露',
                        'avatar': 'assets/imgs/nakelulu.jpg',
                        'phone': '13900011012',
                        'mail': 'nakelulu@163.com',
                        'gender': '女',
                        'fl': 'N'
                    }]
            }, {
                'id': 'X',
                'items': [{
                        'name': '夏侯惇',
                        'avatar': 'assets/imgs/xiahoudun.jpg',
                        'phone': '13900011012',
                        'mail': 'xiahoudun@163.com',
                        'gender': '男',
                        'fl': 'X'
                    }]
            }, {
                'id': 'Z',
                'items': [{
                        'name': '赵云',
                        'avatar': 'assets/imgs/zhaoyun.jpg',
                        'phone': '13900011012',
                        'mail': 'zhaoyun@163.com',
                        'gender': '男',
                        'fl': 'Z'
                    }, {
                        'name': '甄姬',
                        'avatar': 'assets/imgs/zhenji.jpg',
                        'phone': '13900010004',
                        'mail': 'zhenji@163.com',
                        'gender': '女',
                        'fl': 'Z'
                    }]
            }];
        this.getContact();
    }
    ContactPage.prototype.ngAfterViewInit = function () {
    };
    ContactPage.prototype.ionViewWillEnter = function () {
    };
    ContactPage.prototype.getCurrentItems = function (ev) {
        if (!this.searchText) {
            this.searchItems = this.allItems.concat();
            this.isFilter = false;
            return;
        }
        this.isFilter = true;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.searchItems = this.allItems.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.fl.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ContactPage.prototype.onClearFilter = function (ev) {
        this.isFilter = false;
    };
    ContactPage.prototype.getContact = function () {
        var _this = this;
        this.data.forEach(function (idx) {
            idx.items.forEach(function (item) {
                _this.items.push(item);
            });
        });
        this.allItems = this.items.concat();
    };
    ContactPage.prototype.goDetail = function (contact) {
        this.navCtrl.push('contact-detail', { 'item': contact });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__modules_alpha_list_alpha_list__["a" /* AlphaListComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__modules_alpha_list_alpha_list__["a" /* AlphaListComponent */])
    ], ContactPage.prototype, "alist", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/dongxingbin/github/ionic3-awesome/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>通讯录</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <div top>\n    <ion-searchbar [(ngModel)]="searchText" (ionInput)="getCurrentItems($event)" (ionClear)="onClearFilter($event)" placeholder="搜索"></ion-searchbar>\n  </div>\n  <ion-alpha-list [hasTop]="true" *ngIf="!isFilter">\n    <ng-container *ngFor="let i of data">\n      <ion-alpha-section [index]="i.id">\n        <ng-container *ngFor="let contact of i.items">\n          <ion-alpha-cell>\n            <ion-item (click)="goDetail(contact);">\n              <ion-avatar item-start>\n                <img [src]="contact.avatar" class="img"/>\n              </ion-avatar>\n              <ion-label>\n                <h2>{{contact.name}}</h2>\n                <!--<p *ngIf="contact.duty">{{contact.duty}}</p>-->\n              </ion-label>\n            </ion-item>\n          </ion-alpha-cell>\n        </ng-container>\n      </ion-alpha-section>\n    </ng-container>\n  </ion-alpha-list>\n  <div *ngIf="isFilter">\n    <ion-list no-lines="true">\n      <ion-item *ngFor="let item of searchItems" class="search-item" (click)="goDetail(item);">\n        <div item-start>\n          <img class="img" src="{{item.avatar}}" />\n        </div>\n        <ion-label [innerHTML]="item.name | keyword:searchText"></ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dongxingbin/github/ionic3-awesome/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_keyword_pipe__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_keyword_pipe__["a" /* KeywordPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_keyword_pipe__["a" /* KeywordPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeywordPipe = /** @class */ (function () {
    function KeywordPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeywordPipe.prototype.transform = function (val, keyword) {
        var Reg = new RegExp(keyword, 'i');
        if (val) {
            var res = val.replace(Reg, "<span style=\"color: red;\">" + keyword + "</span>");
            console.log(res);
            return this.sanitizer.bypassSecurityTrustHtml(res);
        }
    };
    KeywordPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keyword'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], KeywordPipe);
    return KeywordPipe;
}());

//# sourceMappingURL=keyword.pipe.js.map

/***/ })

});
//# sourceMappingURL=0.js.map