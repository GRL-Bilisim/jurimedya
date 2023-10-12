"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_isgucuboard_isgucuboard_module_ts"],{

/***/ 32442:
/*!****************************************************************!*\
  !*** ./src/app/isgucuboard/crud-modal/crud-modal.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudModalComponent": function() { return /* binding */ CrudModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);




var CrudModalComponent = /** @class */ (function () {
    function CrudModalComponent(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
    }
    CrudModalComponent.prototype.ngOnInit = function () {
        this.buildItemForm(this.data);
    };
    CrudModalComponent.prototype.buildItemForm = function (item) {
        this.myForm = this.formBuilder.group({
            title: [item.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
            message: [item.message || '', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
        });
    };
    CrudModalComponent.prototype.submitForm = function () {
        this.activeModal.close(this.myForm.value);
    };
    CrudModalComponent.ɵfac = function CrudModalComponent_Factory(t) { return new (t || CrudModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
    CrudModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrudModalComponent, selectors: [["app-crud-modal"]], inputs: { id: "id", data: "data" }, decls: 21, vars: 4, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "modal-body", "taskboard-modal"], [1, "container"], [1, "form-group", "position-relative", "has-icon-left"], [1, "form-control-position"], [1, "ft-edit-2"], ["readonly", "", "type", "text", "formControlName", "title", "id", "todoTitle", "placeholder", "Title", "required", "", 1, "form-control", 3, "formControl", "keydown.enter"], ["todoTitle", ""], [1, "form-control-position", "control-position-right"], [1, "ft-message-square"], ["readonly", "", "formControlName", "message", "id", "todoMessage", "placeholder", "Message", "required", "", 1, "form-control", 3, "formControl", "keydown.enter"], ["todoMessage", ""]], template: function CrudModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CrudModalComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " x ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CrudModalComponent_Template_form_ngSubmit_5_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "fieldset", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function CrudModalComponent_Template_input_keydown_enter_11_listener($event) { return $event.preventDefault(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "fieldset", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "textarea", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function CrudModalComponent_Template_textarea_keydown_enter_18_listener($event) { return $event.preventDefault(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "        <div class=\"form-control-position control-position-right\">\n          <i class=\"ft-message-square\"></i>\n        </div>\n      ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.id != 0 ? "G\u00F6rev \u00D6nizleme" : "Create Task", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myForm.controls["title"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.myForm.controls["message"]);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CrudModalComponent;
}());



/***/ }),

/***/ 54691:
/*!***********************************************************!*\
  !*** ./src/app/isgucuboard/isgucuboard-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsGucuBoardRoutingModule": function() { return /* binding */ IsGucuBoardRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _isgucuboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isgucuboard.component */ 3773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _isgucuboard_component__WEBPACK_IMPORTED_MODULE_0__.IsGucuBoardComponent,
        data: {
            title: 'İş Gücü'
        },
    }
];
var IsGucuBoardRoutingModule = /** @class */ (function () {
    function IsGucuBoardRoutingModule() {
    }
    IsGucuBoardRoutingModule.ɵfac = function IsGucuBoardRoutingModule_Factory(t) { return new (t || IsGucuBoardRoutingModule)(); };
    IsGucuBoardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IsGucuBoardRoutingModule });
    IsGucuBoardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return IsGucuBoardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IsGucuBoardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3773:
/*!******************************************************!*\
  !*** ./src/app/isgucuboard/isgucuboard.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsGucuBoardComponent": function() { return /* binding */ IsGucuBoardComponent; }
/* harmony export */ });
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/data/sweet-alerts */ 645);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _isgucuboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isgucuboard.service */ 48422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ 82503);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 51863);












