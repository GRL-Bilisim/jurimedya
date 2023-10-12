"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_tedaviplanlama_tedaviplanlama_module_ts"],{

/***/ 10351:
/*!*******************************************************************!*\
  !*** ./src/app/tedaviplanlama/crud-modal/crud-modal.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudModalComponent": function() { return /* binding */ CrudModalComponent; }
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/sweet-alerts */ 645);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









function CrudModalComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CrudModalComponent_ng_template_14_Template_input_change_1_listener() { var allRowsSelected_r6 = ctx.allRowsSelected; var selectFn_r7 = ctx.selectFn; return selectFn_r7(!allRowsSelected_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var allRowsSelected_r6 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", allRowsSelected_r6);
} }
function CrudModalComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CrudModalComponent_ng_template_15_Template_input_change_1_listener($event) { var onCheckboxChangeFn_r11 = ctx.onCheckboxChangeFn; return onCheckboxChangeFn_r11($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var isSelected_r10 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", isSelected_r10);
} }
function CrudModalComponent_ngx_datatable_column_16_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    var row_r17 = ctx.row;
    var column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r17[column_r13.Name], " ");
} }
function CrudModalComponent_ngx_datatable_column_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CrudModalComponent_ngx_datatable_column_16_ng_template_1_Template, 1, 1, "ng-template", 12, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("name", column_r13.prop);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("prop", column_r13.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sortable", true);
} }
function CrudModalComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.secilileriEkle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Se\u00E7ilileri Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CrudModalComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.secilileriSil(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Se\u00E7ilileri Sil");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var CrudModalComponent = /** @class */ (function () {
    function CrudModalComponent(http, activeModal, formBuilder) {
        this.http = http;
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.SelectionType;
        this.chkBoxSelected = [];
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__;
        // column header
        this.columns = [
            { name: 'Name', prop: 'full_name' },
            { name: 'Email', prop: 'email' },
            { name: 'Age', prop: 'age' },
            { name: 'Salary', prop: 'salary' }
        ];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.ColumnMode;
        this.tabloSecililer = [];
        this.formbasligi = "";
    }
    CrudModalComponent.prototype.onKeydownHandler = function (event) {
        if (event.key === "Escape") {
            var durum = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Form Kapatılacaktır ?',
                text: "Form kapatılacaktır. Emin misiniz ? ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F8BE6',
                cancelButtonColor: '#F55252',
                confirmButtonText: 'Evet',
                cancelButtonText: 'İptal',
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-danger ml-1'
                },
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    durum.activeModal.close();
                    setTimeout(function () {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    }, 1000);
                }
            });
        }
    };
    CrudModalComponent.prototype.customChkboxOnSelect = function (e) {
        console.log(e.selected);
        this.tabloSecililer = e.selected;
        // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    };
    CrudModalComponent.prototype.secilileriEkle = function () {
        if (this.tabloSecililer.length > 0) {
            var durum = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Seçilen Kalemler Eklensin Mi?',
                text: "Değişiklik geri alınamayacaktır!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F8BE6',
                cancelButtonColor: '#F55252',
                confirmButtonText: 'Ekle',
                cancelButtonText: 'İptal',
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-danger ml-1'
                },
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    for (var i = 0; i < durum.tabloSecililer.length; i++) {
                        var imt = durum.tabloSecililer[i].index_malzemetedarikcileri;
                        var satinalmano = durum.tabloSecililer[i].satinalmano;
                        var adet = durum.tabloSecililer[i].siparismiktari;
                        var sipariskg = durum.tabloSecililer[i].sipariskg;
                        var master = durum.recordid;
                        var insatinalma = durum.tabloSecililer[i].index_satinalma;
                        var girdikal = localStorage.getItem('url') + "angular/dataservis.php?page_id=girdikabulicerik&imt=" + imt + "&satinalno=" + satinalmano + "&adet=" + adet + "&sipariskg=" + sipariskg + "&master=" + master + "&userid=" + localStorage.getItem('userid') + "&indexsa=" + insatinalma;
                        durum.http.get(girdikal).subscribe(function (data) {
                            if (data[0].status == 'OK') {
                                durum.activeModal.close('OK');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                                    icon: "success",
                                    title: 'Ekleme Başarılı',
                                    text: 'Kalem ekleme başarılı.',
                                    customClass: {
                                        confirmButton: 'btn btn-warning'
                                    },
                                });
                            }
                        });
                    }
                    setTimeout(function () {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    }, 1000);
                }
            });
            this.chkBoxSelected = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "warning",
                title: 'Seçim Yapmanız Gerekmektedir!',
                confirmButtonText: 'Tamam',
                text: 'Silme işlemi için kayıtları seçmeniz gerekmektedir.',
                customClass: {
                    confirmButton: 'btn btn-warning'
                }
            });
        }
    };
    CrudModalComponent.prototype.secilileriSil = function () {
        if (this.tabloSecililer.length > 0) {
            var durum = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Seçilen Hareket Silinsin Mi?',
                text: "Değişiklik geri alınamayacaktır!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2F8BE6',
                cancelButtonColor: '#F55252',
                confirmButtonText: 'Sil',
                cancelButtonText: 'İptal',
                customClass: {
                    confirmButton: 'btn btn-primary',
                    cancelButton: 'btn btn-danger ml-1'
                },
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    for (var i = 0; i < durum.tabloSecililer.length; i++) {
                        var index_stokhareketleri = durum.tabloSecililer[i].index_stokhareketleri;
                        var stoksil = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=394&recordid=" + index_stokhareketleri + "&userid=" + localStorage.getItem('userid');
                        durum.http.get(stoksil).subscribe(function (data) {
                            if (data[0].status == 'OK') {
                                durum.activeModal.close('OK');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                                    icon: "success",
                                    title: 'Silme Başarılı',
                                    text: 'Rezerv silme başarılı.',
                                    customClass: {
                                        confirmButton: 'btn btn-warning'
                                    },
                                });
                            }
                        });
                    }
                    setTimeout(function () {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    }, 1000);
                }
            });
            this.chkBoxSelected = [];
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "warning",
                title: 'Seçim Yapmanız Gerekmektedir!',
                confirmButtonText: 'Tamam',
                text: 'Silme işlemi için kayıtları seçmeniz gerekmektedir.',
                customClass: {
                    confirmButton: 'btn btn-warning'
                }
            });
        }
    };
    CrudModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var key in this.data) {
            var child = this.data[key];
            this.recordid = this.data['title'];
            this.formid = this.data['formid'];
            if (this.data['formid'] != '' && this.data['formid'] != '278') {
                this.formbasligi = this.data['formtanimi'];
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + this.formid;
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.columns = data;
                });
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + this.formid;
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.rows = data;
                });
            }
            else if (this.data['formid'] == '278') {
                this.formbasligi = 'Stok Hareketleri';
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=622";
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.columns = data;
                });
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=622&siparisid=" + this.data['title'];
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.rows = data;
                });
            }
            else {
                this.formbasligi = 'Kalemler';
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink=bekleyen-siparisler";
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.columns = data;
                });
                this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=608&firmaid=" + this.data['firmakodu'];
                this.http.get(this.SERVER_URL).subscribe(function (data) {
                    _this.rows = data;
                });
            }
        }
        // this.buildItemForm(this.data);
    };
    CrudModalComponent.ɵfac = function CrudModalComponent_Factory(t) { return new (t || CrudModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
    CrudModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CrudModalComponent, selectors: [["app-crud-modal"]], viewQuery: function CrudModalComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, hostBindings: function CrudModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function CrudModalComponent_keydown_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        } }, inputs: { id: "id", data: "data" }, decls: 26, vars: 18, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["id", "extended"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body", "table-responsive"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "selected", "selectionType", "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows", "scrollbarH", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], [3, "sortable", "name", "prop", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-end", "d-flex"], [1, "col-md-3", "col-xl-3", "col-sm-3", "mr-2"], [1, "card", "card-danger", "box-shadow-0", "text-end"], ["type", "button", "class", "btn btn-success mr-2 mb-1", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 3, "checked", "change"], [3, "sortable", "name", "prop"], ["buttonsTemplate", ""], ["type", "button", 1, "btn", "btn-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-plus", "mr-1"]], template: function CrudModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " x ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ngx-datatable", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function CrudModalComponent_Template_ngx_datatable_select_12_listener($event) { return ctx.customChkboxOnSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ngx-datatable-column", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CrudModalComponent_ng_template_14_Template, 2, 1, "ng-template", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CrudModalComponent_ng_template_15_Template, 2, 1, "ng-template", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CrudModalComponent_ngx_datatable_column_16_Template, 3, 3, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CrudModalComponent_button_20_Template, 3, 0, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, CrudModalComponent_button_21_Template, 3, 0, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CrudModalComponent_Template_button_click_24_listener() { return ctx.activeModal.close("Close click"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Vazge\u00E7");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.formbasligi, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx.chkBoxSelected)("selectionType", ctx.SelectionType.multi)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columns);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tabloSecililer.length > 0 && ctx.formid != "278");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tabloSecililer.length > 0 && ctx.formid == "278");
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTableColumnCellDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["[_nghost-%COMP%]     .donut1 .ct-label {\n  font-size: 4rem;\n  fill: #F77E17;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-done .ct-slice-donut {\n  stroke: #FCC173;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-label {\n  font-size: 4rem;\n  fill: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-done .ct-slice-donut {\n  stroke: #81C8F7;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-label {\n  font-size: 4rem;\n  fill: #F55252;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-done .ct-slice-donut {\n  stroke: #FCA897;\n}\n\n[_nghost-%COMP%]     .donut4 .ct-label {\n  font-size: 4rem;\n  fill: #9de63e;\n}\n\n[_nghost-%COMP%]     .donut4 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut4 .ct-done .ct-slice-donut {\n  stroke: #e9ec29;\n}\n\n.my-validation-message[_ngcontent-%COMP%]::before {\n  display: none;\n}\n\n.my-validation-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 0 0.4em;\n  color: #f27474;\n  font-size: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNydWQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6ImNydWQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDEgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZSA6IDRyZW07XHJcbiAgICBmaWxsIDogI0Y3N0UxNztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDEgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2UgOiAjRjVGNUY1O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmRvbnV0MSAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogI0ZDQzE3MztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDIgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZSA6IDRyZW07XHJcbiAgICBmaWxsIDogIzJGOEJFNjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDIgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2UgOiAjRjVGNUY1O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmRvbnV0MiAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogIzgxQzhGNztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDMgLmN0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZSA6IDRyZW07XHJcbiAgICBmaWxsIDogI0Y1NTI1MjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDMgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2UgOiAjRjVGNUY1O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmRvbnV0MyAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogI0ZDQTg5NztcclxuICB9XHJcbiAgXHJcblxyXG4gIDpob3N0IDo6bmctZGVlcCAuZG9udXQ0IC5jdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemUgOiA0cmVtO1xyXG4gICAgZmlsbCA6ICM5ZGU2M2U7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuZG9udXQ0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlIDogI0Y1RjVGNTtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5kb251dDQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZSA6ICNlOWVjMjk7XHJcbiAgfVxyXG4gIC5teS12YWxpZGF0aW9uLW1lc3NhZ2U6OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAubXktdmFsaWRhdGlvbi1tZXNzYWdlIGkge1xyXG4gICAgbWFyZ2luOiAwIC40ZW07XHJcbiAgICBjb2xvcjogI2YyNzQ3NDtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgfSJdfQ== */"] });
    return CrudModalComponent;
}());



/***/ }),

/***/ 97106:
/*!***********************************************************!*\
  !*** ./src/app/tedaviplanlama/swiper/swiper.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperComponent": function() { return /* binding */ SwiperComponent; }
/* harmony export */ });
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



