(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 36141);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 12227);
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ 90578);
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ 63650);
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ 65233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








var appRoutes = [
    {
        path: '#',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    },
    {
        path: 'pages',
        redirectTo: 'pages/error',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        redirectTo: 'pages/error',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_0__.FullLayoutComponent, data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__.Full_ROUTES, canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_1__.ContentLayoutComponent, data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_3__.CONTENT_ROUTES },
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];
var appRoutes2 = [
    {
        path: '',
        redirectTo: 'dashboard/dashboard1',
        pathMatch: 'full',
    },
    {
        path: 'components/navs',
        redirectTo: 'components/bootstrap/navs',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_0__.FullLayoutComponent, data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_2__.Full_ROUTES, canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_1__.ContentLayoutComponent, data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_3__.CONTENT_ROUTES },
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 83315);







var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient, toastr, router) {
        // this.router.events.subscribe((e) => {
        //     if (e instanceof NavigationEnd) {
        //         if(localStorage.getItem("userid")!=null){
        //             this.bildirimInterval =   setInterval(()=>{
        //                 var bildirimurl=localStorage.getItem('url')+"angular/dataservis.php?page_id=pdo_islembildirimlerim&turu=ilk&userid="+localStorage.getItem("userid");
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.router = router;
        this.alertAt = 15;
        this.startTimer = true;
        //                 this.httpClient.get<any>(bildirimurl).subscribe(data => {
        //                         if(data.length>0){
        //                             for (let i = 0; i <= data.length; i++) {                                             
        //                                 if(i==data.length){
        //                                     clearInterval(this.bildirimInterval);
        //                                 }else{
        //                                     if(data[i].bildirimturu=='Bilgi'){
        //                                         this.TypeInfo(data[i].bildirimmetni,data[i].olusturmatarihi+' '+data[i].olusturmasaati,data[i].index_bildirimler);
        //                                     }
        //                                     if(data[i].bildirimturu=='Uyari'){
        //                                         this.TypeWarning(data[i].bildirimmetni,data[i].olusturmatarihi+' '+data[i].olusturmasaati,data[i].index_bildirimler);
        //                                     }
        //                                 }              
        //                             }                           
        //                         }
        //                         else{             
        //                             clearInterval(this.bildirimInterval);
        //                             }
        //                 });
        //             },2000);    
        //         }else{
        //         }
        //     }
        //   });
        var currentDate = new Date();
        var cValue = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(currentDate, 'yyyy-MM-dd', 'en-US');
    }
    AppComponent.prototype.increase = function () {
        this.alertAt++;
    };
    AppComponent.prototype.ngOnInit = function () {
        localStorage.setItem('urlx', "https://www.jurimedya.com/");
        if (localStorage.getItem("kayitlikullanici") !== null && localStorage.getItem("kayitlisifre") !== null) {
        }
        if (localStorage.getItem("userid") === null) {
            this.router.navigate(['']);
        }
        this.subscription = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    // Info Type
    AppComponent.prototype.TypeInfo = function (message, header, id) {
        var _this = this;
        this.toastr.info(message, header, { "timeOut": 0, "extendedTimeOut": 0 }).onTap.subscribe(function () {
            var bildirimokundu = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_bildirimiokundu&bildirimid=" + id;
            _this.httpClient.get(bildirimokundu).subscribe(function (data) {
            });
        });
    };
    // Warning Type
    AppComponent.prototype.TypeWarning = function (message, header, id) {
        this.toastr.warning(message, header, { "timeOut": 0, "extendedTimeOut": 0 }).onTap.subscribe(function () {
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire */ 18690);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! highcharts-angular */ 23094);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/angular */ 41573);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/daygrid */ 44437);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ 83315);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 49476);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ 17562);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-dragula */ 82503);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 51863);
/* harmony import */ var _angular_common_locales_global_tr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/global/tr */ 48402);
/* harmony import */ var _angular_common_locales_global_tr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_global_tr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/app.reducer */ 5754);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ 12227);
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ 36141);
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/auth/auth.service */ 40866);
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ 65233);
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/window.service */ 60294);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var session_expiration_alert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! session-expiration-alert */ 9451);







 // must go before plugins
 // a plugin!

































var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID" //YOUR_MEASUREMENT_ID
};
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__.FullCalendarModule.registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__.default
]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.LOCALE_ID, useValue: 'tr-TR' },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__.HashLocationStrategy },
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService,
            _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_10__.AuthGuard,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.ScrollbarHelper,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.DimensionsHelper,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.ColumnChangesService,
            ng2_dragula__WEBPACK_IMPORTED_MODULE_17__.DragulaService,
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
            _shared_services_window_service__WEBPACK_IMPORTED_MODULE_11__.WINDOW_PROVIDERS
        ], imports: [[
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__.FullCalendarModule,
                _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreModule.forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_5__.appReducer),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
                highcharts_angular__WEBPACK_IMPORTED_MODULE_21__.HighchartsChartModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule.forRoot({
                    messages: {
                        emptyMessage: 'Gösterilecek Kayıt Bulunamadı',
                        totalMessage: 'kayıt Bulundu',
                        selectedMessage: 'seçildi' // Footer selected message
                    }
                }),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
                session_expiration_alert__WEBPACK_IMPORTED_MODULE_24__.SessionExpirationAlert.forRoot({ totalMinutes: 0.5 }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_25__.AngularFireModule.initializeApp(firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__.AngularFireAuthModule,
                ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastrModule.forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule,
                ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateModule.forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClient]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_32__.AgmCoreModule.forRoot({
                    apiKey: "YOUR_GOOGLE_MAP_API_KEY"
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_8__.FullLayoutComponent, _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_7__.ContentLayoutComponent], imports: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_13__.FullCalendarModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreRootModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        highcharts_angular__WEBPACK_IMPORTED_MODULE_21__.HighchartsChartModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, session_expiration_alert__WEBPACK_IMPORTED_MODULE_24__.SessionExpirationAlert, _angular_fire__WEBPACK_IMPORTED_MODULE_25__.AngularFireModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__.AngularFireAuthModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastrModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateModule, _agm_core__WEBPACK_IMPORTED_MODULE_32__.AgmCoreModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarModule] }); })();


/***/ }),

/***/ 39722:
/*!**********************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.model.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersChat": function() { return /* binding */ UsersChat; },
/* harmony export */   "Chat": function() { return /* binding */ Chat; }
/* harmony export */ });
var UsersChat = /** @class */ (function () {
    function UsersChat(userId, index, name, avatar, lastChatTime, status, isPinnedUser, isMuted, unreadMessageCount, isActiveChat, lastChatMessage, chats) {
        this.userId = userId;
        this.index = index;
        this.name = name;
        this.avatar = avatar;
        this.lastChatTime = lastChatTime;
        this.status = status;
        this.isPinnedUser = isPinnedUser;
        this.isMuted = isMuted;
        this.unreadMessageCount = unreadMessageCount;
        this.isActiveChat = isActiveChat;
        this.lastChatMessage = lastChatMessage;
        this.chats = chats;
    }
    return UsersChat;
}());

var Chat = /** @class */ (function () {
    function Chat(isReceived, time, messages, messageType) {
        this.isReceived = isReceived;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
    return Chat;
}());



/***/ }),

/***/ 50279:
/*!*************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.actions.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_CHAT": function() { return /* binding */ ADD_CHAT; },
/* harmony export */   "AddChat": function() { return /* binding */ AddChat; }
/* harmony export */ });
var ADD_CHAT = '[Chat] Add Chat';
var AddChat = /** @class */ (function () {
    function AddChat(payload) {
        this.payload = payload;
        this.type = ADD_CHAT;
    }
    return AddChat;
}());



/***/ }),

/***/ 3678:
/*!**************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.reducers.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatReducer": function() { return /* binding */ chatReducer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat-ngrx.model */ 39722);
/* harmony import */ var _chat_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.actions */ 50279);



var initialState = {
    usersChat: [
        {
            userId: "1",
            index: 0,
            name: "Elizabeth Elliott",
            avatar: "assets/img/portrait/small/avatar-s-2.png",
            lastChatTime: "9:04 PM",
            status: "online",
            isPinnedUser: true,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "Okay",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "2",
            index: 1,
            name: "Lucas Howell",
            avatar: "assets/img/portrait/small/avatar-s-7.png",
            lastChatTime: "4:14 AM",
            status: "busy",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "3",
            isActiveChat: false,
            lastChatMessage: "Thank you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "3",
            index: 2,
            name: "Sarah Woods",
            avatar: "assets/img/portrait/small/avatar-s-8.png",
            lastChatTime: "2:14 AM",
            status: "away",
            isPinnedUser: false,
            isMuted: true,
            unreadMessageCount: "12",
            isActiveChat: true,
            lastChatMessage: "Hello John!",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "4",
            index: 3,
            name: "Layla Allen",
            avatar: "assets/img/portrait/small/avatar-s-20.png",
            lastChatTime: "Yesterday",
            status: "online",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "I love you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "5",
            index: 4,
            name: "Bruce Reid",
            avatar: "assets/img/portrait/small/avatar-s-5.png",
            lastChatTime: "Yesterday",
            status: "offline",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "Will connect you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "6",
            index: 5,
            name: "Krish Candy",
            avatar: "assets/img/portrait/small/avatar-s-9.png",
            lastChatTime: "Wednesday",
            status: "away",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "4",
            isActiveChat: false,
            lastChatMessage: "Thank you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "7",
            index: 6,
            name: "Kelly Reyes",
            avatar: "assets/img/portrait/small/avatar-s-4.png",
            lastChatTime: "Thrusday",
            status: "busy",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "😎🙂😃",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "8",
            index: 7,
            name: "Vincent Nelson",
            avatar: "assets/img/portrait/small/avatar-s-14.png",
            lastChatTime: "Friday",
            status: "online",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "Who you are?",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "9",
            index: 8,
            name: "William Wright",
            avatar: "assets/img/portrait/small/avatar-s-23.png",
            lastChatTime: "1 week ago",
            status: "offline",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "6",
            isActiveChat: false,
            lastChatMessage: "How was the day?",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "10",
            index: 9,
            name: "Novah Miller",
            avatar: "assets/img/portrait/small/avatar-s-26.png",
            lastChatTime: "1 month ago",
            status: "away",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "There you are!",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        }
    ]
};
function chatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_CHAT):
            var updatedChat = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, state.usersChat[action.payload.index]), action.payload.newChat);
            var updatedChats = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], state.usersChat);
            updatedChats[action.payload.index] = updatedChat;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, state), { usersChat: updatedChats });
        default:
            return state;
    }
}


/***/ }),

/***/ 12227:
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentLayoutComponent": function() { return /* binding */ ContentLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/customizer.service */ 60360);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);






var _c0 = ["content-wrapper"];
var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, translate, document, renderer, cdr, customizerService) {
        this.configService = configService;
        this.translate = translate;
        this.document = document;
        this.renderer = renderer;
        this.cdr = cdr;
        this.customizerService = customizerService;
        this.config = {};
        this.config = this.configService.templateConf;
        this.renderer.addClass(this.document.body, "auth-page");
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    ContentLayoutComponent.prototype.loadLayout = function () {
        this.removeTransparentBGClasses();
        if (this.config.layout.variant === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
        }
        else if (this.config.layout.variant === "Dark") {
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
        }
        else if (this.config.layout.variant === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
        }
        this.renderer.removeClass(this.document.body, "menu-expanded");
        this.renderer.removeClass(this.document.body, "navbar-static");
        this.renderer.removeClass(this.document.body, "menu-open");
        this.renderer.addClass(this.document.body, "blank-page");
    };
    ContentLayoutComponent.prototype.removeTransparentBGClasses = function () {
        var _this = this;
        this.customizerService.transparent_colors.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
    };
    ContentLayoutComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, "auth-page");
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) { return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__.CustomizerService)); };
    ContentLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], viewQuery: function ContentLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        } }, decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper", "p-0"]], template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return ContentLayoutComponent;
}());



/***/ }),

/***/ 36141:
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": function() { return /* binding */ FullLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/window.service */ 60294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/layout.service */ 85682);
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/customizer.service */ 60360);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-device-detector */ 61946);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ 54696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 45227);
/* harmony import */ var _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/notification-sidebar/notification-sidebar.component */ 76430);
/* harmony import */ var _shared_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/customizer/customizer.component */ 93495);
/* harmony import */ var _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/directives/topmenu.directive */ 60342);
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/sidebar.directive */ 57744);
/* harmony import */ var _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/vertical-menu/vertical-menu.component */ 82329);



















