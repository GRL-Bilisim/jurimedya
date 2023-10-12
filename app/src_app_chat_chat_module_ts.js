"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 54761:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoutingModule": function() { return /* binding */ ChatRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component */ 2226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
        data: {
            title: 'Chat'
        },
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule.ɵfac = function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); };
    ChatRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
    ChatRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return ChatRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
var routedComponents = [_chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent];


/***/ }),

/***/ 2226:
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": function() { return /* binding */ ChatComponent; }
/* harmony export */ });
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.service */ 81470);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ 96903);












function ChatComponent_a_17_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 49);
} }
function ChatComponent_a_17_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 50);
} }
var _c0 = function (a0) { return { "selected-chat": a0 }; };
var _c1 = function (a0) { return { "align-items-center": a0 }; };
function ChatComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_a_17_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); var user_r6 = restoredCtx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.viewChat(user_r6, user_r6.user_indeks); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ChatComponent_a_17_i_13_Template, 1, 0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ChatComponent_a_17_i_14_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, user_r6.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, !user_r6.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", user_r6.profilresim, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("avatar-status-", user_r6.durumu, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", user_r6.adi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r6.lastChatTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", user_r6.isPinnedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", user_r6.isMuted);
} }
var _c2 = function (a0) { return { "chat-left": a0 }; };
function ChatComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r11 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c2, chat_r11.gonderen === ctx_r4.aliciid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", chat_r11.gonderen === ctx_r4.aliciid ? ctx_r4.activeChatUserImg : ctx_r4.activeChatSenderUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](chat_r11.mesaj);
} }
var _c3 = function (a0) { return { show: a0 }; };
var ChatComponent = /** @class */ (function () {
    function ChatComponent(http, elRef, renderer, document, configService, cdr, chatService, route) {
        var _this = this;
        this.http = http;
        this.elRef = elRef;
        this.renderer = renderer;
        this.document = document;
        this.configService = configService;
        this.cdr = cdr;
        this.chatService = chatService;
        this.route = route;
        this.chats = [];
        this.cet = [];
        this.usersChat = [];
        this.newMessage = "";
        this.searchQuery = '';
        this.placement = "bottom-right";
        this.isContentOverlay = false;
        this.userid = localStorage.getItem('userid');
        this.config = {};
        this.urlid = this.route.snapshot.paramMap.get('id');
        this.messages = new Array();
        this.item = 0;
        this.leftChat = false;
        this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_kullanicilarigetir&userindeks=" + this.userid;
        this.http.get(this.users).subscribe(function (data) {
            _this.usersChat = data;
            if (_this.urlid != null) {
                var filterData = data.filter(function (a) { return a.user_indeks == _this.urlid; });
                _this.viewChat(filterData, _this.urlid);
                _this.activeChatUser = filterData[0].adi;
                _this.activeChatUserImg = filterData[0].profilresim;
            }
        });
        this.config = this.configService.templateConf;
        this.activeChat = chatService.usersChat.find(function (_) { return _.isActiveChat; });
        this.activeChatUser = this.activeChat.name;
        this.activeChatUserImg = this.activeChat.avatar;
        this.loggedInUserImg = "assets/img/portrait/small/avatar-s-1.png";
        this.renderer.addClass(this.document.body, "chat-application");
        //this.usersChat.find(o => o.user_indeks === 10);
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_kullanicilarigetir&userindeks=" + this.userid;
        this.http.get(this.users).subscribe(function (data) {
            _this.usersChat = data;
            _this.cdr.markForCheck();
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.viewInterval);
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        this.renderer.removeClass(this.document.body, "chat-application");
    };
    //send button function calls
    ChatComponent.prototype.onAddMessage = function () {
        var _this = this;
        if (this.newMessage != "") {
            console.log(this.aliciid);
            var postUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_mesajgonder";
            var postData = new FormData();
            postData.append('gonderenid', localStorage.getItem('userid'));
            postData.append('aliciid', this.aliciid);
            postData.append('mesaj', this.newMessage);
            this.http.post(postUrl, postData).subscribe(function (data) {
                _this.mesajcek = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + _this.aliciid + "&userid=" + localStorage.getItem('userid');
                _this.http.get(_this.mesajcek).subscribe(function (data) {
                    _this.chats = data;
                    _this.cdr.markForCheck();
                });
            }, function (err) {
                console.log('Error: ' + err.error);
            });
            // this.activeChat.chats.push({
            //   isReceived: false,
            //   time: "",
            //   messages: [this.newMessage],
            //   messageType: 'text'
            // })
            this.newMessage = "";
        }
    };
    ChatComponent.prototype.viewChat = function (chats, id) {
        var _this = this;
        this.usersChat.forEach(function (chat) {
            if (chats.user_indeks == chats.user_indeks) {
                if (id == "") {
                    _this.aliciid = chats.user_indeks;
                }
                else {
                    _this.aliciid = id;
                }
                chat.isActiveChat = false;
            }
        });
        this.viewInterval = setInterval(function () {
            _this.mesajcek = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + _this.aliciid + "&userid=" + localStorage.getItem('userid');
            _this.http.get(_this.mesajcek).subscribe(function (data) {
                _this.chats = data;
                _this.cdr.markForCheck();
                _this.urlid = null;
            });
        }, 2000);
        this.activeChat = chats;
        this.activeChat.isActiveChat = true;
        this.activeChatUser = chats.adi;
        this.activeChatUserImg = chats.profilresim;
        this.activeChatSenderUserImg = localStorage.getItem('profilresim');
        this.isContentOverlay = false;
    };
    ChatComponent.prototype.onSidebarToggle = function () {
        this.isContentOverlay = true;
    };
    ChatComponent.prototype.onContentOverlay = function () {
        this.isContentOverlay = false;
    };
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
    ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService])], decls: 46, vars: 15, consts: [[1, "chat-application", "overflow-hidden"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [1, "chat-sidebar", "d-md-block", 3, "perfectScrollbar"], ["chatSidebar", ""], [1, "sidebar-close-icon", "d-md-none", 3, "click"], [1, "ft-x"], [1, "chat-sidebar-content"], [1, "chat-fixed-search", "py-2", "px-3", "my-1"], ["action", "javascript:;"], [1, "position-relative", "has-icon-left"], ["placeholder", "Kullan\u0131c\u0131lar\u0131 ara", "id", "timesheetinput1", "name", "employeename", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control-position"], [1, "ft-user"], [1, "m-0"], ["id", "users-list", 1, "list-group"], [1, "users-list-padding", "position-relative"], ["class", "list-group-item ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "chat-name", "p-2"], [1, "media", "p-1", "align-items-center"], [1, "chat-app-sidebar-toggle", "ft-menu", "font-medium-4", "mr-3", "d-block", "d-md-none", 3, "click"], [1, "media-body"], ["width", "37", "alt", "avatar", 1, "avatar", "mr-1", 3, "src"], [1, "position-relative", "float-right"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block", 3, "placement"], ["id", "chatOptions", "ngbDropdownToggle", "", 1, "ft-more-vertical-", "mt-1", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "chatOptions"], ["href", "javascript:;", 1, "dropdown-item"], [1, "chat-app-window", "position-relative", 3, "perfectScrollbar", "scrollTop"], ["scrollMe", ""], [1, "chats"], ["class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-app-form", "px-3", "py-2"], [1, "d-flex", "align-items-center"], ["type", "text", "name", "iconLeft4", "id", "iconLeft4", "placeholder", "Mesaj\u0131n\u0131z\u0131 buraya yaz\u0131n", 1, "form-control", "chat-message-send", "mr-2", 3, "ngModel", "keydown.enter", "ngModelChange"], ["it", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "d-lg-flex", "align-items-center", 3, "click"], [1, "ft-send"], [1, "d-none", "d-lg-block", "ml-1"], [1, "list-group-item", 3, "ngClass", "click"], [1, "media", "chat-list-text", "py-1", 3, "ngClass"], [1, "avatar", "avatar-md", "mr-2"], ["alt", "Avatar", 3, "src"], [1, "list-group-item-heading", "mb-1"], [1, "chat-list-text", "font-small-2", "float-right", "chat-time"], [1, "list-group-item-text", "chat-user-list-text", "m-0"], [1, "float-right", "primary"], ["class", "font-medium-1 icon-pin", 4, "ngIf"], ["class", "font-medium-1 icon-volume-off mr-1", 4, "ngIf"], [1, "font-medium-1", "icon-pin"], [1, "font-medium-1", "icon-volume-off", "mr-1"], [1, "chat", 3, "ngClass"], [1, "chat-avatar"], ["data-toggle", "tooltip", "data-placement", "[activeChatUserImg]", "title", "", "data-original-title", "", 1, "avatar", "avatar-md"], ["alt", "avatar", 3, "src"], [1, "chat-body"], [1, "chat-content"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_1_listener() { return ctx.onContentOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_Template_span_click_5_listener() { return ctx.isContentOverlay = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchQuery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "hr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ChatComponent_a_17_Template, 15, 14, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_Template_span_click_21_listener() { return ctx.onSidebarToggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Profili G\u00F6r\u00FCnt\u00FCle");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Bildirimleri Sessize Al");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "section", 28, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ChatComponent_div_37_Template, 8, 5, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 34, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_input_keydown_enter_40_listener($event) { ctx.onAddMessage(); return $event.preventDefault(); })("ngModelChange", function ChatComponent_Template_input_ngModelChange_40_listener($event) { return ctx.newMessage = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_42_listener() { return ctx.onAddMessage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "G\u00F6nder");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx.isContentOverlay));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](18, 9, ctx.usersChat, "adi", ctx.searchQuery));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.activeChatUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.activeChatUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placement", ctx.placement);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollTop", _r3.scrollHeight);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.chats);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newMessage);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__.SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
    return ChatComponent;
}());