var SwiperComponent = /** @class */ (function () {
    function SwiperComponent() {
        // default
        this.swiperDefaultConfig = {};
        // navigation
        this.swiperNavigationConfig = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // pagination
        this.swiperPaginationConfig = {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // progress
        this.swiperProgressConfig = {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // multiple
        this.swiperMultipleConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // multi row
        this.swiperMultiRowConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // centered slides option-1
        this.swiperCenterOpt1Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slideToClickedSlide: true
        };
        // centered slides option-2
        this.swiperCenterOpt2Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
        };
        // fade effect
        this.swiperFadeEffectConfig = {
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // cube effect
        this.swiperCubeEffectConfig = {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // coverflow effect
        this.swiperCoverflowEffectConfig = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // autoplay
        this.swiperAutoplayConfig = {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // parallax
        this.swiperParallaxConfig = {
            speed: 600,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // lazy loading
        this.swiperLazyLoadingConfig = {
            // Enable lazy loading
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // Responsive Breakpoints
        this.swiperResponsiveBreakpointsConfig = {
            slidesPerView: 5,
            spaceBetween: 50,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        };
    }
    SwiperComponent.prototype.ngOnInit = function () {
    };
    SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(); };
    SwiperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwiperComponent, selectors: [["app-swiper"]], viewQuery: function SwiperComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__.SwiperDirective, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, decls: 384, vars: 14, consts: [[1, "row"], [1, "col"], [1, "content-header"], [1, "content-sub-header", "mb-1"], ["id", "swiper-default"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], [1, "swiper-default", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/img/banner/banner-1.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-2.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-4.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-13.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-7.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-navigations"], [1, "swiper-navigations", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-14.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-3.jpg", "alt", "banner", 1, "img-fluid"], [1, "swiper-button-next"], [1, "swiper-button-prev"], ["id", "swiper-pagination"], [1, "swiper-paginations", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-12.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-9.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-8.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-20.jpg", "alt", "banner", 1, "img-fluid"], [1, "swiper-pagination"], ["id", "swiper-progress"], [1, "swiper-progress", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-5.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-multiple"], [1, "swiper-multiple", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-34.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-31.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-32.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-33.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-35.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-centered-slides"], [1, "card", "bg-transparent", "shadow-none"], [1, "card-body", "py-0"], [1, "swiper-centered-slides", "swiper-container", "p-3", 3, "swiper"], [1, "swiper-slide", "rounded", "swiper-shadow"], [1, "fa", "fa-google", "font-large-1"], [1, "swiper-text", "pt-md-2", "pt-sm-1"], [1, "fa", "fa-facebook", "font-large-1"], [1, "fa", "fa-twitter", "font-large-1"], [1, "fa", "fa-instagram", "font-large-1"], ["id", "swiper-centered-slides-2"], [1, "card-body", "pt-0"], [1, "swiper-centered-slides-2", "swiper-container", "p-3", 3, "swiper"], [1, "swiper-slide", "rounded", "swiper-shadow", "py-2", "px-4", "d-flex"], [1, "fa", "fa-google", "d-flex", "align-items-center", "font-medium-3", "mr-2"], [1, "swiper-text"], [1, "fa", "fa-facebook", "d-flex", "align-items-center", "font-medium-3", "mr-2"], [1, "fa", "fa-twitter", "d-flex", "align-items-center", "font-medium-3", "mr-2"], [1, "fa", "fa-instagram", "d-flex", "align-items-center", "font-medium-3", "mr-2"], ["id", "swiper-fade-effect"], [1, "swiper-fade-effect", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-19.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-18.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-17.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-16.jpg", "alt", "banner", 1, "img-fluid"], [1, "swiper-pagination", "swiper-pagination-white"], ["id", "swiper-cube-effect"], [1, "swiper-cube-effect", "swiper-container", "mb-3", 3, "swiper"], ["src", "assets/img/banner/banner-21.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-22.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-23.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-24.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-coverflow"], [1, "swiper-coverflow", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-39.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-38.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-37.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-36.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-autoplay"], [1, "swiper-autoplay", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-10.jpg", "alt", "banner", 1, "img-fluid"], ["src", "assets/img/banner/banner-11.jpg", "alt", "banner", 1, "img-fluid"], ["id", "swiper-parallax"], [1, "swiper-parallax", "swiper-container", 3, "swiper"], ["data-swiper-parallax", "-23%", 1, "parallax-bg"], ["src", "assets/img/banner/parallax-4.jpg", "alt", "banner", 1, "img-fluid"], ["data-swiper-parallax", "-300", 1, "title"], ["data-swiper-parallax", "-200", 1, "subtitle", "mb-1"], ["data-swiper-parallax", "-100"], [1, "font-small-2"], ["data-swiper-parallax", "-300", "data-swiper-parallax-opacity", "0", 1, "title"], ["id", "swiper-lazy"], [1, "swiper-lazy-loading", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-9.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], [1, "swiper-lazy-preloader", "swiper-lazy-preloader-white"], ["src", "assets/img/banner/banner-8.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-7.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-20.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-5.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["src", "assets/img/banner/banner-4.jpg", "alt", "banner", 1, "swiper-lazy", "img-fluid"], ["id", "swiper-responsive-breakpoints"], [1, "swiper-responsive-breakpoints", "swiper-container", 3, "swiper"], ["src", "assets/img/banner/banner-30.jpg", "alt", "banner", 1, "img-fluid"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Swiper");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Swiper is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Navigations");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pagination");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Progress");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "section", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Multiple Slides Per View");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "section", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Centered Slides option-1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Getting Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Pricing & Plans");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sales Question");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Usage Guides");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "General Guide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "section", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Centered Slides option-2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Getting Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Pricing & Plans");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Sales Question");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Usage Guides");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "General Guide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "section", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Fade Effect");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "section", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "3-D cube Effect");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "img", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "section", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "3d Effect Coverflow Effect");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "img", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "img", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "section", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Autoplay");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "img", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "section", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Parallax");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "img", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Slide 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Cake biscuit candy canes cake macaroon cheesecake gummies carrot cake. Chupa chups pastry halvah gummi bears powder. Wafer macaroon gummi bears tart souffl\u00E9 chocolate cake.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Slide 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Pie gummi bears macaroon cupcake. Dessert drag\u00E9e apple pie lollipop cake gummies lemon drops chupa chups apple pie. Ice cream sugar plum sweet roll cake candy fruitcake souffl\u00E9.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Slide 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Lemon drops oat cake marzipan cheesecake sweet. Drag\u00E9e chocolate bar gingerbread pudding tiramisu. Ice cream croissant chupa chups sesame snaps jujubes sesame snaps ice cream fruitcake.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "section", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Lazy Loading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "img", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "img", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "img", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "img", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "img", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "section", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Responsive Breakpoints");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "img", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "img", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "img", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "img", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperDefaultConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperNavigationConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperPaginationConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperProgressConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperMultipleConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCenterOpt1Config);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCenterOpt2Config);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperFadeEffectConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCubeEffectConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperCoverflowEffectConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperAutoplayConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperParallaxConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperLazyLoadingConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.swiperResponsiveBreakpointsConfig);
        } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__.SwiperDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2lwZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SwiperComponent;
}());



/***/ }),

/***/ 36021:
/*!*****************************************************************!*\
  !*** ./src/app/tedaviplanlama/tedaviplanlama-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoutingModule": function() { return /* binding */ ChatRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _tedaviplanlama_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tedaviplanlama.component */ 52611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _tedaviplanlama_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
        data: {
            title: 'Chat'
        },
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule.ɵfac = function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); };
    ChatRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
    ChatRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return ChatRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
var routedComponents = [_tedaviplanlama_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent];


/***/ }),

/***/ 52611:
/*!************************************************************!*\
  !*** ./src/app/tedaviplanlama/tedaviplanlama.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": function() { return /* binding */ ChatComponent; }
/* harmony export */ });
/* harmony import */ var _tedaviplanlama_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tedaviplanlama.service */ 89198);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/sweet-alerts */ 645);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newrecordrow/newrecordrow.component */ 36009);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-device-detector */ 61946);
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/config.service */ 36955);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ 96903);






