function FullLayoutComponent_app_horizontal_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-horizontal-menu", 11);
} }
var _c0 = function (a0) { return { "background-image": a0 }; };
function FullLayoutComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 14);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r3.bgImage + ")"));
} }
var _c1 = function (a0, a1, a2) { return { "main-menu": a0, "menu-fixed": a1, "menu-native-scroll": a2 }; };
function FullLayoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_3_Template_div_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r4.sidebarMouseenter($event); })("mouseleave", function FullLayoutComponent_div_3_Template_div_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r6.sidebarMouseleave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, FullLayoutComponent_div_3_div_2_Template, 1, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](4, _c1, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, !ctx_r1.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("data-background-color", (ctx_r1.config == null ? null : ctx_r1.config.layout.variant) === "Transparent" ? "black" : ctx_r1.bgColor)("data-image", ctx_r1.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.config == null ? null : ctx_r1.config.layout.sidebar.backgroundImage);
} }
function FullLayoutComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FullLayoutComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
var _c2 = function (a0) { return { "show-overlay": a0 }; };
var _c3 = function (a0, a1) { return { "d-none": a0, "d-block": a1 }; };
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(configService, layoutService, router, customizerService, document, window, renderer, cdr, deviceService) {
        var _this = this;
        this.configService = configService;
        this.layoutService = layoutService;
        this.router = router;
        this.customizerService = customizerService;
        this.document = document;
        this.window = window;
        this.renderer = renderer;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.hideSidebar = true;
        this.overlayContent = false;
        this.isSmallScreen = false;
        this.menuPosition = 'Side';
        this.displayOverlayMenu = false; // Vertical Side menu for screenSize < 1200
        this.config = {};
        this.isMenuCollapsedOnHover = false;
        this.isNavbarSeachTextEmpty = true;
        this.isScrollTopVisible = false;
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        // On toggle sidebar menu
        this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
            _this.hideSidebar = !isShow;
            if (_this.hideSidebar) {
                _this.overlayContent = false;
            }
            else {
                _this.overlayContent = true;
            }
            _this.toggleSidebar();
        });
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            //load layout
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
        //hide overlay class on router change
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.NavigationEnd; })).subscribe(function (routeChange) {
            if (_this.config.layout.menuPosition === "Side" || _this.displayOverlayMenu) { // Vertical Menu
                if (_this.innerWidth < 1200) {
                    _this.layoutService.toggleSidebarSmallScreen(false);
                    _this.overlayContent = false;
                    _this.renderer.removeClass(_this.document.body, "overflow-hidden");
                }
            }
        });
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        this.setMenuLayout();
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        //Unsubcribe subscriptions
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    //adjust layout
    FullLayoutComponent.prototype.setMenuLayout = function () {
        this.overlayContent = false;
        this.renderer.removeClass(this.document.body, "blank-page");
        if (this.config.layout.menuPosition === "Top") { // Horizontal Menu
            if (this.innerWidth < 1200) { // Screen size < 1200
                this.displayOverlayMenu = true;
                this.hideSidebar = true;
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "menu-open");
                this.renderer.addClass(this.document.body, "horizontal-layout");
                this.renderer.addClass(this.document.body, "horizontal-menu-padding");
                this.renderer.addClass(this.document.body, "vertical-layout");
                this.renderer.addClass(this.document.body, "vertical-overlay-menu");
                this.renderer.addClass(this.document.body, "fixed-navbar");
                this.renderer.addClass(this.document.body, "menu-hide");
            }
            else { // Screen size > 1200
                this.displayOverlayMenu = false;
                this.hideSidebar = false;
                this.renderer.setAttribute(this.document.body, "data-menu", "horizontal-menu");
                this.renderer.removeClass(this.document.body, "vertical-layout");
                this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
                this.renderer.removeClass(this.document.body, "fixed-navbar");
                this.renderer.removeClass(this.document.body, "menu-hide");
                this.renderer.removeClass(this.document.body, "vertical-menu");
                // this.renderer.removeClass(this.document.body, "blank-page");
                this.renderer.addClass(this.document.body, "horizontal-menu");
                this.renderer.addClass(this.document.body, "horizontal-layout");
                this.renderer.addClass(this.document.body, "horizontal-menu-padding");
            }
        }
        else if (this.config.layout.menuPosition === "Side") { // Vertical Menu
            if (this.innerWidth < 1200) { // If Screen size < 1200
                this.displayOverlayMenu = true;
                this.renderer.removeClass(this.document.body, "horizontal-layout");
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
                this.renderer.removeClass(this.document.body, "menu-expanded");
                this.renderer.removeClass(this.document.body, "vertical-menu");
                this.renderer.removeClass(this.document.body, "menu-open");
                this.renderer.removeClass(this.document.body, "nav-collapsed");
                this.renderer.addClass(this.document.body, "vertical-layout");
                this.renderer.addClass(this.document.body, "menu-hide");
            }
            else { // If Screen size > 1200
                this.displayOverlayMenu = false;
                this.renderer.removeClass(this.document.body, "horizontal-layout");
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
                // this.renderer.removeClass(this.document.body, "blank-page");
                this.renderer.setAttribute(this.document.body, "data-menu", "vertical-menu");
                this.renderer.addClass(this.document.body, "vertical-layout");
                if (!this.config.layout.sidebar.collapsed) {
                    this.renderer.addClass(this.document.body, "menu-expanded");
                    this.renderer.addClass(this.document.body, "menu-open");
                }
                this.renderer.addClass(this.document.body, "vertical-menu");
                this.renderer.removeClass(this.document.body, "menu-hide");
                this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
            }
        }
    };
    FullLayoutComponent.prototype.loadLayout = function () {
        //menu position "SIDE" or "TOP"
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        //Hide/show sidebar menu background image
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = "";
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        //Set sidebar menu background color
        if (!this.config.layout.sidebar.backgroundColor) {
            this.bgColor = this.customizerService.light_dark_colors[7].code;
        }
        else {
            this.bgColor = this.config.layout.sidebar.backgroundColor;
        }
        //toggle side menu
        if (this.config.layout.menuPosition === "Side") {
            if (this.config.layout.sidebar.collapsed) {
                this.isMenuCollapsedOnHover = true;
            }
            else {
                this.isMenuCollapsedOnHover = true;
            }
            this.toggleSidebar();
        }
        this.removeTransparentBGClasses();
        // Layout variants
        if (this.config.layout.variant === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
        }
        else if (this.config.layout.variant === "Dark") {
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
        }
        else if (this.config.layout.variant === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, this.bgColor);
            this.bgImage = "";
        }
        this.setMenuLayout();
        // For Sidebar width
        if (this.config.layout.sidebar.size === 'sidebar-sm') {
            this.renderer.removeClass(this.document.body, "sidebar-lg");
            this.renderer.addClass(this.document.body, "sidebar-sm");
        }
        else if (this.config.layout.sidebar.size === 'sidebar-lg') {
            this.renderer.removeClass(this.document.body, "sidebar-sm");
            this.renderer.addClass(this.document.body, "sidebar-lg");
        }
        else {
            this.renderer.removeClass(this.document.body, "sidebar-sm");
            this.renderer.removeClass(this.document.body, "sidebar-lg");
        }
        if (this.config.layout.menuPosition === "Side") {
            // vertical/Side menu expanded/collapse
            if (this.config.layout.sidebar.collapsed && !this.isSmallScreen) { // collapse side menu
                this.renderer.removeClass(this.document.body, "menu-expanded");
                this.renderer.addClass(this.document.body, "nav-collapsed");
            }
            else { // expand side menu
                this.renderer.removeClass(this.document.body, "nav-collapsed");
                this.renderer.addClass(this.document.body, "menu-expanded");
            }
        }
        //Navbar types
        if (this.config.layout.navbar.type === 'Static') {
            this.renderer.removeClass(this.document.body, "navbar-sticky");
            this.renderer.addClass(this.document.body, "navbar-static");
        }
        else if (this.config.layout.navbar.type === 'Fixed') {
            this.renderer.removeClass(this.document.body, "navbar-static");
            this.renderer.addClass(this.document.body, "navbar-sticky");
        }
    };
    FullLayoutComponent.prototype.toggleSidebar = function () {
        if (this.hideSidebar) { // on sidebar collapse
            this.renderer.removeClass(this.document.body, "menu-expanded");
            this.renderer.removeClass(this.document.body, "vertical-menu");
            this.renderer.removeClass(this.document.body, "menu-open");
            this.renderer.addClass(this.document.body, "vertical-layout");
            this.renderer.addClass(this.document.body, "menu-hide");
            if (this.config.layout.menuPosition === "Top") {
                this.renderer.addClass(this.document.body, "vertical-overlay-menu");
            }
        }
        else { // on sidebar expand
            this.renderer.addClass(this.document.body, "vertical-layout");
            this.renderer.addClass(this.document.body, "menu-expanded");
            this.renderer.addClass(this.document.body, "vertical-menu");
            if (this.config.layout.sidebar.collapsed) {
                this.renderer.removeClass(this.document.body, "menu-open");
            }
            else {
                this.renderer.addClass(this.document.body, "menu-open");
            }
            this.renderer.removeClass(this.document.body, "menu-hide");
        }
        this.isTouchDevice();
    };
    FullLayoutComponent.prototype.isTouchDevice = function () {
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            if (!this.hideSidebar) {
                this.renderer.addClass(this.document.body, "overflow-hidden");
            }
            else {
                this.renderer.removeClass(this.document.body, "overflow-hidden");
            }
        }
    };
    FullLayoutComponent.prototype.hideCompactMenuOnSmallScreen = function () {
        if (this.innerWidth < 1200) {
            var conf = this.config;
            conf.layout.sidebar.collapsed = false;
            this.configService.applyTemplateConfigChange({ layout: conf.layout });
        }
    };
    //Remove transparent layout classes
    FullLayoutComponent.prototype.removeTransparentBGClasses = function () {
        var _this = this;
        this.customizerService.transparent_colors.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
    };
    FullLayoutComponent.prototype.sidebarMouseenter = function (e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = false;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    };
    FullLayoutComponent.prototype.sidebarMouseleave = function (e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = true;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    };
    //scroll to top on click
    FullLayoutComponent.prototype.scrollToTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    FullLayoutComponent.prototype.onOutsideClick = function (e) {
        if (this.innerWidth < 1200) {
            if (!e.target.classList.contains("toggleSidebarNavbarButton")) {
                this.layoutService.toggleSidebarSmallScreen(false);
            }
        }
    };
    FullLayoutComponent.prototype.onWrapperClick = function () {
        this.isNavbarSeachTextEmpty = true;
    };
    FullLayoutComponent.prototype.checkNavbarSeachTextEmpty = function ($event) {
        this.isNavbarSeachTextEmpty = $event;
    };
    FullLayoutComponent.prototype.onResize = function (event) {
        var _this = this;
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((function () {
            _this.innerWidth = event.target.innerWidth;
            _this.setMenuLayout();
            _this.hideCompactMenuOnSmallScreen();
        }).bind(this), 500);
    };
    //Add/remove classes on page scroll
    FullLayoutComponent.prototype.onWindowScroll = function () {
        var number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 60) {
            this.renderer.addClass(this.document.body, "navbar-scrolled");
        }
        else {
            this.renderer.removeClass(this.document.body, "navbar-scrolled");
        }
        if (number > 400) {
            this.isScrollTopVisible = true;
        }
        else {
            this.isScrollTopVisible = false;
        }
        if (number > 20) {
            this.renderer.addClass(this.document.body, "page-scrolled");
        }
        else {
            this.renderer.removeClass(this.document.body, "page-scrolled");
        }
    };
    FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) { return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_0__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_16__.DeviceDetectorService)); };
    FullLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: FullLayoutComponent, selectors: [["app-full-layout"]], hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
        } }, decls: 15, vars: 10, consts: [[3, "seachTextEmpty"], [1, "wrapper", 3, "ngClass", "click", "resize"], ["appTopMenu", "", 4, "ngIf"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "sidenav-overlay", 3, "ngClass", "click"], [1, "drag-target"], ["appTopMenu", ""], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]], template: function FullLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-navbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("seachTextEmpty", function FullLayoutComponent_Template_app_navbar_seachTextEmpty_0_listener($event) { return ctx.checkNavbarSeachTextEmpty($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_1_listener() { return ctx.onWrapperClick(); })("resize", function FullLayoutComponent_Template_div_resize_1_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, FullLayoutComponent_app_horizontal_menu_2_Template, 1, 0, "app-horizontal-menu", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, FullLayoutComponent_div_3_Template, 3, 8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, FullLayoutComponent_button_10_Template, 2, 0, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "app-notification-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-customizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_13_listener($event) { return ctx.onOutsideClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](5, _c2, !ctx.isNavbarSeachTextEmpty));
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Top" && !ctx.displayOverlayMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](7, _c3, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
        } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.NotificationSidebarComponent, _shared_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__.CustomizerComponent, _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_8__.HorizontalMenuComponent, _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_9__.TopMenuDirective, _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_10__.SidebarDirective, _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_11__.VerticalMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return FullLayoutComponent;
}());



/***/ }),

/***/ 21138:
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAnimations": function() { return /* binding */ customAnimations; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 97175);

var customAnimations = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slideInOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('1', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '*' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: '0px' })),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('1 <=> 0', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200))
    ])
];


/***/ }),

/***/ 65233:
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 40866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.isAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/pages/login']);
        }
        else {
            return true;
        }
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
    return AuthGuard;
}());



/***/ }),

/***/ 40866:
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 36363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
        // return this._firebaseAuth.signInWithEmailAndPassword(email, password)
        //uncomment above firebase auth code and remove this temp code
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, 1000);
        });
    };
    AuthService.prototype.logout = function () {
        this._firebaseAuth.signOut();
        this.router.navigate(['YOUR_LOGOUT_URL']);
    };
    AuthService.prototype.isAuthenticated = function () {
        return true;
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
    return AuthService;
}());



/***/ }),

/***/ 64609:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete-content.directive.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteContentDirective": function() { return /* binding */ AutocompleteContentDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var AutocompleteContentDirective = /** @class */ (function () {
    function AutocompleteContentDirective(tpl) {
        this.tpl = tpl;
    }
    AutocompleteContentDirective.ɵfac = function AutocompleteContentDirective_Factory(t) { return new (t || AutocompleteContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
    AutocompleteContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutocompleteContentDirective, selectors: [["", "appAutocompleteContent", ""]] });
    return AutocompleteContentDirective;
}());



/***/ }),

/***/ 7575:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": function() { return /* binding */ AutocompleteComponent; }
/* harmony export */ });
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






var _c0 = ["root"];
function AutocompleteComponent_ng_template_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function AutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AutocompleteComponent_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content ? ctx_r1.content.tpl : null);
} }
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
    }
    AutocompleteComponent.prototype.optionsClick = function () {
        return this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(function (options) {
            var clicks$ = options.map(function (option) { return option.click$; });
            return rxjs__WEBPACK_IMPORTED_MODULE_4__.merge.apply(void 0, clicks$);
        }));
    };
    AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
    AutocompleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_0__.AutocompleteContentDirective, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_1__.OptionComponent, 4);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
        } }, viewQuery: function AutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rootTemplate = _t.first);
        } }, exportAs: ["appAutocomplete"], decls: 2, vars: 0, consts: [["root", ""], [1, "autocomplete", "search-list"], [4, "ngTemplateOutlet"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet], styles: [".autocomplete[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.search-list[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  background: #FFFFFF;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n  padding-left: 0;\r\n  border-radius: 0.267rem;\r\n  z-index: 1200;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvY29tcGxldGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VhcmNoLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjY3cmVtO1xyXG4gIHotaW5kZXg6IDEyMDA7XHJcbn1cclxuIl19 */"] });
    return AutocompleteComponent;
}());



/***/ }),

/***/ 86780:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.directive.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteDirective": function() { return /* binding */ AutocompleteDirective; },
/* harmony export */   "overlayClickOutside": function() { return /* binding */ overlayClickOutside; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 82516);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-take-until-destroy */ 15818);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);










var AutocompleteDirective = /** @class */ (function () {
    function AutocompleteDirective(host, ngControl, vcr, overlay, router) {
        this.host = host;
        this.ngControl = ngControl;
        this.vcr = vcr;
        this.overlay = overlay;
        this.router = router;
    }
    Object.defineProperty(AutocompleteDirective.prototype, "control", {
        get: function () {
            return this.ngControl.control;
        },
        enumerable: false,
        configurable: true
    });
    AutocompleteDirective.prototype.ngOnInit = function () {
        var _this = this;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.origin, 'focus').pipe((0,ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(function () {
            _this.openDropdown();
            _this.appAutocomplete.optionsClick()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(_this.overlayRef.detachments()))
                .subscribe(function (value) {
                _this.control.setValue(value);
                _this.close();
            });
        });
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd; })).subscribe(function (routeChange) {
            _this.close();
        });
    };
    AutocompleteDirective.prototype.openDropdown = function () {
        var _this = this;
        this.close();
        this.overlayRef = this.overlay.create({
            width: this.origin.offsetWidth,
            maxHeight: 40 * 3,
            backdropClass: '',
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            positionStrategy: this.getOverlayPosition()
        });
        var template = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.TemplatePortal(this.appAutocomplete.rootTemplate, this.vcr);
        this.overlayRef.attach(template);
        overlayClickOutside(this.overlayRef, this.origin).subscribe(function () { return _this.close(); });
    };
    AutocompleteDirective.prototype.ngOnDestroy = function () { };
    AutocompleteDirective.prototype.close = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
        this.overlayRef = null;
    };
    AutocompleteDirective.prototype.getOverlayPosition = function () {
        var positions = [
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        return this.overlay
            .position()
            .flexibleConnectedTo(this.origin)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
    };
    Object.defineProperty(AutocompleteDirective.prototype, "origin", {
        get: function () {
            return this.host.nativeElement;
        },
        enumerable: false,
        configurable: true
    });
    AutocompleteDirective.ɵfac = function AutocompleteDirective_Factory(t) { return new (t || AutocompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
    AutocompleteDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({ type: AutocompleteDirective, selectors: [["", "appAutocomplete", ""]], inputs: { appAutocomplete: "appAutocomplete" } });
    return AutocompleteDirective;
}());

function overlayClickOutside(overlayRef, origin) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(document, 'click')
        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (event) {
        var clickTarget = event.target;
        var notOrigin = clickTarget !== origin; // the input
        var notOverlay = !!overlayRef && (overlayRef.overlayElement.contains(clickTarget) === false); // the autocomplete
        return notOrigin && notOverlay;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(overlayRef.detachments()));
}


