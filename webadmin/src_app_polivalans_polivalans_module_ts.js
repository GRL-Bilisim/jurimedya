"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_polivalans_polivalans_module_ts"],{

/***/ 26545:
/*!***************************************************************!*\
  !*** ./src/app/polivalans/crud-modal/crud-modal.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudModalComponent": function() { return /* binding */ CrudModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/sweet-alerts */ 645);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);







var CrudModalComponent = /** @class */ (function () {
    function CrudModalComponent(activeModal, http, formBuilder) {
        this.activeModal = activeModal;
        this.http = http;
        this.formBuilder = formBuilder;
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__;
    }
    CrudModalComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data);
    };
    CrudModalComponent.prototype.buildItemForm = function (item) {
        this.personelId = item.personelID;
        this.myForm = this.formBuilder.group({
            gorevi: [item.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            yetkinlik: [item.message || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            polId: [item.id || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    };
    CrudModalComponent.prototype.submitForm = function () {
        var _this = this;
        var id = this.myForm.controls['polId'].value;
        var yetkinlik = this.myForm.controls['yetkinlik'].value;
        var gorevi = this.myForm.controls['gorevi'].value;
        var PolGuncelleUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=perPolGuncelle&polId=" + id + "&yetkinlik=" + yetkinlik + "&gorevi=" + gorevi + "&userid=" + localStorage.getItem('userid');
        this.http.get(PolGuncelleUrl).subscribe(function (data) {
            if (data[0].status == 'OK') {
                _this.activeModal.close('OK');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "success",
                    title: 'Polivalans Güncellendi',
                    text: 'Personel polivalans güncelleme başarılı.',
                    customClass: {
                        confirmButton: 'btn btn-warning'
                    },
                });
            }
            else {
                _this.activeModal.close('ERR');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "warning",
                    title: 'Polivalans Güncellenemedi',
                    text: 'Personel polivalans güncellemesi başarısız.',
                    customClass: {
                        confirmButton: 'btn btn-warning'
                    },
                });
            }
        });
    };
    CrudModalComponent.ɵfac = function CrudModalComponent_Factory(t) { return new (t || CrudModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
    CrudModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CrudModalComponent, selectors: [["app-crud-modal"]], inputs: { id: "id", data: "data" }, decls: 22, vars: 4, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [1, "form-row", 3, "formGroup", "ngSubmit"], [1, "modal-body", "taskboard-modal"], ["type", "hidden", "formControlName", "polId", 1, "form-control", 3, "formControl", "keydown.enter"], [1, "row"], [1, "col-md-8"], ["for", ""], ["type", "text", "formControlName", "gorevi", "id", "todoTitle", "placeholder", "Yetkinlik", "required", "", 1, "form-control", 3, "formControl", "keydown.enter"], ["todoTitle", ""], [1, "col-md-4"], ["type", "text", "maxlength", "1", "formControlName", "yetkinlik", "id", "todoMessage", "placeholder", "G\u00F6rev Tan\u0131m\u0131", "required", "", 1, "form-control", 3, "formControl", "keydown.enter"], ["todoMessage", ""], [1, "modal-footer", "taskboard-modal-footer"], [1, "btn", "btn-primary", "btn-save", "mt-3"]], template: function CrudModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "D\u00FCzenle ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CrudModalComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " x ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CrudModalComponent_Template_form_ngSubmit_5_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function CrudModalComponent_Template_input_keydown_enter_7_listener($event) { return $event.preventDefault(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "G\u00F6revi");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function CrudModalComponent_Template_input_keydown_enter_12_listener($event) { return $event.preventDefault(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Yetkinlik");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 12, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function CrudModalComponent_Template_input_keydown_enter_17_listener($event) { return $event.preventDefault(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " G\u00FCncelle ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.myForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.myForm.controls["polId"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.myForm.controls["gorevi"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.myForm.controls["yetkinlik"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CrudModalComponent;
}());



/***/ }),

/***/ 80698:
/*!*********************************************************!*\
  !*** ./src/app/polivalans/polivalans-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polivalansRoutingModule": function() { return /* binding */ polivalansRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _polivalans_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polivalans.component */ 89510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _polivalans_component__WEBPACK_IMPORTED_MODULE_0__.polivalansComponent,
        data: {
            title: 'polivalans'
        },
    }
];
var polivalansRoutingModule = /** @class */ (function () {
    function polivalansRoutingModule() {
    }
    polivalansRoutingModule.ɵfac = function polivalansRoutingModule_Factory(t) { return new (t || polivalansRoutingModule)(); };
    polivalansRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: polivalansRoutingModule });
    polivalansRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return polivalansRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](polivalansRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 89510:
/*!****************************************************!*\
  !*** ./src/app/polivalans/polivalans.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polivalansComponent": function() { return /* binding */ polivalansComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/data/sweet-alerts */ 645);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polivalans_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polivalans.service */ 41065);
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ 26545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ 82503);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 51863);













