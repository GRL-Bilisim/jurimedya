import { Component, OnInit, ChangeDetectorRef, Input, ViewEncapsulation, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
import { ToastrService } from 'ngx-toastr';

import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';


@Component({
  selector: 'app-barcodeform',
  templateUrl: './barcodeform.component.html',
  styleUrls: ['./barcodeform.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None,


})
export class BarcodeFormComponent implements OnInit {

  availableDevices: MediaDeviceInfo[];
  deviceCurrent: MediaDeviceInfo;
  deviceSelected: string;
  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  torchEnabled = false;
  scannerEnabled=true;
  data: any;
  formbasligi: any;
  formid: any;
  closeResult: string;
  mastervalue: any;
  id:any;
  SERVER_URL:any;


  constructor(public toastr: ToastrService, private cdr: ChangeDetectorRef, private modalService: NgbModal, public activeModal: NgbActiveModal, private router: Router, private http: HttpClient, private route: ActivatedRoute, private http2: HttpClient,) {



  }
  clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;

    console.log(resultString);

    if(this.formid=='666'){

      
      this.modalService.dismissAll();
  

      var kod = this.qrResultString.split('_');

      // localStorage.setItem('rowformid', this.formid);
      // localStorage.setItem('rowrecordid', '');
      // localStorage.setItem('nakilmalzemeid',kod[1]);



      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid=" + this.id+"&lotno="+kod[0];
      console.log(this.SERVER_URL);

     
      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        this.closeResult = `Dismissed ${this.getDismissReason('Onaylandı')}`;

      });

     


    }

    if(this.formid=='598'){


        this.modalService.dismissAll();
  

      var kod = this.qrResultString.split('_');

      // localStorage.setItem('rowformid', this.formid);
      // localStorage.setItem('rowrecordid', '');
      // localStorage.setItem('nakilmalzemeid',kod[1]);

      var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

      modalSat.componentInstance.Modaldata = {mastervalue:this.mastervalue,rowformid:this.formid,rowrecordid:'',formtanimi:'',subformid:'',nakilmalzemeid:kod[1]};
      
 

      modalSat.result.then((result) => {



     }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
  
    }

  

  }

  
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return `with: ${reason}`;
  }
}
  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }
  ngOnInit() {

  //  alert('BB');
    for (let key in this.data) {

      let child = this.data[key];
      this.formbasligi = this.data['formtanimi'];
      this.formid = this.data['formid'];
      this.mastervalue = this.data['mastervalue'];
      this.id=this.data['kayitid'];


      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=sevkedildi&kayitid=" + this.id+"&lotno=46";
    
     // alert(this.SERVER_URL);

   
    }

  }

} 