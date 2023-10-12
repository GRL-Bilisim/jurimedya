"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_barcodeform_barcodeform_module_ts"],{

/***/ 63956:
/*!***********************************************************!*\
  !*** ./src/app/barcodeform/barcodeform-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeFormRoutingModule": function() { return /* binding */ BarcodeFormRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _barcodeform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcodeform.component */ 57562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _barcodeform_component__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormComponent,
        data: {
            title: 'New Record Row'
        },
    }
];
var BarcodeFormRoutingModule = /** @class */ (function () {
    function BarcodeFormRoutingModule() {
    }
    BarcodeFormRoutingModule.ɵfac = function BarcodeFormRoutingModule_Factory(t) { return new (t || BarcodeFormRoutingModule)(); };
    BarcodeFormRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BarcodeFormRoutingModule });
    BarcodeFormRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return BarcodeFormRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BarcodeFormRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 65426:
/*!***************************************************!*\
  !*** ./src/app/barcodeform/barcodeform.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeFormModule": function() { return /* binding */ BarcodeFormModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _barcodeform_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcodeform-routing.module */ 63956);
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zxing/ngx-scanner */ 11001);
/* harmony import */ var _barcodeform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcodeform.component */ 57562);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);









var BarcodeFormModule = /** @class */ (function () {
    function BarcodeFormModule() {
    }
    BarcodeFormModule.ɵfac = function BarcodeFormModule_Factory(t) { return new (t || BarcodeFormModule)(); };
    BarcodeFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BarcodeFormModule });
    BarcodeFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__.ZXingScannerModule,
                _barcodeform_routing_module__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormRoutingModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule
            ]] });
    return BarcodeFormModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BarcodeFormModule, { declarations: [_barcodeform_component__WEBPACK_IMPORTED_MODULE_1__.BarcodeFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__.ZXingScannerModule,
        _barcodeform_routing_module__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.NgxDatatableModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_2__.PipeModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_barcodeform_barcodeform_module_ts.js.map