var _c0 = ["marketingTitle"];
var _c1 = ["marketingMessage"];
function polivalansComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Yetkinlik");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function polivalansComponent_div_18_Template_button_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); var task_r2 = restoredCtx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.updateManuel(task_r2.id, task_r2.id, "PersonelPolivalans"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("task-id", task_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", task_r2.gorevtanimi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", task_r2.birimi, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "taskVal_", task_r2.id, "");
} }
function polivalansComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function polivalansComponent_div_30_Template_button_click_9_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); var task_r5 = restoredCtx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.editTask(task_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "D\u00FCzelt");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function polivalansComponent_div_30_Template_button_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); var task_r5 = restoredCtx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.deleteTask(task_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Sil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("task-id", task_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](task_r5.gorevi);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Yetkinlik : ", task_r5.yetkinlik, "");
} }
var polivalansComponent = /** @class */ (function () {
    function polivalansComponent(dragulaService, elRef, taskBoardService, modalService, ref, http) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.elRef = elRef;
        this.taskBoardService = taskBoardService;
        this.modalService = modalService;
        this.ref = ref;
        this.http = http;
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__;
        this.BAG = "task-group";
        this.departman = [];
        this.adi = localStorage.getItem('adi');
        this.cities = [];
        var departUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=243";
        this.http.get(departUrl).subscribe(function (data) {
            _this.departman = data;
        });
        var taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=546";
        this.http.get(taskUrl).subscribe(function (data) {
            _this.tasks = data;
            _this.loadTasks();
        });
        dragulaService.drop(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el, target = _a.target;
            var dd = el.getAttribute('task-id');
            var cc = 'taskVal_' + dd;
            var yetval = document.getElementById(cc).value;
            if (yetval == '' || (_this.personelId == '' || _this.personelId == undefined)) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "warning",
                    title: 'Alanlar Bırakılamaz!',
                    text: 'Polivalans girerken personel ve yetkinlik girmeyi unutmayınız.',
                    customClass: {
                        confirmButton: 'btn btn-warning'
                    },
                });
                _this.yenidenyukle();
            }
            else {
                _this.updateTaskStatus(yetval, el.getAttribute('task-id'), target.id);
            }
        });
    }
    polivalansComponent.prototype.yenidenyukle = function () {
        var _this = this;
        if (this.personelId == '' || this.personelId == undefined) {
            var taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=546";
            this.http.get(taskUrl).subscribe(function (data) {
                _this.tasks = data;
                _this.loadTasks();
            });
        }
        else {
            var taskUrlA = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=547&personelId=" + this.personelId;
            this.http.get(taskUrlA).subscribe(function (data) {
                _this.taskAtanan = data;
                _this.loadTasks();
            });
            var taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=546";
            this.http.get(taskUrl).subscribe(function (data) {
                _this.tasks = data;
                _this.loadTasks();
            });
        }
    };
    polivalansComponent.prototype.onChange = function (event) {
        var _this = this;
        this.personelId = event.id;
        var taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=547&personelId=" + event.id;
        this.http.get(taskUrl).subscribe(function (data) {
            _this.taskAtanan = data;
            _this.loadTasks();
        });
    };
    polivalansComponent.prototype.loadTasks = function () {
        this.ref.markForCheck();
    };
    polivalansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=243";
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.blokalanlari = data;
            for (var i = 0; i < _this.blokalanlari.length; i++) {
                var cities_psh2 = [];
                cities_psh2 = [];
                for (var j = 0; j < _this.blokalanlari.length; j++) {
                    cities_psh2.push({ id: _this.blokalanlari[j].id, name: _this.blokalanlari[j].adi_soyadi });
                }
                _this.personellistesi = cities_psh2;
            }
        });
    };
    polivalansComponent.prototype.editTask = function (task) {
        var _this = this;
        console.log(task);
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_3__.CrudModalComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: false });
        modalRef.componentInstance.id = task.id; // should be the id
        modalRef.componentInstance.data = { title: task.gorevi, message: task.yetkinlik, id: task.id }; // should be the data
        modalRef.result.then(function (result) {
            if (result == 'OK') {
                _this.yenidenyukle();
            }
            else {
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    polivalansComponent.prototype.updateTaskStatus = function (yetval, id, merkez, task) {
        var _this = this;
        var currentTask;
        if (task) {
            currentTask = task;
        }
        else {
            currentTask = this.tasks.find(function (x) { return x.id == +id; });
            console.log(currentTask);
        }
        // dizinin kaçıncı elemanı olduğunu alıyor
        var index = this.tasks.indexOf(currentTask);
        this.tasks.splice(index, 1, currentTask);
        var taskGuncelleUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=perPolEkle&polId=" + currentTask.id + "&personelId=" + this.personelId + "&yetkinlik=" + yetval + "&userid=" + localStorage.getItem('userid');
        console.log(taskGuncelleUrl);
        this.http.get(taskGuncelleUrl).subscribe(function (data) {
            if (data[0].status == 'OK') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "success",
                    title: 'Polivalans Aktarıldı',
                    text: 'Personel polivalans girişi başarılı.',
                    customClass: {
                        confirmButton: 'btn btn-warning'
                    },
                });
                _this.yenidenyukle();
            }
        });
    };
    polivalansComponent.prototype.updateManuel = function (yetval, id, merkez, task) {
        var _this = this;
        var cc = 'taskVal_' + id;
        yetval = document.getElementById(cc).value;
        var currentTask;
        if (task) {
            currentTask = task;
        }
        else {
            currentTask = this.tasks.find(function (x) { return x.id == +id; });
            //  console.log(currentTask);
        }
        // dizinin kaçıncı elemanı olduğunu alıyor
        var index = this.tasks.indexOf(currentTask);
        this.tasks.splice(index, 1, currentTask);
        if (yetval > '0' && this.personelId != undefined) {
            var taskGuncelleUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=perPolGuncelle&polId=" + currentTask.id + "&personelId=" + this.personelId + "&yetkinlik=" + yetval + "&userid=" + localStorage.getItem('userid');
            // console.log(taskGuncelleUrl);
            this.http.get(taskGuncelleUrl).subscribe(function (data) {
                if (data[0].status == 'OK') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        icon: "success",
                        title: 'Polivalans Aktarıldı',
                        text: 'Personel polivalans girişi başarılı.',
                        customClass: {
                            confirmButton: 'btn btn-warning'
                        },
                    });
                    _this.yenidenyukle();
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: "warning",
                title: 'Alanlar Bırakılamaz!',
                text: 'Polivalans girerken personel ve yetkinlik girmeyi unutmayınız.',
                customClass: {
                    confirmButton: 'btn btn-warning'
                },
            });
            this.yenidenyukle();
        }
    };
    polivalansComponent.prototype.deleteTask = function (id) {
        // let task: Task = this.tasks.find(x => x.taskId === id);
        // let index = this.tasks.indexOf(task);
        // this.tasks.splice(index, 1);
        // console.log(id);
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                var polSil = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleteperpolivalans&index=" + id + "&userid=" + localStorage.getItem('userid');
                durum.http.get(polSil).subscribe(function (data) {
                    if (data[0].status == 'OK') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            icon: "success",
                            title: 'Polivalans Silindi',
                            text: 'Personele ait polivalans silme işlemi başarıyla gerçekleştirildi.',
                            customClass: {
                                confirmButton: 'btn btn-warning'
                            },
                        });
                    }
                    durum.yenidenyukle();
                });
                setTimeout(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
                }, 2000);
            }
        });
    };
    polivalansComponent.ɵfac = function polivalansComponent_Factory(t) { return new (t || polivalansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_6__.DragulaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_polivalans_service__WEBPACK_IMPORTED_MODULE_2__.polivalansService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient)); };
    polivalansComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: polivalansComponent, selectors: [["app-polivalans"]], viewQuery: function polivalansComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.titleInputRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.messageInputRef = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_polivalans_service__WEBPACK_IMPORTED_MODULE_2__.polivalansService])], decls: 32, vars: 16, consts: [["id", "taskboard", 1, "app-taskboard"], [1, "row"], [1, "col-3"], [1, "form-group", "mb-2"], ["for", "basic-form-1"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Personel Listesi", 2, "font-size", "14px", 3, "ngModel", "items", "change", "ngModelChange"], [1, "col-xl-4", "col-sm-4", "col-12"], [1, "mt-2", "mb-0"], [1, "d-flex", "align-items-center"], [1, "ft-cast", "mr-2"], [1, "form-group", "form-inline"], ["type", "text", "name", "term", "placeholder", "Aranacak Polivalans", 1, "form-control", "ml-2", "mt-2", 3, "ngModel", "ngModelChange"], ["id", "Polivalanslar", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], ["class", "card ", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "col-sm-6", "col-12"], [1, "ft-codepen", "mr-2"], ["type", "text", "name", "termA", "placeholder", "Aranacak Polivalans", 1, "form-control", "ml-2", "mt-2", 3, "ngModel", "ngModelChange"], ["id", "PersonelPolivalans", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-center"], [1, "badge", "bg-light-primary", 2, "white-space", "normal"], [1, "mb-2", "col-md-4", "text-center"], ["type", "text", "maxlength", "1", 1, "form-control", 3, "id"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "mt-1", "text-end", 3, "click"], [1, "icon-action-redo"], [1, "justify-content-start"], [1, "badge", "bg-light-warning", 2, "white-space", "normal"], [1, "badge", "bg-light-danger", 2, "white-space", "normal"], [2, "float", "right"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "mr-1", "text-end", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "mr-1", "text-end", 3, "click"]], template: function polivalansComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "PERSONEL F\u0130LTRES\u0130");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ng-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function polivalansComponent_Template_ng_select_change_6_listener($event) { return ctx.onChange($event); })("ngModelChange", function polivalansComponent_Template_ng_select_ngModelChange_6_listener($event) { return ctx.selectedPer = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Polivalanslar");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function polivalansComponent_Template_input_ngModelChange_16_listener($event) { return ctx.term = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, polivalansComponent_div_18_Template, 15, 4, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Atanan Polivalanslar");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function polivalansComponent_Template_input_ngModelChange_28_listener($event) { return ctx.termA = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, polivalansComponent_div_30_Template, 15, 3, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedPer)("items", ctx.personellistesi);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.term);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.marketingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](19, 10, ctx.tasks, ctx.term));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.termA);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.uiDesigningTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](31, 13, ctx.taskAtanan, ctx.termA));
        } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, ng2_dragula__WEBPACK_IMPORTED_MODULE_6__.DragulaDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: [".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0;\n}\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table;\n}\n\n/* .dragdrop-container {\n   display: table-cell;\n   background-color: rgba(255, 255, 255, 0.2);\n   width: 25%;\n } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n/*\n  * note that styling gu-mirror directly is a bad practice because it's too generic.\n  * you're better off giving the draggable elements a unique class and styling that directly!\n  */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out;\n}\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c;\n}\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: auto;\n  cursor: initial;\n}\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center;\n}\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px;\n}\n\n.taskboard-modal-footer .btn-save {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGl2YWxhbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0g7O0FBRUMseUNBQUE7O0FBQ0E7RUFDRSxjQUFBO0FBQ0g7O0FBRUM7Ozs7SUFBQTs7QUFLQTtFQUNFLG9DQUFBO0FBQ0g7O0FBRUM7OztHQUFBOztBQUlBOztFQUtFLG9DQUFBO0FBRkg7O0FBS0M7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0FBRkg7O0FBS0M7RUFDRSxnQkFBQTtFQUVBLHdCQUFBO0FBRkg7O0FBS0M7RUFDRSx5QkFBQTtBQUZIOztBQUtDO0VBQ0UsMENBQUE7QUFGSDs7QUFLQzs7RUFFRSxZQUFBO0VBQUEsZUFBQTtBQUZIOztBQUtDO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBRkg7O0FBS0M7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkg7O0FBS0M7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZIOztBQU1HO0VBQ0Usc0JBQUE7QUFITCIsImZpbGUiOiJwb2xpdmFsYW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5naC1mb3JrIHtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICB0b3A6IDA7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICBib3JkZXI6IDA7XHJcbiB9XHJcblxyXG4gLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXHJcbiAuZHJhZ2Ryb3Atd3JhcHBlciB7XHJcbiAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gfVxyXG5cclxuIC8qIC5kcmFnZHJvcC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfSAqL1xyXG4gLmRyYWdkcm9wLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuIH1cclxuXHJcbiAvKlxyXG4gICAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXHJcbiAgICogeW91J3JlIGJldHRlciBvZmYgZ2l2aW5nIHRoZSBkcmFnZ2FibGUgZWxlbWVudHMgYSB1bmlxdWUgY2xhc3MgYW5kIHN0eWxpbmcgdGhhdCBkaXJlY3RseSFcclxuICAgKi9cclxuIC5kcmFnZHJvcC1jb250YWluZXI+ZGl2LFxyXG4gLmd1LW1pcnJvciB7XHJcbiAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiB9XHJcblxyXG4gLmRyYWdkcm9wLWNvbnRhaW5lcj5kaXYge1xyXG4gICBjdXJzb3I6IG1vdmU7XHJcbiAgIGN1cnNvcjogZ3JhYjtcclxuICAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbiAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG4gfVxyXG5cclxuIC5ndS1taXJyb3Ige1xyXG4gICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XHJcbiAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxuIH1cclxuXHJcbiAuZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XHJcbiB9XHJcblxyXG4gLmRyYWdkcm9wLWNvbnRhaW5lci5leC1vdmVyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gfVxyXG5cclxuICNsZWZ0LWxvdmVoYW5kbGVzPmRpdixcclxuICNyaWdodC1sb3ZlaGFuZGxlcz5kaXYge1xyXG4gICBjdXJzb3I6IGluaXRpYWw7XHJcbiB9XHJcblxyXG4gLmhhbmRsZSB7XHJcbiAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICBjdXJzb3I6IG1vdmU7XHJcbiB9XHJcblxyXG4gLmltYWdlLXRoaW5nIHtcclxuICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLnNsYWNrLWpvaW4ge1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgcmlnaHQ6IDEwcHg7XHJcbiAgIHRvcDogNTAlO1xyXG4gICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICBsaW5lLWhlaWdodDogMTZweDtcclxuIH1cclxuXHJcbiAudGFza2JvYXJkLW1vZGFsLWZvb3RlciB7XHJcbiAgIC5idG4tc2F2ZSB7XHJcbiAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gfVxyXG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
    return polivalansComponent;
}());



