"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_carihesapkarti_carihesapkarti_module_ts"],{

/***/ 90960:
/*!*****************************************************************!*\
  !*** ./src/app/carihesapkarti/carihesapkarti-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoutingModule": function() { return /* binding */ ChatRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _carihesapkarti_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carihesapkarti.component */ 18964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _carihesapkarti_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
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
var routedComponents = [_carihesapkarti_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent];


/***/ }),

/***/ 18964:
/*!************************************************************!*\
  !*** ./src/app/carihesapkarti/carihesapkarti.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": function() { return /* binding */ ChatComponent; }
/* harmony export */ });
/* harmony import */ var _carihesapkarti_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carihesapkarti.service */ 30489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/sweet-alerts */ 645);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newrecordrow/newrecordrow.component */ 36009);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-device-detector */ 61946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ 96903);






















var _c0 = ["tableRowDetails"];
var _c1 = ["tableResponsive"];
function ChatComponent_div_3_div_14_a_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 35);
} }
function ChatComponent_div_3_div_14_a_1_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 36);
} }
var _c2 = function (a0) { return { "selected-chat": a0 }; };
var _c3 = function (a0) { return { "align-items-center": a0 }; };
function ChatComponent_div_3_div_14_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_3_div_14_a_1_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); var user_r9 = restoredCtx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r12.viewChat(user_r9, user_r9.cariindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h6", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_div_3_div_14_a_1_i_11_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_div_3_div_14_a_1_i_12_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c2, user_r9.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c3, !user_r9.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", user_r9.profilresim, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("avatar-status-", user_r9.durumu, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", user_r9.caritanimi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r9.isPinnedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r9.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r9.yetkiligsm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r9.tckimlikno);
} }
function ChatComponent_div_3_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_div_3_div_14_a_1_Template, 17, 15, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, ctx_r6.usersChat, "caritanimi", ctx_r6.searchQuery));
} }
function ChatComponent_div_3_div_15_a_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_3_div_15_a_1_div_6_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); var user_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r18.onecikar(user_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_3_div_15_a_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_3_div_15_a_1_div_7_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); var user_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r21.onecikar_gerial(user_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_3_div_15_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_3_div_15_a_1_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); var user_r15 = restoredCtx.$implicit; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r24.tedavisec(user_r15, user_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_div_3_div_15_a_1_div_6_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_div_3_div_15_a_1_div_7_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, user_r15.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r15.hizmettanimi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r15.onecikar == "H" || user_r15.onecikar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r15.onecikar == "E");
} }
function ChatComponent_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_div_3_div_15_a_1_Template, 8, 6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, ctx_r7.tedaviler, "hizmettanimi", ctx_r7.searchQuery));
} }
function ChatComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_3_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.isContentOverlay = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_div_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r28.searchQuery = $event; })("keyup", function ChatComponent_div_3_Template_input_keyup_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r29.hastaara(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "hr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_div_3_div_14_Template, 3, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_div_3_div_15_Template, 3, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("", ctx_r1.clasim, " d-md-block");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.recordid == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.secilengrup != null);
} }
function ChatComponent_div_4_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Bor\u00E7lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_4_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alacakl\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_4_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Temiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u0130\u015Flem");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\u00D6deme");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ChatComponent_div_4_span_36_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ChatComponent_div_4_span_37_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, ChatComponent_div_4_span_38_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Bakiye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Uyar\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r2.bakiyeler[0].islemtoplami, " \u20BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r2.bakiyeler[0].odemetoplami, " \u20BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r2.bakiyeler[0].bakiye, " \u20BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.bakiyeler[0].odemetoplami - ctx_r2.bakiyeler[0].islemtoplami > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.bakiyeler[0].odemetoplami - ctx_r2.bakiyeler[0].islemtoplami < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.bakiyeler[0].odemetoplami - ctx_r2.bakiyeler[0].islemtoplami === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.uyari);
} }
function ChatComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_5_div_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r37.hastakarti(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_5_div_1_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r39.listeyedon(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r33.secilenhasta);
} }
function ChatComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 42);
} }
function ChatComponent_div_5_div_3_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Bor\u00E7lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_5_div_3_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alacakl\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_5_div_3_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Temiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u0130\u015Flem Toplam\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "\u00D6deme Toplam\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ChatComponent_div_5_div_3_span_36_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ChatComponent_div_5_div_3_span_37_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, ChatComponent_div_5_div_3_span_38_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Bakiye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h7", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Uyar\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r35.bakiyeler[0].islemtoplami, " TL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r35.bakiyeler[0].odemetoplami, " TL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r35.bakiyeler[0].bakiye, " TL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r35.bakiyeler[0].odemetoplami - ctx_r35.bakiyeler[0].islemtoplami > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r35.bakiyeler[0].odemetoplami - ctx_r35.bakiyeler[0].islemtoplami < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r35.bakiyeler[0].odemetoplami - ctx_r35.bakiyeler[0].islemtoplami === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r35.uyari);
} }
function ChatComponent_div_5_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_5_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r43.satirekle("419", "cariindex", "1668"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Al\u0131m Faturas\u0131 Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_5_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44); var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r45.satirekle("732", "cariindex", "1668"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u00D6deme Yap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_div_5_div_1_Template, 6, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_div_5_div_2_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_div_5_div_3_Template, 55, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_5_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r46.onSidebarToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_div_5_div_7_Template, 5, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_5_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r48.hastakarti(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Sat\u0131c\u0131 Bilgisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.recordid != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.recordid != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.recordid != null && ctx_r3.cihazmobilmi == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.recordid != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placement", ctx_r3.placement);
} }
var _c4 = function (a0) { return { active: a0 }; };
function ChatComponent_section_6_section_1_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_li_3_Template_a_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60); var grup_r57 = restoredCtx.$implicit; var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r59.setActiveTab(grup_r57.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var grup_r57 = ctx.$implicit;
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c4, ctx_r50.activeTab === grup_r57.name))("id", grup_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r50.baslikkontrol(grup_r57.name));
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r81); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r79.formModal(blok_r61.bagliformindex, 198); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r84); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r82.tasarla(blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r86); var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r85.excelModal(ctx_r85.mymodal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r88); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r87.exportAsExcelFile(ctx_r87.satirlar[blok_r61.bokindex], blok_r61.formtanimi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Excel'e Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r92); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r90.barkodOkut(blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94); var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r93.maliyethesapla("Sat\u0131nalma"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Yeniden Hesapla");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r97); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r95.sarjdoldur(blok_r61.bagliformindex, blok_r61.masterfield, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r98.otomatikdoldur(blok_r61.bagliformindex, blok_r61.masterfield, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Otomatik Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r102); var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r101.mixsarjformuyazdir(ctx_r101.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r104); var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r103.bekleyensiparisler(ctx_r103.veriler); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Bekleyen Sipari\u015Flerden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r107); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r105.satirekle(blok_r61.bagliformindex, blok_r61.masterfield, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_4_Template, 2, 0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_5_Template, 2, 0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_6_Template, 3, 0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_7_Template, 2, 0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_8_Template, 2, 0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_9_Template, 3, 0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_10_Template, 3, 0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_11_Template, 3, 0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_12_Template, 2, 0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_button_13_Template, 3, 0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r67.userroles == "00038" || ctx_r67.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r67.userroles == "00038" || ctx_r67.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r67.cihazmobilmi == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r67.cihazmobilmi == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "598");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "664");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r67.formid == "486");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "657");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "605");
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h7", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r114 = ctx.$implicit;
    var row_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", row_r109[column_r114.id], " ");
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r119); var row_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r117.deleterecord(row_r109.id, blok_r61.bagliformindex, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r123); var row_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r121.editrecord(row_r109.id, blok_r61.bagliformindex, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_div_1_Template, 3, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_button_3_Template, 2, 0, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_button_4_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r68.sutunlars[blok_r61.bokindex].slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r68.secilenform != "siparis-izleme" && blok_r61.bagliformindex != "627" && blok_r61.bagliformindex != "631" && blok_r61.bagliformindex != "637" && blok_r61.bagliformindex != "639" && blok_r61.bagliformindex != "670" && blok_r61.bagliformindex != "645" && blok_r61.bagliformindex != "666" && blok_r61.bagliformindex != "655" && blok_r61.bagliformindex != "668");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r68.secilenform != "siparis-izleme" && blok_r61.bagliformindex != "631" && blok_r61.bagliformindex != "637" && blok_r61.bagliformindex != "639" && blok_r61.bagliformindex != "645" && blok_r61.bagliformindex != "666" && blok_r61.bagliformindex != "670");
} }
function ChatComponent_section_6_section_1_div_8_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_div_1_div_2_div_6_Template, 14, 10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_6_section_1_div_8_div_1_div_2_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r127); var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r126.termB = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ul", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_6_section_1_div_8_div_1_div_2_li_13_Template, 5, 3, "li", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r65.formtanimi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r65.termB);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r65.satirlar[blok_r61.bokindex]);
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_section_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var satir_r138 = ctx.$implicit;
    var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r137.localStorage.getItem("url") + satir_r138.dosya, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h4", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Resimler aras\u0131nda ge\u00E7i\u015F yapabilir, b\u00FCy\u00FCk boyutlu g\u00F6rebilir ve inceleyebilirsiniz.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_6_section_1_div_8_div_1_section_3_section_1_div_11_Template, 2, 1, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("swiper", ctx_r129.swiperCoverflowEffectConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r129.satirlar[blok_r61.bokindex]);
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r151); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r149.formModal(blok_r61.bagliformindex, 198); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r154); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r152.tasarla(blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r157); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r155.barkodOkut(blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r159); var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r158.maliyethesapla("Sat\u0131nalma"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Yeniden Hesapla");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r162); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r160.sarjdoldur(blok_r61.bagliformindex, blok_r61.masterfield, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r165); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r163.otomatikdoldur(blok_r61.bagliformindex, blok_r61.masterfield, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Otomatik Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r167); var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r166.mixsarjformuyazdir(ctx_r166.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r169); var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r168.bekleyensiparisler(ctx_r168.veriler); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Bekleyen Sipari\u015Flerden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r172); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r170.satirekle(blok_r61.bagliformindex, blok_r61.masterfield, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_4_Template, 2, 0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_5_Template, 2, 0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r172); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12); var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r173.excelModal(_r131); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r172); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r174.exportAsExcelFile(ctx_r174.satirlar[blok_r61.bokindex], blok_r61.formtanimi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Excel'e Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_11_Template, 2, 0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_12_Template, 3, 0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_13_Template, 3, 0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_14_Template, 3, 0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_15_Template, 2, 0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_button_16_Template, 3, 0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r130.userroles == "00038" || ctx_r130.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r130.userroles == "00038" || ctx_r130.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "598");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "664");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r130.formid == "486");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "657");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "605");
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ng_template_11_form_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Y\u00FCkle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", blok_r61.bagliformindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx_r178.recordid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", blok_r61.detailfield);
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h4", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ng_template_11_Template_button_click_3_listener() { var modal_r177 = ctx.$implicit; return modal_r177.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_6_section_1_div_8_div_1_section_3_ng_template_11_form_7_Template, 10, 3, "form", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ng_template_11_Template_button_click_9_listener() { var modal_r177 = ctx.$implicit; return modal_r177.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Tamam");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.formturu != "Rapor");
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
    var column_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r187[column_r183.id]);
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_div_0_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_div_1_Template, 2, 0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_div_2_Template, 2, 0, "div", 171);
} if (rf & 2) {
    var row_r187 = ctx.row;
    var column_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r187[column_r183.id] != "true" && row_r187[column_r183.id] != "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r187[column_r183.id] == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r187[column_r183.id] == "false");
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-column", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_ng_template_1_Template, 3, 3, "ng-template", 169, 170, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r183 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", column_r183.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("prop", column_r183.id);
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r216); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r214.yuzdegir(row_r196.id, blok_r61.bokindex, row_r196.yuzdepayi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r220); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r218.parametreler(row_r196.id, blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r224); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r222.rezervEt(row_r196.id, blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r228); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit; var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r226.barkodOkut(blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r231); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r229.paletbarkodyazdir(row_r196.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r234); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r232.barkodyazdir(row_r196.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r237); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r235.sarjbittionay(row_r196.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r240); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r238.sarjformuyazdir(row_r196.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r243); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r241.editrecord(row_r196.id, blok_r61.bagliformindex, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r245.editrecord(row_r196.id, "742", blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r251); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r249.editrecord(row_r196.id, "743", blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r255); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r253.uretimYontemGit(row_r196.id, blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r258); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit; var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r257.rezervlerdencek(ctx_r257.veriler, blok_r61.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r262); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r260.formlaraGit(row_r196.id, blok_r61.bagliformindex, "veridagitimformu", "musteri_urun_kodu", "kalemkodu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r266); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r264.formlaraGit(row_r196.id, blok_r61.bagliformindex, "maliyet_analizi", "", ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_18_Template(rf, ctx) { if (rf & 1) {
    var _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r270); var row_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r268.kartinagit(row_r196.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_1_Template, 2, 0, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_2_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_3_Template, 2, 0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_4_Template, 2, 0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_5_Template, 2, 0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_6_Template, 2, 0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_7_Template, 2, 0, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_8_Template, 2, 0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_9_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_10_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_11_Template, 2, 0, "button", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_Template_button_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r273); var row_r196 = restoredCtx.row; var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r271.deleterecord(row_r196.id, blok_r61.bagliformindex, blok_r61.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_14_Template, 2, 0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_15_Template, 2, 0, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_16_Template, 2, 0, "button", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_17_Template, 2, 0, "button", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_button_18_Template, 2, 0, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r196 = ctx.row;
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "610" || blok_r61.bagliformindex == "614" || blok_r61.bagliformindex == "618" || blok_r61.bagliformindex == "616");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "257");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "278");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "642" && blok_r61.formindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.formindex == "395");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "653" && blok_r61.formindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r196.HareketTuru != "\u00DCr\u00FCn Sat\u0131\u015F\u0131" && row_r196.HareketTuru != "Paket Sat\u0131\u015F\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r196.HareketTuru == "\u00DCr\u00FCn Sat\u0131\u015F\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r196.HareketTuru == "Paket Sat\u0131\u015F\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "250" && blok_r61.formindex == "254");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "278" && blok_r61.formindex == "277");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "513" && blok_r61.formindex == "491");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "513" && blok_r61.formindex == "491");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "610" || blok_r61.bagliformindex == "614" || blok_r61.bagliformindex == "618" || blok_r61.bagliformindex == "616");
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-column", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_ng_template_1_Template, 19, 16, "ng-template", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 200);
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_20_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Toplam KG: ", ctx_r275.getirs(blok_r61.bagliformindex), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Toplam Y\u00FCzde: ", ctx_r275.getirs_2(blok_r61.bagliformindex), " ");
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_20_ng_template_1_Template, 5, 2, "ng-template", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_21_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Toplam Maliyet: ", ctx_r281.toplammaliyet, " TL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Birim Maliyet: ", ctx_r281.birimmaliyet, " TL ");
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_21_ng_template_1_Template, 5, 2, "ng-template", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_div_1_section_3_Template(rf, ctx) { if (rf & 1) {
    var _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_section_3_section_1_Template, 13, 2, "section", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h4", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_6_section_1_div_8_div_1_section_3_div_8_Template, 17, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_6_section_1_div_8_div_1_section_3_ng_template_11_Template, 11, 1, "ng-template", null, 138, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "fieldset", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Ara: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_6_section_1_div_8_div_1_section_3_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r288); var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; return blok_r61.bagliformindexC = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ngx-datatable", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_18_Template, 3, 2, "ngx-datatable-column", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_column_19_Template, 2, 1, "ngx-datatable-column", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_20_Template, 2, 0, "ngx-datatable-footer", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ChatComponent_section_6_section_1_div_8_div_1_section_3_ngx_datatable_footer_21_Template, 2, 0, "ngx-datatable-footer", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex === "726");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](blok_r61.formtanimi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("name", "search_", blok_r61.bokindex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", blok_r61.bokindex)("ngModel", blok_r61.bagliformindexC);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columns", ctx_r66.sutunlars[blok_r61.bokindex])("columnMode", ctx_r66.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx_r66.satirlar[blok_r61.bokindex])("scrollbarH", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r66.sutunlars[blok_r61.bokindex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "610" || blok_r61.bagliformindex == "614" || blok_r61.bagliformindex == "618" || blok_r61.bagliformindex == "616");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.bagliformindex == "664");
} }
function ChatComponent_section_6_section_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_6_section_1_div_8_div_1_div_2_Template, 14, 4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_6_section_1_div_8_div_1_section_3_Template, 22, 17, "section", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](blok_r61.blokboyutu);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx_r63.activeTab === blok_r61.grupadi ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", blok_r61.bokindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r63.cihazmobilmi == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r63.cihazmobilmi == false);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Kay\u0131t Tarihi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Son D\u00FCzenleme T.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Olu\u015Fturan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Son D\u00FCzenleyen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291.kayittarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r293.kayittarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291.sonduzenlemetarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r293.sonduzenlemetarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291.olusturans);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r293.olusturan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291.sonduzenleyen);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r293.sonduzenleyen);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
var _c5 = function (a0, a1) { return { "is-invalid ": a0, "is-valid": a1 }; };
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r322); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r320.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 212, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r322); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r323.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r322); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_1_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r298.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r318.errors == null ? null : _r318.errors.required) && alan_r296.zorunlu === "True", !_r318.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r318.errors == null ? null : _r318.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
var _c6 = function (a0, a1, a2) { return { " is-invalid    ": a0, "  is-valid ": a1, "form-control selectRef": a2 }; };
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r334); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r332.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ng-select", 216, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template_ng_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r334); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r335.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r334); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_2_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r299.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](9, _c6, (_r330.errors == null ? null : _r330.errors.required) && alan_r296.zorunlu === "True", !_r330.invalid && alan_r296.zorunlu === "True", alan_r296.zorunlu === "True"))("items", ctx_r299.cities[alan_r296.alan_index])("closeOnSelect", true)("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r330.errors == null ? null : _r330.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_3_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r346); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r344.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 217, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r346); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r347.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r346); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_3_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r300.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r342.errors == null ? null : _r342.errors.required) && alan_r296.zorunlu === "True", !_r342.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r342.errors == null ? null : _r342.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_4_div_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r359); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var veri_r355 = ctx.$implicit;
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veri_r355.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", veriler_r291[alan_r296.alanadi])("id", veri_r355.name + "_" + alan_r296.alan_index)("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("for", "", veri_r355.name, "_", alan_r296.alan_index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](veri_r355.name);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r365 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_4_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r365); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r363.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_4_div_5_Template, 4, 7, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r301.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r301.cities[alan_r296.alan_index]);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r369); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r367.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r369); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r370.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r369); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r302.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_6_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r381); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r379.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 225, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r381); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r382.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r381); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_6_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r303.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r377.errors == null ? null : _r377.errors.required) && alan_r296.zorunlu === "True", !_r377.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r377.errors == null ? null : _r377.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r391 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r391); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r389.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r391); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r392.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r391); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r304.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r401); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r399.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r401); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r402.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r401); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r305.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r411 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r411); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r409.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r411); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_10_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r421); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r419.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 230, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r421); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r422.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r421); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_10_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r307.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r417.errors == null ? null : _r417.errors.required) && alan_r296.zorunlu === "True", !_r417.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r417.errors == null ? null : _r417.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r431); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r429.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r431); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r308.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](veriler_r291[alan_r296.alanadi]);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_12_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r441); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r439.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 232, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r441); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r442.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r441); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_12_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r309.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r437.errors == null ? null : _r437.errors.required) && alan_r296.zorunlu === "True", !_r437.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r437.errors == null ? null : _r437.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_13_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r453 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r453); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r451.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 233, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r453); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r454.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r453); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_13_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r310.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r449.errors == null ? null : _r449.errors.required) && alan_r296.zorunlu === "True", !_r449.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r449.errors == null ? null : _r449.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r463 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r463); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r461.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r463); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); })("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r463); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r467.dosyayukle($event, alan_r296.alanadi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r311.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", veriler_r291[alan_r296.alanadi], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r473 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "img", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r473); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r471.pdfegit(veriler_r291[alan_r296.alanadi]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r473); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r475.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r473); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r477.pdfdosyayukle($event, alan_r296.alanadi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r312.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("name", alan_r296.alanadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r482 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r482); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r480 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r480.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r482); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r313.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r313.degistir(veriler_r291[alan_r296.alanadi]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_17_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r492 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r492); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r490 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r490.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ng-select", 239, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r492); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_17_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r488 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r314.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](9, _c6, (_r488.errors == null ? null : _r488.errors.required) && alan_r296.zorunlu === "True", !_r488.invalid && alan_r296.zorunlu === "True", alan_r296.zorunlu === "True"))("items", ctx_r314.cities[alan_r296.alan_index])("id", alan_r296.alanadi)("closeOnSelect", true)("name", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r488.errors == null ? null : _r488.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_18_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r502 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r502); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r500 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r500.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 212, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r502); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r503 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r503.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r502); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_18_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r498 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r315.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r498.errors == null ? null : _r498.errors.required) && alan_r296.zorunlu === "True", !_r498.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r498.errors == null ? null : _r498.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_19_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r514 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r514); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r512.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 212, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r514); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r515.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r514); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_19_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r316.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r510.errors == null ? null : _r510.errors.required) && alan_r296.zorunlu === "True", !_r510.invalid && alan_r296.zorunlu === "True"))("ngModel", veriler_r291[alan_r296.alanadi])("name", alan_r296.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r510.errors == null ? null : _r510.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_20_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r526 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r526); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r524 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r524.AlanOzellikleri(alan_r296.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ng-select", 240, 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template_ng_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r526); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r527.islemyap(alan_r296.formindex, alan_r296.alanadi); })("ngModelChange", function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r526); var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r291[alan_r296.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_20_small_6_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r522 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r296.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r317.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r296.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](9, _c6, (_r522.errors == null ? null : _r522.errors.required) && alan_r296.zorunlu === "True", !_r522.invalid && alan_r296.zorunlu === "True", alan_r296.zorunlu === "True"))("items", ctx_r317.cities[alan_r296.alan_index])("closeOnSelect", true)("name", alan_r296.alanadi)("ngModel", veriler_r291[alan_r296.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r522.errors == null ? null : _r522.errors.required) && alan_r296.zorunlu === "True");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template, 7, 11, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template, 7, 13, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template, 7, 11, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_4_Template, 6, 3, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template, 5, 6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template, 7, 11, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template, 5, 6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template, 5, 6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template, 2, 4, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template, 7, 11, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template, 6, 6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template, 7, 11, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template, 7, 11, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template, 7, 6, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template, 7, 4, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template, 7, 5, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template, 7, 13, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template, 7, 11, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template, 7, 11, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template, 7, 13, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](alan_r296.alanboyutu);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Combobox");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Radiobutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "File(JPG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "File(PDF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "File(PNG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Secimli");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Multiautocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "Autocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r296.verigiristuru == "FixList");
} }
function ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_div_1_Template, 21, 22, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var alan_r296 = ctx.$implicit;
    var blok_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r294.ayniblokmu(alan_r296.blokindex, blok_r61.bokindex) && ctx_r294.activeTab === blok_r61.grupadi);
} }
function ChatComponent_section_6_section_1_div_8_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_form_2_ng_container_1_Template, 22, 8, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_6_section_1_div_8_form_2_ng_container_2_Template, 2, 1, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r64.activeTab == "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r64.blokalanlari);
} }
function ChatComponent_section_6_section_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_div_8_div_1_Template, 4, 7, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_6_section_1_div_8_form_2_Template, 3, 2, "form", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r61 = ctx.$implicit;
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r61.turu === "Liste" && ctx_r51.activeTab === blok_r61.grupadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r51.formverileri);
} }
function ChatComponent_section_6_section_1_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r537 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r537); var ctx_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r536.tabloOlustur(ctx_r536.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Tablo Olu\u015Ftur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r539 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r539); var ctx_r538 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r538.eksikAlanlar(ctx_r538.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Eksik Alanlar\u0131 Olu\u015Ftur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r541 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r541); var ctx_r540 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r540.isemriformu(ctx_r540.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0130\u015F Emri Formu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r543 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r543); var ctx_r542 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r542.kalitekontrolformu(ctx_r542.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Kalite Kontrol Formu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r545 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_6_section_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r545); var ctx_r544 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r544.sipariseDonustur(ctx_r544.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Sipari\u015Fe D\u00F6n\u00FC\u015Ft\u00FCr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_6_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ul", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_6_section_1_li_3_Template, 5, 5, "li", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_6_section_1_div_8_Template, 3, 2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_6_section_1_button_10_Template, 3, 0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_6_section_1_button_11_Template, 3, 0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_6_section_1_button_12_Template, 3, 0, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_6_section_1_button_13_Template, 3, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_6_section_1_button_14_Template, 3, 0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r49.grupbasliklari);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r49.bloklar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r49.formid == "198");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r49.formid == "198");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r49.formid == "445");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r49.formid == "445");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r49.formid == "282");
} }
function ChatComponent_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_6_section_1_Template, 15, 7, "section", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.recordid != null);
} }
var _c7 = function (a0) { return { show: a0 }; };
var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(http, http2, modalService, deviceService, elRef, router, renderer, document, configService, cdr, chatService, route) {
        var _this = this;
        this.http = http;
        this.http2 = http2;
        this.modalService = modalService;
        this.deviceService = deviceService;
        this.elRef = elRef;
        this.router = router;
        this.renderer = renderer;
        this.document = document;
        this.configService = configService;
        this.cdr = cdr;
        this.chatService = chatService;
        this.route = route;
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__;
        this.avatar = "";
        this.hastasecildi = "";
        this.activeTab = "general";
        this.generalFormSubmitted = false;
        this.changePasswordFormSubmitted = false;
        this.infoFormSubmitted = false;
        this.alertVisible = true;
        this.termC = "";
        this.vActive = 'top'; // Vertical Pills
        this.active = 1; // Basic Navs
        this.kActive = 1; // Keep content
        this.disabled = true;
        this.tip1 = '';
        this.tip2 = '';
        this.tip3 = '';
        this.tip4 = '';
        this.cihazmobilmi = false;
        this.tip1_y = '';
        this.tip2_y = '';
        this.tip3_y = '';
        this.tip4_y = '';
        this.secilendis = '';
        this.secilenhasta = "";
        this.formid = 785;
        this.tabs = [1, 2, 3, 4, 5];
        this.counter = this.tabs.length + 1;
        this.cities = [];
        this.sutunlars = [];
        this.satirlar = [];
        this.grupbasliklari = [];
        this.toplammaliyet = 0;
        this.birimmaliyet = 0;
        this.coklusecim = true;
        this.brfiyatcarp = true;
        this.cities2 = [
            { id: 1, name: 'Vilnius' },
            { id: 2, name: 'Kaunas' },
            { id: 3, name: 'Pavilnys', disabled: true },
            { id: 4, name: 'Pabradė' },
            { id: 5, name: 'Klaipėda' }
        ];
        // column header
        this.columns = [
            { name: 'Name', prop: 'full_name' },
            { name: 'Email', prop: 'email' },
            { name: 'Age', prop: 'age' },
            { name: 'Salary', prop: 'salary' }
        ];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.ColumnMode;
        this.SERVER_URL = localStorage.getItem('url');
        // default
        this.swiperDefaultConfig = {};
        // navigation
        this.swiperNavigationConfig = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // pagination
        this.swiperPaginationConfig = {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // progress
        this.swiperProgressConfig = {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // multiple
        this.swiperMultipleConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // multi row
        this.swiperMultiRowConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // centered slides option-1
        this.swiperCenterOpt1Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slideToClickedSlide: true
        };
        // centered slides option-2
        this.swiperCenterOpt2Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
        };
        // fade effect
        this.swiperFadeEffectConfig = {
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // cube effect
        this.swiperCubeEffectConfig = {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // coverflow effect
        this.swiperCoverflowEffectConfig = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // autoplay
        this.swiperAutoplayConfig = {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // parallax
        this.swiperParallaxConfig = {
            speed: 600,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // lazy loading
        this.swiperLazyLoadingConfig = {
            // Enable lazy loading
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // Responsive Breakpoints
        this.swiperResponsiveBreakpointsConfig = {
            slidesPerView: 5,
            spaceBetween: 50,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        };
        this.userroles = localStorage.getItem('unvani');
        this.expanded = {};
        this.chats = [];
        this.cet = [];
        this.disler = [];
        this.disler2 = [];
        this.usersChat = [];
        this.newMessage = "";
        this.searchQuery = '';
        this.placement = "bottom-right";
        this.isContentOverlay = false;
        this.userid = localStorage.getItem('userid');
        this.clasim = 'chat-sidebar';
        this.config = {};
        this.urlid = this.route.snapshot.paramMap.get('id');
        this.messages = new Array();
        this.item = 0;
        this.leftChat = false;
        this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=saticilarigetir&userindeks=" + this.userid;
        this.http.get(this.users).subscribe(function (data) {
            _this.usersChat = data;
            if (_this.urlid != null) {
                var filterData = data.filter(function (a) { return a.cariindex == _this.urlid; });
                _this.viewChat(filterData, _this.urlid);
                _this.activeChatUser = filterData[0].caritanimi;
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
    ChatComponent.prototype.tedavilerigetir = function (tedavigrubu) {
        this.secilengrup = tedavigrubu;
        this.secilentedavi = '';
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=692&tedavigrubu=" + tedavigrubu + '&fiyatgrubu=' + this.fiyatgrubu;
        this.http.get(periocek).subscribe(function (data) {
        });
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cihazmobilmi = this.deviceService.isMobile();
        if (this.cihazmobilmi == true) {
            this.clasim = '';
        }
        this.islemtarihi = moment__WEBPACK_IMPORTED_MODULE_1__().format("Y-M-d");
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=737";
        this.http.get(periocek).subscribe(function (data) {
        });
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=698";
        this.http.get(periocek).subscribe(function (data) {
            _this.dishekimleri = data;
        });
        this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=saticilarigetir&userindeks=" + this.userid;
        this.http.get(this.users).subscribe(function (data) {
            _this.usersChat = data;
            _this.cdr.markForCheck();
        });
        if (localStorage.getItem('secilenhasta') !== '') {
            var id = localStorage.getItem('secilenhasta');
            periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=saticibakiyecek&saticiid=" + id + "&type=Alt";
            this.http.get(periocek).subscribe(function (data) {
                _this.bakiyeler = data;
                for (var i = 0; i < _this.bakiyeler.length; i++) {
                    _this.bakiyeler[i].bakiyesi = _this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1;
                    if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 < 0) {
                        _this.bakiyeler[i].durumum = 'Borçlu';
                    }
                    if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 > 0) {
                        _this.bakiyeler[i].durumum = 'Alacaklı';
                    }
                    if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 === 0) {
                        _this.bakiyeler[i].durumum = 'Temiz';
                    }
                }
            });
            this.hastasecildi = id;
            this.secilenhasta = localStorage.getItem('secilenhastaadi');
            this.fiyatgrubu = 'TDB';
            var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Üst";
            this.http.get(periocek).subscribe(function (data) {
                _this.disler = data;
            });
            periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Alt";
            this.http.get(periocek).subscribe(function (data) {
                _this.disler2 = data;
            });
            localStorage.setItem('secilenform', 'hasta-hesap-karti');
            this.searchQuery = '';
            this.hesapkarti(id);
            this.secilenform = localStorage.getItem('secilenform');
            this.aliciid = id;
        }
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
    ChatComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ChatComponent.prototype.hastaara = function () {
        var _this = this;
        if (this.searchQuery.length >= 3) {
            this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=saticilarigetir&userindeks=" + this.userid + "&filtre=" + this.searchQuery;
            this.http.get(this.users).subscribe(function (data) {
                _this.usersChat = data;
                _this.cdr.markForCheck();
            });
        }
    };
    ChatComponent.prototype.baslikkontrol = function (grupadi) {
        if (grupadi == '') {
            return 'Genel Bilgiler';
        }
        if (grupadi != '') {
            return grupadi;
        }
    };
    ChatComponent.prototype.ayniblokmu = function (s1, s2) {
        if (s1 === s2) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatComponent.prototype.hesapkarti = function (id) {
        var _this = this;
        this.formid = '785';
        localStorage.setItem('recordid', id);
        this.recordid = id;
        this.secilenform = localStorage.getItem('secilenform');
        // this.formtanimi = localStorage.getItem('formtanimi');
        // this.formid = localStorage.getItem('formid');
        // this.recordid = localStorage.getItem('recordid');
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formverileri&formid=" + this.formid + "&kayitid=" + this.recordid;
        console.log(this.SERVER_URL);
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.formverileri = data;
            var firmaid = "";
            var formverisi;
            _this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'musteri_adi') {
                        firmaid = item[key];
                    }
                });
            });
            _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;
            _this.http.get(_this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
                }
            });
        });
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.blokalanlari = data;
            for (var i = 0; i < _this.formverileri.length; i++) {
                for (var x = 0; x < _this.blokalanlari.length; x++) {
                    if (_this.blokalanlari[x].alanturu == 'Dosya') {
                        _this.formverileri[i][_this.blokalanlari[x].alanadi] = _this.degistir(_this.formverileri[i][_this.blokalanlari[x].alanadi]);
                    }
                }
            }
            for (var i = 0; i < _this.blokalanlari.length; i++) {
                if (_this.blokalanlari[i].verigiristuru == 'Secimli') {
                    var splitted = _this.blokalanlari[i].degerleri.split(";");
                    var splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    var cities_psh = [];
                    for (var k = 0; k < splitted2.length; k++) {
                        cities_psh.push({ id: splitted[k], name: splitted2[k], field: _this.blokalanlari[i].alanadi });
                    }
                    _this.cities[_this.blokalanlari[i].alan_index] = cities_psh;
                    var verisi = _this.formverileri[0][_this.blokalanlari[i].alanadi];
                    if (verisi != '') {
                        var strArr = verisi.toString().split(",");
                        _this.formverileri[0][_this.blokalanlari[i].alanadi] = strArr;
                    }
                }
                if (_this.blokalanlari[i].verigiristuru == 'Radiobutton' || _this.blokalanlari[i].verigiristuru == 'FixList' || _this.blokalanlari[i].verigiristuru == 'Combobox') {
                    var splitted;
                    var splitted2;
                    if (_this.blokalanlari[i].alan_index != '1994' && _this.blokalanlari[i].alan_index != '10009') {
                        splitted = _this.blokalanlari[i].degerleri.split(";");
                        splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    }
                    if (_this.blokalanlari[i].alan_index == '1994' && _this.blokalanlari[i].alan_index != '10009') {
                        splitted = _this.blokalanlari[i].degerleri.split("|");
                        splitted2 = _this.blokalanlari[i].etiketleri.split("|");
                    }
                    if (_this.blokalanlari[i].alan_index == '10009') {
                        splitted = _this.blokalanlari[i].degerleri.split(";");
                        splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    }
                    if (_this.blokalanlari[i].keyfield == 'index_malzemeler' && _this.blokalanlari[i].alan_index != '10009') {
                        splitted = localStorage.getItem('degerleri').split(";");
                        splitted2 = localStorage.getItem('etiketleri').split(";");
                    }
                    var cities_psh = [];
                    for (var k = 0; k < splitted2.length; k++) {
                        cities_psh.push({ id: splitted[k], name: splitted2[k], field: _this.blokalanlari[i].alanadi });
                    }
                    _this.cities[_this.blokalanlari[i].alan_index] = cities_psh;
                }
            }
            _this.cdr.markForCheck();
        });
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.bloklar = data;
            var songrup;
            var artim = 0;
            _this.grupbasliklari = [];
            var verialanlari;
            for (var i = 0; i < _this.bloklar.length; i++) {
                if (songrup != _this.bloklar[i].grupadi) {
                    if (artim == 0) {
                        _this.activeTab = _this.bloklar[i].grupadi;
                    }
                    _this.grupbasliklari.push({ id: 'blok' + artim, name: _this.bloklar[i].grupadi });
                    songrup = _this.bloklar[i].grupadi;
                    artim++;
                }
                var masterfield = "";
                var detailfield = "";
                var blokindex = "";
                var blogum;
                if (_this.bloklar[i].turu == 'Liste') {
                    _this.tabloyenile(_this.formid, _this.bloklar[i].bokindex);
                }
                //       if (this.bloklar[i].turu=='Liste')
                //       {
                //         blogum=this.bloklar[i];
                //        blokindex=this.bloklar[i].bokindex;
                //         masterfield=blogum.masterfield;
                //         detailfield=blogum.detailfield;
                //         //tablo alanları çekilip diziye aktarılıyor
                //         this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid="+blogum.bagliformindex+"&turu=sorgu";
                //         this.http.get<any>(this.SERVER_URL).subscribe(data2 => {
                // verialanlari=data2;
                //           var cities_psh2:Array<{id: string, name: string}> = []; 
                //           cities_psh2=[];
                //           for(var j=0;j<verialanlari.length;j++)
                //           {
                //             cities_psh2.push({ id: verialanlari[j].Name, name: verialanlari[j].prop });
                //           }
                //         this.sutunlars[blokindex]=cities_psh2;
                //         this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid="+blogum.bagliformindex+"&turu=sorgu";
                //         this.http.get<any>(this.SERVER_URL).subscribe(data => {
                //           this.formbilgileri=data;
                //           if (this.formbilgileri.length>0)
                //           {
                //             for(var t=0;t<this.formbilgileri.length;t++)
                //             {
                //               this.sutunlar=this.formbilgileri[t].sutunlar;
                //       //formdatası alınıyor
                //     var mastervalue="";
                //     var deger:any;
                //       for (var r=0;r<this.formverileri.length;r++)
                //       {
                //         deger=this.formverileri[0];
                //         mastervalue=deger[masterfield];
                //         this.formid_alt=blogum.bagliformindex;
                // this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+blogum.bagliformindex+"&sutunlar="+this.formbilgileri[t].sutunlar+"&blokindex="+blogum.bokindex+"&recordid="+this.recordid+"&kayitformid="+this.formid;
                //   this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {
                //     this.satirlar[blogum.bokindex]=data2;
                //   });
                //   this.cdr.markForCheck();
                //         //tablo verileri çekilip diziye aktarılıyor
                //       }
                //     }
                //   }
                //     });
                //   });
                //       }
            }
        });
        var durum = this;
        //  eğer bunu kapatırsan edit record dediğinde alt tablo olanların verileri ve liste alanları gelmiyor.
        setTimeout(function () {
            for (var i = 0; i < durum.bloklar.length; i++) {
                //  durum.tabloyenile(this.formid,durum.bloklar[i].bokindex);
            }
        }, 1000);
    };
    ChatComponent.prototype.tabloyenile = function (formids, blokid) {
        var _this = this;
        var verialanlari;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.bloklar_y = data;
            for (var i = 0; i < _this.bloklar_y.length; i++) {
                if (_this.bloklar_y[i].bokindex == blokid || blokid == '') {
                    var masterfield = "";
                    var detailfield = "";
                    var blokindex = "";
                    var blogum;
                    if (_this.bloklar_y[i].turu == 'Liste') {
                        blogum = _this.bloklar_y[i];
                        blokindex = _this.bloklar_y[i].bokindex;
                        masterfield = blogum[masterfield];
                        detailfield = blogum[detailfield];
                        //tablo alanları çekilip diziye aktarılıyor
                        _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + blogum.bagliformindex + "&turu=sorgu";
                        _this.http.get(_this.SERVER_URL).subscribe(function (data2) {
                            verialanlari = data2;
                            var cities_psh2 = [];
                            cities_psh2 = [];
                            for (var j = 0; j < verialanlari.length; j++) {
                                cities_psh2.push({ id: verialanlari[j].Name, name: verialanlari[j].prop });
                            }
                            _this.sutunlars[blogum.bokindex] = cities_psh2;
                            _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + blogum.bagliformindex + "&turu=sorgu";
                            _this.http.get(_this.SERVER_URL).subscribe(function (data) {
                                _this.formbilgileri = data;
                                if (_this.formbilgileri.length > 0) {
                                    for (var t = 0; t < _this.formbilgileri.length; t++) {
                                        _this.sutunlar = _this.formbilgileri[t].sutunlar;
                                        //formdatası alınıyor
                                        var mastervalue = "";
                                        var deger;
                                        for (var r = 0; r < _this.formverileri.length; r++) {
                                            deger = _this.formverileri[0];
                                            mastervalue = deger[masterfield];
                                            _this.formid_alt = blogum.bagliformindex;
                                            _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + blogum.bagliformindex + "&sutunlar=" + _this.formbilgileri[t].sutunlar + "&blokindex=" + blogum.bokindex + "&recordid=" + _this.recordid + "&kayitformid=" + _this.formid;
                                            _this.http2.get(_this.SERVER_URL).subscribe(function (data2) {
                                                _this.satirlar[blogum.bokindex] = data2;
                                                _this.cdr.markForCheck();
                                            });
                                            //tablo verileri çekilip diziye aktarılıyor
                                        }
                                    }
                                }
                            });
                        });
                    }
                }
            }
        });
        if (blokid == '1213') {
            this.tabloyenile(formids, '1214');
        }
        this.cdr.markForCheck();
    };
    ChatComponent.prototype.degistir = function (filename) {
        if (filename != '') {
            return localStorage.getItem('url') + filename;
        }
        else {
            return localStorage.getItem('url') + 'no-photo-available.png';
        }
    };
    ChatComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
        this.cdr.markForCheck();
    };
    ChatComponent.prototype.hastakarti = function () {
        localStorage.setItem('secilenform', 'satici-firmalar');
        this.router.navigate(['/editrecordform/' + this.recordid + '/729/Satıcılar/']);
    };
    ChatComponent.prototype.randevuver = function () {
        localStorage.setItem('secilenrandevuhastasi', this.recordid);
        this.router.navigate(['/dashboard/dashboard2']);
    };
    ChatComponent.prototype.yenihasta = function () {
        localStorage.setItem('secilenform', 'hasta-kayitlari');
        this.router.navigate(['/newrecordform/714/Müşteri Kayıtları/']);
    };
    ChatComponent.prototype.listeyedon = function () {
        this.recordid = null;
        this.secilengrup = null;
    };
    ChatComponent.prototype.doktorsec = function (id) {
        var secilidisler = '';
        var dissayisi = 0;
        if (this.secilentedavi == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                icon: "error",
                title: 'İşlem seçimi yapılmadı',
                text: 'İşlem atayabilmek için sol menüden yapılacak işlemin seçilmiş olması gereklidir',
                customClass: {
                    confirmButton: 'btn btn-danger'
                },
            });
            setTimeout(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().close();
            }, 2000);
        }
        else {
            var islemtanimi = this.secilentedavi;
            var tutar = 0;
            localStorage.setItem('secilentedavi', this.secilentedavi);
            localStorage.setItem('islemiyapan', id);
            this.satirekle('723', 'cariindex', '1668');
        }
    };
    ChatComponent.prototype.onecikar_gerial = function (id) {
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Öne Çıkar Geri Al',
            text: "Tedavi normal sırasına konulsun mu?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2F8BE6',
            cancelButtonColor: '#F55252',
            confirmButtonText: 'Evet Öne Çıkarma',
            cancelButtonText: 'Vazgeç',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            },
            buttonsStyling: false,
        }).then(function (result) {
            if (result.value) {
                durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=onecikar_gerial&id=" + id;
                durum.http.get(durum.SERVER_URL).subscribe(function (data) {
                });
            }
        });
    };
    ChatComponent.prototype.onecikar = function (id) {
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Öne Çıkarma',
            text: "Tedavi öne çıkarılsın mı?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2F8BE6',
            cancelButtonColor: '#F55252',
            confirmButtonText: 'Evet Öne Çıkar',
            cancelButtonText: 'Vazgeç',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            },
            buttonsStyling: false,
        }).then(function (result) {
            if (result.value) {
                durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=onecikar&id=" + id;
                durum.http.get(durum.SERVER_URL).subscribe(function (data) {
                });
            }
        });
    };
    ChatComponent.prototype.secimitemizle = function () {
        for (var i = 0; i < this.disler.length; i++) {
            this.disler[i].isActiveChat = false;
        }
        for (var i = 0; i < this.disler2.length; i++) {
            this.disler2[i].isActiveChat = false;
        }
    };
    ChatComponent.prototype.dissec = function (chats, disno) {
        if (this.coklusecim != true) {
            for (var i = 0; i < this.disler.length; i++) {
                this.disler[i].isActiveChat = false;
            }
            for (var i = 0; i < this.disler2.length; i++) {
                this.disler2[i].isActiveChat = false;
            }
        }
        if (chats.isActiveChat == true) {
            chats.isActiveChat = false;
        }
        else {
            chats.isActiveChat = true;
        }
    };
    ChatComponent.prototype.editrecord = function (id, formids, blokid) {
        // localStorage.setItem('rowformid',formids);
        // localStorage.setItem('rowrecordid', id);
        var _this = this;
        var modalSat = this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_3__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
        modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formids, rowrecordid: id, formtanimi: '', subformid: '' };
        modalSat.result.then(function (result) {
            if (result == 'Yenile') {
                _this.tabloyenile(formids, blokid);
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ChatComponent.prototype.satirekle = function (formids, masterfield, blokid) {
        var _this = this;
        this.tabloyenile(this.formid, blokid);
        // localStorage.setItem('rowformid', formids);
        // localStorage.setItem('rowrecordid', "");
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.donenveri = data;
            for (var i = 0; i < _this.donenveri.length; i++) {
                // localStorage.setItem('mastervalue', this.donenveri[i].mastervalue);
                var msv = _this.donenveri[i].mastervalue;
            }
            var modalSat = _this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_3__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
            modalSat.componentInstance.Modaldata = { mastervalue: msv, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };
            modalSat.result.then(function (result) {
                if (result == 'Yenile') {
                    _this.tabloyenile(formids, blokid);
                }
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        });
    };
    ChatComponent.prototype.evetsil = function (id, d) {
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + d + "&recordid=" + id + "&userid=" + localStorage.getItem('userid');
        console.log(this.SERVER_URL);
        this.http.get(this.SERVER_URL).subscribe(function (data) {
        });
    };
    ChatComponent.prototype.deleterecord = function (id, formids, blokid) {
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Kayıt Silinsin mi?',
            text: "Değişiklik geri alınamayacaktır!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2F8BE6',
            cancelButtonColor: '#F55252',
            confirmButtonText: 'Evet Sil',
            cancelButtonText: 'İptal',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            },
            buttonsStyling: false,
        }).then(function (result) {
            if (result.value) {
                durum.evetsil(id, formids);
                durum.tabloyenile(formids, blokid);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    icon: "success",
                    title: 'Silme işlemi başarılı!',
                    text: 'Seçilen kayıt silindi',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                });
                setTimeout(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().close();
                }, 1000);
            }
        });
    };
    ChatComponent.prototype.tedavisec = function (chats, id) {
        for (var i = 0; i < this.tedaviler.length; i++) {
            this.tedaviler[i].isActiveChat = false;
        }
        this.secilentedavi = chats.hizmettanimi;
        chats.isActiveChat = true;
        this.secilentutar = chats.fiyat;
        this.secilenbirim = chats.fiyatbirimi;
    };
    ChatComponent.prototype.viewChat = function (chats, id) {
        var _this = this;
        this.hastasecildi = id;
        this.secilenhasta = chats.caritanimi;
        this.fiyatgrubu = chats.fiyatgrubu;
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Üst";
        this.http.get(periocek).subscribe(function (data) {
            _this.disler = data;
        });
        periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Alt";
        this.http.get(periocek).subscribe(function (data) {
            _this.disler2 = data;
        });
        periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=saticibakiyecek&saticiid=" + id + "&type=Alt";
        this.http.get(periocek).subscribe(function (data) {
            _this.bakiyeler = data;
            for (var i = 0; i < _this.bakiyeler.length; i++) {
                _this.bakiyeler[i].bakiyesi = _this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1;
                if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 < 0) {
                    _this.bakiyeler[i].durumum = 'Borçlu';
                }
                if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 > 0) {
                    _this.bakiyeler[i].durumum = 'Alacaklı';
                }
                if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 === 0) {
                    _this.bakiyeler[i].durumum = 'Temiz';
                }
            }
        });
        localStorage.setItem('secilenform', 'hasta-hesap-karti');
        this.searchQuery = '';
        this.hesapkarti(id);
        this.secilenform = localStorage.getItem('secilenform');
        this.usersChat.forEach(function (chat) {
            if (chats.user_indeks == chats.cariindex) {
                if (id == "") {
                    _this.aliciid = chats.cariindex;
                }
                else {
                    _this.aliciid = id;
                }
                chat.isActiveChat = false;
            }
        });
        for (var i = 0; i < this.usersChat.length; i++) {
            this.usersChat[i].isActiveChat = false;
        }
        chats.isActiveChat = true;
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
        this.activeChatUser = chats.caritanimi;
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
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_carihesapkarti_service__WEBPACK_IMPORTED_MODULE_0__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute)); };
    ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-carihesapkarti"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_14__.SwiperDirective, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.tableResponsive = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_carihesapkarti_service__WEBPACK_IMPORTED_MODULE_0__.ChatService])], decls: 7, vars: 7, consts: [[1, "chat-application"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [3, "perfectScrollbar", "class", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "chat-name2 p-2", 4, "ngIf"], ["class", "chat-app-window2 position-relative", "style", "background-color: white;height:fit-content !important", 3, "perfectScrollbar", 4, "ngIf"], [3, "perfectScrollbar"], ["chatSidebar", ""], [1, "sidebar-close-icon", "d-md-none", 3, "click"], [1, "ft-x"], [1, "chat-sidebar-content"], [1, "chat-fixed-search", "py-2", "px-3", "my-1"], ["action", "javascript:;"], [1, "position-relative", "has-icon-left"], ["placeholder", "Hesap Kart\u0131 i\u00E7in Sat\u0131c\u0131 aray\u0131n", "id", "timesheetinput1", "name", "employeename", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "form-control-position"], [1, "ft-user"], [1, "m-0"], ["id", "users-list", 1, "list-group"], [1, "users-list-padding", "position-relative"], [4, "ngIf"], ["class", "list-group-item ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "ngClass", "click"], [1, "media", "chat-list-text", "py-1", 3, "ngClass"], [1, "avatar", "avatar-md", "mr-2"], ["alt", "Avatar", 3, "src"], [1, "media-body"], [1, "list-group-item-heading", "mb-1"], [1, "list-group-item-text", "chat-user-list-text", "m-0"], [1, "float-right", "primary"], ["class", "font-medium-1 icon-pin", 4, "ngIf"], ["class", "font-medium-1 icon-volume-off mr-1", 4, "ngIf"], [1, "chat-list-text", "font-small-2", "float-right", "chat-time"], [1, "chat-list-text", "font-small-2", "float-left", "chat-time"], [1, "font-medium-1", "icon-pin"], [1, "font-medium-1", "icon-volume-off", "mr-1"], [1, "media", "chat-list-text", "py-1", 2, "border", "1px"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "badge", "bg-light-primary"], [1, "ft-star", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "ft-star-on", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "row"], [1, "col-xl-3", "col-lg-6", "col-6"], [1, "card", "card-inverse", "bg-warning"], [1, "card-content"], [1, "card-body"], [1, "media"], [1, "media-body", "text-left"], [1, "card-text"], [1, "media-right", "align-self-center"], [1, "ft-briefcase", "font-large-1", "float-right"], [1, "card", "card-inverse", "bg-success"], [1, "ft-user", "font-large-1", "float-right"], [1, "card", "card-inverse", "bg-danger"], [1, "ft-pie-chart", "font-large-1", "float-right"], [1, "card", "card-inverse", "bg-primary"], [1, "ft-life-buoy", "font-large-1", "float-right"], [1, "chat-name2", "p-2"], ["class", "d-flex justify-content-between mb-2", 4, "ngIf"], [1, "media", "p-1"], [1, "chat-app-sidebar-toggle", "ft-menu", "font-medium-4", "mr-3", "d-block", "d-md-none", 3, "click"], [1, "position-relative", "float-right"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block", 3, "placement"], ["id", "chatOptions", "ngbDropdownToggle", "", 1, "ft-more-vertical-", "mt-1", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "chatOptions"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], [1, "ft-info", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "ft-menu", "danger", "cursor-pointer", 3, "click"], [1, "ft-briefcase", "font-large-2", "float-right"], [1, "ft-user", "font-large-2", "float-right"], [1, "ft-pie-chart", "font-large-2", "float-right"], [1, "ft-life-buoy", "font-large-2", "float-right"], ["type", "button", 1, "btn", "btn-xs", "btn-danger", "mr-2", "mb-1", 2, "font-size", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-success", "mr-2", "mb-1", 2, "font-size", "10px", 3, "click"], [1, "chat-app-window2", "position-relative", 2, "background-color", "white", "height", "fit-content !important", 3, "perfectScrollbar"], ["id", "basic-hidden-label-form-layouts", "style", "margin-top:10px;margin-left: 13px;", 4, "ngIf"], ["id", "basic-hidden-label-form-layouts", 2, "margin-top", "10px", "margin-left", "13px"], [1, "row", "match-height"], ["id", "myTab", "role", "tablist", 1, "justify-content-start", "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-12", 2, "margin-top", "-5px", "text-align", "left"], [1, "card"], [4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "flex-sm-row", "flex-column", "justify-content-end"], ["type", "button", "class", "btn btn-info mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning btn-sm mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-2", 3, "click", 4, "ngIf"], [1, "nav-item"], ["href", "javascript:;", "data-toggle", "tab", "role", "tab", "aria-controls", "general", "aria-selected", "true", 1, "nav-link", 3, "ngClass", "id", "click"], [1, "ft-settings", "align-middle"], [1, "align-middle"], [3, "class", "id", "display", 4, "ngIf"], [3, "id"], ["id", "list"], ["class", "row match-height", 4, "ngIf"], ["id", "ngx-datatable-filter", 4, "ngIf"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "card-header"], [1, "card-title"], [1, ""], [1, "form-group", "form-inline"], ["type", "text", "name", "termB", "placeholder", "arama", 1, "form-control", "ml-2", "mt-2", 3, "ngModel", "ngModelChange"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-info", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-plus", "mr-1"], ["type", "button", "class", "btn btn-outline-success mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-warning mr-2 mb-1", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-dark mr-2 mb-1", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-info mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-cog"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-list-alt"], ["type", "button", 1, "btn", "btn-outline-warning", "mr-2", "mb-1", 3, "click"], [1, "btn", "btn-outline-dark", "mr-2", "mb-1", 3, "click"], [1, "btn", "btn-outline-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-barcode"], ["type", "button", "placement", "top", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "ft-file"], [1, "list-group-item"], [1, "float-right"], ["type", "button", "class", "btn btn-danger mr-1 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-info mr-1 mb-1", 3, "click", 4, "ngIf"], [2, "font-size", "10px", "font-style", "italic"], ["type", "button", 1, "btn", "btn-danger", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-trash-o"], ["type", "button", 1, "btn", "btn-outline-info", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-edit"], ["id", "ngx-datatable-filter"], ["id", "swiper-coverflow", 4, "ngIf"], [1, "col-12"], ["mymodal", ""], [1, "form-group"], ["for", "ngx-filter-ref"], ["type", "text", "placeholder", "Aranacak Kelime", 1, "form-control", "ml-2", "mt-2", 3, "name", "id", "ngModel", "ngModelChange"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows", "scrollbarH"], [3, "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Eylemler", 3, "width", 4, "ngIf"], ["id", "swiper-coverflow"], [1, "swiper-coverflow", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-slide"], ["alt", "banner", 1, "img-fluid", 3, "src"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", "", "method", "post", "name", "frmExcelImport_genel", "id", "frmExcelImport_genel", "enctype", "multipart/form-data", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["action", "", "method", "post", "name", "frmExcelImport_genel", "id", "frmExcelImport_genel", "enctype", "multipart/form-data"], [1, "col-md-8"], ["type", "file", "name", "file", "id", "file", "accept", ".xls,.xlsx"], ["type", "hidden", "name", "menu_id", "id", "menu_id", 3, "value"], ["type", "hidden", "name", "recordid", "id", "recordid", 3, "value"], ["type", "hidden", "name", "detailfield", "id", "detailfield", 3, "value"], [1, "col-md-4", "text-center"], ["type", "submit", "id", "submit", "name", "import", 1, "btn", "btn-outline-secondary"], [3, "name", "prop"], ["ngx-datatable-cell-template", ""], ["buttonsTemplate", ""], ["style", "text-align: center;", 4, "ngIf"], [2, "text-align", "center"], ["type", "checkbox", "checked", "", 1, ""], ["type", "checkbox", 1, ""], ["name", "Eylemler", 3, "width"], [1, "col-12", 2, "width", "240px"], ["type", "button", "placement", "top", "title", "Y\u00FCzde Gir", "class", "btn btn-primary  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-1 mb-1", "title", "", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-1 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-warning mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "ngbTooltip", "\u00DCretim Y\u00F6ntemleri Git", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "VDF Formuna Git", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Maliyet Analizi Git", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Kart\u0131na Git", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Y\u00FCzde Gir", 1, "btn", "btn-primary", "mr-1", "mb-1", 3, "click"], [1, "ft-percent"], ["type", "button", "title", "", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "icon-share-alt"], ["type", "button", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-check"], ["type", "button", "placement", "top", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], ["type", "button", "placement", "top", "ngbTooltip", "\u00DCretim Y\u00F6ntemleri Git", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "ft-box"], [1, "ft-book"], ["type", "button", "placement", "top", "title", "VDF Formuna Git", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], ["type", "button", "placement", "top", "title", "Maliyet Analizi Git", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], [1, "ft-disc"], ["type", "button", "placement", "top", "title", "Kart\u0131na Git", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], ["ngx-datatable-footer-template", ""], [1, "form-row", "col-12"], [1, "col-md-3"], [1, "form-group", "mb-2"], ["for", "basic-form-1"], ["type", "text", "readonly", "", "id", "basic-form-1", 1, "form-control", 3, "name", "value"], [3, "class", 4, "ngIf"], ["class", "form-group mb-2 ", 4, "ngIf"], ["class", "form-group mb-2", 4, "ngIf"], ["class", "input-group mb-2 custom-control custom-radio", 4, "ngIf"], ["class", "form-group mb-2", "style", "display: none;", 4, "ngIf"], [1, "ft-edit-2", 2, "font-size", "15px", 3, "hidden", "click"], ["type", "text", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["required", "ngModel"], ["class", "form-text text-muted danger", 4, "ngIf"], [1, "form-text", "text-muted", "danger"], ["required", "", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "id", "ngClass", "items", "closeOnSelect", "ngModel", "name", "change", "ngModelChange"], ["type", "color", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], [1, "input-group", "mb-2", "custom-control", "custom-radio"], [1, "col-md-12", 2, "white-space", "nowrap"], ["class", "radio radio-primary radio-sm d-inline-block mr-2 mb-1", 4, "ngFor", "ngForOf"], [1, "radio", "radio-primary", "radio-sm", "d-inline-block", "mr-2", "mb-1"], ["type", "radio", "ngModel", "", 1, "", 3, "value", "ngModel", "id", "name", "ngModelChange"], [1, "", 3, "for"], ["type", "checkbox", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "time", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "text", "readonly", "", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], [1, "form-group", "mb-2", 2, "display", "none"], ["type", "hidden", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "password", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], [1, "form-control", 3, "id", "ngModel", "name", "ngModelChange"], ["type", "date", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "datetime-local", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["alt", "", "height", "auto", "width", "100%", 1, "rounded", "mr-3", 3, "src"], ["type", "file", 1, "file-upload", 3, "id", "ngModel", "name", "ngModelChange", "change"], ["src", "../../assets/img/pdf-photo.png", "alt", "", "height", "auto", "width", "50%", 1, "rounded", "mr-3", 3, "click"], ["type", "file", 1, "file-upload", 3, "id", "name", "change"], ["type", "file", "id", "select-files", "hidden", "", 3, "ngModel", "name", "ngModelChange"], ["required", "", "multiple", "true", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "ngClass", "items", "id", "closeOnSelect", "name", "ngModel", "ngModelChange"], ["required", "", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "id", "ngClass", "items", "closeOnSelect", "name", "ngModel", "change", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", "mr-2", 3, "click"], [1, "ft-check-square", "mr-1"], ["type", "button", 1, "btn", "btn-warning", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "mr-2", 3, "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_1_listener() { return ctx.onContentOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_div_3_Template, 16, 6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_div_4_Template, 56, 7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_div_5_Template, 14, 5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_6_Template, 2, 1, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c7, ctx.isContentOverlay));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid == null);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null && ctx.cihazmobilmi == true);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_14__.SwiperDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableFooterDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableFooterTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__.SearchPipe], styles: [".selecteddis[_ngcontent-%COMP%] {\n  border: 1px;\n  border-style: solid;\n}\n\n.ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-body[_ngcontent-%COMP%]   .datatable-body-row[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.datatable-row-wrapper[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: #78d1ef !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmloZXNhcGthcnRpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFFSSxxQkFBQTtBQURKOztBQUdFO0VBQ0Usb0NBQUE7QUFBSiIsImZpbGUiOiJjYXJpaGVzYXBrYXJ0aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZGRpc1xue1xuICAgIGJvcmRlcjoxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICBcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRhdGF0YWJsZS1yb3ctd3JhcHBlcjpudGgtY2hpbGQoMm4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDIwOSwgMjM5KSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"], changeDetection: 0 });
    return ChatComponent;
}());



