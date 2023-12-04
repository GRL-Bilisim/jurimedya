"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_inbox_inbox_module_ts"],{

/***/ 52308:
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxRoutingModule": function() { return /* binding */ InboxRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.component */ 44670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent,
        data: {
            title: 'Inbox'
        },
    }
];
var InboxRoutingModule = /** @class */ (function () {
    function InboxRoutingModule() {
    }
    InboxRoutingModule.ɵfac = function InboxRoutingModule_Factory(t) { return new (t || InboxRoutingModule)(); };
    InboxRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InboxRoutingModule });
    InboxRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return InboxRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InboxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
var routedComponents = [_inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent];


/***/ }),

/***/ 44670:
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxComponent": function() { return /* binding */ InboxComponent; }
/* harmony export */ });
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.service */ 67519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ 14075);
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ 96903);











function InboxComponent_a_121_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](mail_r7.imageText);
} }
function InboxComponent_a_121_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 104);
} if (rf & 2) {
    var mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", mail_r7.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function InboxComponent_a_121_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 105);
} }
function InboxComponent_a_121_span_17_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 108);
} }
function InboxComponent_a_121_span_17_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 109);
} }
function InboxComponent_a_121_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, InboxComponent_a_121_span_17_i_3_Template, 1, 0, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, InboxComponent_a_121_span_17_i_4_Template, 1, 0, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge mr-1 ", mail_r7.labelClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](mail_r7.labelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.isEmailImportant);
} }
function InboxComponent_a_121_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "selected-email": a0, "border-0": a1 }; };
function InboxComponent_a_121_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_a_121_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); var mail_r7 = restoredCtx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.DisplayMessage([mail_r7.mailId]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, InboxComponent_a_121_span_3_Template, 2, 1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, InboxComponent_a_121_img_4_Template, 1, 1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h6", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, InboxComponent_a_121_i_10_Template, 1, 0, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, InboxComponent_a_121_span_17_Template, 5, 6, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, InboxComponent_a_121_span_18_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mail_r7 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c0, mail_r7.mailId == ctx_r2.selectedMailId, mail_r7.mailId != ctx_r2.selectedMailId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("avatar ", mail_r7.imageClass, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !mail_r7.hasImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mail_r7.hasImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mail_r7.mailFrom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mail_r7.hasAttachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", mail_r7.isRead === false ? "email-list-text font-small-2 email-time text-bold-400" : "email-list-text font-small-2 email-time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](mail_r7.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", mail_r7.isRead === false ? "list-group-item-text text-truncate text-bold-500" : "list-group-item-text text-truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](mail_r7.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", mail_r7.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", mail_r7.hasLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !mail_r7.hasLabel);
} }
function InboxComponent_p_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "There are no messages!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InboxComponent_div_126_button_30_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_div_126_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.markAsImportant(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mark as important");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InboxComponent_div_126_button_31_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_div_126_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.markAsUnimportant(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mark as unimportant");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InboxComponent_div_126_i_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 148);
} }
function InboxComponent_div_126_i_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 149);
} }
function InboxComponent_div_126_div_48_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](messageDetail_r29.avatarText);
} }
function InboxComponent_div_126_div_48_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 104);
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", messageDetail_r29.avatarPath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function InboxComponent_div_126_div_48_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](messageDetail_r29.time);
} }
function InboxComponent_div_126_div_48_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function InboxComponent_div_126_div_48_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var attachment_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", attachment_r39.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function InboxComponent_div_126_div_48_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Attachments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, InboxComponent_div_126_div_48_div_19_div_3_Template, 2, 1, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", messageDetail_r29.attachments);
} }
var _c1 = function (a0, a1) { return { "collapsed": a0, "opened-email": a1 }; };
function InboxComponent_div_126_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_div_126_div_48_Template_a_click_2_listener() { var messageDetail_r29 = ctx.$implicit; return messageDetail_r29.collapsed = !messageDetail_r29.collapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, InboxComponent_div_126_div_48_span_5_Template, 2, 1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, InboxComponent_div_126_div_48_img_6_Template, 1, 1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h6", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, InboxComponent_div_126_div_48_span_12_Template, 2, 1, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, InboxComponent_div_126_div_48_span_13_Template, 4, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, InboxComponent_div_126_div_48_div_19_Template, 4, 1, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c1, messageDetail_r29.collapsed, !messageDetail_r29.collapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", !messageDetail_r29.collapsed)("aria-controls", messageDetail_r29.messageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("avatar ", messageDetail_r29.avatarClass, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !messageDetail_r29.hasAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", messageDetail_r29.hasAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](messageDetail_r29.mailFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("to ", messageDetail_r29.mailTo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", messageDetail_r29.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !messageDetail_r29.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", messageDetail_r29.messageId)("ngbCollapse", messageDetail_r29.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", messageDetail_r29.body, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", messageDetail_r29.hasAttachment);
} }
function InboxComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_div_126_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.OnBackToInbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Back to inbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_div_126_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r44.markAsUnread(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Mark as unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, InboxComponent_div_126_button_30_Template, 2, 0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, InboxComponent_div_126_button_31_Template, 2, 0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Add star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Add to task");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Filter mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, InboxComponent_div_126_i_46_Template, 1, 0, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, InboxComponent_div_126_i_47_Template, 1, 0, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, InboxComponent_div_126_div_48_Template, 21, 19, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placement", ctx_r5.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.message.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.message.messages);
} }
function InboxComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select a message to read");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var _c2 = function (a0) { return { show: a0 }; };
var _c3 = function (a0) { return { "active": a0 }; };
var _c4 = function (a0) { return { "show-email-content": a0 }; };
var InboxComponent = /** @class */ (function () {
    function InboxComponent(elRef, renderer, modalService, inboxService, document, configService, cdr) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.modalService = modalService;
        this.inboxService = inboxService;
        this.document = document;
        this.configService = configService;
        this.cdr = cdr;
        this.placement = "bottom-right";
        this.editorModel = [{
                attributes: {
                    font: 'roboto'
                },
                insert: 'test'
            }];
        this.config = {};
        this.searchQuery = '';
        this.activeTypeButton = "Inbox";
        this.isContentOverlay = false;
        this.isEmailSidebarShow = false;
        this.isComposeShow = false;
        this.selectedMailId = 4;
        this.isEmailImportant = false;
        this.isCollapsed = true;
        this.isCollapsed1 = false;
        this.isMessageSelected = true;
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === 'Inbox'; });
        this.message = this.inboxService.message.filter(function (message) { return message.mailId === _this.selectedMailId; })[0];
        this.markAsRead();
        this.checkEmailImportantStatus();
        this.config = this.configService.templateConf;
        this.renderer.addClass(this.document.body, "email-application");
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
    };
    InboxComponent.prototype.ngAfterViewInit = function () {
        if (this.innerWidth < 768) {
            this.isMessageSelected = false;
        }
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        this.renderer.removeClass(this.document.body, "email-application");
    };
    InboxComponent.prototype.markAsRead = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = true;
    };
    InboxComponent.prototype.markAsUnread = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = false;
    };
    InboxComponent.prototype.markAsImportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = true;
        this.isEmailImportant = true;
    };
    InboxComponent.prototype.markAsUnimportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = false;
        this.isEmailImportant = false;
    };
    InboxComponent.prototype.checkEmailImportantStatus = function () {
        var _this = this;
        var selectedEmail = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        this.isEmailImportant = selectedEmail.isImportant;
    };
    //inbox user list click event function
    InboxComponent.prototype.DisplayMessage = function (mailId) {
        this.selectedMailId = mailId;
        this.message = this.inboxService.message.filter(function (message) { return message.mailId.toString() === mailId.toString(); })[0];
        this.isMessageSelected = true;
        this.markAsRead();
        this.checkEmailImportantStatus();
    };
    //compose start
    InboxComponent.prototype.compose = function (show) {
        this.isComposeShow = show;
        this.isEmailSidebarShow = false;
        if (!show) {
            this.isContentOverlay = false;
        }
        else {
            this.isContentOverlay = true;
        }
    };
    //inbox labels click event function
    InboxComponent.prototype.GetEmailsByLabel = function (labelType) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.labelType === labelType; });
        this.activeTypeButton = labelType;
    };
    //inbox type click event function
    InboxComponent.prototype.GetEmailsByType = function (type) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === type; });
        this.activeTypeButton = type;
    };
    //inbox Starred click event function
    InboxComponent.prototype.GetStarredEmails = function () {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.isImportant === true; });
        this.activeTypeButton = 'Starred';
    };
    InboxComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.isMessageSelected = false;
        }
        if (this.innerWidth > 768) {
            this.isMessageSelected = true;
        }
    };
    InboxComponent.prototype.onListItemClick = function () {
        this.isMessageSelected = true;
    };
    InboxComponent.prototype.OnBackToInbox = function () {
        this.isMessageSelected = false;
    };
    InboxComponent.prototype.onSidebarToggle = function () {
        this.isContentOverlay = true;
        this.isEmailSidebarShow = true;
    };
    InboxComponent.prototype.onContentOverlay = function () {
        this.isContentOverlay = false;
        this.isEmailSidebarShow = false;
        this.isComposeShow = false;
    };
    InboxComponent.ɵfac = function InboxComponent_Factory(t) { return new (t || InboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_inbox_service__WEBPACK_IMPORTED_MODULE_0__.InboxService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
    InboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: InboxComponent, selectors: [["app-inbox"]], hostBindings: function InboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function InboxComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_inbox_service__WEBPACK_IMPORTED_MODULE_0__.InboxService])], decls: 181, vars: 67, consts: [[1, "email-application", "overflow-hidden"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [1, "email-app-sidebar", "d-xl-block", 3, "ngClass"], ["emailSidebar", ""], [1, "sidebar-close-icon", "d-xl-none", 3, "click"], [1, "ft-x"], [1, "email-app-sidebar-content", 3, "perfectScrollbar"], [1, "email-app-menu"], [1, "form-group", "form-group-compose", "text-center", "mb-0"], ["type", "button", 1, "btn", "btn-danger", "btn-block", "mb-2", "mt-1", 3, "click"], [1, "ft-mail", "mr-2"], [1, "m-0"], [1, "grey", "my-2", "d-block", "font-small-3", "text-uppercase"], [1, "list-group", "list-group-messages"], [1, "list-group-item", "list-group-item-action", "border-0", 3, "ngClass", "click"], [1, "ft-inbox", "mr-2"], [1, "badge", "bg-light-secondary", "badge-pill", "float-right"], [1, "ft-send", "mr-2"], [1, "ft-file", "mr-2"], [1, "ft-star", "mr-2"], [1, "badge", "bg-light-danger", "badge-pill", "float-right"], [1, "list-group-item", "list-group-item-action", "border-0", "m-0", 3, "ngClass", "click"], [1, "ft-trash-2", "mr-2"], [1, "my-2"], [1, "list-group", "list-group-messages", "border-0"], [1, "list-group-item", "list-group-item-action", "border-0", "d-flex", "justify-content-between", 3, "ngClass", "click"], [1, "d-flex", "align-items-center"], [1, "ft-circle", "warning", "font-small-1", "mr-2"], [1, "badge", "bg-light-warning", "badge-pill", "float-right"], [1, "list-group-item", "list-group-item-action", "border-0", "d-flex", "align-items-center", 3, "ngClass", "click"], [1, "ft-circle", "danger", "font-small-1", "mr-2"], [1, "ft-circle", "primary", "font-small-1", "mr-2"], [1, "ft-circle", "success", "font-small-1", "mr-2"], [1, "badge", "bg-light-success", "badge-pill", "float-right"], [1, "email-app-content", "row"], [1, "email-search-box", "w-100", "p-2"], [1, "media", "px-2", "d-flex", "align-items-center"], [1, "email-app-sidebar-toggle", "ft-menu", "cursor-pointer", "font-large-1", "mr-3", "d-xl-none", 3, "click"], [1, "media-body", "pr-1"], ["type", "text", "placeholder", "Mesajlarda aray\u0131n", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "email-app-content-area", "w-100"], [1, "email-app-list-mails", "p-0", 3, "click"], [1, "email-app-list", 3, "perfectScrollbar"], ["id", "users-list"], [1, "list-group"], [1, "users-list-padding"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "primary text-center", 4, "ngIf"], [1, "email-app-mail-content", 3, "ngClass"], ["emailContent", ""], ["class", "email-app-mail-content-detail px-4 py-3 py-md-1", 3, "perfectScrollbar", 4, "ngIf"], ["class", "email-app-mail-content-detail", 4, "ngIf"], [1, "compose-new-mail-sidebar", 3, "ngClass"], [1, "compose-sidebar-close-icon", 3, "click"], [1, "card", "bg-transparent", "shadow-none", "quill-wrapper", "m-0"], [1, "card-header"], [1, "card-title"], ["action", "#", "id", "compose-form"], [1, "card-content"], [1, "card-body"], [1, "form-group"], ["for", "compose-email-from"], ["type", "text", "id", "compose-email-from", "placeholder", "user@example.com", "disabled", "", 1, "form-control"], ["for", "compose-email-to", 1, "sr-only"], ["type", "email", "id", "compose-email-to", "placeholder", "Al\u0131c\u0131", "required", "", 1, "form-control"], ["for", "compose-email-subject", 1, "sr-only"], ["type", "text", "id", "compose-email-subject", "placeholder", "Konu", 1, "form-control"], ["for", "compose-email-cc", 1, "sr-only"], ["type", "text", "id", "compose-email-cc", "placeholder", "CC", 1, "form-control"], ["for", "compose-email-bcc", 1, "sr-only"], ["type", "text", "id", "compose-email-bcc", "placeholder", "BCC", 1, "form-control"], [1, "snow-container", "border", "rounded"], ["customToolbarPosition", "bottom", "format", "object"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-bold", 3, "title"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-link"], [1, "ql-image"], [1, "form-group", "mt-2"], [1, "custom-file"], ["type", "file", "id", "compose-email-attach", 1, "custom-file-input"], ["for", "compose-email-attach", 1, "custom-file-label"], [1, "card-footer", "d-flex", "justify-content-end", "pt-0"], ["type", "reset", 1, "btn", "bg-light-secondary", "compose-cancel-btn", "mr-2"], [1, "ft-x", "m-0", "mr-sm-1"], [1, "d-sm-inline-block", "d-none"], ["type", "submit", 1, "btn-send", "btn", "btn-primary"], [1, "ft-send", "m-0", "mr-sm-1"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "media", "email-list-text", "p-0"], ["class", "avatar-content", 4, "ngIf"], ["width", "32", "height", "32", "alt", "avatar", 3, "src", 4, "ngIf"], [1, "media-body"], [1, "list-group-item-heading"], [1, "float-right"], ["class", "ft-paperclip mr-1", 4, "ngIf"], [3, "ngClass"], [1, "list-group-item-text"], ["class", "float-right", 4, "ngIf"], ["class", "float-right primary", 4, "ngIf"], [1, "avatar-content"], ["width", "32", "height", "32", "alt", "avatar", 3, "src"], [1, "ft-paperclip", "mr-1"], ["class", "font-medium-1 ft-star warning", 4, "ngIf"], ["class", "font-medium-1 ft-star", 4, "ngIf"], [1, "font-medium-1", "ft-star", "warning"], [1, "font-medium-1", "ft-star"], [1, "float-right", "primary"], [1, "font-medium-1", "ft-star", "blue-grey", "lighten-3"], [1, "primary", "text-center"], [1, "email-app-mail-content-detail", "px-4", "py-3", "py-md-1", 3, "perfectScrollbar"], [1, "email-app-options"], [1, "row", "d-md-none"], [1, "btn", "btn-primary", "ml-2", "back-to-inbox", "mb-2", 3, "click"], [1, "ft-chevron-left", "mr-2"], [1, "row"], [1, "col-sm-6", "col-12", "text-left"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Replay", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-corner-up-left", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Replay All", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-chevrons-left", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Report SPAM", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-alert-octagon", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Delete", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-trash-2", "font-small-3"], [1, "col-sm-6", "col-12", "text-right"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Previous", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-chevron-left", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Next", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-chevron-right", "font-small-3"], [1, "btn-group", "ml-1"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block", 3, "placement"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "bg-light-secondary", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item", 3, "click"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item"], [1, "dropdown-divider"], [1, "email-app-title", "card-body", "px-0"], [1, "primary"], [1, "badge", "bg-light-primary"], ["class", "float-right font-medium-3 ft-star warning", 4, "ngIf"], ["class", "float-right font-medium-3 ft-star", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "float-right", "font-medium-3", "ft-star", "warning"], [1, "float-right", "font-medium-3", "ft-star"], ["id", "headingCollapse2", 1, "card-header", "p-0"], [1, "email-app-sender", "list-group-item", "list-group-item-action", "border-0", 3, "ngClass", "click"], [1, "media"], [1, "list-group-item-text", "m-0"], ["class", "float-right text muted", 4, "ngIf"], [3, "id", "ngbCollapse"], [1, "email-app-text", "card-body", "py-0"], [1, "email-app-message", "mt-2"], [3, "innerHTML"], [4, "ngIf"], [1, "email-app-text-action", "card-content"], [1, "float-right", "text", "muted"], [1, "ft-corner-up-left", "mr-1"], [1, "ft-arrow-right", "mr-1"], [1, "ft-more-vertical-"], ["class", "float-left mr-2", 4, "ngFor", "ngForOf"], [1, "float-left", "mr-2"], ["alt", "Generic placeholder image", 1, "media-object", "width-100", 3, "src"], [1, "email-app-mail-content-detail"]], template: function InboxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_div_click_1_listener() { return ctx.onContentOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_span_click_5_listener() { ctx.isContentOverlay = false; return ctx.isEmailSidebarShow = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_button_click_10_listener() { return ctx.compose(true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Yeni");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "hr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Mesajlar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_17_listener() { return ctx.GetEmailsByType("Inbox"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Gelen Kutusu");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "8");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_23_listener() { return ctx.GetEmailsByType("Sent"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "G\u00F6nderilen");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_27_listener() { return ctx.GetEmailsByType("Draft"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Taslak");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_31_listener() { return ctx.GetStarredEmails(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u0130\u015Faretli");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_37_listener() { return ctx.GetEmailsByType("Trash"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u00C7\u00F6p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "hr", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Etiketler");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_45_listener() { return ctx.GetEmailsByLabel("Work"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u0130K");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_52_listener() { return ctx.GetEmailsByLabel("Family"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\u00DCretim");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_56_listener() { return ctx.GetEmailsByLabel("Friends"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Sat\u0131nalma");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_60_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "D\u0131\u015F Sat\u0131\u015F");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_67_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Kalite Kontrol");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_74_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Laboratuar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_81_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Bilgi \u0130\u015Flem");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_88_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Muhasebe");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_95_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Finans");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_102_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "\u0130\u00E7 Sat\u0131\u015F");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_span_click_112_listener() { return ctx.onSidebarToggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "input", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function InboxComponent_Template_input_ngModelChange_114_listener($event) { return ctx.searchQuery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_div_click_116_listener() { return ctx.onListItemClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](121, InboxComponent_a_121_Template, 19, 18, "a", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](122, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](123, InboxComponent_p_123_Template, 2, 0, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 49, 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](126, InboxComponent_div_126_Template, 49, 7, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](127, InboxComponent_div_127_Template, 3, 0, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InboxComponent_Template_span_click_129_listener() { return ctx.compose(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "h3", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Yeni Mesaj");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "form", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "label", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "G\u00F6nderen");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "input", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "label", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Al\u0131c\u0131");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "input", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "label", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Konu");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "label", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "CC");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "input", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "label", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "BCC");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "input", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "quill-editor", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "button", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "button", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "button", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "button", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "input", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "label", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Dosya ekleyin");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "button", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "i", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Vazge\u00E7");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "button", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "G\u00F6nder");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c2, ctx.isContentOverlay));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c2, ctx.isEmailSidebarShow));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](33, _c3, ctx.activeTypeButton == "Inbox"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](35, _c3, ctx.activeTypeButton == "Sent"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](37, _c3, ctx.activeTypeButton == "Draft"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](39, _c3, ctx.activeTypeButton == "Starred"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](41, _c3, ctx.activeTypeButton == "Trash"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](43, _c3, ctx.activeTypeButton == "Work"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](45, _c3, ctx.activeTypeButton == "Family"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](47, _c3, ctx.activeTypeButton == "Friends"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](49, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](51, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](53, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](55, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](57, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](59, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](61, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](122, 25, ctx.mail, "mailFrom,subject,body", ctx.searchQuery));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mail.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](63, _c4, ctx.isMessageSelected));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMessageSelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMessageSelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](65, _c2, ctx.isComposeShow));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Bold");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, ngx_quill__WEBPACK_IMPORTED_MODULE_8__.QuillEditorComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapse], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__.SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmJveC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return InboxComponent;
}());



