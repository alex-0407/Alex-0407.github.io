webpackJsonp([10,17],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alarm_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alarm_routing__ = __webpack_require__(745);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmModule", function() { return AlarmModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AlarmModule = (function () {
    function AlarmModule() {
    }
    return AlarmModule;
}());
AlarmModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_5__alarm_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__alarm_component__["a" /* AlarmComponent */]
        ]
    })
], AlarmModule);

//# sourceMappingURL=alarm.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlarmComponent = (function () {
    function AlarmComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.alarms = [];
        this.pageList = [];
        this.pages = 1;
        this.pageSize = 10;
        this.newPages = 10;
        this.selPage = 1;
        this.isEditing = false;
        this.isLoading = true;
        this.items = [];
        this.isCurrentPage = false;
        this.selectPage = function (page) {
            if (page < 1 || page > this.pages) {
                return;
            }
            if (page > 2) {
                var newPageList = [];
                for (var i = (page - 3); i < ((page + 7) > this.pages ? this.pages : (page + 7)); i++) {
                    newPageList.push(i + 1);
                }
                this.pageList = newPageList;
            }
            this.selPage = page;
            this.setData();
            this.isActivePage(page);
            console.log("选择的页 " + page);
        };
        this.isActivePage = function (page) {
            this.selPage == page;
        };
        this.previousPage = function () {
            this.selectPage(this.selPage - 1);
        };
        this.nextPage = function () {
            this.selectPage(this.selPage + 1);
        };
    }
    AlarmComponent.prototype.ngOnInit = function () {
        this.getAlarms();
    };
    AlarmComponent.prototype.getAlarms = function () {
        var _this = this;
        this.dataService.getAlarms().subscribe(function (data) {
            _this.alarms = data;
            _this.pages = Math.ceil(_this.alarms.length / _this.pageSize);
            _this.newPages = _this.pages > 10 ? 10 : _this.pages;
            _this.items = _this.alarms.slice(0, _this.pageSize);
            for (var i = 0; i < _this.newPages; i++) {
                _this.pageList.push(i + 1);
            }
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AlarmComponent.prototype.setData = function () {
        this.items = this.alarms.slice((this.pageSize * (this.selPage - 1)), this.selPage * this.pageSize);
    };
    return AlarmComponent;
}());
AlarmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alarm',
        template: __webpack_require__(913),
        styles: [__webpack_require__(830)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], AlarmComponent);

var _a, _b;
//# sourceMappingURL=alarm.component.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alarm_component__ = __webpack_require__(673);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__alarm_component__["a" /* AlarmComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=alarm.routing.js.map

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "nav {\n  position: relative;\n  width: 100%;\n  height: 50px; }\n\n.pagination {\n  right: 0px;\n  position: absolute;\n  top: 5px; }\n\nnav li {\n  cursor: pointer; }\n\n.thead-default th {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">告警列表</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped table-hover\">\n      <thead class=\"\">\n      <tr>\n        <th>告警名称</th>\n        <th>告警位置</th>\n        <th>开始时间</th>\n        <th>告警基类</th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"!isEditing\">\n      <tr *ngFor=\"let alarm of items\">\n        <td>{{alarm.EventName}}</td>\n        <td>{{alarm.StationName}} {{alarm.EquipmentName}}</td>\n        <td>{{alarm.StartTime | date : 'yyyy-MM-dd H:mm:ss'}}</td>\n        <td>{{alarm.BaseTypeName}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <nav>\n      <ul class=\"pagination\">\n        <li>\n          <a (click)=\"previousPage()\"><span>上一页</span></a>\n        </li>\n        <!--<li *ngFor=\"let page of pageList\" [ngClass]=\"{'active': isActivePage(page)}\">-->\n        <li *ngFor=\"let page of pageList\">\n          <a (click)=\"selectPage(page)\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': isActivePage(page)}\">{{ page }}</a>\n        </li>\n        <li>\n          <a (click)=\"nextPage()\"><span>下一页</span></a>\n        </li>\n        <!--<li>-->\n          <!--<span>当前页</span>-->\n          <!--<input type=\"text\" class=\"form-control\" value=\"{{selPage}}\">-->\n        <!--</li>-->\n      </ul>\n    </nav>\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=10.chunk.js.map