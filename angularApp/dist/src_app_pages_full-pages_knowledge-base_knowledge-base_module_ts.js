"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_pages_full-pages_knowledge-base_knowledge-base_module_ts"],{

/***/ 40458:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBaseRoutingModule": function() { return /* binding */ KnowledgeBaseRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledge-base.component */ 13048);
/* harmony import */ var _knowledge_search_knowledge_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledge-search/knowledge-search.component */ 5680);
/* harmony import */ var _knowledge_categories_knowledge_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge-categories/knowledge-categories.component */ 33072);
/* harmony import */ var _knowledge_question_knowledge_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knowledge-question/knowledge-question.component */ 76047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







var routes = [
    {
        path: '', component: _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseComponent, children: [
            { path: "", redirectTo: "search", pathMatch: "full" },
            {
                path: 'search',
                component: _knowledge_search_knowledge_search_component__WEBPACK_IMPORTED_MODULE_1__.KnowledgeSearchComponent
            },
            {
                path: 'categories',
                component: _knowledge_categories_knowledge_categories_component__WEBPACK_IMPORTED_MODULE_2__.KnowledgeCategoriesComponent
            },
            {
                path: 'questions',
                component: _knowledge_question_knowledge_question_component__WEBPACK_IMPORTED_MODULE_3__.KnowledgeQuestionComponent
            },
        ]
    },
];
var KnowledgeBaseRoutingModule = /** @class */ (function () {
    function KnowledgeBaseRoutingModule() {
    }
    KnowledgeBaseRoutingModule.ɵfac = function KnowledgeBaseRoutingModule_Factory(t) { return new (t || KnowledgeBaseRoutingModule)(); };
    KnowledgeBaseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: KnowledgeBaseRoutingModule });
    KnowledgeBaseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
    return KnowledgeBaseRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](KnowledgeBaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 13048:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBaseComponent": function() { return /* binding */ KnowledgeBaseComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


var KnowledgeBaseComponent = /** @class */ (function () {
    function KnowledgeBaseComponent(router) {
        this.router = router;
    }
    KnowledgeBaseComponent.ɵfac = function KnowledgeBaseComponent_Factory(t) { return new (t || KnowledgeBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
    KnowledgeBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnowledgeBaseComponent, selectors: [["app-knowledge-base"]], decls: 1, vars: 0, template: function KnowledgeBaseComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2UtYmFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return KnowledgeBaseComponent;
}());



/***/ }),

/***/ 19454:
/*!**************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBaseModule": function() { return /* binding */ KnowledgeBaseModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledge-base-routing.module */ 40458);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _knowledge_categories_knowledge_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge-categories/knowledge-categories.component */ 33072);
/* harmony import */ var _knowledge_question_knowledge_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knowledge-question/knowledge-question.component */ 76047);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knowledge-base.component */ 13048);
/* harmony import */ var _knowledge_search_knowledge_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knowledge-search/knowledge-search.component */ 5680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);











var KnowledgeBaseModule = /** @class */ (function () {
    function KnowledgeBaseModule() {
    }
    KnowledgeBaseModule.ɵfac = function KnowledgeBaseModule_Factory(t) { return new (t || KnowledgeBaseModule)(); };
    KnowledgeBaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: KnowledgeBaseModule });
    KnowledgeBaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseRoutingModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__.SwiperModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule
            ]] });
    return KnowledgeBaseModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](KnowledgeBaseModule, { declarations: [_knowledge_base_component__WEBPACK_IMPORTED_MODULE_4__.KnowledgeBaseComponent,
        _knowledge_search_knowledge_search_component__WEBPACK_IMPORTED_MODULE_5__.KnowledgeSearchComponent,
        _knowledge_categories_knowledge_categories_component__WEBPACK_IMPORTED_MODULE_2__.KnowledgeCategoriesComponent,
        _knowledge_question_knowledge_question_component__WEBPACK_IMPORTED_MODULE_3__.KnowledgeQuestionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__.SwiperModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_1__.PipeModule] }); })();


/***/ }),

/***/ 37502:
/*!***************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base.service.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeBaseService": function() { return /* binding */ KnowledgeBaseService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