/***/ }),

/***/ 57935:
/*!**************************************!*\
  !*** ./src/app/inbox/inbox.model.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mail": function() { return /* binding */ Mail; },
/* harmony export */   "Message": function() { return /* binding */ Message; },
/* harmony export */   "MessageDetail": function() { return /* binding */ MessageDetail; },
/* harmony export */   "Attachments": function() { return /* binding */ Attachments; }
/* harmony export */ });
var Mail = /** @class */ (function () {
    function Mail(mailId, mailFrom, subject, body, time, isRead, isImportant, hasAttachment, hasImage, imagePath, imageText, imageClass, mailType, hasLabel, labelType, labelClass, isDefault) {
        this.mailId = mailId;
        this.mailFrom = mailFrom;
        this.subject = subject;
        this.body = body;
        this.time = time;
        this.isRead = isRead;
        this.isImportant = isImportant;
        this.hasAttachment = hasAttachment;
        this.hasImage = hasImage;
        this.imagePath = imagePath;
        this.imageText = imageText;
        this.imageClass = imageClass;
        this.mailType = mailType;
        this.hasLabel = hasLabel;
        this.labelType = labelType;
        this.labelClass = labelClass;
        this.isDefault = isDefault;
    }
    return Mail;
}());

var Message = /** @class */ (function () {
    function Message(mailId, subject, messagesCount, messages) {
        this.mailId = mailId;
        this.subject = subject;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
    return Message;
}());

var MessageDetail = /** @class */ (function () {
    function MessageDetail(messageId, mailFrom, mailTo, body, time, collapsed, hasAttachment, hasAvatar, avatarPath, avatarText, avatarClass, attachments) {
        this.messageId = messageId;
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
        this.body = body;
        this.time = time;
        this.collapsed = collapsed;
        this.hasAttachment = hasAttachment;
        this.hasAvatar = hasAvatar;
        this.avatarPath = avatarPath;
        this.avatarText = avatarText;
        this.avatarClass = avatarClass;
        this.attachments = attachments;
    }
    return MessageDetail;
}());

var Attachments = /** @class */ (function () {
    function Attachments(attachmentId, url) {
        this.attachmentId = attachmentId;
        this.url = url;
    }
    return Attachments;
}());



/***/ }),

