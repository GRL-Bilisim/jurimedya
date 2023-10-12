"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts"],{

/***/ 59218:
/*!**********************************************************************!*\
  !*** ./src/app/newrecordrow_proses/newrecordrow_proses.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewrecordrowProsesComponent": function() { return /* binding */ NewrecordrowProsesComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/data/sweet-alerts */ 645);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _editrecordrow_editrecordrow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editrecordrow/editrecordrow.component */ 55798);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);












var _c0 = ["myselect"];
var _c1 = ["tableRowDetails"];
var _c2 = ["tableResponsive"];
function NewrecordrowProsesComponent_form_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi])("name", alan_r4.alanadi);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ng-select", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_2_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r30.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_2_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", alan_r4.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r6.cities[alan_r4.alan_index])("id", alan_r4.alanadi)("closeOnSelect", true)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_3_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r38.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_3_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi])("name", alan_r4.alanadi);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_4_div_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var veri_r47 = ctx.$implicit;
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veri_r47.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", veriler_r1[alan_r4.alanadi])("id", veri_r47.name + "_" + alan_r4.alan_index)("name", alan_r4.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("for", "", veri_r47.name, "_", alan_r4.alan_index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](veri_r47.name);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NewrecordrowProsesComponent_form_9_ng_container_1_div_4_div_4_Template, 4, 7, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r8.cities[alan_r4.alan_index]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_5_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r56.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_5_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_6_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r64.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_6_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_7_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r72.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_7_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_8_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r80.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_9_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r88.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_10_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r98); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r96.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_10_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r98); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "textarea", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_11_Template_textarea_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r106); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r104.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_11_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r106); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi])("name", alan_r4.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_12_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r114); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r112.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_12_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r114); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi])("name", alan_r4.alanadi);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_13_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r122); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r120.dosyayukle($event, alan_r4.alanadi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", veriler_r1[alan_r4.alanadi], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_14_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r127); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r125.dosyayukle($event, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r127); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi])("name", alan_r4.alanadi);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_15_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r135); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r133.dosyayukle($event, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_15_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r135); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r19.degistir(veriler_r1[alan_r4.alanadi]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi])("name", alan_r4.alanadi);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_16_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
} if (rf & 2) {
    var item_r142 = ctx.item;
    var item$_r143 = ctx.item$;
    var index_r144 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "item-", index_r144, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "item-", index_r144, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", item$_r143.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r142.name, " ");
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ng-select", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_16_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r147); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r145.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_16_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r147); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NewrecordrowProsesComponent_form_9_ng_container_1_div_16_ng_template_4_Template, 2, 4, "ng-template", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", alan_r4.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", true)("items", ctx_r20.cities[alan_r4.alan_index])("id", alan_r4.alanadi)("closeOnSelect", true)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_17_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r155); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r153.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_17_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r155); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_18_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r163); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r161.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_18_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r163); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", veriler_r1[alan_r4.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ng-select", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewrecordrowProsesComponent_form_9_ng_container_1_div_19_Template_ng_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r171); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r169.islemyap(alan_r4.formindex, alan_r4.alanadi); })("ngModelChange", function NewrecordrowProsesComponent_form_9_ng_container_1_div_19_Template_ng_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r171); var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return (veriler_r1[alan_r4.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var veriler_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alan_r4.alanyazisi);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", alan_r4.alanadi)("items", ctx_r23.cities[alan_r4.alan_index])("closeOnSelect", true)("name", alan_r4.alanadi)("ngModel", veriler_r1[alan_r4.alanadi]);
} }
function NewrecordrowProsesComponent_form_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NewrecordrowProsesComponent_form_9_ng_container_1_div_1_Template, 4, 5, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NewrecordrowProsesComponent_form_9_ng_container_1_div_2_Template, 4, 6, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NewrecordrowProsesComponent_form_9_ng_container_1_div_3_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NewrecordrowProsesComponent_form_9_ng_container_1_div_4_Template, 5, 2, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NewrecordrowProsesComponent_form_9_ng_container_1_div_5_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NewrecordrowProsesComponent_form_9_ng_container_1_div_6_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NewrecordrowProsesComponent_form_9_ng_container_1_div_7_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NewrecordrowProsesComponent_form_9_ng_container_1_div_8_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NewrecordrowProsesComponent_form_9_ng_container_1_div_9_Template, 2, 4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NewrecordrowProsesComponent_form_9_ng_container_1_div_10_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NewrecordrowProsesComponent_form_9_ng_container_1_div_11_Template, 5, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NewrecordrowProsesComponent_form_9_ng_container_1_div_12_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NewrecordrowProsesComponent_form_9_ng_container_1_div_13_Template, 6, 4, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, NewrecordrowProsesComponent_form_9_ng_container_1_div_14_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NewrecordrowProsesComponent_form_9_ng_container_1_div_15_Template, 6, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, NewrecordrowProsesComponent_form_9_ng_container_1_div_16_Template, 5, 7, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, NewrecordrowProsesComponent_form_9_ng_container_1_div_17_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, NewrecordrowProsesComponent_form_9_ng_container_1_div_18_Template, 4, 5, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, NewrecordrowProsesComponent_form_9_ng_container_1_div_19_Template, 4, 6, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var alan_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Combobox");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Radiobutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "File(JPG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "File(PDF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "File(PNG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Secimli");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Multiautocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "Autocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alan_r4.verigiristuru == "FixList");
} }
function NewrecordrowProsesComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NewrecordrowProsesComponent_form_9_ng_container_1_Template, 20, 19, "ng-container", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewrecordrowProsesComponent_form_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r178); var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r177.kaydet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Kaydet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewrecordrowProsesComponent_form_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r178); var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r179.activeModal.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Vazge\u00E7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.heroForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.blokalanlari);
} }
var NewrecordrowProsesComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} http
     */
    function NewrecordrowProsesComponent(cdr, modalService, activeModal, router, http, route, http2) {
        this.cdr = cdr;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.router = router;
        this.http = http;
        this.route = route;
        this.http2 = http2;
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__;
        this.activeTab = "general";
        this.vActive = 'top'; // Vertical Pills
        this.active = 1; // Basic Navs
        this.kActive = 1; // Keep content
        this.disabled = true;
        this.tabs = [1, 2, 3, 4, 5];
        this.counter = this.tabs.length + 1;
        this.grupbasliklari = [];
        this.cities = [];
        this.sutunlars = [];
        this.satirlar = [];
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
        // multi Purpose datatable Row data
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.ColumnMode;
        this.SERVER_URL = localStorage.getItem('url');
        this.expanded = {};
        this.editing = {};
        this.chkBoxSelected = [];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.SelectionType;
        // private
        this.tempData = [];
        this.multiPurposeTemp = [];
        this.viewInterval = "";
    }
    /**
     * inlineEditingUpdate
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    NewrecordrowProsesComponent.prototype.inlineEditingUpdate = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
    };
    NewrecordrowProsesComponent.prototype.baslikkontrol = function (grupadi) {
        if (grupadi == '') {
            return 'Genel Bilgiler';
        }
        if (grupadi != '') {
            return grupadi;
        }
    };
    NewrecordrowProsesComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
    };
    Object.defineProperty(NewrecordrowProsesComponent.prototype, "signupFormModalName", {
        get: function () {
            return this.validatingForm.get('signupFormModalName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewrecordrowProsesComponent.prototype, "signupFormModalEmail", {
        get: function () {
            return this.validatingForm.get('signupFormModalEmail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NewrecordrowProsesComponent.prototype, "signupFormModalPassword", {
        get: function () {
            return this.validatingForm.get('signupFormModalPassword');
        },
        enumerable: false,
        configurable: true
    });
    NewrecordrowProsesComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewrecordrowProsesComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NewrecordrowProsesComponent.prototype.evetsil = function (id) {
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + this.secilenform + "&recordid=" + id;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
        });
    };
    NewrecordrowProsesComponent.prototype.editrecord = function (id, formids) {
        localStorage.setItem('formid', this.formid);
        localStorage.setItem('formtanimi', this.formtanimi);
        localStorage.setItem('recordid', id);
        this.router.navigate(['/forms/editrecord']);
    };
    NewrecordrowProsesComponent.prototype.satirekle = function (formids) {
        this.modalService.open(_editrecordrow_editrecordrow_component__WEBPACK_IMPORTED_MODULE_1__.EditrecordrowComponent, { centered: true });
    };
    NewrecordrowProsesComponent.prototype.yenikayit = function (formids) {
        localStorage.setItem('formid', this.secilenform);
        localStorage.setItem('formtanimi', this.formtanimi);
        localStorage.setItem('recordid', "");
        this.router.navigate(['/forms/newrecord']);
    };
    NewrecordrowProsesComponent.prototype.dosyayukle = function (filename, alanadi) {
        var _this = this;
        var fileList = filename.target.files;
        var reader = new FileReader();
        reader.readAsDataURL(filename.target.files[0]); // read file as data url
        for (var i = 0; i < this.blokalanlari.length; i++) {
            if (this.blokalanlari[i].verigiristuru == 'File(JPG)' && this.blokalanlari[i].alanadi == alanadi) {
                if (fileList.length > 0) {
                    var file = fileList[0];
                    this.blokalanlari[i].name = file.name;
                    this.blokalanlari[i].dosya = file;
                }
            }
        }
        reader.onload = function (event) {
            _this.formverileri[0][alanadi] = event.target.result;
            _this.cdr.markForCheck();
        };
    };
    NewrecordrowProsesComponent.prototype.vazgec = function () {
        this.router.navigate(['/listings/' + this.secilenform]);
    };
    NewrecordrowProsesComponent.prototype.ayniblokmu = function (s1, s2) {
        if (s1 === s2) {
            return true;
        }
        else {
            return false;
        }
    };
    NewrecordrowProsesComponent.prototype.degistir = function (filename) {
        if (filename != '') {
            return localStorage.getItem('url') + filename;
        }
        else {
            return localStorage.getItem('url') + 'no-photo-available.png';
        }
    };
    NewrecordrowProsesComponent.prototype.islemyap = function (formid, alanadi) {
        var _this = this;
        if (formid == 278 && alanadi == 'ch_kodu') {
            var ureticikodu = "";
            var firmaid = document.getElementById('ch_adi').getAttribute('ng-reflect-model');
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'ch_kodu') {
                        ureticikodu = item[key];
                    }
                });
            });
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=firmakarsilik&firma=" + firmaid + "&ureticikodu=" + ureticikodu;
            this.http.get(this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].kod_urun = formverisi[i].malzemekodu;
                }
            });
        }
        if (formid == 460 && alanadi == 'baglantilitalep') {
            var ureticikodu = "";
            var firmaid = document.getElementById('ch_adi').getAttribute('ng-reflect-model');
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'baglantilitalep') {
                        ureticikodu = item[key];
                    }
                });
            });
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=tedarikcifirmakarsilik&firma=" + firmaid + "&ureticikodu=" + ureticikodu;
            this.http.get(this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].ch_kodu = formverisi[i].urunadi;
                }
            });
        }
    };
    NewrecordrowProsesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.viewInterval = setInterval(function () {
            clearInterval(_this.viewInterval);
        }, 2000);
    };
    NewrecordrowProsesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prosesid = localStorage.getItem('prosesid');
        this.secilenform = localStorage.getItem('subformid');
        this.formtanimi = localStorage.getItem('formtanimi');
        this.formid = localStorage.getItem('rowformid');
        this.recordid = localStorage.getItem('rowrecordid');
        this.turu = 'Satır Ekle';
        if (this.recordid != '') {
            this.turu = 'Satır Düzenle';
        }
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=prosesverileri&prosesid=" + this.prosesid + "&userid=" + localStorage.getItem('userid');
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.formverileri = data;
        });
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=prosesalanlari&prosesid=" + this.prosesid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.blokalanlari = data;
            for (var i = 0; i < _this.blokalanlari.length; i++) {
                if (_this.blokalanlari[i].verigiristuru == 'Radiobutton' || _this.blokalanlari[i].verigiristuru == 'FixList' || _this.blokalanlari[i].verigiristuru == 'Combobox') {
                    var splitted = _this.blokalanlari[i].degerleri.split(";");
                    var splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    var cities_psh = [];
                    for (var k = 0; k < splitted2.length; k++) {
                        cities_psh.push({ id: splitted[k], name: splitted2[k], field: _this.blokalanlari[i].alanadi });
                    }
                    _this.cities[_this.blokalanlari[i].alan_index] = cities_psh;
                }
                if (_this.blokalanlari[i].verigiristuru == 'Secimli') {
                    var splitted = _this.blokalanlari[i].degerleri.split(";");
                    var splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    var cities_psh = [];
                    for (var k = 0; k < splitted2.length; k++) {
                        cities_psh.push({ id: splitted[k], name: splitted2[k], field: _this.blokalanlari[i].alanadi });
                    }
                    _this.cities[_this.blokalanlari[i].alan_index] = cities_psh;
                    var verisi = _this.formverileri[0][_this.blokalanlari[i].alanadi];
                    var deger;
                    if (verisi != '') {
                        var strArrs = verisi.toString().split(",");
                        var alanim = _this.blokalanlari[i].alanadi;
                        _this.formverileri[0][alanim] = strArrs;
                    }
                }
            }
        });
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.bloklar = data;
            var songrup;
            var artim = 0;
            _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=prosesalanlari&prosesid=" + _this.prosesid;
            _this.http.get(_this.SERVER_URL).subscribe(function (data) {
                _this.blokalanlari = data;
                for (var i = 0; i < _this.blokalanlari.length; i++) {
                    if (_this.blokalanlari[i].verigiristuru == 'Radiobutton' || _this.blokalanlari[i].verigiristuru == 'FixList' || _this.blokalanlari[i].verigiristuru == 'Combobox' || _this.blokalanlari[i].verigiristuru == 'Secimli') {
                        var splitted = _this.blokalanlari[i].degerleri.split(";");
                        var splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                        var cities_psh = [];
                        for (var k = 0; k < splitted2.length; k++) {
                            cities_psh.push({ id: splitted[k], name: splitted2[k], field: _this.blokalanlari[i].alanadi });
                        }
                        _this.cities[_this.blokalanlari[i].alan_index] = cities_psh;
                    }
                }
            });
        });
        var durum = this;
        setTimeout(function () {
            //durum.formverileri[0]['sorumlusu']=["hazalacemoglu"];
        }, 1000);
    };
    NewrecordrowProsesComponent.prototype.kaydet = function () {
        var modalim = this.activeModal;
        var postUrl = localStorage.getItem('url') + "angular/prosesverilerikaydet.php?prosesid=" + this.prosesid + "&userid=" + localStorage.getItem('userid') + "&recordid=" + this.recordid;
        var postData = new FormData();
        this.formverileri.forEach(function (item) {
            Object.keys(item).forEach(function (key) {
                console.log(key, item[key]);
                postData.append(key, item[key]);
            });
        });
        this.http.post(postUrl, postData, { responseType: 'text' }).subscribe({
            next: function (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: "success",
                    title: 'Kayıt işlemi başarılı!',
                    text: 'Bekleyiniz...',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                }).then(function (result) {
                    if (result.value) {
                    }
                });
                setTimeout(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
                    modalim.close('Yenile');
                }, 2000);
            },
            error: function (error) {
                console.error('There was an error!', error);
            }
        });
    };
    NewrecordrowProsesComponent.ɵfac = function NewrecordrowProsesComponent_Factory(t) { return new (t || NewrecordrowProsesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
    NewrecordrowProsesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewrecordrowProsesComponent, selectors: [["app-newrecordrowproses"]], viewQuery: function NewrecordrowProsesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myselect = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tableResponsive = _t.first);
        } }, decls: 336, vars: 1, consts: [["id", "basic-hidden-label-form-layouts"], [1, "row", "match-height"], [1, "col-lg-12", "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], ["class", "form-row", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-12", 2, "display", "none"], [1, "form-group"], ["for", "hidden-label-form-1", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-1", "name", "cname", "placeholder", "Company Name", 1, "form-control", "round"], ["for", "hidden-label-form-2", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-2", "name", "ename", "placeholder", "Employee Name", 1, "form-control", "round"], ["for", "hidden-label-form-3", 1, "sr-only"], ["type", "number", "id", "hidden-label-form-3", "name", "eid", "placeholder", "Employee ID", 1, "form-control", "round"], [1, "form-group", "position-relative"], ["for", "hidden-label-form-4", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-4", "placeholder", "Joining Date", 1, "form-control", "pickadate", "round"], ["for", "hidden-label-form-5", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-5", "name", "sname", "placeholder", "Supervisor Name", 1, "form-control", "round"], ["for", "hidden-label-form-6", 1, "sr-only"], ["id", "hidden-label-form-6", "rows", "4", "name", "comment2", "placeholder", "Details", 1, "form-control", "round"], ["for", "hidden-label-form-7", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-7", "name", "sign", "placeholder", "Signature", 1, "form-control", "round"], ["type", "button", 1, "btn", "btn-primary", "mr-2"], [1, "ft-check-square", "mr-1"], ["type", "button", 1, "btn", "btn-secondary"], [1, "ft-x", "mr-1"], ["id", "horizontal-form-layout", 2, "display", "none"], [1, "col-12"], [1, "row"], [1, "col-md-6", "col-12"], [1, "form-group", "row"], ["for", "horizontal-form-1", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "id", "horizontal-form-1", "name", "first-name", 1, "form-control", "square"], ["for", "horizontal-form-2", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-2", "name", "last-name", 1, "form-control", "square"], [1, "row", "mb-md-3"], ["for", "horizontal-form-3", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-3", "name", "username", 1, "form-control", "square"], ["for", "horizontal-form-4", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-4", "name", "nick-name", 1, "form-control", "square"], ["for", "horizontal-form-5", 1, "col-md-3", "col-form-label"], ["type", "email", "id", "horizontal-form-5", "name", "e-mail", 1, "form-control", "square"], ["for", "horizontal-form-6", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-6", "name", "website", 1, "form-control", "square"], ["for", "horizontal-form-7", 1, "col-md-3", "col-form-label"], ["type", "number", "id", "horizontal-form-7", "name", "phone-number", 1, "form-control", "square"], ["for", "horizontal-form-9", 1, "col-md-3", "col-form-label"], ["id", "horizontal-form-9", "rows", "6", "name", "comment3", 1, "form-control", "square"], ["id", "action-form-layout", 2, "display", "none"], ["type", "button", 1, "btn", "btn-primary", "mb-2", "mr-2"], ["type", "button", 1, "btn", "btn-secondary", "mb-2"], ["for", "form-action-1"], ["type", "text", "id", "form-action-1", "name", "issue-title", 1, "form-control"], ["for", "form-action-2"], ["type", "text", "id", "form-action-2", "name", "opened-by", 1, "form-control"], [1, "form-row"], ["for", "form-action-3"], ["type", "text", "id", "form-action-3", "placeholder", "Opened Date", "name", "date-opened", 1, "form-control", "pickadate"], ["for", "form-action-4"], ["type", "text", "id", "form-action-4", "placeholder", "Closed Date", "name", "date-closed", 1, "form-control", "pickadate"], ["for", "form-action-5"], ["id", "form-action-5", "name", "priority", 1, "form-control"], ["value", "Low"], ["value", "Medium"], ["value", "High"], ["for", "form-action-6"], ["id", "form-action-6", "name", "status", 1, "form-control"], ["value", "Not started"], ["value", "Started"], ["value", "Started but not fixed"], ["value", "Fixed"], ["for", "form-action-7"], ["id", "form-action-7", "rows", "4", "name", "comment4", 1, "form-control"], ["id", "bordered-striped-form-layout", 2, "display", "none"], [1, "col-lg-6", "col-12"], [1, "form-bordered"], ["for", "bordered-form-1", 1, "col-md-3", "label-control"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "bordered-form-1", "name", "employeename", 1, "form-control"], [1, "form-control-position"], [1, "ft-user"], ["for", "bordered-form-2", 1, "col-md-3", "label-control"], ["type", "text", "id", "bordered-form-2", "name", "projectname", 1, "form-control"], [1, "ft-briefcase"], ["for", "bordered-form-3", 1, "col-md-3", "label-control"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "id", "bordered-form-3", "aria-label", "Amount (to the nearest dollar)", "name", "rateperhour", 1, "form-control"], [1, "input-group-append"], ["for", "bordered-form-4", 1, "col-md-3", "label-control"], ["type", "text", "id", "bordered-form-4", "name", "time", 1, "form-control", "pickatime"], [1, "ft-clock"], [1, "form-group", "row", "last", "mb-3"], ["for", "bordered-form-6", 1, "col-md-3", "label-control"], ["id", "bordered-form-6", "rows", "4", "name", "notes", 1, "form-control"], [1, "ft-file"], [1, "striped-rows"], ["for", "striped-form-1", 1, "col-md-3", "label-control"], ["type", "text", "id", "striped-form-1", "name", "fullname", "placeholder", "Full Name", 1, "form-control"], ["for", "striped-form-2", 1, "col-md-3", "label-control"], ["type", "text", "id", "striped-form-2", "name", "title", "placeholder", "Title", 1, "form-control"], ["for", "striped-form-3", 1, "col-md-3", "label-control"], ["type", "text", "id", "striped-form-3", "name", "company3", "placeholder", "Company", 1, "form-control"], ["for", "striped-form-4", 1, "col-md-3", "label-control"], ["type", "email", "id", "striped-form-4", "name", "email2", "placeholder", "E-mail", 1, "form-control"], ["for", "striped-form-5", 1, "col-md-3", "label-control"], ["type", "number", "id", "striped-form-5", "name", "contact", "placeholder", "Contact Number", 1, "form-control"], [1, "col-md-3", "label-control"], [1, "input-group", "col-md-9"], [1, "radio", "d-inline-block", "mr-2", "mb-1"], ["type", "radio", "id", "striped-form-6", "name", "striped-radio"], ["for", "striped-form-6"], [1, "radio", "d-inline-block"], ["type", "radio", "id", "striped-form-7", "checked", "", "name", "striped-radio"], ["for", "striped-form-7"], [1, "form-row", 3, "formGroup"], [4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "flex-sm-row", "flex-column", "justify-content-end"], ["type", "button", 1, "btn", "btn-primary", "mr-sm-2", "mb-1", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "mb-1", 3, "click"], ["class", "form-group mb-2 col-md-6", 4, "ngIf"], ["class", "form-group mb-2", 4, "ngIf"], ["class", "input-group mb-2 custom-control custom-radio", 4, "ngIf"], ["class", "form-group mb-2", "style", "display: none;", 4, "ngIf"], [1, "form-group", "mb-2", "col-md-6"], ["for", "basic-form-1"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "name", "value", "ngModelChange"], [1, "form-group", "mb-2"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "items", "id", "closeOnSelect", "name", "ngModel", "change", "ngModelChange"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], [1, "input-group", "mb-2", "custom-control", "custom-radio"], [1, "col-md-12", 2, "white-space", "nowrap"], ["class", "radio radio-primary radio-sm d-inline-block mr-2 mb-1", 4, "ngFor", "ngForOf"], [1, "radio", "radio-primary", "radio-sm", "d-inline-block", "mr-2", "mb-1"], ["type", "radio", "ngModel", "", 1, "", 3, "value", "ngModel", "id", "name", "ngModelChange"], [1, "", 3, "for"], ["type", "checkbox", 1, "form-control", 3, "id", "name", "ngModel", "value", "change", "ngModelChange"], ["type", "time", 1, "form-control", 3, "id", "name", "ngModel", "value", "change", "ngModelChange"], ["type", "text", "readonly", "", 1, "form-control", 3, "id", "name", "ngModel", "value", "change", "ngModelChange"], ["type", "text", 1, "form-control", 3, "id", "name", "ngModel", "value", "change", "ngModelChange"], [1, "form-group", "mb-2", 2, "display", "none"], ["type", "hidden", 1, "form-control", 3, "id", "name", "ngModel", "value", "change", "ngModelChange"], ["type", "password", 1, "form-control", 3, "id", "name", "ngModel", "value", "change", "ngModelChange"], [1, "form-control", 3, "id", "ngModel", "name", "change", "ngModelChange"], ["type", "date", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], [1, "media"], ["alt", "", "height", "auto", "width", "100%", 1, "rounded", "mr-3", 3, "src"], ["type", "file", 1, "file-upload", 3, "id", "name", "change"], ["type", "file", "hidden", "", 3, "id", "ngModel", "name", "change", "ngModelChange"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "multiple", "items", "id", "closeOnSelect", "name", "ngModel", "change", "ngModelChange"], ["ng-option-tmp", ""], ["type", "checkbox", 3, "id", "name", "ngModel"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "id", "items", "closeOnSelect", "name", "ngModel", "change", "ngModelChange"]], template: function NewrecordrowProsesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Operasyon Parametreleri");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NewrecordrowProsesComponent_form_9_Template, 9, 2, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Hidden Label Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "label.sr-only");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " to hide a label and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "input.round");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " for round inputs. You may add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "placeholder");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " attribute.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Company Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Employee Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Employee ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Supervisor Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "textarea", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Signature");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "section", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Horizontal Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "label.col-form-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " for proper padding to a label. You can align label to right side by using ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, ".text-right");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, ". Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "input.square");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " for square inputs.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "input", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "label", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Nick Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "input", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "label", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "label", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Website");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "input", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "label", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Contact Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "input", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "label", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "About Project");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "textarea", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "section", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Form Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "You can use form actions on top & bottom and can also align them inside the form.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "button", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "button", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "label", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Issue Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "input", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "label", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Opened By");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "input", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "label", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Issue Opened");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "input", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "label", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Issue Closed");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "input", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "label", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "select", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "option", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Low");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "option", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "Medium");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "option", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "High");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "label", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "select", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "option", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "Not started");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "option", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "option", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Started but not fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "option", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "Fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "label", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "textarea", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](203, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](206, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "section", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Bordered Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](218, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "form.form-bordered .form-group");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, " for bordered form and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "label.label-control");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, " for proper padding to a label.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "form", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "label", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "Employee Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "input", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](233, "i", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "label", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Project Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](239, "input", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "i", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "label", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Rate Per Hour");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "span", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "input", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "span", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, ".00");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "label", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "input", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](261, "i", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "label", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Notes");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](267, "textarea", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "i", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](274, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, "Striped Row");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](286, "form.striped-rows .form-group");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, " for striped form and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "label.label-control");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, " for proper padding to a label. You can use bordered and striped both at the same time.");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "form", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "label", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, "Full Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](296, "input", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "label", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](301, "input", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](303, "label", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Company");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](306, "input", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "label", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](311, "input", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "label", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Contact Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](316, "input", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](317, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "label", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](319, "Existing Customer");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "div", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "div", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](323, "input", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "label", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](325, "Yes");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "div", 118);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](327, "input", 119);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "label", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](329, "No");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](331, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](334, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](335, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.formverileri);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["ɵf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdyZWNvcmRyb3dfcHJvc2VzLmNvbXBvbmVudC5zY3NzIn0= */", "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #F7F7F8;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: transparent;\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #975AFF;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active i {\n  color: #fff !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: transparent;\n  color: #342E49;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a {\n  padding: 1.1rem 1.035rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a i {\n  position: absolute;\n  top: 0.55rem;\n  left: 0.4rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li.disabled a {\n  color: #757575;\n  background-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a {\n  color: #975AFF;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a:hover {\n  background-color: #EEEEEE !important;\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled).active a {\n  z-index: 3;\n  color: #fff;\n  background-color: #975AFF !important;\n  border-color: #975AFF;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled):hover a {\n  background-color: #F5F5F5;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a {\n  position: relative;\n  display: block;\n  padding: 1.1rem 0.75rem;\n  margin: 0 0 0 5px;\n  line-height: 0.1;\n  background-color: #F5F5F5;\n  border: 1px solid #E0E0E0;\n  border-radius: 0.35rem;\n  font-size: 15px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a i {\n  padding: 0;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  line-height: 24px;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: inline;\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: inline;\n    display: initial;\n  }\n}html body.layout-dark .datatable-footer .pager li.disabled a {\n  color: #626164;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-header {\n  background-color: #101010;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer {\n  color: #B2B1B5;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: #1E1E1E;\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: #1E1E1E;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: #1E1E1E !important;\n  border-color: #474748 !important;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-header {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: rgba(238, 238, 238, 0.2);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled) a {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvYm9vdHN0cmFwLnNjc3MiLCJkYXRhdGFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNoQztNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBRSxDQUN2QjtRQUNFLGVBQWUsRUFBRSxDQUNuQjtRQUNFLFlBQVksRUFBRSxDQUNoQjtRQUNFLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRSxDQUNuQjs7UUFFRSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxpQkFBaUIsRUFBRSxDQUNyQjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUUsQ0FDdkI7UUFDRSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVMsRUFBRSxDQUNYO1VBQ0UsUUFBUSxFQUFFLENBQ1o7VUFDRSxPQUFPLEVBQUUsQ0FDYjtRQUNFLGVBQWUsRUFBRSxDQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UscUJBQXFCLEVBQUUsQ0FDekI7TUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtNQUtFLGFBQWE7TUFPYixzQkFBc0IsRUFBRSxDQUMxQjtNQUNFLGFBQWEsRUFBRSxDQUNmO1FBS0UsYUFBYSxFQUFFLENBQ3JCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUUsQ0FDaEI7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxDQUNmO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYTtNQUNiLGlCQUFpQixFQUFFLENBQ25COztRQUVFLFVBQVU7UUFDVixTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFLENBQ3BCOztRQUVFLGFBQWEsRUFBRSxDQUNqQjtRQUNFLGVBQWU7UUFDZixxQkFBcUIsRUFBRSxDQUN6QjtRQUNFLG1CQUFtQixFQUFFLENDck03Qjs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBOztFQUVFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDRXBHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGLENEREU7RUFDRSx3QkFBQTtBQ0dKLENERkk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNJTixDREhNO0VBQ0UsaUJBQUE7QUNLUixDREFJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0VOLENERE07RUFDRSxxQ0FBQTtBQ0dSLENERE07RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNHUixDRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1IsQ0RBSTtFQUdFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FOLENER0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKLENERUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FOLENERUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNBTixDREVRO0VBQ0UsZ0JBQUE7QUNBVixDREljO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0ZoQixDRFFNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNOUixDRFFNOzs7O0VBSUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05SLENEYU07RUFDRSxpQkFBQTtBQ1hSLENBM0VNO0VBQ0UsdUJBQUE7QUE4RVIsQ0EzRU07RUFDRSx5QkM4REU7QURlVixDQTNFUTtFQUNFLGdCQUFBO0FBNkVWLENBekVNO0VBQ0UscUJDc0VPO0FES2YsQ0F6RVE7RUFDRSw2QkFBQTtFQUFBLHlCQUFBO0FBMkVWLENBeEVRO0VBQ0UseUJDREE7QUQyRVYsQ0F4RVU7RUFDRSxzQkFBQTtBQTBFWixDQXJFVTtFQUNFLGlCQUFBO0FBdUVaLENBbkVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBcUVWLENBaEVNO0VBQ0UsNkJBQUE7RUFDQSxjQzBCSztBRHdDYixDQS9EVTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBaUVaLENBL0RZO0VBQ0UsU0FBQTtBQWlFZCxDQS9EYztFQUNFLFNBQUE7QUFpRWhCLENBMURnQjtFQUNFLHdCQUFBO0FBNERsQixDQTFEa0I7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBNERwQixDQXREZ0I7RUFDRSxjQUFBO0VBQ0EseUJDc0hPO0FEOUR6QixDQW5EZ0I7RUFDRSxjQzlEUjtBRG1IVixDQW5Ea0I7RUFDRSxvQ0FBQTtFQUNBLHFCQ0ZMO0FEdURmLENBaERrQjtFQUNFLFVBQUE7RUFDQSxXQ3RHWjtFRHVHWSxvQ0FBQTtFQUNBLHFCQzNFVjtFRDRFVSxvQkFBQTtBQWtEcEIsQ0E5Q2dCO0VBQ0UseUJDc0ZGO0VEckZFLG9CQUFBO0FBZ0RsQixDQTVDYztFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQzJFQTtFRDFFQSx5QkFBQTtFQUNBLHNCQzVCQTtFRDZCQSxlRTdHQztBRjJKakIsQ0E1Q2dCO0VBQ0UsVUFBQTtBQThDbEIsQ0FyQ1E7RUFDRSx1QkFBQTtBQXVDVixDQWhDTTs7OztFQUlFLGlCQUFBO0FBa0NSLENBM0JBO0VBQ0U7SUFDRSxhQUFBO0VBOEJGOztFQTNCQTtJQUNFLDZCQUFBO0lBQ0Esb0JBQUE7RUE4QkY7QUFDRixDQTNCQTtFQUNFO0lBQ0UsZUFBQTtJQUFBLGdCQUFBO0VBNkJGOztFQTFCQTtJQUNFLGFBQUE7RUE2QkY7QUFDRixDQTFCQTtFQUNFO0lBQ0UsYUFBQTtFQTRCRjs7RUF6QkE7SUFDRSxlQUFBO0lBQUEsZ0JBQUE7RUE0QkY7QUFDRixDQXRCRTtFQUNFLGNFdElnQjtBRjhKcEIsQ0FsQk07RUFDRSx5QkVsSlE7QUZzS2hCLENBakJNO0VBQ0UscUJFaEpVO0FGbUtsQixDQWhCTTtFQUNFLGNFekpRO0FGMktoQixDQWRVOztFQUVFLHlCRTlKRTtFRitKRixxQkUzSk07QUYyS2xCLENBWlk7RUFDRSx5QkVwS0E7QUZrTGQsQ0FYWTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7QUFhZCxDQUZNO0VBQ0UscUNFcEtXO0FGd0tuQixDQURNO0VBQ0Usc0NFektVO0FGNEtsQixDQUFNO0VBQ0UsY0VsTFE7QUZvTGhCLENBRVU7O0VBRUUscUNFbExPO0VGbUxQLGlDRW5MTztBRm1MbkIsQ0FJWTtFQUNFLGNFOUxFO0FGNExoQixDQUtZO0VBQ0UscUNFNUxLO0FGeUxuQixDQU1ZO0VBQ0UsZ0RBQUE7RUFDQSw0Q0FBQTtBQUpkIiwiZmlsZSI6ImRhdGF0YWJsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuYm9vdHN0cmFwIHRhYmxlIHRoZW1lXG4qL1xuXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4M2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVtcHR5LXJvdyB7XG4gICAgICAkYWxlcnQtcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nLXkgJGFsZXJ0LXBhZGRpbmcteDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xyXG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xyXG5AaW1wb3J0IFwiLi4vY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi9jb3JlL2NvbG9ycy9wYWxldHRlLXZhcmlhYmxlc1wiO1xyXG5cclxuLm5neC1kYXRhdGFibGUge1xyXG4gICYuYm9vdHN0cmFwIHtcclxuICAgICYuY29yZS1ib290c3RyYXAge1xyXG4gICAgICAmLmhlaWdodC03MC12aCB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuXHJcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG5cclxuICAgICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsIHtcclxuICAgICAgICAgIC5jZWxsLWxpbmUtaGVpZ2h0IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuICAgICAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgICAgICAgIC5wYWdlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIGEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcclxuICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQsXHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtIDEuMDM1cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMC41NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRncmV5LWNvbG9yLCBkYXJrZW4tMSk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWJnO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gJHBhZ2luYXRpb24tcGFkZGluZy14O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC4xO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICRwYWdpbmF0aW9uLWJvcmRlci13aWR0aCBzb2xpZCAkcGFnaW5hdGlvbi1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1yb290O1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5oZWFkZXItaGVpZ2h0LTUwIHtcclxuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuXHJcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcclxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxyXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IGZvciBTbWFsbCAmIE1lZGl1bSBkZXZpY2VzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wYWdlLWNvdW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5kZXNrdG9wLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmRlc2t0b3AtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gIH1cclxufVxyXG5cclxuaHRtbCBib2R5LmxheW91dC1kYXJrIHtcclxuXHJcbiAgLy8gZm9yIGRhcmsgYW5kIHRyYW5zcGFyZW50IGxheW91dHNcclxuICAuZGF0YXRhYmxlLWZvb3RlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XHJcbiAgICBjb2xvcjogJGRsLWRpc2FibGVkLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGRhcmsgbGF5b3V0XHJcbiAgJjpub3QoLmxheW91dC10cmFuc3BhcmVudCkge1xyXG4gICAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcclxuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1kYXJrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XHJcblxyXG4gICAgICAgIC5wYWdlciBsaSB7XHJcblxyXG4gICAgICAgICAgJi5kaXNhYmxlZCBhLFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRsLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZvciB0cmFuc3BhcmVudCBsYXlvdXRcclxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XHJcbiAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xyXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnBhZ2VyIGxpIHtcclxuXHJcbiAgICAgICAgICAmLmRpc2FibGVkIGEsXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciBhIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICM5NzVBRkYgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAjNDBDMDU3ICFkZWZhdWx0O1xyXG4kaW5mbzogIzJGOEJFNiAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICNGNzdFMTcgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICNGNTUyNTIgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICM2MTZEODkgIWRlZmF1bHQ7XHJcbiRsaWdodDogI0RCREVFNSAhZGVmYXVsdDtcclxuJGRhcms6ICMxQTA1MUQgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXHJcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxyXG4gICAgXCJsaWdodFwiOiAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogJGRhcmtcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuXHJcbiRzcGFjZXI6IDEuNXJlbTtcclxuJHNwYWNlcnM6IChcclxuICAwOiAwLFxyXG4gIDE6IChcclxuICAgICRzcGFjZXIgKiAwLjI1XHJcbiAgKSxcclxuICAyOiAoXHJcbiAgICAkc3BhY2VyICogMC41XHJcbiAgKSxcclxuICAzOiAkc3BhY2VyLFxyXG4gIDQ6IChcclxuICAgICRzcGFjZXIgKiAxLjVcclxuICApLFxyXG4gIDU6IChcclxuICAgICRzcGFjZXIgKiAzXHJcbiAgKVxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcbiRib2R5LWJnOiAjRjdGN0Y4O1xyXG4kYm9keS1jb2xvcjogIzM0MkU0OSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4xICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICMxNzEwMkYgIWRlZmF1bHQ7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1tdXRlZDogI0JEQkRCRCAhZGVmYXVsdDtcclxuXHJcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogMS4xcmVtICFkZWZhdWx0O1xyXG5cclxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIFRhYmxlc1xyXG4vL1xyXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAxLjE1cmVtIDJyZW0gIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY2NlbnQtYmc6IHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vXHJcbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuMzc1cmVtICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kYnRuLXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcclxuJGJ0bi1saW5lLWhlaWdodDogMS41cmVtICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEZvcm1zXHJcblxyXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4ycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAxLjUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1jb2xvcjogIzc1Nzg3ZCAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBub25lICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0OiBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgM3B4KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAyLjZyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vL1xyXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuXHJcblxyXG4vLyBOYXZzXHJcblxyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICM5RTlFOUUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6IDAgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMTBweCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAyMHB4ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tYmc6ICNGNUY1RjUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI0VFRUVFRSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogIzc1NzU3NSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNFMEUwRTAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYXJkc1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6IDEuNXJlbTtcclxuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbTtcclxuJGNhcmQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRib2R5LWJnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjZyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBUb2FzdHNcclxuXHJcbiR0b2FzdC1wYWRkaW5nLXk6IDAuNDVyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6IC04cHggOHB4IDE0cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNjY2NjY2NjY3cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIEFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuOTVyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1wYWRkaW5nLXg6IDEuNDVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmc6ICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcclxuXHJcbi8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIENvZGVcclxuXHJcbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xyXG4kY29kZS1jb2xvcjogJGRhbmdlciAhZGVmYXVsdDtcclxuXHJcbi8vIFV0aWxpdGllc1xyXG5cclxuJG92ZXJmbG93czogYXV0bywgaGlkZGVuLCB2aXNpYmxlLCBzY3JvbGwgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyB2ZXJ0aWNhbCBtZW51XHJcbiRtZW51LWV4cGFuZGVkLXdpZHRoLXNtOiAyMjBweDtcclxuJG1lbnUtZXhwYW5kZWQtd2lkdGg6IDI1MHB4O1xyXG4kbWVudS1leHBhbmRlZC13aWR0aC1sZzogMjgwcHg7XHJcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogNjBweDtcclxuXHJcbi8vIEhvcml6b250YWwgTWVudVxyXG4kbWVudS1hY3RpdmUtYmc6ICNFN0U5RUM7XHJcblxyXG4kZm9udC1zaXplLXJvb3Q6IDE1cHg7XHJcblxyXG4vLyBBdmF0YXJcclxuJGF2YXRhci1iZzogI0UwRTBFMDtcclxuJGF2YXRhci10ZXh0LWNvbG9yOiAjNjE2MTYxO1xyXG4kYXZhdGFyLXNpemU6IDMycHg7XHJcbiRhdmF0YXItc2l6ZS14bDogNzBweDtcclxuJGF2YXRhci1zaXplLWxnOiA1MHB4O1xyXG4kYXZhdGFyLXNpemUtbWQ6IDQwcHg7XHJcbiRhdmF0YXItc2l6ZS1zbTogMjRweDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZS1sZzogMTdweDtcclxuXHJcbi8vIFNoYWRvd3NcclxuJHNoYWRvdy11bWJyYS1vcGFjaXR5OiAwLjIgIWRlZmF1bHQ7XHJcbiRzaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcclxuJHNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XHJcblxyXG4vL3ZhcmlhYmxlcyBmb3Igc29jaWFsXHJcbiRzb2NpYWwtZmFjZWJvb2s6ICMzYjU5OTg7XHJcbiRzb2NpYWwtdHdpdHRlcjogIzU1YWNlZTtcclxuJHNvY2lhbC1waW50ZXJlc3Q6ICNjYzIxMjc7XHJcbiRzb2NpYWwtZ29vZ2xlOiAjZGQ0YjM5O1xyXG4kc29jaWFsLWxpbmtlZGluOiAjMDk3NmI0O1xyXG4kc29jaWFsLWRyaWJiYmxlOiAjZWE0Yzg5O1xyXG4kc29jaWFsLWdpdGh1YjogIzMzMzMzMztcclxuJHNvY2lhbC15b3V0dWJlOiAjZTUyZDI3O1xyXG4kc29jaWFsLWluc3RhZ3JhbTogIzEyNTY4ODtcclxuJHNvY2lhbC1yZWRkaXQ6ICNmZjQ1MDA7XHJcbiRzb2NpYWwtdHVtYmxyOiAjMzU0NjVjO1xyXG4kc29jaWFsLWJlaGFuY2U6ICMxNzY5ZmY7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gVmFyaWFibGVzIGZvciBEYXJrIExheW91dFxyXG4kZGFyay1zdHlsZTogdHJ1ZTtcclxuJGJnLWNvbG9yLWRhcms6ICMxMDEwMTA7XHJcbiRkbC10ZXh0LWNvbG9yOiAjQjJCMUI1O1xyXG4kZGwtYmctY29sb3I6ICMxRTFFMUU7XHJcbiRkbC1oZWFkaW5ncy1jb2xvcjogI0JGQkVDMjtcclxuJGRsLXRleHQtbXV0ZWQtY29sb3I6ICM4NDg0ODQ7XHJcbiRkbC1kaXNhYmxlZC1jb2xvcjogIzYyNjE2NDtcclxuJGRsLWJvcmRlci1jb2xvcjogIzQ3NDc0ODtcclxuJGRsLWNhcmQtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gVmFyaWFibGVzIEZvciBUcmFuc3BhcmVudCBMYXlvdXRcclxuXHJcbiR0bC10ZXh0LWNvbG9yOiAjRDZENUQ4O1xyXG4kdGwtaGVhZGluZ3MtY29sb3I6ICNFOUU5RUE7XHJcbiR0bC1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiR0bC10ZXh0LW11dGVkLWNvbG9yOiAjQzNDMkM1O1xyXG4kdGwtZGlzYWJsZWQtY29sb3I6ICM5RTlFOUU7XHJcbiR0bC1ib3JkZXItY29sb3I6IHJnYmEoI2VlZSwgMC4yKTtcclxuJHRsLWNhcmQtYmctY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEyKTtcclxuXHJcbiRiZy1nbGFzcy1oaWJpc2N1czogbGluZWFyLWdyYWRpZW50KFxyXG4gIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAjZjA1ZjU3LFxyXG4gICNjODNkNWMsXHJcbiAgIzk5MjQ1YSxcclxuICAjNjcxMzUxLFxyXG4gICMzNjA5NDBcclxuKTtcclxuJGJnLWdsYXNzLXB1cnBsZS1waXp6YXp6OiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICM2NjJkODYsXHJcbiAgIzhiMmE4YSxcclxuICAjYWUyMzg5LFxyXG4gICNjZjFkODMsXHJcbiAgI2VkMWU3OVxyXG4pO1xyXG4kYmctZ2xhc3MtYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudChcclxuICB0byByaWdodCBib3R0b20sXHJcbiAgIzE0NGU2OCxcclxuICAjMDA2ZDgzLFxyXG4gICMwMDhkOTIsXHJcbiAgIzAwYWQ5MSxcclxuICAjNTdjYTg1XHJcbik7XHJcbiRiZy1nbGFzcy1lbGVjdHJpYy12aW9sZXQ6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjNGEwMGUwLFxyXG4gICM2MDBkZTAsXHJcbiAgIzcxMTllMSxcclxuICAjODAyM2UxLFxyXG4gICM4ZTJkZTJcclxuKTtcclxuJGJnLWdsYXNzLXBvcnRhZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjOTdhYmZmLFxyXG4gICM3OThjZTUsXHJcbiAgIzViNmVjYixcclxuICAjM2I1MWIxLFxyXG4gICMxMjM1OTdcclxuKTtcclxuJGJnLWdsYXNzLXR1bmRvcmE6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjZWY0NjczLFxyXG4gICNmZmM4NDZcclxuKTtcclxuIl19 */"], encapsulation: 2 });
    return NewrecordrowProsesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default-src_app_newrecordrow_proses_newrecordrow_proses_component_ts.js.map