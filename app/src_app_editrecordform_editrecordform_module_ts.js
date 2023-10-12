"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["src_app_editrecordform_editrecordform_module_ts"],{

/***/ 9824:
/*!*******************************************************************!*\
  !*** ./src/app/editrecordform/crud-modal/crud-modal.component.ts ***!
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

/***/ 48199:
/*!********************************************************!*\
  !*** ./src/app/editrecordform/data/datatables.data.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableData": function() { return /* binding */ DatatableData; }
/* harmony export */ });
var DatatableData = [
    {
        responsive_id: '',
        id: 1,
        avatar: 'avatar-s-10.png',
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: '$23896.35',
        age: '61',
        experience: '1 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 2,
        avatar: 'avatar-s-1.png',
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: '$13633.69',
        age: '63',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 3,
        avatar: 'avatar-s-9.png',
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: '$13076.28',
        age: '66',
        experience: '6 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 4,
        avatar: 'avatar-s-10.png',
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: '$12336.17',
        age: '22',
        experience: '2 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 5,
        avatar: '',
        full_name: 'Harmonia Nisius',
        post: 'Senior Cost Accountant',
        email: 'hnisius4@gnu.org',
        city: 'Lucan',
        start_date: '08/25/2017',
        salary: '$10909.52',
        age: '33',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 6,
        avatar: '',
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: '$17803.80',
        age: '61',
        experience: '1 Year',
        status: 1
    },
    {
        responsive_id: '',
        id: 7,
        avatar: '',
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: '$18991.67',
        age: '59',
        experience: '9 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 8,
        avatar: 'avatar-s-9.png',
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: '$19230.13',
        age: '55',
        experience: '5 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 9,
        avatar: 'avatar-s-2.png',
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: '$11677.32',
        age: '39',
        experience: '9 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 10,
        avatar: 'avatar-s-9.png',
        full_name: 'Merline Penhalewick',
        post: 'Junior Executive',
        email: 'mpenhalewick9@php.net',
        city: 'Kanuma',
        start_date: '04/19/2019',
        salary: '$15939.52',
        age: '23',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 11,
        avatar: '',
        full_name: 'De Falloon',
        post: 'Sales Representative',
        email: 'dfalloona@ifeng.com',
        city: 'Colima',
        start_date: '06/12/2018',
        salary: '$19252.12',
        age: '30',
        experience: '0 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 12,
        avatar: '',
        full_name: 'Cyrus Gornal',
        post: 'Senior Sales Associate',
        email: 'cgornalb@fda.gov',
        city: 'Boro Utara',
        start_date: '12/09/2017',
        salary: '$16745.47',
        age: '22',
        experience: '2 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 13,
        avatar: '',
        full_name: 'Tallou Balf',
        post: 'Staff Accountant',
        email: 'tbalfc@sina.com.cn',
        city: 'Siliana',
        start_date: '01/21/2016',
        salary: '$15488.53',
        age: '36',
        experience: '6 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 14,
        avatar: '',
        full_name: 'Othilia Extill',
        post: 'Associate Professor',
        email: 'oextilld@theatlantic.com',
        city: 'Brzyska',
        start_date: '02/01/2016',
        salary: '$18442.34',
        age: '43',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 15,
        avatar: '',
        full_name: 'Wilmar Bourton',
        post: 'Administrative Assistant',
        email: 'wbourtone@sakura.ne.jp',
        city: 'Bích Động',
        start_date: '04/25/2018',
        salary: '$13304.45',
        age: '19',
        experience: '9 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 16,
        avatar: 'avatar-s-4.png',
        full_name: 'Robinson Brazenor',
        post: 'General Manager',
        email: 'rbrazenorf@symantec.com',
        city: 'Gendiwu',
        start_date: '12/23/2017',
        salary: '$11953.08',
        age: '66',
        experience: '6 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 17,
        avatar: '',
        full_name: 'Nadia Bettenson',
        post: 'Environmental Tech',
        email: 'nbettensong@joomla.org',
        city: 'Chabařovice',
        start_date: '07/11/2018',
        salary: '$20484.44',
        age: '64',
        experience: '4 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 18,
        avatar: '',
        full_name: 'Titus Hayne',
        post: 'Web Designer',
        email: 'thayneh@kickstarter.com',
        city: 'Yangon',
        start_date: '05/25/2019',
        salary: '$16871.48',
        age: '59',
        experience: '9 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 19,
        avatar: 'avatar-s-5.png',
        full_name: 'Roxie Huck',
        post: 'Administrative Assistant',
        email: 'rhucki@ed.gov',
        city: 'Polýkastro',
        start_date: '04/04/2019',
        salary: '$19653.56',
        age: '41',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 20,
        avatar: 'avatar-s-7.png',
        full_name: 'Latashia Lewtey',
        post: 'Actuary',
        email: 'llewteyj@sun.com',
        city: 'Hougong',
        start_date: '08/03/2017',
        salary: '$18303.87',
        age: '35',
        experience: '5 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 21,
        avatar: '',
        full_name: 'Natalina Tyne',
        post: 'Software Engineer',
        email: 'ntynek@merriam-webster.com',
        city: 'Yanguan',
        start_date: '03/16/2019',
        salary: '$15256.40',
        age: '30',
        experience: '0 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 22,
        avatar: '',
        full_name: 'Faun Josefsen',
        post: 'Analog Circuit Design manager',
        email: 'fjosefsenl@samsung.com',
        city: 'Wengyang',
        start_date: '07/08/2017',
        salary: '$11209.16',
        age: '40',
        experience: '0 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 23,
        avatar: 'avatar-s-9.png',
        full_name: 'Rosmunda Steed',
        post: 'Assistant Media Planner',
        email: 'rsteedm@xing.com',
        city: 'Manzanares',
        start_date: '12/23/2017',
        salary: '$13778.34',
        age: '21',
        experience: '1 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 24,
        avatar: '',
        full_name: 'Scott Jiran',
        post: 'Graphic Designer',
        email: 'sjirann@simplemachines.org',
        city: 'Pinglin',
        start_date: '05/26/2016',
        salary: '$23081.71',
        age: '23',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 25,
        avatar: '',
        full_name: 'Carmita Medling',
        post: 'Accountant',
        email: 'cmedlingo@hp.com',
        city: 'Bourges',
        start_date: '07/31/2019',
        salary: '$13602.24',
        age: '47',
        experience: '7 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 26,
        avatar: 'avatar-s-2.png',
        full_name: 'Morgen Benes',
        post: 'Senior Sales Associate',
        email: 'mbenesp@ted.com',
        city: 'Cà Mau',
        start_date: '04/10/2016',
        salary: '$16969.63',
        age: '42',
        experience: '2 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 27,
        avatar: '',
        full_name: 'Onfroi Doughton',
        post: 'Civil Engineer',
        email: 'odoughtonq@aboutads.info',
        city: 'Utrecht (stad)',
        start_date: '09/29/2018',
        salary: '$23796.62',
        age: '28',
        experience: '8 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 28,
        avatar: '',
        full_name: 'Kliment McGinney',
        post: 'Chief Design Engineer',
        email: 'kmcginneyr@paginegialle.it',
        city: 'Xiaocheng',
        start_date: '07/09/2018',
        salary: '$24027.81',
        age: '28',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 29,
        avatar: '',
        full_name: 'Devin Bridgland',
        post: 'Tax Accountant',
        email: 'dbridglands@odnoklassniki.ru',
        city: 'Baoli',
        start_date: '07/17/2016',
        salary: '$13508.15',
        age: '48',
        experience: '8 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 30,
        avatar: 'avatar-s-6.png',
        full_name: 'Gilbert McFade',
        post: 'Biostatistician',
        email: 'gmcfadet@irs.gov',
        city: 'Deje',
        start_date: '08/28/2018',
        salary: '$21632.30',
        age: '20',
        experience: '0 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 31,
        avatar: '',
        full_name: 'Teressa Bleakman',
        post: 'Senior Editor',
        email: 'tbleakmanu@phpbb.com',
        city: 'Žebrák',
        start_date: '09/03/2016',
        salary: '$24875.41',
        age: '37',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 32,
        avatar: '',
        full_name: 'Marcelia Alleburton',
        post: 'Safety Technician',
        email: 'malleburtonv@amazon.com',
        city: 'Basail',
        start_date: '06/02/2016',
        salary: '$23888.98',
        age: '53',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 33,
        avatar: 'avatar-s-7.png',
        full_name: 'Aili De Coursey',
        post: 'Environmental Specialist',
        email: 'adew@etsy.com',
        city: 'Łazy',
        start_date: '09/30/2016',
        salary: '$14082.44',
        age: '27',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 34,
        avatar: 'avatar-s-6.png',
        full_name: 'Charlton Chatres',
        post: 'Analyst Programmer',
        email: 'cchatresx@goo.gl',
        city: 'Reguengos de Monsaraz',
        start_date: '04/07/2016',
        salary: '$21386.52',
        age: '22',
        experience: '2 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 35,
        avatar: 'avatar-s-1.png',
        full_name: 'Nat Hugonnet',
        post: 'Financial Advisor',
        email: 'nhugonnety@wufoo.com',
        city: 'Pimentel',
        start_date: '09/11/2019',
        salary: '$13835.97',
        age: '46',
        experience: '6 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 36,
        avatar: '',
        full_name: 'Lorine Hearsum',
        post: 'Payment Adjustment Coordinator',
        email: 'lhearsumz@google.co.uk',
        city: 'Shuiying',
        start_date: '03/05/2019',
        salary: '$22093.91',
        age: '47',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 37,
        avatar: 'avatar-s-8.png',
        full_name: 'Sheila-kathryn Haborn',
        post: 'Environmental Specialist',
        email: 'shaborn10@about.com',
        city: 'Lewolang',
        start_date: '11/10/2018',
        salary: '$24624.23',
        age: '51',
        experience: '1 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 38,
        avatar: 'avatar-s-3.png',
        full_name: 'Alma Harvatt',
        post: 'Administrative Assistant',
        email: 'aharvatt11@addtoany.com',
        city: 'Ulundi',
        start_date: '11/04/2016',
        salary: '$21782.82',
        age: '41',
        experience: '1 Year',
        status: 1
    },
    {
        responsive_id: '',
        id: 39,
        avatar: 'avatar-s-2.png',
        full_name: 'Beatrix Longland',
        post: 'VP Quality Control',
        email: 'blongland12@gizmodo.com',
        city: 'Damu',
        start_date: '07/18/2016',
        salary: '$22794.60',
        age: '62',
        experience: '2 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 40,
        avatar: 'avatar-s-4.png',
        full_name: 'Hammad Condell',
        post: 'Project Manager',
        email: 'hcondell13@tiny.cc',
        city: 'Bulung’ur',
        start_date: '11/04/2018',
        salary: '$10872.83',
        age: '37',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 41,
        avatar: '',
        full_name: 'Parker Bice',
        post: 'Technical Writer',
        email: 'pbice14@ameblo.jp',
        city: 'Shanlian',
        start_date: '03/02/2016',
        salary: '$17471.92',
        age: '65',
        experience: '5 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 42,
        avatar: '',
        full_name: 'Lowrance Orsi',
        post: 'Biostatistician',
        email: 'lorsi15@wp.com',
        city: 'Dengteke',
        start_date: '12/10/2018',
        salary: '$24719.51',
        age: '64',
        experience: '4 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 43,
        avatar: 'avatar-s-10.png',
        full_name: 'Ddene Chaplyn',
        post: 'Environmental Tech',
        email: 'dchaplyn16@nymag.com',
        city: 'Lattes',
        start_date: '01/23/2019',
        salary: '$11958.33',
        age: '38',
        experience: '8 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 44,
        avatar: '',
        full_name: 'Washington Bygraves',
        post: 'Human Resources Manager',
        email: 'wbygraves17@howstuffworks.com',
        city: 'Zlaté Hory',
        start_date: '09/07/2016',
        salary: '$10552.43',
        age: '37',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 45,
        avatar: 'avatar-s-7.png',
        full_name: 'Meghann Bodechon',
        post: 'Operator',
        email: 'mbodechon18@1und1.de',
        city: 'Itō',
        start_date: '07/23/2018',
        salary: '$23024.28',
        age: '61',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 46,
        avatar: 'avatar-s-1.png',
        full_name: 'Moshe De Ambrosis',
        post: 'Recruiting Manager',
        email: 'mde19@purevolume.com',
        city: 'San Diego',
        start_date: '02/10/2018',
        salary: '$10409.90',
        age: '47',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 47,
        avatar: 'avatar-s-5.png',
        full_name: 'Had Chatelot',
        post: 'Cost Accountant',
        email: 'hchatelot1a@usatoday.com',
        city: 'Mercedes',
        start_date: '11/23/2016',
        salary: '$11446.30',
        age: '64',
        experience: '4 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 48,
        avatar: '',
        full_name: 'Georgia McCrum',
        post: 'Registered Nurse',
        email: 'gmccrum1b@icio.us',
        city: 'Nggalak',
        start_date: '04/19/2018',
        salary: '$14002.31',
        age: '63',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 49,
        avatar: 'avatar-s-8.png',
        full_name: 'Krishnah Stilldale',
        post: 'VP Accounting',
        email: 'kstilldale1c@chronoengine.com',
        city: 'Slavs’ke',
        start_date: '03/18/2017',
        salary: '$10704.29',
        age: '56',
        experience: '6 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 50,
        avatar: 'avatar-s-4.png',
        full_name: 'Mario Umbert',
        post: 'Research Assistant',
        email: 'mumbert1d@digg.com',
        city: 'Chorotis',
        start_date: '05/13/2019',
        salary: '$21813.54',
        age: '43',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 51,
        avatar: '',
        full_name: 'Edvard Dixsee',
        post: 'Graphic Designer',
        email: 'edixsee1e@unblog.fr',
        city: 'Rancharia',
        start_date: '04/23/2019',
        salary: '$18053.11',
        age: '46',
        experience: '6 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 52,
        avatar: 'avatar-s-9.png',
        full_name: 'Tammie Davydoch',
        post: 'VP Quality Control',
        email: 'tdavydoch1f@examiner.com',
        city: 'Mamedkala',
        start_date: '04/19/2016',
        salary: '$17617.08',
        age: '47',
        experience: '7 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 53,
        avatar: '',
        full_name: 'Benito Rodolico',
        post: 'Safety Technician',
        email: 'brodolico1g@sciencedirect.com',
        city: 'Wonosobo',
        start_date: '10/06/2018',
        salary: '$18866.55',
        age: '21',
        experience: '1 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 54,
        avatar: '',
        full_name: 'Marco Pennings',
        post: 'Compensation Analyst',
        email: 'mpennings1h@bizjournals.com',
        city: 'Umag',
        start_date: '06/15/2017',
        salary: '$13722.18',
        age: '30',
        experience: '0 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 55,
        avatar: '',
        full_name: "Tommie O'Corr",
        post: 'Quality Engineer',
        email: 'tocorr1i@nyu.edu',
        city: 'Olhos de Água',
        start_date: '09/26/2018',
        salary: '$15228.80',
        age: '51',
        experience: '1 Year',
        status: 1
    },
    {
        responsive_id: '',
        id: 56,
        avatar: 'avatar-s-1.png',
        full_name: 'Cybill Poyle',
        post: 'Cost Accountant',
        email: 'cpoyle1j@amazon.com',
        city: 'Hamm',
        start_date: '01/03/2016',
        salary: '$13951.96',
        age: '29',
        experience: '9 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 57,
        avatar: 'avatar-s-6.png',
        full_name: 'Norry Stoller',
        post: 'Human Resources Manager',
        email: 'nstoller1k@noaa.gov',
        city: 'Ruukki',
        start_date: '02/04/2018',
        salary: '$15100.00',
        age: '27',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 58,
        avatar: '',
        full_name: 'Wendi Somerlie',
        post: 'Systems Administrator',
        email: 'wsomerlie1l@accuweather.com',
        city: 'Meicheng',
        start_date: '04/22/2016',
        salary: '$20023.52',
        age: '28',
        experience: '9 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 59,
        avatar: '',
        full_name: 'Ferdie Georgeon',
        post: 'Geologist',
        email: 'fgeorgeon1m@nhs.uk',
        city: 'Tanahbeureum',
        start_date: '04/08/2019',
        salary: '$12630.26',
        age: '28',
        experience: '1 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 60,
        avatar: '',
        full_name: 'Jules Auten',
        post: 'Desktop Support Technician',
        email: 'jauten1n@foxnews.com',
        city: 'Mojo',
        start_date: '08/13/2019',
        salary: '$13870.62',
        age: '48',
        experience: '5 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 61,
        avatar: 'avatar-s-3.png',
        full_name: 'Nichole Dacres',
        post: 'Mechanical Systems Engineer',
        email: 'ndacres1o@apache.org',
        city: 'Kimanuit',
        start_date: '11/06/2017',
        salary: '$18220.51',
        age: '20',
        experience: '0 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 62,
        avatar: 'avatar-s-1.png',
        full_name: 'Holly Edgworth',
        post: 'Junior Executive',
        email: 'hedgworth1p@craigslist.org',
        city: 'Pedreira',
        start_date: '08/05/2017',
        salary: '$13999.88',
        age: '37',
        experience: '0 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 63,
        avatar: 'avatar-s-9.png',
        full_name: 'Henriette Croft',
        post: 'Food Chemist',
        email: 'hcroft1q@desdev.cn',
        city: 'Taizhou',
        start_date: '09/12/2019',
        salary: '$11049.79',
        age: '53',
        experience: '1 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 64,
        avatar: '',
        full_name: 'Annetta Glozman',
        post: 'Staff Accountant',
        email: 'aglozman1r@storify.com',
        city: 'Pendawanbaru',
        start_date: '08/25/2017',
        salary: '$10745.32',
        age: '27',
        experience: '3 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 65,
        avatar: '',
        full_name: 'Cletis Cervantes',
        post: 'Health Coach',
        email: 'ccervantes1s@de.vu',
        city: 'Solnechnyy',
        start_date: '05/24/2018',
        salary: '$24769.08',
        age: '22',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 66,
        avatar: 'avatar-s-9.png',
        full_name: 'Christos Kiley',
        post: 'Geologist',
        email: 'ckiley1t@buzzfeed.com',
        city: 'El Bolsón',
        start_date: '02/27/2019',
        salary: '$16053.15',
        age: '46',
        experience: '2 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 67,
        avatar: 'avatar-s-7.png',
        full_name: 'Silvain Siebert',
        post: 'VP Sales',
        email: 'ssiebert1u@domainmarket.com',
        city: 'Cadiz',
        start_date: '09/23/2017',
        salary: '$23347.17',
        age: '47',
        experience: '8 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 68,
        avatar: '',
        full_name: 'Sharla Ibberson',
        post: 'Payment Adjustment Coordinator',
        email: 'sibberson1v@virginia.edu',
        city: 'Lamam',
        start_date: '11/01/2016',
        salary: '$15658.40',
        age: '51',
        experience: '8 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 69,
        avatar: 'avatar-s-7.png',
        full_name: 'Ripley Rentcome',
        post: 'Physical Therapy Assistant',
        email: 'rrentcome1w@youtu.be',
        city: 'Dashkawka',
        start_date: '07/15/2018',
        salary: '$15396.66',
        age: '41',
        experience: '8 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 70,
        avatar: '',
        full_name: 'Chrisse Birrane',
        post: 'Chemical Engineer',
        email: 'cbirrane1x@google.com.br',
        city: 'Las Toscas',
        start_date: '05/22/2016',
        salary: '$15823.40',
        age: '62',
        experience: '0 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 71,
        avatar: '',
        full_name: 'Georges Tesyro',
        post: 'Human Resources Manager',
        email: 'gtesyro1y@last.fm',
        city: 'Gabao',
        start_date: '01/27/2019',
        salary: '$19051.25',
        age: '37',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 72,
        avatar: '',
        full_name: 'Bondon Hazard',
        post: 'Geological Engineer',
        email: 'bhazard1z@over-blog.com',
        city: 'Llano de Piedra',
        start_date: '01/17/2019',
        salary: '$11632.84',
        age: '65',
        experience: '3 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 73,
        avatar: 'avatar-s-5.png',
        full_name: 'Aliza MacElholm',
        post: 'VP Sales',
        email: 'amacelholm20@printfriendly.com',
        city: 'Sosnovyy Bor',
        start_date: '11/17/2017',
        salary: '$16741.31',
        age: '64',
        experience: '7 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 74,
        avatar: 'avatar-s-2.png',
        full_name: 'Lucas Witherdon',
        post: 'Senior Quality Engineer',
        email: 'lwitherdon21@storify.com',
        city: 'Staré Křečany',
        start_date: '09/26/2016',
        salary: '$19387.76',
        age: '38',
        experience: '2 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 75,
        avatar: '',
        full_name: 'Pegeen Peasegod',
        post: 'Web Designer',
        email: 'ppeasegod22@slideshare.net',
        city: 'Keda',
        start_date: '05/21/2016',
        salary: '$24014.04',
        age: '59',
        experience: '6 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 76,
        avatar: '',
        full_name: 'Elyn Watkinson',
        post: 'Structural Analysis Engineer',
        email: 'ewatkinson23@blogspot.com',
        city: 'Osan',
        start_date: '09/30/2016',
        salary: '$14493.51',
        age: '55',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 77,
        avatar: 'avatar-s-10.png',
        full_name: 'Babb Skirving',
        post: 'Analyst Programmer',
        email: 'bskirving24@cbsnews.com',
        city: 'Balky',
        start_date: '09/27/2016',
        salary: '$24733.28',
        age: '39',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 78,
        avatar: '',
        full_name: 'Shelli Ondracek',
        post: 'Financial Advisor',
        email: 'sondracek25@plala.or.jp',
        city: 'Aoluguya Ewenke Minzu',
        start_date: '03/28/2016',
        salary: '$21922.17',
        age: '23',
        experience: '1 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 79,
        avatar: 'avatar-s-9.png',
        full_name: 'Stanislaw Melloy',
        post: 'Sales Associate',
        email: 'smelloy26@fastcompany.com',
        city: 'Funafuti',
        start_date: '04/13/2017',
        salary: '$16944.42',
        age: '30',
        experience: '2 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 80,
        avatar: '',
        full_name: 'Seamus Eisikovitsh',
        post: 'Legal Assistant',
        email: 'seisikovitsh27@usgs.gov',
        city: 'Cangkringan',
        start_date: '05/28/2018',
        salary: '$21963.69',
        age: '22',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 81,
        avatar: 'avatar-s-2.png',
        full_name: 'Tammie Wattins',
        post: 'Web Designer',
        email: 'twattins28@statcounter.com',
        city: 'Xilin',
        start_date: '08/07/2018',
        salary: '$16049.93',
        age: '36',
        experience: '5 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 82,
        avatar: 'avatar-s-8.png',
        full_name: 'Aila Quailadis',
        post: 'Technical Writer',
        email: 'aquail29@prlog.org',
        city: 'Shuangchahe',
        start_date: '02/11/2018',
        salary: '$24137.29',
        age: '43',
        experience: '4 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 83,
        avatar: '',
        full_name: 'Myrvyn Gilogly',
        post: 'Research Associate',
        email: 'mgilogly2a@elpais.com',
        city: 'Prince Rupert',
        start_date: '05/13/2018',
        salary: '$10089.96',
        age: '19',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 84,
        avatar: 'avatar-s-5.png',
        full_name: 'Hanna Langthorne',
        post: 'Analyst Programmer',
        email: 'hlangthorne2b@stumbleupon.com',
        city: 'Guaynabo',
        start_date: '11/11/2018',
        salary: '$14227.10',
        age: '21',
        experience: '7 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 85,
        avatar: '',
        full_name: 'Ruby Gimblet',
        post: 'Registered Nurse',
        email: 'rgimblet2c@1688.com',
        city: 'Nanyulinxi',
        start_date: '03/28/2016',
        salary: '$19562.59',
        age: '30',
        experience: '1 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 86,
        avatar: 'avatar-s-4.png',
        full_name: 'Louis Paszak',
        post: 'Programmer',
        email: 'lpaszak2d@behance.net',
        city: 'Chiscas',
        start_date: '04/25/2016',
        salary: '$17178.86',
        age: '51',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 87,
        avatar: '',
        full_name: 'Glennie Riolfi',
        post: 'Computer Systems Analyst',
        email: 'griolfi2e@drupal.org',
        city: 'Taung',
        start_date: '06/18/2018',
        salary: '$15089.83',
        age: '29',
        experience: '4 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 88,
        avatar: '',
        full_name: 'Jemimah Morgan',
        post: 'Staff Accountant',
        email: 'jmorgan2f@nifty.com',
        city: 'La Esperanza',
        start_date: '01/17/2016',
        salary: '$18330.72',
        age: '27',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 89,
        avatar: 'avatar-s-10.png',
        full_name: 'Talya Brandon',
        post: 'Food Chemist',
        email: 'tbrandon2g@ucoz.com',
        city: 'Zaječar',
        start_date: '10/08/2018',
        salary: '$16284.64',
        age: '28',
        experience: '6 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 90,
        avatar: 'avatar-s-6.png',
        full_name: 'Renate Shay',
        post: 'Recruiter',
        email: 'rshay2h@tumblr.com',
        city: 'Pueblo Viejo',
        start_date: '03/15/2017',
        salary: '$18523.75',
        age: '28',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 91,
        avatar: '',
        full_name: 'Julianne Bartosik',
        post: 'Senior Cost Accountant',
        email: 'jbartosik2i@state.gov',
        city: 'Botlhapatlou',
        start_date: '02/06/2017',
        salary: '$17607.66',
        age: '48',
        experience: '6 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 92,
        avatar: 'avatar-s-3.png',
        full_name: 'Yvonne Emberton',
        post: 'Recruiter',
        email: 'yemberton2j@blog.com',
        city: 'Nagcarlan',
        start_date: '02/13/2017',
        salary: '$17550.18',
        age: '20',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 93,
        avatar: 'avatar-s-8.png',
        full_name: 'Danya Faichnie',
        post: 'Social Worker',
        email: 'dfaichnie2k@weather.com',
        city: 'Taling',
        start_date: '07/29/2019',
        salary: '$18469.35',
        age: '37',
        experience: '3 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 94,
        avatar: '',
        full_name: 'Ronica Hasted',
        post: 'Software Consultant',
        email: 'rhasted2l@hexun.com',
        city: 'Gangkou',
        start_date: '07/04/2019',
        salary: '$24866.66',
        age: '53',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 95,
        avatar: 'avatar-s-2.png',
        full_name: 'Edwina Ebsworth',
        post: 'Human Resources Assistant',
        email: 'eebsworth2m@sbwire.com',
        city: 'Puzi',
        start_date: '09/27/2018',
        salary: '$19586.23',
        age: '27',
        experience: '2 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 96,
        avatar: '',
        full_name: 'Alaric Beslier',
        post: 'Tax Accountant',
        email: 'abeslier2n@zimbio.com',
        city: 'Ocucaje',
        start_date: '04/16/2017',
        salary: '$19366.53',
        age: '22',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 97,
        avatar: '',
        full_name: 'Reina Peckett',
        post: 'Quality Control Specialist',
        email: 'rpeckett2o@timesonline.co.uk',
        city: 'Anyang',
        start_date: '05/20/2018',
        salary: '$16619.40',
        age: '46',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 98,
        avatar: 'avatar-s-7.png',
        full_name: 'Olivette Gudgin',
        post: 'Paralegal',
        email: 'ogudgin2p@gizmodo.com',
        city: 'Fujinomiya',
        start_date: '04/09/2019',
        salary: '$15211.60',
        age: '47',
        experience: '8 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 99,
        avatar: 'avatar-s-10.png',
        full_name: 'Evangelina Carnock',
        post: 'Cost Accountant',
        email: 'ecarnock2q@washington.edu',
        city: 'Doushaguan',
        start_date: '01/26/2017',
        salary: '$23704.82',
        age: '51',
        experience: '0 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 100,
        avatar: '',
        full_name: 'Glyn Giacoppo',
        post: 'Software Test Engineer',
        email: 'ggiacoppo2r@apache.org',
        city: 'Butha-Buthe',
        start_date: '04/15/2017',
        salary: '$24973.48',
        age: '41',
        experience: '7 Years',
        status: 2
    }
];


