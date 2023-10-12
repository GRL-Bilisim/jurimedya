"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_pages_content-pages_content-pages_module_ts"],{

/***/ 31782:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonPageComponent": function() { return /* binding */ ComingSoonPageComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41618);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);





var ComingSoonPageComponent = /** @class */ (function () {
    function ComingSoonPageComponent(cdr) {
        this.cdr = cdr;
        this.pickDate = new Date().setMonth(new Date().getMonth() + 2);
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe('en-US');
        this.launchDate = this.datePipe.transform(this.pickDate, 'yyyy-MM-dd');
        // Set the defaults
        this.countdown = {
            weeks: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ComingSoonPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = moment__WEBPACK_IMPORTED_MODULE_0__();
        var launchDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.launchDate);
        var diff = launchDate.diff(currDate, 'seconds');
        this.countdown = this.calculateRemainingTime(diff);
        // Create a subscribable interval
        var countDown = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (value) {
            return diff = diff - 1;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (value) {
            return _this.calculateRemainingTime(value);
        }));
        // Subscribe to the countdown interval
        countDown
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll))
            .subscribe(function (value) {
            _this.countdown = value;
            _this.cdr.detectChanges();
        });
    };
    ComingSoonPageComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ComingSoonPageComponent.prototype.calculateRemainingTime = function (seconds) {
        var timeLeft = moment__WEBPACK_IMPORTED_MODULE_0__.duration(seconds, 'seconds');
        return {
            weeks: timeLeft.asWeeks().toFixed(0),
            days: timeLeft.asDays().toFixed(0),
            hours: timeLeft.hours(),
            minutes: timeLeft.minutes(),
            seconds: timeLeft.seconds()
        };
    };
    ComingSoonPageComponent.ɵfac = function ComingSoonPageComponent_Factory(t) { return new (t || ComingSoonPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef)); };
    ComingSoonPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ComingSoonPageComponent, selectors: [["app-coming-soon-page"]], decls: 44, vars: 4, consts: [["id", "coming-soon"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "card-coming-soon", "box-shadow-0", "overflow-hidden"], [1, "card-header", "text-center", "pt-4", "pb-3"], ["alt", "avtar", "src", "assets/img/gallery/coming-soon.png", "width", "200", 1, "img-fluid"], ["id", "clockFlat", 1, "getting-started", "px-sm-2"], [1, "clockCard", "d-inline-block", "text-center", "px-3", "px-sm-4", "py-3"], [1, "lead", "m-0"], [1, "card-content"], [1, "card-body", "text-center", "pt-1"], [1, "mb-4", "mt-2"], [1, "mx-4"], [1, "input-group"], ["type", "text", "placeholder", "Email", "aria-describedby", "coming-soon-subscribe", 1, "form-control"], [1, "input-group-append"], ["type", "button", "id", "coming-soon-subscribe", 1, "btn", "btn-primary"], [1, "ft-log-in", "d-sm-none", "font-medium-2"], [1, "d-none", "d-sm-block"]], template: function ComingSoonPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Days");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Hours");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Minutes");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "We Are Launching Soon.");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Subscribe");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.days);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.hours);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.minutes);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countdown.seconds);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21pbmctc29vbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
    return ComingSoonPageComponent;
}());



/***/ }),

/***/ 62354:
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentPagesRoutingModule": function() { return /* binding */ ContentPagesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ 31782);
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error-page.component */ 15243);
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ 27726);
/* harmony import */ var _serversettings_serversettings_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serversettings/serversettings-page.component */ 64669);
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ 71306);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login-page.component */ 89415);
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ 84319);
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register-page.component */ 59808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