var _c0 = ["marketingTitle"];
var _c1 = ["marketingMessage"];
function IsGucuBoardComponent_div_8_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("task-id", task_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r3.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", task_r3.adi_soyadi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r3.vardiyaaciklamasi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r3.unvani);
} }
function IsGucuBoardComponent_div_8_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, IsGucuBoardComponent_div_8_ng_container_10_div_1_Template, 10, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var task_r3 = ctx.$implicit;
    var dep_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", dep_r1.is_merkezi_adi == task_r3.istasyon);
} }
function IsGucuBoardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IsGucuBoardComponent_div_8_Template_input_ngModelChange_8_listener($event) { var dep_r1 = ctx.$implicit; return dep_r1.masraf_merkezi_adi = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, IsGucuBoardComponent_div_8_ng_container_10_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dep_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dep_r1.is_merkezi_adi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "search_", dep_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", dep_r1.id)("ngModel", dep_r1.masraf_merkezi_adi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", dep_r1.is_merkezi_adi);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx_r0.marketingTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 8, ctx_r0.tasks, dep_r1.masraf_merkezi_adi));
} }
var IsGucuBoardComponent = /** @class */ (function () {
    function IsGucuBoardComponent(dragulaService, elRef, taskBoardService, modalService, ref, http) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.elRef = elRef;
        this.taskBoardService = taskBoardService;
        this.modalService = modalService;
        this.ref = ref;
        this.http = http;
        this.currentDate = new Date();
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_0__;
        this.BAG = "task-group";
        this.ismerkezleri = [];
        this.adi = localStorage.getItem('adi');
        this.cities = [];
        var taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407";
        this.http.get(taskUrl).subscribe(function (data) {
            _this.tasks = data;
            _this.loadTasks();
        });
        dragulaService.drop(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el, target = _a.target;
            _this.updateTaskStatus(el.getAttribute('task-id'), target.id);
        });
    }
    IsGucuBoardComponent.prototype.yenidenyukle = function () {
        var _this = this;
        var taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407";
        this.http.get(taskUrl).subscribe(function (data) {
            _this.tasks = data;
            _this.loadTasks();
        });
    };
    IsGucuBoardComponent.prototype.loadTasks = function () {
        //  this.marketingTasks = this.tasks.filter((task: Task) => task.status === 'Atandı');
        this.ref.markForCheck();
    };
    IsGucuBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=237";
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.blokalanlari = data;
            for (var i = 0; i < _this.blokalanlari.length; i++) {
                var cities_psh2 = [];
                cities_psh2 = [];
                for (var j = 0; j < _this.blokalanlari.length; j++) {
                    cities_psh2.push({ id: _this.blokalanlari[j].id, name: _this.blokalanlari[j].masraf_merkezi_adi });
                }
                _this.Merkezlistesi = cities_psh2;
            }
        });
    };
    IsGucuBoardComponent.prototype.onChange = function (event) {
        var _this = this;
        var departUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=236&masrafmerkezi=" + event.name;
        this.http.get(departUrl).subscribe(function (data) {
            _this.ismerkezleri = data;
            _this.ref.markForCheck();
        });
    };
    IsGucuBoardComponent.prototype.updateTaskStatus = function (id, merkez, task) {
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
        var isistasyonGuncelle = localStorage.getItem('url') + "angular/dataservis.php?page_id=perMerkezGuncelle&personelid=" + currentTask.id + "&isistasyonu=" + merkez;
        console.log(isistasyonGuncelle);
        this.http.get(isistasyonGuncelle).subscribe(function (data) {
            if (data[0].status == 'OK') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "success",
                    title: 'İş İstasyonu Değiştirildi',
                    text: 'Personelin çalıştığı iş istasyonu değiştirildi.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                });
                _this.yenidenyukle();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    icon: "warning",
                    title: 'İş İstasyonu Değiştirilemedi',
                    text: 'Personelin çalıştığı iş istasyonu değiştirilemedi.',
                    customClass: {
                        confirmButton: 'btn btn-warning'
                    },
                });
                _this.yenidenyukle();
            }
        });
        this.loadTasks();
    };
    IsGucuBoardComponent.ɵfac = function IsGucuBoardComponent_Factory(t) { return new (t || IsGucuBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_5__.DragulaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_isgucuboard_service__WEBPACK_IMPORTED_MODULE_2__.IsGucuBoardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
    IsGucuBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IsGucuBoardComponent, selectors: [["app-isgucuboard"]], viewQuery: function IsGucuBoardComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.titleInputRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.messageInputRef = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_isgucuboard_service__WEBPACK_IMPORTED_MODULE_2__.IsGucuBoardService])], decls: 9, vars: 3, consts: [["id", "taskboard", 1, "app-taskboard"], [1, "row"], [1, "col-3"], [1, "form-group", "mb-2"], ["for", "basic-form-1"], ["bindLabel", "name", "bindValue", "id", "placeholder", "\u0130\u015F Merkezleri", 2, "font-size", "14px", 3, "ngModel", "items", "change", "ngModelChange"], ["class", "col-xl-3 col-md-3 col-sm-6 col-12", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-md-3", "col-sm-6", "col-12"], [1, "mt-2", "mb-0"], [1, "d-flex", "align-items-center"], [1, "ft-cast", "mr-2"], [1, "form-group", "form-inline"], ["type", "text", "placeholder", "Aranacak Personel", 1, "form-control", "ml-2", "mt-2", 3, "name", "id", "ngModel", "ngModelChange"], [1, "dragdrop-container", "scrollbarDiv", 3, "dragula", "id", "dragulaModel"], [4, "ngFor", "ngForOf"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "d-flex", "justify-content-center", "mb-2"], [2, "white-space", "normal"], [1, "text-center"]], template: function IsGucuBoardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "PERSONEL F\u0130LTRES\u0130");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ng-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function IsGucuBoardComponent_Template_ng_select_change_6_listener($event) { return ctx.onChange($event); })("ngModelChange", function IsGucuBoardComponent_Template_ng_select_ngModelChange_6_listener($event) { return ctx.selectedPer = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, IsGucuBoardComponent_div_8_Template, 12, 11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedPer)("items", ctx.Merkezlistesi);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ismerkezleri);
        } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, ng2_dragula__WEBPACK_IMPORTED_MODULE_5__.DragulaDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe], styles: [".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0;\n}\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table;\n}\n\n/* .dragdrop-container {\n   display: table-cell;\n   background-color: rgba(255, 255, 255, 0.2);\n   width: 25%;\n } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n/*\n  * note that styling gu-mirror directly is a bad practice because it's too generic.\n  * you're better off giving the draggable elements a unique class and styling that directly!\n  */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out;\n}\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c;\n}\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: auto;\n  cursor: initial;\n}\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center;\n}\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px;\n}\n\n.taskboard-modal-footer .btn-save {\n  color: #fff !important;\n}\n\n.scrollbarDiv {\n  overflow-y: scroll;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzZ3VjdWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNIOztBQUVDLHlDQUFBOztBQUNBO0VBQ0UsY0FBQTtBQUNIOztBQUVDOzs7O0lBQUE7O0FBS0E7RUFDRSxvQ0FBQTtBQUNIOztBQUVDOzs7R0FBQTs7QUFJQTs7RUFLRSxvQ0FBQTtBQUZIOztBQUtDO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtBQUZIOztBQUtDO0VBQ0UsZ0JBQUE7RUFFQSx3QkFBQTtBQUZIOztBQUtDO0VBQ0UseUJBQUE7QUFGSDs7QUFLQztFQUNFLDBDQUFBO0FBRkg7O0FBS0M7O0VBRUUsWUFBQTtFQUFBLGVBQUE7QUFGSDs7QUFLQztFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUZIOztBQUtDO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZIOztBQUtDO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSDs7QUFNRztFQUNFLHNCQUFBO0FBSEw7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFIRiIsImZpbGUiOiJpc2d1Y3Vib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuZ2gtZm9yayB7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgdG9wOiAwO1xyXG4gICByaWdodDogMDtcclxuICAgYm9yZGVyOiAwO1xyXG4gfVxyXG5cclxuIC8qIGRyYWd1bGEtc3BlY2lmaWMgZXhhbXBsZSBwYWdlIHN0eWxlcyAqL1xyXG4gLmRyYWdkcm9wLXdyYXBwZXIge1xyXG4gICBkaXNwbGF5OiB0YWJsZTtcclxuIH1cclxuXHJcbiAvKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH0gKi9cclxuIC5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiB9XHJcblxyXG4gLypcclxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxyXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXHJcbiAgICovXHJcbiAuZHJhZ2Ryb3AtY29udGFpbmVyPmRpdixcclxuIC5ndS1taXJyb3Ige1xyXG4gICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gfVxyXG5cclxuIC5kcmFnZHJvcC1jb250YWluZXI+ZGl2IHtcclxuICAgY3Vyc29yOiBtb3ZlO1xyXG4gICBjdXJzb3I6IGdyYWI7XHJcbiAgIGN1cnNvcjogLW1vei1ncmFiO1xyXG4gICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuIH1cclxuXHJcbiAuZ3UtbWlycm9yIHtcclxuICAgY3Vyc29yOiBncmFiYmluZztcclxuICAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xyXG4gICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XHJcbiB9XHJcblxyXG4gLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xyXG4gfVxyXG5cclxuIC5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuIH1cclxuXHJcbiAjbGVmdC1sb3ZlaGFuZGxlcz5kaXYsXHJcbiAjcmlnaHQtbG92ZWhhbmRsZXM+ZGl2IHtcclxuICAgY3Vyc29yOiBpbml0aWFsO1xyXG4gfVxyXG5cclxuIC5oYW5kbGUge1xyXG4gICBwYWRkaW5nOiAwIDVweDtcclxuICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgY3Vyc29yOiBtb3ZlO1xyXG4gfVxyXG5cclxuIC5pbWFnZS10aGluZyB7XHJcbiAgIG1hcmdpbjogMjBweCAwO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuIC5zbGFjay1qb2luIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHJpZ2h0OiAxMHB4O1xyXG4gICB0b3A6IDUwJTtcclxuICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiB9XHJcblxyXG4gLnRhc2tib2FyZC1tb2RhbC1mb290ZXIge1xyXG4gICAuYnRuLXNhdmUge1xyXG4gICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuIH1cclxuLnNjcm9sbGJhckRpdntcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufSJdfQ== */"], encapsulation: 2, changeDetection: 0 });
    return IsGucuBoardComponent;
}());



