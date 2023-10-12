"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_editrecordrow_editrecordrow_module_ts"],{

/***/ 25134:
/*!***************************************************************!*\
  !*** ./src/app/editrecordrow/editrecordrow-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditrecordrowRoutingModule": function() { return /* binding */ EditrecordrowRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _editrecordrow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editrecordrow.component */ 55798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _editrecordrow_component__WEBPACK_IMPORTED_MODULE_0__.EditrecordrowComponent,
        data: {
            title: 'Edit Record Form'
        },
    }
];
var EditrecordrowRoutingModule = /** @class */ (function () {
    function EditrecordrowRoutingModule() {
    }
    EditrecordrowRoutingModule.ɵfac = function EditrecordrowRoutingModule_Factory(t) { return new (t || EditrecordrowRoutingModule)(); };
    EditrecordrowRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditrecordrowRoutingModule });
    EditrecordrowRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return EditrecordrowRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditrecordrowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 69310:
/*!*******************************************************!*\
  !*** ./src/app/editrecordrow/editrecordrow.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditrecordrowModule": function() { return /* binding */ EditrecordrowModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _editrecordrow_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editrecordrow-routing.module */ 25134);
/* harmony import */ var _editrecordrow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editrecordrow.component */ 55798);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








var EditrecordrowModule = /** @class */ (function () {
    function EditrecordrowModule() {
    }
    EditrecordrowModule.ɵfac = function EditrecordrowModule_Factory(t) { return new (t || EditrecordrowModule)(); };
    EditrecordrowModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EditrecordrowModule });
    EditrecordrowModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _editrecordrow_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditrecordrowRoutingModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
            ]] });
    return EditrecordrowModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EditrecordrowModule, { declarations: [_editrecordrow_component__WEBPACK_IMPORTED_MODULE_1__.EditrecordrowComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _editrecordrow_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditrecordrowRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_editrecordrow_editrecordrow_module_ts.js.map