var KnowledgeBaseService = /** @class */ (function () {
    function KnowledgeBaseService() {
        this.knowledgeBase = [
            {
                kbId: "1",
                name: "My Account",
                content: "But students more often neglect fact it is much more",
                icon: "ft-user"
            },
            {
                kbId: "2",
                name: "Connect",
                content: "But students more often neglect fact it is much more",
                icon: "ft-link"
            },
            {
                kbId: "3",
                name: "Charges & Refunds",
                content: "But students more often neglect fact it is much more",
                icon: "ft-dollar-sign"
            },
            {
                kbId: "4",
                name: "International",
                content: "But students more often neglect fact it is much more",
                icon: "ft-globe"
            },
            {
                kbId: "5",
                name: "Payouts",
                content: "But students more often neglect fact it is much more",
                icon: "ft-smartphone"
            },
            {
                kbId: "6",
                name: "Disputes & Fraud",
                content: "But students more often neglect fact it is much more",
                icon: "ft-alert-circle"
            },
        ];
        this.kbCategory = [
            {
                kbCategoryId: "1",
                name: "Free Philippine Real Estate Ads Forums",
                content: "Using Laravel, no worries we have that convered as well. We bundled Laravel Starter Kit with this template.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-1.png',
                        name: 'Alberto Glotzbach'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-2.png',
                        name: 'Lilian Nenez'
                    }],
                text: '+40 more'
            },
            {
                kbCategoryId: "2",
                name: "Advertising on Budget Real Estate Ads Forums",
                content: "Ready to use athentications with Firebase, social media lightning fast search and discovery experiences.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-3.png',
                        name: 'Benjamin Swanson'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-4.png',
                        name: 'Cordelia McCoy'
                    }],
                text: '+70 more'
            },
            {
                kbCategoryId: "3",
                name: "Adword Keywords Real Estate Ads Forums",
                content: "Carefully crafted, clean, smart & easy theme navigation with collapsible option. lightning and discovery experiences.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-5.png',
                        name: 'William Woods'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-6.png',
                        name: 'Amanda Swanson'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-7.png',
                        name: 'Dylan McCoy'
                    }],
                text: '+10 more'
            },
            {
                kbCategoryId: "4",
                name: "Internet Banner Most Reliable Forms",
                content: "Easy & smart fuzzy search functionality which enables users to search quickly.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-8.png',
                        name: 'Trina Lynes'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-9.png',
                        name: 'Shawn Harrington'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-10.png',
                        name: 'Rosalie Perkins'
                    }],
                text: '+9 more'
            },
            {
                kbCategoryId: "5",
                name: "How To Write Better Copy With White Ron",
                content: "Bookmark allows users to select their favourite pages/apps and navigate quickly.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-11.png',
                        name: 'Max Jones'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-12.png',
                        name: 'Minnie Allison'
                    }],
                text: '+20 more'
            },
            {
                kbCategoryId: "6",
                name: "Research Philippine Real Estate Ads Forums",
                content: "Frest comes with built-in light and dark layouts, select as per your preference.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-13.png',
                        name: 'Russell Jenkins'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-14.png',
                        name: 'Lina McGuire'
                    }],
                text: '+12 more'
            },
            {
                kbCategoryId: "7",
                name: "Listing Philippine Real Estate Ads Forums",
                content: "Unlimited color options allows you to set your application color as per your branding.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-15.png',
                        name: 'Jeremiah Floyd'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-16.png',
                        name: 'Cynthia McKenzie'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-17.png',
                        name: 'Marvin Kelly'
                    }],
                text: '+10 more'
            },
            {
                kbCategoryId: "8",
                name: "Media Mix Estate Ads Forums Ready To Go",
                content: "Lifetime updates with new demos and features is fast search and discovery experiences.",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-18.png',
                        name: 'Lettie Moss'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-19.png',
                        name: 'Earl Glover'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-20.png',
                        name: 'Noah Singleton'
                    }],
                text: '+40 more'
            },
            {
                kbCategoryId: "9",
                name: "Finally A top Secret Estate Ads Forums",
                content: "Get access to premium customer support from the actual people who have created.!",
                tooltips: [{
                        avatar: 'assets/img/portrait/small/avatar-s-21.png',
                        name: 'Adrian Marsh'
                    },
                    {
                        avatar: 'assets/img/portrait/small/avatar-s-22.png',
                        name: 'Maria Stevenson'
                    }],
                text: '+40 more'
            }
        ];
    }
    KnowledgeBaseService.ɵfac = function KnowledgeBaseService_Factory(t) { return new (t || KnowledgeBaseService)(); };
    KnowledgeBaseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KnowledgeBaseService, factory: KnowledgeBaseService.ɵfac, providedIn: 'root' });
    return KnowledgeBaseService;
}());



/***/ }),

/***/ 33072:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-categories/knowledge-categories.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeCategoriesComponent": function() { return /* binding */ KnowledgeCategoriesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _knowledge_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../knowledge-base.service */ 37502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);





function KnowledgeCategoriesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KnowledgeCategoriesComponent_div_5_Template_a_click_2_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var category_r1 = restoredCtx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.viewQuestions(category_r1.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", category_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](category_r1.icon);
} }
var _c0 = function (a0) { return { show: a0 }; };
var KnowledgeCategoriesComponent = /** @class */ (function () {
    function KnowledgeCategoriesComponent(router, kbService) {
        this.router = router;
        this.kbCategories = [];
        this.searchQuery = '';
        this.page = 1;
        this.isShowCategory = false;
        var retrievedObject = localStorage.getItem('level2submenu');
        this.kbCategories = JSON.parse(retrievedObject);
    }
    KnowledgeCategoriesComponent.prototype.viewQuestions = function (category) {
        console.log(category);
        this.router.navigate([category]);
    };
    KnowledgeCategoriesComponent.ɵfac = function KnowledgeCategoriesComponent_Factory(t) { return new (t || KnowledgeCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_knowledge_base_service__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseService)); };
    KnowledgeCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KnowledgeCategoriesComponent, selectors: [["app-knowledge-categories"]], decls: 8, vars: 6, consts: [[1, "kb-categories", "position-relative"], [1, "kb-overlay", 3, "ngClass", "click"], [1, "row"], [1, "col-md-12"], [1, "row", "match-height"], ["class", "col-lg-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-12"], ["aria-label", "Default pagination", 1, "mt-2", "d-flex", "justify-content-center", 3, "collectionSize", "page", "pageChange"], [1, "col-lg-4", "col-sm-6"], [1, "card"], ["href", "javascript:;", 3, "click"], [1, "card-content"], [1, "card-body"], [1, "card-title"], [1, "card-text", "kb-categories-text", "kb-ellipsis"]], template: function KnowledgeCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KnowledgeCategoriesComponent_Template_div_click_1_listener() { return ctx.isShowCategory = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, KnowledgeCategoriesComponent_div_5_Template, 10, 3, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngb-pagination", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function KnowledgeCategoriesComponent_Template_ngb_pagination_pageChange_7_listener($event) { return ctx.page = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.isShowCategory));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kbCategories);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collectionSize", 70)("page", ctx.page);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPagination], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2UtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return KnowledgeCategoriesComponent;
}());



/***/ }),

/***/ 76047:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-question/knowledge-question.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeQuestionComponent": function() { return /* binding */ KnowledgeQuestionComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);



function KnowledgeQuestionComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function KnowledgeQuestionComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
function KnowledgeQuestionComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} }
var _c0 = function (a0) { return { show: a0 }; };
var KnowledgeQuestionComponent = /** @class */ (function () {
    function KnowledgeQuestionComponent() {
        this.isShowQues = false;
    }
    KnowledgeQuestionComponent.ɵfac = function KnowledgeQuestionComponent_Factory(t) { return new (t || KnowledgeQuestionComponent)(); };
    KnowledgeQuestionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnowledgeQuestionComponent, selectors: [["app-knowledge-question"]], decls: 73, vars: 6, consts: [[1, "kb-question", "position-relative"], [1, "kb-overlay", 3, "ngClass", "click"], [1, "row"], [1, "col-md-3", "mt-md-2"], [1, "kb-sidebar", 3, "ngClass"], [1, "ft-x", "font-medium-5", "d-md-none", "kb-close-icon", "cursor-pointer", 3, "click"], [1, "mb-3"], [1, "list-unstyled"], [1, "mb-1"], ["href", "javascript:void(0)", 1, "kb-categories-text", "kb-effect"], [1, "col-md-9"], [1, "btn", "btn-primary", "mb-1", "kb-menu", "d-md-none", 3, "click"], [1, "ft-menu", "mr-1"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "mb-2"], [1, "kb-title"], [1, "text-muted", "font-small-3"], ["ngbSlide", ""], [1, "d-flex", "justify-content-between"], [1, "btn", "bg-light-primary"], ["src", "assets/img/banner/banner-1.jpg", "alt", "First slide", 1, "d-block", "w-100"], ["src", "assets/img/banner/banner-2.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "assets/img/banner/banner-4.jpg", "alt", "Third slide", 1, "d-block", "w-100"]], template: function KnowledgeQuestionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnowledgeQuestionComponent_Template_div_click_1_listener() { return ctx.isShowQues = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnowledgeQuestionComponent_Template_i_click_5_listener() { return ctx.isShowQues = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Related Questions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Laravel Starter Kit?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Firebase & Authentication?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Clean & Modern Design?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "No jQuery Dependency?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Code Splitting?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Continuous Updates?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Do you charge for upgrade?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KnowledgeQuestionComponent_Template_button_click_31_listener() { return ctx.isShowQues = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Related Questions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "UX Design Portfolio: Best Practices");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Last updated on May 05, 2020");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "So you know you need a portfolio to land a UI/UX gig. If you are just starting out or it\u2019s been a while, that can be overwhelming. Even if you have a portfolio, you may be wondering if it is doing all it can for you. As experienced digital product designers, we have some thoughts on the topic of design portfolios; how to make one and how to get the most out of it.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngb-carousel", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, KnowledgeQuestionComponent_ng_template_46_Template, 1, 0, "ng-template", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, KnowledgeQuestionComponent_ng_template_47_Template, 1, 0, "ng-template", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, KnowledgeQuestionComponent_ng_template_48_Template, 1, 0, "ng-template", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Inspiration");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "So where to start? How many projects do you need? What\u2019s the best way to organize? There are lots of great resources available to you if you need help getting started or need some inspiration.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Topics:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "What challenges did you encounter?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "What did you do differently?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "What did you try that didn\u2019t work?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "What did you learn?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "What did you accomplish?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "On our site, we like to include the results of our projects. Hiring managers love concrete numbers that prove the value of your work, particularly in a creative area that can be hard to quantify. We state the metric, show our solution, and then show the result.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Previous");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Next");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isShowQues));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isShowQues));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2UtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return KnowledgeQuestionComponent;
}());



