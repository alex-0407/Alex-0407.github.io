webpackJsonp([3,17],{

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_routing__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_buttons_buttons_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_grid_grid_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_icons_icons_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_modals_modals_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_typography_typography_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_buttons_components_flatButtons__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_buttons_components_raisedButtons__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_buttons_components_sizedButtons__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_buttons_components_disabledButtons__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_buttons_components_iconButtons__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_buttons_components_largeButtons__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_buttons_components_dropdownButtons__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_buttons_components_groupButtons__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_icons_icons_service__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_modals_default_modal_default_modal_component__ = __webpack_require__(709);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbModalModule */],
            __WEBPACK_IMPORTED_MODULE_5__ui_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__components_buttons_buttons_component__["a" /* Buttons */],
            __WEBPACK_IMPORTED_MODULE_8__components_grid_grid_component__["a" /* Grid */],
            __WEBPACK_IMPORTED_MODULE_9__components_icons_icons_component__["a" /* Icons */],
            __WEBPACK_IMPORTED_MODULE_10__components_modals_modals_component__["a" /* Modals */],
            __WEBPACK_IMPORTED_MODULE_11__components_typography_typography_component__["a" /* Typography */],
            __WEBPACK_IMPORTED_MODULE_6__ui_component__["a" /* Ui */],
            __WEBPACK_IMPORTED_MODULE_12__components_buttons_components_flatButtons__["a" /* FlatButtons */],
            __WEBPACK_IMPORTED_MODULE_13__components_buttons_components_raisedButtons__["a" /* RaisedButtons */],
            __WEBPACK_IMPORTED_MODULE_14__components_buttons_components_sizedButtons__["a" /* SizedButtons */],
            __WEBPACK_IMPORTED_MODULE_15__components_buttons_components_disabledButtons__["a" /* DisabledButtons */],
            __WEBPACK_IMPORTED_MODULE_16__components_buttons_components_iconButtons__["a" /* IconButtons */],
            __WEBPACK_IMPORTED_MODULE_17__components_buttons_components_largeButtons__["a" /* LargeButtons */],
            __WEBPACK_IMPORTED_MODULE_18__components_buttons_components_dropdownButtons__["a" /* DropdownButtons */],
            __WEBPACK_IMPORTED_MODULE_19__components_buttons_components_groupButtons__["a" /* GroupButtons */],
            __WEBPACK_IMPORTED_MODULE_21__components_modals_default_modal_default_modal_component__["a" /* DefaultModal */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_21__components_modals_default_modal_default_modal_component__["a" /* DefaultModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__components_icons_icons_service__["a" /* IconsService */]
        ]
    })
], UiModule);

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buttons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Buttons = (function () {
    function Buttons() {
    }
    return Buttons;
}());
Buttons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'buttons',
        template: __webpack_require__(953),
        styles: [__webpack_require__(852)]
    }),
    __metadata("design:paramtypes", [])
], Buttons);

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Grid = (function () {
    function Grid() {
    }
    return Grid;
}());
Grid = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'grid',
        template: __webpack_require__(962),
        styles: [__webpack_require__(853)]
    }),
    __metadata("design:paramtypes", [])
], Grid);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_service__ = __webpack_require__(708);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Icons = (function () {
    function Icons(_iconsService) {
        this._iconsService = _iconsService;
    }
    Icons.prototype.ngOnInit = function () {
        this.icons = this._iconsService.getAll();
    };
    return Icons;
}());
Icons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'icons',
        template: __webpack_require__(963),
        styles: [__webpack_require__(854)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__icons_service__["a" /* IconsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__icons_service__["a" /* IconsService */]) === "function" && _a || Object])
], Icons);