var _c0 = ["tableRowDetails"];
var _c1 = ["tableResponsive"];
function ChatComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_7_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.hastakarti(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_7_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.listeyedon(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.secilenhasta);
} }
function ChatComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_8_div_4_Template_button_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); var tedavigrubu_r16 = restoredCtx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r17.tedavilerigetir(tedavigrubu_r16.tanim); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tedavigrubu_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tedavigrubu_r16.tanim);
} }
function ChatComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.tedavilerigetir(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "T\u00DCM UYGULAMALAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_div_8_div_4_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.tedavigruplari);
} }
function ChatComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_form_9_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.searchQuery = $event; })("keyup", function ChatComponent_form_9_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.hastaara(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r4.searchQuery);
} }
function ChatComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_form_10_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.searchQuery = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.searchQuery);
} }
function ChatComponent_div_14_a_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 46);
} }
function ChatComponent_div_14_a_1_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 47);
} }
var _c2 = function (a0) { return { "selected-chat": a0 }; };
var _c3 = function (a0) { return { "align-items-center": a0 }; };
function ChatComponent_div_14_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_14_a_1_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); var user_r27 = restoredCtx.$implicit; var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r30.viewChat(user_r27, user_r27.cariindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_div_14_a_1_i_11_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_div_14_a_1_i_12_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c2, user_r27.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c3, !user_r27.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", user_r27.profilresim, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("avatar-status-", user_r27.durumu, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", user_r27.caritanimi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r27.isPinnedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r27.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", "tel:" + user_r27.yetkiligsm, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r27.yetkiligsm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r27.tckimlikno);
} }
function ChatComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_div_14_a_1_Template, 18, 16, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, ctx_r6.usersChat, "caritanimi", ctx_r6.searchQuery));
} }
function ChatComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_a_15_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34); var ppp_r32 = restoredCtx.$implicit; var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.paketdus(ppp_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ppp_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ppp_r32.aciklama, " ", ppp_r32.kalanseans, " - PAKET");
} }
function ChatComponent_div_16_a_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_16_a_1_div_6_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41); var user_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r39.onecikar(user_r36.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_16_a_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_16_a_1_div_7_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44); var user_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r42.onecikar_gerial(user_r36.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_16_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_16_a_1_Template_a_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r46); var user_r36 = restoredCtx.$implicit; var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r45.tedavisec(user_r36, user_r36.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_div_16_a_1_div_6_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_div_16_a_1_div_7_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, user_r36.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](user_r36.hizmettanimi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r36.onecikar == "H" || user_r36.onecikar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", user_r36.onecikar == "E");
} }
function ChatComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_div_16_a_1_Template, 8, 6, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, ctx_r8.tedaviler, "hizmettanimi", ctx_r8.searchQuery));
} }
function ChatComponent_div_17_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Bor\u00E7lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_17_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alacakl\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_17_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Temiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u0130\u015Flem");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Tahsilat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ChatComponent_div_17_span_35_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ChatComponent_div_17_span_36_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ChatComponent_div_17_span_37_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Bakiye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Uyar\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r9.bakiyeler[0].islemtoplami, " \u20BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r9.bakiyeler[0].odemetoplami, " \u20BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r9.bakiyeler[0].bakiye, " \u20BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.bakiyeler[0].odemetoplami - ctx_r9.bakiyeler[0].islemtoplami > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.bakiyeler[0].odemetoplami - ctx_r9.bakiyeler[0].islemtoplami < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.bakiyeler[0].odemetoplami - ctx_r9.bakiyeler[0].islemtoplami === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r9.uyari);
} }
function ChatComponent_div_18_div_1_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Bor\u00E7lu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_18_div_1_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Alacakl\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_18_div_1_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Temiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "\u0130\u015Flem Toplam\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Tahsilat Toplam\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, ChatComponent_div_18_div_1_span_35_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ChatComponent_div_18_div_1_span_36_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ChatComponent_div_18_div_1_span_37_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Bakiye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "h7", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Uyar\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r50.bakiyeler[0].islemtoplami, " TL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r50.bakiyeler[0].odemetoplami, " TL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r50.bakiyeler[0].bakiye, " TL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r50.bakiyeler[0].odemetoplami - ctx_r50.bakiyeler[0].islemtoplami > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r50.bakiyeler[0].odemetoplami - ctx_r50.bakiyeler[0].islemtoplami < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r50.bakiyeler[0].odemetoplami - ctx_r50.bakiyeler[0].islemtoplami === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r50.uyari);
} }
function ChatComponent_div_18_div_2_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_div_3_button_1_Template_button_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); var dishekimi_r57 = restoredCtx.$implicit; var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r58.doktorsec(dishekimi_r57.plasiyeradi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var dishekimi_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](dishekimi_r57.plasiyeradi);
} }
function ChatComponent_div_18_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_div_18_div_2_div_3_button_1_Template, 2, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r55.dishekimleri);
} }
function ChatComponent_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r60.onSidebarToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_div_18_div_2_div_3_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r62.satirekle("742", "cariindex", "1668"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00DCr\u00FCn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r63.satirekle("743", "cariindex", "1668"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Paket");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r64.satirekle("727", "cariindex", "1671"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Tahsilat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r65.hastakarti(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "M\u00FC\u015Fteri Bilgisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r66.randevuver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Randevu Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_div_18_div_2_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61); var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r67.yenihasta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Yeni M\u00FC\u015Fteri");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r51.recordid != null && ctx_r51.cihazmobilmi == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placement", ctx_r51.placement);
} }
function ChatComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_div_18_div_1_Template, 55, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_div_18_div_2_Template, 21, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.recordid != null && ctx_r10.cihazmobilmi == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.recordid != null);
} }
var _c4 = function (a0) { return { active: a0 }; };
function ChatComponent_section_19_section_1_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_li_3_Template_a_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79); var grup_r76 = restoredCtx.$implicit; var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r78.setActiveTab(grup_r76.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var grup_r76 = ctx.$implicit;
    var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c4, ctx_r69.activeTab === grup_r76.name))("id", grup_r76.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r69.baslikkontrol(grup_r76.name));
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_1_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_1_div_11_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r92); var satir_r88 = restoredCtx.$implicit; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r90.deleterecord(satir_r88.id, blok_r80.bagliformindex, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var satir_r88 = ctx.$implicit;
    var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r87.SERVER_URLs + "" + satir_r88.dosya, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_1_Template(rf, ctx) { if (rf & 1) {
    var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r95); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r93.satirekle(blok_r80.bagliformindex, blok_r80.masterfield, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Yeni G\u00F6r\u00FCnt\u00FC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_19_section_1_div_8_div_1_section_1_div_11_Template, 5, 1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("swiper", ctx_r84.swiperCoverflowEffectConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r84.satirlar[blok_r80.bokindex]);
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r111); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r109.formModal(blok_r80.bagliformindex, 198); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r112.tasarla(blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r116); var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r115.excelModal(ctx_r115.mymodal); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r118); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r117.exportAsExcelFile(ctx_r117.satirlar[blok_r80.bokindex], blok_r80.formtanimi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Excel'e Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r122); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r120.barkodOkut(blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r124); var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r123.maliyethesapla("Sat\u0131nalma"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Yeniden Hesapla");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r127); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r125.sarjdoldur(blok_r80.bagliformindex, blok_r80.masterfield, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r130); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r128.otomatikdoldur(blok_r80.bagliformindex, blok_r80.masterfield, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Otomatik Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r132); var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r131.mixsarjformuyazdir(ctx_r131.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r134); var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r133.bekleyensiparisler(ctx_r133.veriler); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Bekleyen Sipari\u015Flerden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r137); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r135.satirekle(blok_r80.bagliformindex, blok_r80.masterfield, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_4_Template, 2, 0, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_5_Template, 2, 0, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_6_Template, 3, 0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_7_Template, 2, 0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_8_Template, 2, 0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_9_Template, 3, 0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_10_Template, 3, 0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_11_Template, 3, 0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_12_Template, 2, 0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_button_13_Template, 3, 0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r97.userroles == "00038" || ctx_r97.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r97.userroles == "00038" || ctx_r97.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r97.cihazmobilmi == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r97.cihazmobilmi == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "598");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "664");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r97.formid == "486");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "657");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "605");
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h7", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r144 = ctx.$implicit;
    var row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", row_r139[column_r144.id], " ");
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r149); var row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r147.deleterecord(row_r139.id, blok_r80.bagliformindex, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r153); var row_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r151.editrecord(row_r139.id, blok_r80.bagliformindex, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_div_1_Template, 3, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_button_3_Template, 2, 0, "button", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_button_4_Template, 2, 0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r98.sutunlars[blok_r80.bokindex].slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r98.secilenform != "siparis-izleme" && blok_r80.bagliformindex != "627" && blok_r80.bagliformindex != "631" && blok_r80.bagliformindex != "637" && blok_r80.bagliformindex != "639" && blok_r80.bagliformindex != "670" && blok_r80.bagliformindex != "645" && blok_r80.bagliformindex != "666" && blok_r80.bagliformindex != "655" && blok_r80.bagliformindex != "668");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r98.secilenform != "siparis-izleme" && blok_r80.bagliformindex != "631" && blok_r80.bagliformindex != "637" && blok_r80.bagliformindex != "639" && blok_r80.bagliformindex != "645" && blok_r80.bagliformindex != "666" && blok_r80.bagliformindex != "670");
} }
function ChatComponent_section_19_section_1_div_8_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_div_1_div_3_div_6_Template, 14, 10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_19_section_1_div_8_div_1_div_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r157); var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r156.termB = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ul", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_19_section_1_div_8_div_1_div_3_li_13_Template, 5, 3, "li", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r85.formtanimi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r85.termB);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r85.satirlar[blok_r80.bokindex]);
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r176); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r174.formModal(blok_r80.bagliformindex, 198); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r177.tasarla(blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r182); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r180.barkodOkut(blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r184); var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r183.maliyethesapla("Sat\u0131nalma"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Yeniden Hesapla");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r187); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r185.sarjdoldur(blok_r80.bagliformindex, blok_r80.masterfield, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r190); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r188.otomatikdoldur(blok_r80.bagliformindex, blok_r80.masterfield, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Otomatik Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r192); var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r191.mixsarjformuyazdir(ctx_r191.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r194); var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r193.bekleyensiparisler(ctx_r193.veriler); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Bekleyen Sipari\u015Flerden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r197); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r195.satirekle(blok_r80.bagliformindex, blok_r80.masterfield, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_4_Template, 2, 0, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_5_Template, 2, 0, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r197); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11); var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r198.excelModal(_r160); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r197); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r199.exportAsExcelFile(ctx_r199.satirlar[blok_r80.bokindex], blok_r80.formtanimi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Excel'e Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_11_Template, 2, 0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_12_Template, 3, 0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_13_Template, 3, 0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_14_Template, 3, 0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_15_Template, 2, 0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_button_16_Template, 3, 0, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r159.userroles == "00038" || ctx_r159.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r159.userroles == "00038" || ctx_r159.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "598");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "664");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r159.formid == "486");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "657");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "605");
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ng_template_10_form_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Y\u00FCkle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", blok_r80.bagliformindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx_r203.recordid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", blok_r80.detailfield);
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h4", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ng_template_10_Template_button_click_3_listener() { var modal_r202 = ctx.$implicit; return modal_r202.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_19_section_1_div_8_div_1_section_4_ng_template_10_form_7_Template, 10, 3, "form", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ng_template_10_Template_button_click_9_listener() { var modal_r202 = ctx.$implicit; return modal_r202.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Tamam");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.formturu != "Rapor");
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row;
    var column_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r212[column_r208.id]);
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_div_0_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_div_1_Template, 2, 0, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_div_2_Template, 2, 0, "div", 182);
} if (rf & 2) {
    var row_r212 = ctx.row;
    var column_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r212[column_r208.id] != "true" && row_r212[column_r208.id] != "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r212[column_r208.id] == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r212[column_r208.id] == "false");
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-column", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_ng_template_1_Template, 3, 3, "ng-template", 180, 181, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r208 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("name", column_r208.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("prop", column_r208.id);
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r241); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r239.yuzdegir(row_r221.id, blok_r80.bokindex, row_r221.yuzdepayi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r245); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r243.parametreler(row_r221.id, blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r249); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r247.rezervEt(row_r221.id, blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r253); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit; var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r251.barkodOkut(blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r256 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r256); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r254.paletbarkodyazdir(row_r221.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r259); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r257.barkodyazdir(row_r221.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r262); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r260.sarjbittionay(row_r221.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r265); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r263.sarjformuyazdir(row_r221.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r268); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r266.editrecord(row_r221.id, blok_r80.bagliformindex, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r272 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r272); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r270.editrecord(row_r221.id, "742", blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r276); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r274.editrecord(row_r221.id, "743", blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r280); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r278.uretimYontemGit(row_r221.id, blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r283); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5).$implicit; var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r282.rezervlerdencek(ctx_r282.veriler, blok_r80.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r287); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r285.formlaraGit(row_r221.id, blok_r80.bagliformindex, "veridagitimformu", "musteri_urun_kodu", "kalemkodu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r291); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r289.formlaraGit(row_r221.id, blok_r80.bagliformindex, "maliyet_analizi", "", ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_18_Template(rf, ctx) { if (rf & 1) {
    var _r295 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r295); var row_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().row; var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7); return ctx_r293.kartinagit(row_r221.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_1_Template, 2, 0, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_2_Template, 2, 0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_3_Template, 2, 0, "button", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_4_Template, 2, 0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_5_Template, 2, 0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_6_Template, 2, 0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_7_Template, 2, 0, "button", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_8_Template, 2, 0, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_9_Template, 2, 0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_10_Template, 2, 0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_11_Template, 2, 0, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_Template_button_click_12_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r298); var row_r221 = restoredCtx.row; var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit; var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r296.deleterecord(row_r221.id, blok_r80.bagliformindex, blok_r80.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_14_Template, 2, 0, "button", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_15_Template, 2, 0, "button", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_16_Template, 2, 0, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_17_Template, 2, 0, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_button_18_Template, 2, 0, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r221 = ctx.row;
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "610" || blok_r80.bagliformindex == "614" || blok_r80.bagliformindex == "618" || blok_r80.bagliformindex == "616");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "257");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "278");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "642" && blok_r80.formindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.formindex == "395");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "653" && blok_r80.formindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r221.HareketTuru != "\u00DCr\u00FCn Sat\u0131\u015F\u0131" && row_r221.HareketTuru != "Paket Sat\u0131\u015F\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r221.HareketTuru == "\u00DCr\u00FCn Sat\u0131\u015F\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r221.HareketTuru == "Paket Sat\u0131\u015F\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "250" && blok_r80.formindex == "254");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "278" && blok_r80.formindex == "277");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "513" && blok_r80.formindex == "491");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "513" && blok_r80.formindex == "491");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "610" || blok_r80.bagliformindex == "614" || blok_r80.bagliformindex == "618" || blok_r80.bagliformindex == "616");
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-column", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_ng_template_1_Template, 19, 16, "ng-template", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 200);
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
    var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Toplam KG: ", ctx_r300.getirs(blok_r80.bagliformindex), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Toplam Y\u00FCzde: ", ctx_r300.getirs_2(blok_r80.bagliformindex), " ");
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_19_ng_template_1_Template, 5, 2, "ng-template", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_20_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Toplam Maliyet: ", ctx_r306.toplammaliyet, " TL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Birim Maliyet: ", ctx_r306.birimmaliyet, " TL ");
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_20_ng_template_1_Template, 5, 2, "ng-template", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_div_1_section_4_Template(rf, ctx) { if (rf & 1) {
    var _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h4", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_19_section_1_div_8_div_1_section_4_div_7_Template, 17, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_19_section_1_div_8_div_1_section_4_ng_template_10_Template, 11, 1, "ng-template", null, 156, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "fieldset", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Ara: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_19_section_1_div_8_div_1_section_4_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r313); var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; return blok_r80.bagliformindexC = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ngx-datatable", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_17_Template, 3, 2, "ngx-datatable-column", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_column_18_Template, 2, 1, "ngx-datatable-column", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_19_Template, 2, 0, "ngx-datatable-footer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ChatComponent_section_19_section_1_div_8_div_1_section_4_ngx_datatable_footer_20_Template, 2, 0, "ngx-datatable-footer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](blok_r80.formtanimi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("name", "search_", blok_r80.bokindex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", blok_r80.bokindex)("ngModel", blok_r80.bagliformindexC);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columns", ctx_r86.sutunlars[blok_r80.bokindex])("columnMode", ctx_r86.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx_r86.satirlar[blok_r80.bokindex])("scrollbarH", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r86.sutunlars[blok_r80.bokindex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "610" || blok_r80.bagliformindex == "614" || blok_r80.bagliformindex == "618" || blok_r80.bagliformindex == "616");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex == "664");
} }
function ChatComponent_section_19_section_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_section_1_Template, 13, 2, "section", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_19_section_1_div_8_div_1_div_3_Template, 14, 4, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_19_section_1_div_8_div_1_section_4_Template, 21, 16, "section", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](blok_r80.blokboyutu);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx_r82.activeTab === blok_r80.grupadi ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", blok_r80.bokindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.bagliformindex === "726");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r82.cihazmobilmi == true && ctx_r82.columns.length > 0 && blok_r80.bagliformindex !== "726");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r82.cihazmobilmi == false && blok_r80.bagliformindex !== "726");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Kay\u0131t Tarihi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Son D\u00FCzenleme T.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Olu\u015Fturan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Son D\u00FCzenleyen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316.kayittarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r318.kayittarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316.sonduzenlemetarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r318.sonduzenlemetarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316.olusturans);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r318.olusturan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316.sonduzenleyen);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ctx_r318.sonduzenleyen);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
var _c5 = function (a0, a1) { return { "is-invalid ": a0, "is-valid": a1 }; };
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r347); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r345.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 223, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r347); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r348.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r347); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_1_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r323.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r343.errors == null ? null : _r343.errors.required) && alan_r321.zorunlu === "True", !_r343.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r343.errors == null ? null : _r343.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
var _c6 = function (a0, a1, a2) { return { " is-invalid    ": a0, "  is-valid ": a1, "form-control selectRef": a2 }; };
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r359); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r357.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ng-select", 227, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template_ng_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r359); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r360.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r359); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_2_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r355 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r324.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](9, _c6, (_r355.errors == null ? null : _r355.errors.required) && alan_r321.zorunlu === "True", !_r355.invalid && alan_r321.zorunlu === "True", alan_r321.zorunlu === "True"))("items", ctx_r324.cities[alan_r321.alan_index])("closeOnSelect", true)("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r355.errors == null ? null : _r355.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_3_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r371); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r369.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 228, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r371); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r372.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r371); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_3_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r367 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r325.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r367.errors == null ? null : _r367.errors.required) && alan_r321.zorunlu === "True", !_r367.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r367.errors == null ? null : _r367.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_4_div_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r384); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var veri_r380 = ctx.$implicit;
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veri_r380.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", veriler_r316[alan_r321.alanadi])("id", veri_r380.name + "_" + alan_r321.alan_index)("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("for", "", veri_r380.name, "_", alan_r321.alan_index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](veri_r380.name);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_4_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r390); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r388.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_4_div_5_Template, 4, 7, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r326.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r326.cities[alan_r321.alan_index]);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r394); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r392.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r394); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r395.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r394); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r327.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_6_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r406 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r406); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r404.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 236, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r406); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r407.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r406); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_6_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r402 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r328.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r402.errors == null ? null : _r402.errors.required) && alan_r321.zorunlu === "True", !_r402.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r402.errors == null ? null : _r402.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r416 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r416); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r414.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r416); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r417.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r416); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r329.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r426); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r424.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r426); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r427.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r426); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r330.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r436 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r436); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r434.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r436); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_10_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r446); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r444.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 241, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r446); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r447.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r446); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_10_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r442 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r332.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r442.errors == null ? null : _r442.errors.required) && alan_r321.zorunlu === "True", !_r442.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r442.errors == null ? null : _r442.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r456 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r456); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r454.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r456); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r333.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](veriler_r316[alan_r321.alanadi]);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_12_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r466 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r466); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r464.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 243, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r466); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r467.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r466); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_12_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r462 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r334.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r462.errors == null ? null : _r462.errors.required) && alan_r321.zorunlu === "True", !_r462.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r462.errors == null ? null : _r462.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_13_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r478); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r476 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r476.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 244, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r478); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r479 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r479.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r478); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_13_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r335.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r474.errors == null ? null : _r474.errors.required) && alan_r321.zorunlu === "True", !_r474.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r474.errors == null ? null : _r474.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r488 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r488); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r486 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r486.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r488); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); })("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r488); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r492.dosyayukle($event, alan_r321.alanadi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r336.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", veriler_r316[alan_r321.alanadi], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r498 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "img", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r498); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; var ctx_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r496.pdfegit(veriler_r316[alan_r321.alanadi]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r498); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r500 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r500.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r498); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r502 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r502.pdfdosyayukle($event, alan_r321.alanadi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r337.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("name", alan_r321.alanadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r507 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r507); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r505 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r505.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r507); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r338.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r338.degistir(veriler_r316[alan_r321.alanadi]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_17_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r517 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r517); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r515.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ng-select", 250, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r517); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_17_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r513 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r339.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](9, _c6, (_r513.errors == null ? null : _r513.errors.required) && alan_r321.zorunlu === "True", !_r513.invalid && alan_r321.zorunlu === "True", alan_r321.zorunlu === "True"))("items", ctx_r339.cities[alan_r321.alan_index])("id", alan_r321.alanadi)("closeOnSelect", true)("name", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r513.errors == null ? null : _r513.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_18_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r527 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r527); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r525.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 223, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r527); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r528.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r527); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_18_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r523 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r340.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r523.errors == null ? null : _r523.errors.required) && alan_r321.zorunlu === "True", !_r523.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r523.errors == null ? null : _r523.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_19_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r539 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r539); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r537 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r537.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 223, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r539); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r540 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r540.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r539); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_19_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r535 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r341.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c5, (_r535.errors == null ? null : _r535.errors.required) && alan_r321.zorunlu === "True", !_r535.invalid && alan_r321.zorunlu === "True"))("ngModel", veriler_r316[alan_r321.alanadi])("name", alan_r321.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r535.errors == null ? null : _r535.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_20_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r551 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r551); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r549 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r549.AlanOzellikleri(alan_r321.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ng-select", 251, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template_ng_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r551); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var ctx_r552 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5); return ctx_r552.islemyap(alan_r321.formindex, alan_r321.alanadi); })("ngModelChange", function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r551); var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit; var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; return (veriler_r316[alan_r321.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_20_small_6_Template, 2, 0, "small", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r547 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5);
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var veriler_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", alan_r321.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r342.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", alan_r321.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](9, _c6, (_r547.errors == null ? null : _r547.errors.required) && alan_r321.zorunlu === "True", !_r547.invalid && alan_r321.zorunlu === "True", alan_r321.zorunlu === "True"))("items", ctx_r342.cities[alan_r321.alan_index])("closeOnSelect", true)("name", alan_r321.alanadi)("ngModel", veriler_r316[alan_r321.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (_r547.errors == null ? null : _r547.errors.required) && alan_r321.zorunlu === "True");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_1_Template, 7, 11, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_2_Template, 7, 13, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_3_Template, 7, 11, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_4_Template, 6, 3, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_5_Template, 5, 6, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_6_Template, 7, 11, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_7_Template, 5, 6, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_8_Template, 5, 6, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_9_Template, 2, 4, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_10_Template, 7, 11, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_11_Template, 6, 6, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_12_Template, 7, 11, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_13_Template, 7, 11, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_14_Template, 7, 6, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_15_Template, 7, 4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_16_Template, 7, 5, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_17_Template, 7, 13, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_18_Template, 7, 11, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_19_Template, 7, 11, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_div_20_Template, 7, 13, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](alan_r321.alanboyutu);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Combobox");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Radiobutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "File(JPG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "File(PDF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "File(PNG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Secimli");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Multiautocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "Autocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", alan_r321.verigiristuru == "FixList");
} }
function ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_div_1_Template, 21, 22, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var alan_r321 = ctx.$implicit;
    var blok_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    var ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r319.ayniblokmu(alan_r321.blokindex, blok_r80.bokindex) && ctx_r319.activeTab === blok_r80.grupadi);
} }
function ChatComponent_section_19_section_1_div_8_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_form_2_ng_container_1_Template, 22, 8, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_19_section_1_div_8_form_2_ng_container_2_Template, 2, 1, "ng-container", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r83.activeTab == "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r83.blokalanlari);
} }
function ChatComponent_section_19_section_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_div_8_div_1_Template, 5, 8, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ChatComponent_section_19_section_1_div_8_form_2_Template, 3, 2, "form", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r80 = ctx.$implicit;
    var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", blok_r80.turu === "Liste" && ctx_r70.activeTab === blok_r80.grupadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r70.formverileri);
} }
function ChatComponent_section_19_section_1_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r562 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r562); var ctx_r561 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r561.tabloOlustur(ctx_r561.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Tablo Olu\u015Ftur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r564 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r564); var ctx_r563 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r563.eksikAlanlar(ctx_r563.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Eksik Alanlar\u0131 Olu\u015Ftur");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r566 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r566); var ctx_r565 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r565.isemriformu(ctx_r565.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0130\u015F Emri Formu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r568 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r568); var ctx_r567 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r567.kalitekontrolformu(ctx_r567.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Kalite Kontrol Formu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r570 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_section_19_section_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r570); var ctx_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r569.sipariseDonustur(ctx_r569.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Sipari\u015Fe D\u00F6n\u00FC\u015Ft\u00FCr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ChatComponent_section_19_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ul", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ChatComponent_section_19_section_1_li_3_Template, 5, 5, "li", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_section_19_section_1_div_8_Template, 3, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_section_19_section_1_button_10_Template, 3, 0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ChatComponent_section_19_section_1_button_11_Template, 3, 0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ChatComponent_section_19_section_1_button_12_Template, 3, 0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ChatComponent_section_19_section_1_button_13_Template, 3, 0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_section_19_section_1_button_14_Template, 3, 0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r68.grupbasliklari);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r68.bloklar);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r68.formid == "198");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r68.formid == "198");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r68.formid == "445");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r68.formid == "445");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r68.formid == "282");
} }
function ChatComponent_section_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ChatComponent_section_19_section_1_Template, 15, 7, "section", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.recordid != null);
} }
var _c7 = function (a0) { return { show: a0 }; };
var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(http, http2, modalService, elRef, router, deviceService, renderer, document, configService, cdr, chatService, route) {
        var _this = this;
        this.http = http;
        this.http2 = http2;
        this.modalService = modalService;
        this.elRef = elRef;
        this.router = router;
        this.deviceService = deviceService;
        this.renderer = renderer;
        this.document = document;
        this.configService = configService;
        this.cdr = cdr;
        this.chatService = chatService;
        this.route = route;
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_2__;
        this.avatar = "";
        this.clasim = 'chat-sidebar';
        this.hastasecildi = "";
        this.activeTab = "general";
        this.generalFormSubmitted = false;
        this.changePasswordFormSubmitted = false;
        this.infoFormSubmitted = false;
        this.alertVisible = true;
        this.termC = "";
        this.vActive = 'top'; // Vertical Pills
        this.active = 1; // Basic Navs
        this.kActive = 1; // Keep content
        this.disabled = true;
        this.tip1 = '';
        this.tip2 = '';
        this.tip3 = '';
        this.tip4 = '';
        this.tip1_y = '';
        this.tip2_y = '';
        this.tip3_y = '';
        this.tip4_y = '';
        this.uyari = '---';
        this.secilendis = '';
        this.secilenhasta = "";
        this.formid = 722;
        this.tabs = [1, 2, 3, 4, 5];
        this.counter = this.tabs.length + 1;
        this.cities = [];
        this.sutunlars = [];
        this.satirlar = [];
        this.grupbasliklari = [];
        this.toplammaliyet = 0;
        this.birimmaliyet = 0;
        this.coklusecim = true;
        this.brfiyatcarp = true;
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
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.ColumnMode;
        this.SERVER_URL = localStorage.getItem('url');
        this.SERVER_URLs = localStorage.getItem('url');
        // default
        this.swiperDefaultConfig = {};
        // navigation
        this.swiperNavigationConfig = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // pagination
        this.swiperPaginationConfig = {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // progress
        this.swiperProgressConfig = {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // multiple
        this.swiperMultipleConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // multi row
        this.swiperMultiRowConfig = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        };
        // centered slides option-1
        this.swiperCenterOpt1Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slideToClickedSlide: true
        };
        // centered slides option-2
        this.swiperCenterOpt2Config = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
        };
        // fade effect
        this.swiperFadeEffectConfig = {
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // cube effect
        this.swiperCubeEffectConfig = {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // coverflow effect
        this.swiperCoverflowEffectConfig = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        };
        // autoplay
        this.swiperAutoplayConfig = {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // parallax
        this.swiperParallaxConfig = {
            speed: 600,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // lazy loading
        this.swiperLazyLoadingConfig = {
            // Enable lazy loading
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        // Responsive Breakpoints
        this.swiperResponsiveBreakpointsConfig = {
            slidesPerView: 5,
            spaceBetween: 50,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        };
        this.userroles = localStorage.getItem('unvani');
        this.expanded = {};
        this.chats = [];
        this.cet = [];
        this.disler = [];
        this.disler2 = [];
        this.usersChat = [];
        this.newMessage = "";
        this.searchQuery = '';
        this.placement = "bottom-right";
        this.isContentOverlay = false;
        this.userid = localStorage.getItem('userid');
        this.config = {};
        this.urlid = this.route.snapshot.paramMap.get('id');
        this.messages = new Array();
        this.item = 0;
        this.leftChat = false;
        this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=hastalarigetir&userindeks=" + this.userid;
        this.http.get(this.users).subscribe(function (data) {
            _this.usersChat = data;
            if (_this.urlid != null) {
                var filterData = data.filter(function (a) { return a.cariindex == _this.urlid; });
                _this.viewChat(filterData, _this.urlid);
                _this.activeChatUser = filterData[0].caritanimi;
                _this.activeChatUserImg = filterData[0].profilresim;
            }
        });
        this.config = this.configService.templateConf;
        this.activeChat = chatService.usersChat.find(function (_) { return _.isActiveChat; });
        this.activeChatUser = this.activeChat.name;
        this.activeChatUserImg = this.activeChat.avatar;
        this.loggedInUserImg = "assets/img/portrait/small/avatar-s-1.png";
        this.renderer.addClass(this.document.body, "chat-application");
        //this.usersChat.find(o => o.user_indeks === 10);
    }
    ChatComponent.prototype.tedavilerigetir = function (tedavigrubu) {
        var _this = this;
        this.secilengrup = tedavigrubu;
        this.secilentedavi = '';
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=692&tedavigrubu=" + tedavigrubu + '&fiyatgrubu=' + this.fiyatgrubu;
        this.http.get(periocek).subscribe(function (data) {
            _this.tedaviler = data;
        });
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cihazmobilmi = this.deviceService.isMobile();
        if (this.cihazmobilmi == true) {
            this.clasim = '';
        }
        this.islemtarihi = moment__WEBPACK_IMPORTED_MODULE_1__().format("Y-M-d");
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=737";
        this.http.get(periocek).subscribe(function (data) {
            _this.tedavigruplari = data;
        });
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=698";
        this.http.get(periocek).subscribe(function (data) {
            _this.dishekimleri = data;
        });
        this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=hastalarigetir&userindeks=" + this.userid;
        this.http.get(this.users).subscribe(function (data) {
            _this.usersChat = data;
            _this.cdr.markForCheck();
        });
        if (localStorage.getItem('secilenhasta') !== '') {
            var id = localStorage.getItem('secilenhasta');
            var paketgetir = localStorage.getItem('url') + "angular/dataservis.php?page_id=musteripaketgetir&musteriid=" + id;
            this.http.get(paketgetir).subscribe(function (data) {
                _this.musteripaketleri = data;
            });
            periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=bakiyecek&hastaid=" + id + "&type=Alt";
            this.http.get(periocek).subscribe(function (data) {
                _this.bakiyeler = data;
                for (var i = 0; i < _this.bakiyeler.length; i++) {
                    _this.bakiyeler[i].bakiyesi = _this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1;
                    if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 < 0) {
                        _this.bakiyeler[i].durumum = 'Borçlu';
                    }
                    if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 > 0) {
                        _this.bakiyeler[i].durumum = 'Alacaklı';
                    }
                    if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 === 0) {
                        _this.bakiyeler[i].durumum = 'Temiz';
                    }
                }
            });
            this.hastasecildi = id;
            this.secilenhasta = localStorage.getItem('secilenhastaadi');
            this.fiyatgrubu = 'TDB';
            var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Üst";
            this.http.get(periocek).subscribe(function (data) {
                _this.disler = data;
            });
            periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Alt";
            this.http.get(periocek).subscribe(function (data) {
                _this.disler2 = data;
            });
            localStorage.setItem('secilenform', 'hasta-hesap-karti');
            this.searchQuery = '';
            this.hesapkarti(id);
            this.secilenform = localStorage.getItem('secilenform');
            this.aliciid = id;
        }
        this.tedavilerigetir('');
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.viewInterval);
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        this.renderer.removeClass(this.document.body, "chat-application");
    };
    //send button function calls
    ChatComponent.prototype.onAddMessage = function () {
        var _this = this;
        if (this.newMessage != "") {
            console.log(this.aliciid);
            var postUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_mesajgonder";
            var postData = new FormData();
            postData.append('gonderenid', localStorage.getItem('userid'));
            postData.append('aliciid', this.aliciid);
            postData.append('mesaj', this.newMessage);
            this.http.post(postUrl, postData).subscribe(function (data) {
                _this.mesajcek = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + _this.aliciid + "&userid=" + localStorage.getItem('userid');
                _this.http.get(_this.mesajcek).subscribe(function (data) {
                    _this.chats = data;
                    _this.cdr.markForCheck();
                });
            }, function (err) {
                console.log('Error: ' + err.error);
            });
            // this.activeChat.chats.push({
            //   isReceived: false,
            //   time: "",
            //   messages: [this.newMessage],
            //   messageType: 'text'
            // })
            this.newMessage = "";
        }
    };
    ChatComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ChatComponent.prototype.hastaara = function () {
        var _this = this;
        if (this.searchQuery.length >= 3) {
            this.users = localStorage.getItem('url') + "angular/dataservis.php?page_id=hastalarigetir&userindeks=" + this.userid + "&filtre=" + this.searchQuery;
            this.http.get(this.users).subscribe(function (data) {
                _this.usersChat = data;
                _this.cdr.markForCheck();
            });
        }
    };
    ChatComponent.prototype.baslikkontrol = function (grupadi) {
        if (grupadi == '') {
            return 'Genel Bilgiler';
        }
        if (grupadi != '') {
            return grupadi;
        }
    };
    ChatComponent.prototype.ayniblokmu = function (s1, s2) {
        if (s1 === s2) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatComponent.prototype.hesapkarti = function (id) {
        var _this = this;
        this.formid = '722';
        localStorage.setItem('recordid', id);
        this.recordid = id;
        this.secilenform = localStorage.getItem('secilenform');
        // this.formtanimi = localStorage.getItem('formtanimi');
        // this.formid = localStorage.getItem('formid');
        // this.recordid = localStorage.getItem('recordid');
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formverileri&formid=" + this.formid + "&kayitid=" + this.recordid;
        console.log(this.SERVER_URL);
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.formverileri = data;
            var firmaid = "";
            var formverisi;
            _this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'musteri_adi') {
                        firmaid = item[key];
                    }
                });
            });
            _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;
            _this.http.get(_this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
                }
            });
        });
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.blokalanlari = data;
            for (var i = 0; i < _this.formverileri.length; i++) {
                for (var x = 0; x < _this.blokalanlari.length; x++) {
                    if (_this.blokalanlari[x].alanturu == 'Dosya') {
                        _this.formverileri[i][_this.blokalanlari[x].alanadi] = _this.degistir(_this.formverileri[i][_this.blokalanlari[x].alanadi]);
                    }
                }
            }
            for (var i = 0; i < _this.blokalanlari.length; i++) {
                if (_this.blokalanlari[i].verigiristuru == 'Secimli') {
                    var splitted = _this.blokalanlari[i].degerleri.split(";");
                    var splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    var cities_psh = [];
                    for (var k = 0; k < splitted2.length; k++) {
                        cities_psh.push({ id: splitted[k], name: splitted2[k], field: _this.blokalanlari[i].alanadi });
                    }
                    _this.cities[_this.blokalanlari[i].alan_index] = cities_psh;
                    var verisi = _this.formverileri[0][_this.blokalanlari[i].alanadi];
                    if (verisi != '') {
                        var strArr = verisi.toString().split(",");
                        _this.formverileri[0][_this.blokalanlari[i].alanadi] = strArr;
                    }
                }
                if (_this.blokalanlari[i].verigiristuru == 'Radiobutton' || _this.blokalanlari[i].verigiristuru == 'FixList' || _this.blokalanlari[i].verigiristuru == 'Combobox') {
                    var splitted;
                    var splitted2;
                    if (_this.blokalanlari[i].alan_index != '1994' && _this.blokalanlari[i].alan_index != '10009') {
                        splitted = _this.blokalanlari[i].degerleri.split(";");
                        splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    }
                    if (_this.blokalanlari[i].alan_index == '1994' && _this.blokalanlari[i].alan_index != '10009') {
                        splitted = _this.blokalanlari[i].degerleri.split("|");
                        splitted2 = _this.blokalanlari[i].etiketleri.split("|");
                    }
                    if (_this.blokalanlari[i].alan_index == '10009') {
                        splitted = _this.blokalanlari[i].degerleri.split(";");
                        splitted2 = _this.blokalanlari[i].etiketleri.split(";");
                    }
                    if (_this.blokalanlari[i].keyfield == 'index_malzemeler' && _this.blokalanlari[i].alan_index != '10009') {
                        splitted = localStorage.getItem('degerleri').split(";");
                        splitted2 = localStorage.getItem('etiketleri').split(";");
                    }
                    var cities_psh = [];
                    for (var k = 0; k < splitted2.length; k++) {
                        cities_psh.push({ id: splitted[k], name: splitted2[k], field: _this.blokalanlari[i].alanadi });
                    }
                    _this.cities[_this.blokalanlari[i].alan_index] = cities_psh;
                }
            }
            _this.cdr.markForCheck();
        });
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.bloklar = data;
            var songrup;
            var artim = 0;
            _this.grupbasliklari = [];
            var verialanlari;
            for (var i = 0; i < _this.bloklar.length; i++) {
                if (songrup != _this.bloklar[i].grupadi) {
                    if (artim == 0) {
                        _this.activeTab = _this.bloklar[i].grupadi;
                    }
                    _this.grupbasliklari.push({ id: 'blok' + artim, name: _this.bloklar[i].grupadi });
                    songrup = _this.bloklar[i].grupadi;
                    artim++;
                }
                var masterfield = "";
                var detailfield = "";
                var blokindex = "";
                var blogum;
                if (_this.bloklar[i].turu == 'Liste') {
                    _this.tabloyenile(_this.formid, _this.bloklar[i].bokindex);
                }
                //       if (this.bloklar[i].turu=='Liste')
                //       {
                //         blogum=this.bloklar[i];
                //        blokindex=this.bloklar[i].bokindex;
                //         masterfield=blogum.masterfield;
                //         detailfield=blogum.detailfield;
                //         //tablo alanları çekilip diziye aktarılıyor
                //         this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid="+blogum.bagliformindex+"&turu=sorgu";
                //         this.http.get<any>(this.SERVER_URL).subscribe(data2 => {
                // verialanlari=data2;
                //           var cities_psh2:Array<{id: string, name: string}> = []; 
                //           cities_psh2=[];
                //           for(var j=0;j<verialanlari.length;j++)
                //           {
                //             cities_psh2.push({ id: verialanlari[j].Name, name: verialanlari[j].prop });
                //           }
                //         this.sutunlars[blokindex]=cities_psh2;
                //         this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid="+blogum.bagliformindex+"&turu=sorgu";
                //         this.http.get<any>(this.SERVER_URL).subscribe(data => {
                //           this.formbilgileri=data;
                //           if (this.formbilgileri.length>0)
                //           {
                //             for(var t=0;t<this.formbilgileri.length;t++)
                //             {
                //               this.sutunlar=this.formbilgileri[t].sutunlar;
                //       //formdatası alınıyor
                //     var mastervalue="";
                //     var deger:any;
                //       for (var r=0;r<this.formverileri.length;r++)
                //       {
                //         deger=this.formverileri[0];
                //         mastervalue=deger[masterfield];
                //         this.formid_alt=blogum.bagliformindex;
                // this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+blogum.bagliformindex+"&sutunlar="+this.formbilgileri[t].sutunlar+"&blokindex="+blogum.bokindex+"&recordid="+this.recordid+"&kayitformid="+this.formid;
                //   this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {
                //     this.satirlar[blogum.bokindex]=data2;
                //   });
                //   this.cdr.markForCheck();
                //         //tablo verileri çekilip diziye aktarılıyor
                //       }
                //     }
                //   }
                //     });
                //   });
                //       }
            }
        });
        var durum = this;
        //  eğer bunu kapatırsan edit record dediğinde alt tablo olanların verileri ve liste alanları gelmiyor.
        setTimeout(function () {
            for (var i = 0; i < durum.bloklar.length; i++) {
                //  durum.tabloyenile(this.formid,durum.bloklar[i].bokindex);
            }
        }, 1000);
    };
    ChatComponent.prototype.tabloyenile = function (formids, blokid) {
        var _this = this;
        var verialanlari;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.bloklar_y = data;
            for (var i = 0; i < _this.bloklar_y.length; i++) {
                if (_this.bloklar_y[i].bokindex == blokid || blokid == '') {
                    var masterfield = "";
                    var detailfield = "";
                    var blokindex = "";
                    var blogum;
                    if (_this.bloklar_y[i].turu == 'Liste') {
                        blogum = _this.bloklar_y[i];
                        blokindex = _this.bloklar_y[i].bokindex;
                        masterfield = blogum[masterfield];
                        detailfield = blogum[detailfield];
                        //tablo alanları çekilip diziye aktarılıyor
                        _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + blogum.bagliformindex + "&turu=sorgu";
                        _this.http.get(_this.SERVER_URL).subscribe(function (data2) {
                            verialanlari = data2;
                            var cities_psh2 = [];
                            cities_psh2 = [];
                            for (var j = 0; j < verialanlari.length; j++) {
                                cities_psh2.push({ id: verialanlari[j].Name, name: verialanlari[j].prop });
                            }
                            _this.sutunlars[blogum.bokindex] = cities_psh2;
                            _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + blogum.bagliformindex + "&turu=sorgu";
                            _this.http.get(_this.SERVER_URL).subscribe(function (data) {
                                _this.formbilgileri = data;
                                if (_this.formbilgileri.length > 0) {
                                    for (var t = 0; t < _this.formbilgileri.length; t++) {
                                        _this.sutunlar = _this.formbilgileri[t].sutunlar;
                                        //formdatası alınıyor
                                        var mastervalue = "";
                                        var deger;
                                        for (var r = 0; r < _this.formverileri.length; r++) {
                                            deger = _this.formverileri[0];
                                            mastervalue = deger[masterfield];
                                            _this.formid_alt = blogum.bagliformindex;
                                            _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + blogum.bagliformindex + "&sutunlar=" + _this.formbilgileri[t].sutunlar + "&blokindex=" + blogum.bokindex + "&recordid=" + _this.recordid + "&kayitformid=" + _this.formid;
                                            _this.http2.get(_this.SERVER_URL).subscribe(function (data2) {
                                                _this.satirlar[blogum.bokindex] = data2;
                                                _this.cdr.markForCheck();
                                            });
                                            //tablo verileri çekilip diziye aktarılıyor
                                        }
                                    }
                                }
                            });
                        });
                    }
                }
            }
        });
        if (blokid == '1213') {
            this.tabloyenile(formids, '1214');
        }
        this.cdr.markForCheck();
    };
    ChatComponent.prototype.degistir = function (filename) {
        if (filename != '') {
            return localStorage.getItem('url') + filename;
        }
        else {
            return localStorage.getItem('url') + 'no-photo-available.png';
        }
    };
    ChatComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
        this.cdr.markForCheck();
    };
    ChatComponent.prototype.hastakarti = function () {
        localStorage.setItem('secilenform', 'musteri-kayitlari');
        this.router.navigate(['/editrecordform/' + this.recordid + '/714/Müşteri Kayıtları/']);
    };
    ChatComponent.prototype.randevuver = function () {
        localStorage.setItem('secilenrandevuhastasi', this.recordid);
        this.router.navigate(['/dashboard/dashboard2']);
    };
    ChatComponent.prototype.yenihasta = function () {
        localStorage.setItem('secilenform', 'hasta-kayitlari');
        this.router.navigate(['/newrecordform/714/Müşteri Kayıtları/']);
    };
    ChatComponent.prototype.listeyedon = function () {
        this.recordid = null;
        this.secilengrup = null;
        this.musteripaketleri = null;
    };
    ChatComponent.prototype.doktorsec = function (id) {
        var secilidisler = '';
        var dissayisi = 0;
        if (this.secilentedavi == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                icon: "error",
                title: 'İşlem seçimi yapılmadı',
                text: 'İşlem atayabilmek için sol menüden yapılacak işlemin seçilmiş olması gereklidir',
                customClass: {
                    confirmButton: 'btn btn-danger'
                },
            });
            setTimeout(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().close();
            }, 2000);
        }
        else {
            var islemtanimi = this.secilentedavi;
            var tutar = 0;
            localStorage.setItem('secilentedavi', this.secilentedavi);
            localStorage.setItem('islemiyapan', id);
            var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=doktorsec&userid=" + localStorage.getItem('userid') + "&doktor=" + id;
            this.http.get(periocek).subscribe(function (data) {
            });
            this.satirekle('723', 'cariindex', '1668');
        }
    };
    ChatComponent.prototype.onecikar_gerial = function (id) {
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Öne Çıkar Geri Al',
            text: "Tedavi normal sırasına konulsun mu?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2F8BE6',
            cancelButtonColor: '#F55252',
            confirmButtonText: 'Evet Öne Çıkarma',
            cancelButtonText: 'Vazgeç',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            },
            buttonsStyling: false,
        }).then(function (result) {
            if (result.value) {
                durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=onecikar_gerial&id=" + id;
                durum.http.get(durum.SERVER_URL).subscribe(function (data) {
                    durum.tedavilerigetir(durum.secilengrup);
                });
            }
        });
    };
    ChatComponent.prototype.onecikar = function (id) {
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            title: 'Öne Çıkarma',
            text: "Tedavi öne çıkarılsın mı?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2F8BE6',
            cancelButtonColor: '#F55252',
            confirmButtonText: 'Evet Öne Çıkar',
            cancelButtonText: 'Vazgeç',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            },
            buttonsStyling: false,
        }).then(function (result) {
            if (result.value) {
                durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=onecikar&id=" + id;
                durum.http.get(durum.SERVER_URL).subscribe(function (data) {
                    durum.tedavilerigetir(durum.secilengrup);
                });
            }
        });
    };
    ChatComponent.prototype.secimitemizle = function () {
        for (var i = 0; i < this.disler.length; i++) {
            this.disler[i].isActiveChat = false;
        }
        for (var i = 0; i < this.disler2.length; i++) {
            this.disler2[i].isActiveChat = false;
        }
    };
    ChatComponent.prototype.dissec = function (chats, disno) {
        if (this.coklusecim != true) {
            for (var i = 0; i < this.disler.length; i++) {
                this.disler[i].isActiveChat = false;
            }
            for (var i = 0; i < this.disler2.length; i++) {
                this.disler2[i].isActiveChat = false;
            }
        }
        if (chats.isActiveChat == true) {
            chats.isActiveChat = false;
        }
        else {
            chats.isActiveChat = true;
        }
    };
    ChatComponent.prototype.editrecord = function (id, formids, blokid) {
        // localStorage.setItem('rowformid',formids);
        // localStorage.setItem('rowrecordid', id);
        var _this = this;
        var modalSat = this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_3__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
        modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formids, rowrecordid: id, formtanimi: '', subformid: '' };
        modalSat.result.then(function (result) {
            if (result == 'Yenile') {
                _this.tabloyenile(formids, blokid);
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ChatComponent.prototype.satirekle = function (formids, masterfield, blokid) {
        var _this = this;
        this.tabloyenile(this.formid, blokid);
        // localStorage.setItem('rowformid', formids);
        // localStorage.setItem('rowrecordid', "");
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.donenveri = data;
            for (var i = 0; i < _this.donenveri.length; i++) {
                // localStorage.setItem('mastervalue', this.donenveri[i].mastervalue);
                var msv = _this.donenveri[i].mastervalue;
            }
            var modalSat = _this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_3__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
            modalSat.componentInstance.Modaldata = { mastervalue: msv, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };
            modalSat.result.then(function (result) {
                if (result == 'Yenile') {
                    _this.tabloyenile(formids, blokid);
                    var paketgetir = localStorage.getItem('url') + "angular/dataservis.php?page_id=musteripaketgetir&musteriid=" + _this.hastasecildi;
                    _this.http.get(paketgetir).subscribe(function (data) {
                        _this.musteripaketleri = data;
                    });
                    var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=bakiyecek&hastaid=" + _this.hastasecildi + "&type=Alt";
                    _this.http.get(periocek).subscribe(function (data) {
                        _this.bakiyeler = data;
                        for (var i = 0; i < _this.bakiyeler.length; i++) {
                            _this.bakiyeler[i].bakiyesi = _this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1;
                            if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 < 0) {
                                _this.bakiyeler[i].durumum = 'Borçlu';
                            }
                            if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 > 0) {
                                _this.bakiyeler[i].durumum = 'Alacaklı';
                            }
                            if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 === 0) {
                                _this.bakiyeler[i].durumum = 'Temiz';
                            }
                        }
                    });
                }
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        });
    };
    ChatComponent.prototype.evetsil = function (id, d) {
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + d + "&recordid=" + id + "&userid=" + localStorage.getItem('userid');
        console.log(this.SERVER_URL);
        this.http.get(this.SERVER_URL).subscribe(function (data) {
        });
    };
    ChatComponent.prototype.deleterecord = function (id, formids, blokid) {
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
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
                durum.evetsil(id, formids);
                durum.tabloyenile(formids, blokid);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    icon: "success",
                    title: 'Silme işlemi başarılı!',
                    text: 'Seçilen kayıt silindi',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                });
                setTimeout(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().close();
                }, 1000);
            }
        });
    };
    ChatComponent.prototype.tedavisec = function (chats, id) {
        for (var i = 0; i < this.tedaviler.length; i++) {
            this.tedaviler[i].isActiveChat = false;
        }
        this.secilentedavi = chats.hizmettanimi;
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=tedavisec&userid=" + localStorage.getItem('userid') + "&tedavi=" + this.secilentedavi;
        this.http.get(periocek).subscribe(function (data) {
        });
        chats.isActiveChat = true;
        this.secilentutar = chats.fiyat;
        this.secilenbirim = chats.fiyatbirimi;
    };
    ChatComponent.prototype.paketdus = function (paketdet) {
        var durum = this;
        var datahek = "";
        for (var i = 0; i < this.dishekimleri.length; i++) {
            datahek = datahek + '<option value="' + this.dishekimleri[i].plasiyeradi + '">' + this.dishekimleri[i].plasiyeradi + '</option> ';
            if (this.dishekimleri.length == i + 1) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    title: 'İşlemi Yapan Seçiniz ?',
                    icon: 'question',
                    html: "<select type=\"text\" id=\"proses\" class=\"swal2-input\" placeholder=\"proses se\u00E7iniz\">\n          <option value=\"\">Doktor Se\u00E7iniz</option>\n          " + datahek + "\n        </select> ",
                    showCancelButton: true,
                    confirmButtonColor: '#2F8BE6',
                    cancelButtonColor: '#F55252',
                    confirmButtonText: 'Seç',
                    cancelButtonText: 'Vazgeç',
                    customClass: {
                        confirmButton: 'btn btn-primary',
                        cancelButton: 'btn btn-danger ml-1',
                        validationMessage: 'my-validation-message'
                    },
                    buttonsStyling: false,
                    preConfirm: function () {
                        var proses = document.getElementById('proses').value;
                        if (!proses) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().showValidationMessage("Doktor Se\u00E7iniz!!!");
                        }
                        return { proses: proses };
                    },
                }).then(function (result) {
                    if (result.isConfirmed == true) {
                        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=paketdusurt&islem_index=" + paketdet.islem_index + "&plasiyer=" + result.value.proses;
                        durum.http.get(periocek).subscribe(function (data) {
                            if (data[0].status == "success") {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                    icon: "success",
                                    title: 'Paket Seans',
                                    text: 'Tekli paket uygulaması seans girişi yapıldı.',
                                    customClass: {
                                        confirmButton: 'btn btn-danger'
                                    },
                                });
                                var paketgetir = localStorage.getItem('url') + "angular/dataservis.php?page_id=musteripaketgetir&musteriid=" + durum.hastasecildi;
                                durum.http.get(paketgetir).subscribe(function (data) {
                                    durum.musteripaketleri = data;
                                });
                            }
                            durum.hesapkarti(durum.hastasecildi);
                            durum.cdr.markForCheck();
                        });
                        setTimeout(function () {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().close();
                        }, 2000);
                    }
                });
            }
        }
    };
    ChatComponent.prototype.viewChat = function (chats, id) {
        var _this = this;
        this.hastasecildi = id;
        this.secilenhasta = chats.caritanimi;
        this.fiyatgrubu = chats.fiyatgrubu;
        var periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Üst";
        this.http.get(periocek).subscribe(function (data) {
            _this.disler = data;
        });
        periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=perio&hastaid=" + id + "&type=Alt";
        this.http.get(periocek).subscribe(function (data) {
            _this.disler2 = data;
        });
        var paketgetir = localStorage.getItem('url') + "angular/dataservis.php?page_id=musteripaketgetir&musteriid=" + id;
        this.http.get(paketgetir).subscribe(function (data) {
            _this.musteripaketleri = data;
        });
        periocek = localStorage.getItem('url') + "angular/dataservis.php?page_id=bakiyecek&hastaid=" + id + "&type=Alt";
        this.http.get(periocek).subscribe(function (data) {
            _this.bakiyeler = data;
            for (var i = 0; i < _this.bakiyeler.length; i++) {
                _this.bakiyeler[i].bakiyesi = _this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1;
                if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 < 0) {
                    _this.bakiyeler[i].durumum = 'Borçlu';
                }
                if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 > 0) {
                    _this.bakiyeler[i].durumum = 'Alacaklı';
                }
                if (_this.bakiyeler[i].odemetoplami * 1 - _this.bakiyeler[i].islemtoplami * 1 === 0) {
                    _this.bakiyeler[i].durumum = 'Temiz';
                }
            }
        });
        localStorage.setItem('secilenform', 'hasta-hesap-karti');
        this.searchQuery = '';
        this.hesapkarti(id);
        this.secilenform = localStorage.getItem('secilenform');
        this.usersChat.forEach(function (chat) {
            if (chats.user_indeks == chats.cariindex) {
                if (id == "") {
                    _this.aliciid = chats.cariindex;
                }
                else {
                    _this.aliciid = id;
                }
                chat.isActiveChat = false;
            }
        });
        for (var i = 0; i < this.usersChat.length; i++) {
            this.usersChat[i].isActiveChat = false;
        }
        chats.isActiveChat = true;
        this.viewInterval = setInterval(function () {
            _this.mesajcek = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + _this.aliciid + "&userid=" + localStorage.getItem('userid');
            _this.http.get(_this.mesajcek).subscribe(function (data) {
                _this.chats = data;
                _this.cdr.markForCheck();
                _this.urlid = null;
            });
        }, 2000);
        this.activeChat = chats;
        this.activeChat.isActiveChat = true;
        this.activeChatUser = chats.caritanimi;
        this.activeChatUserImg = chats.profilresim;
        this.activeChatSenderUserImg = localStorage.getItem('profilresim');
        this.isContentOverlay = false;
    };
    ChatComponent.prototype.onSidebarToggle = function () {
        this.isContentOverlay = true;
    };
    ChatComponent.prototype.onContentOverlay = function () {
        this.isContentOverlay = false;
    };
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_tedaviplanlama_service__WEBPACK_IMPORTED_MODULE_0__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute)); };
    ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_14__.SwiperDirective, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.tableResponsive = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_tedaviplanlama_service__WEBPACK_IMPORTED_MODULE_0__.ChatService])], decls: 20, vars: 16, consts: [[1, "chat-application"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [3, "perfectScrollbar"], ["chatSidebar", ""], [1, "chat-sidebar-content"], [1, "chat-fixed-search", "py-2", "px-3", "my-1"], ["class", "d-flex justify-content-between mb-2", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["action", "javascript:;", 4, "ngIf"], [1, "m-0"], ["id", "users-list", 1, "list-group"], [1, "users-list-padding", "position-relative"], [4, "ngIf"], ["class", "list-group-item bg-success", 3, "click", 4, "ngFor", "ngForOf"], ["class", "chat-name p-2", 4, "ngIf"], ["class", "chat-app-window position-relative", "style", "background-color: white;height:fit-content !important", 3, "perfectScrollbar", 4, "ngIf"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "badge", "bg-light-primary"], [1, "ft-info", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "ft-menu", "danger", "cursor-pointer", 3, "click"], [1, "row"], [2, "width", "48%", "margin-right", "5px"], ["type", "button", 1, "btn", "btn-xs", "btn-warning", "btn-block", "mr-2", "mb-1", 2, "font-size", "10px", 3, "click"], ["style", "width:48%;margin-right: 5px;", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-xs", "btn-outline-info", "btn-block", "mr-2", "mb-1", 2, "font-size", "10px", 3, "click"], ["action", "javascript:;"], [1, "position-relative", "has-icon-left"], ["placeholder", "Tedavi i\u00E7in Hasta aray\u0131n", "id", "timesheetinput1", "name", "employeename", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "form-control-position"], [1, "ft-user"], ["placeholder", "\u0130\u015Flem aray\u0131n...", "id", "timesheetinput1", "name", "employeename", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "list-group-item ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "ngClass", "click"], [1, "media", "chat-list-text", "py-1", 3, "ngClass"], [1, "avatar", "avatar-md", "mr-2"], ["alt", "Avatar", 3, "src"], [1, "media-body"], [1, "list-group-item-heading", "mb-1"], [1, "list-group-item-text", "chat-user-list-text", "m-0"], [1, "float-right", "primary"], ["class", "font-medium-1 icon-pin", 4, "ngIf"], ["class", "font-medium-1 icon-volume-off mr-1", 4, "ngIf"], [3, "href"], [1, "chat-list-text", "font-small-2", "float-right", "chat-time"], [1, "chat-list-text", "font-small-2", "float-left", "chat-time"], [1, "font-medium-1", "icon-pin"], [1, "font-medium-1", "icon-volume-off", "mr-1"], [1, "list-group-item", "bg-success", 3, "click"], [1, "media", "chat-list-text", "py-1", 2, "border", "1px"], [1, "badge", "bg-light-primary", 2, "font-size", "16px"], [1, "ft-star", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "ft-star-on", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "col-xl-3", "col-lg-6", "col-6"], [1, "card", "card-inverse", "bg-warning"], [1, "card-content"], [1, "card-body"], [1, "media"], [1, "media-body", "text-left"], [1, "card-text"], [1, "media-right", "align-self-center"], [1, "ft-briefcase", "font-large-1", "float-right"], [1, "card", "card-inverse", "bg-success"], [1, "ft-user", "font-large-1", "float-right"], [1, "card", "card-inverse", "bg-danger"], [1, "ft-pie-chart", "font-large-1", "float-right"], [1, "card", "card-inverse", "bg-primary"], [1, "ft-life-buoy", "font-large-1", "float-right"], [1, "chat-name", "p-2"], ["class", "media p-1", 4, "ngIf"], [1, "ft-briefcase", "font-large-2", "float-right"], [1, "ft-user", "font-large-2", "float-right"], [1, "ft-pie-chart", "font-large-2", "float-right"], [1, "ft-life-buoy", "font-large-2", "float-right"], [1, "media", "p-1"], [1, "chat-app-sidebar-toggle", "ft-menu", "font-medium-4", "mr-3", "d-block", "d-md-none", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-danger", "mr-1", "mb-1", 2, "font-size", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-success", "mr-1", "mb-1", 2, "font-size", "10px", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-warning", "mr-1", "mb-1", 2, "font-size", "10px", 3, "click"], [1, "position-relative", "float-right"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block", 3, "placement"], ["id", "chatOptions", "ngbDropdownToggle", "", 1, "ft-more-vertical-", "mt-1", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "chatOptions"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], ["type", "button", "class", "btn btn-xs btn-outline-info mr-2 mb-1", "style", "font-size: 10px;", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-xs", "btn-outline-info", "mr-2", "mb-1", 2, "font-size", "10px", 3, "click"], [1, "chat-app-window", "position-relative", 2, "background-color", "white", "height", "fit-content !important", 3, "perfectScrollbar"], ["id", "basic-hidden-label-form-layouts", "style", "margin-top:10px;margin-left: 13px;", 4, "ngIf"], ["id", "basic-hidden-label-form-layouts", 2, "margin-top", "10px", "margin-left", "13px"], [1, "row", "match-height"], ["id", "myTab", "role", "tablist", 1, "justify-content-start", "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-12", 2, "margin-top", "-5px", "text-align", "left"], [1, "card"], [4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "flex-sm-row", "flex-column", "justify-content-end"], ["type", "button", "class", "btn btn-info mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning btn-sm mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-2", 3, "click", 4, "ngIf"], [1, "nav-item"], ["href", "javascript:;", "data-toggle", "tab", "role", "tab", "aria-controls", "general", "aria-selected", "true", 1, "nav-link", 3, "ngClass", "id", "click"], [1, "ft-settings", "align-middle"], [1, "align-middle"], [3, "class", "id", "display", 4, "ngIf"], [3, "id"], ["id", "swiper-coverflow", 4, "ngIf"], ["class", "row match-height", 4, "ngIf"], ["id", "ngx-datatable-filter", 4, "ngIf"], ["id", "swiper-coverflow"], [1, "col-12"], ["type", "button", 1, "btn", "btn-outline-info", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-plus", "mr-1"], [1, "swiper-coverflow", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-slide"], ["alt", "Resim", 1, "img-fluid", 3, "src"], [1, "float-right", 2, "position", "absolute", "top", "5px", "right", "10px"], ["type", "button", 1, "btn", "btn-danger", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-trash-o"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "card-header"], [1, "card-title"], [1, ""], [1, "form-group", "form-inline"], ["type", "text", "name", "termB", "placeholder", "arama", 1, "form-control", "ml-2", "mt-2", 3, "ngModel", "ngModelChange"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-outline-success mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-warning mr-2 mb-1", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-dark mr-2 mb-1", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-info mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-cog"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-list-alt"], ["type", "button", 1, "btn", "btn-outline-warning", "mr-2", "mb-1", 3, "click"], [1, "btn", "btn-outline-dark", "mr-2", "mb-1", 3, "click"], [1, "btn", "btn-outline-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-barcode"], ["type", "button", "placement", "top", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "ft-file"], [1, "list-group-item"], [1, "float-right"], ["type", "button", "class", "btn btn-danger mr-1 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-info mr-1 mb-1", 3, "click", 4, "ngIf"], [2, "font-size", "10px", "font-style", "italic"], ["type", "button", 1, "btn", "btn-outline-info", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-edit"], ["id", "ngx-datatable-filter"], ["mymodal", ""], [1, "form-group"], ["for", "ngx-filter-ref"], ["type", "text", "placeholder", "Aranacak Kelime", 1, "form-control", "ml-2", "mt-2", 3, "name", "id", "ngModel", "ngModelChange"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows", "scrollbarH"], [3, "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Eylemler", 3, "width", 4, "ngIf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", "", "method", "post", "name", "frmExcelImport_genel", "id", "frmExcelImport_genel", "enctype", "multipart/form-data", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["action", "", "method", "post", "name", "frmExcelImport_genel", "id", "frmExcelImport_genel", "enctype", "multipart/form-data"], [1, "col-md-8"], ["type", "file", "name", "file", "id", "file", "accept", ".xls,.xlsx"], ["type", "hidden", "name", "menu_id", "id", "menu_id", 3, "value"], ["type", "hidden", "name", "recordid", "id", "recordid", 3, "value"], ["type", "hidden", "name", "detailfield", "id", "detailfield", 3, "value"], [1, "col-md-4", "text-center"], ["type", "submit", "id", "submit", "name", "import", 1, "btn", "btn-outline-secondary"], [3, "name", "prop"], ["ngx-datatable-cell-template", ""], ["buttonsTemplate", ""], ["style", "text-align: center;", 4, "ngIf"], [2, "text-align", "center"], ["type", "checkbox", "checked", "", 1, ""], ["type", "checkbox", 1, ""], ["name", "Eylemler", 3, "width"], [1, "col-12", 2, "width", "240px"], ["type", "button", "placement", "top", "title", "Y\u00FCzde Gir", "class", "btn btn-primary  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-1 mb-1", "title", "", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-1 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-warning mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "ngbTooltip", "\u00DCretim Y\u00F6ntemleri Git", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "VDF Formuna Git", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Maliyet Analizi Git", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Kart\u0131na Git", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Y\u00FCzde Gir", 1, "btn", "btn-primary", "mr-1", "mb-1", 3, "click"], [1, "ft-percent"], ["type", "button", "title", "", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "icon-share-alt"], ["type", "button", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-check"], ["type", "button", "placement", "top", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], ["type", "button", "placement", "top", "ngbTooltip", "\u00DCretim Y\u00F6ntemleri Git", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "ft-box"], [1, "ft-book"], ["type", "button", "placement", "top", "title", "VDF Formuna Git", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], ["type", "button", "placement", "top", "title", "Maliyet Analizi Git", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], [1, "ft-disc"], ["type", "button", "placement", "top", "title", "Kart\u0131na Git", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], ["ngx-datatable-footer-template", ""], [1, "form-row", "col-12"], [1, "col-md-3"], [1, "form-group", "mb-2"], ["for", "basic-form-1"], ["type", "text", "readonly", "", "id", "basic-form-1", 1, "form-control", 3, "name", "value"], [3, "class", 4, "ngIf"], ["class", "form-group mb-2 ", 4, "ngIf"], ["class", "form-group mb-2", 4, "ngIf"], ["class", "input-group mb-2 custom-control custom-radio", 4, "ngIf"], ["class", "form-group mb-2", "style", "display: none;", 4, "ngIf"], [1, "ft-edit-2", 2, "font-size", "15px", 3, "hidden", "click"], ["type", "text", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["required", "ngModel"], ["class", "form-text text-muted danger", 4, "ngIf"], [1, "form-text", "text-muted", "danger"], ["required", "", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "id", "ngClass", "items", "closeOnSelect", "ngModel", "name", "change", "ngModelChange"], ["type", "color", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], [1, "input-group", "mb-2", "custom-control", "custom-radio"], [1, "col-md-12", 2, "white-space", "nowrap"], ["class", "radio radio-primary radio-sm d-inline-block mr-2 mb-1", 4, "ngFor", "ngForOf"], [1, "radio", "radio-primary", "radio-sm", "d-inline-block", "mr-2", "mb-1"], ["type", "radio", "ngModel", "", 1, "", 3, "value", "ngModel", "id", "name", "ngModelChange"], [1, "", 3, "for"], ["type", "checkbox", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "time", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "text", "readonly", "", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], [1, "form-group", "mb-2", 2, "display", "none"], ["type", "hidden", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "password", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], [1, "form-control", 3, "id", "ngModel", "name", "ngModelChange"], ["type", "date", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "datetime-local", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["alt", "", "height", "auto", "width", "100%", 1, "rounded", "mr-3", 3, "src"], ["type", "file", 1, "file-upload", 3, "id", "ngModel", "name", "ngModelChange", "change"], ["src", "../../assets/img/pdf-photo.png", "alt", "", "height", "auto", "width", "50%", 1, "rounded", "mr-3", 3, "click"], ["type", "file", 1, "file-upload", 3, "id", "name", "change"], ["type", "file", "id", "select-files", "hidden", "", 3, "ngModel", "name", "ngModelChange"], ["required", "", "multiple", "true", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "ngClass", "items", "id", "closeOnSelect", "name", "ngModel", "ngModelChange"], ["required", "", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "id", "ngClass", "items", "closeOnSelect", "name", "ngModel", "change", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", "mr-2", 3, "click"], [1, "ft-check-square", "mr-1"], ["type", "button", 1, "btn", "btn-warning", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "mr-2", 3, "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_1_listener() { return ctx.onContentOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ChatComponent_div_7_Template, 6, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ChatComponent_div_8_Template, 5, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ChatComponent_form_9_Template, 5, 1, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ChatComponent_form_10_Template, 5, 1, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "hr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ChatComponent_div_14_Template, 3, 5, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ChatComponent_a_15_Template, 6, 2, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ChatComponent_div_16_Template, 3, 5, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ChatComponent_div_17_Template, 56, 7, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ChatComponent_div_18_Template, 3, 2, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ChatComponent_section_19_Template, 2, 1, "section", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c7, ctx.isContentOverlay));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("", ctx.clasim, " d-md-block");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null && ctx.cihazmobilmi == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid == null);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null && ctx.cihazmobilmi == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid == null);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.musteripaketleri);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.secilengrup != null && ctx.recordid != null && ctx.cihazmobilmi == false);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null && ctx.cihazmobilmi == true);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.recordid != null);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_14__.SwiperDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableColumnCellDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableFooterDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DataTableFooterTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_6__.SearchPipe], styles: [".selecteddis {\n  border: 1px;\n  border-style: solid;\n}\n\n.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0 !important;\n}\n\n.datatable-row-wrapper:nth-child(2n) {\n  background-color: #78d1ef !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlZGF2aXBsYW5sYW1hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFFSSxxQkFBQTtBQURKOztBQUdFO0VBQ0Usb0NBQUE7QUFBSiIsImZpbGUiOiJ0ZWRhdmlwbGFubGFtYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZGRpc1xue1xuICAgIGJvcmRlcjoxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICBcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRhdGF0YWJsZS1yb3ctd3JhcHBlcjpudGgtY2hpbGQoMm4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDIwOSwgMjM5KSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */", "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #F7F7F8;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: transparent;\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #975AFF;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active i {\n  color: #fff !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: transparent;\n  color: #342E49;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a {\n  padding: 1.1rem 1.035rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a i {\n  position: absolute;\n  top: 0.55rem;\n  left: 0.4rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li.disabled a {\n  color: #757575;\n  background-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a {\n  color: #975AFF;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a:hover {\n  background-color: #EEEEEE !important;\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled).active a {\n  z-index: 3;\n  color: #fff;\n  background-color: #975AFF !important;\n  border-color: #975AFF;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled):hover a {\n  background-color: #F5F5F5;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a {\n  position: relative;\n  display: block;\n  padding: 1.1rem 0.75rem;\n  margin: 0 0 0 5px;\n  line-height: 0.1;\n  background-color: #F5F5F5;\n  border: 1px solid #E0E0E0;\n  border-radius: 0.35rem;\n  font-size: 15px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a i {\n  padding: 0;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  line-height: 24px;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: inline;\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: inline;\n    display: initial;\n  }\n}html body.layout-dark .datatable-footer .pager li.disabled a {\n  color: #626164;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-header {\n  background-color: #101010;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer {\n  color: #B2B1B5;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: #1E1E1E;\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: #1E1E1E;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: #1E1E1E !important;\n  border-color: #474748 !important;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-header {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: rgba(238, 238, 238, 0.2);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled) a {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvYm9vdHN0cmFwLnNjc3MiLCJkYXRhdGFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNoQztNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBRSxDQUN2QjtRQUNFLGVBQWUsRUFBRSxDQUNuQjtRQUNFLFlBQVksRUFBRSxDQUNoQjtRQUNFLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRSxDQUNuQjs7UUFFRSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxpQkFBaUIsRUFBRSxDQUNyQjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUUsQ0FDdkI7UUFDRSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVMsRUFBRSxDQUNYO1VBQ0UsUUFBUSxFQUFFLENBQ1o7VUFDRSxPQUFPLEVBQUUsQ0FDYjtRQUNFLGVBQWUsRUFBRSxDQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UscUJBQXFCLEVBQUUsQ0FDekI7TUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtNQUtFLGFBQWE7TUFPYixzQkFBc0IsRUFBRSxDQUMxQjtNQUNFLGFBQWEsRUFBRSxDQUNmO1FBS0UsYUFBYSxFQUFFLENBQ3JCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUUsQ0FDaEI7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxDQUNmO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYTtNQUNiLGlCQUFpQixFQUFFLENBQ25COztRQUVFLFVBQVU7UUFDVixTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFLENBQ3BCOztRQUVFLGFBQWEsRUFBRSxDQUNqQjtRQUNFLGVBQWU7UUFDZixxQkFBcUIsRUFBRSxDQUN6QjtRQUNFLG1CQUFtQixFQUFFLENDck03Qjs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBOztFQUVFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDRXBHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGLENEREU7RUFDRSx3QkFBQTtBQ0dKLENERkk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNJTixDREhNO0VBQ0UsaUJBQUE7QUNLUixDREFJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0VOLENERE07RUFDRSxxQ0FBQTtBQ0dSLENERE07RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNHUixDRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1IsQ0RBSTtFQUdFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FOLENER0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKLENERUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FOLENERUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNBTixDREVRO0VBQ0UsZ0JBQUE7QUNBVixDREljO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0ZoQixDRFFNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNOUixDRFFNOzs7O0VBSUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05SLENEYU07RUFDRSxpQkFBQTtBQ1hSLENBM0VNO0VBQ0UsdUJBQUE7QUE4RVIsQ0EzRU07RUFDRSx5QkM4REU7QURlVixDQTNFUTtFQUNFLGdCQUFBO0FBNkVWLENBekVNO0VBQ0UscUJDc0VPO0FES2YsQ0F6RVE7RUFDRSw2QkFBQTtFQUFBLHlCQUFBO0FBMkVWLENBeEVRO0VBQ0UseUJDREE7QUQyRVYsQ0F4RVU7RUFDRSxzQkFBQTtBQTBFWixDQXJFVTtFQUNFLGlCQUFBO0FBdUVaLENBbkVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBcUVWLENBaEVNO0VBQ0UsNkJBQUE7RUFDQSxjQzBCSztBRHdDYixDQS9EVTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBaUVaLENBL0RZO0VBQ0UsU0FBQTtBQWlFZCxDQS9EYztFQUNFLFNBQUE7QUFpRWhCLENBMURnQjtFQUNFLHdCQUFBO0FBNERsQixDQTFEa0I7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBNERwQixDQXREZ0I7RUFDRSxjQUFBO0VBQ0EseUJDc0hPO0FEOUR6QixDQW5EZ0I7RUFDRSxjQzlEUjtBRG1IVixDQW5Ea0I7RUFDRSxvQ0FBQTtFQUNBLHFCQ0ZMO0FEdURmLENBaERrQjtFQUNFLFVBQUE7RUFDQSxXQ3RHWjtFRHVHWSxvQ0FBQTtFQUNBLHFCQzNFVjtFRDRFVSxvQkFBQTtBQWtEcEIsQ0E5Q2dCO0VBQ0UseUJDc0ZGO0VEckZFLG9CQUFBO0FBZ0RsQixDQTVDYztFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQzJFQTtFRDFFQSx5QkFBQTtFQUNBLHNCQzVCQTtFRDZCQSxlRTdHQztBRjJKakIsQ0E1Q2dCO0VBQ0UsVUFBQTtBQThDbEIsQ0FyQ1E7RUFDRSx1QkFBQTtBQXVDVixDQWhDTTs7OztFQUlFLGlCQUFBO0FBa0NSLENBM0JBO0VBQ0U7SUFDRSxhQUFBO0VBOEJGOztFQTNCQTtJQUNFLDZCQUFBO0lBQ0Esb0JBQUE7RUE4QkY7QUFDRixDQTNCQTtFQUNFO0lBQ0UsZUFBQTtJQUFBLGdCQUFBO0VBNkJGOztFQTFCQTtJQUNFLGFBQUE7RUE2QkY7QUFDRixDQTFCQTtFQUNFO0lBQ0UsYUFBQTtFQTRCRjs7RUF6QkE7SUFDRSxlQUFBO0lBQUEsZ0JBQUE7RUE0QkY7QUFDRixDQXRCRTtFQUNFLGNFdElnQjtBRjhKcEIsQ0FsQk07RUFDRSx5QkVsSlE7QUZzS2hCLENBakJNO0VBQ0UscUJFaEpVO0FGbUtsQixDQWhCTTtFQUNFLGNFekpRO0FGMktoQixDQWRVOztFQUVFLHlCRTlKRTtFRitKRixxQkUzSk07QUYyS2xCLENBWlk7RUFDRSx5QkVwS0E7QUZrTGQsQ0FYWTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7QUFhZCxDQUZNO0VBQ0UscUNFcEtXO0FGd0tuQixDQURNO0VBQ0Usc0NFektVO0FGNEtsQixDQUFNO0VBQ0UsY0VsTFE7QUZvTGhCLENBRVU7O0VBRUUscUNFbExPO0VGbUxQLGlDRW5MTztBRm1MbkIsQ0FJWTtFQUNFLGNFOUxFO0FGNExoQixDQUtZO0VBQ0UscUNFNUxLO0FGeUxuQixDQU1ZO0VBQ0UsZ0RBQUE7RUFDQSw0Q0FBQTtBQUpkIiwiZmlsZSI6ImRhdGF0YWJsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuYm9vdHN0cmFwIHRhYmxlIHRoZW1lXG4qL1xuXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4M2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVtcHR5LXJvdyB7XG4gICAgICAkYWxlcnQtcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nLXkgJGFsZXJ0LXBhZGRpbmcteDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xyXG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xyXG5AaW1wb3J0IFwiLi4vY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi9jb3JlL2NvbG9ycy9wYWxldHRlLXZhcmlhYmxlc1wiO1xyXG5cclxuLm5neC1kYXRhdGFibGUge1xyXG4gICYuYm9vdHN0cmFwIHtcclxuICAgICYuY29yZS1ib290c3RyYXAge1xyXG4gICAgICAmLmhlaWdodC03MC12aCB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuXHJcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG5cclxuICAgICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsIHtcclxuICAgICAgICAgIC5jZWxsLWxpbmUtaGVpZ2h0IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuICAgICAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgICAgICAgIC5wYWdlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIGEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcclxuICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQsXHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtIDEuMDM1cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMC41NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRncmV5LWNvbG9yLCBkYXJrZW4tMSk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWJnO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gJHBhZ2luYXRpb24tcGFkZGluZy14O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC4xO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICRwYWdpbmF0aW9uLWJvcmRlci13aWR0aCBzb2xpZCAkcGFnaW5hdGlvbi1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1yb290O1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5oZWFkZXItaGVpZ2h0LTUwIHtcclxuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuXHJcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcclxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxyXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IGZvciBTbWFsbCAmIE1lZGl1bSBkZXZpY2VzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wYWdlLWNvdW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5kZXNrdG9wLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmRlc2t0b3AtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gIH1cclxufVxyXG5cclxuaHRtbCBib2R5LmxheW91dC1kYXJrIHtcclxuXHJcbiAgLy8gZm9yIGRhcmsgYW5kIHRyYW5zcGFyZW50IGxheW91dHNcclxuICAuZGF0YXRhYmxlLWZvb3RlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XHJcbiAgICBjb2xvcjogJGRsLWRpc2FibGVkLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGRhcmsgbGF5b3V0XHJcbiAgJjpub3QoLmxheW91dC10cmFuc3BhcmVudCkge1xyXG4gICAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcclxuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1kYXJrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XHJcblxyXG4gICAgICAgIC5wYWdlciBsaSB7XHJcblxyXG4gICAgICAgICAgJi5kaXNhYmxlZCBhLFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRsLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZvciB0cmFuc3BhcmVudCBsYXlvdXRcclxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XHJcbiAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xyXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnBhZ2VyIGxpIHtcclxuXHJcbiAgICAgICAgICAmLmRpc2FibGVkIGEsXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciBhIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICM5NzVBRkYgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAjNDBDMDU3ICFkZWZhdWx0O1xyXG4kaW5mbzogIzJGOEJFNiAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICNGNzdFMTcgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICNGNTUyNTIgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICM2MTZEODkgIWRlZmF1bHQ7XHJcbiRsaWdodDogI0RCREVFNSAhZGVmYXVsdDtcclxuJGRhcms6ICMxQTA1MUQgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXHJcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxyXG4gICAgXCJsaWdodFwiOiAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogJGRhcmtcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuXHJcbiRzcGFjZXI6IDEuNXJlbTtcclxuJHNwYWNlcnM6IChcclxuICAwOiAwLFxyXG4gIDE6IChcclxuICAgICRzcGFjZXIgKiAwLjI1XHJcbiAgKSxcclxuICAyOiAoXHJcbiAgICAkc3BhY2VyICogMC41XHJcbiAgKSxcclxuICAzOiAkc3BhY2VyLFxyXG4gIDQ6IChcclxuICAgICRzcGFjZXIgKiAxLjVcclxuICApLFxyXG4gIDU6IChcclxuICAgICRzcGFjZXIgKiAzXHJcbiAgKVxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcbiRib2R5LWJnOiAjRjdGN0Y4O1xyXG4kYm9keS1jb2xvcjogIzM0MkU0OSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4xICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICMxNzEwMkYgIWRlZmF1bHQ7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1tdXRlZDogI0JEQkRCRCAhZGVmYXVsdDtcclxuXHJcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogMS4xcmVtICFkZWZhdWx0O1xyXG5cclxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIFRhYmxlc1xyXG4vL1xyXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAxLjE1cmVtIDJyZW0gIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY2NlbnQtYmc6IHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vXHJcbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuMzc1cmVtICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kYnRuLXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcclxuJGJ0bi1saW5lLWhlaWdodDogMS41cmVtICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEZvcm1zXHJcblxyXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4ycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAxLjUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1jb2xvcjogIzc1Nzg3ZCAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBub25lICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0OiBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgM3B4KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAyLjZyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vL1xyXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuXHJcblxyXG4vLyBOYXZzXHJcblxyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICM5RTlFOUUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6IDAgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMTBweCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAyMHB4ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tYmc6ICNGNUY1RjUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI0VFRUVFRSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogIzc1NzU3NSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNFMEUwRTAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYXJkc1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6IDEuNXJlbTtcclxuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbTtcclxuJGNhcmQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRib2R5LWJnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjZyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBUb2FzdHNcclxuXHJcbiR0b2FzdC1wYWRkaW5nLXk6IDAuNDVyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6IC04cHggOHB4IDE0cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNjY2NjY2NjY3cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIEFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuOTVyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1wYWRkaW5nLXg6IDEuNDVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmc6ICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcclxuXHJcbi8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIENvZGVcclxuXHJcbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xyXG4kY29kZS1jb2xvcjogJGRhbmdlciAhZGVmYXVsdDtcclxuXHJcbi8vIFV0aWxpdGllc1xyXG5cclxuJG92ZXJmbG93czogYXV0bywgaGlkZGVuLCB2aXNpYmxlLCBzY3JvbGwgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyB2ZXJ0aWNhbCBtZW51XHJcbiRtZW51LWV4cGFuZGVkLXdpZHRoLXNtOiAyMjBweDtcclxuJG1lbnUtZXhwYW5kZWQtd2lkdGg6IDI1MHB4O1xyXG4kbWVudS1leHBhbmRlZC13aWR0aC1sZzogMjgwcHg7XHJcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogNjBweDtcclxuXHJcbi8vIEhvcml6b250YWwgTWVudVxyXG4kbWVudS1hY3RpdmUtYmc6ICNFN0U5RUM7XHJcblxyXG4kZm9udC1zaXplLXJvb3Q6IDE1cHg7XHJcblxyXG4vLyBBdmF0YXJcclxuJGF2YXRhci1iZzogI0UwRTBFMDtcclxuJGF2YXRhci10ZXh0LWNvbG9yOiAjNjE2MTYxO1xyXG4kYXZhdGFyLXNpemU6IDMycHg7XHJcbiRhdmF0YXItc2l6ZS14bDogNzBweDtcclxuJGF2YXRhci1zaXplLWxnOiA1MHB4O1xyXG4kYXZhdGFyLXNpemUtbWQ6IDQwcHg7XHJcbiRhdmF0YXItc2l6ZS1zbTogMjRweDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZS1sZzogMTdweDtcclxuXHJcbi8vIFNoYWRvd3NcclxuJHNoYWRvdy11bWJyYS1vcGFjaXR5OiAwLjIgIWRlZmF1bHQ7XHJcbiRzaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcclxuJHNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XHJcblxyXG4vL3ZhcmlhYmxlcyBmb3Igc29jaWFsXHJcbiRzb2NpYWwtZmFjZWJvb2s6ICMzYjU5OTg7XHJcbiRzb2NpYWwtdHdpdHRlcjogIzU1YWNlZTtcclxuJHNvY2lhbC1waW50ZXJlc3Q6ICNjYzIxMjc7XHJcbiRzb2NpYWwtZ29vZ2xlOiAjZGQ0YjM5O1xyXG4kc29jaWFsLWxpbmtlZGluOiAjMDk3NmI0O1xyXG4kc29jaWFsLWRyaWJiYmxlOiAjZWE0Yzg5O1xyXG4kc29jaWFsLWdpdGh1YjogIzMzMzMzMztcclxuJHNvY2lhbC15b3V0dWJlOiAjZTUyZDI3O1xyXG4kc29jaWFsLWluc3RhZ3JhbTogIzEyNTY4ODtcclxuJHNvY2lhbC1yZWRkaXQ6ICNmZjQ1MDA7XHJcbiRzb2NpYWwtdHVtYmxyOiAjMzU0NjVjO1xyXG4kc29jaWFsLWJlaGFuY2U6ICMxNzY5ZmY7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gVmFyaWFibGVzIGZvciBEYXJrIExheW91dFxyXG4kZGFyay1zdHlsZTogdHJ1ZTtcclxuJGJnLWNvbG9yLWRhcms6ICMxMDEwMTA7XHJcbiRkbC10ZXh0LWNvbG9yOiAjQjJCMUI1O1xyXG4kZGwtYmctY29sb3I6ICMxRTFFMUU7XHJcbiRkbC1oZWFkaW5ncy1jb2xvcjogI0JGQkVDMjtcclxuJGRsLXRleHQtbXV0ZWQtY29sb3I6ICM4NDg0ODQ7XHJcbiRkbC1kaXNhYmxlZC1jb2xvcjogIzYyNjE2NDtcclxuJGRsLWJvcmRlci1jb2xvcjogIzQ3NDc0ODtcclxuJGRsLWNhcmQtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gVmFyaWFibGVzIEZvciBUcmFuc3BhcmVudCBMYXlvdXRcclxuXHJcbiR0bC10ZXh0LWNvbG9yOiAjRDZENUQ4O1xyXG4kdGwtaGVhZGluZ3MtY29sb3I6ICNFOUU5RUE7XHJcbiR0bC1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiR0bC10ZXh0LW11dGVkLWNvbG9yOiAjQzNDMkM1O1xyXG4kdGwtZGlzYWJsZWQtY29sb3I6ICM5RTlFOUU7XHJcbiR0bC1ib3JkZXItY29sb3I6IHJnYmEoI2VlZSwgMC4yKTtcclxuJHRsLWNhcmQtYmctY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEyKTtcclxuXHJcbiRiZy1nbGFzcy1oaWJpc2N1czogbGluZWFyLWdyYWRpZW50KFxyXG4gIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAjZjA1ZjU3LFxyXG4gICNjODNkNWMsXHJcbiAgIzk5MjQ1YSxcclxuICAjNjcxMzUxLFxyXG4gICMzNjA5NDBcclxuKTtcclxuJGJnLWdsYXNzLXB1cnBsZS1waXp6YXp6OiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICM2NjJkODYsXHJcbiAgIzhiMmE4YSxcclxuICAjYWUyMzg5LFxyXG4gICNjZjFkODMsXHJcbiAgI2VkMWU3OVxyXG4pO1xyXG4kYmctZ2xhc3MtYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudChcclxuICB0byByaWdodCBib3R0b20sXHJcbiAgIzE0NGU2OCxcclxuICAjMDA2ZDgzLFxyXG4gICMwMDhkOTIsXHJcbiAgIzAwYWQ5MSxcclxuICAjNTdjYTg1XHJcbik7XHJcbiRiZy1nbGFzcy1lbGVjdHJpYy12aW9sZXQ6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjNGEwMGUwLFxyXG4gICM2MDBkZTAsXHJcbiAgIzcxMTllMSxcclxuICAjODAyM2UxLFxyXG4gICM4ZTJkZTJcclxuKTtcclxuJGJnLWdsYXNzLXBvcnRhZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjOTdhYmZmLFxyXG4gICM3OThjZTUsXHJcbiAgIzViNmVjYixcclxuICAjM2I1MWIxLFxyXG4gICMxMjM1OTdcclxuKTtcclxuJGJnLWdsYXNzLXR1bmRvcmE6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjZWY0NjczLFxyXG4gICNmZmM4NDZcclxuKTtcclxuIl19 */"], encapsulation: 2, changeDetection: 0 });
    return ChatComponent;
}());



/***/ }),

/***/ 15014:
/*!********************************************************!*\
  !*** ./src/app/tedaviplanlama/tedaviplanlama.model.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersChat": function() { return /* binding */ UsersChat; },
/* harmony export */   "Chat": function() { return /* binding */ Chat; }
/* harmony export */ });
var UsersChat = /** @class */ (function () {
    function UsersChat(userId, name, avatar, lastChatTime, status, isPinnedUser, isMuted, unreadMessageCount, isActiveChat, lastChatMessage, chats) {
        this.userId = userId;
        this.name = name;
        this.avatar = avatar;
        this.lastChatTime = lastChatTime;
        this.status = status;
        this.isPinnedUser = isPinnedUser;
        this.isMuted = isMuted;
        this.unreadMessageCount = unreadMessageCount;
        this.isActiveChat = isActiveChat;
        this.lastChatMessage = lastChatMessage;
        this.chats = chats;
    }
    return UsersChat;
}());

var Chat = /** @class */ (function () {
    function Chat(isReceived, time, messages, messageType) {
        this.isReceived = isReceived;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
    return Chat;
}());



/***/ }),