var routes = [
    {
        path: '',
        children: [
            {
                path: 'comingsoon',
                component: _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_0__.ComingSoonPageComponent,
                data: {
                    title: 'Coming Soon page'
                }
            },
            {
                path: 'error',
                component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_1__.ErrorPageComponent,
                data: {
                    title: 'Error Page'
                }
            },
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordPageComponent,
                data: {
                    title: 'Forgot Password Page'
                }
            },
            {
                path: 'serversettings',
                component: _serversettings_serversettings_page_component__WEBPACK_IMPORTED_MODULE_3__.ServerSettingsPageComponent,
                data: {
                    title: 'Server Settings Page'
                }
            },
            {
                path: 'lockscreen',
                component: _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_4__.LockScreenPageComponent,
                data: {
                    title: 'Lock Screen page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_5__.LoginPageComponent,
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'maintenance',
                component: _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_6__.MaintenancePageComponent,
                data: {
                    title: 'Maintenance Page'
                }
            },
            {
                path: 'register',
                component: _register_register_page_component__WEBPACK_IMPORTED_MODULE_7__.RegisterPageComponent,
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var ContentPagesRoutingModule = /** @class */ (function () {
    function ContentPagesRoutingModule() {
    }
    ContentPagesRoutingModule.ɵfac = function ContentPagesRoutingModule_Factory(t) { return new (t || ContentPagesRoutingModule)(); };
    ContentPagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ContentPagesRoutingModule });
    ContentPagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
    return ContentPagesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ContentPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 92321:
/*!*************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "ContentPagesModule": function() { return /* binding */ ContentPagesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-pages-routing.module */ 62354);
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ 31782);
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error-page.component */ 15243);
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ 27726);
/* harmony import */ var _serversettings_serversettings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serversettings/serversettings-page.component */ 64669);
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ 71306);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login-page.component */ 89415);
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ 84319);
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register-page.component */ 59808);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 49476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);


















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
var ContentPagesModule = /** @class */ (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule.ɵfac = function ContentPagesModule_Factory(t) { return new (t || ContentPagesModule)(); };
    ContentPagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ContentPagesModule });
    ContentPagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
                _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentPagesRoutingModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient]
                    }
                }),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule
            ]] });
    return ContentPagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ContentPagesModule, { declarations: [_coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonPageComponent,
        _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__.ErrorPageComponent,
        _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordPageComponent,
        _serversettings_serversettings_page_component__WEBPACK_IMPORTED_MODULE_4__.ServerSettingsPageComponent,
        _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__.LockScreenPageComponent,
        _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__.LoginPageComponent,
        _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__.MaintenancePageComponent,
        _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__.RegisterPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContentPagesRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule] }); })();


/***/ }),

/***/ 15243:
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": function() { return /* binding */ ErrorPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
    ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 12, vars: 0, consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404 - Sayfa Bulunamad\u0131!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Arad\u0131\u011F\u0131n\u0131z sayfa kald\u0131r\u0131lm\u0131\u015F, ad\u0131 de\u011Fi\u015Ftirilmi\u015F veya ge\u00E7ici olarak kullan\u0131lam\u0131yor olabilir.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ErrorPageComponent;
}());



/***/ }),

/***/ 27726:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageComponent": function() { return /* binding */ ForgotPasswordPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


var _c0 = ["f"];
var _c1 = function () { return ["/pages/login"]; };
var ForgotPasswordPageComponent = /** @class */ (function () {
    function ForgotPasswordPageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit click, reset form fields
    ForgotPasswordPageComponent.prototype.onSubmit = function () {
        this.forogtPasswordForm.reset();
    };
    // On login link click
    ForgotPasswordPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ForgotPasswordPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    ForgotPasswordPageComponent.ɵfac = function ForgotPasswordPageComponent_Factory(t) { return new (t || ForgotPasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
    ForgotPasswordPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordPageComponent, selectors: [["app-forgot-password-page"]], viewQuery: function ForgotPasswordPageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.forogtPasswordForm = _t.first);
        } }, decls: 20, vars: 2, consts: [["id", "forgot-password"], [1, "row", "auth-height", "full-height-vh", "m-0", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-12"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/forgot.png", "alt", "", "width", "500", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [1, "card-text", "mb-3"], ["type", "email", "placeholder", "E-postan\u0131z", 1, "form-control", "mb-3"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-between"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", "ml-sm-1"]], template: function ForgotPasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u015Eifre S\u0131f\u0131rlama");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u015Eifrenizi s\u0131f\u0131rlamak i\u00E7in mailinize bir link g\u00F6nderilecektir.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Giri\u015Fe D\u00F6n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "S\u0131f\u0131rla");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ForgotPasswordPageComponent;
}());