var _a;
//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsService = (function () {
    function IconsService() {
        this.icons = {
            kameleonIcons: [
                {
                    name: 'Beach',
                    img: 'Beach'
                },
                {
                    name: 'Bus',
                    img: 'Bus'
                },
                {
                    name: 'Cheese',
                    img: 'Cheese'
                },
                {
                    name: 'Desert',
                    img: 'Desert'
                },
                {
                    name: 'Images',
                    img: 'Images'
                },
                {
                    name: 'Magician',
                    img: 'Magician'
                },
                {
                    name: 'Makeup',
                    img: 'Makeup'
                },
                {
                    name: 'Programming',
                    img: 'Programming'
                },
                {
                    name: 'Shop',
                    img: 'Shop'
                },
                {
                    name: 'Surfer',
                    img: 'Surfer'
                },
                {
                    name: 'Phone Booth',
                    img: 'Phone-Booth'
                },
                {
                    name: 'Ninja',
                    img: 'Ninja'
                },
                {
                    name: 'Apartment',
                    img: 'Apartment'
                },
                {
                    name: 'Batman',
                    img: 'Batman'
                },
                {
                    name: 'Medal',
                    img: 'Medal-2'
                },
                {
                    name: 'Money',
                    img: 'Money-Increase'
                },
                {
                    name: 'Street View',
                    img: 'Street-View'
                },
                {
                    name: 'Student',
                    img: 'Student-3'
                },
                {
                    name: 'Bell',
                    img: 'Bell'
                },
                {
                    name: 'Woman',
                    img: 'Boss-5'
                },
                {
                    name: 'Euro',
                    img: 'Euro-Coin'
                },
                {
                    name: 'Chessboard',
                    img: 'Chessboard'
                },
                {
                    name: 'Burglar',
                    img: 'Burglar'
                },
                {
                    name: 'Dna',
                    img: 'Dna'
                },
                {
                    name: 'Clipboard Plan',
                    img: 'Clipboard-Plan'
                },
                {
                    name: 'Boss',
                    img: 'Boss-3'
                },
                {
                    name: 'Key',
                    img: 'Key'
                },
                {
                    name: 'Surgeon',
                    img: 'Surgeon'
                },
                {
                    name: 'Hacker',
                    img: 'Hacker'
                },
                {
                    name: 'Santa',
                    img: 'Santa'
                }
            ],
            kameleonRoundedIcons: [
                {
                    color: 'success',
                    img: 'Apartment',
                    name: 'Apartment'
                },
                {
                    color: 'warning',
                    img: 'Bus',
                    name: 'Bus'
                },
                {
                    color: 'primary',
                    img: 'Checklist',
                    name: 'Checklist'
                },
                {
                    color: 'warning',
                    img: 'Desert',
                    name: 'Desert'
                },
                {
                    color: 'danger',
                    img: 'Laptop-Signal',
                    name: 'Laptop Signal'
                },
                {
                    color: 'info',
                    img: 'Love-Letter',
                    name: 'Love Letter'
                },
                {
                    color: 'success',
                    img: 'Makeup',
                    name: 'Makeup'
                },
                {
                    color: 'primary',
                    img: 'Santa',
                    name: 'Santa'
                },
                {
                    color: 'success',
                    img: 'Surfer',
                    name: 'Surfer'
                },
                {
                    color: 'info',
                    img: 'Vector',
                    name: 'Vector'
                },
                {
                    color: 'warning',
                    img: 'Money-Increase',
                    name: 'Money Increase'
                },
                {
                    color: 'info',
                    img: 'Alien',
                    name: 'Alien'
                },
                {
                    color: 'danger',
                    img: 'Online-Shopping',
                    name: 'Online Shopping'
                },
                {
                    color: 'warning',
                    img: 'Euro-Coin',
                    name: 'Euro'
                },
                {
                    color: 'info',
                    img: 'Boss-3',
                    name: 'Boss'
                }
            ],
            ionicons: ['ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c', 'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap', 'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up', 'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon', 'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled', 'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help', 'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled', 'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star', 'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle', 'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b', 'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel', 'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive', 'ion-reply', 'ion-reply-all', 'ion-forward'],
            fontAwesomeIcons: ['fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h', 'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank', 'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer', 'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars', 'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o', 'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn'],
            socicon: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', ',', ';', ':', '+', '@', '=', '-', '^', '?', '$', '*', '&', '(', '#', '.', '_', ']', ')', '\'', '"', '}', '{']
        };
    }
    IconsService.prototype.getAll = function () {
        return this.icons;
    };
    return IconsService;
}());
IconsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], IconsService);

//# sourceMappingURL=icons.service.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(383);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultModal = (function () {
    function DefaultModal(activeModal) {
        this.activeModal = activeModal;
        this.modalContent = "Lorem ipsum dolor sit amet,\n   consectetuer adipiscing elit, sed diam nonummy\n   nibh euismod tincidunt ut laoreet dolore magna aliquam\n   erat volutpat. Ut wisi enim ad minim veniam, quis\n   nostrud exerci tation ullamcorper suscipit lobortis\n   nisl ut aliquip ex ea commodo consequat.";
    }
    DefaultModal.prototype.ngOnInit = function () { };
    DefaultModal.prototype.closeModal = function () {
        this.activeModal.close();
    };
    return DefaultModal;
}());
DefaultModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-service-modal',
        styles: [__webpack_require__((855))],
        template: __webpack_require__(964)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbActiveModal */]) === "function" && _a || Object])
], DefaultModal);

var _a;
//# sourceMappingURL=default-modal.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_modal_default_modal_component__ = __webpack_require__(709);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Modals = (function () {
    function Modals(modalService) {
        this.modalService = modalService;
    }
    Modals.prototype.lgModalShow = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__default_modal_default_modal_component__["a" /* DefaultModal */], { size: 'lg' });
        activeModal.componentInstance.modalHeader = 'Large Modal';
    };
    Modals.prototype.smModalShow = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__default_modal_default_modal_component__["a" /* DefaultModal */], { size: 'sm' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    };
    Modals.prototype.staticModalShow = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__default_modal_default_modal_component__["a" /* DefaultModal */], { size: 'sm',
            backdrop: 'static' });
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = "This is static modal, backdrop click\n                                                    will not close it. Click \u00D7 or confirmation button to close modal.";
    };
    Modals.prototype.childModalShow = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__default_modal_default_modal_component__["a" /* DefaultModal */], { size: 'sm' });
        activeModal.componentInstance.modalHeader = 'Child modal';
        activeModal.componentInstance.modalContent = "I am a child modal, opened from parent component!";
    };
    return Modals;
}());
Modals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modals',
        styles: [__webpack_require__(856)],
        template: __webpack_require__(965)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */]) === "function" && _a || Object])
], Modals);

var _a;
//# sourceMappingURL=modals.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Typography; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Typography = (function () {
    function Typography() {
    }
    return Typography;
}());
Typography = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'typography',
        template: __webpack_require__(966),
    }),
    __metadata("design:paramtypes", [])
], Typography);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ui; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ui = (function () {
    function Ui() {
    }
    return Ui;
}());
Ui = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ui',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Ui);

//# sourceMappingURL=ui.component.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisabledButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisabledButtons = (function () {
    function DisabledButtons() {
    }
    return DisabledButtons;
}());
DisabledButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'disabled-buttons',
        template: __webpack_require__(954),
    }),
    __metadata("design:paramtypes", [])
], DisabledButtons);

//# sourceMappingURL=disabledButtons.component.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__disabledButtons_component__ = __webpack_require__(809);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__disabledButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownButtons = (function () {
    function DropdownButtons() {
    }
    return DropdownButtons;
}());
DropdownButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dropdown-buttons',
        template: __webpack_require__(955)
    })
    // TODO: appendToBody does not implemented yet, waiting for it
    ,
    __metadata("design:paramtypes", [])
], DropdownButtons);