/***/ }),

/***/ 10322:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteModule": function() { return /* binding */ AutocompleteModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.component */ 7575);
/* harmony import */ var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.directive */ 86780);
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete-content.directive */ 64609);
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option/option.component */ 17606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






var publicApi = [
    _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent,
    _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__.AutocompleteDirective,
    _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__.AutocompleteContentDirective,
    _option_option_component__WEBPACK_IMPORTED_MODULE_3__.OptionComponent
];
var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule.ɵfac = function AutocompleteModule_Factory(t) { return new (t || AutocompleteModule)(); };
    AutocompleteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AutocompleteModule });
    AutocompleteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
            ]] });
    return AutocompleteModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AutocompleteModule, { declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent,
        _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__.AutocompleteDirective,
        _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__.AutocompleteContentDirective,
        _option_option_component__WEBPACK_IMPORTED_MODULE_3__.OptionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_0__.AutocompleteComponent,
        _autocomplete_directive__WEBPACK_IMPORTED_MODULE_1__.AutocompleteDirective,
        _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_2__.AutocompleteContentDirective,
        _option_option_component__WEBPACK_IMPORTED_MODULE_3__.OptionComponent] }); })();


/***/ }),

/***/ 17606:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/option/option.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionComponent": function() { return /* binding */ OptionComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 82516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 67202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



var _c0 = ["*"];
var OptionComponent = /** @class */ (function () {
    function OptionComponent(host) {
        this.host = host;
    }
    OptionComponent.prototype.ngOnInit = function () {
        this.click$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.element, 'click').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mapTo)(this.value));
    };
    Object.defineProperty(OptionComponent.prototype, "element", {
        get: function () {
            return this.host.nativeElement;
        },
        enumerable: false,
        configurable: true
    });
    OptionComponent.ɵfac = function OptionComponent_Factory(t) { return new (t || OptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
    OptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OptionComponent, selectors: [["app-option"]], inputs: { value: "value", url: "url" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "option"]], template: function OptionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.no-result[_nghost-%COMP%] {\n  pointer-events: none;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n  display: block;\n}\n\n[_nghost-%COMP%]:first-child   .option[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.35rem;\n  border-top-right-radius: 0.35rem;\n}\n\n[_nghost-%COMP%]:last-child   .option[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n}\n\n.first-active-item[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUdFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJvcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbjpob3N0Lm5vLXJlc3VsdCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOmhvc3Q6Zmlyc3QtY2hpbGQgLm9wdGlvbiB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zNXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zNXJlbTtcclxufVxyXG5cclxuOmhvc3Q6bGFzdC1jaGlsZCAub3B0aW9uIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjM1cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjM1cmVtO1xyXG59XHJcblxyXG4ub3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG46aG9zdC5maXJzdC1hY3RpdmUtaXRlbSB7XHJcbiAgLm9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });
    return OptionComponent;
}());



/***/ }),

/***/ 93495:
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerComponent": function() { return /* binding */ CustomizerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/customizer.service */ 60360);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);






var _c0 = ["customizer"];
var _c1 = function (a0) { return { "selected": a0 }; };
function CustomizerComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_64_Template_span_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var color_r7 = restoredCtx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.customizerService.changeSidebarBGColor(color_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", color_r7.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r7.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-color", color_r7.code);
} }
function CustomizerComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_66_Template_span_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); var color_r10 = restoredCtx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.customizerService.changeSidebarBGColor(color_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", color_r10.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r10.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-color", color_r10.code);
} }
function CustomizerComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_73_Template_div_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); var color_r13 = restoredCtx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.customizerService.changeSidebarTransparentBGColor(color_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("rounded ", color_r13.class, " ct-glass-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r13.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-image", color_r13.class);
} }
function CustomizerComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_81_Template_img_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); var img_r16 = restoredCtx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.customizerService.changeSidebarBgImage(img_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r16.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, img_r16.active));
} }
function CustomizerComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_div_89_Template_span_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); var color_r19 = restoredCtx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.customizerService.changeSidebarTransparentBGColor(color_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", color_r19.class, " d-block rounded  ct-color-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, color_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-bg-color", color_r19.class);
} }
var _c2 = function (a0) { return { "active": a0 }; };
function CustomizerComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sol Men\u00FC Geni\u015Fli\u011Fi");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_div_110_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.changeSidebarWidth("sidebar-sm"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "K\u00FC\u00E7\u00FCk");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_div_110_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.changeSidebarWidth("sidebar-md"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Orta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_div_110_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.changeSidebarWidth("sidebar-lg"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "B\u00FCy\u00FCk");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, ctx_r6.size === "sidebar-sm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c2, ctx_r6.size === "sidebar-md"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-md");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx_r6.size === "sidebar-lg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-lg");
} }
var _c3 = function (a0) { return { open: a0 }; };
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(renderer, configService, customizerService) {
        this.renderer = renderer;
        this.configService = configService;
        this.customizerService = customizerService;
        this.isBgImageDisplay = true;
        this.isOpen = true;
        this.config = {};
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.config = this.configService.templateConf;
        this.isOpen = !this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.size = this.config.layout.sidebar.size;
        }
    }
    CustomizerComponent.prototype.ngOnInit = function () {
    };
    CustomizerComponent.prototype.changeSidebarWidth = function (value) {
        this.size = value;
        this.customizerService.changeSidebarWidth(value);
    };
    CustomizerComponent.prototype.toggleCustomizer = function () {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, "open");
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, "open");
            this.isOpen = true;
        }
    };
    CustomizerComponent.prototype.closeCustomizer = function () {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
    };
    CustomizerComponent.prototype.bgImageDisplay = function (e) {
        if (e.target.checked) {
            this.isBgImageDisplay = true;
        }
        else {
            this.isBgImageDisplay = false;
        }
        //emit event to FUll Layout
        this.customizerService.bgImageDisplay(e);
    };
    CustomizerComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_1__.CustomizerService)); };
    CustomizerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], viewQuery: function CustomizerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customizer = _t.first);
        } }, outputs: { directionEvent: "directionEvent" }, decls: 111, vars: 17, consts: [[1, "customizer", "d-none", "d-lg-none", "d-xl-block", 3, "ngClass"], ["customizer", ""], ["data-ps-id", "df6a5ce4-a175-9172-4402-dabd98fc9c0a", 1, "customizer-content", "p-3", "ps-container", "ps-theme-dark", 3, "perfectScrollbar"], [1, "text-uppercase"], [1, "ct-layout"], [1, "mb-3", "d-flex", "align-items-center"], [1, "ft-layout", "font-medium-2", "mr-2"], [1, "layout-switch"], [1, "radio", "radio-sm", "d-inline-block", "light-layout", "mr-3"], ["id", "ll-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "ll-switch"], [1, "radio", "radio-sm", "d-inline-block", "dark-layout", "mr-3"], ["id", "dl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "dl-switch"], [1, "radio", "radio-sm", "d-inline-block", "transparent-layout"], ["id", "tl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "tl-switch"], [1, "ct-menu-type"], [1, "ft-credit-card", "font-medium-2", "mr-2"], [1, "menu-switch"], [1, "radio", "radio-sm", "d-inline-block", "menu-side", "mr-3"], ["id", "menu-side", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-side"], [1, "radio", "radio-sm", "d-inline-block", "menu-top"], ["id", "menu-top", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-top"], [1, "ct-navbar-type"], [1, "ft-more-horizontal", "font-medium-2", "mr-2"], [1, "navbar-switch"], [1, "radio", "radio-sm", "d-inline-block", "nav-static", "mr-3"], ["id", "nav-static", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-static"], [1, "radio", "radio-sm", "d-inline-block", "nav-fixed"], ["id", "nav-fixed", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-fixed"], [1, "ct-bg-color"], [1, "sb-options", "d-flex", "align-items-center", "mb-3"], [1, "ft-droplet", "font-medium-2", "mr-2"], [1, "cz-bg-color", "sb-color-options"], [1, "row", "mb-3"], ["class", "col px-2", 4, "ngFor", "ngForOf"], [1, "row"], [1, "tl-bg-img"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ft-star", "font-medium-2", "mr-2"], [1, "cz-tl-bg-image", "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "ct-bg-image"], [1, "sb-bg-img", "d-flex", "align-items-center", "mb-3"], [1, "ft-sidebar", "font-medium-2", "mr-2"], [1, "cz-bg-image", "row", "sb-bg-img"], ["class", "col-2 px-2", 4, "ngFor", "ngForOf"], [1, "tl-color-option"], [1, "tl-color-options", "d-flex", "align-items-center", "mb-3"], [1, "cz-tl-bg-color"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "ct-bg-image-toggler"], [1, "togglebutton", "toggle-sb-bg-img"], [1, "float-right"], [1, "checkbox"], ["id", "sidebar-bg-img", "type", "checkbox", "checked", "", 1, "cz-bg-image-display", 3, "change"], ["for", "sidebar-bg-img"], [1, "ct-compact-toggler"], [1, "togglebutton"], ["id", "cz-compact-menu", "type", "checkbox", 1, "cz-compact-menu", 3, "checked", "change"], ["for", "cz-compact-menu"], ["class", "ct-sidebar-size", 4, "ngIf"], [1, "col", "px-2"], [2, "width", "30px", "height", "30px", 3, "ngClass", "click"], [1, "col-sm-3"], [3, "ngClass", "click"], [1, "col-2", "px-2"], ["alt", "sidebar bg image", "width", "90", 1, "rounded", 3, "src", "ngClass", "click"], [1, "col"], [1, "ct-sidebar-size"], ["id", "cz-sidebar-width", "data-toggle", "buttons", 1, "cz-sidebar-width", "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-primary", 3, "ngClass"], ["id", "cz-btn-radio-1", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-sm", 3, "checked", "change"], ["id", "cz-btn-radio-2", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-md", 3, "checked", "change"], ["id", "cz-btn-radio-3", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-lg", 3, "checked", "change"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Tema D\u00FCzenleyici");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Ger\u00E7ek Zamanl\u0131 \u0130ste\u011Finize G\u00F6re Temay\u0131 D\u00FCzenleyin");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "D\u00FCzen Se\u00E7enekleri");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_15_listener() { return ctx.customizerService.switchLayout("light", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_19_listener() { return ctx.customizerService.switchLayout("dark", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_23_listener() { return ctx.customizerService.switchLayout("transparent", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Transparent");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h6", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Men\u00FC Se\u00E7enekleri ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_34_listener() { return ctx.customizerService.toggleMenuPosition("Side"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Dikey");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_38_listener() { return ctx.customizerService.toggleMenuPosition("Top"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Yatay");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h6", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Navbar Tipi");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_49_listener() { return ctx.customizerService.toggleNavbarType("Static"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Statik");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_53_listener() { return ctx.customizerService.toggleNavbarType("Fixed"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Sabit");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h6", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Sol Men\u00FC Renk Se\u00E7enekleri");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, CustomizerComponent_div_64_Template, 2, 7, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, CustomizerComponent_div_66_Template, 2, 7, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h6", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Background Colors with Shades");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, CustomizerComponent_div_73_Template, 2, 7, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h6", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Sol Men\u00FC Resim ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, CustomizerComponent_div_81_Template, 2, 4, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h6", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Background Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, CustomizerComponent_div_89_Template, 2, 7, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Sol Men\u00FC Resim");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "input", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_98_listener($event) { return ctx.bgImageDisplay($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "label", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "S\u0131k\u0131\u015Ft\u0131r\u0131lm\u0131\u015F Men\u00FC");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "input", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_108_listener($event) { return ctx.customizerService.toggleCompactMenu($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "label", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, CustomizerComponent_div_110_Template, 17, 12, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c3, ctx.isOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Transparent");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Side");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Top");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Static");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutGradientBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutSolidBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColorsWithShades);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutBGImages);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.config.layout.sidebar.collapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.config.layout.sidebar.collapsed);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CustomizerComponent;
}());



/***/ }),

/***/ 48327:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarAnchorToggleDirective": function() { return /* binding */ SidebarAnchorToggleDirective; }
/* harmony export */ });
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-link.directive */ 7883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ɵfac = function SidebarAnchorToggleDirective_Factory(t) { return new (t || SidebarAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_0__.SidebarLinkDirective)); };
    SidebarAnchorToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SidebarAnchorToggleDirective, selectors: [["", "appSidebarAnchorToggle", ""]], hostBindings: function SidebarAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarAnchorToggleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
    return SidebarAnchorToggleDirective;
}());



/***/ }),

/***/ 83273:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDropdownDirective": function() { return /* binding */ SidebarDropdownDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


var SidebarDropdownDirective = /** @class */ (function () {
    function SidebarDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    SidebarDropdownDirective.prototype.ngOnInit = function () {
        //write your code here!
    };
    SidebarDropdownDirective.ɵfac = function SidebarDropdownDirective_Factory(t) { return new (t || SidebarDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
    SidebarDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDropdownDirective, selectors: [["", "appSidebarDropdown", ""]] });
    return SidebarDropdownDirective;
}());



/***/ }),

/***/ 7883:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-link.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLinkDirective": function() { return /* binding */ SidebarLinkDirective; }
/* harmony export */ });
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.directive */ 57744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sideNav) {
        this.sideNav = sideNav;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "sidebarGroupActive", {
        get: function () {
            return this._sidebarGroupActive;
        },
        set: function (value) {
            this._sidebarGroupActive = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: false,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sideNav.addLink(this);
    };
    SidebarLinkDirective.prototype.ngOnDestroy = function () {
    };
    //when side menu (vertical menu) item gets clicked
    SidebarLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
        if (this.open) {
            this.sideNav.closeOtherLinks(this);
        }
        if (!this.open && this.level.toString() === "1" && this.hasSub) {
            this.sidebarGroupActive = false;
        }
    };
    SidebarLinkDirective.ɵfac = function SidebarLinkDirective_Factory(t) { return new (t || SidebarLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_sidebar_directive__WEBPACK_IMPORTED_MODULE_0__.SidebarDirective)); };
    SidebarLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SidebarLinkDirective, selectors: [["", "appSidebarlink", ""]], hostVars: 6, hostBindings: function SidebarLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open)("sidebar-group-active", ctx.sidebarGroupActive)("nav-collapsed-open", ctx.navCollapsedOpen);
        } }, inputs: { parent: "parent", level: "level", hasSub: "hasSub", path: "path", open: "open", sidebarGroupActive: "sidebarGroupActive", navCollapsedOpen: "navCollapsedOpen" } });
    return SidebarLinkDirective;
}());



/***/ }),

/***/ 57744:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarDirective": function() { return /* binding */ SidebarDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 85682);




