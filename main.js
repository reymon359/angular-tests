(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container main-container\">\n    <h1 class=\"display-4\"><img src=\"./assets/img/angular_logo.png\" width=\"100\" height=\"100\" alt=\"\"> Angular tests</h1>\n\n    <h5>An angular app to test some useful features from the framework <small><a href=\"https://github.com/reymon359/angular-tests\">source</a></small></h5>\n    <hr>\n    <router-outlet></router-outlet>\n</div>\n<footer class=\"footer mt-auto py-3  bg-light\" style=\" margin-top: 10vh!important;\">\n    <div class=\"container\">\n        <a style=\"text-decoration: none;\" href=\"https://ramonmorcillo.com\" target=\"_blank\">ramon morcillo @reymon359 </a> | &copy;<time datetime=\"2019\">Year 2019</time> |\n        <a href=\"#top\" style=\"text-decoration: none;\">Back top</a>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tests';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ng-style/ng-style.component */ "./src/app/components/ng-style/ng-style.component.ts");
/* harmony import */ var _components_css_css_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/css/css.component */ "./src/app/components/css/css.component.ts");
/* harmony import */ var _components_classes_classes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/classes/classes.component */ "./src/app/components/classes/classes.component.ts");
/* harmony import */ var _directives_highlighted_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/highlighted.directive */ "./src/app/directives/highlighted.directive.ts");
/* harmony import */ var _components_ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ng-switch/ng-switch.component */ "./src/app/components/ng-switch/ng-switch.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_new_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/new-user.component */ "./src/app/components/user/new-user.component.ts");
/* harmony import */ var _components_user_user_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/user-edit.component */ "./src/app/components/user/user-edit.component.ts");
/* harmony import */ var _components_user_user_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/user-info.component */ "./src/app/components/user/user-info.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_ng_style_ng_style_component__WEBPACK_IMPORTED_MODULE_4__["NgStyleComponent"],
                _components_css_css_component__WEBPACK_IMPORTED_MODULE_5__["CssComponent"],
                _components_classes_classes_component__WEBPACK_IMPORTED_MODULE_6__["ClassesComponent"],
                _directives_highlighted_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightedDirective"],
                _components_ng_switch_ng_switch_component__WEBPACK_IMPORTED_MODULE_8__["NgSwitchComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _components_user_new_user_component__WEBPACK_IMPORTED_MODULE_12__["NewUserComponent"],
                _components_user_user_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserEditComponent"],
                _components_user_user_info_component__WEBPACK_IMPORTED_MODULE_14__["UserInfoComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTING"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_user_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.routes */ "./src/app/components/user/user.routes.ts");




var APP_ROUTES = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: 'user/:id',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: _components_user_user_routes__WEBPACK_IMPORTED_MODULE_3__["USER_ROUTES"]
        // Old way. Now in the user.routes.ts
        // children: [
        //     { path: 'new', component: NewUserComponent },
        //     { path: 'edit', component: UserEditComponent },
        //     { path: 'info', component: UserInfoComponent },
        //     { path: '**', pathMatch: 'full', redirectTo: 'new' }
        // ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/classes/classes.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/classes/classes.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>NgClass <small><a href=\"https://angular.io/api/common/NgClass\">docs</a></small></h2>\n<p>Use it to apply a class or classes to elements using conditions or not</p>\n\n<div [ngClass]=\"alert\" class=\"alert\" role=\"alert\">\n    A simple primary alert—check it out!\n</div>\n\n<button type=\"button\" class=\"btn btn-info mr-3\" (click)=\"alert = 'alert-info'\">Info</button>\n<button type=\"button\" class=\"btn btn-success\" (click)=\"alert = 'alert-success'\">Success</button>\n\n<p [ngClass]=\"{'text-danger' : properties.danger, 'text-info': !properties.danger}\">Hey I change with properties.danger</p>\n\n<button (click)=\"properties.danger = !properties.danger\" type=\"button\" name=\"button\" class=\"btn btn-danger\" [ngClass]=\"{'btn-danger': properties.danger, 'btn-info': !properties.danger}\">\nChange</button><br><br>\n<textarea rows=\"10\" cols=\"70\" disabled> \n  <div [ngClass]=\"alert\" class=\"alert\" role=\"alert\">\n    A simple primary alert—check it out!\n</div>\n\n<button type=\"button\" class=\"btn btn-info mr-3\" (click)=\"alert = 'alert-info'\">Info</button>\n<button type=\"button\" class=\"btn btn-success\" (click)=\"alert = 'alert-success'\">Success</button>\n\n<p [ngClass]=\"{'text-danger' : properties.danger, 'text-info': !properties.danger}\">Hey I change with properties.danger</p>\n\n<button (click)=\"properties.danger = !properties.danger\" type=\"button\" name=\"button\" class=\"btn btn-danger\" [ngClass]=\"{'btn-danger': properties.danger, 'btn-info': !properties.danger}\">\nChange</button>\n\n</textarea>\n<hr>\n<h2>Async process </h2>\n<p>Demo of an Async process </p>\n\n<button (click)=\"executeProcess()\" class=\"btn btn-primary\" type=\"button\" name=\"button\" [disabled]=\"loading\">\n  <i [ngClass]=\"{'fa-save': !loading,'fa-sync fa-spin':loading}\" class=\"fas\"></i>\n  <span *ngIf=\"!loading\"> Save changes</span>\n  <span *ngIf=\"loading\"> Wait please  </span>\n</button><br><br>\n<textarea rows=\"10\" cols=\"70\" disabled> \n<button (click)=\"executeProcess()\" class=\"btn btn-primary\" type=\"button\" name=\"button\" [disabled]=\"loading\">\n  <i [ngClass]=\"{'fa-save': !loading,'fa-sync fa-spin':loading}\" class=\"fas\"></i>\n  <span *ngIf=\"!loading\"> Save changes</span>\n  <span *ngIf=\"loading\"> Wait please  </span>\n</button>\n\n</textarea>"

/***/ }),