/***/ }),

/***/ 51867:
/*!*****************************************************************!*\
  !*** ./src/app/editrecordform/editrecordform-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditrecordformRoutingModule": function() { return /* binding */ EditrecordformRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _editrecordform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editrecordform.component */ 63868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




var routes = [
    {
        path: '',
        component: _editrecordform_component__WEBPACK_IMPORTED_MODULE_0__.EditrecordformComponent,
        data: {
            title: 'Edit Record Form'
        },
    }
];
var EditrecordformRoutingModule = /** @class */ (function () {
    function EditrecordformRoutingModule() {
    }
    EditrecordformRoutingModule.ɵfac = function EditrecordformRoutingModule_Factory(t) { return new (t || EditrecordformRoutingModule)(); };
    EditrecordformRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditrecordformRoutingModule });
    EditrecordformRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return EditrecordformRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditrecordformRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63868:
/*!************************************************************!*\
  !*** ./src/app/editrecordform/editrecordform.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditrecordformComponent": function() { return /* binding */ EditrecordformComponent; }
/* harmony export */ });
/* harmony import */ var _data_datatables_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/datatables.data */ 48199);
/* harmony import */ var _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/sweet-alerts */ 645);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../newrecordrow/newrecordrow.component */ 36009);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ 88031);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var app_newrecordrow_proses_newrecordrow_proses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/newrecordrow_proses/newrecordrow_proses.component */ 59218);
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ 9824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var app_barcodeform_barcodeform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/barcodeform/barcodeform.component */ 57562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 83315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ 51863);
