var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(cdr, router, configService, layoutService) {
        this.cdr = cdr;
        this.router = router;
        this.configService = configService;
        this.layoutService = layoutService;
        this.navlinks = [];
        this.config = {};
        this.mouseEnter = false;
        this.sidebarExpanded = true;
        this.config = this.configService.templateConf;
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
    }
    Object.defineProperty(SidebarDirective.prototype, "navExpanded", {
        get: function () {
            return this._navExpanded;
        },
        set: function (value) {
            this._navExpanded = value;
        },
        enumerable: false,
        configurable: true
    });
    SidebarDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    SidebarDirective.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    //load layout when changes in the config
    SidebarDirective.prototype.loadLayout = function () {
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
        if (this.config.layout.sidebar.collapsed && !this.mouseEnter) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
        else {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    };
    //add menu links to the link list
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    //close all other menu items other than active one
    SidebarDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.open = false;
                link.sidebarGroupActive = false;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === true) {
                link.sidebarGroupActive = true;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === false) {
                link.sidebarGroupActive = false;
                link.open = false;
            }
            else if (link === openLink && openLink.level.toString() != "1" && link.hasSub === false) {
                link.open = false;
                link.sidebarGroupActive = false;
                return;
            }
        });
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
    };
    // call when sidebar toggle is collapsed but still in expand mode on mouse hover
    SidebarDirective.prototype.setSidebarGroupActive = function () {
        var _this = this;
        if (this.navlinks.length > 0) {
            this.navlinks.forEach(function (link) {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            var matched_1 = this.navlinks.find(function (link) { return link.path === _this.router.url; });
            if (matched_1) {
                var parent_1 = this.navlinks.find(function (link) { return link.parent === matched_1.parent && link.level.toString() === "1" && link.hasSub === true; });
                if (parent_1) {
                    parent_1.sidebarGroupActive = true;
                    parent_1.navCollapsedOpen = false;
                    parent_1.open = true;
                }
            }
        }
    };
    // call when sidebar toggle is collapsed and is in collapse mode on mouse out
    SidebarDirective.prototype.setSidebarGroupActiveCollapsed = function () {
        var _this = this;
        this.closeOtherLinks(this.navlinks.find(function (link) { return link.path === _this.router.url; }));
        if (this.navlinks.length > 0) {
            this.navlinks.forEach(function (link) {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            var matched_2 = this.navlinks.find(function (link) { return link.path === _this.router.url; });
            if (matched_2) {
                var parent_2 = this.navlinks.find(function (link) { return link.parent === matched_2.parent && link.level.toString() === "1" && link.hasSub === true; });
                if (parent_2) {
                    parent_2.sidebarGroupActive = true;
                    parent_2.navCollapsedOpen = true;
                    parent_2.open = false;
                }
            }
        }
    };
    // mouse enter event of side menu
    SidebarDirective.prototype.onMouseOver = function (e) {
        this.mouseEnter = true;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    };
    // mouse leave event of side menu
    SidebarDirective.prototype.onMouseOut = function (e) {
        this.mouseEnter = false;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
    };
    SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService)); };
    SidebarDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostVars: 2, hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseleave", function SidebarDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx.navExpanded);
        } }, inputs: { navExpanded: "navExpanded" } });
    return SidebarDirective;
}());



/***/ }),

/***/ 53418:
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleFullscreenDirective": function() { return /* binding */ ToggleFullscreenDirective; }
/* harmony export */ });
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! screenfull */ 15950);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__.isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__.toggle();
        }
    };
    ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) { return new (t || ToggleFullscreenDirective)(); };
    ToggleFullscreenDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ToggleFullscreenDirective, selectors: [["", "appToggleFullscreen", ""]], hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } } });
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ 91354:
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuAnchorToggleDirective": function() { return /* binding */ TopMenuAnchorToggleDirective; }
/* harmony export */ });
/* harmony import */ var _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topmenu-link.directive */ 31793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



var TopMenuAnchorToggleDirective = /** @class */ (function () {
    function TopMenuAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    // @HostListener("click", ["$event"])
    // onClick() {
    //   this.navlink.toggle();
    // }
    TopMenuAnchorToggleDirective.prototype.onMouseOver = function (e) {
        this.navlink.openDropdown();
    };
    TopMenuAnchorToggleDirective.ɵfac = function TopMenuAnchorToggleDirective_Factory(t) { return new (t || TopMenuAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_0__.TopMenuLinkDirective)); };
    TopMenuAnchorToggleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TopMenuAnchorToggleDirective, selectors: [["", "appTopMenuAnchorToggle", ""]], hostBindings: function TopMenuAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function TopMenuAnchorToggleDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); });
        } } });
    return TopMenuAnchorToggleDirective;
}());



/***/ }),

/***/ 90235:
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-dropdown.directive.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDropdownDirective": function() { return /* binding */ TopMenuDropdownDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


var TopMenuDropdownDirective = /** @class */ (function () {
    function TopMenuDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    TopMenuDropdownDirective.prototype.ngOnInit = function () {
        //write your code here!
    };
    TopMenuDropdownDirective.ɵfac = function TopMenuDropdownDirective_Factory(t) { return new (t || TopMenuDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
    TopMenuDropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDropdownDirective, selectors: [["", "appTopMenuDropdown", ""]] });
    return TopMenuDropdownDirective;
}());



/***/ }),

/***/ 31793:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-link.directive.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuLinkDirective": function() { return /* binding */ TopMenuLinkDirective; }
/* harmony export */ });
/* harmony import */ var _topmenu_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topmenu.directive */ 60342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



var TopMenuLinkDirective = /** @class */ (function () {
    function TopMenuLinkDirective(topNav) {
        this.topNav = topNav;
    }
    Object.defineProperty(TopMenuLinkDirective.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = value;
            if (value) {
                this.topNav.closeOtherLinks(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    TopMenuLinkDirective.prototype.ngOnInit = function () {
        this.topNav.addLink(this);
    };
    TopMenuLinkDirective.prototype.ngOnDestroy = function () {
    };
    // public toggle(): any {
    //   this.show = !this.show;
    // }
    TopMenuLinkDirective.prototype.openDropdown = function () {
        this.show = true;
    };
    TopMenuLinkDirective.ɵfac = function TopMenuLinkDirective_Factory(t) { return new (t || TopMenuLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_topmenu_directive__WEBPACK_IMPORTED_MODULE_0__.TopMenuDirective)); };
    TopMenuLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TopMenuLinkDirective, selectors: [["", "appTopMenulink", ""]], hostVars: 2, hostBindings: function TopMenuLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.show);
        } }, inputs: { parent: "parent", level: "level", show: "show" } });
    return TopMenuLinkDirective;
}());



/***/ }),

/***/ 60342:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/topmenu.directive.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuDirective": function() { return /* binding */ TopMenuDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var TopMenuDirective = /** @class */ (function () {
    function TopMenuDirective() {
        this.navlinks = [];
    }
    TopMenuDirective.prototype.ngOnInit = function () {
    };
    TopMenuDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    TopMenuDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.show = false;
            }
        });
    };
    TopMenuDirective.prototype.onMouseOut = function (e) {
        this.navlinks.forEach(function (link) {
            link.show = false;
        });
    };
    TopMenuDirective.ɵfac = function TopMenuDirective_Factory(t) { return new (t || TopMenuDirective)(); };
    TopMenuDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDirective, selectors: [["", "appTopMenu", ""]], hostBindings: function TopMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TopMenuDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
        } } });
    return TopMenuDirective;
}());



/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentApplicationVersion = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
        this.currentDate = new Date();
    }
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 5, consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], ["id", "pixinventLink", "href", "#"], [1, "d-none", "d-sm-inline-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ", Her Hakk\u0131 Sakl\u0131d\u0131r.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, ctx.currentDate, "yyyy"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Juri Medya - Versiyon ", ctx.currentApplicationVersion, "");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FooterComponent;
}());



/***/ }),

/***/ 22185:
/*!*********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/horizontal-menu.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": function() { return /* binding */ HorizontalMenuComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/topmenu-dropdown.directive */ 90235);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/topmenu-link.directive */ 31793);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/topmenu-anchor-toggle.directive */ 91354);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









var _c0 = function (a0) { return [a0]; };
function HorizontalMenuComponent_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "dropdown-toggle dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r10.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.path), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("href", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
} }
var _c1 = function () { return { exact: true }; };
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template, 4, 8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 4, 8, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r19 = ctx.$implicit;
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4).$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("level", ctx_r18.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !menuSubsubItem_r19.isExternalLink)("ngIfElse", _r21);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template, 4, 6, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", menuSubItem_r10.submenu);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template, 5, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template, 5, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template, 5, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = ctx.$implicit;
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("level", ctx_r9.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActive", menuSubItem_r10.submenu.length != 0 ? "active" : "active")("ngClass", menuSubItem_r10.class === "dropdown-item" ? "" : "has-sub dropdown dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-menu", menuSubItem_r10.class === "dropdown-item" ? "" : "dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length === 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0);
} }
function HorizontalMenuComponent_li_3_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_Template, 5, 9, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", menuItem_r1.submenu);
} }
function HorizontalMenuComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_a_1_Template, 5, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_a_2_Template, 5, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_a_3_Template, 5, 9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("level", ctx_r0.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActive", menuItem_r1.submenu.length != 0 ? "active" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-menu", menuItem_r1.class === "dropdown nav-item" ? "dropdown" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length === 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0);
} }
var _c2 = function (a0, a1) { return { "navbar-sticky": a0, "navbar-fixed": a1 }; };
var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(layoutService, configService, cdr, router) {
        this.layoutService = layoutService;
        this.configService = configService;
        this.cdr = cdr;
        this.router = router;
        this.config = {};
        this.level = 0;
        this.transparentBGClass = "";
        this.menuPosition = 'Side';
        this.kullanicimenusu = localStorage.getItem('kullanicimenusu');
        this.config = this.configService.templateConf;
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        // this.menuItems = HROUTES;
        this.menuItems = JSON.parse(this.kullanicimenusu);
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    HorizontalMenuComponent.prototype.loadLayout = function () {
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        if (this.config.layout.variant === "Transparent") {
            this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
        }
        else {
            this.transparentBGClass = "";
        }
    };
    HorizontalMenuComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) { return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
    HorizontalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HorizontalMenuComponent, selectors: [["app-horizontal-menu"]], decls: 4, vars: 8, consts: [["role", "navigation", "data-menu", "menu-wrapper", "data-nav", "brand-center", 3, "ngClass"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content", "center-layout"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav"], ["appTopMenulink", "", "class", "dropdown nav-item has-sub", 3, "parent", "level", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 1, "dropdown", "nav-item", "has-sub", 3, "parent", "level", "routerLinkActive", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "dropdown-toggle nav-link d-flex align-items-center", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "href", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "dropdown-menu", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [3, "ngClass"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "routerLink"], ["target", "_blank", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "href"], ["appTopMenuDropdown", "", 1, "dropdown-menu"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass"], ["appTopMenuAnchorToggle", "", 3, "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass", 4, "ngIf"], [3, "href", "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "ngClass"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass"], [3, "href", "ngClass"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink"], [1, ""], ["data-toggle", "dropdown", "target", "_blank", 3, "ngClass", "href"]], template: function HorizontalMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_Template, 5, 10, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-shadow menu-border navbar-brand-center  ", ctx.transparentBGClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c2, ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__.TopMenuDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_3__.TopMenuLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_4__.TopMenuAnchorToggleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ 7015:
/*!********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/navigation-routes.config.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HROUTES": function() { return /* binding */ HROUTES; }
/* harmony export */ });
var HROUTES = [
    {
        path: '', title: 'Göstergeler', icon: 'ft-home', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/dashboard/dashboard1', title: 'Yönetici Dashboard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Satınalma Dashboard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Satış Dashboard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Üretim Dashboard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Üretim Planlama Dashboard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Apps', icon: 'ft-box', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/inbox', title: 'Email', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/chat', title: 'Chat', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/taskboard', title: 'Task Board', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/calendar', title: 'Calendar', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/uikit/grids', title: 'Grid', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/typography', title: 'Typography', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/helperclasses', title: 'Helper Classes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/textutilities', title: 'Text Utilities', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/colorpalettes', title: 'Color Palette', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Icons', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/uikit/feather', title: 'Feather Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Components', icon: 'ft-briefcase', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Cards', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/cards/basic', title: 'Basic Cards', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/cards/advanced', title: 'Advanced Cards', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Bootstrap', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/components/buttons', title: 'Buttons', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/lists', title: 'List', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/navs', title: 'Navs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Extra', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/nouislider', title: 'NoUI Slider', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag and Drop', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/cropper', title: 'Image Cropper', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/avatar', title: 'Avatar', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/swiper', title: 'Swiper', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            }
        ]
    },
    {
        path: '', title: 'Forms', icon: 'ft-edit', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/radio', title: 'Radio', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/checkbox', title: 'Checkbox', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/switch', title: 'Switch', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/select', title: 'Select', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/editor', title: 'Editor', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/tags', title: 'Input Tags', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/datepicker', title: 'Datepicker', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/timepicker', title: 'Timepicker', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/forms/layout', title: 'Layouts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/forms/validation', title: 'Validation', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/forms/archwizard', title: 'Wizard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Tables', icon: 'ft-grid', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Bootstrap Tables', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/tables/basic', title: 'Basic', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/tables/extended', title: 'Extended', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/tables/angular', title: 'Angular', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '/datatables', title: 'DataTables', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Charts & Maps', icon: 'ft-bar-chart-2', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Charts', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/charts/chartjs', title: 'ChartJs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/chartist', title: 'Chartist', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/apex', title: 'Apex', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/ngx', title: 'NGX', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                ]
            },
            {
                path: '', title: 'Maps', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/maps/google', title: 'Google Map', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            }
        ]
    },
    {
        path: '', title: 'Pages', icon: 'ft-file-text', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Authentication', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/pages/forgotpassword', title: 'Forgot Password', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/login', title: 'Login', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/register', title: 'Register', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/lockscreen', title: 'Lock Screen', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Vertical Timeline', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/pages/timeline-vertical-center', title: 'Center', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-left', title: 'Left', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-right', title: 'Right', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/pages/users-list', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-view', title: 'View', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-edit', title: 'Edit', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/pages/account-settings', title: 'Account Settings', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/profile', title: 'User Profile', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/invoice', title: 'Invoice', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/error', title: 'Error', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/comingsoon', title: 'Coming Soon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/maintenance', title: 'Maintenance', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/gallery', title: 'Gallery', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/search', title: 'Search', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/faq', title: 'FAQ', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/kb', title: 'Knowledge Base', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    }
];


/***/ }),

/***/ 54696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-device-detector */ 61946);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-click-outside */ 11946);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/toggle-fullscreen.directive */ 53418);
/* harmony import */ var _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/autocomplete/autocomplete.directive */ 86780);
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/autocomplete/autocomplete.component */ 7575);
/* harmony import */ var _components_autocomplete_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/autocomplete/autocomplete-content.directive */ 64609);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _components_autocomplete_option_option_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/autocomplete/option/option.component */ 17606);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/filter.pipe */ 68738);





