/***/ 9562:
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxModule": function() { return /* binding */ InboxModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ 14075);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-routing.module */ 52308);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.component */ 44670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);










var InboxModule = /** @class */ (function () {
    function InboxModule() {
    }
    InboxModule.ɵfac = function InboxModule_Factory(t) { return new (t || InboxModule)(); };
    InboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: InboxModule });
    InboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxRoutingModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule.forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule
            ]] });
    return InboxModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InboxModule, { declarations: [_inbox_component__WEBPACK_IMPORTED_MODULE_2__.InboxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule] }); })();


/***/ }),

/***/ 67519:
/*!****************************************!*\
  !*** ./src/app/inbox/inbox.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxService": function() { return /* binding */ InboxService; }
/* harmony export */ });
/* harmony import */ var _inbox_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.model */ 57935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var InboxService = /** @class */ (function () {
    function InboxService() {
        this.inbox = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(1, 'Tonny Deep', 'PixInvent, I found you...', 'I would be good.', '4:14 AM', false, true, false, false, '', 'T', 'bg-info', 'Inbox', true, 'Family', 'badge bg-light-danger mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(2, 'Louis Welch', 'Thanks, Let us do it.', 'Can we connect today...', '2:15 AM', false, false, true, false, '', 'L', 'bg-danger', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(3, 'Envato Market', 'You have new comment...', 'Hi Pixinvent...', '11:18 PM', false, false, false, false, '', 'E', 'bg-warning', 'Inbox', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(4, 'Wayne Burton', 'Project ABC Status...', 'Andy, Let us...', 'Today', true, true, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', 'Inbox', true, 'Private', 'badge bg-light-success mr-1', true),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(5, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', 'Inbox', true, 'Friends', 'badge bg-light-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(6, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, false, true, false, '', 'H', 'bg-success', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(7, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Inbox', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(8, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Sent', true, 'Friends', 'badge bg-light-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(9, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Sent', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(10, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', 'Sent', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(11, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, true, false, false, '', 'H', 'bg-success', 'Sent', true, 'Private', 'badge bg-light-success mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(12, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Trash', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(13, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Trash', true, 'Friends', 'badge bg-light-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Mail(14, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Trash', false, '', '', false),
        ];
        this.message = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(1, 'PixInvent, I found you...', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Tonny Deep', "<p>Hi Tonny,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Tonny Deep', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Today', false, false, false, '', 'T', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(2, 'Thanks, Let us do it.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Louis Welch', "<p>Hi Louis,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Louis Welch', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '2:15 AM', false, true, false, '', 'L', 'bg-danger', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(3, 'You have a new comment...', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'Envato Market', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11:18 PM', false, false, false, '', 'E', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(4, 'Project ABC Status Report', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Wayne Burton', "<p>Hi Wayne,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Wayne Burton', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(5, 'Your New UI', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Yesterday', false, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(6, 'Thanks, Let us do it.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Heather Howell', "<p>Hi Heather,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '13 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Heather Howell', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '15 July', false, true, false, '', 'H', 'bg-success', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(1, 'assets/img/gallery/16.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(2, 'assets/img/gallery/17.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(7, 'I paid it, Thanks.', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '12 July', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(8, 'Where are you John?', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 August', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(9, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '31 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '8 July', false, false, false, '', 'E', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(10, 'Your New UI.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Yesterday', false, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(11, 'Thanks, Let us do it.', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'Heather Howell', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '15 July', false, false, false, '', 'H', 'bg-success', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(12, 'I paid it, Thanks.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Kelly Reyes', "<p>Hi Kelly,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(13, 'Where are you John?', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '21 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Message(14, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.MessageDetail('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '8 July', false, true, false, '', 'E', 'bg-info', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_0__.Attachments(3, 'assets/img/gallery/21.jpg')
                ]),
            ])
        ];
    }
    InboxService.ɵfac = function InboxService_Factory(t) { return new (t || InboxService)(); };
    InboxService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InboxService, factory: InboxService.ɵfac });
    return InboxService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_inbox_inbox_module_ts.js.map