/***/ }),

/***/ 38271:
/*!**************************************************!*\
  !*** ./src/app/isgucuboard/isgucuboard.model.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": function() { return /* binding */ Task; }
/* harmony export */ });
var Task = /** @class */ (function () {
    function Task(id, UserID, istasyon) {
        this.id = id;
        this.UserID = UserID;
        this.istasyon = istasyon;
    }
    return Task;
}());



/***/ }),

/***/ 10173:
/*!***************************************************!*\
  !*** ./src/app/isgucuboard/isgucuboard.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsGucuBoardModule": function() { return /* binding */ IsGucuBoardModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 51863);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ 82503);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _isgucuboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isgucuboard-routing.module */ 54691);
/* harmony import */ var _isgucuboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isgucuboard.component */ 3773);
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ 32442);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











var IsGucuBoardModule = /** @class */ (function () {
    function IsGucuBoardModule() {
    }
    IsGucuBoardModule.ɵfac = function IsGucuBoardModule_Factory(t) { return new (t || IsGucuBoardModule)(); };
    IsGucuBoardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: IsGucuBoardModule });
    IsGucuBoardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
                _isgucuboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.IsGucuBoardRoutingModule,
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__.DragulaModule.forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule
            ]] });
    return IsGucuBoardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](IsGucuBoardModule, { declarations: [_isgucuboard_component__WEBPACK_IMPORTED_MODULE_2__.IsGucuBoardComponent,
        _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_3__.CrudModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        _isgucuboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.IsGucuBoardRoutingModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_6__.DragulaModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule] }); })();


/***/ }),

/***/ 48422:
/*!****************************************************!*\
  !*** ./src/app/isgucuboard/isgucuboard.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsGucuBoardService": function() { return /* binding */ IsGucuBoardService; }
/* harmony export */ });
/* harmony import */ var _isgucuboard_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isgucuboard.model */ 38271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 75428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var IsGucuBoardService = /** @class */ (function () {
    function IsGucuBoardService() {
        this.tasks = [
            new _isgucuboard_model__WEBPACK_IMPORTED_MODULE_0__.Task(1, 1, 'D')
        ];
    }
    IsGucuBoardService.prototype.addNewTask = function (title, message, type) {
        var task = {
            id: 1,
            UserID: Math.round(Math.random() * 10000000000),
            istasyon: 'D',
        };
        this.tasks.unshift(task);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.tasks.slice()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(100));
    };
    IsGucuBoardService.ɵfac = function IsGucuBoardService_Factory(t) { return new (t || IsGucuBoardService)(); };
    IsGucuBoardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: IsGucuBoardService, factory: IsGucuBoardService.ɵfac });
    return IsGucuBoardService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_isgucuboard_isgucuboard_module_ts.js.map