/***/ }),

/***/ 58295:
/*!********************************************************!*\
  !*** ./src/app/carihesapkarti/carihesapkarti.model.ts ***!
  \********************************************************/
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

/***/ 15250:
/*!*********************************************************!*\
  !*** ./src/app/carihesapkarti/carihesapkarti.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatModule": function() { return /* binding */ ChatModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _carihesapkarti_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carihesapkarti.component */ 18964);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _carihesapkarti_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carihesapkarti-routing.module */ 90960);
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper/swiper.component */ 32271);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ 64400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);












var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule.ɵfac = function ChatModule_Factory(t) { return new (t || ChatModule)(); };
    ChatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ChatModule });
    ChatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                _carihesapkarti_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChatRoutingModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__.SwiperModule
            ]] });
    return ChatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_carihesapkarti_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
        _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__.CrudModalComponent,
        _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_2__.SwiperComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _carihesapkarti_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChatRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__.SwiperModule] }); })();


/***/ }),

/***/ 30489:
/*!**********************************************************!*\
  !*** ./src/app/carihesapkarti/carihesapkarti.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": function() { return /* binding */ ChatService; }
/* harmony export */ });
/* harmony import */ var _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carihesapkarti.model */ 58295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.chat1 = [
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat2 = [
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat3 = [
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat4 = [
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat5 = [
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat6 = [
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat7 = [
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _carihesapkarti_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
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
                name: "Dental Ofis",
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



/***/ }),

/***/ 64400:
/*!*******************************************************************!*\
  !*** ./src/app/carihesapkarti/crud-modal/crud-modal.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudModalComponent": function() { return /* binding */ CrudModalComponent; }
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/sweet-alerts */ 645);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









function CrudModalComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CrudModalComponent_ng_template_14_Template_input_change_1_listener() { var allRowsSelected_r6 = ctx.allRowsSelected; var selectFn_r7 = ctx.selectFn; return selectFn_r7(!allRowsSelected_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var allRowsSelected_r6 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", allRowsSelected_r6);
} }
function CrudModalComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CrudModalComponent_ng_template_15_Template_input_change_1_listener($event) { var onCheckboxChangeFn_r11 = ctx.onCheckboxChangeFn; return onCheckboxChangeFn_r11($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var isSelected_r10 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", isSelected_r10);
} }
function CrudModalComponent_ngx_datatable_column_16_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r17 = ctx.row;
    var column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r17[column_r13.Name], " ");
} }
function CrudModalComponent_ngx_datatable_column_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CrudModalComponent_ngx_datatable_column_16_ng_template_1_Template, 1, 1, "ng-template", 12, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", column_r13.prop);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("prop", column_r13.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sortable", true);
} }
function CrudModalComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.secilileriEkle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Se\u00E7ilileri Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CrudModalComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.secilileriSil(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Se\u00E7ilileri Sil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var CrudModalComponent = /** @class */ (function () {
    function CrudModalComponent(http, activeModal, formBuilder) {
        this.http = http;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.SelectionType;
        this.chkBoxSelected = [];
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__;
        // column header
        this.columns = [
            { name: 'Name', prop: 'full_name' },
            { name: 'Email', prop: 'email' },
            { name: 'Age', prop: 'age' },
            { name: 'Salary', prop: 'salary' }
        ];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.ColumnMode;
        this.tabloSecililer = [];
        this.formbasligi = "";
    }
    CrudModalComponent.prototype.onKeydownHandler = function (event) {
        if (event.key === "Escape") {
            var durum = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Form Kapatılacaktır ?',
                text: "Form kapatılacaktır. Emin misiniz ? ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F8BE6',
                cancelButtonColor: '#F55252',
                confirmButtonText: 'Evet',
                cancelButtonText: 'İptal',
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-danger ml-1'
                },
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    durum.activeModal.close();
                    setTimeout(function () {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    }, 1000);
                }
            });
        }
    };
    CrudModalComponent.prototype.customChkboxOnSelect = function (e) {
        console.log(e.selected);
        this.tabloSecililer = e.selected;
        // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    };
    CrudModalComponent.prototype.secilileriEkle = function () {
        if (this.tabloSecililer.length > 0) {
            var durum = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Seçilen Kalemler Eklensin Mi?',
                text: "Değişiklik geri alınamayacaktır!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F8BE6',
                cancelButtonColor: '#F55252',
                confirmButtonText: 'Ekle',
                cancelButtonText: 'İptal',
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-danger ml-1'
                },
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    for (var i = 0; i < durum.tabloSecililer.length; i++) {
                        var imt = durum.tabloSecililer[i].index_malzemetedarikcileri;
                        var satinalmano = durum.tabloSecililer[i].satinalmano;
                        var adet = durum.tabloSecililer[i].siparismiktari;
                        var sipariskg = durum.tabloSecililer[i].sipariskg;
                        var master = durum.recordid;
                        var insatinalma = durum.tabloSecililer[i].index_satinalma;
                        var girdikal = localStorage.getItem('url') + "angular/dataservis.php?page_id=girdikabulicerik&imt=" + imt + "&satinalno=" + satinalmano + "&adet=" + adet + "&sipariskg=" + sipariskg + "&master=" + master + "&userid=" + localStorage.getItem('userid') + "&indexsa=" + insatinalma;
                        durum.http.get(girdikal).subscribe(function (data) {
                            if (data[0].status == 'OK') {
                                durum.activeModal.close('OK');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                                    icon: "success",
                                    title: 'Ekleme Başarılı',
                                    text: 'Kalem ekleme başarılı.',
                                    customClass: {
                                        confirmButton: 'btn btn-warning'
                                    },
                                });
                            }
                        });
                    }
                    setTimeout(function () {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    }, 1000);
                }
            });
            this.chkBoxSelected = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "warning",
                title: 'Seçim Yapmanız Gerekmektedir!',
                confirmButtonText: 'Tamam',
                text: 'Silme işlemi için kayıtları seçmeniz gerekmektedir.',
                customClass: {
                    confirmButton: 'btn btn-warning'
                }
            });
        }
    };
    CrudModalComponent.prototype.secilileriSil = function () {
        if (this.tabloSecililer.length > 0) {
            var durum = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Seçilen Hareket Silinsin Mi?',
                text: "Değişiklik geri alınamayacaktır!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F8BE6',
                cancelButtonColor: '#F55252',
                confirmButtonText: 'Sil',
                cancelButtonText: 'İptal',
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-danger ml-1'
                },
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    for (var i = 0; i < durum.tabloSecililer.length; i++) {
                        var index_stokhareketleri = durum.tabloSecililer[i].index_stokhareketleri;
                        var stoksil = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=394&recordid=" + index_stokhareketleri + "&userid=" + localStorage.getItem('userid');
                        durum.http.get(stoksil).subscribe(function (data) {
                            if (data[0].status == 'OK') {
                                durum.activeModal.close('OK');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                                    icon: "success",
                                    title: 'Silme Başarılı',
                                    text: 'Rezerv silme başarılı.',
                                    customClass: {
                                        confirmButton: 'btn btn-warning'
                                    },
                                });
                            }
                        });
                    }
                    setTimeout(function () {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    }, 1000);
                }
            });
            this.chkBoxSelected = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "warning",
                title: 'Seçim Yapmanız Gerekmektedir!',
                confirmButtonText: 'Tamam',
                text: 'Silme işlemi için kayıtları seçmeniz gerekmektedir.',
                customClass: {
                    confirmButton: 'btn btn-warning'
                }
            });
        }
    };
    CrudModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var key in this.data) {
            var child = this.data[key];
            this.recordid = this.data['title'];
            this.formid = this.data['formid'];
            if (this.data['formid'] != '' && this.data['formid'] != '278') {
                this.formbasligi = this.data['formtanimi'];
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + this.formid;
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.columns = data;
                });
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + this.formid;
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.rows = data;
                });
            }
            else if (this.data['formid'] == '278') {
                this.formbasligi = 'Stok Hareketleri';
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=622";
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.columns = data;
                });
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=622&siparisid=" + this.data['title'];
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.rows = data;
                });
            }
            else {
                this.formbasligi = 'Kalemler';
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink=bekleyen-siparisler";
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.columns = data;
                });
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=608&firmaid=" + this.data['firmakodu'];
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.rows = data;
                });
            }
        }
        // this.buildItemForm(this.data);
    };
    CrudModalComponent.ɵfac = function CrudModalComponent_Factory(t) { return new (t || CrudModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
    CrudModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrudModalComponent, selectors: [["app-crud-modal"]], viewQuery: function CrudModalComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, hostBindings: function CrudModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function CrudModalComponent_keydown_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        } }, inputs: { id: "id", data: "data" }, decls: 26, vars: 18, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["id", "extended"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body", "table-responsive"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "selected", "selectionType", "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows", "scrollbarH", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [3, "sortable", "name", "prop", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-end", "d-flex"], [1, "col-md-3", "col-xl-3", "col-sm-3", "mr-2"], [1, "card", "card-danger", "box-shadow-0", "text-end"], ["type", "button", "class", "btn btn-success mr-2 mb-1", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 3, "checked", "change"], [3, "sortable", "name", "prop"], ["buttonsTemplate", ""], ["type", "button", 1, "btn", "btn-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-plus", "mr-1"]], template: function CrudModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " x ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ngx-datatable", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function CrudModalComponent_Template_ngx_datatable_select_12_listener($event) { return ctx.customChkboxOnSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ngx-datatable-column", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CrudModalComponent_ng_template_14_Template, 2, 1, "ng-template", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CrudModalComponent_ng_template_15_Template, 2, 1, "ng-template", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CrudModalComponent_ngx_datatable_column_16_Template, 3, 3, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CrudModalComponent_button_20_Template, 3, 0, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CrudModalComponent_button_21_Template, 3, 0, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_Template_button_click_24_listener() { return ctx.activeModal.close("Close click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Vazge\u00E7");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.formbasligi, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx.chkBoxSelected)("selectionType", ctx.SelectionType.multi)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tabloSecililer.length > 0 && ctx.formid != "278");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tabloSecililer.length > 0 && ctx.formid == "278");
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["[_nghost-%COMP%]     .donut1 .ct-label {\n  font-size: 4rem;\n  fill: #F77E17;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-done .ct-slice-donut {\n  stroke: #FCC173;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-label {\n  font-size: 4rem;\n  fill: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-done .ct-slice-donut {\n  stroke: #81C8F7;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-label {\n  font-size: 4rem;\n  fill: #F55252;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-done .ct-slice-donut {\n  stroke: #FCA897;\n}\n\n[_nghost-%COMP%]     .donut4 .ct-label {\n  font-size: 4rem;\n  fill: #9de63e;\n}\n\n[_nghost-%COMP%]     .donut4 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut4 .ct-done .ct-slice-donut {\n  stroke: #e9ec29;\n}\n\n.my-validation-message[_ngcontent-%COMP%]::before {\n  display: none;\n}\n\n.my-validation-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 0.4em;\n  color: #f27474;\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNydWQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6ImNydWQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDEgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZSA6IDRyZW07XHJcbiAgICBmaWxsIDogI0Y3N0UxNztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDEgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2UgOiAjRjVGNUY1O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmRvbnV0MSAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogI0ZDQzE3MztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDIgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZSA6IDRyZW07XHJcbiAgICBmaWxsIDogIzJGOEJFNjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDIgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2UgOiAjRjVGNUY1O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmRvbnV0MiAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogIzgxQzhGNztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDMgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZSA6IDRyZW07XHJcbiAgICBmaWxsIDogI0Y1NTI1MjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDMgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2UgOiAjRjVGNUY1O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmRvbnV0MyAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogI0ZDQTg5NztcclxuICB9XHJcbiAgXHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAuZG9udXQ0IC5jdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemUgOiA0cmVtO1xyXG4gICAgZmlsbCA6ICM5ZGU2M2U7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuZG9udXQ0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogI0Y1RjVGNTtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZSA6ICNlOWVjMjk7XHJcbiAgfVxyXG4gIC5teS12YWxpZGF0aW9uLW1lc3NhZ2U6OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAubXktdmFsaWRhdGlvbi1tZXNzYWdlIGkge1xyXG4gICAgbWFyZ2luOiAwIC40ZW07XHJcbiAgICBjb2xvcjogI2YyNzQ3NDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgfSJdfQ== */"] });
    return CrudModalComponent;
}());