//# sourceMappingURL=dropdownButtons.component.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdownButtons_component__ = __webpack_require__(811);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dropdownButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlatButtons = (function () {
    function FlatButtons() {
    }
    return FlatButtons;
}());
FlatButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'flat-buttons',
        template: __webpack_require__(956),
    }),
    __metadata("design:paramtypes", [])
], FlatButtons);

//# sourceMappingURL=flatButtons.component.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flatButtons_component__ = __webpack_require__(813);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__flatButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupButtons = (function () {
    function GroupButtons() {
    }
    return GroupButtons;
}());
GroupButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'group-buttons',
        template: __webpack_require__(957),
    }),
    __metadata("design:paramtypes", [])
], GroupButtons);

//# sourceMappingURL=groupButtons.component.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__groupButtons_component__ = __webpack_require__(815);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__groupButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconButtons = (function () {
    function IconButtons() {
    }
    return IconButtons;
}());
IconButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'icon-buttons',
        template: __webpack_require__(958),
    }),
    __metadata("design:paramtypes", [])
], IconButtons);

//# sourceMappingURL=iconButtons.component.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iconButtons_component__ = __webpack_require__(817);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__iconButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__largeButtons_component__ = __webpack_require__(820);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__largeButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LargeButtons = (function () {
    function LargeButtons() {
    }
    return LargeButtons;
}());
LargeButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'large-buttons',
        template: __webpack_require__(959),
    }),
    __metadata("design:paramtypes", [])
], LargeButtons);

//# sourceMappingURL=largeButtons.component.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raisedButtons_component__ = __webpack_require__(822);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__raisedButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaisedButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RaisedButtons = (function () {
    function RaisedButtons() {
    }
    return RaisedButtons;
}());
RaisedButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raised-buttons',
        template: __webpack_require__(960),
    }),
    __metadata("design:paramtypes", [])
], RaisedButtons);

//# sourceMappingURL=raisedButtons.component.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sizedButtons_component__ = __webpack_require__(824);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sizedButtons_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizedButtons; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SizedButtons = (function () {
    function SizedButtons() {
    }
    return SizedButtons;
}());
SizedButtons = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sized-buttons',
        template: __webpack_require__(961),
    }),
    __metadata("design:paramtypes", [])
], SizedButtons);

