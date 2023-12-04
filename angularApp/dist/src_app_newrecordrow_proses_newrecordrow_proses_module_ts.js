"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_newrecordrow_proses_newrecordrow_proses_module_ts"],{

/***/ 25174:
/*!***************************************************************************!*\
  !*** ./src/app/newrecordrow_proses/newrecordrow_proses-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewrecordrowProsesRoutingModule": function() { return /* binding */ NewrecordrowProsesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _newrecordrow_proses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newrecordrow_proses.component */ 59218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





var routes = [
    {
        path: '',
        component: _newrecordrow_proses_component__WEBPACK_IMPORTED_MODULE_0__.NewrecordrowProsesComponent,
        data: {
            title: 'New Record Row'
        },
    }
];
var NewrecordrowProsesRoutingModule = /** @class */ (function () {
    function NewrecordrowProsesRoutingModule() {
    }
    NewrecordrowProsesRoutingModule.ɵfac = function NewrecordrowProsesRoutingModule_Factory(t) { return new (t || NewrecordrowProsesRoutingModule)(); };
    NewrecordrowProsesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewrecordrowProsesRoutingModule });
    NewrecordrowProsesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return NewrecordrowProsesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewrecordrowProsesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 15803:
/*!*******************************************************************!*\
  !*** ./src/app/newrecordrow_proses/newrecordrow_proses.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewrecordrowProsesModule": function() { return /* binding */ NewrecordrowProsesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _newrecordrow_proses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newrecordrow_proses-routing.module */ 25174);
/* harmony import */ var _newrecordrow_proses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newrecordrow_proses.component */ 59218);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








var NewrecordrowProsesModule = /** @class */ (function () {
    function NewrecordrowProsesModule() {
    }
    NewrecordrowProsesModule.ɵfac = function NewrecordrowProsesModule_Factory(t) { return new (t || NewrecordrowProsesModule)(); };
    NewrecordrowProsesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NewrecordrowProsesModule });
    NewrecordrowProsesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _newrecordrow_proses_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewrecordrowProsesRoutingModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
            ]] });
    return NewrecordrowProsesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewrecordrowProsesModule, { declarations: [_newrecordrow_proses_component__WEBPACK_IMPORTED_MODULE_1__.NewrecordrowProsesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _newrecordrow_proses_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewrecordrowProsesRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.NgxDatatableModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_newrecordrow_proses_newrecordrow_proses_module_ts.js.map