/***/ "./src/app/components/classes/classes.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/classes/classes.component.ts ***!
  \*********************************************************/
/*! exports provided: ClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesComponent", function() { return ClassesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassesComponent = /** @class */ (function () {
    function ClassesComponent() {
        this.alert = 'alert-danger';
        // tslint:disable-next-line:ban-types
        this.properties = {
            danger: true
        };
        this.loading = false;
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent.prototype.executeProcess = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () { return _this.loading = false; }, 2500);
    };
    ClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-classes',
            template: __webpack_require__(/*! ./classes.component.html */ "./src/app/components/classes/classes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassesComponent);
    return ClassesComponent;
}());



/***/ }),

/***/ "./src/app/components/css/css.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/css/css.component.ts ***!
  \*************************************************/
/*! exports provided: CssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssComponent", function() { return CssComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CssComponent = /** @class */ (function () {
    function CssComponent() {
    }
    CssComponent.prototype.ngOnInit = function () {
    };
    CssComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-css',
            template: "\n  <h2>css <small><a href=\"https://angular.io/guide/component-styles\">docs</a></small></h2>\n  <p>Use it to change the css from an unic component</p>\n    <p>\n      css works!\n    </p>\n  ",
            styles: ["\n  p{\n    color:red;\n    font-size:20px;\n  }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CssComponent);
    return CssComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        console.log('constructor');
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    HomeComponent.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
    };
    HomeComponent.prototype.ngDoCheck = function () {
        console.log('ngDoCheck');
    };
    HomeComponent.prototype.ngAfterContentInit = function () {
        console.log('ngAfterContentInit');
    };
    HomeComponent.prototype.ngAfterContentChecked = function () {
        console.log('ngAfterContentChecked');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        console.log('ngAfterViewChecked');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: "\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n  <app-classes></app-classes>\n  <hr>\n  <app-ng-switch></app-ng-switch>\n  </div>\n  <div class=\"col-md-6\">\n  <app-css></app-css>\n  <hr>\n  <app-ng-style></app-ng-style>\n  <hr>\n  <h2>Directives <small><a href=\"https://angular.io/guide/attribute-directives\">docs</a></small></h2>\n  <p>To make our own directives </p>\n  <p [appHighlighted]=\"'orange'\">Hello I have a directive</p>\n  <textarea rows=\"2\" cols=\"70\" disabled>\n      <p [appHighlighted]=\"'orange'\">Hello I have a directive</p>\n  </textarea>\n  <hr>\n  <h2>Lifecycle Hooks <small><a href=\"https://angular.io/guide/lifecycle-hooks\">docs</a></small></h2>\n  <p>Open console and watch when do they get activated </p>\n  </div>\n</div>\n\n\n  \n \n\n\n \n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand \" href=\"#\">\n        <img class=\"bg-light rounded\" src=\"./assets/img/angular_logo.png\" width=\"30\" height=\"30\" alt=\"\"> Angular Tests\n    </a>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['/user',10]\">User</a>\n            </li>\n\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/ng-style/ng-style.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ng-style/ng-style.component.ts ***!
  \***********************************************************/
/*! exports provided: NgStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStyleComponent", function() { return NgStyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgStyleComponent = /** @class */ (function () {
    function NgStyleComponent() {
        this.size = 10;
    }
    NgStyleComponent.prototype.ngOnInit = function () {
    };
    NgStyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ng-style',
            template: "\n  <h2>NgStyle <small><a href=\"https://angular.io/api/common/NgStyle\">docs</a></small></h2>\n  <p>Use it to change the style attribute from an element</p>\n\n    <p [style.fontSize.px]=\"size\">\n      Hello world... this is a tag\n    </p>\n\n    <button class=\"btn btn-primary mr-2\" (click)=\"size = size + 5\">\n    <i class=\"fas fa-plus\"></i>\n    </button>\n    <button class=\"btn btn-primary\" (click)=\"size = size - 5\">\n    <i class=\"fas fa-minus\"></i>\n    </button><br><br>\n    <textarea  rows=\"10\" cols=\"70\" disabled>    size = 10;\n    <p [style.fontSize.px]=\"size\">\n      Hello world... this is a tag\n    </p>\n    <button class=\"btn btn-primary mr-2\" (click)=\"size = size + 5\">\n      <i class=\"fas fa-plus\"></i>\n    </button>\n    <button class=\"btn btn-primary\" (click)=\"size = size - 5\">\n      <i class=\"fas fa-minus\"></i>\n    </button> </textarea>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgStyleComponent);
    return NgStyleComponent;
}());



/***/ }),

/***/ "./src/app/components/ng-switch/ng-switch.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/ng-switch/ng-switch.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ngSwitch <small><a href=\"https://angular.io/api/common/NgSwitch\">docs</a></small></h2>\n<p>To switch html depending on a variable </p>\n\n<div [ngSwitch]=\"alert\">\n    <div *ngSwitchCase=\"'success'\">success</div>\n    <div *ngSwitchCase=\"'info'\">info</div>\n    <div *ngSwitchCase=\"'warning'\">warning</div>\n    <div *ngSwitchDefault> danger</div>\n</div><br>\n<div [ngSwitch]=\"alert\">\n    <div *ngSwitchCase=\"'success'\" class=\"alert alert-success\" role=\"alert\">\n        This is a success alert—check it out!\n    </div>\n    <div *ngSwitchCase=\"'info'\" class=\"alert alert-info\" role=\"alert\">\n        This is a info alert—check it out!\n    </div>\n    <div *ngSwitchCase=\"'warning'\" class=\"alert alert-warning\" role=\"alert\">\n        This is a warning alert—check it out!\n    </div>\n    <div *ngSwitchDefault class=\"alert alert-danger\" role=\"alert\">\n        This is a danger alert—check it out!\n    </div>\n</div>\n<button type=\"button\" (click)=\"alert = 'success'\" class=\"btn btn-default\">change</button> <br><br>\n<textarea rows=\"10\" cols=\"70\" disabled> \n    <div [ngSwitch]=\"alert\">\n        <div *ngSwitchCase=\"'success'\">success</div>\n        <div *ngSwitchCase=\"'info'\">info</div>\n        <div *ngSwitchCase=\"'warning'\">warning</div>\n        <div *ngSwitchDefault> danger</div>\n    </div><br>\n    <div [ngSwitch]=\"alert\">\n        <div *ngSwitchCase=\"'success'\" class=\"alert alert-success\" role=\"alert\">\n            This is a success alert—check it out!\n        </div>\n        <div *ngSwitchCase=\"'info'\" class=\"alert alert-info\" role=\"alert\">\n            This is a info alert—check it out!\n        </div>\n        <div *ngSwitchCase=\"'warning'\" class=\"alert alert-warning\" role=\"alert\">\n            This is a warning alert—check it out!\n        </div>\n        <div *ngSwitchDefault class=\"alert alert-danger\" role=\"alert\">\n            This is a danger alert—check it out!\n        </div>\n    </div>\n<button type=\"button\" (click)=\"alert = 'success'\" class=\"btn btn-default\">change</button>\n\n</textarea>"

/***/ }),

