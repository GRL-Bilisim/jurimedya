"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_maps_maps_module_ts"],{

/***/ 11092:
/*!*******************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenMapComponent": function() { return /* binding */ FullScreenMapComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ 61466);


var FullScreenMapComponent = /** @class */ (function () {
    function FullScreenMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    FullScreenMapComponent.ɵfac = function FullScreenMapComponent_Factory(t) { return new (t || FullScreenMapComponent)(); };
    FullScreenMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullScreenMapComponent, selectors: [["app-full-screen-map"]], decls: 4, vars: 4, consts: [["id", "fullscreenMap", 1, "mb-3"], [1, "row"], [2, "height", "100%", "width", "100%", "position", "absolute", "top", "0px", "left", "0px", "background-color", "rgb(229, 227, 223)", 3, "latitude", "longitude"], [3, "latitude", "longitude"]], template: function FullScreenMapComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "agm-map", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "agm-marker", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_1__.AgmMarker], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLXNjcmVlbi1tYXAuY29tcG9uZW50LnNjc3MifQ== */"] });
    return FullScreenMapComponent;
}());



/***/ }),

/***/ 792:
/*!*********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapComponent": function() { return /* binding */ GoogleMapComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ 61466);


var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GoogleMapComponent.ɵfac = function GoogleMapComponent_Factory(t) { return new (t || GoogleMapComponent)(); };
    GoogleMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleMapComponent, selectors: [["app-google-map"]], decls: 12, vars: 4, consts: [[1, "row"], [1, "col-12"], [1, "content-header"], ["id", ""], [1, "col-sm-12"], [1, "card"], [1, "card-content"], [1, "card-body", "mt-2"], [3, "latitude", "longitude"]], template: function GoogleMapComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Google Map");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "agm-map", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "agm-marker", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_1__.AgmMarker], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoiZ29vZ2xlLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */"] });
    return GoogleMapComponent;
}());



/***/ }),

/***/ 71488:
/*!*********************************************!*\
  !*** ./src/app/maps/maps-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsRoutingModule": function() { return /* binding */ MapsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ 11092);
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-map/google-map.component */ 792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





var routes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_0__.FullScreenMapComponent,
                data: {
                    title: 'Full Screen Map'
                }
            },
            {
                path: 'google',
                component: _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_1__.GoogleMapComponent,
                data: {
                    title: 'Google Map'
                }
            }
        ]
    }
];
var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule.ɵfac = function MapsRoutingModule_Factory(t) { return new (t || MapsRoutingModule)(); };
    MapsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MapsRoutingModule });
    MapsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
    return MapsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 83842:
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsModule": function() { return /* binding */ MapsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ 61466);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps-routing.module */ 71488);
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ 11092);
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-map/google-map.component */ 792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule.ɵfac = function MapsModule_Factory(t) { return new (t || MapsModule)(); };
    MapsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MapsModule });
    MapsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapsRoutingModule,
                _agm_core__WEBPACK_IMPORTED_MODULE_5__.AgmCoreModule
            ]] });
    return MapsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MapsModule, { declarations: [_full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_1__.FullScreenMapComponent,
        _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_2__.GoogleMapComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapsRoutingModule,
        _agm_core__WEBPACK_IMPORTED_MODULE_5__.AgmCoreModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_maps_maps_module_ts.js.map