var _c0 = ["search"];
var _c1 = ["searchResults"];
function NavbarComponent_ng_template_27_ng_container_0_app_option_1_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-option", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_ng_template_27_ng_container_0_app_option_1_Template_app_option_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); var option_r9 = restoredCtx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r11.redirectTo(option_r9.url); })("mouseenter", function NavbarComponent_ng_template_27_ng_container_0_app_option_1_Template_app_option_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r13.removeActiveClass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("url", option_r9.url)("value", option_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMapInterpolate1"]("", option_r9.icon, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r9.name);
} }
function NavbarComponent_ng_template_27_ng_container_0_app_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_27_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, NavbarComponent_ng_template_27_ng_container_0_app_option_1_Template, 7, 6, "app-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NavbarComponent_ng_template_27_ng_container_0_app_option_2_Template, 2, 0, "app-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var result_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", result_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !result_r6.length);
} }
function NavbarComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, NavbarComponent_ng_template_27_ng_container_0_Template, 3, 2, "ng-container", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "filter");
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 1, ctx_r2.listItems, ctx_r2.control.value));
} }
function NavbarComponent_a_33_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Asal Yapi");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
var _c2 = function () { return ["/dashboard/dashboard1"]; };
function NavbarComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, NavbarComponent_a_33_span_3_Template, 2, 0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r3.mobillogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r3.config == null ? null : ctx_r3.config.layout.menuPosition) === "Side");
} }
function NavbarComponent_a_52_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_a_52_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); var item_r15 = restoredCtx.$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r16.redirectToChat(item_r15.gonderen, item_r15.index_mesajlarim); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "h6", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "small", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "h6", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", item_r15.kullaniciresim, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r15.adi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", item_r15.gecendakika, " dk \u00F6nce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", item_r15.okunmamismesaj, " okunmam\u0131\u015F mesaj");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r15.mesaj, " ");
} }
var _c3 = function (a0, a1, a2, a3) { return { "navbar-brand-center": a0, "navbar-static": a1, "navbar-sticky": a2, "fixed-top": a3 }; };
var _c4 = function () { return ["/dashboard/dashboard2"]; };
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(deviceService, translate, layoutService, router, location, configService, cdr, http) {
        var _this = this;
        this.deviceService = deviceService;
        this.translate = translate;
        this.layoutService = layoutService;
        this.router = router;
        this.location = location;
        this.configService = configService;
        this.cdr = cdr;
        this.http = http;
        this.currentLang = "en";
        this.stil = "";
        this.firmaadi = "";
        this.cihazmobilmi = false;
        this.selectedLanguageText = "English";
        this.selectedLanguageFlag = "./assets/img/flags/us.png";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.logoUrl = 'assets/img/logo.png';
        this.menuPosition = 'Side';
        this.isSmallScreen = false;
        this.searchOpenClass = "";
        this.transparentBGClass = "";
        this.hideSidebar = true;
        this.avatar = "";
        this.gercekadi = "";
        this.unvani = "";
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.seachTextEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.listItems = [];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl();
        this.config = {};
        this.userid = localStorage.getItem('userid');
        this.messagesCout = 0;
        this.cities = JSON.parse(localStorage.getItem('listMalzemeler'));
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
            _this.hideSidebar = !isShow;
        });
        this.getMessagesForUer();
    }
    NavbarComponent.prototype.refresh = function () {
        window.location.reload();
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cihazmobilmi = this.deviceService.isMobile();
        if (this.cihazmobilmi == true) {
            this.stil = 'margin-top: 50px;margin-left: 15px;';
        }
        this.firmaadi = localStorage.getItem("firmaadi");
        var datas = localStorage.getItem('url') + "angular/dataservis.php?page_id=dbtablolar&userid=" + localStorage.getItem("userid");
        this.http.get(datas).subscribe(function (data) {
            _this.listItems = data;
        });
        this.gercekadi = localStorage.getItem('adi');
        this.unvani = localStorage.getItem('unvani');
        this.avatar = localStorage.getItem('profilresim');
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.onResize = function (event) {
        this.innerWidth = event.target.innerWidth;
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        //localStorage.clear();
        //sessionStorage.clear();
        localStorage.setItem('userid', null);
        localStorage.setItem('username', null);
        localStorage.setItem('adi', null);
        localStorage.setItem('resim', null);
        localStorage.setItem('unvani', null);
        localStorage.setItem('dashboard', null);
        localStorage.setItem('ismerkezi', null);
        localStorage.setItem('isistasyno', null);
        localStorage.setItem('eposta', null);
        localStorage.setItem('telefon', null);
        localStorage.setItem('profilresim', null);
        localStorage.setItem('dashboard', null);
        localStorage.setItem('logourl', null);
        localStorage.setItem('mobillogourl', null);
        localStorage.setItem('firmaadi', null);
        localStorage.setItem('logintoken', null);
        this.router.navigate(["/pages/login"]);
    };
    NavbarComponent.prototype.loadLayout = function () {
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        if (this.config.layout.variant === "Light") {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
        if (localStorage.getItem('logourl') != '') {
            this.logoUrl = localStorage.getItem('logourl');
        }
        if (localStorage.getItem('mobillogourl') != '') {
            this.logoUrl = localStorage.getItem('mobillogourl');
        }
        if (this.config.layout.variant === "Transparent") {
            this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
        }
        else {
            this.transparentBGClass = "";
        }
    };
    NavbarComponent.prototype.onSearchKey = function (event) {
        if (this.searchResults && this.searchResults.length > 0) {
            this.searchResults.first.host.nativeElement.classList.add('first-active-item');
        }
        if (event.target.value === "") {
            this.seachTextEmpty.emit(true);
        }
        else {
            this.seachTextEmpty.emit(false);
        }
    };
    NavbarComponent.prototype.removeActiveClass = function () {
        if (this.searchResults && this.searchResults.length > 0) {
            this.searchResults.first.host.nativeElement.classList.remove('first-active-item');
        }
    };
    NavbarComponent.prototype.onEscEvent = function () {
        this.control.setValue("");
        this.searchOpenClass = '';
        this.seachTextEmpty.emit(true);
    };
    NavbarComponent.prototype.onEnter = function () {
        if (this.searchResults && this.searchResults.length > 0) {
            var url = this.searchResults.first.url;
            if (url && url != '') {
                this.control.setValue("");
                this.searchOpenClass = '';
                this.router.navigate([url]);
                this.seachTextEmpty.emit(true);
            }
        }
    };
    NavbarComponent.prototype.back = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    NavbarComponent.prototype.redirectTo = function (value) {
        this.router.navigate([value]);
        this.seachTextEmpty.emit(true);
    };
    NavbarComponent.prototype.redirectToChat = function (id, indexM) {
        var _this = this;
        this.url = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_okunducevir&recordid=" + indexM;
        this.http.get(this.url).subscribe(function (data) { });
        this.uri = "/chat/" + id;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([_this.uri]);
        });
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
        if (language === 'en') {
            this.selectedLanguageText = "English";
            this.selectedLanguageFlag = "./assets/img/flags/us.png";
        }
        else if (language === 'es') {
            this.selectedLanguageText = "Spanish";
            this.selectedLanguageFlag = "./assets/img/flags/es.png";
        }
        else if (language === 'pt') {
            this.selectedLanguageText = "Portuguese";
            this.selectedLanguageFlag = "./assets/img/flags/pt.png";
        }
        else if (language === 'de') {
            this.selectedLanguageText = "German";
            this.selectedLanguageFlag = "./assets/img/flags/de.png";
        }
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    };
    NavbarComponent.prototype.toggleSearchOpenClass = function (display) {
        var _this = this;
        this.control.setValue("");
        if (display) {
            this.searchOpenClass = 'open';
            setTimeout(function () {
                _this.searchElement.nativeElement.focus();
            }, 0);
        }
        else {
            this.searchOpenClass = '';
        }
        this.seachTextEmpty.emit(true);
    };
    NavbarComponent.prototype.setMessagesRead = function () {
        this.url = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_tumunuokunduyap&userid=" + this.userid;
        this.http.get(this.url).subscribe(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: 'top-end',
                icon: 'success',
                title: '<h6>Bütün mesajlarınız okundu olarak işaretlendi</h6>',
                showConfirmButton: false,
                timer: 1500
            });
        });
    };
    NavbarComponent.prototype.malzemelereGit = function () {
        this.router.navigate(['editrecordform/' + this.selectedMalz.index_malzemeler + '/254/Mamul Kartları'])
            .then(function () {
            window.location.reload();
        });
    };
    NavbarComponent.prototype.getMessagesForUer = function () {
        var _this = this;
        this.url = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_gelenmesajlarimicek&userid=" + this.userid;
        this.http.get(this.url).subscribe(function (data) {
            _this.usersMessages = data;
            _this.messagesCout = data.length;
            console.log(data);
        });
        console.log(this.messagesCout);
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.toggleNotificationSidebar(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    };
    NavbarComponent.prototype.istakipGit = function () {
        this.router.navigate(['/taskboard']);
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient)); };
    NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.searchResults = _t);
        } }, hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
        } }, outputs: { toggleHideSidebar: "toggleHideSidebar", seachTextEmpty: "seachTextEmpty" }, decls: 99, vars: 28, consts: [[3, "ngClass"], [1, "container-fluid", "navbar-wrapper"], [1, "navbar-header", "d-flex"], ["data-toggle", "collapse", 1, "navbar-toggle", "menu-toggle", "d-xl-none", "d-block", "float-left", "align-items-center", "justify-content-center", 3, "click"], [1, "ft-menu", "font-medium-3"], [1, "navbar-nav", 3, "clickOutside"], [1, "nav-item", "mr-2", "d-none", "d-lg-block"], ["id", "navbar-fullscreen", "href", "javascript:;", "appToggleFullscreen", "", 1, "nav-link", "apptogglefullscreen", 3, "click"], [1, "nav-item", "mr-2"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-1", "mb-1", 3, "routerLink"], [1, "fa", "fa-home"], ["type", "button", 1, "btn", "btn-outline-success", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-refresh"], [1, "nav-item", "nav-search"], ["id", "navbar-search", "href", "javascript:", 1, "nav-link", "nav-link-search", 3, "click"], [1, "ft-search", "font-medium-3"], [1, "search-input-icon"], ["type", "text", "placeholder", "Form Ara...", "tabindex", "0", "autofocus", "", "data-search", "template-search", 1, "input", 3, "formControl", "appAutocomplete", "keyup.enter", "keydown.esc", "keyup"], ["search", ""], [1, "search-input-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["autocomplete", "appAutocomplete"], ["appAutocompleteContent", ""], [1, "navbar-brand-center"], [1, "navbar-header"], [1, "navbar-nav"], [1, "nav-item"], [1, "logo"], ["class", "logo-text", 3, "routerLink", 4, "ngIf"], [1, "navbar-container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-block"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item"], ["id", "drp-notification", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "dropdown-notification", "p-0", "mt-2"], [1, "ft-bell", "font-medium-3"], [1, "notification", "badge", "badge-pill", "badge-danger"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "dropdown-menu", "dropdown-menu-media", "dropdown-menu-right", "m-0", "overflow-hidden"], [1, "dropdown-menu-header"], [1, "dropdown-header", "d-flex", "justify-content-between", "m-0", "px-3", "py-2", "white", "bg-primary"], [1, "d-flex"], [1, "ft-bell", "font-medium-3", "d-flex", "align-items-center", "mr-2"], [1, "noti-title"], [1, "text-bold-400", "cursor-pointer", 3, "click"], [1, "scrollable-container", 3, "perfectScrollbar"], ["class", "d-flex justify-content-between", "href", "javascript:void(0)", 3, "click", 4, "ngFor", "ngForOf"], ["routerLink", "chat", 1, "dropdown-menu-footer"], [1, "noti-footer", "text-center", "cursor-pointer", "primary", "border-top", "text-bold-400", "py-1"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1"], ["id", "dropdownBasic2", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "user-dropdown", "d-flex", "align-items-end"], [1, "user", "d-md-flex", "d-none", "mr-2"], [1, "text-right"], [1, "text-right", "text-muted", "font-small-3"], ["alt", "avatar", "height", "35", "width", "35", 1, "avatar", 3, "src"], ["aria-labelledby", "dropdownBasic2", "ngbDropdownMenu", "", 1, "dropdown-menu", "text-left", "dropdown-menu-right", "m-0", "pb-0"], ["routerLink", "/newrecordform/714/M\u00FC\u015Fteri Kay\u0131tlar\u0131", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "ft-user", "mr-2"], ["routerLink", "/musterihesapkarti", 1, "dropdown-item"], [1, "ft-briefcase", "mr-2"], ["routerLink", "/carihesapkarti", 1, "dropdown-item"], [1, "ft-book", "mr-2"], ["routerLink", "/chat", 1, "dropdown-item"], [1, "ft-message-square", "mr-2"], ["routerLink", "/pages/account-settings", 1, "dropdown-item"], [1, "ft-edit", "mr-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "ft-power", "mr-2"], [1, "nav-item", "d-none", "d-lg-block", "mr-2", "mt-1"], [1, "nav-link", "notification-sidebar-toggle", 3, "click"], [1, "ft-align-right", "font-medium-3"], [4, "ngIf"], [3, "url", "value", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "no-result", 4, "ngIf"], [3, "url", "value", "click", "mouseenter"], ["searchResults", ""], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex", "align-items-center", "justify-content-start"], [1, "no-result"], [1, "logo-text", 3, "routerLink"], [1, "logo-img"], ["alt", "Apex logo", 1, "logo-img", 3, "src"], ["class", "text", 4, "ngIf"], [1, "text"], ["href", "javascript:void(0)", 1, "d-flex", "justify-content-between", 3, "click"], [1, "media", "d-flex", "align-items-center"], [1, "media-left"], [1, "mr-3"], ["alt", "avatar", "height", "45", "width", "45", 1, "avatar", 3, "src"], [1, "media-body"], [1, "m-0"], [1, "grey", "lighten-1", "font-italic", "float-right"], [1, "noti-text"], [1, "noti-text", "font-small-3", "m-0"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.toggleSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clickOutside", function NavbarComponent_Template_ul_clickOutside_5_listener() { return ctx.toggleSearchOpenClass(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.ToggleClass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_13_listener() { return ctx.refresh(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() { return ctx.toggleSearchOpenClass(true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_21_listener() { return ctx.onEnter(); })("keydown.esc", function NavbarComponent_Template_input_keydown_esc_21_listener() { return ctx.onEscEvent(); })("keyup", function NavbarComponent_Template_input_keyup_21_listener($event) { return ctx.onSearchKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_23_listener() { return ctx.toggleSearchOpenClass(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "app-autocomplete", null, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, NavbarComponent_ng_template_27_Template, 2, 4, "ng-template", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "ul", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "li", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, NavbarComponent_a_33_Template, 4, 4, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "ul", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "li", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "ul", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "li", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "span", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_49_listener() { return ctx.setMessagesRead(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "T\u00FCm\u00FCn\u00FC Okundu Yap");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "li", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, NavbarComponent_a_52_Template, 15, 5, "a", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "li", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, " Mesajlara Git. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "li", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "a", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "img", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "a", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "i", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Yeni M\u00FC\u015Fteri");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "a", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "M\u00FC\u015Fteri \u0130\u015Flem Kartlar\u0131");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "a", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](77, "i", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Sat\u0131c\u0131 \u0130\u015Flem Kartlar\u0131");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Mesajla\u015Fma");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "a", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](87, "i", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Profil D\u00FCzenle");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](90, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "a", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_91_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](93, "i", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "\u00C7\u0131k\u0131\u015F Yap");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "li", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "a", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_97_listener() { return ctx.toggleNotificationSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](98, "i", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMapInterpolate1"]("navbar navbar-expand-lg navbar-light header-navbar ", ctx.transparentBGClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](22, _c3, ctx.menuPosition === "Top", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed", ctx.isSmallScreen && ctx.menuPosition === "Top"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMap"](ctx.stil);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMapInterpolate1"](" ", ctx.toggleClass, " font-medium-3");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](27, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMapInterpolate1"]("search-input ", ctx.searchOpenClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx.control)("appAutocomplete", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Top");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.messagesCout);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.messagesCout, " Yeni Mesaj");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.usersMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.gercekadi);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.unvani);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideDirective, _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__.ToggleFullscreenDirective, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlDirective, _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__.AutocompleteDirective, _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__.AutocompleteComponent, _components_autocomplete_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_7__.AutocompleteContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_18__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _components_autocomplete_option_option_component__WEBPACK_IMPORTED_MODULE_8__.OptionComponent], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__.FilterPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NavbarComponent;
}());



/***/ }),

/***/ 76430:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSidebarComponent": function() { return /* binding */ NotificationSidebarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);







var _c0 = function (a0, a1) { return { "ft-info primary": a0, "ft-alert-circle warning": a1 }; };
function NotificationSidebarComponent_ng_template_11_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sysData_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, sysData_r5.bildirimturu == "Bilgi", sysData_r5.bildirimturu == "Uyari"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sysData_r5.bildirimturu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", sysData_r5.olusturmatarihi, " ", sysData_r5.olusturmasaati, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sysData_r5.bildirimmetni);
} }
function NotificationSidebarComponent_ng_template_11_li_17_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_ng_template_11_li_17_Template_li_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var sysMes_r6 = restoredCtx.$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.redirectToChat(sysMes_r6.gonderen, sysMes_r6.index_mesajlarim); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sysMes_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", sysMes_r6.kullaniciresim, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sysMes_r6.adi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", sysMes_r6.olusturma_tarihi, " - ", sysMes_r6.olusturma_saati, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sysMes_r6.mesaj);
} }
function NotificationSidebarComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sistem Bildirimler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_ng_template_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.temizle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Temizle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NotificationSidebarComponent_ng_template_11_li_9_Template, 12, 8, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Mesaj Bildirimleri ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_ng_template_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.temizleX(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Temizle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NotificationSidebarComponent_ng_template_11_li_17_Template, 12, 5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.systemNoti);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.systemMess);
} }
function NotificationSidebarComponent_ng_template_15_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-alert", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_ng_template_15_li_5_Template_span_click_4_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var sysFav_r13 = restoredCtx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.redirectToForm(sysFav_r13.formurl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_ng_template_15_li_5_Template_button_click_6_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); var sysFav_r13 = restoredCtx.$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.favorilerdenCikar(sysFav_r13.index_favoriler); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Kald\u0131r");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sysFav_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sysFav_r13.formadi);
} }
function NotificationSidebarComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "S\u0131k Kullan\u0131lan Formlar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NotificationSidebarComponent_ng_template_15_li_5_Template, 8, 2, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.sysFavor);
} }
var _c1 = function (a0) { return { open: a0 }; };
var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent(router, cdr, layoutService, http) {
        var _this = this;
        this.router = router;
        this.cdr = cdr;
        this.layoutService = layoutService;
        this.http = http;
        this.isOpen = false;
        this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(function (open) {
            _this.isOpen = open;
            if (_this.isOpen == true) {
                var bildirimurl = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_islembildirimlerim&turu=son&userid=" + localStorage.getItem("userid");
                _this.http.get(bildirimurl).subscribe(function (data) {
                    _this.systemNoti = data;
                    _this.cdr.markForCheck();
                });
                var mesajurl = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_gelenmesajlarimicek&turu=son&userid=" + localStorage.getItem("userid");
                _this.http.get(mesajurl).subscribe(function (data) {
                    _this.systemMess = data;
                    _this.cdr.markForCheck();
                });
                var favourl = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_favoriler&userid=" + localStorage.getItem("userid");
                _this.http.get(favourl).subscribe(function (data) {
                    _this.sysFavor = data;
                    _this.cdr.markForCheck();
                });
            }
        });
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
    };
    NotificationSidebarComponent.prototype.redirectToChat = function (id, indexM) {
        var _this = this;
        this.uri = "/chat/" + id;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([_this.uri]);
        });
    };
    NotificationSidebarComponent.prototype.redirectToForm = function (path) {
        var _this = this;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
            return _this.router.navigate([path]);
        });
    };
    NotificationSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NotificationSidebarComponent.prototype.favorilerdenCikar = function (id) {
        var _this = this;
        var favourl = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_favorilerdencikar&indexid=" + id;
        this.http.get(favourl).subscribe(function (data) {
            if (data[0].status == 'OK') {
                var favourl = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_favoriler&userid=" + localStorage.getItem("userid");
                _this.http.get(favourl).subscribe(function (data) {
                    _this.sysFavor = data;
                    _this.cdr.markForCheck();
                });
            }
        });
    };
    NotificationSidebarComponent.prototype.temizle = function () {
        this.systemNoti = [];
        this.cdr.markForCheck();
    };
    NotificationSidebarComponent.prototype.temizleX = function () {
        this.systemMess = [];
        this.cdr.markForCheck();
    };
    NotificationSidebarComponent.prototype.onClose = function () {
        this.layoutService.toggleNotificationSidebar(false);
    };
    NotificationSidebarComponent.ɵfac = function NotificationSidebarComponent_Factory(t) { return new (t || NotificationSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
    NotificationSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationSidebarComponent, selectors: [["app-notification-sidebar"]], decls: 17, vars: 4, consts: [["id", "notification-sidebar", 1, "notification-sidebar", "d-none", "d-sm-none", "d-md-block", 3, "ngClass"], [1, "notification-sidebar-close", 3, "click"], [1, "ft-x", "font-medium-3", "grey", "darken-1"], [1, "side-nav", "notification-sidebar-content", 3, "perfectScrollbar"], [1, "row"], [1, "col-12", "notification-tab-content"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", 1, "nav-link"], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["id", "activity-tab", "role", "tabpanel", "aria-expanded", "true", "aria-labelledby", "base-tab1", 1, "row", "tab-pane"], ["id", "activity", 1, "col-12"], [1, "my-2", "text-bold-500"], [1, "btn", "btn-sm", "btn-danger", "float-right", 3, "click"], ["id", "timeline-1", 1, "timeline-left", "timeline-wrapper", "mb-3"], [1, "timeline"], [1, "timeline-line", "mt-4"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["id", "timeline-2", 1, "timeline-left", "timeline-wrapper"], ["class", "timeline-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-primary", "bg-lighten-4"], [3, "ngClass"], [1, "activity-list-text"], [1, "mb-1"], [1, "float-right", "grey", "font-italic", "font-small-2"], [1, "mt-0", "mb-2", "font-small-3"], [1, "timeline-item", 3, "click"], ["alt", "avatar", "width", "40", 1, "avatar", 3, "src"], ["id", "settings-tab", "aria-labelledby", "base-tab2", 1, "row", "tab-pane"], ["id", "settings", 1, "col-12"], [1, "mt-2", "mb-3"], [1, "list-unstyled", "mb-0", "mx-2"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], ["type", "success", 1, "mb-2", 3, "dismissible"], [1, "alert-icon-right"], [1, "ft-heart", "mr-2"], [2, "cursor", "pointer", 3, "click"], [1, "btn", "btn-sm", "btn-warning", 3, "click"]], template: function NotificationSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationSidebarComponent_Template_a_click_1_listener() { return ctx.onClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aktiviteler");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NotificationSidebarComponent_ng_template_11_Template, 18, 2, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "S\u0131k Kullan\u0131nlar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NotificationSidebarComponent_ng_template_15_Template, 6, 1, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx.isOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ 68738:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": function() { return /* binding */ FilterPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return null;
        }
        return items.filter(function (item) {
            return item[labelKey || 'name']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        }).slice(0, 10);
    };
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
    return FilterPipe;
}());