var _c0 = ["tableRowDetails"];
var _c1 = ["tableResponsive"];
var _c2 = function (a0) { return { active: a0 }; };
function EditrecordformComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_li_7_Template_a_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); var grup_r3 = restoredCtx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r5.setActiveTab(grup_r3.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var grup_r3 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](3, _c2, ctx_r0.activeTab === grup_r3.name))("id", grup_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.baslikkontrol(grup_r3.name));
} }
function EditrecordformComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r7.showEditIcon(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx_r1.editfieldicon === true ? "ft-eye" : "ft-eye-off");
} }
function EditrecordformComponent_form_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Kay\u0131t Tarihi");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Son D\u00FCzenleme T.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Olu\u015Fturan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Son D\u00FCzenleyen");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9.kayittarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r11.kayittarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9.sonduzenlemetarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r11.sonduzenlemetarihi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9.olusturans);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r11.olusturan);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9.sonduzenleyen);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r11.sonduzenleyen);
} }
function EditrecordformComponent_form_21_div_4_div_1_section_2_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var satir_r33 = ctx.$implicit;
    var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx_r32.localStorage.getItem("url") + satir_r33.dosya, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function EditrecordformComponent_form_21_div_4_div_1_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Resimler aras\u0131nda ge\u00E7i\u015F yapabilir, b\u00FCy\u00FCk boyutlu g\u00F6rebilir ve inceleyebilirsiniz.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EditrecordformComponent_form_21_div_4_div_1_section_2_div_11_Template, 2, 1, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("swiper", ctx_r23.swiperCoverflowEffectConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r23.satirlar[blok_r19.bokindex]);
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r48); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r46.formModal(blok_r19.bagliformindex, 198); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r51); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r49.tasarla(blok_r19.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53); _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](13); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r52.excelModal(_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r55); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r54.exportAsExcelFile(ctx_r54.satirlar[blok_r19.bokindex], blok_r19.formtanimi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Excel'e Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r57.barkodOkut(blok_r19.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r61); var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5); return ctx_r60.maliyethesapla("Sat\u0131nalma"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Yeniden Hesapla");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r62.sarjdoldur(blok_r19.bagliformindex, blok_r19.masterfield, blok_r19.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r67); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r65.otomatikdoldur(blok_r19.bagliformindex, blok_r19.masterfield, blok_r19.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Otomatik Doldur");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69); var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5); return ctx_r68.mixsarjformuyazdir(ctx_r68.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r72); var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4).$implicit; var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r70.bekleyensiparisler(veriler_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Bekleyen Sipari\u015Flerden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r75); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r73.satirekle(blok_r19.bagliformindex, blok_r19.masterfield, blok_r19.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EditrecordformComponent_form_21_div_4_div_1_div_9_button_4_Template, 2, 0, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EditrecordformComponent_form_21_div_4_div_1_div_9_button_5_Template, 2, 0, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_div_1_div_9_button_6_Template, 3, 0, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EditrecordformComponent_form_21_div_4_div_1_div_9_button_7_Template, 2, 0, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, EditrecordformComponent_form_21_div_4_div_1_div_9_button_8_Template, 2, 0, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EditrecordformComponent_form_21_div_4_div_1_div_9_button_9_Template, 3, 0, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EditrecordformComponent_form_21_div_4_div_1_div_9_button_10_Template, 3, 0, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EditrecordformComponent_form_21_div_4_div_1_div_9_button_11_Template, 3, 0, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EditrecordformComponent_form_21_div_4_div_1_div_9_button_12_Template, 2, 0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, EditrecordformComponent_form_21_div_4_div_1_div_9_button_13_Template, 3, 0, "button", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.userroles == "00038" || ctx_r24.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.userroles == "00038" || ctx_r24.userroles == "00037");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.formturu !== "Rapor" && ctx_r24.formid !== "813");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.formturu !== "Rapor" && ctx_r24.formid !== "813");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "598");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "664");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.formid == "486");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "657");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "605");
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h4", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Excelden Aktar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_12_Template_button_click_3_listener() { var modal_r77 = ctx.$implicit; return modal_r77.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "form", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Y\u00FCkle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_12_Template_button_click_18_listener() { var modal_r77 = ctx.$implicit; return modal_r77.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Tamam");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", blok_r19.bagliformindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", ctx_r26.recordid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", blok_r19.detailfield);
} }
function EditrecordformComponent_form_21_div_4_div_1_fieldset_14_Template(rf, ctx) { if (rf & 1) {
    var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "fieldset", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Ara: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditrecordformComponent_form_21_div_4_div_1_fieldset_14_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r83); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return blok_r19.bagliformindexC = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("name", "search_", blok_r19.bokindex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", blok_r19.bokindex)("ngModel", blok_r19.bagliformindexC);
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row;
    var column_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](row_r89[column_r85.id]);
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_div_0_Template, 2, 1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_div_1_Template, 2, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_div_2_Template, 2, 0, "div", 205);
} if (rf & 2) {
    var row_r89 = ctx.row;
    var column_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r89[column_r85.id] != "true" && row_r89[column_r85.id] != "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r89[column_r85.id] == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", row_r89[column_r85.id] == "false");
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ngx-datatable-column", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_ng_template_1_Template, 3, 3, "ng-template", 158, 204, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("name", column_r85.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("prop", column_r85.id);
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r116); var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5); return ctx_r115.faturayazdir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r119); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r117.yuzdegir(row_r97.id, blok_r19.bokindex, row_r97.yuzdepayi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r123); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r121.parametreler(row_r97.id, blok_r19.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r127); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r125.rezervEt(row_r97.id, blok_r19.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r131); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r129.barkodOkut(blok_r19.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r134); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r132.paletbarkodyazdir(row_r97.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r137); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r135.barkodyazdir(row_r97.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r140); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r138.sarjbittionay(row_r97.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r143); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r141.sarjformuyazdir(row_r97.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r146); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r144.editrecord(row_r97.id, blok_r19.bagliformindex, blok_r19.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r150); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r148.deleterecord(row_r97.id, blok_r19.bagliformindex, blok_r19.bokindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_12_Template(rf, ctx) { if (rf & 1) {
    var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r154); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r152.uretimYontemGit(row_r97.id, blok_r19.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r158); var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit; var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r156.rezervlerdencek(veriler_r9, blok_r19.bagliformindex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_14_Template(rf, ctx) { if (rf & 1) {
    var _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r162); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r160.formlaraGit(row_r97.id, blok_r19.bagliformindex, "veridagitimformu", "musteri_urun_kodu", "kalemkodu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r166); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r164.formlaraGit(row_r97.id, blok_r19.bagliformindex, "maliyet_analizi", "", ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r170); var row_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().row; var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4); return ctx_r168.kartinagit(row_r97.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_1_Template, 2, 0, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_2_Template, 2, 0, "button", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_3_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_4_Template, 2, 0, "button", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_5_Template, 2, 0, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_6_Template, 2, 0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_7_Template, 2, 0, "button", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_8_Template, 2, 0, "button", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_9_Template, 2, 0, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_10_Template, 2, 0, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_11_Template, 2, 0, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_12_Template, 2, 0, "button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_13_Template, 2, 0, "button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_14_Template, 2, 0, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_15_Template, 2, 0, "button", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_button_16_Template, 2, 0, "button", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bokindex == "1721" || blok_r19.bokindex == "1728");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "610" || blok_r19.bagliformindex == "614" || blok_r19.bagliformindex == "618" || blok_r19.bagliformindex == "616");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "257");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "278");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "642" && blok_r19.formindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.formindex == "395");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "653");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "653" && blok_r19.formindex == "621");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.formturu != "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "250" && blok_r19.formindex == "254");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "278" && blok_r19.formindex == "277");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "513" && blok_r19.formindex == "491");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "513" && blok_r19.formindex == "491");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "610" || blok_r19.bagliformindex == "614" || blok_r19.bagliformindex == "618" || blok_r19.bagliformindex == "616");
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_20_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Toplam KG: ", ctx_r172.getirs(blok_r19.bagliformindex), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Toplam Y\u00FCzde: ", ctx_r172.getirs_2(blok_r19.bagliformindex), " ");
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_20_ng_template_1_Template, 5, 2, "ng-template", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_21_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Toplam Maliyet: ", ctx_r178.toplammaliyet, " TL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Birim Maliyet: ", ctx_r178.birimmaliyet, " TL ");
} }
function EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ngx-datatable-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_21_ng_template_1_Template, 5, 2, "ng-template", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EditrecordformComponent_form_21_div_4_div_1_section_2_Template, 13, 2, "section", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EditrecordformComponent_form_21_div_4_div_1_div_9_Template, 14, 10, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EditrecordformComponent_form_21_div_4_div_1_ng_template_12_Template, 20, 3, "ng-template", null, 153, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, EditrecordformComponent_form_21_div_4_div_1_fieldset_14_Template, 4, 3, "fieldset", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ngx-datatable", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_column_17_Template, 3, 2, "ngx-datatable-column", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ngx-datatable-column", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, EditrecordformComponent_form_21_div_4_div_1_ng_template_19_Template, 17, 16, "ng-template", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_20_Template, 2, 0, "ngx-datatable-footer", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, EditrecordformComponent_form_21_div_4_div_1_ngx_datatable_footer_21_Template, 2, 0, "ngx-datatable-footer", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex === "726");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](blok_r19.formtanimi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.formturu !== "Rapor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.formturu !== "Rapor" && ctx_r21.formid !== "813");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("columns", ctx_r21.sutunlars[blok_r19.bokindex])("columnMode", ctx_r21.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](16, 15, ctx_r21.satirlar[blok_r19.bokindex], blok_r19.bagliformindexC))("scrollbarH", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r21.sutunlars[blok_r19.bokindex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "610" || blok_r19.bagliformindex == "614" || blok_r19.bagliformindex == "618" || blok_r19.bagliformindex == "616");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.bagliformindex == "664");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_1_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
var _c3 = function (a0, a1) { return { "is-invalid ": a0, "is-valid": a1 }; };
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_1_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r210); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r208.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 247, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_1_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r210); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r211.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r210); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_1_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r186.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r206.errors == null ? null : _r206.errors.required) && alan_r184.zorunlu === "True", !_r206.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r206.errors == null ? null : _r206.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_2_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
var _c4 = function (a0, a1, a2) { return { " is-invalid    ": a0, "  is-valid ": a1, "form-control selectRef": a2 }; };
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_2_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r222); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r220.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ng-select", 251, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_2_Template_ng_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r222); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r223.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_2_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r222); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_2_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r187.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](9, _c4, (_r218.errors == null ? null : _r218.errors.required) && alan_r184.zorunlu === "True", !_r218.invalid && alan_r184.zorunlu === "True", alan_r184.zorunlu === "True"))("items", ctx_r187.cities[alan_r184.alan_index])("closeOnSelect", true)("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r218.errors == null ? null : _r218.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_3_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_3_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r234); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r232.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 252, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_3_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r234); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r235.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r234); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_3_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r188.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r230.errors == null ? null : _r230.errors.required) && alan_r184.zorunlu === "True", !_r230.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r230.errors == null ? null : _r230.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_4_div_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r247); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var veri_r243 = ctx.$implicit;
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veri_r243.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", veriler_r9[alan_r184.alanadi])("id", veri_r243.name + "_" + alan_r184.alan_index)("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("for", "", veri_r243.name, "_", alan_r184.alan_index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](veri_r243.name);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_4_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r253); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r251.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_4_div_5_Template, 4, 7, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r189.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r189.cities[alan_r184.alan_index]);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_5_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r257); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r255.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_5_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r257); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r258.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r257); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r190.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_6_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_6_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r269); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r267.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 260, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_6_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r269); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r270.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_6_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r269); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_6_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r191.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r265.errors == null ? null : _r265.errors.required) && alan_r184.zorunlu === "True", !_r265.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r265.errors == null ? null : _r265.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_7_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r279); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r277.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_7_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r279); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r280.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r279); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r192.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r289 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_8_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r289); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r287.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_8_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r289); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r290.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r289); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r193.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "input", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_9_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r299); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r297.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r299); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_10_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_10_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r309); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r307.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 265, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_10_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r309); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r310.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r309); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_10_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r195.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r305.errors == null ? null : _r305.errors.required) && alan_r184.zorunlu === "True", !_r305.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r305.errors == null ? null : _r305.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    var _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_11_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r319); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r317.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "textarea", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_11_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r319); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r196.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](veriler_r9[alan_r184.alanadi]);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_12_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    var _r329 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_12_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r329); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r327.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 267, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_12_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r329); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r330.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_12_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r329); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_12_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r197.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r325.errors == null ? null : _r325.errors.required) && alan_r184.zorunlu === "True", !_r325.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r325.errors == null ? null : _r325.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_13_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_13_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r341); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r339.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 268, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_13_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r341); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r342.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_13_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r341); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_13_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r198.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r337.errors == null ? null : _r337.errors.required) && alan_r184.zorunlu === "True", !_r337.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r337.errors == null ? null : _r337.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_14_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r351); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r349.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_14_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r351); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); })("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_14_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r351); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r355.dosyayukle($event, alan_r184.alanadi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r199.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", veriler_r9[alan_r184.alanadi], _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r361 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "img", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_15_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r361); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r359.pdfegit(veriler_r9[alan_r184.alanadi]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_15_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r361); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r363.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_15_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r361); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r365.pdfdosyayukle($event, alan_r184.alanadi); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r200.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("name", alan_r184.alanadi);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_16_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r370); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r368.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "input", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_16_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r370); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r201.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r201.degistir(veriler_r9[alan_r184.alanadi]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_17_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_17_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r380); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r378.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ng-select", 275, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_17_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r380); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_17_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r202.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](9, _c4, (_r376.errors == null ? null : _r376.errors.required) && alan_r184.zorunlu === "True", !_r376.invalid && alan_r184.zorunlu === "True", alan_r184.zorunlu === "True"))("items", ctx_r202.cities[alan_r184.alan_index])("id", alan_r184.alanadi)("closeOnSelect", true)("name", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r376.errors == null ? null : _r376.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_18_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    var _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_18_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r390); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r388.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 247, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_18_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r390); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r391.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_18_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r390); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_18_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r386 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r203.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r386.errors == null ? null : _r386.errors.required) && alan_r184.zorunlu === "True", !_r386.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r386.errors == null ? null : _r386.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_19_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r402 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_19_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r402); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r400.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 247, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_19_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r402); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r403.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r402); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_19_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r398 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r204.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](8, _c3, (_r398.errors == null ? null : _r398.errors.required) && alan_r184.zorunlu === "True", !_r398.invalid && alan_r184.zorunlu === "True"))("ngModel", veriler_r9[alan_r184.alanadi])("name", alan_r184.alanadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r398.errors == null ? null : _r398.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_20_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "small", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Zorunlu Alan");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r414 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "i", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_20_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r414); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r412.AlanOzellikleri(alan_r184.alanindex, "199"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ng-select", 276, 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_20_Template_ng_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r414); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r415.islemyap(alan_r184.formindex, alan_r184.alanadi); })("ngModelChange", function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_20_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r414); var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit; return (veriler_r9[alan_r184.alanadi] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_20_small_6_Template, 2, 0, "small", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var veriler_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", alan_r184.alanyazisi, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r205.editfieldicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", alan_r184.alanadi)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](9, _c4, (_r410.errors == null ? null : _r410.errors.required) && alan_r184.zorunlu === "True", !_r410.invalid && alan_r184.zorunlu === "True", alan_r184.zorunlu === "True"))("items", ctx_r205.cities[alan_r184.alan_index])("closeOnSelect", true)("name", alan_r184.alanadi)("ngModel", veriler_r9[alan_r184.alanadi]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (_r410.errors == null ? null : _r410.errors.required) && alan_r184.zorunlu === "True");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_1_Template, 7, 11, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_2_Template, 7, 13, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_3_Template, 7, 11, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_4_Template, 6, 3, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_5_Template, 5, 6, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_6_Template, 7, 11, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_7_Template, 5, 6, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_8_Template, 5, 6, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_9_Template, 2, 4, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_10_Template, 7, 11, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_11_Template, 6, 6, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_12_Template, 7, 11, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_13_Template, 7, 11, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_14_Template, 7, 6, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_15_Template, 7, 4, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_16_Template, 7, 5, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_17_Template, 7, 13, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_18_Template, 7, 11, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_19_Template, 7, 11, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_div_20_Template, 7, 13, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var alan_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](alan_r184.alanboyutu);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Combobox");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Radiobutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "File(JPG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "File(PDF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "File(PNG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Secimli");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Multiautocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "Autocomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", alan_r184.verigiristuru == "FixList");
} }
function EditrecordformComponent_form_21_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_ng_container_2_div_1_Template, 21, 22, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var alan_r184 = ctx.$implicit;
    var blok_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r22.ayniblokmu(alan_r184.blokindex, blok_r19.bokindex) && ctx_r22.activeTab === blok_r19.grupadi);
} }
function EditrecordformComponent_form_21_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_div_4_div_1_Template, 22, 18, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, EditrecordformComponent_form_21_div_4_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var blok_r19 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassMap"](blok_r19.blokboyutu);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", blok_r19.turu === "Liste" && ctx_r12.activeTab === blok_r19.grupadi);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r12.blokalanlari);
} }
function EditrecordformComponent_form_21_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r425 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r425); var ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r424.tabloOlustur(ctx_r424.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Tablo Olu\u015Ftur");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_button_7_Template(rf, ctx) { if (rf & 1) {
    var _r427 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r427); var ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r426.eksikAlanlar(ctx_r426.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Eksik Alanlar\u0131 Olu\u015Ftur");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r429); var ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r428.isemriformu(ctx_r428.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u0130\u015F Emri Formu");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r431); var ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r430.kalitekontrolformu(ctx_r430.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Kalite Kontrol Formu");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r433 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r433); var ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r432.sipariseDonustur(ctx_r432.recordid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Sipari\u015Fe D\u00F6n\u00FC\u015Ft\u00FCr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function EditrecordformComponent_form_21_Template(rf, ctx) { if (rf & 1) {
    var _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, EditrecordformComponent_form_21_ng_container_1_Template, 22, 8, "ng-container", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, EditrecordformComponent_form_21_div_4_Template, 3, 4, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, EditrecordformComponent_form_21_button_6_Template, 3, 0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EditrecordformComponent_form_21_button_7_Template, 3, 0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, EditrecordformComponent_form_21_button_8_Template, 3, 0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, EditrecordformComponent_form_21_button_9_Template, 3, 0, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r435); var ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r434.kaydet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Kaydet");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_form_21_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r435); var ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r436.vazgec(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Vazge\u00E7");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, EditrecordformComponent_form_21_button_16_Template, 3, 0, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.activeTab == "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.bloklar);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formid == "198");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formid == "198");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formid == "445");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formid == "445");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.formid == "282");
} }
var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var EditrecordformComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} http
     */
    function EditrecordformComponent(toastr, cdr, modalService, router, http, route, http2) {
        this.toastr = toastr;
        this.cdr = cdr;
        this.modalService = modalService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.http2 = http2;
        this.swal = _shared_data_sweet_alerts__WEBPACK_IMPORTED_MODULE_1__;
        this.avatar = "";
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
        this.tabs = [1, 2, 3, 4, 5];
        this.counter = this.tabs.length + 1;
        this.cities = [];
        this.sutunlars = [];
        this.satirlar = [];
        this.grupbasliklari = [];
        this.toplammaliyet = 0;
        this.birimmaliyet = 0;
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
        this.multiPurposeRows = _data_datatables_data__WEBPACK_IMPORTED_MODULE_0__.DatatableData;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.ColumnMode;
        this.SERVER_URL = localStorage.getItem('url');
        this.expanded = {};
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
        this.editing = {};
        this.chkBoxSelected = [];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.SelectionType;
        // private
        this.tempData = [];
        this.multiPurposeTemp = [];
        this.editfieldicon = true;
        this.userroles = localStorage.getItem('unvani');
        this.formid = this.route.snapshot.paramMap.get('formid');
        this.recordid = this.route.snapshot.paramMap.get('recordid');
        this.formtanimi = this.route.snapshot.paramMap.get('formtanimi');
    }
    /**
     * inlineEditingUpdate
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    EditrecordformComponent.prototype.inlineEditingUpdate = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
    };
    EditrecordformComponent.prototype.barkodOkut = function (id) {
        var modalRef = this.modalService.open(app_barcodeform_barcodeform_component__WEBPACK_IMPORTED_MODULE_8__.BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
        modalRef.componentInstance.id = id; // should be the id 
        modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma', mastervalue: this.recordid }; // should be the data  
        modalRef.result.then(function (result) {
            return result;
        }).catch(function (error) {
            console.log(error);
        });
    };
    EditrecordformComponent.prototype.exportAsExcelFile = function (rows, excelFileName) {
        if (rows.length > 0) {
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.json_to_sheet(rows);
            var workbook = { Sheets: { 'Compte-rendu': worksheet }, SheetNames: ['Compte-rendu'] };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_4__.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, excelFileName);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                icon: 'warning',
                title: 'Uyarı',
                text: 'Dışa Aktarılacak Satır Yok.',
                confirmButtonText: "Tamam",
            });
        }
    };
    EditrecordformComponent.prototype.saveAsExcelFile = function (buffer, baseFileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(data, baseFileName + '_' + this.getDateFormat(new Date()) + EXCEL_EXTENSION);
    };
    EditrecordformComponent.prototype.getDateFormat = function (date) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(date, 'yyyyMMdd_HHmmss', 'en-US');
    };
    EditrecordformComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
        this.cdr.markForCheck();
    };
    Object.defineProperty(EditrecordformComponent.prototype, "signupFormModalName", {
        get: function () {
            return this.validatingForm.get('signupFormModalName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditrecordformComponent.prototype, "signupFormModalEmail", {
        get: function () {
            return this.validatingForm.get('signupFormModalEmail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditrecordformComponent.prototype, "signupFormModalPassword", {
        get: function () {
            return this.validatingForm.get('signupFormModalPassword');
        },
        enumerable: false,
        configurable: true
    });
    EditrecordformComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EditrecordformComponent.prototype.baslikkontrol = function (grupadi) {
        if (grupadi == '') {
            return 'Genel Bilgiler';
        }
        if (grupadi != '') {
            return grupadi;
        }
    };
    EditrecordformComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EditrecordformComponent.prototype.uretimYontemGit = function (e, c) {
        // localStorage.setItem('recordid', e);
        // localStorage.setItem('formid', c);
        // localStorage.setItem('formtanimi', 'Üretim Yöntemleri');
        this.router.navigate(['/editrecordform/' + e + '/' + c + '/Üretim Yöntemleri/']);
        window.location.reload();
    };
    EditrecordformComponent.prototype.paletbarkodyazdir = function (id) {
        window.open(localStorage.getItem('url') + "maratonservices/barkodyazdir.php?tipi=paletbarkodu&id=" + id, '_blank');
    };
    EditrecordformComponent.prototype.barkodyazdir = function (id) {
        window.open(localStorage.getItem('url') + "maratonservices/barkodyazdir.php?tipi=sayimbarkodu&malzemeid=" + id, '_blank');
    };
    EditrecordformComponent.prototype.kartinagit = function (id) {
        var _this = this;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=malzemeturugetir&kayitid=" + id;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            if (data[0].malzemeturu == 'Hammadde') {
                _this.hammaddeyegit(data[0].index_malzemeler);
            }
            if (data[0].malzemeturu == 'Yarımamul') {
                _this.yarimamulegit(data[0].index_malzemeler);
            }
        });
    };
    EditrecordformComponent.prototype.toplammaliyethesapla = function (id) {
    };
    EditrecordformComponent.prototype.yuzdeyenile = function (id, rednedeni, blokid) {
        var _this = this;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=yuzdeyenile&formid=" + this.formid + "&recordid=" + id + "&userid=" + localStorage.getItem('userid') + "&yeniyuzde=" + rednedeni + "&malzemeid=" + this.recordid;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.tabloyenile(_this.formid, blokid);
            _this.cdr.markForCheck();
        });
    };
    EditrecordformComponent.prototype.yuzdegir = function (id, blokid, yuzdepayi) {
        var idZ = id;
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: "Yüzde Değiştir",
            text: "Yeni yüzde oranı:",
            input: 'text',
            inputValue: yuzdepayi,
            showCancelButton: true
        }).then(function (result) {
            if (result.value) {
                durum.yuzdeyenile(idZ, result.value, blokid);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    icon: "success",
                    title: 'Yüzde yenileme İşlemi Başarılı!',
                    text: 'Seçilen reçete güncellendi',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                });
                setTimeout(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
                }, 1000);
            }
        });
    };
    EditrecordformComponent.prototype.getir = function (id) {
    };
    EditrecordformComponent.prototype.hammaddeyegit = function (id) {
        window.open("https://192.168.1.201:81/#/editrecordform/" + id + "/304/Hammaddeler", '_blank');
    };
    EditrecordformComponent.prototype.yarimamulegit = function (id) {
        window.open("https://192.168.1.201:81/#/editrecordform/" + id + "/301/Yar%C4%B1mamul%20Kartlar%C4%B1", '_blank');
    };
    EditrecordformComponent.prototype.sarjformuyazdir = function (id) {
        window.open(localStorage.getItem('url') + "maratonservices/uretimtalepformu.php?id=" + id + "&sarid=" + this.recordid, '_blank');
    };
    EditrecordformComponent.prototype.mixsarjformuyazdir = function (id) {
        window.open(localStorage.getItem('url') + "maratonservices/uretimtalepformu.php?id=" + id + "&mixsarid=" + this.recordid, '_blank');
    };
    EditrecordformComponent.prototype.tasarla = function (id) {
        this.router.navigate(['/design/' + id]);
    };
    EditrecordformComponent.prototype.formModal = function (id, formis) {
        var _this = this;
        // localStorage.setItem('rowformid', formis);
        // localStorage.setItem('rowrecordid', id);
        var modalSat = this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_2__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
        modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formis, rowrecordid: id, formtanimi: '', subformid: '' };
        modalSat.result.then(function (result) {
            if (result == 'Yenile') {
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EditrecordformComponent.prototype.formlaraGit = function (id, formid, gidilecekform, baglanacak, baglanacak2) {
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formyonlendirmeyap&baglanacak=" + baglanacak + "&baglanacak2=" + baglanacak2 + "&recordid=" + id + "&formu=" + formid + "&gidecegiform=" + gidilecekform;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            if (gidilecekform == 'veridagitimformu') {
                var formCid = '231';
            }
            if (gidilecekform == 'veridagitimformu') {
                var formCid = '491';
            }
            if (gidilecekform == 'kalip_karsiliklari') {
                var formCid = '250';
                var ftanm = 'Üretim Yöntemleri';
            }
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var obj = data_1[_i];
                // console.log("object:", obj);
                for (var key in obj) {
                    if (obj[key] != '') {
                        console.log(obj[key]);
                        //   localStorage.setItem('recordid', obj[key]);
                        //   localStorage.setItem('formid',formCid);
                        //   localStorage.setItem('formtanimi', ftanm);
                        //  this.router.navigate(['/editrecordform']);
                        //  window.location.reload();
                    }
                    else {
                        console.log('yok böyle bir kayıt');
                    }
                    //  console.log("      key:", key, "value:", obj[key]);
                }
            }
        });
    };
    EditrecordformComponent.prototype.sipariseDonustur = function (recordid) {
        var dd = this;
        var tedarikci = document.getElementById('ch_adi').getAttribute('ng-reflect-model');
        var termin = $('#termin').val();
        $.ajax({
            url: localStorage.getItem('url') + '/siparisedonustur.php?ids=' + recordid,
            type: 'GET',
            data: '',
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                localStorage.setItem('formid', '461');
                localStorage.setItem('formtanimi', 'Satınalma Siparişleri');
                localStorage.setItem('secilenform', 'satinalma-siparisleri');
                localStorage.setItem('recordid', "");
                localStorage.setItem('donusturulentoken', data);
                dd.router.navigate(['/newrecordform']);
            }
        });
    };
    EditrecordformComponent.prototype.evetsil = function (id, d) {
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + d + "&recordid=" + id + "&userid=" + localStorage.getItem('userid');
        console.log(this.SERVER_URL);
        this.http.get(this.SERVER_URL).subscribe(function (data) {
        });
    };
    EditrecordformComponent.prototype.isemriformu = function (id) {
        window.open(localStorage.getItem('url') + "maratonservices/isemriformu.php?isemrino=" + id, '_blank');
    };
    EditrecordformComponent.prototype.kalitekontrolformu = function (id) {
        window.open(localStorage.getItem('url') + "maratonservices/kalitekontrolformu.php?isemrino=" + id, '_blank');
    };
    EditrecordformComponent.prototype.editrecord = function (id, formids, blokid) {
        // localStorage.setItem('rowformid',formids);
        // localStorage.setItem('rowrecordid', id);
        var _this = this;
        var modalSat = this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_2__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
        modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formids, rowrecordid: id, formtanimi: '', subformid: '' };
        modalSat.result.then(function (result) {
            if (result == 'Yenile') {
                _this.tabloyenile(formids, blokid);
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EditrecordformComponent.prototype.dosyayukle = function (filename, alanadi) {
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
    EditrecordformComponent.prototype.pdfegit = function (veri) {
        window.open(veri, '_blank');
    };
    EditrecordformComponent.prototype.pdfdosyayukle = function ($event, alanadi) {
        var data = $event.target.files;
        for (var i = 0; i < this.blokalanlari.length; i++) {
            if (this.blokalanlari[i].verigiristuru == 'File(PDF)' && this.blokalanlari[i].alanadi == alanadi) {
                if (data.length > 0) {
                    var file = data[0];
                    this.blokalanlari[i].name = file.name;
                    this.blokalanlari[i].dosya = file;
                }
            }
        }
    };
    EditrecordformComponent.prototype.islemyap = function (formid, alanadi) {
        var _this = this;
        if (formid == 197 && alanadi == 'menutanimi') {
            var menutanimi = document.getElementById('menutanimi').getAttribute('ng-reflect-model');
            var trChars = {
                'çÇ': 'c',
                'ğĞ': 'g',
                'şŞ': 's',
                'üÜ': 'u',
                'ıİ': 'i',
                'öÖ': 'o'
            };
            for (var _i = 0, _a = Object.keys(trChars); _i < _a.length; _i++) {
                var key = _a[_i];
                menutanimi = menutanimi.replace(new RegExp('[' + key + ']', 'g'), trChars[key]);
            }
            var menu_seo = menutanimi.toString().toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                .replace(/\-\-+/g, '-') // Replace multiple - with single -
                .replace(/^-+/, '') // Trim - from start of text
                .replace(/-+$/, ''); // Trim - from end of text
            this.formverileri[0].menu_seo = menu_seo;
        }
        if (formid == 621 && alanadi == 'uretimrecetesi') {
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'uretimrecetesi') {
                        malzemeid = item[key];
                    }
                });
            });
            var presKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=recetedoldur&uretimemri=" + this.recordid + "&recetetipi=" + malzemeid;
            this.http.get(presKar).subscribe(function (data) {
                if (data[0].status == 'Success') {
                    _this.tabloyenile(formid, '1442');
                }
                _this.cdr.markForCheck();
            });
        }
        if (formid == 624 && alanadi == 'uretimyontemi') {
            var planpres = "";
            var malzemeid = "";
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'uretimyontemi') {
                        planpres = item[key];
                    }
                    if (key == 'malzemeid') {
                        malzemeid = item[key];
                    }
                });
            });
            var presKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=preskalipkarsilik&ispresid=" + planpres + "&malzemeid=" + malzemeid;
            console.log(presKar);
            this.http.get(presKar).subscribe(function (data) {
                var cities_psh = [];
                for (var k = 0; k < data.length; k++) {
                    cities_psh.push({ id: data[k].kalip_no, name: data[k].kalip_no, field: _this.blokalanlari['5'].alanadi });
                }
                _this.cities['9853'] = cities_psh;
            });
        }
        // mamul kartlarında ürün kodu girildiğinde alanların doldurulması
        if (formid == 254 && alanadi == 'malzemekodu') {
            var malzemekodu = "";
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'malzemekodu') {
                        malzemekodu = item[key];
                    }
                });
            });
            var kalıpkodu = malzemekodu.split('/');
            this.formverileri[0].kalip_kodu = kalıpkodu[0];
        }
        //Satış Fırsatları formunda firma seçildiğinde ilgili kişi gelmesi
        if (formid == 491 && alanadi == 'firma') {
            var firmaid = "";
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'firma') {
                        firmaid = item[key];
                    }
                });
            });
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;
            this.http.get(this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
                }
            });
        }
        //Satınalma formunda firma seçildiğinde ilgili kişi gelmesi
        if (formid == 459 && alanadi == 'ch_adi') {
            var firmaid = "";
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'ch_adi') {
                        firmaid = item[key];
                    }
                });
            });
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;
            this.http.get(this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
                }
            });
        }
        if (formid == 277 && alanadi == 'ch_adi') {
            var firmaid = "";
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'ch_adi') {
                        firmaid = item[key];
                    }
                });
            });
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;
            this.http.get(this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
                }
            });
        }
        if (formid == 231 && alanadi == 'musteri_adi') {
            var firmaid = "";
            var formverisi;
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    if (key == 'musteri_adi') {
                        firmaid = item[key];
                    }
                });
            });
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;
            this.http.get(this.SERVER_URL).subscribe(function (data) {
                formverisi = data;
                for (var i = 0; i <= formverisi.length - 1; i++) {
                    _this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
                }
            });
        }
    };
    EditrecordformComponent.prototype.rezervEt = function (rowid, formid) {
        var _this = this;
        var formum = formid;
        var kaydim = rowid;
        console.log(kaydim);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: 'Rezerv İşlemi',
            icon: 'question',
            text: "Lütfen yapmak istediğiniz işlemi seçiniz? ",
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            denyButtonColor: '#40C057',
            denyButtonText: 'Kısmi Rezervasyon',
            confirmButtonText: 'Tam Rezervasyon',
            cancelButtonText: 'Vazgeç'
        }).then(function (result) {
            if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    title: "Rezerv Miktarı",
                    text: "Fiili stoğun hepsi için 0 girin",
                    input: 'text',
                    showCancelButton: true,
                    confirmButtonText: 'Rezerve Et',
                    cancelButtonText: 'Vazgeç'
                }).then(function (result) {
                    if (result.value) {
                        var dataRezervYap = localStorage.getItem('url') + "angular/dataservis.php?page_id=rezervyap&turu=yap&kayitid=" + kaydim + '&miktar=' + result.value;
                        _this.http.get(dataRezervYap).subscribe(function (data) {
                            if (data[0].status == 'NO') {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                                    icon: 'error',
                                    title: 'Uyarı',
                                    text: 'Sipariş rezerv edilemedi,  fiili stok miktarı belirtilen miktarı karşılamamaktadır.',
                                    confirmButtonText: "Tamam",
                                });
                            }
                            else if (data[0].status == 'STOKERR') {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                                    icon: 'error',
                                    title: 'Uyarı',
                                    text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
                                    confirmButtonText: "Tamam",
                                });
                            }
                            else if (data[0].status == 'SIPERR') {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                                    icon: 'error',
                                    title: 'Uyarı',
                                    text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
                                    confirmButtonText: "Tamam",
                                });
                            }
                            else if (data[0].status == 'SUCREZ') {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                                    icon: 'success',
                                    title: 'Rezerve Edildi',
                                    text: 'Sipariş rezerve edildi, Kayda ait stok rezervi yapıldı.',
                                    confirmButtonText: "Tamam",
                                });
                            }
                        });
                    }
                });
            }
            if (result.isConfirmed) {
                var dataRezervYap = localStorage.getItem('url') + "angular/dataservis.php?page_id=rezervyap&turu=yap&kayitid=" + kaydim;
                _this.http.get(dataRezervYap).subscribe(function (data) {
                    if (data[0].status == 'NO') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                            icon: 'error',
                            title: 'Uyarı',
                            text: 'Sipariş rezerv edilemedi,  fiili stok miktarı sipariş miktarını karşılamamaktadır.',
                            confirmButtonText: "Tamam",
                        });
                    }
                    else if (data[0].status == 'STOKERR') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                            icon: 'error',
                            title: 'Uyarı',
                            text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
                            confirmButtonText: "Tamam",
                        });
                    }
                    else if (data[0].status == 'SIPERR') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                            icon: 'error',
                            title: 'Uyarı',
                            text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
                            confirmButtonText: "Tamam",
                        });
                    }
                    else if (data[0].status == 'SUCREZ') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                            icon: 'success',
                            title: 'Rezerve Edildi',
                            text: 'Sipariş rezerve edildi, Kayda ait stok rezervi yapıldı.',
                            confirmButtonText: "Tamam",
                        });
                    }
                });
            }
        });
    };
    EditrecordformComponent.prototype.tabloyenile = function (formids, blokid) {
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
        if (blokid == '870') {
            this.tabloyenile(formids, '1721');
        }
        if (blokid == '1726') {
            this.tabloyenile(formids, '1728');
        }
        this.cdr.markForCheck();
    };
    EditrecordformComponent.prototype.formalanlariyenile = function () {
        var _this = this;
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
    };
    EditrecordformComponent.prototype.showEditIcon = function () {
        if (this.editfieldicon == true) {
            this.editfieldicon = false;
        }
        else {
            this.editfieldicon = true;
        }
    };
    EditrecordformComponent.prototype.AlanOzellikleri = function (alanindex, formid) {
        // localStorage.setItem('rowformid',formid);
        // localStorage.setItem('rowrecordid',alanindex);
        var _this = this;
        var modalSat = this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_2__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
        modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formid, rowrecordid: alanindex, formtanimi: '', subformid: '' };
        modalSat.result.then(function (result) {
            if (result == 'Yenile') {
                _this.formalanlariyenile();
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EditrecordformComponent.prototype.sarjdoldur = function (formids, masterfield, blokid) {
        var _this = this;
        var planmiktar = "";
        var sarjmiktar = "";
        var torbakg = "";
        this.formverileri.forEach(function (item) {
            Object.keys(item).forEach(function (key) {
                if (key == 'planmiktar') {
                    planmiktar = item[key];
                }
                if (key == 'sarjmiktari') {
                    sarjmiktar = item[key];
                }
                if (key == 'torbakg') {
                    torbakg = item[key];
                }
            });
        });
        localStorage.setItem('rowformid', formids);
        localStorage.setItem('rowrecordid', "");
        var mg = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;
        this.http.get(mg).subscribe(function (data) {
            _this.donenveri = data;
            for (var i = 0; i < _this.donenveri.length; i++) {
                localStorage.setItem('mastervalue', _this.donenveri[i].mastervalue);
                var sgs = localStorage.getItem('url') + "angular/dataservis.php?page_id=sarjdoldur&recordid=" + _this.recordid + "&mastervalue=" + _this.donenveri[i].mastervalue + '&blokid=' + blokid + '&planmiktar=' + planmiktar + '&sarjmiktar=' + sarjmiktar + '&torbakg=' + torbakg;
                _this.http.get(sgs).subscribe(function (data2) {
                    _this.tabloyenile(formids, blokid);
                    if (data2[0].status == 'OK') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                            icon: "success",
                            title: 'Sarj işlemi başarılı!',
                            text: 'Sarj kayıtları oluşturuldu.',
                            customClass: {
                                confirmButton: 'btn btn-success'
                            },
                        });
                        setTimeout(function () {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
                        }, 1000);
                    }
                });
            }
        });
    };
    EditrecordformComponent.prototype.otomatikdoldur = function (formids, masterfield, blokid) {
        var _this = this;
        localStorage.setItem('rowformid', formids);
        localStorage.setItem('rowrecordid', "");
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.donenveri = data;
            for (var i = 0; i < _this.donenveri.length; i++) {
                localStorage.setItem('mastervalue', _this.donenveri[i].mastervalue);
                _this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=otomatikdoldur&formid=" + _this.formid + "&recordid=" + _this.recordid + "&mastervalue=" + _this.donenveri[i].mastervalue + '&blokid=' + blokid + '&ilktarih=' + _this.formverileri[0].baslamatarih + '&sontarih=' + _this.formverileri[0].bitistarihi;
                _this.http.get(_this.SERVER_URL).subscribe(function (data2) {
                });
            }
            _this.tabloyenile(formids, blokid);
        });
    };
    EditrecordformComponent.prototype.sarjgirdisionayla = function (idz, formid, blokid) {
        var _this = this;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=sarjgirdisionayla&formid=" + this.secilenform + "&recordid=" + idz + "&userid=" + localStorage.getItem('userid');
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            if (data[0].status == 'success') {
                _this.tabloyenile(formid, blokid);
            }
        });
    };
    EditrecordformComponent.prototype.sarjbittionay = function (id) {
        var idZ = id;
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: 'Onaylansın mı?',
            text: "Seçilen şarj girdisini onaylıyor musunuz?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2F8BE6',
            cancelButtonColor: '#F55252',
            confirmButtonText: 'Evet Onayla',
            cancelButtonText: 'Vazgeç',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ml-1'
            },
            buttonsStyling: false,
        }).then(function (result) {
            if (result.value) {
                durum.sarjgirdisionayla(idZ, durum.formid, '1530');
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    icon: "success",
                    title: 'Onaylama İşlemi Başarılı!',
                    text: 'Seçilen şarj girdisi onaylandı',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                });
                setTimeout(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
                }, 1000);
            }
        });
    };
    EditrecordformComponent.prototype.satirekle = function (formids, masterfield, blokid) {
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
            var modalSat = _this.modalService.open(_newrecordrow_newrecordrow_component__WEBPACK_IMPORTED_MODULE_2__.NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
            modalSat.componentInstance.Modaldata = { mastervalue: msv, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };
            modalSat.result.then(function (result) {
                if (result == 'Yenile') {
                    _this.tabloyenile(formids, blokid);
                }
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        });
    };
    EditrecordformComponent.prototype.yenikayit = function (formids) {
        localStorage.setItem('formid', this.secilenform);
        localStorage.setItem('formtanimi', this.formtanimi);
        localStorage.setItem('recordid', "");
        this.router.navigate(['/forms/newrecord']);
    };
    EditrecordformComponent.prototype.deleterecord = function (id, formids, blokid) {
        var durum = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    icon: "success",
                    title: 'Silme işlemi başarılı!',
                    text: 'Seçilen kayıt silindi',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    },
                });
                setTimeout(function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
                }, 1000);
            }
        });
    };
    EditrecordformComponent.prototype.vazgec = function () {
        this.router.navigate(['/listings/' + this.secilenform]);
    };
    EditrecordformComponent.prototype.ayniblokmu = function (s1, s2) {
        if (s1 === s2) {
            return true;
        }
        else {
            return false;
        }
    };
    EditrecordformComponent.prototype.degistir = function (filename) {
        if (filename != '') {
            return localStorage.getItem('url') + filename;
        }
        else {
            return localStorage.getItem('url') + 'no-photo-available.png';
        }
    };
    EditrecordformComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        var _this = this;
        if (this.formid == '445' && this.formtanimi == 'İş Emirleri') {
            this.setInxerval = setTimeout(function () {
                var ismerkezi = document.getElementById('ismerkezi').getAttribute('ng-reflect-model');
                ;
                var presKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=isistasyonfiltreli&ismerkez=" + ismerkezi;
                _this.http.get(presKar).subscribe(function (data) {
                    var cities_psh = [];
                    for (var k = 0; k < data.length; k++) {
                        cities_psh.push({ id: data[k].isistasyonu, name: data[k].isistasyonu, field: _this.blokalanlari['12'].alanadi });
                    }
                    _this.cities['7304'] = cities_psh;
                });
                clearInterval(_this.setInxerval);
            }, 3000);
        }
    };
    EditrecordformComponent.prototype.maliyethesapla = function (tur) {
        var _this = this;
        var miktar = "1";
        var tip = "Tip 1";
        this.formverileri.forEach(function (item) {
            Object.keys(item).forEach(function (key) {
                if (key == 'hesapmiktari') {
                    miktar = item[key];
                }
                if (key == 'recetetipimaliyet') {
                    tip = item[key];
                }
            });
        });
        if (tur == 'Satınalma') {
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=satinalmamaliyetleri&formid=" + this.formid + "&kayitid=" + this.recordid + "&miktar=" + miktar + "&tip=" + tip + "&blokid=1530";
            console.log(this.SERVER_URL);
            this.http.get(this.SERVER_URL).subscribe(function (data) {
                _this.tabloyenile(_this.formid, '1575');
            });
        }
    };
    EditrecordformComponent.prototype.getirs = function (id) {
        if (id == '610') {
            return this.tip1;
        }
        if (id == '614') {
            return this.tip2;
        }
        if (id == '616') {
            return this.tip3;
        }
        if (id == '618') {
            return this.tip4;
        }
    };
    EditrecordformComponent.prototype.getirs_2 = function (id) {
        if (id == '610') {
            return this.tip1_y;
        }
        if (id == '614') {
            return this.tip2_y;
        }
        if (id == '616') {
            return this.tip3_y;
        }
        if (id == '618') {
            return this.tip4_y;
        }
    };
    EditrecordformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getir(610);
        this.getir(614);
        this.getir(616);
        this.getir(618);
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
            _this.toplammaliyethesapla('');
        });
        var durum = this;
        //  eğer bunu kapatırsan edit record dediğinde alt tablo olanların verileri ve liste alanları gelmiyor.
        setTimeout(function () {
            for (var i = 0; i < durum.bloklar.length; i++) {
                //  durum.tabloyenile(this.formid,durum.bloklar[i].bokindex);
            }
        }, 1000);
    };
    EditrecordformComponent.prototype.excelModal = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        var durum = this;
        $('#frmExcelImport_genel').submit(function (e) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                title: 'Excelden Aktarılıyor... ',
                allowEscapeKey: false,
                allowOutsideClick: false,
                background: '#fafaff',
                timerProgressBar: true,
                showConfirmButton: false,
                onOpen: function () {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().showLoading();
                    durum.modalService.dismissAll();
                }
            });
            var menuid = $('#menu_id').val();
            var detailfield = $('#detailfield').val();
            var mastervalue = $('#recordid').val();
            var firmaid = "";
            if (menuid == '277') {
                firmaid = $('#ch_adi').val();
            }
            var tm = "";
            var b = "";
            $.ajax({
                url: localStorage.getItem('url') + 'angular/excelimport_genel.php?menu_id=' + menuid + '&masteralan=' + detailfield + '&mastervalue=' + mastervalue + '&firmaid=' + firmaid,
                type: 'POST',
                data: new FormData(this),
                processData: false,
                contentType: false,
                success: function (data) {
                    if (data == 'success') {
                        if (menuid == '513') {
                            durum.tabloyenile('513', '1125');
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                            icon: "success",
                            title: 'Excel import işlemi başarılı!',
                            text: 'Seçilen excel dosyası verileri içeri aktarıldı.',
                            customClass: {
                                confirmButton: 'btn btn-success'
                            },
                        });
                        setTimeout(function () {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().close();
                        }, 3000);
                    }
                    else {
                    }
                }
            });
            e.preventDefault();
        });
    };
    EditrecordformComponent.prototype.TabloModalAc = function (recordid, title, formid, formtanimi) {
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_7__.CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
        modalRef.componentInstance.id = recordid; // should be the id
        modalRef.componentInstance.data = { title: title, formid: formid, formtanimi: formtanimi }; // should be the data
        modalRef.result.then(function (result) {
            return result;
        }).catch(function (error) {
            console.log(error);
        });
    };
    EditrecordformComponent.prototype.parametreler = function (formids, masterfield, blokid) {
        var _this = this;
        localStorage.setItem('prosesid', formids);
        this.tabloyenile(this.formid, blokid);
        localStorage.setItem('rowformid', formids);
        localStorage.setItem('rowrecordid', "");
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;
        this.http.get(this.SERVER_URL).subscribe(function (data) {
            _this.donenveri = data;
            for (var i = 0; i < _this.donenveri.length; i++) {
                localStorage.setItem('mastervalue', _this.donenveri[i].mastervalue);
            }
            _this.modalService.open(app_newrecordrow_proses_newrecordrow_proses_component__WEBPACK_IMPORTED_MODULE_6__.NewrecordrowProsesComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true }).result.then(function (result) {
                if (result == 'Yenile') {
                    _this.tabloyenile(formids, blokid);
                }
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        });
    };
    EditrecordformComponent.prototype.control = function (veri) {
        if (veri == 'true') {
            return "<input type='checkbox'  class='form-control' disabled value='true'>";
        }
        else if (veri == 'false') {
            return '<input type="checkbox"  class="form-control" disabled value=false">';
        }
        else {
            return veri;
        }
    };
    EditrecordformComponent.prototype.vdfkarsiligivar = function (ved, forid, tit) {
        var result = this.TabloModalAc(this.recordid, ved.no, forid, tit);
        console.log(result);
    };
    EditrecordformComponent.prototype.urunkarsiligivar = function (veu, forid, tit) {
        var result = this.TabloModalAc(this.recordid, veu.no, forid, tit);
        console.log(result);
    };
    EditrecordformComponent.prototype.bekleyensiparisler = function (ed) {
        var _this = this;
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_7__.CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
        modalRef.componentInstance.id = this.recordid; // should be the id
        modalRef.componentInstance.data = { title: this.recordid, firmakodu: ed.firma_kodu }; // should be the data
        modalRef.result.then(function (result) {
            if (result == 'OK') {
                _this.tabloyenile('605', '1354');
            }
            else {
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    EditrecordformComponent.prototype.rezervlerdencek = function (ed, forid) {
        var _this = this;
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_7__.CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
        modalRef.componentInstance.id = this.recordid; // should be the id
        modalRef.componentInstance.data = { title: ed.siparis_no, formid: forid }; // should be the data
        modalRef.result.then(function (result) {
            if (result == 'OK') {
                _this.tabloyenile('278', '537');
            }
            else {
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    EditrecordformComponent.prototype.eksikAlanlar = function (id) {
        var cd = localStorage.getItem('url') + "eksikalanolustur.php?formid=" + id + "&userid=" + localStorage.getItem('userid');
        this.http.get(cd).subscribe(function (data) {
            if (data[0].status == 'OK') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    icon: 'success',
                    title: 'Başarılı',
                    text: 'Eksik Alanlar Oluşturuldu',
                    confirmButtonText: "Tamam",
                });
            }
        });
    };
    EditrecordformComponent.prototype.tabloOlustur = function (id) {
        var cd = localStorage.getItem('url') + "tabloolustur.php?formid=" + id + "&userid=" + localStorage.getItem('userid');
        this.http.get(cd).subscribe(function (data) {
            if (data[0].status == 'OK') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    icon: 'success',
                    title: 'Başarılı',
                    text: 'Tablo Oluşturuldu',
                    confirmButtonText: "Tamam",
                });
            }
        });
    };
    EditrecordformComponent.prototype.TypeWarning = function (message, header) {
        this.toastr.warning(message, header).onTap.subscribe(function () {
        });
    };
    EditrecordformComponent.prototype.kaydet = function () {
        var szort = "";
        var sesult = this.blokalanlari.filter(function (x) { return x.zorunlu == 'True'; });
        for (var i = 0; i < sesult.length; i++) {
            console.log($('#' + sesult[i].alanadi).hasClass('is-invalid'));
            if ($('#' + sesult[i].alanadi).hasClass('is-invalid') != true) {
                szort = szort + "_degil";
            }
            else {
                szort = "Var";
            }
        }
        if (szort != "Var") {
            var durum = this;
            var blokalan = this.blokalanlari;
            var secilen = this.secilenform;
            var postUrl = localStorage.getItem('url') + "angular/sender.php?form_id=" + this.formid + "&userid=" + localStorage.getItem('userid') + "&recordid=" + this.recordid;
            console.log(postUrl);
            var postData_1 = new FormData();
            this.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                    for (var i = 0; i < blokalan.length; i++) {
                        if (blokalan[i].verigiristuru != 'File(JPG)' && blokalan[i].alanadi == key) {
                            postData_1.append(key, item[key]);
                        }
                        if (blokalan[i].verigiristuru == 'File(JPG)' && blokalan[i].alanadi == key && blokalan[i].dosya != null) {
                            postData_1.append(key, blokalan[i].dosya, blokalan[i].alanadi);
                        }
                    }
                });
            });
            this.http.post(postUrl, postData_1, { responseType: 'text' }).subscribe({
                next: function (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                        icon: "success",
                        title: 'Kayıt Güncelleme başarılı!',
                        text: 'Kayıt Güncellendi',
                        confirmButtonText: 'Listeye Dön',
                        customClass: {
                            confirmButton: 'btn btn-success'
                        },
                    }).then(function (result) {
                        if (result.value) {
                            durum.router.navigate(['/listings/' + secilen]);
                        }
                    });
                },
                error: function (error) {
                    console.error('There was an error!', error);
                }
            });
        }
        else {
            this.TypeWarning('Zorunlu alanları doldurmadan formu kaydedemezsiniz.', 'Zorunlu Alan!');
        }
    };
    EditrecordformComponent.ɵfac = function EditrecordformComponent_Factory(t) { return new (t || EditrecordformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient)); };
    EditrecordformComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: EditrecordformComponent, selectors: [["app-editrecordform"]], viewQuery: function EditrecordformComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.DatatableComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__.SwiperDirective, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.tableResponsive = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        } }, decls: 348, vars: 7, consts: [[1, "row"], [1, "col-12"], [1, "content-header"], ["id", "basic-hidden-label-form-layouts"], [1, "row", "match-height"], ["id", "myTab", "role", "tablist", 1, "justify-content-start", "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["href", "javascript:;", "id", "notifications-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "notifications", "aria-selected", "false", 1, "nav-link", 3, "ngClass", "click"], [1, "ft-bell", "mr-1", "align-middle"], [1, "align-middle"], [1, "col-lg-12", "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], ["type", "button", "style", "float: right;", "class", " btn btn-outline-warning btn-xs ", 3, "click", 4, "ngIf"], [1, "card-content"], [1, "card-body"], [4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-12", 2, "display", "none"], [1, "form-group"], ["for", "hidden-label-form-1", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-1", "name", "cname", "placeholder", "Company Name", 1, "form-control", "round"], ["for", "hidden-label-form-2", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-2", "name", "ename", "placeholder", "Employee Name", 1, "form-control", "round"], ["for", "hidden-label-form-3", 1, "sr-only"], ["type", "number", "id", "hidden-label-form-3", "name", "eid", "placeholder", "Employee ID", 1, "form-control", "round"], [1, "form-group", "position-relative"], ["for", "hidden-label-form-4", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-4", "placeholder", "Joining Date", 1, "form-control", "pickadate", "round"], ["for", "hidden-label-form-5", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-5", "name", "sname", "placeholder", "Supervisor Name", 1, "form-control", "round"], ["for", "hidden-label-form-6", 1, "sr-only"], ["id", "hidden-label-form-6", "rows", "4", "name", "comment2", "placeholder", "Details", 1, "form-control", "round"], ["for", "hidden-label-form-7", 1, "sr-only"], ["type", "text", "id", "hidden-label-form-7", "name", "sign", "placeholder", "Signature", 1, "form-control", "round"], ["type", "button", 1, "btn", "btn-primary", "mr-2"], [1, "ft-check-square", "mr-1"], ["type", "button", 1, "btn", "btn-secondary"], [1, "ft-x", "mr-1"], ["id", "horizontal-form-layout", 2, "display", "none"], [1, "col-md-6", "col-12"], [1, "form-group", "row"], ["for", "horizontal-form-1", 1, "col-md-3", "col-form-label"], [1, "col-md-9"], ["type", "text", "id", "horizontal-form-1", "name", "first-name", 1, "form-control", "square"], ["for", "horizontal-form-2", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-2", "name", "last-name", 1, "form-control", "square"], [1, "row", "mb-md-3"], ["for", "horizontal-form-3", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-3", "name", "username", 1, "form-control", "square"], ["for", "horizontal-form-4", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-4", "name", "nick-name", 1, "form-control", "square"], ["for", "horizontal-form-5", 1, "col-md-3", "col-form-label"], ["type", "email", "id", "horizontal-form-5", "name", "e-mail", 1, "form-control", "square"], ["for", "horizontal-form-6", 1, "col-md-3", "col-form-label"], ["type", "text", "id", "horizontal-form-6", "name", "website", 1, "form-control", "square"], ["for", "horizontal-form-7", 1, "col-md-3", "col-form-label"], ["type", "number", "id", "horizontal-form-7", "name", "phone-number", 1, "form-control", "square"], ["for", "horizontal-form-9", 1, "col-md-3", "col-form-label"], ["id", "horizontal-form-9", "rows", "6", "name", "comment3", 1, "form-control", "square"], ["id", "action-form-layout", 2, "display", "none"], ["type", "button", 1, "btn", "btn-primary", "mb-2", "mr-2"], ["type", "button", 1, "btn", "btn-secondary", "mb-2"], ["for", "form-action-1"], ["type", "text", "id", "form-action-1", "name", "issue-title", 1, "form-control"], ["for", "form-action-2"], ["type", "text", "id", "form-action-2", "name", "opened-by", 1, "form-control"], [1, "form-row"], ["for", "form-action-3"], ["type", "text", "id", "form-action-3", "placeholder", "Opened Date", "name", "date-opened", 1, "form-control", "pickadate"], ["for", "form-action-4"], ["type", "text", "id", "form-action-4", "placeholder", "Closed Date", "name", "date-closed", 1, "form-control", "pickadate"], ["for", "form-action-5"], ["id", "form-action-5", "name", "priority", 1, "form-control"], ["value", "Low"], ["value", "Medium"], ["value", "High"], ["for", "form-action-6"], ["id", "form-action-6", "name", "status", 1, "form-control"], ["value", "Not started"], ["value", "Started"], ["value", "Started but not fixed"], ["value", "Fixed"], ["for", "form-action-7"], ["id", "form-action-7", "rows", "4", "name", "comment4", 1, "form-control"], ["id", "bordered-striped-form-layout", 2, "display", "none"], [1, "col-lg-6", "col-12"], [1, "form-bordered"], ["for", "bordered-form-1", 1, "col-md-3", "label-control"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "bordered-form-1", "name", "employeename", 1, "form-control"], [1, "form-control-position"], [1, "ft-user"], ["for", "bordered-form-2", 1, "col-md-3", "label-control"], ["type", "text", "id", "bordered-form-2", "name", "projectname", 1, "form-control"], [1, "ft-briefcase"], ["for", "bordered-form-3", 1, "col-md-3", "label-control"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "id", "bordered-form-3", "aria-label", "Amount (to the nearest dollar)", "name", "rateperhour", 1, "form-control"], [1, "input-group-append"], ["for", "bordered-form-4", 1, "col-md-3", "label-control"], ["type", "text", "id", "bordered-form-4", "name", "time", 1, "form-control", "pickatime"], [1, "ft-clock"], [1, "form-group", "row", "last", "mb-3"], ["for", "bordered-form-6", 1, "col-md-3", "label-control"], ["id", "bordered-form-6", "rows", "4", "name", "notes", 1, "form-control"], [1, "ft-file"], [1, "striped-rows"], ["for", "striped-form-1", 1, "col-md-3", "label-control"], ["type", "text", "id", "striped-form-1", "name", "fullname", "placeholder", "Full Name", 1, "form-control"], ["for", "striped-form-2", 1, "col-md-3", "label-control"], ["type", "text", "id", "striped-form-2", "name", "title", "placeholder", "Title", 1, "form-control"], ["for", "striped-form-3", 1, "col-md-3", "label-control"], ["type", "text", "id", "striped-form-3", "name", "company3", "placeholder", "Company", 1, "form-control"], ["for", "striped-form-4", 1, "col-md-3", "label-control"], ["type", "email", "id", "striped-form-4", "name", "email2", "placeholder", "E-mail", 1, "form-control"], ["for", "striped-form-5", 1, "col-md-3", "label-control"], ["type", "number", "id", "striped-form-5", "name", "contact", "placeholder", "Contact Number", 1, "form-control"], [1, "col-md-3", "label-control"], [1, "input-group", "col-md-9"], [1, "radio", "d-inline-block", "mr-2", "mb-1"], ["type", "radio", "id", "striped-form-6", "name", "striped-radio"], ["for", "striped-form-6"], [1, "radio", "d-inline-block"], ["type", "radio", "id", "striped-form-7", "checked", "", "name", "striped-radio"], ["for", "striped-form-7"], ["href", "javascript:;", "data-toggle", "tab", "role", "tab", "aria-controls", "general", "aria-selected", "true", 1, "nav-link", 3, "ngClass", "id", "click"], [1, "ft-settings", "align-middle"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-xs", 2, "float", "right", 3, "click"], [3, "ngClass"], [4, "ngIf"], [1, "col-12", "form-row"], [3, "class", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "flex-sm-row", "flex-column", "justify-content-end"], ["type", "button", "class", "btn btn-info mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning btn-sm mr-2", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "mr-sm-2", "mb-1", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "mb-1", 3, "click"], ["type", "button", "class", "btn btn-success mr-2", 3, "click", 4, "ngIf"], [1, "form-row", "col-12"], [1, "col-md-3"], [1, "form-group", "mb-2"], ["for", "basic-form-1"], ["type", "text", "readonly", "", "id", "basic-form-1", 1, "form-control", 3, "name", "value"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], ["id", "ngx-datatable-filter"], ["id", "swiper-coverflow", 4, "ngIf"], ["mymodal", ""], ["class", "form-group", 4, "ngIf"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows", "scrollbarH"], [3, "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Eylemler", 3, "width"], ["ngx-datatable-cell-template", ""], ["id", "swiper-coverflow"], [1, "swiper-coverflow", "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-slide"], ["alt", "banner", 1, "img-fluid", 3, "src"], ["type", "button", 1, "btn", "btn-outline-info", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-plus", "mr-1"], ["type", "button", "class", "btn btn-outline-success mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-primary mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "type", "button", "class", "btn btn-outline-warning mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-dark mr-2 mb-1", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-warning mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-info mr-2 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-cog"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-list-alt"], ["type", "button", "type", "button", 1, "btn", "btn-outline-warning", "mr-2", "mb-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", "mr-2", "mb-1", 3, "click"], [1, "btn", "btn-outline-success", "mr-2", "mb-1", 3, "click"], [1, "fa", "fa-barcode"], ["type", "button", 1, "btn", "btn-outline-warning", "mr-2", "mb-1", 3, "click"], ["type", "button", "placement", "top", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", "", "method", "post", "name", "frmExcelImport_genel", "id", "frmExcelImport_genel", "enctype", "multipart/form-data"], [1, "col-md-8"], ["type", "file", "name", "file", "id", "file", "accept", ".xls,.xlsx"], ["type", "hidden", "name", "menu_id", "id", "menu_id", 3, "value"], ["type", "hidden", "name", "recordid", "id", "recordid", 3, "value"], ["type", "hidden", "name", "detailfield", "id", "detailfield", 3, "value"], [1, "col-md-4", "text-center"], ["type", "submit", "id", "submit", "name", "import", 1, "btn", "btn-outline-secondary"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["for", "ngx-filter-ref"], ["type", "text", "placeholder", "Aranacak Kelime", 1, "form-control", "ml-2", "mt-2", 3, "name", "id", "ngModel", "ngModelChange"], [3, "name", "prop"], ["buttonsTemplate", ""], ["style", "text-align: center;", 4, "ngIf"], [2, "text-align", "center"], ["type", "checkbox", "checked", "", 1, ""], ["type", "checkbox", 1, ""], [1, "col-12", 2, "width", "240px"], ["type", "button", "placement", "top", "title", "Y\u00FCzde Gir", "class", "btn btn-primary  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-1 mb-1", "title", "", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success mr-1 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-warning mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-info mr-1 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger mr-1 mb-1", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "ngbTooltip", "\u00DCretim Y\u00F6ntemleri Git", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "VDF Formuna Git", "class", "btn btn-success  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Maliyet Analizi Git", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Kart\u0131na Git", "class", "btn btn-warning  mr-1 mb-1 ", 3, "click", 4, "ngIf"], ["type", "button", "placement", "top", "title", "Y\u00FCzde Gir", 1, "btn", "btn-primary", "mr-1", "mb-1", 3, "click"], [1, "ft-printer"], [1, "ft-percent"], ["type", "button", "title", "", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "icon-share-alt"], ["type", "button", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-check"], ["type", "button", "placement", "top", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-info", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", "mr-1", "mb-1", 3, "click"], [1, "fa", "fa-trash-o"], ["type", "button", "placement", "top", "ngbTooltip", "\u00DCretim Y\u00F6ntemleri Git", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], [1, "ft-box"], [1, "ft-book"], ["type", "button", "placement", "top", "title", "VDF Formuna Git", 1, "btn", "btn-success", "mr-1", "mb-1", 3, "click"], ["type", "button", "placement", "top", "title", "Maliyet Analizi Git", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], [1, "ft-disc"], ["type", "button", "placement", "top", "title", "Kart\u0131na Git", 1, "btn", "btn-warning", "mr-1", "mb-1", 3, "click"], ["ngx-datatable-footer-template", ""], [3, "class", 4, "ngIf"], ["class", "form-group mb-2 ", 4, "ngIf"], ["class", "form-group mb-2", 4, "ngIf"], ["class", "input-group mb-2 custom-control custom-radio", 4, "ngIf"], ["class", "form-group mb-2", "style", "display: none;", 4, "ngIf"], [1, "ft-edit-2", 2, "font-size", "15px", 3, "hidden", "click"], ["type", "text", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["required", "ngModel"], ["class", "form-text text-muted danger", 4, "ngIf"], [1, "form-text", "text-muted", "danger"], ["required", "", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "id", "ngClass", "items", "closeOnSelect", "ngModel", "name", "change", "ngModelChange"], ["type", "color", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], [1, "input-group", "mb-2", "custom-control", "custom-radio"], [1, "col-md-12", 2, "white-space", "nowrap"], ["class", "radio radio-primary radio-sm d-inline-block mr-2 mb-1", 4, "ngFor", "ngForOf"], [1, "radio", "radio-primary", "radio-sm", "d-inline-block", "mr-2", "mb-1"], ["type", "radio", "ngModel", "", 1, "", 3, "value", "ngModel", "id", "name", "ngModelChange"], [1, "", 3, "for"], ["type", "checkbox", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "time", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "text", "readonly", "", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "text", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], [1, "form-group", "mb-2", 2, "display", "none"], ["type", "hidden", 1, "form-control", 3, "id", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "password", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], [1, "form-control", 3, "id", "ngModel", "name", "ngModelChange"], ["type", "date", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], ["type", "datetime-local", "required", "", 1, "form-control", 3, "id", "ngClass", "ngModel", "name", "value", "change", "ngModelChange"], [1, "media"], ["alt", "", "height", "auto", "width", "100%", 1, "rounded", "mr-3", 3, "src"], ["type", "file", 1, "file-upload", 3, "id", "ngModel", "name", "ngModelChange", "change"], ["src", "../../assets/img/pdf-photo.png", "alt", "", "height", "auto", "width", "50%", 1, "rounded", "mr-3", 3, "click"], ["type", "file", 1, "file-upload", 3, "id", "name", "change"], ["type", "file", "id", "select-files", "hidden", "", 3, "ngModel", "name", "ngModelChange"], ["required", "", "multiple", "true", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "ngClass", "items", "id", "closeOnSelect", "name", "ngModel", "ngModelChange"], ["required", "", "bindLabel", "name", "bindValue", "id", "placeholder", "Se\u00E7iniz", 3, "id", "ngClass", "items", "closeOnSelect", "name", "ngModel", "change", "ngModelChange"], ["type", "button", 1, "btn", "btn-info", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-warning", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "mr-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "mr-2", 3, "click"]], template: function EditrecordformComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, EditrecordformComponent_li_7_Template, 5, 5, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function EditrecordformComponent_Template_a_click_9_listener() { return ctx.setActiveTab("notifications"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Kay\u0131t K\u00FCnyesi");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Kay\u0131t D\u00FCzenle ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, EditrecordformComponent_button_18_Template, 2, 1, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, EditrecordformComponent_form_21_Template, 17, 7, "form", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Hidden Label Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "label.sr-only");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " to hide a label and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "input.round");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, " for round inputs. You may add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "placeholder");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, " attribute.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Company Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Employee Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](48, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Employee ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](52, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "Supervisor Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "label", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "textarea", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "label", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Signature");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "section", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Horizontal Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "label.col-form-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, " for proper padding to a label. You can align label to right side by using ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, ".text-right");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, ". Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "input.square");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, " for square inputs.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](97, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "label", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](100, "First Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "input", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "label", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Last Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "input", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "label", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, "Username");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](115, "input", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "label", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, "Nick Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](121, "input", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "label", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](126, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](127, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](128, "input", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "label", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Website");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](133, "input", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "label", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](136, "Contact Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](138, "input", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](139, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "label", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](142, "About Project");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](143, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](144, "textarea", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](146, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](149, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "section", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](154, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](155, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "Form Actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](159, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](160, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](161, "You can use form actions on top & bottom and can also align them inside the form.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](162, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](164, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "button", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](167, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "label", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](171, "Issue Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](172, "input", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](173, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](174, "label", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "Opened By");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](176, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](179, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "label", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](181, "Issue Opened");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](182, "input", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](185, "label", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "Issue Closed");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](187, "input", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "label", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](190, "Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](191, "select", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "option", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](193, "Low");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](194, "option", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "Medium");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](196, "option", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](197, "High");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](198, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](199, "label", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "select", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](202, "option", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](203, "Not started");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](204, "option", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](205, "Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "option", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "Started but not fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "option", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](209, "Fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "label", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "Comment");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](213, "textarea", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](215, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](218, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](219, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](220, "section", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](221, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](222, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](225, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](226, "Bordered Form");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](227, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](228, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](232, "form.form-bordered .form-group");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](233, " for bordered form and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](234, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](235, "label.label-control");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](236, " for proper padding to a label.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](237, "form", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "label", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](240, "Employee Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](241, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](242, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](243, "input", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](244, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](245, "i", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](246, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](247, "label", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](248, "Project Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](249, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](250, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](251, "input", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](253, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](255, "label", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](256, "Rate Per Hour");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](257, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](258, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](259, "div", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "span", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](261, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](262, "input", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](263, "div", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "span", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](265, ".00");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](266, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](267, "label", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](268, "Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](269, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](270, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](271, "input", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](272, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](273, "i", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](274, "div", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "label", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](276, "Notes");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](277, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](279, "textarea", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](280, "div", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](281, "i", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](282, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](283, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](284, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](285, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](286, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](287, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](288, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](289, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](290, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](292, "Striped Row");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](293, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](294, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](295, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](296, "Use ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](297, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, "form.striped-rows .form-group");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](299, " for striped form and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](300, "code");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](301, "label.label-control");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](302, " for proper padding to a label. You can use bordered and striped both at the same time.");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](303, "form", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](304, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](305, "label", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](306, "Full Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](307, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](308, "input", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](309, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](310, "label", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](311, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](312, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](313, "input", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](314, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](315, "label", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](316, "Company");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](317, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](318, "input", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](319, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](320, "label", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](321, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](322, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](323, "input", 118);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](324, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](325, "label", 119);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](326, "Contact Number");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](327, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](328, "input", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](329, "div", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](330, "label", 121);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](331, "Existing Customer");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](332, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](333, "div", 122);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](334, "div", 123);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](335, "input", 124);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](336, "label", 125);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](337, "Yes");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](338, "div", 126);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](339, "input", 127);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](340, "label", 128);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](341, "No");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](342, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](343, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](344, "Save");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](345, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](346, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](347, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.formtanimi);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.grupbasliklari);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c2, ctx.activeTab === "notifications"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userroles == "00038" || ctx.userroles == "00037");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.formverileri);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.DataTableColumnCellDirective, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_17__.SwiperDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.DatatableFooterDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.DataTableFooterTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__.Ng2SearchPipe], styles: [".selectRef {\n  padding-right: 35px;\n  padding-top: 0px;\n  padding-left: 0px;\n  height: 39.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRyZWNvcmRmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFBb0IsZ0JBQUE7RUFBaUIsaUJBQUE7RUFBa0IsY0FBQTtBQUkzRCIsImZpbGUiOiJlZGl0cmVjb3JkZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RSZWZ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O3BhZGRpbmctdG9wOiAwcHg7cGFkZGluZy1sZWZ0OiAwcHg7aGVpZ2h0OjM5LjVweDtcclxufSJdfQ== */", "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #F7F7F8;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: transparent;\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #975AFF;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active i {\n  color: #fff !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: transparent;\n  color: #342E49;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a {\n  margin: 0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a {\n  padding: 1.1rem 1.035rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a i {\n  position: absolute;\n  top: 0.55rem;\n  left: 0.4rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li.disabled a {\n  color: #757575;\n  background-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a {\n  color: #975AFF;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a:hover {\n  background-color: #EEEEEE !important;\n  border-color: #E0E0E0;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled).active a {\n  z-index: 3;\n  color: #fff;\n  background-color: #975AFF !important;\n  border-color: #975AFF;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled):hover a {\n  background-color: #F5F5F5;\n  font-weight: inherit;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a {\n  position: relative;\n  display: block;\n  padding: 1.1rem 0.75rem;\n  margin: 0 0 0 5px;\n  line-height: 0.1;\n  background-color: #F5F5F5;\n  border: 1px solid #E0E0E0;\n  border-radius: 0.35rem;\n  font-size: 15px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a i {\n  padding: 0;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  line-height: 24px;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: inline;\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: inline;\n    display: initial;\n  }\n}html body.layout-dark .datatable-footer .pager li.disabled a {\n  color: #626164;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-header {\n  background-color: #101010;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer {\n  color: #B2B1B5;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: #1E1E1E;\n  border-color: #474748;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: #1E1E1E;\n}html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: #1E1E1E !important;\n  border-color: #474748 !important;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-header {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: rgba(238, 238, 238, 0.2);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled) a {\n  color: #D6D5D8;\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: rgba(0, 0, 0, 0.12);\n}html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvYm9vdHN0cmFwLnNjc3MiLCJkYXRhdGFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLENDQWhCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFLEVBQUUsQ0FDSjtJQUNFLHdCQUF3QixFQUFFLENBQzVCOzs7SUFLRSxzQkFBc0IsRUFBRSxDQUMxQjtJQUNFLGdCQUFnQixFQUFFLENBQ3BCO0lBQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUNBQWlDLEVBQUUsQ0FDckM7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUUsQ0FDN0I7SUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtNQUNFLG1CQUFtQixFQUFFLENBQ3JCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRSxDQUMzQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDL0I7OztJQU9FLGFBQWE7SUFDYixtQkFBbUI7SUFJbkIsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBRSxDQUNsQjs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBRSxDQUNwQjs7TUFFRSxhQUFhLEVBQUUsQ0FDbkI7O0lBRUUsVUFBVSxFQUFFLENBQ2Q7Ozs7SUFJRSxrQkFBa0IsRUFBRSxDQUN0QjtJQUNFLGNBQWM7SUFDZCxnQkFBZ0IsRUFBRSxDQUNsQjtNQUNFLG9CQUFvQjtNQUNwQiw0QkFBNEIsRUFBRSxDQUNoQztNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUIsRUFBRSxDQUN2QjtRQUNFLGVBQWUsRUFBRSxDQUNuQjtRQUNFLFlBQVksRUFBRSxDQUNoQjtRQUNFLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLGVBQWUsRUFBRSxDQUNuQjs7UUFFRSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUUsQ0FDdEI7UUFDRSxpQkFBaUIsRUFBRSxDQUNyQjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0UsbUJBQW1CLEVBQUUsQ0FDdkI7UUFDRSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVMsRUFBRSxDQUNYO1VBQ0UsUUFBUSxFQUFFLENBQ1o7VUFDRSxPQUFPLEVBQUUsQ0FDYjtRQUNFLGVBQWUsRUFBRSxDQUN2QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UscUJBQXFCLEVBQUUsQ0FDekI7TUFDRSxrQkFBa0IsRUFBRSxDQUN0QjtNQUtFLGFBQWE7TUFPYixzQkFBc0IsRUFBRSxDQUMxQjtNQUNFLGFBQWEsRUFBRSxDQUNmO1FBS0UsYUFBYSxFQUFFLENBQ3JCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjLEVBQUUsQ0FDaEI7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFdBQVcsRUFBRSxDQUNmO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYSxFQUFFLENBQ2pCO01BQ0UsYUFBYTtNQUNiLGlCQUFpQixFQUFFLENBQ25COztRQUVFLFVBQVU7UUFDVixTQUFTO1FBQ1QscUJBQXFCO1FBQ3JCLGdCQUFnQixFQUFFLENBQ3BCOztRQUVFLGFBQWEsRUFBRSxDQUNqQjtRQUNFLGVBQWU7UUFDZixxQkFBcUIsRUFBRSxDQUN6QjtRQUNFLG1CQUFtQixFQUFFLENDck03Qjs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBOztFQUVFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdDQUErQjtFQUEvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQyxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCxDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDQUVBO0VBQ0UsY0FBYztBQUNoQixDRXBHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0VGLENEREU7RUFDRSx3QkFBQTtBQ0dKLENERkk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNJTixDREhNO0VBQ0UsaUJBQUE7QUNLUixDREFJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0VOLENERE07RUFDRSxxQ0FBQTtBQ0dSLENERE07RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNHUixDRERNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1IsQ0RBSTtFQUdFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0FOLENER0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKLENERUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FOLENERUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNBTixDREVRO0VBQ0UsZ0JBQUE7QUNBVixDREljO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0ZoQixDRFFNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNOUixDRFFNOzs7O0VBSUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05SLENEYU07RUFDRSxpQkFBQTtBQ1hSLENBM0VNO0VBQ0UsdUJBQUE7QUE4RVIsQ0EzRU07RUFDRSx5QkM4REU7QURlVixDQTNFUTtFQUNFLGdCQUFBO0FBNkVWLENBekVNO0VBQ0UscUJDc0VPO0FES2YsQ0F6RVE7RUFDRSw2QkFBQTtFQUFBLHlCQUFBO0FBMkVWLENBeEVRO0VBQ0UseUJDREE7QUQyRVYsQ0F4RVU7RUFDRSxzQkFBQTtBQTBFWixDQXJFVTtFQUNFLGlCQUFBO0FBdUVaLENBbkVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBcUVWLENBaEVNO0VBQ0UsNkJBQUE7RUFDQSxjQzBCSztBRHdDYixDQS9EVTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBaUVaLENBL0RZO0VBQ0UsU0FBQTtBQWlFZCxDQS9EYztFQUNFLFNBQUE7QUFpRWhCLENBMURnQjtFQUNFLHdCQUFBO0FBNERsQixDQTFEa0I7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBNERwQixDQXREZ0I7RUFDRSxjQUFBO0VBQ0EseUJDc0hPO0FEOUR6QixDQW5EZ0I7RUFDRSxjQzlEUjtBRG1IVixDQW5Ea0I7RUFDRSxvQ0FBQTtFQUNBLHFCQ0ZMO0FEdURmLENBaERrQjtFQUNFLFVBQUE7RUFDQSxXQ3RHWjtFRHVHWSxvQ0FBQTtFQUNBLHFCQzNFVjtFRDRFVSxvQkFBQTtBQWtEcEIsQ0E5Q2dCO0VBQ0UseUJDc0ZGO0VEckZFLG9CQUFBO0FBZ0RsQixDQTVDYztFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQzJFQTtFRDFFQSx5QkFBQTtFQUNBLHNCQzVCQTtFRDZCQSxlRTdHQztBRjJKakIsQ0E1Q2dCO0VBQ0UsVUFBQTtBQThDbEIsQ0FyQ1E7RUFDRSx1QkFBQTtBQXVDVixDQWhDTTs7OztFQUlFLGlCQUFBO0FBa0NSLENBM0JBO0VBQ0U7SUFDRSxhQUFBO0VBOEJGOztFQTNCQTtJQUNFLDZCQUFBO0lBQ0Esb0JBQUE7RUE4QkY7QUFDRixDQTNCQTtFQUNFO0lBQ0UsZUFBQTtJQUFBLGdCQUFBO0VBNkJGOztFQTFCQTtJQUNFLGFBQUE7RUE2QkY7QUFDRixDQTFCQTtFQUNFO0lBQ0UsYUFBQTtFQTRCRjs7RUF6QkE7SUFDRSxlQUFBO0lBQUEsZ0JBQUE7RUE0QkY7QUFDRixDQXRCRTtFQUNFLGNFdElnQjtBRjhKcEIsQ0FsQk07RUFDRSx5QkVsSlE7QUZzS2hCLENBakJNO0VBQ0UscUJFaEpVO0FGbUtsQixDQWhCTTtFQUNFLGNFekpRO0FGMktoQixDQWRVOztFQUVFLHlCRTlKRTtFRitKRixxQkUzSk07QUYyS2xCLENBWlk7RUFDRSx5QkVwS0E7QUZrTGQsQ0FYWTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7QUFhZCxDQUZNO0VBQ0UscUNFcEtXO0FGd0tuQixDQURNO0VBQ0Usc0NFektVO0FGNEtsQixDQUFNO0VBQ0UsY0VsTFE7QUZvTGhCLENBRVU7O0VBRUUscUNFbExPO0VGbUxQLGlDRW5MTztBRm1MbkIsQ0FJWTtFQUNFLGNFOUxFO0FGNExoQixDQUtZO0VBQ0UscUNFNUxLO0FGeUxuQixDQU1ZO0VBQ0UsZ0RBQUE7RUFDQSw0Q0FBQTtBQUpkIiwiZmlsZSI6ImRhdGF0YWJsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuYm9vdHN0cmFwIHRhYmxlIHRoZW1lXG4qL1xuXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4M2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVtcHR5LXJvdyB7XG4gICAgICAkYWxlcnQtcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nLXkgJGFsZXJ0LXBhZGRpbmcteDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xyXG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xyXG5AaW1wb3J0IFwiLi4vY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi9jb3JlL2NvbG9ycy9wYWxldHRlLXZhcmlhYmxlc1wiO1xyXG5cclxuLm5neC1kYXRhdGFibGUge1xyXG4gICYuYm9vdHN0cmFwIHtcclxuICAgICYuY29yZS1ib290c3RyYXAge1xyXG4gICAgICAmLmhlaWdodC03MC12aCB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuXHJcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG5cclxuICAgICAgICAmLmRhdGF0YWJsZS1yb3ctZXZlbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsLWxhYmVsIHtcclxuICAgICAgICAgIC5jZWxsLWxpbmUtaGVpZ2h0IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuICAgICAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgICAgICAgIC5wYWdlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIGEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCxcclxuICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQsXHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtIDEuMDM1cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMC41NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRncmV5LWNvbG9yLCBkYXJrZW4tMSk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWRpc2FibGVkLWJnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRwYWdpbmF0aW9uLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWJnO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gJHBhZ2luYXRpb24tcGFkZGluZy14O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC4xO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICRwYWdpbmF0aW9uLWJvcmRlci13aWR0aCBzb2xpZCAkcGFnaW5hdGlvbi1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1yb290O1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5oZWFkZXItaGVpZ2h0LTUwIHtcclxuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuXHJcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxyXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcclxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxyXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG1lZGlhIHF1ZXJ5IGZvciBTbWFsbCAmIE1lZGl1bSBkZXZpY2VzXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wYWdlLWNvdW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGF0YXRhYmxlLXBhZ2VyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5kZXNrdG9wLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmRlc2t0b3AtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gIH1cclxufVxyXG5cclxuaHRtbCBib2R5LmxheW91dC1kYXJrIHtcclxuXHJcbiAgLy8gZm9yIGRhcmsgYW5kIHRyYW5zcGFyZW50IGxheW91dHNcclxuICAuZGF0YXRhYmxlLWZvb3RlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XHJcbiAgICBjb2xvcjogJGRsLWRpc2FibGVkLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGRhcmsgbGF5b3V0XHJcbiAgJjpub3QoLmxheW91dC10cmFuc3BhcmVudCkge1xyXG4gICAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcclxuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1kYXJrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogJGRsLXRleHQtY29sb3I7XHJcblxyXG4gICAgICAgIC5wYWdlciBsaSB7XHJcblxyXG4gICAgICAgICAgJi5kaXNhYmxlZCBhLFxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkbC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRsLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGZvciB0cmFuc3BhcmVudCBsYXlvdXRcclxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XHJcbiAgICAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xyXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWJvcmRlci1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICAgLnBhZ2VyIGxpIHtcclxuXHJcbiAgICAgICAgICAmLmRpc2FibGVkIGEsXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkdGwtdGV4dC1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciBhIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XHJcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcclxuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xyXG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcclxuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xyXG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XHJcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcclxuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMwMDAgIWRlZmF1bHQ7XHJcblxyXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kZ3JheXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXHJcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXHJcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXHJcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXHJcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXHJcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXHJcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXHJcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXHJcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJHByaW1hcnk6ICM5NzVBRkYgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAjNDBDMDU3ICFkZWZhdWx0O1xyXG4kaW5mbzogIzJGOEJFNiAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICNGNzdFMTcgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICNGNTUyNTIgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICM2MTZEODkgIWRlZmF1bHQ7XHJcbiRsaWdodDogI0RCREVFNSAhZGVmYXVsdDtcclxuJGRhcms6ICMxQTA1MUQgIWRlZmF1bHQ7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXHJcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxyXG4gICAgXCJsaWdodFwiOiAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogJGRhcmtcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIFNwYWNpbmdcclxuXHJcbiRzcGFjZXI6IDEuNXJlbTtcclxuJHNwYWNlcnM6IChcclxuICAwOiAwLFxyXG4gIDE6IChcclxuICAgICRzcGFjZXIgKiAwLjI1XHJcbiAgKSxcclxuICAyOiAoXHJcbiAgICAkc3BhY2VyICogMC41XHJcbiAgKSxcclxuICAzOiAkc3BhY2VyLFxyXG4gIDQ6IChcclxuICAgICRzcGFjZXIgKiAxLjVcclxuICApLFxyXG4gIDU6IChcclxuICAgICRzcGFjZXIgKiAzXHJcbiAgKVxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gQm9keVxyXG4vL1xyXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXHJcbiRib2R5LWJnOiAjRjdGN0Y4O1xyXG4kYm9keS1jb2xvcjogIzM0MkU0OSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAwLjM1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC42cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIk1vbnRzZXJyYXRcIiwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIixBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4xICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICMxNzEwMkYgIWRlZmF1bHQ7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1tdXRlZDogI0JEQkRCRCAhZGVmYXVsdDtcclxuXHJcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogMS4xcmVtICFkZWZhdWx0O1xyXG5cclxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIFRhYmxlc1xyXG4vL1xyXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXHJcblxyXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAxLjE1cmVtIDJyZW0gIWRlZmF1bHQ7XHJcbiR0YWJsZS1hY2NlbnQtYmc6IHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbi8vXHJcbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuMzc1cmVtICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEJ1dHRvbnNcclxuLy9cclxuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXHJcblxyXG4kYnRuLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kYnRuLXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcclxuJGJ0bi1saW5lLWhlaWdodDogMS41cmVtICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIEZvcm1zXHJcblxyXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4ycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAxLjUgIWRlZmF1bHQ7XHJcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XHJcbiRpbnB1dC1jb2xvcjogIzc1Nzg3ZCAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBub25lICFkZWZhdWx0O1xyXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0OiBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgM3B4KSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAyLjZyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vL1xyXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuXHJcblxyXG4vLyBOYXZzXHJcblxyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICM5RTlFOUUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tcGFkZGluZy15OiAwICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6IDAgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMTBweCAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAyMHB4ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBpbmhlcml0ICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tYmc6ICNGNUY1RjUgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogMCAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI0VFRUVFRSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogIzc1NzU3NSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNFMEUwRTAgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYXJkc1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6IDEuNXJlbTtcclxuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbTtcclxuJGNhcmQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRib2R5LWJnICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjZyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBUb2FzdHNcclxuXHJcbiR0b2FzdC1wYWRkaW5nLXk6IDAuNDVyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6IC04cHggOHB4IDE0cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFkZWZhdWx0O1xyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQmFkZ2VzXHJcblxyXG4kYmFkZ2UtZm9udC1zaXplOiA4NSUgIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjRyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNjY2NjY2NjY3cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxzXHJcblxyXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbi8vIEFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuOTVyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1wYWRkaW5nLXg6IDEuNDVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBQcm9ncmVzcyBiYXJzXHJcblxyXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYmc6ICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAkYm9keS1iZyAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcclxuXHJcbi8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuXHJcbi8vIENvZGVcclxuXHJcbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xyXG4kY29kZS1jb2xvcjogJGRhbmdlciAhZGVmYXVsdDtcclxuXHJcbi8vIFV0aWxpdGllc1xyXG5cclxuJG92ZXJmbG93czogYXV0bywgaGlkZGVuLCB2aXNpYmxlLCBzY3JvbGwgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyB2ZXJ0aWNhbCBtZW51XHJcbiRtZW51LWV4cGFuZGVkLXdpZHRoLXNtOiAyMjBweDtcclxuJG1lbnUtZXhwYW5kZWQtd2lkdGg6IDI1MHB4O1xyXG4kbWVudS1leHBhbmRlZC13aWR0aC1sZzogMjgwcHg7XHJcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogNjBweDtcclxuXHJcbi8vIEhvcml6b250YWwgTWVudVxyXG4kbWVudS1hY3RpdmUtYmc6ICNFN0U5RUM7XHJcblxyXG4kZm9udC1zaXplLXJvb3Q6IDE1cHg7XHJcblxyXG4vLyBBdmF0YXJcclxuJGF2YXRhci1iZzogI0UwRTBFMDtcclxuJGF2YXRhci10ZXh0LWNvbG9yOiAjNjE2MTYxO1xyXG4kYXZhdGFyLXNpemU6IDMycHg7XHJcbiRhdmF0YXItc2l6ZS14bDogNzBweDtcclxuJGF2YXRhci1zaXplLWxnOiA1MHB4O1xyXG4kYXZhdGFyLXNpemUtbWQ6IDQwcHg7XHJcbiRhdmF0YXItc2l6ZS1zbTogMjRweDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweDtcclxuJGF2YXRhci1zdGF0dXMtc2l6ZS1sZzogMTdweDtcclxuXHJcbi8vIFNoYWRvd3NcclxuJHNoYWRvdy11bWJyYS1vcGFjaXR5OiAwLjIgIWRlZmF1bHQ7XHJcbiRzaGFkb3ctcGVudW1icmEtb3BhY2l0eTogMC4xNCAhZGVmYXVsdDtcclxuJHNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XHJcblxyXG4vL3ZhcmlhYmxlcyBmb3Igc29jaWFsXHJcbiRzb2NpYWwtZmFjZWJvb2s6ICMzYjU5OTg7XHJcbiRzb2NpYWwtdHdpdHRlcjogIzU1YWNlZTtcclxuJHNvY2lhbC1waW50ZXJlc3Q6ICNjYzIxMjc7XHJcbiRzb2NpYWwtZ29vZ2xlOiAjZGQ0YjM5O1xyXG4kc29jaWFsLWxpbmtlZGluOiAjMDk3NmI0O1xyXG4kc29jaWFsLWRyaWJiYmxlOiAjZWE0Yzg5O1xyXG4kc29jaWFsLWdpdGh1YjogIzMzMzMzMztcclxuJHNvY2lhbC15b3V0dWJlOiAjZTUyZDI3O1xyXG4kc29jaWFsLWluc3RhZ3JhbTogIzEyNTY4ODtcclxuJHNvY2lhbC1yZWRkaXQ6ICNmZjQ1MDA7XHJcbiRzb2NpYWwtdHVtYmxyOiAjMzU0NjVjO1xyXG4kc29jaWFsLWJlaGFuY2U6ICMxNzY5ZmY7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gVmFyaWFibGVzIGZvciBEYXJrIExheW91dFxyXG4kZGFyay1zdHlsZTogdHJ1ZTtcclxuJGJnLWNvbG9yLWRhcms6ICMxMDEwMTA7XHJcbiRkbC10ZXh0LWNvbG9yOiAjQjJCMUI1O1xyXG4kZGwtYmctY29sb3I6ICMxRTFFMUU7XHJcbiRkbC1oZWFkaW5ncy1jb2xvcjogI0JGQkVDMjtcclxuJGRsLXRleHQtbXV0ZWQtY29sb3I6ICM4NDg0ODQ7XHJcbiRkbC1kaXNhYmxlZC1jb2xvcjogIzYyNjE2NDtcclxuJGRsLWJvcmRlci1jb2xvcjogIzQ3NDc0ODtcclxuJGRsLWNhcmQtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gVmFyaWFibGVzIEZvciBUcmFuc3BhcmVudCBMYXlvdXRcclxuXHJcbiR0bC10ZXh0LWNvbG9yOiAjRDZENUQ4O1xyXG4kdGwtaGVhZGluZ3MtY29sb3I6ICNFOUU5RUE7XHJcbiR0bC1iZy1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiR0bC10ZXh0LW11dGVkLWNvbG9yOiAjQzNDMkM1O1xyXG4kdGwtZGlzYWJsZWQtY29sb3I6ICM5RTlFOUU7XHJcbiR0bC1ib3JkZXItY29sb3I6IHJnYmEoI2VlZSwgMC4yKTtcclxuJHRsLWNhcmQtYmctY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEyKTtcclxuXHJcbiRiZy1nbGFzcy1oaWJpc2N1czogbGluZWFyLWdyYWRpZW50KFxyXG4gIHRvIHJpZ2h0IGJvdHRvbSxcclxuICAjZjA1ZjU3LFxyXG4gICNjODNkNWMsXHJcbiAgIzk5MjQ1YSxcclxuICAjNjcxMzUxLFxyXG4gICMzNjA5NDBcclxuKTtcclxuJGJnLWdsYXNzLXB1cnBsZS1waXp6YXp6OiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgdG8gcmlnaHQgYm90dG9tLFxyXG4gICM2NjJkODYsXHJcbiAgIzhiMmE4YSxcclxuICAjYWUyMzg5LFxyXG4gICNjZjFkODMsXHJcbiAgI2VkMWU3OVxyXG4pO1xyXG4kYmctZ2xhc3MtYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudChcclxuICB0byByaWdodCBib3R0b20sXHJcbiAgIzE0NGU2OCxcclxuICAjMDA2ZDgzLFxyXG4gICMwMDhkOTIsXHJcbiAgIzAwYWQ5MSxcclxuICAjNTdjYTg1XHJcbik7XHJcbiRiZy1nbGFzcy1lbGVjdHJpYy12aW9sZXQ6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjNGEwMGUwLFxyXG4gICM2MDBkZTAsXHJcbiAgIzcxMTllMSxcclxuICAjODAyM2UxLFxyXG4gICM4ZTJkZTJcclxuKTtcclxuJGJnLWdsYXNzLXBvcnRhZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjOTdhYmZmLFxyXG4gICM3OThjZTUsXHJcbiAgIzViNmVjYixcclxuICAjM2I1MWIxLFxyXG4gICMxMjM1OTdcclxuKTtcclxuJGJnLWdsYXNzLXR1bmRvcmE6IGxpbmVhci1ncmFkaWVudChcclxuICB0byBsZWZ0IHRvcCxcclxuICAjZWY0NjczLFxyXG4gICNmZmM4NDZcclxuKTtcclxuIl19 */"], encapsulation: 2 });
    return EditrecordformComponent;
}());