/***/ }),

/***/ 71306:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockScreenPageComponent": function() { return /* binding */ LockScreenPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


var _c0 = ["f"];
var _c1 = function () { return ["/dashboard/dashboard2"]; };
var LockScreenPageComponent = /** @class */ (function () {
    function LockScreenPageComponent() {
    }
    LockScreenPageComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    LockScreenPageComponent.ɵfac = function LockScreenPageComponent_Factory(t) { return new (t || LockScreenPageComponent)(); };
    LockScreenPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockScreenPageComponent, selectors: [["app-lock-screen-page"]], viewQuery: function LockScreenPageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lockScreenForm = _t.first);
        } }, decls: 18, vars: 2, consts: [["id", "lock-screen"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-lg-flex", "justify-content-center", "align-items-center", "d-none", "text-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/lock.png", "alt", "", "height", "230", "width", "280", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "py-3", "px-4"], [1, "card-title", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control", "mb-2"], ["type", "password", "placeholder", "Password", 1, "form-control", "mb-2"], ["href", "javascript:;"], [1, "btn", "btn-block", "btn-primary", "mt-2", 3, "routerLink"]], template: function LockScreenPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your Session is Locked");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Are You Not John Doe ?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unlock");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrLXNjcmVlbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LockScreenPageComponent;
}());



/***/ }),

/***/ 89415:
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": function() { return /* binding */ LoginPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/auth/auth.service */ 40866);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);









