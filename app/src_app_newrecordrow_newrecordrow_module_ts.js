"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_newrecordrow_newrecordrow_module_ts"],{

/***/ 20582:
/*!*************************************************************!*\
  !*** ./src/app/newrecordrow/newrecordrow-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewrecordrowRoutingModule": function() { return /* binding */ NewrecordrowRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _newrecordrow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newrecordrow.component */ 36009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _newrecordrow_component__WEBPACK_IMPORTED_MODULE_0__.NewrecordrowComponent,
        data: {
            title: 'New Record Row'
        },
    }
];
var NewrecordrowRoutingModule = /** @class */ (function () {
    function NewrecordrowRoutingModule() {
    }
    NewrecordrowRoutingModule.ɵfac = function NewrecordrowRoutingModule_Factory(t) { return new (t || NewrecordrowRoutingModule)(); };
    NewrecordrowRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewrecordrowRoutingModule });
    NewrecordrowRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return NewrecordrowRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewrecordrowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 36781:
/*!*****************************************************!*\
  !*** ./src/app/newrecordrow/newrecordrow.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewrecordrowModule": function() { return /* binding */ NewrecordrowModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _newrecordrow_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newrecordrow-routing.module */ 20582);
/* harmony import */ var _newrecordrow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newrecordrow.component */ 36009);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 51863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









var NewrecordrowModule = /** @class */ (function () {
    function NewrecordrowModule() {
    }
    NewrecordrowModule.ɵfac = function NewrecordrowModule_Factory(t) { return new (t || NewrecordrowModule)(); };
    NewrecordrowModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NewrecordrowModule });
    NewrecordrowModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _newrecordrow_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewrecordrowRoutingModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
            ]] });
    return NewrecordrowModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NewrecordrowModule, { declarations: [_newrecordrow_component__WEBPACK_IMPORTED_MODULE_1__.NewrecordrowComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _newrecordrow_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewrecordrowRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_newrecordrow_newrecordrow_module_ts.js.map