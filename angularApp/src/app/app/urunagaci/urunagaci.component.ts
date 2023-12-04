import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, ViewChild, ChangeDetectionStrategy, Inject,  LOCALE_ID  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbModal, NgbTooltip, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import {formatNumber} from '@angular/common';


import { Location } from '@angular/common';

import { EditrecordrowComponent } from '../editrecordrow/editrecordrow.component';
import { NewrecordrowComponent } from '../newrecordrow/newrecordrow.component';
declare var $: any;
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { count, map } from 'rxjs/operators';
import { th } from 'date-fns/locale';
import { NewrecordrowProsesComponent } from 'app/newrecordrow_proses/newrecordrow_proses.component';
import { formatDate } from '@angular/common';
import { BarcodeFormComponent } from 'app/barcodeform/barcodeform.component';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-urunagaci',
  templateUrl: './urunagaci.component.html',
  styleUrls: ['./urunagaci.component.scss'],
  encapsulation: ViewEncapsulation.None,


})
export class urunagaciComponent implements OnInit {
 
  constructor(@Inject(LOCALE_ID) public locale: string,private location: Location, public toastr: ToastrService, private cdr: ChangeDetectorRef, private modalService: NgbModal, private router: Router, private http: HttpClient, private route: ActivatedRoute, private http2: HttpClient,) {




  }
ngOnInit() {
  
}


} 