function LoginPageComponent_ngb_alert_13_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function LoginPageComponent_ngb_alert_13_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.isLoginFailed = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Giri\u015F Ba\u015Far\u0131s\u0131z");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Bu alan zorunludur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Bu alan zorunludur. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
var _c1 = function () { return ["/pages/forgotpassword"]; };
var _c2 = function () { return ["/pages/serversettings"]; };
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(cdr, router, authService, spinner, httpClient, route) {
        this.cdr = cdr;
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.httpClient = httpClient;
        this.route = route;
        this.kayitlikullanici = '';
        this.kayitlisifre = '';
        this.loginFormSubmitted = false;
        this.isLoginFailed = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(true)
        });
    }
    Object.defineProperty(LoginPageComponent.prototype, "lf", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    LoginPageComponent.prototype.getRandomString = function (length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for (var i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    };
    LoginPageComponent.prototype.sunucuayarla = function () {
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("kayitlikullanici") !== null && localStorage.getItem("kayitlisifre") !== null) {
            this.kayitlikullanici = localStorage.getItem("kayitlikullanici");
            this.kayitlisifre = localStorage.getItem("kayitlisifre");
        }
    };
    // On submit button click
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginFormSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
        localStorage.setItem('url', localStorage.getItem('urlx') + "maratonservices/");
        var formData = new FormData();
        formData.append('username', this.loginForm.get('username').value);
        formData.append('password', this.loginForm.get('password').value);
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_kullanicigirisi&username=" + this.loginForm.get('username').value + "&password=" + this.loginForm.get('password').value;
        this.httpClient.get(this.SERVER_URL).subscribe(function (data) {
            _this.users = data;
            if (_this.users.length > 0) {
                for (var i = 0; i < _this.users.length; i++) {
                    localStorage.setItem('userid', _this.users[i].user_indeks);
                    localStorage.setItem('username', _this.users[i].username);
                    localStorage.setItem('adi', _this.users[i].adi);
                    localStorage.setItem('resim', _this.users[i].profilresim);
                    localStorage.setItem('unvani', _this.users[i].unvani);
                    localStorage.setItem('dashboard', _this.users[i].tanimlidashboard);
                    localStorage.setItem('ismerkezi', _this.users[i].ismerkezi);
                    localStorage.setItem('isistasyno', _this.users[i].isistasyonu);
                    localStorage.setItem('eposta', _this.users[i].eposta);
                    localStorage.setItem('telefon', _this.users[i].telefon);
                    localStorage.setItem('profilresim', _this.users[i].profilresim);
                    localStorage.setItem('dashboard', _this.users[i].dashboard);
                    localStorage.setItem('logourl', _this.users[i].logourl);
                    localStorage.setItem('mobillogourl', _this.users[i].mobillogourl);
                    localStorage.setItem('firmaadi', _this.users[i].yurtadi);
                    _this.SERVER_URLS = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_kullanicimenusu&userid=" + _this.users[i].user_indeks;
                    _this.httpClient.get(_this.SERVER_URLS).subscribe(function (data) {
                        localStorage.setItem('kullanicimenusu', JSON.stringify(data));
                        _this.spinner.hide();
                        _this.router.navigate(['/dashboard/dashboard1']);
                        if (_this.loginForm.get('rememberMe').value == true) {
                            var logToken = _this.getRandomString(12);
                            localStorage.setItem('logintoken', logToken);
                            localStorage.setItem('kayitlikullanici', _this.loginForm.get('username').value);
                            localStorage.setItem('kayitlisifre', _this.loginForm.get('password').value);
                        }
                        else {
                            localStorage.setItem('logintoken', '');
                            localStorage.setItem('kayitlikullanici', '');
                            localStorage.setItem('kayitlisifre', '');
                        }
                    });
                }
            }
            else {
                _this.isLoginFailed = true;
                _this.spinner.hide();
                _this.cdr.markForCheck();
                console.log('Giriş Başarısız');
            }
        });
        this.authService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
            .then(function (res) {
        })
            .catch(function (err) {
        });
    };
    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
    LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 39, vars: 20, consts: [["id", "login"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/forgot.png", "alt", "", "width", "500", "height", "150", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-3", 2, "text-align", "center"], ["src", "assets/img/logocredit.png", "alt", "", "height", "0", 1, "img-fluid"], ["type", "light-danger", "class", "mb-2", 3, "close", 4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "username", "placeholder", "Kullan\u0131c\u0131 Ad\u0131/E-Posta", "required", "", 1, "form-control", 3, "value", "ngClass", "ngModel", "ngModelChange"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "\u015Eifreniz", "required", "", 1, "form-control", 3, "ngClass", "value", "ngModel", "keydown.enter", "ngModelChange"], [1, "d-sm-flex", "justify-content-between", "mb-3", "font-small-2"], [1, "remember-me", "mb-2", "mb-sm-0"], [1, "checkbox", "auth-checkbox"], ["type", "checkbox", "formControlName", "rememberMe", "id", "rememberMe", 1, "form-control"], ["for", "rememberMe"], [1, "font-small-2", "mb-3", "font-weight-normal"], [3, "routerLink"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column", "ov"], [1, "btn", "btn-success", 3, "click"], [1, "ft-user"], [1, "btn", "btn-danger", 3, "routerLink", "click"], [1, "ft-settings"], ["type", "light-danger", 1, "mb-2", 3, "close"], [1, "mb-0"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Kullan\u0131c\u0131 bilgilerininle giri\u015F yap\u0131n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginPageComponent_ngb_alert_13_Template, 3, 0, "ngb-alert", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.kayitlikullanici = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginPageComponent_div_17_Template, 3, 0, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function LoginPageComponent_Template_input_keydown_enter_19_listener($event) { ctx.onSubmit(); return $event.preventDefault(); })("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_19_listener($event) { return ctx.kayitlisifre = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginPageComponent_div_20_Template, 3, 0, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Beni Hat\u0131rla");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u015Eifrenizi mi unuttunuz?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_a_click_31_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Giri\u015F");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_a_click_35_listener() { return ctx.sunucuayarla(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Sunucu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.kayitlikullanici);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c0, ctx.loginFormSubmitted && ctx.lf.username.invalid, ctx.loginFormSubmitted && !ctx.lf.username.invalid))("ngModel", ctx.kayitlikullanici);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.username.invalid || (ctx.lf.username.errors == null ? null : ctx.lf.username.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.kayitlisifre);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](15, _c0, ctx.loginFormSubmitted && ctx.lf.password.invalid, ctx.loginFormSubmitted && !ctx.lf.password.invalid))("ngModel", ctx.kayitlisifre);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.password.invalid || (ctx.lf.password.errors == null ? null : ctx.lf.password.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWxpZ2h0LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRUZEMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjRjU1MjUyICAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI0ZFRUZEMDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
    return LoginPageComponent;
}());