/***/ }),

/***/ 32271:
/*!***********************************************************!*\
  !*** ./src/app/carihesapkarti/swiper/swiper.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperComponent": function() { return /* binding */ SwiperComponent; }
/* harmony export */ });
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



var SwiperComponent = /** @class */ (function () {
    function SwiperComponent() {
        // default
        this.swiperDefaultConfig = {};
        // navigation
        this.swiperNavigationConfig = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // pagination
        this.swiperPaginationConfig = {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // progress
        this.swiperProgressConfig = {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // multiple
        this.swiperMultipleConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // multi row
        this.swiperMultiRowConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // centered slides option-1
        this.swiperCenterOpt1Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slideToClickedSlide: true
        };
        // centered slides option-2
        this.swiperCenterOpt2Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
        };
        // fade effect
        this.swiperFadeEffectConfig = {
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // cube effect
        this.swiperCubeEffectConfig = {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // coverflow effect
        this.swiperCoverflowEffectConfig = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // autoplay
        this.swiperAutoplayConfig = {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // parallax
        this.swiperParallaxConfig = {
            speed: 600,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // lazy loading
        this.swiperLazyLoadingConfig = {
            // Enable lazy loading
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // Responsive Breakpoints
        this.swiperResponsiveBreakpointsConfig = {
            slidesPerView: 5,
            spaceBetween: 50,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        };
    }
    SwiperComponent.prototype.ngOnInit = function () {
    };
    SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(); };
    SwiperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwiperComponent, selectors: [["app-swiper"]], viewQuery: function SwiperComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__.SwiperDirective, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, decls: 384, vars: 14, consts: [[1, "row"], [1, "col"], [1, "content-header"], [1, "content-sub-header", "mb-1"], ["id", "swiper-default"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], [1, "swiper-default", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/img/banner/banner-1.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-2.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-4.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-13.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-7.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-navigations"], [1, "swiper-navigations", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-14.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-3.jpg", "alt", "banner", 1, "img-fluid"], [1, "swiper-button-next"], [1, "swiper-button-prev"], ["id", "swiper-pagination"], [1, "swiper-paginations", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-12.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-9.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-8.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-20.jpg", "alt", "banner", 1, "img-fluid"], [1, "swiper-pagination"], ["id", "swiper-progress"], [1, "swiper-progress", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-5.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-multiple"], [1, "swiper-multiple", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-34.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-31.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-32.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-33.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-35.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-centered-slides"], [1, "card", "bg-transparent", "shadow-none"], [1, "card-body", "py-0"], [1, "swiper-centered-slides", "swiper-container", "p-3", 3, "swiper"], [1, "swiper-slide", "rounded", "swiper-shadow"], [1, "fa", "fa-google", "font-large-1"], [1, "swiper-text", "pt-md-2", "pt-sm-1"], [1, "fa", "fa-facebook", "font-large-1"], [1, "fa", "fa-twitter", "font-large-1"], [1, "fa", "fa-instagram", "font-large-1"], ["id", "swiper-centered-slides-2"], [1, "card-body", "pt-0"], [1, "swiper-centered-slides-2", "swiper-container", "p-3", 3, "swiper"], [1, "swiper-slide", "rounded", "swiper-shadow", "py-2", "px-4", "d-flex"], [1, "fa", "fa-google", "d-flex", "align-items-center", "font-medium-3", "mr-2"], [1, "swiper-text"], [1, "fa", "fa-facebook", "d-flex", "align-items-center", "font-medium-3", "mr-2"], [1, "fa", "fa-twitter", "d-flex", "align-items-center", "font-medium-3", "mr-2"], [1, "fa", "fa-instagram", "d-flex", "align-items-center", "font-medium-3", "mr-2"], ["id", "swiper-fade-effect"], [1, "swiper-fade-effect", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-19.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-18.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-17.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-16.jpg", "alt", "banner", 1, "img-fluid"], [1, "swiper-pagination", "swiper-pagination-white"], ["id", "swiper-cube-effect"], [1, "swiper-cube-effect", "swiper-container", "mb-3", 3, "swiper"], ["src", "assets/img/banner/banner-21.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-22.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-23.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-24.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-coverflow"], [1, "swiper-coverflow", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-39.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-38.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-37.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-36.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-autoplay"], [1, "swiper-autoplay", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-10.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-11.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-parallax"], [1, "swiper-parallax", "swiper-container", 3, "swiper"], ["data-swiper-parallax", "-23%", 1, "parallax-bg"], ["src", "assets/img/banner/parallax-4.jpg", "alt", "banner", 1, "img-fluid"], ["data-swiper-parallax", "-300", 1, "title"], ["data-swiper-parallax", "-200", 1, "subtitle", "mb-1"], ["data-swiper-parallax", "-100"], [1, "font-small-2"], ["data-swiper-parallax", "-300", "data-swiper-parallax-opacity", "0", 1, "title"], ["id", "swiper-lazy"], [1, "swiper-lazy-loading", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-9.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], [1, "swiper-lazy-preloader", "swiper-lazy-preloader-white"], ["src", "assets/img/banner/banner-8.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-7.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-20.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-5.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-4.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["id", "swiper-responsive-breakpoints"], [1, "swiper-responsive-breakpoints", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-30.jpg", "alt", "banner", 1, "img-fluid"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Swiper");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Swiper is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Navigations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pagination");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Progress");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Multiple Slides Per View");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "section", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Centered Slides option-1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Getting Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Pricing & Plans");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sales Question");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Usage Guides");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "General Guide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "section", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Centered Slides option-2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Getting Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Pricing & Plans");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Sales Question");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Usage Guides");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "General Guide");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "section", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Fade Effect");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "section", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "3-D cube Effect");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "img", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "section", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "3d Effect Coverflow Effect");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "img", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "section", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Autoplay");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "img", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "section", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Parallax");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "img", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Slide 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Cake biscuit candy canes cake macaroon cheesecake gummies carrot cake. Chupa chups pastry halvah gummi bears powder. Wafer macaroon gummi bears tart souffl\u00E9 chocolate cake.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Slide 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Pie gummi bears macaroon cupcake. Dessert drag\u00E9e apple pie lollipop cake gummies lemon drops chupa chups apple pie. Ice cream sugar plum sweet roll cake candy fruitcake souffl\u00E9.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Slide 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Lemon drops oat cake marzipan cheesecake sweet. Drag\u00E9e chocolate bar gingerbread pudding tiramisu. Ice cream croissant chupa chups sesame snaps jujubes sesame snaps ice cream fruitcake.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "section", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Lazy Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "img", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "img", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "img", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "img", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "img", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "section", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Responsive Breakpoints");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "img", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "img", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "img", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "img", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperDefaultConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperNavigationConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperPaginationConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperProgressConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperMultipleConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCenterOpt1Config);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCenterOpt2Config);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperFadeEffectConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCubeEffectConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCoverflowEffectConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperAutoplayConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperParallaxConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperLazyLoadingConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperResponsiveBreakpointsConfig);
        } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__.SwiperDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2lwZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SwiperComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_carihesapkarti_carihesapkarti_module_ts.js.map