/***/ }),

/***/ 67361:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipeModule": function() { return /* binding */ PipeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.pipe */ 68738);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.pipe */ 96903);
/* harmony import */ var _short_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./short-name.pipe */ 93100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule.ɵfac = function PipeModule_Factory(t) { return new (t || PipeModule)(); };
    PipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PipeModule });
    PipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]] });
    return PipeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_2__.ShortNamePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe, _short_name_pipe__WEBPACK_IMPORTED_MODULE_2__.ShortNamePipe] }); })();


/***/ }),

/***/ 96903:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": function() { return /* binding */ SearchPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
    SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
    return SearchPipe;
}());



/***/ }),

/***/ 93100:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/short-name.pipe.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortNamePipe": function() { return /* binding */ ShortNamePipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var ShortNamePipe = /** @class */ (function () {
    function ShortNamePipe() {
    }
    ShortNamePipe.prototype.transform = function (fullName) {
        return fullName
            .split(' ')
            .map(function (n) { return n[0]; })
            .join('');
    };
    ShortNamePipe.ɵfac = function ShortNamePipe_Factory(t) { return new (t || ShortNamePipe)(); };
    ShortNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortName", type: ShortNamePipe, pure: true });
    return ShortNamePipe;
}());



/***/ }),

/***/ 63650:
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTENT_ROUTES": function() { return /* binding */ CONTENT_ROUTES; }
/* harmony export */ });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_pages_content-pages_content-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/content-pages/content-pages.module */ 92321)).then(function (m) { return m.ContentPagesModule; }); }
    }
];


/***/ }),

/***/ 90578:
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Full_ROUTES": function() { return /* binding */ Full_ROUTES; }
/* harmony export */ });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-src_app_shared_data-a4a7e4"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../dashboard/dashboard.module */ 34814)).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_calendar_calendar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../calendar/calendar.module */ 979)).then(function (m) { return m.CalendarsModule; }); }
    },
    {
        path: 'polivalans',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("src_app_polivalans_polivalans_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../polivalans/polivalans.module */ 50626)).then(function (m) { return m.polivalansModule; }); }
    },
    {
        path: 'design/:id',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("src_app_design_design_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../design/design.module */ 33269)).then(function (m) { return m.DesignModule; }); }
    },
    {
        path: 'newrecordrow_proses',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_editrecordrow_editrecordrow_component_ts"), __webpack_require__.e("default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts"), __webpack_require__.e("src_app_newrecordrow_proses_newrecordrow_proses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../newrecordrow_proses/newrecordrow_proses.module */ 15803)).then(function (m) { return m.NewrecordrowProsesModule; }); }
    },
    {
        path: 'charts',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("default-node_modules_swimlane_ngx-charts___ivy_ngcc___fesm2015_swimlane-ngx-charts_js"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-src_app_shared_data-a4a7e4"), __webpack_require__.e("src_app_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../charts/charts.module */ 55108)).then(function (m) { return m.ChartsNg2Module; }); }
    },
    {
        path: 'forms',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-quill___ivy_ngcc___fesm2015_ngx-quill_js"), __webpack_require__.e("src_app_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../forms/forms.module */ 71366)).then(function (m) { return m.FormModule; }); }
    },
    {
        path: 'maps',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../maps/maps.module */ 83842)).then(function (m) { return m.MapsModule; }); }
    },
    {
        path: 'tables',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_tables_tables_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../tables/tables.module */ 81439)).then(function (m) { return m.TablesModule; }); }
    },
    {
        path: 'listings/:id',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-src_app_uretimplanlama_upk_module_ts"), __webpack_require__.e("src_app_listings_listings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../listings/listings.module */ 17368)).then(function (m) { return m.DataTablesModule; }); }
    },
    {
        path: 'uikit',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_directives_match-height_directive_ts-src_app_shared_services_highlight-929d33"), __webpack_require__.e("src_app_ui-kit_ui-kit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../ui-kit/ui-kit.module */ 92750)).then(function (m) { return m.UIKitModule; }); }
    },
    {
        path: 'components',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-node_modules_ngx-swiper-wrapper___ivy_ngcc___fesm2015_ngx-swiper-wrapper_js"), __webpack_require__.e("default-src_app_shared_directives_match-height_directive_ts-src_app_shared_services_highlight-929d33"), __webpack_require__.e("src_app_components_ui-components_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/ui-components.module */ 88936)).then(function (m) { return m.UIComponentsModule; }); }
    },
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-node_modules_ngx-swiper-wrapper___ivy_ngcc___fesm2015_ngx-swiper-wrapper_js"), __webpack_require__.e("default-node_modules_ng-chartist___ivy_ngcc___fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_pages_full-pages_full-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/full-pages/full-pages.module */ 97395)).then(function (m) { return m.FullPagesModule; }); }
    },
    {
        path: 'cards',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-charts___ivy_ngcc___fesm2015_swimlane-ngx-charts_js"), __webpack_require__.e("src_app_cards_cards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../cards/cards.module */ 68016)).then(function (m) { return m.CardsModule; }); }
    },
    {
        path: 'chat',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/chat.module */ 20818)).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'chat/:id',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat/chat.module */ 20818)).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'newrecordform/:token',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("default-src_app_editrecordrow_editrecordrow_component_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts"), __webpack_require__.e("src_app_newrecordform_newrecordform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../newrecordform/newrecordform.module */ 58061)).then(function (m) { return m.NewrecordformModule; }); }
    },
    {
        path: 'newrecordform/:formid/:formtanimi',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("default-src_app_editrecordrow_editrecordrow_component_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts"), __webpack_require__.e("src_app_newrecordform_newrecordform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../newrecordform/newrecordform.module */ 58061)).then(function (m) { return m.NewrecordformModule; }); }
    },
    {
        path: 'editrecordform',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-node_modules_ngx-swiper-wrapper___ivy_ngcc___fesm2015_ngx-swiper-wrapper_js"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("default-src_app_editrecordrow_editrecordrow_component_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts"), __webpack_require__.e("src_app_editrecordform_editrecordform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../editrecordform/editrecordform.module */ 70204)).then(function (m) { return m.EditrecordformModule; }); }
    },
    {
        path: 'editrecordform/:recordid/:formid/:formtanimi',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-node_modules_ngx-swiper-wrapper___ivy_ngcc___fesm2015_ngx-swiper-wrapper_js"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("default-src_app_editrecordrow_editrecordrow_component_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts"), __webpack_require__.e("src_app_editrecordform_editrecordform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../editrecordform/editrecordform.module */ 70204)).then(function (m) { return m.EditrecordformModule; }); }
    },
    {
        path: 'editrecordrow',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_editrecordrow_editrecordrow_component_ts"), __webpack_require__.e("src_app_editrecordrow_editrecordrow_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../editrecordrow/editrecordrow.module */ 69310)).then(function (m) { return m.EditrecordrowModule; }); }
    },
    {
        path: 'newrecordrow',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("src_app_newrecordrow_newrecordrow_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../newrecordrow/newrecordrow.module */ 36781)).then(function (m) { return m.NewrecordrowModule; }); }
    },
    {
        path: 'newrecordform',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("default-src_app_editrecordrow_editrecordrow_component_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts"), __webpack_require__.e("src_app_newrecordform_newrecordform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../newrecordform/newrecordform.module */ 58061)).then(function (m) { return m.NewrecordformModule; }); }
    },
    {
        path: 'isgucuboard',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("src_app_isgucuboard_isgucuboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../isgucuboard/isgucuboard.module */ 10173)).then(function (m) { return m.IsGucuBoardModule; }); }
    },
    {
        path: 'chat-ngrx',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_chat-ngrx_chat-ngrx_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../chat-ngrx/chat-ngrx.module */ 37491)).then(function (m) { return m.ChatNGRXModule; }); }
    },
    {
        path: 'tedaviplanlama',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-node_modules_ngx-swiper-wrapper___ivy_ngcc___fesm2015_ngx-swiper-wrapper_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_tedaviplanlama_tedaviplanlama_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../tedaviplanlama/tedaviplanlama.module */ 51071)).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'carihesapkarti',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-node_modules_ngx-swiper-wrapper___ivy_ngcc___fesm2015_ngx-swiper-wrapper_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_carihesapkarti_carihesapkarti_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../carihesapkarti/carihesapkarti.module */ 15250)).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'musterihesapkarti',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-node_modules_ngx-swiper-wrapper___ivy_ngcc___fesm2015_ngx-swiper-wrapper_js"), __webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_musterihesapkarti_musterihesapkarti_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../musterihesapkarti/musterihesapkarti.module */ 34360)).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'inbox',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-quill___ivy_ngcc___fesm2015_ngx-quill_js"), __webpack_require__.e("src_app_inbox_inbox_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../inbox/inbox.module */ 9562)).then(function (m) { return m.InboxModule; }); }
    },
    {
        path: 'taskboard',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_taskboard_taskboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../taskboard/taskboard.module */ 94402)).then(function (m) { return m.TaskboardModule; }); }
    },
    {
        path: 'app-upk',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_uretimplanlama_upk_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../uretimplanlama/upk.module */ 39103)).then(function (m) { return m.UPKModule; }); }
    },
    {
        path: 'barcodeform',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("src_app_barcodeform_barcodeform_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../barcodeform/barcodeform.module */ 65426)).then(function (m) { return m.BarcodeFormModule; }); }
    },
    {
        path: 'taskboard-ngrx',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_taskboard-ngrx_taskboard-ngrx_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../taskboard-ngrx/taskboard-ngrx.module */ 89093)).then(function (m) { return m.TaskboardNGRXModule; }); }
    },
    {
        path: 'listings/:id/:filter',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("default-src_app_newrecordrow_newrecordrow_component_ts"), __webpack_require__.e("default-src_app_barcodeform_barcodeform_component_ts"), __webpack_require__.e("default-node_modules_file-saver_dist_FileSaver_min_js-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-src_app_uretimplanlama_upk_module_ts"), __webpack_require__.e("src_app_listings_listings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../listings/listings.module */ 17368)).then(function (m) { return m.DataTablesModule; }); }
    },
    {
        path: 'ganttchart',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_data_sweet-alerts_ts"), __webpack_require__.e("src_app_ganttchart_ganttchart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../ganttchart/ganttchart.module */ 41754)).then(function (m) { return m.ganttchartModule; }); }
    }
];