/***/ }),

/***/ 84319:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenancePageComponent": function() { return /* binding */ MaintenancePageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


var _c0 = function () { return ["/"]; };
var MaintenancePageComponent = /** @class */ (function () {
    function MaintenancePageComponent() {
    }
    MaintenancePageComponent.ɵfac = function MaintenancePageComponent_Factory(t) { return new (t || MaintenancePageComponent)(); };
    MaintenancePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenancePageComponent, selectors: [["app-maintenance-page"]], decls: 14, vars: 2, consts: [["id", "maintenance"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/maintenance.png", "alt", "", "height", "300", "width", "300", 1, "img-fluid", "maintenance-img", "mt-2"], [1, "mt-4"], [1, "maintenance-text", "w-75", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]], template: function MaintenancePageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Under Maintenance!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ice cream caramels lemon drops candy. Cake toffee topping cookie tart wafer gummies. Sweet gummi bears jujubes bonbon gingerbread apple pie marshmallow.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back To Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWludGVuYW5jZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return MaintenancePageComponent;
}());



/***/ }),

/***/ 59808:
/*!*************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageComponent": function() { return /* binding */ RegisterPageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_directives_must_match_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/directives/must-match.validator */ 28536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);

// import custom validator to validate that password and confirm password fields match





function RegisterPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Passwords must match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Accept Ts & Cs is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
var _c1 = function () { return ["/pages/login"]; };
var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.registerFormSubmitted = false;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue]
        }, {
            validator: (0,_shared_directives_must_match_validator__WEBPACK_IMPORTED_MODULE_0__.MustMatch)('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegisterPageComponent.prototype, "rf", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    //  On submit click, reset field value
    RegisterPageComponent.prototype.onSubmit = function () {
        this.registerFormSubmitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.router.navigate(['/pages/login']);
    };
    RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
    RegisterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 42, vars: 27, consts: [["id", "regestration"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/register.png", "alt", "", "width", "350", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "card-title", "mb-2"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Name", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], [1, "checkbox", "auth-checkbox"], ["type", "checkbox", "id", "auth-login", "formControlName", "acceptTerms", 1, "form-control"], ["for", "auth-login"], [1, "font-small-2", "mb-3", "font-weight-normal"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", 3, "click"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Create Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Fill the below form to create a new account.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterPageComponent_div_17_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RegisterPageComponent_div_20_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RegisterPageComponent_div_21_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterPageComponent_div_24_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterPageComponent_div_25_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RegisterPageComponent_div_28_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterPageComponent_div_29_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "I accept the terms & conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RegisterPageComponent_div_36_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Back To Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterPageComponent_Template_a_click_40_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c0, ctx.registerFormSubmitted && ctx.rf.name.invalid, ctx.registerFormSubmitted && !ctx.rf.name.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.name.invalid || (ctx.rf.name.errors == null ? null : ctx.rf.name.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c0, ctx.registerFormSubmitted && ctx.rf.email.invalid, ctx.registerFormSubmitted && !ctx.rf.email.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.email.errors == null ? null : ctx.rf.email.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.email.errors == null ? null : ctx.rf.email.errors.email));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c0, ctx.registerFormSubmitted && ctx.rf.password.invalid, ctx.registerFormSubmitted && !ctx.rf.password.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.password.errors == null ? null : ctx.rf.password.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (!(ctx.rf.password.errors == null ? null : ctx.rf.password.errors.required) && (ctx.rf.password.errors == null ? null : ctx.rf.password.errors.minlength)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c0, ctx.registerFormSubmitted && ctx.rf.confirmPassword.invalid, ctx.registerFormSubmitted && !ctx.rf.confirmPassword.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.confirmPassword.errors == null ? null : ctx.rf.confirmPassword.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.confirmPassword.errors == null ? null : ctx.rf.confirmPassword.errors.mustMatch));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.acceptTerms.invalid || (ctx.rf.acceptTerms.errors == null ? null : ctx.rf.acceptTerms.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c1));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return RegisterPageComponent;
}());