/***/ }),

/***/ 16026:
/*!************************************************!*\
  !*** ./src/app/polivalans/polivalans.model.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": function() { return /* binding */ Task; }
/* harmony export */ });
var Task = /** @class */ (function () {
    function Task(id, PolTitle, PolYetkinlik, gorevi, yetkinlik) {
        this.id = id;
        this.PolTitle = PolTitle;
        this.PolYetkinlik = PolYetkinlik;
        this.gorevi = gorevi;
        this.yetkinlik = yetkinlik;
    }
    return Task;
}());



/***/ }),

/***/ 50626:
/*!*************************************************!*\
  !*** ./src/app/polivalans/polivalans.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polivalansModule": function() { return /* binding */ polivalansModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ 82503);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _polivalans_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polivalans-routing.module */ 80698);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 51863);
/* harmony import */ var _polivalans_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polivalans.component */ 89510);
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ 26545);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











var polivalansModule = /** @class */ (function () {
    function polivalansModule() {
    }
    polivalansModule.ɵfac = function polivalansModule_Factory(t) { return new (t || polivalansModule)(); };
    polivalansModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: polivalansModule });
    polivalansModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _polivalans_routing_module__WEBPACK_IMPORTED_MODULE_0__.polivalansRoutingModule,
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__.DragulaModule.forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule
            ]] });
    return polivalansModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](polivalansModule, { declarations: [_polivalans_component__WEBPACK_IMPORTED_MODULE_2__.polivalansComponent,
        _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_3__.CrudModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _polivalans_routing_module__WEBPACK_IMPORTED_MODULE_0__.polivalansRoutingModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_6__.DragulaModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 41065:
/*!**************************************************!*\
  !*** ./src/app/polivalans/polivalans.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polivalansService": function() { return /* binding */ polivalansService; }
/* harmony export */ });
/* harmony import */ var _polivalans_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polivalans.model */ 16026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var polivalansService = /** @class */ (function () {
    function polivalansService() {
        this.tasks = [
            new _polivalans_model__WEBPACK_IMPORTED_MODULE_0__.Task(1, 'Responsive', 'primary', 'C', 'V')
        ];
    }
    polivalansService.ɵfac = function polivalansService_Factory(t) { return new (t || polivalansService)(); };
    polivalansService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: polivalansService, factory: polivalansService.ɵfac });
    return polivalansService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_polivalans_polivalans_module_ts.js.map