/***/ }),

/***/ 36955:
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": function() { return /* binding */ ConfigService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.templateConf = this.setConfigValue();
        this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.templateConf);
        this.templateConf$ = this.templateConfSubject.asObservable();
    }
    // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options
    ConfigService.prototype.setConfigValue = function () {
        return this.templateConf = {
            layout: {
                variant: "Light",
                menuPosition: "Side",
                customizer: {
                    hidden: true
                },
                navbar: {
                    type: 'Static'
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-lg",
                    backgroundColor: "white",
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
                }
            }
        };
    };
    // Default configurations for Dark layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Dark",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "black",
    //         backgroundImage: true,
    //         backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
    //       }
    //     }
    //   };
    // }
    // Default configurations for Transparent layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   return this.templateConf = {
    //     layout: {
    //       variant: "Transparent",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "bg-glass-1",
    //         backgroundImage: true,
    //         backgroundImageURL: ""
    //       }
    //     }
    //   };
    // }
    ConfigService.prototype.applyTemplateConfigChange = function (tempConfig) {
        this.templateConf = Object.assign(this.templateConf, tempConfig);
        this.templateConfSubject.next(this.templateConf);
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
    ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });
    return ConfigService;
}());



/***/ }),

/***/ 60360:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerService": function() { return /* binding */ CustomizerService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 36955);



var CustomizerService = /** @class */ (function () {
    function CustomizerService(config) {
        this.config = config;
        // sidebar BG colors for Light & Dark Layout
        this.light_dark_colors = [
            {
                code: "mint",
                class: "gradient-mint",
                active: false,
                type: 'gradient'
            },
            {
                code: "king-yna",
                class: "gradient-king-yna",
                active: false,
                type: 'gradient'
            },
            {
                code: "ibiza-sunset",
                class: "gradient-ibiza-sunset",
                active: false,
                type: 'gradient'
            },
            {
                code: "flickr",
                class: "gradient-flickr",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-bliss",
                class: "gradient-purple-bliss",
                active: false,
                type: 'gradient'
            },
            {
                code: "man-of-steel",
                class: "gradient-man-of-steel",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-love",
                class: "gradient-purple-love",
                active: false,
                type: 'gradient'
            },
            {
                code: "black",
                class: "bg-black",
                active: false,
                type: 'solid'
            },
            {
                code: "white",
                class: "bg-grey",
                active: false,
                type: 'solid'
            },
            {
                code: "primary",
                class: "bg-primary",
                active: false,
                type: 'solid'
            },
            {
                code: "success",
                class: "bg-success",
                active: false,
                type: 'solid'
            },
            {
                code: "warning",
                class: "bg-warning",
                active: false,
                type: 'solid'
            },
            {
                code: "info",
                class: "bg-info",
                active: false,
                type: 'solid'
            },
            {
                code: "danger",
                class: "bg-danger",
                active: false,
                type: 'solid'
            }
        ];
        // sidebar BG colors for Transparent Layout
        this.transparent_colors = [
            {
                class: "bg-glass-hibiscus",
                active: false
            },
            {
                class: "bg-glass-purple-pizzazz",
                active: false
            },
            {
                class: "bg-glass-blue-lagoon",
                active: false
            },
            {
                class: "bg-glass-electric-violet",
                active: false
            },
            {
                class: "bg-glass-portage",
                active: false
            },
            {
                class: "bg-glass-tundora",
                active: false
            }
        ];
        // sidebar BG images for Light & Dark Layout
        this.light_dark_bg_images = [
            {
                src: "assets/img/sidebar-bg/01.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/02.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/03.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/04.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/05.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/06.jpg",
                active: false
            },
        ];
        // Background Colors with Shades for Transparent Layout
        this.transparent_colors_with_shade = [
            {
                class: "bg-glass-1",
                active: false
            },
            {
                class: "bg-glass-2",
                active: false
            },
            {
                class: "bg-glass-3",
                active: false
            },
            {
                class: "bg-glass-4",
                active: false
            },
        ];
        this.lightDarkLayoutGradientBGColors = [];
        this.lightDarkLayoutSolidBGColors = [];
        this.transparentLayoutBGColors = [];
        this.transparentLayoutBGColorsWithShades = [];
        this.lightDarkLayoutBGImages = [];
        this.getData();
    }
    CustomizerService.prototype.getData = function () {
        this.lightDarkLayoutGradientBGColors = this.getlightDarkLayoutGradientBGColors();
        this.lightDarkLayoutSolidBGColors = this.getlightDarkLayoutSolidBGColors();
        this.transparentLayoutBGColors = this.getTransparentLayoutBGColors();
        this.transparentLayoutBGColorsWithShades = this.GetTransparentLayoutBGColorsWithShades();
        this.lightDarkLayoutBGImages = this.getLightDarkLayoutBGImages();
    };
    CustomizerService.prototype.getlightDarkLayoutGradientBGColors = function () {
        var _this = this;
        return this.light_dark_colors.filter(function (_) { return _.type === 'gradient'; })
            .map(function (color) {
            color.active = (color.code === _this.config.templateConf.layout.sidebar.backgroundColor);
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, color);
        });
    };
    CustomizerService.prototype.getlightDarkLayoutSolidBGColors = function () {
        var _this = this;
        return this.light_dark_colors.filter(function (_) { return _.type === 'solid'; })
            .map(function (color) {
            color.active = (color.code === _this.config.templateConf.layout.sidebar.backgroundColor);
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, color);
        });
    };
    CustomizerService.prototype.getTransparentLayoutBGColors = function () {
        var _this = this;
        return this.transparent_colors
            .map(function (color) {
            color.active = (color.class === _this.config.templateConf.layout.sidebar.backgroundColor);
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, color);
        });
    };
    CustomizerService.prototype.GetTransparentLayoutBGColorsWithShades = function () {
        var _this = this;
        return this.transparent_colors_with_shade
            .map(function (color) {
            color.active = (color.class === _this.config.templateConf.layout.sidebar.backgroundColor);
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, color);
        });
    };
    CustomizerService.prototype.getLightDarkLayoutBGImages = function () {
        var _this = this;
        return this.light_dark_bg_images
            .map(function (image) {
            image.active = (image.src === _this.config.templateConf.layout.sidebar.backgroundImageURL);
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, image);
        });
    };
    //called when click to change on any Gradient/Solid color for Light & Dark layout in customizer
    CustomizerService.prototype.changeSidebarBGColor = function (color) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.code;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    //called when click to change on any Transparent color for Transparent layout in customizer
    CustomizerService.prototype.changeSidebarTransparentBGColor = function (color) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.class;
        conf.layout.sidebar.backgroundImage = false;
        conf.layout.sidebar.backgroundImageURL = '';
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    //called when click to change on any image for Light & Dark layout in customizer
    CustomizerService.prototype.changeSidebarBgImage = function (image) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundImageURL = image.src;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    CustomizerService.prototype.bgImageDisplay = function (e) {
        var conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.backgroundImage = true;
        }
        else {
            conf.layout.sidebar.backgroundImage = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.toggleCompactMenu = function (e) {
        var conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.collapsed = true;
        }
        else {
            conf.layout.sidebar.collapsed = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.changeSidebarWidth = function (value) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.size = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.toggleNavbarType = function (value) {
        var conf = this.config.templateConf;
        conf.layout.navbar.type = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    // position: "Side" for vertical menu and position: "Top" for horizontal menu
    CustomizerService.prototype.toggleMenuPosition = function (position) {
        var conf = this.config.templateConf;
        conf.layout.menuPosition = position;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.switchLayout = function (layout, isBgImageDisplay) {
        var conf = this.config.templateConf;
        if (layout.toLowerCase() === 'light') {
            conf.layout.variant = 'Light';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[0].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[5].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'dark') {
            conf.layout.variant = 'Dark';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[2].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[7].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'transparent') {
            conf.layout.variant = 'Transparent';
            conf.layout.sidebar.backgroundImageURL = "";
            conf.layout.sidebar.backgroundColor = this.transparent_colors_with_shade[0].class;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    CustomizerService.ɵfac = function CustomizerService_Factory(t) { return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
    CustomizerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomizerService, factory: CustomizerService.ɵfac, providedIn: "root" });
    return CustomizerService;
}());



/***/ }),

/***/ 85682:
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutService": function() { return /* binding */ LayoutService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject(); // small screen
        this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.toggleNotiSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        // Observable
        this.toggleSidebar$ = this.toggleSidebar.asObservable();
        this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
        this.toggleNotiSidebar$ = this.toggleNotiSidebar.asObservable();
    }
    LayoutService.prototype.toggleSidebarSmallScreen = function (toggle) {
        this.toggleSidebar.next(toggle);
    };
    LayoutService.prototype.overlaySidebartoggle = function (toggle) {
        this.overlaySidebarToggle.next(toggle);
    };
    LayoutService.prototype.toggleNotificationSidebar = function (toggle) {
        this.toggleNotiSidebar.next(toggle);
    };
    LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
    LayoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
    return LayoutService;
}());



/***/ }),

/***/ 60294:
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW": function() { return /* binding */ WINDOW; },
/* harmony export */   "WindowRef": function() { return /* binding */ WindowRef; },
/* harmony export */   "BrowserWindowRef": function() { return /* binding */ BrowserWindowRef; },
/* harmony export */   "windowFactory": function() { return /* binding */ windowFactory; },
/* harmony export */   "browserWindowProvider": function() { return /* binding */ browserWindowProvider; },
/* harmony export */   "windowProvider": function() { return /* binding */ windowProvider; },
/* harmony export */   "WINDOW_PROVIDERS": function() { return /* binding */ WINDOW_PROVIDERS; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);




/* Create a new injection token for injecting the window into a component. */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: false,
        configurable: true
    });
    return WindowRef;
}());

/* Define class that implements the abstract class and returns the native window object. */
var BrowserWindowRef = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: false,
        configurable: true
    });
    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) { return new (t || BrowserWindowRef)(); };
    BrowserWindowRef.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserWindowRef, factory: BrowserWindowRef.ɵfac });
    return BrowserWindowRef;
}(WindowRef));

/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
};
/* Create an array of providers. */
var WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 11946);
/* harmony import */ var _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.module */ 10322);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 45227);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ 54696);
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horizontal-menu/horizontal-menu.component */ 22185);
/* harmony import */ var _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertical-menu/vertical-menu.component */ 82329);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customizer/customizer.component */ 93495);
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ 76430);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ 53418);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/sidebar-dropdown.directive */ 83273);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/sidebar-anchor-toggle.directive */ 48327);
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/sidebar.directive */ 57744);
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/topmenu.directive */ 60342);
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/topmenu-link.directive */ 31793);
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/topmenu-dropdown.directive */ 90235);
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/topmenu-anchor-toggle.directive */ 91354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);










//COMPONENTS







//DIRECTIVES










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule,
                ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
                _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule
            ], _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_6__.VerticalMenuComponent,
        _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuComponent,
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__.CustomizerComponent,
        _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.NotificationSidebarComponent,
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__.ToggleFullscreenDirective,
        _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_10__.SidebarLinkDirective,
        _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__.SidebarDropdownDirective,
        _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_12__.SidebarAnchorToggleDirective,
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarDirective,
        _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_15__.TopMenuLinkDirective,
        _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_16__.TopMenuDropdownDirective,
        _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_17__.TopMenuAnchorToggleDirective,
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__.TopMenuDirective], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__.NgSelectModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_26__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_6__.VerticalMenuComponent,
        _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_5__.HorizontalMenuComponent,
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_7__.CustomizerComponent,
        _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.NotificationSidebarComponent,
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__.ToggleFullscreenDirective,
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_13__.SidebarDirective,
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__.TopMenuDirective,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule] }); })();


/***/ }),

/***/ 82329:
/*!*****************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": function() { return /* binding */ VerticalMenuComponent; }
/* harmony export */ });
/* harmony import */ var _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../horizontal-menu/navigation-routes.config */ 7015);
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/custom-animations */ 21138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ 85682);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ 36955);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-device-detector */ 61946);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ 83273);
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ 7883);
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ 48327);