//# sourceMappingURL=sizedButtons.component.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_buttons_buttons_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_grid_grid_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_icons_icons_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_modals_modals_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_typography_typography_component__ = __webpack_require__(711);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__ui_component__["a" /* Ui */],
        children: [
            { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_2__components_buttons_buttons_component__["a" /* Buttons */] },
            { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_3__components_grid_grid_component__["a" /* Grid */] },
            { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_4__components_icons_icons_component__["a" /* Icons */] },
            { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_6__components_typography_typography_component__["a" /* Typography */] },
            { path: 'modals', component: __WEBPACK_IMPORTED_MODULE_5__components_modals_modals_component__["a" /* Modals */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=ui.routing.js.map

/***/ }),

/***/ 852:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .basic-btns {\n  padding-top: 8px;\n  margin-bottom: -8px; }\n  :host /deep/ .widgets .basic-btns h5 {\n    line-height: 35px;\n    font-size: 12px; }\n    :host /deep/ .widgets .basic-btns h5.row-sm {\n      line-height: 30px; }\n    :host /deep/ .widgets .basic-btns h5.row-xs {\n      line-height: 22px; }\n  :host /deep/ .widgets .basic-btns > .row {\n    padding-bottom: 4px; }\n\n:host /deep/ .widgets .btns-row > div {\n  margin-bottom: 12px; }\n\n:host /deep/ .widgets .btns-same-width-sm .btn {\n  width: 48px; }\n\n:host /deep/ .widgets .btns-same-width-md .btn {\n  width: 79px; }\n\n:host /deep/ .widgets .btns-same-width-lg .btn {\n  width: 112px; }\n\n:host /deep/ .widgets ul.btn-list {\n  margin: 0 0 0 -18px;\n  padding: 0;\n  padding-top: 6px;\n  clear: both; }\n  :host /deep/ .widgets ul.btn-list li {\n    margin: 0px 0 12px 18px;\n    padding: 0;\n    list-style: none;\n    float: left; }\n\n:host /deep/ .widgets .btn-group-wrapper {\n  margin-bottom: 12px; }\n\n:host /deep/ .widgets .btn-icon {\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  padding: 0;\n  text-align: center; }\n\n:host /deep/ .widgets .btn-group-example {\n  float: left;\n  margin-right: 30px;\n  margin-bottom: 12px; }\n\n:host /deep/ .widgets .btn-toolbar-example {\n  float: left; }\n\n:host /deep/ .widgets .progress-buttons-container {\n  text-align: center;\n  font-size: 16px; }\n  :host /deep/ .widgets .progress-buttons-container span.button-title {\n    display: inline-block;\n    width: 100%;\n    line-height: 1;\n    font-size: 14px;\n    margin-bottom: 10px;\n    margin-top: 10px; }\n  :host /deep/ .widgets .progress-buttons-container .row + .row {\n    margin-top: 30px; }\n\n:host /deep/ .widgets .button-panel {\n  height: 315px; }\n  :host /deep/ .widgets .button-panel .btn {\n    width: 150px; }\n\n:host /deep/ .widgets .large-buttons-panel {\n  height: 202px; }\n\n:host /deep/ .widgets .button-panel.df-size-button-panel .btn-xs {\n  width: 60px; }\n\n:host /deep/ .widgets .button-panel.df-size-button-panel .btn-sm {\n  width: 90px; }\n\n:host /deep/ .widgets .button-panel.df-size-button-panel .btn-mm {\n  width: 120px; }\n\n:host /deep/ .widgets .button-panel.df-size-button-panel .btn-md {\n  width: 150px; }\n\n:host /deep/ .widgets .button-panel.df-size-button-panel .btn-xm {\n  width: 175px; }\n\n:host /deep/ .widgets .button-panel.df-size-button-panel .btn-lg {\n  width: 200px; }\n\n:host /deep/ .widgets .button-wrapper {\n  text-align: center;\n  margin: 5px 0; }\n\n:host /deep/ .widgets .btn-group.flex-dropdown {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host /deep/ .show-grid div[class^=col-] {\n  padding: 10px;\n  box-sizing: border-box; }\n  :host /deep/ .show-grid div[class^=col-] div {\n    color: #ffffff;\n    text-align: center;\n    font-size: 18px;\n    background-color: rgba(255, 255, 255, 0.3);\n    padding: 12px 5px; }\n\n:host /deep/ .grid-h {\n  margin-top: 40px;\n  margin-bottom: 0; }\n  :host /deep/ .grid-h:first-child {\n    margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ":host /deep/ .widgets .icons-list > div {\n  text-align: center;\n  margin-bottom: 32px; }\n\n:host /deep/ .widgets .icons-list i {\n  font-weight: 400;\n  font-size: 18px;\n  cursor: pointer; }\n\n:host /deep/ .widgets .icons-list.primary i:hover {\n  color: #ff8c00; }\n\n:host /deep/ .widgets .icons-list.success i:hover {\n  color: #8bd22f; }\n\n:host /deep/ .widgets .icons-list.warning i:hover {\n  color: #e7ba08; }\n\n:host /deep/ .widgets .icons-list.danger i:hover {\n  color: #f95372; }\n\n:host /deep/ .widgets a.see-all-icons {\n  float: right; }\n\n:host /deep/ .widgets .awesomeIcons {\n  height: 308px; }\n\n:host /deep/ .widgets .kameleon-row {\n  display: inline-block;\n  min-width: 102px;\n  width: 20%; }\n  :host /deep/ .widgets .kameleon-row .kameleon-icon {\n    padding: 0 10px; }\n    :host /deep/ .widgets .kameleon-row .kameleon-icon img {\n      width: 81px; }\n\n@media (max-width: 750px) {\n  :host /deep/ .widgets .kameleon-row {\n    width: 25%; } }\n\n@media (max-width: 550px) {\n  :host /deep/ .widgets .kameleon-row {\n    width: 33%; } }\n\n@media (max-width: 430px) {\n  :host /deep/ .widgets .kameleon-row {\n    width: 50%; } }\n\n:host /deep/ .widgets .kameleon-icon-tabs {\n  max-width: 84px; }\n  :host /deep/ .widgets .kameleon-icon-tabs img {\n    width: 100%;\n    min-width: 81px;\n    min-height: 81px; }\n\n:host /deep/ .widgets .kameleon-icon {\n  text-align: center;\n  margin: 0 auto; }\n  :host /deep/ .widgets .kameleon-icon img {\n    width: 100%; }\n  :host /deep/ .widgets .kameleon-icon span {\n    display: block;\n    text-align: center;\n    white-space: nowrap; }\n\n:host /deep/ .widgets .with-round-bg {\n  margin-bottom: 6px; }\n  :host /deep/ .widgets .with-round-bg img {\n    border-radius: 50%;\n    margin-bottom: 4px; }\n  :host /deep/ .widgets .with-round-bg img {\n    background: #ffffff; }\n  :host /deep/ .widgets .with-round-bg.success img {\n    background: #8bd22f; }\n  :host /deep/ .widgets .with-round-bg.danger img {\n    background: #f95372; }\n  :host /deep/ .widgets .with-round-bg.warning img {\n    background: #e7ba08; }\n  :host /deep/ .widgets .with-round-bg.info img {\n    background: #40daf1; }\n  :host /deep/ .widgets .with-round-bg.primary img {\n    background: #ff8c00; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".modal-buttons .btn {\n  margin-right: 20px; }\n\n.modal-content {\n  color: #7d7d7d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".modal {\n  padding-top: 300px; }\n  .modal .modal-content {\n    color: #7d7d7d; }\n    .modal .modal-content .modal-header {\n      border: none; }\n    .modal .modal-content .modal-footer {\n      border: none; }\n    .modal .modal-content .close {\n      outline: none; }\n\n.modal-buttons .btn {\n  margin-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n  <div class=\"row\">\n    <div class=\"col-xl-3 col-lg-6 col-md-6\">\n      <ba-card title=\"Flat Buttons\" baCardClass=\"with-scroll button-panel\">\n        <flat-buttons></flat-buttons>\n      </ba-card>\n    </div>\n    <div class=\"col-xl-3 col-lg-6 col-md-6\">\n      <ba-card title=\"Raised Buttons\" baCardClass=\"with-scroll button-panel\">\n        <raised-buttons></raised-buttons>\n      </ba-card>\n    </div>\n    <div class=\"col-xl-3 col-lg-6 col-md-6\">\n      <ba-card title=\"Different Sizes\" baCardClass=\"with-scroll button-panel df-size-button-panel\">\n        <sized-buttons></sized-buttons>\n      </ba-card>\n    </div>\n    <div class=\"col-xl-3 col-lg-6 col-md-6\">\n      <ba-card title=\"Disabled\" baCardClass=\"with-scroll button-panel\">\n        <disabled-buttons></disabled-buttons>\n      </ba-card>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n\n      <ba-card title=\"Icon Buttons\" baCardClass=\"with-scroll\">\n        <icon-buttons></icon-buttons>\n      </ba-card>\n\n      <ba-card title=\"Large Buttons\" baCardClass=\"with-scroll large-buttons-panel\">\n        <large-buttons></large-buttons>\n      </ba-card>\n\n    </div>\n    <div class=\"col-md-6\">\n\n      <ba-card title=\"Button Dropdowns\" baCardClass=\"with-scroll\">\n        <dropdown-buttons></dropdown-buttons>\n      </ba-card>\n\n      <ba-card title=\"Button Groups\" baCardClass=\"with-scroll\">\n        <group-buttons></group-buttons>\n      </ba-card>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\"\n         ba-panel\n         ba-panel-title=\"Progress Buttons\"\n         ba-panel-class=\"with-scroll\">\n      <div ng-include=\"'app/pages/ui/buttons/widgets/progressButtons.html'\"></div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = "<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-default\" disabled=\"disabled\">Default</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-primary\" disabled=\"disabled\">Primary</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-success\" disabled=\"disabled\">Success</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-info\" disabled=\"disabled\">Info</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-warning\" disabled=\"disabled\">Warning</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-danger\" disabled=\"disabled\">Danger</button>\n</div>\n"

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "<div class=\"row btns-row\">\n  <div class=\"col-sm-4 col-6\">\n    <div class=\"btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-primary\" ngbDropdownToggle>\n        Primary\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <div class=\"btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-success\" ngbDropdownToggle>\n        Success\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <div class=\"btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-info\" ngbDropdownToggle>\n        Info\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <div class=\"btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-default\" ngbDropdownToggle>\n        Default\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <div class=\"btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-warning\" ngbDropdownToggle>\n        Warning\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <div class=\"btn-group\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-danger\" ngbDropdownToggle>\n        Danger\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<h5 class=\"panel-subtitle\">Split button dropdowns</h5>\n\n<div class=\"row btns-row\">\n  <div class=\"col-sm-4 col-6 col-lg-4 col-md-6\">\n    <div class=\"btn-group flex-dropdown\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n      <button type=\"button\" class=\"btn btn-primary\" ngbDropdownToggle>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6 col-lg-4 col-md-6\">\n    <div class=\"btn-group flex-dropdown\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-success\">Success</button>\n      <button type=\"button\" class=\"btn btn-success\" ngbDropdownToggle>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6 col-lg-4 col-md-6\">\n    <div class=\"btn-group flex-dropdown\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-info\">Info</button>\n      <button type=\"button\" class=\"btn btn-info\" ngbDropdownToggle>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6 col-lg-4 col-md-6\">\n    <div class=\"btn-group flex-dropdown\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-default\">Default</button>\n      <button type=\"button\" class=\"btn btn-default\" ngbDropdownToggle>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6 col-lg-4 col-md-6\">\n    <div class=\"btn-group flex-dropdown\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n      <button type=\"button\" class=\"btn btn-warning\" ngbDropdownToggle>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-6 col-lg-4 col-md-6\">\n    <div class=\"btn-group flex-dropdown\" ngbDropdown>\n      <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n      <button type=\"button\" class=\"btn btn-danger\" ngbDropdownToggle>\n        <span class=\"sr-only\">Toggle Dropdown</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-item\"><a href=\"#\">Action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Another action</a></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Something else here</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li class=\"dropdown-item\"><a href=\"#\">Separated link</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-default\">Default</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-success\">Success</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-info\">Info</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n</div>\n"

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group-example\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n    <button type=\"button\" class=\"btn btn-danger\">Left</button>\n    <button type=\"button\" class=\"btn btn-danger\">Middle</button>\n    <button type=\"button\" class=\"btn btn-danger\">Right</button>\n  </div>\n</div>\n\n<div class=\"btn-toolbar-example\">\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\n      <button type=\"button\" class=\"btn btn-primary\">1</button>\n      <button type=\"button\" class=\"btn btn-primary\">2</button>\n      <button type=\"button\" class=\"btn btn-primary\">3</button>\n      <button type=\"button\" class=\"btn btn-primary\">4</button>\n    </div>\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">\n      <button type=\"button\" class=\"btn btn-primary\">5</button>\n      <button type=\"button\" class=\"btn btn-primary\">6</button>\n      <button type=\"button\" class=\"btn btn-primary\">7</button>\n    </div>\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\n      <button type=\"button\" class=\"btn btn-primary\">8</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = "<ul class=\"btn-list clearfix\">\n  <li>\n    <button type=\"button\" class=\"btn btn-primary btn-icon\"><i class=\"ion-android-download\"></i></button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-default btn-icon\"><i class=\"ion-stats-bars\"></i></button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-success btn-icon\"><i class=\"ion-android-checkmark-circle\"></i></button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-info btn-icon\"><i class=\"ion-information\"></i></button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-warning btn-icon\"><i class=\"ion-android-warning\"></i></button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-danger btn-icon\"><i class=\"ion-nuclear\"></i></button>\n  </li>\n</ul>\n\n<h5 class=\"panel-subtitle\">Buttons with icons</h5>\n\n<ul class=\"btn-list clearfix\">\n  <li>\n    <button type=\"button\" class=\"btn btn-primary btn-with-icon\"><i class=\"ion-android-download\"></i>Primary</button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-default btn-with-icon\"><i class=\"ion-stats-bars\"></i>Default</button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-success btn-with-icon\"><i class=\"ion-android-checkmark-circle\"></i>Success\n    </button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-info btn-with-icon\"><i class=\"ion-information\"></i>Info</button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-warning btn-with-icon\"><i class=\"ion-android-warning\"></i>Warning</button>\n  </li>\n  <li>\n    <button type=\"button\" class=\"btn btn-danger btn-with-icon\"><i class=\"ion-nuclear\"></i>Danger</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = "<div class=\"row btns-row btns-same-width-lg\">\n  <div class=\"col-sm-4 col-6\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg\">Primary</button>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <button type=\"button\" class=\"btn btn-success btn-lg\">Success</button>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <button type=\"button\" class=\"btn btn-info btn-lg\">Info</button>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <button type=\"button\" class=\"btn btn-default btn-lg\">Default</button>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <button type=\"button\" class=\"btn btn-warning btn-lg\">Warning</button>\n  </div>\n  <div class=\"col-sm-4 col-6\">\n    <button type=\"button\" class=\"btn btn-danger btn-lg\">Danger</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = "<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-default btn-raised\">Default</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-primary btn-raised\">Primary</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-success btn-raised\">Success</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-info btn-raised\">Info</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-warning btn-raised\">Warning</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-danger btn-raised\">Danger</button>\n</div>\n"

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = "<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-default  btn-xs\">Default</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-primary  btn-sm\">Primary</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-success btn-mm\">Success</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-info btn-md\">Info</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-warning btn-xm\">Warning</button>\n</div>\n<div class=\"button-wrapper\">\n  <button type=\"button\" class=\"btn btn-danger btn-lg\">Danger</button>\n</div>\n"

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <ba-card title=\"Inline Form\" baCardClass=\"with-scroll\">\n\n        <h4 class=\"grid-h\">Stacked to horizontal</h4>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n          <div class=\"col-md-1\">\n            <div>.col-md-1</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-8\">\n            <div>.col-md-8</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-6\">\n            <div>.col-md-6</div>\n          </div>\n          <div class=\"col-md-6\">\n            <div>.col-md-6</div>\n          </div>\n        </div>\n\n        <h4 class=\"grid-h\">Mobile and desktop</h4>\n        <div class=\"row show-grid\">\n          <div class=\"col-12 col-md-8\">\n            <div>xs-12 .col-md-8</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>xs-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-md-4\">\n            <div>xs-6 .col-md-4</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>xs-6 .col-md-4</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>xs-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6\">\n            <div>.col-6</div>\n          </div>\n          <div class=\"col-6\">\n            <div>.col-6</div>\n          </div>\n        </div>\n\n        <h4 class=\"grid-h\">Mobile, tablet, desktop</h4>\n        <div class=\"row show-grid\">\n          <div class=\"col-12 col-sm-6 col-md-8\">\n            <div>.col-12 .col-sm-6 .col-md-8</div>\n          </div>\n          <div class=\"col-6 col-md-4\">\n            <div>.col-6 .col-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n          <div class=\"clearfix hidden-xs-up\"></div>\n          <div class=\"col-6 col-sm-4\">\n            <div>.col-6 .col-sm-4</div>\n          </div>\n        </div>\n\n        <h4 class=\"grid-h\">Column wrapping</h4>\n        <div class=\"row show-grid\">\n          <div class=\"col-9\">\n            <div>.col-9</div>\n          </div>\n          <div class=\"col-4\">\n            <div>.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous\n              unit.\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div>.col-6<br>Subsequent columns continue along the new line.</div>\n          </div>\n        </div>\n\n        <h4 class=\"grid-h\">Responsive column resets</h4>\n        <div class=\"row show-grid\">\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3 <p>Resize your viewport or check it out on your phone for an example.</p></div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n          <div class=\"clearfix hidden-xs-up\"></div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n          <div class=\"col-6 col-sm-3\">\n            <div>.col-6 .col-sm-3</div>\n          </div>\n        </div>\n\n        <h4 class=\"grid-h\">Offsetting columns</h4>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-4\">\n            <div>.col-md-4</div>\n          </div>\n          <div class=\"col-md-4 offset-md-4\">\n            <div>.col-md-4 .offset-md-4</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-3 offset-md-3\">\n            <div>.col-md-3 .offset-md-3</div>\n          </div>\n          <div class=\"col-md-3 offset-md-3\">\n            <div>.col-md-3 .offset-md-3</div>\n          </div>\n        </div>\n        <div class=\"row show-grid\">\n          <div class=\"col-md-6 offset-md-3\">\n            <div>.col-md-6 .offset-md-3</div>\n          </div>\n        </div>\n\n        <h4 class=\"grid-h\">Grid options</h4>\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped\">\n            <thead>\n            <tr>\n              <th></th>\n              <th> Extra small devices\n                <small>Phones (&lt;544px)</small>\n              </th>\n              <th> Small devices\n                <small>Tablets (≥544px)</small>\n              </th>\n              <th> Medium devices\n                <small>Desktops (≥768px)</small>\n              </th>\n              <th> Large devices\n                <small>Desktops (≥992px)</small>\n              </th>\n              <th> Large devices\n                <small>Desktops (≥1200px)</small>\n              </th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\">Grid behavior</th>\n              <td>Horizontal at all times</td>\n              <td colspan=\"4\">Collapsed to start, horizontal above breakpoints</td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\">Container width</th>\n              <td>None (auto)</td>\n              <td>576px</td>\n              <td>720px</td>\n              <td>940px</td>\n              <td>1140px</td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\n              <td><code>.col-</code></td>\n              <td><code>.col-sm-</code></td>\n              <td><code>.col-md-</code></td>\n              <td><code>.col-lg-</code></td>\n              <td><code>.col-xl-</code></td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\n              <td colspan=\"5\">12</td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\n              <td colspan=\"5\">1.875rem / 30px (15px on each side of a column)</td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\n              <td colspan=\"5\">Yes</td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\">Offsets</th>\n              <td colspan=\"5\">Yes</td>\n            </tr>\n            <tr>\n              <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\n              <td colspan=\"5\">Yes</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </ba-card>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <ba-card title=\"Kameleon SVG Icons\" baCardClass=\"with-scroll\">\n        <div class=\"row clearfix\">\n          <div class=\"kameleon-row\" *ngFor=\"let icon of icons.kameleonIcons\">\n            <div class=\"kameleon-icon\"><img src=\"{{ (icon.img | baKameleonPicture )}}\"><span>{{ icon.name }}</span></div>\n          </div>\n        </div>\n        <a href=\"http://www.kameleon.pics/\" target=\"_blank\" class=\"see-all-icons\">See all Kamaleon icons</a>\n      </ba-card>\n\n      <ba-card title=\"Socicon\" baCardClass=\"with-scroll\">\n        <div class=\"row icons-list danger\">\n          <div class=\"col-2\" *ngFor=\"let icon of icons.socicon\"><i class=\"socicon\">{{ icon }}</i></div>\n        </div>\n        <a href=\"http://www.socicon.com/chart.php\" target=\"_blank\" class=\"see-all-icons\">See all Socicon icons</a>\n      </ba-card>\n    </div>\n    <div class=\"col-md-6\">\n      <ba-card title=\"Icons With Rounded Background\" baCardClass=\"with-scroll\">\n        <div class=\"row clearfix\">\n          <div class=\"kameleon-row\" *ngFor=\"let icon of icons.kameleonRoundedIcons\">\n            <div class=\"kameleon-icon with-round-bg {{ icon.color }}\"><img src=\"{{ ( icon.img | baKameleonPicture ) }}\"><span>{{ icon.name }}</span></div>\n          </div>\n        </div>\n        <a href=\"http://www.kameleon.pics/\" target=\"_blank\" class=\"see-all-icons\">See all Kamaleon icons</a>\n      </ba-card>\n\n      <ba-card title=\"Ionicons\" baCardClass=\"with-scroll\">\n        <div class=\"row icons-list primary\">\n          <div class=\"col-2\" *ngFor=\"let icon of icons.ionicons\"><i class=\"{{ icon }}\"></i></div>\n        </div>\n        <a href=\"http://ionicons.com/\" target=\"_blank\" class=\"see-all-icons\">See all ionicons icons</a>\n      </ba-card>\n\n      <ba-card title=\"Font Awesome Icons\" baCardClass=\"with-scroll\">\n        <div class=\"row icons-list success awesomeIcons\">\n          <div class=\"col-2\" *ngFor=\"let icon of icons.fontAwesomeIcons\"><i class=\"fa {{ icon }}\"></i></div>\n        </div>\n        <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\" target=\"_blank\" class=\"see-all-icons\">See all Font Awesome icons</a>\n      </ba-card>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{modalHeader}}</h4>\n    <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{modalContent}}\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary confirm-btn\" (click)=\"closeModal()\">Save changes</button>\n  </div>\n</div>\n"

/***/ }),

/***/ 965:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ba-card title=\"Modals\" class=\"modal-buttons\">\n        <button class=\"btn btn-success\" (click)=\"lgModalShow()\">Large modal</button>\n        <button class=\"btn btn-warning\" (click)=\"smModalShow()\">Small modal</button>\n        <button class=\"btn btn-primary\" (click)=\"staticModalShow()\">Static modal</button>\n        <button class=\"btn btn-danger\" (click)=\"childModalShow()\">Open child modal</button>\n      </ba-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 966:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n\n  <div class=\"typography-document-samples row\">\n    <div class=\"col-xlg-3 col-lg-6  col-md-6 col-sm-6 col-12 typography-widget\">\n\n      <ba-card title=\"Text Size\" baCardClass=\"with-scroll heading-widget\">\n\n        <div class=\"section-block\">\n          <h1>H1. Heading 1</h1>\n\n          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat\n            vestibulum eleifend pellentesque.</p>\n        </div>\n        <div class=\"section-block\">\n          <h2>H2. Heading 2</h2>\n\n          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat\n            vestibulum eleifend pellentesque.</p>\n        </div>\n        <div class=\"section-block\">\n          <h3>H3. Heading 3</h3>\n\n          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat\n            vestibulum eleifend pellentesque.</p>\n        </div>\n        <div class=\"section-block\">\n          <h4>H4. Heading 4</h4>\n\n          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra,.</p>\n        </div>\n        <div class=\"section-block\">\n          <h5>H5. Heading 5</h5>\n\n          <p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra.</p>\n        </div>\n\n      </ba-card>\n    </div>\n\n    <div class=\"col-xlg-3 col-lg-6  col-md-6 col-sm-6 col-12 typography-widget\">\n\n      <ba-card title=\"Some more text\" baCardClass=\"with-scroll more-text-widget\">\n\n        <div class=\"section-block light-text\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n            ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed\n            ornare\n            nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis.\n          </p>\n        </div>\n        <div class=\"section-block regular-text\">\n          <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula dfgz`zzsodales at. Nullam quis risus eget urna\n            mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur\n            ridiculus\n            mus. Nullam id dolor id.\n          </p>\n        </div>\n        <div class=\"section-block upper-text bold-text\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor,\n            quis\n            ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed\n            ornare\n            nulla. </p>\n        </div>\n        <div class=\"section-block bold-text\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor,\n            quis\n            ullam-corper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed\n            ornare\n            nulla.\n          </p>\n        </div>\n        <div class=\"section-block small-text\">\n          <p>Secondary text. Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar,</p>\n\n          <p>lacinia scelerisque pharetra, placerat vestibulum eleifend</p>\n\n          <p> pellentesque, mi nam.</p>\n        </div>\n\n      </ba-card>\n    </div>\n\n    <div class=\"col-xlg-3 col-lg-6  col-md-6 col-sm-6 col-12 typography-widget\">\n\n      <ba-card title=\"Lists\" baCardClass=\"with-scroll lists-widget\">\n\n        <div class=\"section-block\">\n          <h5 class=\"list-header\">Unordered list:</h5>\n          <ul class=\"blur\">\n            <li>Lorem ipsum dolor sit amet</li>\n            <li>Сlacinia scelerisque pharetra\n              <ul>\n                <li>Dui rhoncus quisque integer lorem\n                  <ul>\n                    <li>Libero iaculis vestibulum eu vitae</li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n            <li>Nisl lectus nibh habitasse suspendisse ut</li>\n            <li><span>Posuere cursus hac, vestibulum wisi nulla bibendum</span></li>\n          </ul>\n          <h5 class=\"list-header\">Ordered Lists:</h5>\n          <ol class=\"blur\">\n            <li><span>Eu non nec cursus quis mollis, amet quam nec</span></li>\n            <li><span>Et suspendisse, adipiscing fringilla ornare sit ligula sed</span>\n              <ol>\n                <li><span>Interdum et justo nulla</span>\n                  <ol>\n                    <li><span>Magna amet, suscipit suscipit non amet</span></li>\n                  </ol>\n                </li>\n              </ol>\n            </li>\n            <li><span>Metus duis eu non eu ridiculus turpis</span></li>\n            <li>\n              <span>Neque egestas id fringilla consectetuer justo curabitur, wisi magna neque commodo volutpat</span>\n            </li>\n          </ol>\n          <div class=\"accent\">Important text fragment. Lorem ipsum dolor sit amet, id mollis iaculis mi nisl\n            pulvinar,\n            lacinia scelerisque pharetra.\n          </div>\n        </div>\n      </ba-card>\n    </div>\n\n    <div class=\"col-xlg-3 col-lg-6  col-md-6 col-sm-6 col-12 typography-widget\">\n\n      <ba-card title=\"Text Color\" baCardClass=\"with-scroll color-widget\">\n        <div class=\"section-block red-text \">\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n            ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed\n            ornare\n            nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis\n            dis\n            parturient montes, nascetur ridiculus mus.\n          </p>\n        </div>\n        <div class=\"section-block yellow-text \">\n          <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula dfgz`zzsodales at. Nullam quis risus eget\n            urna\n            mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur\n            ridiculus\n            mus. Nullam id dolor id nibh ultricies vehicula ut id elit. In sed ornare nulla.\n          </p>\n        </div>\n        <div class=\"section-block links\">\n          <p>Lorem ipsum <a href>dolor</a> sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor,\n            quis\n            <a href>ullamcorper</a> ligula sodales at. Nulla tellus elit, varius non commodo eget, <a\n              href>mattis</a> vel eros. In sed ornare\n            nulla.\n          </p>\n        </div>\n        <div class=\"section-block links\">\n          <p><a href>Active link — #209e91</a></p>\n\n          <p class=\"hovered\"><a href>Hover link — #17857a</a></p>\n        </div>\n      </ba-card>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-sm-12 col-12\">\n\n      <ba-card baCardClass=\"banner-column-panel\">\n        <div class=\"banner\">\n          <div class=\"large-banner-wrapper\">\n            <img src=\"{{ ( 'app/typography/banner.png' | baAppPicture ) }}\" alt=\"\"/>\n          </div>\n          <div class=\"banner-text-wrapper\">\n            <div class=\"banner-text\">\n              <h1>Simple Banner Text</h1>\n\n              <p>Lorem ipsum dolor sit amet</p>\n\n              <p>Odio amet viverra rutrum</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"section\">\n          <h2>Columns</h2>\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"img-wrapper\"><img src=\"{{ ( 'app/typography/typo03.png' | baAppPicture ) }}\" alt=\"\" title=\"\"/>\n              </div>\n              <p>Vel elit, eros elementum, id lacinia, duis non ut ut tortor blandit. Mauris <a\n                href>dapibus</a> magna rutrum. Ornare neque suspendisse <a\n                href>phasellus wisi</a>, quam cras pede rutrum suspendisse, <a\n                href>felis amet eu</a>. Congue magna elit quisque quia, nullam justo sagittis,\n                ante erat libero placerat, proin condimentum consectetuer lacus. Velit condimentum velit, sed\n                penatibus\n                arcu nulla.</p>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"img-wrapper\"><img src=\"{{ ( 'app/typography/typo01.png' | baAppPicture ) }}\" alt=\"\" title=\"\"/>\n              </div>\n              <p>Et suspendisse, adipiscing fringilla ornare sit ligula sed, vel nam. Interdum et justo nulla,\n                fermentum\n                lobortis purus ut eu, duis nibh dolor massa tristique elementum, nibh iste potenti risus fusce\n                aliquet\n                fusce, ullamcorper debitis primis arcu tellus vestibulum ac.</p>\n            </div>\n          </div>\n\n          <div class=\"separator\"></div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <h4>Column heading example</h4>\n              <div class=\"img-wrapper\"><img src=\"{{ ( 'app/typography/typo04.png' | baAppPicture ) }}\" alt=\"\"/></div>\n              <p>Eget augue, lacus erat ante egestas scelerisque aliquam, metus molestie leo in habitasse magna\n                maecenas</p>\n              <a href class=\"learn-more\">Learn more</a>\n            </div>\n            <div class=\"col-sm-4\">\n              <h4>Yet another column heading example</h4>\n              <div class=\"img-wrapper\"><img src=\"{{ ( 'app/typography/typo05.png' | baAppPicture ) }}\" alt=\"\"/></div>\n              <p>Augue massa et parturient, suspendisse orci nec scelerisque sit, integer nam mauris pede consequat\n                in\n                velit</p>\n              <a href class=\"learn-more\">Learn more</a>\n            </div>\n            <div class=\"col-sm-4\">\n              <h4>Third column heading example</h4>\n              <div class=\"img-wrapper\"><img src=\"{{ ( 'app/typography/typo06.png' | baAppPicture ) }}\" alt=\"\"/></div>\n              <p>Eget turpis, tortor lobortis porttitor, vestibulum nullam vehicula aliquam</p>\n              <a href class=\"learn-more\">Learn more</a>\n            </div>\n          </div>\n          <div class=\"separator\"></div>\n        </div>\n      </ba-card>\n    </div>\n  </div>\n\n</div>\n"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map