/***/ }),

/***/ 70204:
/*!*********************************************************!*\
  !*** ./src/app/editrecordform/editrecordform.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditrecordformModule": function() { return /* binding */ EditrecordformModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-swiper-wrapper */ 92320);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 53600);
/* harmony import */ var _editrecordform_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editrecordform-routing.module */ 51867);
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper/swiper.component */ 91693);
/* harmony import */ var _editrecordform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editrecordform.component */ 63868);
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ 67361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ 9824);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 51863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);












var EditrecordformModule = /** @class */ (function () {
    function EditrecordformModule() {
    }
    EditrecordformModule.ɵfac = function EditrecordformModule_Factory(t) { return new (t || EditrecordformModule)(); };
    EditrecordformModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EditrecordformModule });
    EditrecordformModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.ScrollbarHelper, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DimensionsHelper, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.ColumnChangesService
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
                _editrecordform_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditrecordformRoutingModule,
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule
            ]] });
    return EditrecordformModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EditrecordformModule, { declarations: [_editrecordform_component__WEBPACK_IMPORTED_MODULE_2__.EditrecordformComponent,
        _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__.CrudModalComponent, _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_1__.SwiperComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
        _editrecordform_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditrecordformRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_3__.PipeModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 91693:
/*!***********************************************************!*\
  !*** ./src/app/editrecordform/swiper/swiper.component.ts ***!
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



/***/ })

}]);
//# sourceMappingURL=src_app_editrecordform_editrecordform_module_ts.js.map