/***/ "./src/app/components/ng-switch/ng-switch.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ng-switch/ng-switch.component.ts ***!
  \*************************************************************/
/*! exports provided: NgSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSwitchComponent", function() { return NgSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgSwitchComponent = /** @class */ (function () {
    function NgSwitchComponent() {
        this.alert = "info";
    }
    NgSwitchComponent.prototype.ngOnInit = function () {
    };
    NgSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ng-switch',
            template: __webpack_require__(/*! ./ng-switch.component.html */ "./src/app/components/ng-switch/ng-switch.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgSwitchComponent);
    return NgSwitchComponent;
}());



/***/ }),

/***/ "./src/app/components/user/new-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/user/new-user.component.ts ***!
  \*******************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(router) {
        this.router = router;
        this.router.parent.params.subscribe(function (params) {
            console.log('New user father route params', params);
        });
    }
    NewUserComponent.prototype.ngOnInit = function () {
    };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-user',
            template: "\n    <p>\n      new-user works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user-edit.component.ts ***!
  \********************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(router) {
        this.router = router;
        this.router.parent.params.subscribe(function (params) {
            console.log('Edit user father route params', params);
        });
    }
    UserEditComponent.prototype.ngOnInit = function () {
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: "\n    <p>\n      user-edit works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user-info.component.ts ***!
  \********************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(router) {
        this.router = router;
        this.router.parent.params.subscribe(function (params) {
            console.log('Info user father route params', params);
        });
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: "\n    <p>\n      user-info works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h3>Routes. <small><a href=\"https://angular.io/guide/router\">docs</a></small> </h3>\n        <p>Child routes. Structuring them and sending params from parents to childs. Open console to see params</p>\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-secondary\" routerLinkActive=\"active\" [routerLink]=\"['new']\">New</button>\n            <button type=\"button\" class=\"btn btn-secondary\" routerLinkActive=\"active\" [routerLink]=\"['edit']\">Edit</button>\n            <button type=\"button\" class=\"btn btn-secondary\" routerLinkActive=\"active\" [routerLink]=\"['info']\">Info</button>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserComponent = /** @class */ (function () {
    function UserComponent(router) {
        this.router = router;
        this.router.params.subscribe(function (params) {
            console.log('User route params', params);
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.routes.ts":
/*!************************************************!*\
  !*** ./src/app/components/user/user.routes.ts ***!
  \************************************************/
/*! exports provided: USER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROUTES", function() { return USER_ROUTES; });
/* harmony import */ var _new_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-user.component */ "./src/app/components/user/new-user.component.ts");
/* harmony import */ var _user_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-edit.component */ "./src/app/components/user/user-edit.component.ts");
/* harmony import */ var _user_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info.component */ "./src/app/components/user/user-info.component.ts");



var USER_ROUTES = [
    { path: 'new', component: _new_user_component__WEBPACK_IMPORTED_MODULE_0__["NewUserComponent"] },
    { path: 'edit', component: _user_edit_component__WEBPACK_IMPORTED_MODULE_1__["UserEditComponent"] },
    { path: 'info', component: _user_info_component__WEBPACK_IMPORTED_MODULE_2__["UserInfoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'new' }
];


/***/ }),

/***/ "./src/app/directives/highlighted.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/highlighted.directive.ts ***!
  \*****************************************************/
/*! exports provided: HighlightedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightedDirective", function() { return HighlightedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightedDirective = /** @class */ (function () {
    function HighlightedDirective(elementRef) {
        this.elementRef = elementRef;
        // elementRef.nativeElement.style.backgroundColor =  "yellow";
    }
    HighlightedDirective.prototype.mouseEntered = function () {
        // this.elementRef.nativeElement.style.backgroundColor = "yellow";
        this.highlight(this.newColor || 'yellow');
    };
    HighlightedDirective.prototype.mouseLeft = function () {
        this.highlight(null);
    };
    HighlightedDirective.prototype.highlight = function (color) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appHighlighted'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HighlightedDirective.prototype, "newColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightedDirective.prototype, "mouseEntered", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HighlightedDirective.prototype, "mouseLeft", null);
    HighlightedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlighted]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HighlightedDirective);
    return HighlightedDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Developer\angular-course\06-tests\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map