/***/ }),

/***/ 5680:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-search/knowledge-search.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowledgeSearchComponent": function() { return /* binding */ KnowledgeSearchComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _knowledge_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../knowledge-base.service */ 37502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/search.pipe */ 96903);






function KnowledgeSearchComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KnowledgeSearchComponent_div_20_Template_a_click_4_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var kb_r2 = restoredCtx.$implicit; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.viewCategories(kb_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var kb_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](kb_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kb_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kb_r2.content);
} }
function KnowledgeSearchComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "No result found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var _c0 = function () { return { standalone: true }; };
var KnowledgeSearchComponent = /** @class */ (function () {
    function KnowledgeSearchComponent(router, kbService) {
        this.router = router;
        this.knowledgeBase = [];
        this.searchQuery = '';
        this.knowledgeBase = kbService.knowledgeBase;
    }
    KnowledgeSearchComponent.prototype.viewCategories = function (kb) {
        this.router.navigate(['/pages/kb/categories']);
    };
    KnowledgeSearchComponent.ɵfac = function KnowledgeSearchComponent_Factory(t) { return new (t || KnowledgeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_knowledge_base_service__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseService)); };
    KnowledgeSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: KnowledgeSearchComponent, selectors: [["app-knowledge-search"]], decls: 24, vars: 13, consts: [[1, "kb-wrapper"], [1, "kb-search"], [1, "row"], [1, "col-12"], [1, "card", "bg-transparent", "shadow-none", "kb-header", "py-3"], [1, "card-content"], [1, "card-body", "text-center", "p-md-5"], [1, "mb-2", "kb-title"], [1, "mb-4"], [1, "form-group", "position-relative", "w-50", "mx-auto", "kb-search-input"], ["type", "text", "id", "searchbar", "placeholder", "Find from talk..", 1, "form-control", "form-control-lg", "shadow", "round", "p-3", "font-medium-1", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "round", "position-absolute"], [1, "d-none", "d-sm-block"], [1, "ft-search", "d-block", "d-sm-none"], [1, "kb-content"], [1, "row", "kb-content-info", "match-height", "mx-1", "mx-md-2", "mx-lg-5"], ["class", "col-md-4 col-sm-6 kb-content-card", 4, "ngFor", "ngForOf"], ["class", "col-12 kb-no-content", 4, "ngIf"], [1, "col-md-4", "col-sm-6", "kb-content-card"], [1, "card"], [1, "card-body", "text-center", "p-4"], ["href", "javascript:;", 3, "click"], [1, "mt-2"], [1, "m-0", "text-muted"], [1, "col-12", "kb-no-content"], [1, "card", "bg-transparent", "shadow-none"], [1, "card-body", "text-center"], [1, "m-0", "d-flex", "justify-content-center", "align-items-center"], [1, "ft-alert-circle", "font-medium-2", "mr-1"]], template: function KnowledgeSearchComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "How can we help you today?");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Algolia helps businesses across industries quickly create relevant, scalable, and lightning fast search and discovery experiences.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function KnowledgeSearchComponent_Template_input_ngModelChange_13_listener($event) { return ctx.searchQuery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, KnowledgeSearchComponent_div_20_Template, 10, 4, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, KnowledgeSearchComponent_div_22_Template, 8, 0, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0))("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](21, 4, ctx.knowledgeBase, "name", ctx.searchQuery));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](23, 8, ctx.knowledgeBase, "name", ctx.searchQuery).length === 0);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2Utc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return KnowledgeSearchComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_pages_full-pages_knowledge-base_knowledge-base_module_ts.js.map