var _c0 = ["toggleIcon"];
var _c1 = function () { return ["/dashboard/dashboard1"]; };
var _c2 = function (a0, a1) { return { "ft-toggle-left": a0, "ft-toggle-right": a1 }; };
function VerticalMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.toggleSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.CloseSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("width", ctx_r0.collapwid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](5, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
} }
var _c3 = function (a0) { return [a0]; };
function VerticalMenuComponent_li_4_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VerticalMenuComponent_li_4_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.Formac(menuItem_r6.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_3_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, menuItem_r6.path), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuSubItem_r24.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuSubItem_r24.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c3, menuSubItem_r24.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, menuSubItem_r24.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubItem_r24.badge && menuSubItem_r24.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuSubItem_r24.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuSubItem_r24.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r34.Formac(menuSubItem_r24.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r24.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, menuSubItem_r24.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, menuSubItem_r24.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubItem_r24.badge && menuSubItem_r24.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuSubItem_r24.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuSubItem_r24.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r24.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, menuSubItem_r24.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, menuSubItem_r24.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubItem_r24.badge && menuSubItem_r24.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r42.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuSubsubItem_r42.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50); var menuSubsubItem_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r48.Formac(menuSubsubItem_r42.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r42.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r42.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r42.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubsubItem_r42.badge && menuSubsubItem_r42.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r42.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](menuSubsubItem_r42.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template, 2, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r42.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r42.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r42.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubsubItem_r42.badge && menuSubsubItem_r42.badge != "");
} }
var _c4 = function () { return { exact: true }; };
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template, 6, 8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r42 = ctx.$implicit;
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("level", ctx_r41.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", false)("path", menuSubsubItem_r42.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c4))("ngClass", ctx_r41.config.layout.menuPosition === "Side" ? menuSubsubItem_r42.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !menuSubsubItem_r42.isExternalLink)("ngIfElse", _r44);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template, 4, 9, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", menuSubItem_r24.submenu);
} }
var _c5 = function (a0) { return { "has-sub": a0 }; };
function VerticalMenuComponent_li_4_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template, 6, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template, 6, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template, 6, 8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r24 = ctx.$implicit;
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("level", ctx_r23.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", menuSubItem_r24.class.includes("has-sub") ? true : false)("path", menuSubItem_r24.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c5, menuSubItem_r24.class.includes("has-sub") ? true : false))("routerLinkActive", menuSubItem_r24.submenu.length != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubItem_r24.submenu.length > 0 && !menuSubItem_r24.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubItem_r24.submenu.length === 0 && !menuSubItem_r24.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubItem_r24.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuSubItem_r24.submenu.length > 0);
} }
function VerticalMenuComponent_li_4_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_Template, 5, 12, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", menuItem_r6.submenu);
} }
var _c6 = function () { return { exact: false }; };
function VerticalMenuComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_a_1_Template, 6, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_a_2_Template, 6, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_a_3_Template, 6, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("level", ctx_r1.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("parent", menuItem_r6.title)("path", menuItem_r6.path)("hasSub", menuItem_r6.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c5, menuItem_r6.class.includes("has-sub") ? true : false))("routerLinkActive", menuItem_r6.submenu.length != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length === 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0);
} }
var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(router, translate, layoutService, configService, cdr, deviceService, httpClient) {
        this.router = router;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.httpClient = httpClient;
        this.level = 0;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        this.perfectScrollbarEnable = true;
        this.collapseSidebar = false;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?";
        this.collapwid = "180px";
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.isTouchDevice();
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        this.menuItems = this.ROUTESyeni;
        this.loadLayout();
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
        this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(function (collapse) {
            if (_this.config.layout.menuPosition === "Side") {
                _this.collapseSidebar = collapse;
            }
        });
    };
    VerticalMenuComponent.prototype.kaydet = function (param) {
    };
    VerticalMenuComponent.prototype.onWindowResize = function (event) {
        var _this = this;
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((function () {
            _this.innerWidth = event.target.innerWidth;
            _this.loadLayout();
        }).bind(this), 500);
    };
    VerticalMenuComponent.prototype.loadLayout = function () {
        var _this = this;
        this.kullanicimenusu = localStorage.getItem('kullanicimenusu');
        if (this.config.layout.menuPosition === "Top") { // Horizontal Menu
            if (this.innerWidth < 1200) { // Screen size < 1200
                this.menuItems = _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_0__.HROUTES;
            }
        }
        else if (this.config.layout.menuPosition === "Side") { // Vertical Menu{
            if (this.kullanicimenusu != '') {
                this.menuItems = JSON.parse(this.kullanicimenusu);
                this.ROUTESyeni = this.menuItems;
            }
            else {
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_kullanicimenusu&userid=" + localStorage.getItem('userid');
                this.httpClient.get(this.SERVER_URL).subscribe(function (data) {
                    _this.ROUTESyeni = data;
                    _this.menuItems = _this.ROUTESyeni;
                });
            }
        }
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
        if (localStorage.getItem('logourl') != '') {
            this.logoUrl = localStorage.getItem('logourl');
        }
        if (this.config.layout.sidebar.collapsed) {
            this.collapseSidebar = true;
        }
        else {
            this.collapseSidebar = false;
        }
    };
    VerticalMenuComponent.prototype.toggleSidebar = function () {
        var _this = this;
        var conf = this.config;
        conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
        this.configService.applyTemplateConfigChange({ layout: conf.layout });
        if (this.config.layout.sidebar.collapsed == true) {
            this.collapwid = "45px";
        }
        else {
            this.collapwid = "180px";
        }
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    VerticalMenuComponent.prototype.CloseSidebar = function () {
        this.layoutService.toggleSidebarSmallScreen(false);
    };
    VerticalMenuComponent.prototype.isTouchDevice = function () {
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            this.perfectScrollbarEnable = false;
        }
        else {
            this.perfectScrollbarEnable = true;
        }
    };
    VerticalMenuComponent.prototype.Formac = function (form) {
    };
    VerticalMenuComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    };
    VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) { return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
    VerticalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VerticalMenuComponent, selectors: [["app-sidebar"]], viewQuery: function VerticalMenuComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
        } }, hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
        } }, decls: 5, vars: 3, consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", 1, "navigation"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "logo-img"], ["alt", "Apex logo", 3, "src"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", "", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink", "click", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarAnchorToggle", ""], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink", "click"], ["target", "_blank", 3, "href"], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", "click", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""]], template: function VerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 10, 8, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_Template, 5, 14, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarDirective, _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__.SidebarDropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_5__.SidebarLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_6__.SidebarAnchorToggleDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], encapsulation: 2, data: { animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_1__.customAnimations } });
    return VerticalMenuComponent;
}());



/***/ }),

/***/ 5754:
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducer": function() { return /* binding */ appReducer; }
/* harmony export */ });
/* harmony import */ var _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat-ngrx/store/chat.reducers */ 3678);
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ 63267);


var appReducer = {
    chat: _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_0__.chatReducer,
    task: _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_1__.taskReducer
};


/***/ }),

/***/ 54162:
/*!***********************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.actions.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TASK": function() { return /* binding */ ADD_TASK; },
/* harmony export */   "UPDATE_TASK": function() { return /* binding */ UPDATE_TASK; },
/* harmony export */   "DELETE_TASK": function() { return /* binding */ DELETE_TASK; },
/* harmony export */   "AddTask": function() { return /* binding */ AddTask; },
/* harmony export */   "UpdateTask": function() { return /* binding */ UpdateTask; },
/* harmony export */   "DeleteTask": function() { return /* binding */ DeleteTask; }
/* harmony export */ });
var ADD_TASK = 'ADD_TASK';
var UPDATE_TASK = 'UPDATE_TASK';
var DELETE_TASK = 'DELETE_TASK';
var AddTask = /** @class */ (function () {
    function AddTask(payload) {
        this.payload = payload;
        this.type = ADD_TASK;
    }
    return AddTask;
}());

var UpdateTask = /** @class */ (function () {
    function UpdateTask(payload) {
        this.payload = payload;
        this.type = UPDATE_TASK;
    }
    return UpdateTask;
}());

var DeleteTask = /** @class */ (function () {
    function DeleteTask(payload) {
        this.payload = payload;
        this.type = DELETE_TASK;
    }
    return DeleteTask;
}());



/***/ }),

/***/ 63267:
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.reducers.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskReducer": function() { return /* binding */ taskReducer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskboard-ngrx.model */ 52333);
/* harmony import */ var _taskboard_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskboard.actions */ 54162);



var initialState = {
    tasks: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(1, 'Responsive', 'primary', 'Check responsive and change SCSS accordingly.', 'text', "1", "3", 'Feb 6', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-2.png', 'assets/img/portrait/small/avatar-s-3.png'], true, 'Marketing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(2, 'Users', 'primary', 'Companies of all shapes and sizes use Apex.', 'text', "", "", 'March 19', 'Elizabeth Elliott', [{ name: 'E', class: 'warning' }], false, 'Marketing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(3, 'Laptops', 'primary', 'Dell laptops are among the most well known laptops.', 'text', "2", "1", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-6.png'], true, 'Marketing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(4, 'Pick up Jane', 'warning', 'assets/img/banner/banner-10.jpg', 'image', "", "", '', 'Elizabeth Elliott', [], true, 'UI-Designing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(5, 'Navigation', 'warning', 'Design a prototype.', 'text', "", "6", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-7.png', 'assets/img/portrait/small/avatar-s-8.png', 'assets/img/portrait/small/avatar-s-9.png', 'assets/img/portrait/small/avatar-s-10.png'], true, 'UI-Designing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(6, 'Bootstrap 4', 'warning', 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.', 'text', "4", "", 'Dec 3', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-11.png', 'assets/img/portrait/small/avatar-s-12.png'], true, 'UI-Designing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(7, 'Meeting Agenda', 'success', 'Polish brand idea.', 'text', "3", "2", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-13.png', 'assets/img/portrait/small/avatar-s-14.png', 'assets/img/portrait/small/avatar-s-15.png'], true, 'Developing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(8, 'Angular 9', 'success', 'Angular is a platform for building mobile and desktop web applications.', 'text', "", "", 'Oct 16', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-16.png', 'assets/img/portrait/small/avatar-s-17.png'], true, 'Developing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(9, 'Task', 'success', 'Develop & design feedback form.', 'text', "8", "", '', 'Elizabeth Elliott', [{ name: 'S', class: 'primary' }, { name: 'J', class: 'success' }], false, 'Developing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(10, 'Assessment', 'info', "Don't let the outtakes take you out!", 'text', "", "", 'Sept 10', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-26.png'], true, 'Management'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(11, 'Photo shoot', 'info', 'assets/img/banner/banner-22.jpg', 'image', "2", "5", '', 'Elizabeth Elliott', [{ name: 'L', class: 'secondary' }, { name: 'F', class: 'danger' }, { name: 'T', class: 'info' }], false, 'Management'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_0__.Task(12, 'Unit tests', 'info', 'Implement performance improvements.', 'text', "5", "4", 'Jan 14', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-24.png', 'assets/img/portrait/small/avatar-s-20.png'], true, 'Management')
    ],
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _taskboard_actions__WEBPACK_IMPORTED_MODULE_1__.ADD_TASK:
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, state), { tasks: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], state.tasks), [action.payload]) });
        case _taskboard_actions__WEBPACK_IMPORTED_MODULE_1__.UPDATE_TASK:
            var updatedRecipe = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, state.tasks[action.payload.index]), action.payload.newTask);
            var updatedRecipes = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], state.tasks);
            updatedRecipes[action.payload.index] = updatedRecipe;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, state), { tasks: updatedRecipes });
        case _taskboard_actions__WEBPACK_IMPORTED_MODULE_1__.DELETE_TASK:
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, state), { tasks: state.tasks.filter(function (recipe, index) {
                    return index !== action.payload;
                }) });
        default:
            return state;
    }
}


/***/ }),

/***/ 52333:
/*!********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.model.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": function() { return /* binding */ Task; }
/* harmony export */ });
var Task = /** @class */ (function () {
    function Task(taskId, taskTitle, badgeClass, taskMessage, messageType, messageCount, linkCount, createdOn, createdBy, assignedTo, isUserImg, status) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.badgeClass = badgeClass;
        this.taskMessage = taskMessage;
        this.messageType = messageType;
        this.messageCount = messageCount;
        this.linkCount = linkCount;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.isUserImg = isUserImg;
        this.status = status;
    }
    return Task;
}());



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    appVersion: __webpack_require__(/*! ../../package.json */ 4147).version,
    production: false
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"apex-admin","version":"2.0.88","license":"","scripts":{"ng":"ng","start":"ng serve","prebuild":"npm --no-git-tag-version version patch","build":"ng build --aot","test":"ng test","lint":"ng lint","e2e":"ng e2e","postinstall":"ngcc"},"private":true,"dependencies":{"@agm/core":"1.1.0","@angular/animations":"12.0.3","@angular/cdk":"^11.0.1","@angular/common":"12.0.3","@angular/compiler":"12.0.3","@angular/core":"12.0.3","@angular/fire":"6.1.4","@angular/forms":"12.0.3","@angular/http":"^7.2.16","@angular/localize":"12.0.3","@angular/platform-browser":"12.0.3","@angular/platform-browser-dynamic":"12.0.3","@angular/platform-server":"12.0.3","@angular/router":"12.0.3","@capacitor/android":"^3.4.3","@capacitor/cli":"^3.4.3","@capacitor/core":"^3.4.3","@fullcalendar/angular":"^5.11.3","@fullcalendar/core":"^5.11.3","@fullcalendar/daygrid":"^5.11.3","@fullcalendar/interaction":"^5.11.3","@fullcalendar/list":"^5.11.3","@fullcalendar/resource-timegrid":"^5.11.3","@fullcalendar/timegrid":"^5.11.3","@ng-bootstrap/ng-bootstrap":"8.0.0","@ng-select/ng-select":"5.0.9","@ngrx/store":"10.1.0","@ngx-translate/core":"13.0.0","@ngx-translate/http-loader":"6.0.0","@swimlane/ngx-charts":"16.0.0","@swimlane/ngx-datatable":"18.0.0","@types/chartist":"0.11.0","@types/d3-shape":"2.0.0","@types/dragula":"3.7.0","@zxing/browser":"^0.1.1","@zxing/library":"^0.19.1","@zxing/ngx-scanner":"^3.5.0","acorn":"8.0.4","angular-archwizard":"6.1.0","angular-calendar":"0.28.22","angular-google-charts":"^2.2.2","angular-resize-event":"2.0.1","apexcharts":"3.26.2","bootstrap":"4.5.0","chart.js":"2.9.4","chartist":"0.11.4","chartist-plugin-tooltips-updated":"0.1.3","classlist.js":"1.1.20150312","core-js":"3.8.1","d3":"6.3.0","datatables.net":"^1.11.4","date-fns":"2.16.1","file-saver":"^2.0.5","firebase":"^8.10.1","fullcalendar":"^5.11.3","gulp":"^3.9.1","highcharts":"^9.3.3","highcharts-angular":"^3.0.0","hopscotch":"0.3.1","intl":"1.2.5","jspdf":"^2.5.1","jspdf-autotable":"^3.5.28","material-bottom-nav":"^1.3.0","moment":"^2.29.4","ng-apexcharts":"1.5.6","ng-chartist":"4.1.0","ng-click-outside":"8.0.0","ng2-charts":"2.4.2","ng2-completer":"9.0.1","ng2-dragula":"2.1.1","ng2-file-upload":"1.4.0","ng2-nouislider":"1.8.2","ng2-search-filter":"^0.5.1","ngx-chips":"2.2.2","ngx-custom-validators":"8.0.0","ngx-device-detector":"^2.0.4","ngx-image-cropper":"3.3.1","ngx-perfect-scrollbar":"10.0.1","ngx-quill":"13.0.1","ngx-spinner":"10.0.1","ngx-swiper-wrapper":"10.0.0","ngx-take-until-destroy":"5.4.0","ngx-toastr":"13.2.0","ngx-ui-switch":"10.0.2","nouislider":"14.6.3","postcss-rtl":"^0.0.3","prismjs":"^1.23.0","pug":"3.0.2","quill":"1.3.7","resize-observer-polyfill":"1.5.1","rxjs":"6.6.3","screenfull":"5.0.2","session-expiration-alert":"^12.0.0","sweetalert2":"10.11.1","swiper":"^7.4.1","tippy":"0.0.0","tippy.js":"^6.3.7","tslib":"2.2.0","web-animations-js":"2.3.2","webpack-sources":"^3.2.3","xlsx":"^0.17.5","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"^12.2.5","@angular/cli":"12.0.3","@angular/compiler-cli":"12.0.3","@angular/language-service":"12.0.3","@types/core-js":"2.5.3","@types/jasmine":"~3.6.0","@types/jquery":"^3.5.8","@types/node":"13.9.1","codelyzer":"6.0.0","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.2","karma-chrome-launcher":"~3.1.0","karma-cli":"~2.0.0","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"1.5.0","postcss":"8.2.15","protractor":"~7.0.0","rxjs-compat":"6.5.4","sass":"1.30.0","ts-node":"8.6.2","tslint":"~6.1.0","typescript":"^4.2.4"}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map