/***/ }),

/***/ 10652:
/*!************************************!*\
  !*** ./src/app/chat/chat.model.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersChat": function() { return /* binding */ UsersChat; },
/* harmony export */   "Chat": function() { return /* binding */ Chat; }
/* harmony export */ });
var UsersChat = /** @class */ (function () {
    function UsersChat(userId, name, avatar, lastChatTime, status, isPinnedUser, isMuted, unreadMessageCount, isActiveChat, lastChatMessage, chats) {
        this.userId = userId;
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

/***/ 20818:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatModule": function() { return /* binding */ ChatModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 54761);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component */ 2226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule.ɵfac = function ChatModule_Factory(t) { return new (t || ChatModule)(); };
    ChatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChatModule });
    ChatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatRoutingModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule
            ]] });
    return ChatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule] }); })();


/***/ }),

/***/ 81470:
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": function() { return /* binding */ ChatService; }
/* harmony export */ });
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.model */ 10652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.chat1 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat2 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat3 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat4 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat5 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat6 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat7 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.usersChat = [
            {
                userId: "1",
                name: "Elizabeth Elliott",
                avatar: "assets/img/portrait/small/avatar-s-2.png",
                lastChatTime: "9:04 PM",
                status: "online",
                isPinnedUser: true,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Okay",
                chats: this.chat1
            },
            {
                userId: "2",
                name: "Lucas Howell",
                avatar: "assets/img/portrait/small/avatar-s-7.png",
                lastChatTime: "4:14 AM",
                status: "busy",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "3",
                isActiveChat: false,
                lastChatMessage: "Thank you",
                chats: this.chat2
            },
            {
                userId: "3",
                name: "Juri Medya",
                avatar: "assets/img/pages/modern-thumbnail.png",
                lastChatTime: "2:14 AM",
                status: "away",
                isPinnedUser: false,
                isMuted: true,
                unreadMessageCount: "12",
                isActiveChat: true,
                lastChatMessage: "Hello John!",
                chats: this.chat3
            },
            {
                userId: "4",
                name: "Layla Allen",
                avatar: "assets/img/portrait/small/avatar-s-20.png",
                lastChatTime: "Yesterday",
                status: "online",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "I love you",
                chats: this.chat4
            },
            {
                userId: "5",
                name: "Bruce Reid",
                avatar: "assets/img/portrait/small/avatar-s-5.png",
                lastChatTime: "Yesterday",
                status: "offline",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Will connect you",
                chats: this.chat5
            },
            {
                userId: "6",
                name: "Krish Candy",
                avatar: "assets/img/portrait/small/avatar-s-9.png",
                lastChatTime: "Wednesday",
                status: "away",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "4",
                isActiveChat: false,
                lastChatMessage: "Thank you",
                chats: this.chat6
            },
            {
                userId: "7",
                name: "Kelly Reyes",
                avatar: "assets/img/portrait/small/avatar-s-4.png",
                lastChatTime: "Thrusday",
                status: "busy",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "😎🙂😃",
                chats: this.chat7
            },
            {
                userId: "8",
                name: "Vincent Nelson",
                avatar: "assets/img/portrait/small/avatar-s-14.png",
                lastChatTime: "Friday",
                status: "online",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Who you are?",
                chats: this.chat1
            },
            {
                userId: "9",
                name: "William Wright",
                avatar: "assets/img/portrait/small/avatar-s-23.png",
                lastChatTime: "1 week ago",
                status: "offline",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "6",
                isActiveChat: false,
                lastChatMessage: "How was the day?",
                chats: this.chat3
            },
            {
                userId: "10",
                name: "Novah Miller",
                avatar: "assets/img/portrait/small/avatar-s-26.png",
                lastChatTime: "1 month ago",
                status: "away",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "There you are!",
                chats: this.chat5
            }
        ];
    }
    ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    ChatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac });
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map