/***/ 51071:
/*!*********************************************************!*\
  !*** ./src/app/tedaviplanlama/tedaviplanlama.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatModule": function() { return /* binding */ ChatModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _tedaviplanlama_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tedaviplanlama.component */ 52611);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 29150);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _tedaviplanlama_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tedaviplanlama-routing.module */ 36021);
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper/swiper.component */ 97106);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ 10351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);












var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule.ɵfac = function ChatModule_Factory(t) { return new (t || ChatModule)(); };
    ChatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ChatModule });
    ChatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                _tedaviplanlama_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChatRoutingModule,
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__.SwiperModule
            ]] });
    return ChatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_tedaviplanlama_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
        _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__.CrudModalComponent,
        _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_2__.SwiperComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _tedaviplanlama_routing_module__WEBPACK_IMPORTED_MODULE_1__.ChatRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.NgxDatatableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__.SwiperModule] }); })();


/***/ }),

/***/ 89198:
/*!**********************************************************!*\
  !*** ./src/app/tedaviplanlama/tedaviplanlama.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": function() { return /* binding */ ChatService; }
/* harmony export */ });
/* harmony import */ var _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tedaviplanlama.model */ 15014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.chat1 = [
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat2 = [
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat3 = [
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat4 = [
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat5 = [
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat6 = [
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat7 = [
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _tedaviplanlama_model__WEBPACK_IMPORTED_MODULE_0__.Chat(true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.usersChat = [
            {
                userId: "1",
                name: "Elizabeth Elliott",
                avatar: "assets/img/portrait/small/avatar-s-2.png",
                lastChatTime: "9:04 PM",
                status: "online",
                isPinnedUser: true,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Okay",
                chats: this.chat1
            },
            {
                userId: "2",
                name: "Lucas Howell",
                avatar: "assets/img/portrait/small/avatar-s-7.png",
                lastChatTime: "4:14 AM",
                status: "busy",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "3",
                isActiveChat: false,
                lastChatMessage: "Thank you",
                chats: this.chat2
            },
            {
                userId: "3",
                name: "Dental Ofis",
                avatar: "assets/img/pages/modern-thumbnail.png",
                lastChatTime: "2:14 AM",
                status: "away",
                isPinnedUser: false,
                isMuted: true,
                unreadMessageCount: "12",
                isActiveChat: true,
                lastChatMessage: "Hello John!",
                chats: this.chat3
            },
            {
                userId: "4",
                name: "Layla Allen",
                avatar: "assets/img/portrait/small/avatar-s-20.png",
                lastChatTime: "Yesterday",
                status: "online",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "I love you",
                chats: this.chat4
            },
            {
                userId: "5",
                name: "Bruce Reid",
                avatar: "assets/img/portrait/small/avatar-s-5.png",
                lastChatTime: "Yesterday",
                status: "offline",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Will connect you",
                chats: this.chat5
            },
            {
                userId: "6",
                name: "Krish Candy",
                avatar: "assets/img/portrait/small/avatar-s-9.png",
                lastChatTime: "Wednesday",
                status: "away",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "4",
                isActiveChat: false,
                lastChatMessage: "Thank you",
                chats: this.chat6
            },
            {
                userId: "7",
                name: "Kelly Reyes",
                avatar: "assets/img/portrait/small/avatar-s-4.png",
                lastChatTime: "Thrusday",
                status: "busy",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "😎🙂😃",
                chats: this.chat7
            },
            {
                userId: "8",
                name: "Vincent Nelson",
                avatar: "assets/img/portrait/small/avatar-s-14.png",
                lastChatTime: "Friday",
                status: "online",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Who you are?",
                chats: this.chat1
            },
            {
                userId: "9",
                name: "William Wright",
                avatar: "assets/img/portrait/small/avatar-s-23.png",
                lastChatTime: "1 week ago",
                status: "offline",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "6",
                isActiveChat: false,
                lastChatMessage: "How was the day?",
                chats: this.chat3
            },
            {
                userId: "10",
                name: "Novah Miller",
                avatar: "assets/img/portrait/small/avatar-s-26.png",
                lastChatTime: "1 month ago",
                status: "away",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "There you are!",
                chats: this.chat5
            }
        ];
    }
    ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    ChatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac });
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_tedaviplanlama_tedaviplanlama_module_ts.js.map