/***/ }),

/***/ 64669:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/content-pages/serversettings/serversettings-page.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerSettingsPageComponent": function() { return /* binding */ ServerSettingsPageComponent; }
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);




var _c0 = ["f"];
var _c1 = function () { return ["/pages/login"]; };
var ServerSettingsPageComponent = /** @class */ (function () {
    function ServerSettingsPageComponent(router, route) {
        this.router = router;
        this.route = route;
        this.kayitlisunucu = '';
        this.sunucuadresi = '';
    }
    // On submit click, reset form fields
    ServerSettingsPageComponent.prototype.onSubmit = function () {
        localStorage.setItem('urlx', this.sunucuadresi);
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: "success",
            title: 'Sunucu adresi başarıyla ' + this.sunucuadresi + ' olarak güncellendi!',
            text: 'Sunucu adresi değişti',
            customClass: {
                confirmButton: 'btn btn-success'
            },
        });
    };
    // On login link click
    ServerSettingsPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ServerSettingsPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    ServerSettingsPageComponent.prototype.ngOnInit = function () {
        this.kayitlisunucu = localStorage.getItem('urlx');
        this.sunucuadresi = localStorage.getItem('urlx');
    };
    ServerSettingsPageComponent.ɵfac = function ServerSettingsPageComponent_Factory(t) { return new (t || ServerSettingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
    ServerSettingsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServerSettingsPageComponent, selectors: [["app-serversettings-page"]], viewQuery: function ServerSettingsPageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.forogtPasswordForm = _t.first);
        } }, decls: 20, vars: 4, consts: [["id", "forgot-password"], [1, "row", "auth-height", "full-height-vh", "m-0", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-12"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/forgot.png", "alt", "", "width", "500", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [1, "card-text", "mb-3"], ["type", "text", "placeholder", "Ge\u00E7erli sunucu adresi giriniz", 1, "form-control", "mb-3", 3, "value", "ngModel", "ngModelChange"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-between"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", "ml-sm-1", 3, "click"]], template: function ServerSettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sunucu Ayarlar\u0131");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Ba\u011Flant\u0131 ayarlar\u0131n\u0131z\u0131 yap\u0131n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ServerSettingsPageComponent_Template_input_ngModelChange_14_listener($event) { return ctx.sunucuadresi = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Giri\u015Fe D\u00F6n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServerSettingsPageComponent_Template_button_click_18_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Kaydet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.kayitlisunucu);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.sunucuadresi);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXJzZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ServerSettingsPageComponent;
}());



/***/ }),

/***/ 28536:
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/must-match.validator.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": function() { return /* binding */ MustMatch; }
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_content-pages_content-pages_module_ts.js.map