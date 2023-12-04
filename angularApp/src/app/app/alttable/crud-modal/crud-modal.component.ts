import { Component, Output, EventEmitter,HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import * as swalFunctions from '../../shared/data/sweet-alerts';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.scss']
})


export class CrudModalComponent implements OnInit {
  title: any;
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
var durum = this;
      swal.fire({
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
            swal.close();
  
        }, 1000);
        }
    });
  }
}


  @ViewChild(DatatableComponent) table: DatatableComponent;
  public SelectionType = SelectionType;
  public rows;
  chkBoxSelected:any=[];
  swal = swalFunctions;
  @Input() id: number;
  @Input() data: any;
  SERVER_URL: string;
  veriler: any;
// column header
columns = [
  { name: 'Name', prop: 'full_name' },
  { name: 'Email', prop: 'email' },
  { name: 'Age', prop: 'age' },
  { name: 'Salary', prop: 'salary' }
];


public ColumnMode = ColumnMode;
  tabloSecililer: any=[];
  recordid: any;
  formid: any;
  formbasligi: string="";
  p1: any;

  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}






  customChkboxOnSelect(e) {
    console.log(e.selected);

    this.tabloSecililer=e.selected;

    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }

  uretimyontemiktar(kalipid){
    var durum=this;
            swal.fire({
              title: 'Üretim Oluştur',
              html: `
                 <input type="text" id="miktar" class="swal2-input" placeholder="Miktar Giriniz">`,
              confirmButtonText: 'Üretim Oluştur',
              focusConfirm: false,
              preConfirm: () => {
                const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
                if (!miktar) {
                  swal.showValidationMessage(`Miktar Giriniz!!!`)
                }
                return { miktar: miktar }
              }
            }).then((result) => {
              var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=planuretimolustur&siparisid="+durum.id+"&miktar="+result.value.miktar+"&kalipid="+kalipid;
              durum.http.get<any>(url).subscribe(data => {
                if(data[0].status=='Success'){
                  durum.activeModal.close('success');
                }
              });
            })
  }

  secilileriEkle(){

    if(this.tabloSecililer.length>0){
      
          var durum=this;
        
            swal.fire({
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
                
                if(durum.formid=='250'){
                  durum.uretimyontemiktar(durum.tabloSecililer[0].yontemno);
                }

            
              }
            });

        this.chkBoxSelected=[];

    }
  else{

    swal.fire({
      icon: "warning",
      title: 'Seçim Yapmanız Gerekmektedir!',
      confirmButtonText: 'Tamam',
      text: 'İşlemler için kayıtları seçmeniz gerekmektedir.',
      customClass: {
        confirmButton: 'btn btn-warning'
      }
    });
}
 

  }

 
  ngOnInit() {


    for (let key in this.data) {

      let child = this.data[key];
this.recordid = this.data['recordid'];
this.title = this.data['title'];
this.formid = this.data['formid'];
this.p1 = this.data['parameter'];



if(this.data['formid']!=''){


  this.formbasligi=this.data['formtanimi'];
  
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid="+this.formid;
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.columns=data;
    });
    
    if(this.formid=='250'){
      this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formid+"&planmalzemeid="+this.p1+"&donem="+localStorage.getItem('donem');
      this.http.get<any>(this.SERVER_URL).subscribe(data => {
        this.rows=data;
      });
    }else{
      this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formid+"&parametor="+this.p1+"&donem="+localStorage.getItem('donem');
      this.http.get<any>(this.SERVER_URL).subscribe(data => {
        this.rows=data;
      });
    }


  
}



    }




    // this.buildItemForm(this.data);
  }


}
