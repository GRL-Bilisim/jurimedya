import { Component, Output, EventEmitter, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  p1: any;

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
 public form: FormGroup;
 excelsecimli :boolean=true;
 tablolugoster:boolean=true;
  formid: any;
  formbasligi: string="";
  columnsGelen: any;
  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      checkArray: this.formBuilder.array([], [Validators.required])
    })
  }




  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  customChkboxOnSelect(e) {
    console.log(e.selected);

    this.tabloSecililer=e.selected;

    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }
  submitForm() {
    this.activeModal.close(this.form.value);
  }
  makinevardiyalariata(vardiyalar){


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=makinevardiyalarata&makineler=" + this.p1 + "&vardiyalar=" +vardiyalar + "&userid="+localStorage.getItem('userid');
    console.log(this.SERVER_URL);
    this.http.get<any>(this.SERVER_URL).subscribe(data => {

    });
  }


  secilileriEkle(){

    if(this.tabloSecililer.length>0 && this.formid=='206'){  
        var durum=this;
        swal.fire({
          title: 'Seçilen Vardiyalar Makinelere Aktarılacaktır!',
          text: "Değişiklik geri alınamayacaktır!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#2F8BE6',
          cancelButtonColor: '#F55252',
          confirmButtonText: 'Tamam',
          cancelButtonText: 'İptal',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
          },
          buttonsStyling: false,
        }).then(function (result) {
          if (result.value) {
            var vardiyalar = "";
            for (let i = 0; i < durum.tabloSecililer.length; i++) {
             if(vardiyalar==''){
              vardiyalar = durum.tabloSecililer[i].vardiyakodu;
             }else{
              vardiyalar = vardiyalar+';'+durum.tabloSecililer[i].vardiyakodu;
             }           
            }
           
            durum.makinevardiyalariata(vardiyalar);
            

            swal.fire({
              icon: "success",
              title: 'İşlem Başarılı!',
              text: 'Vardiya atama işlemi başarılı',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
            setTimeout(function () {
              swal.close();
              durum.activeModal.close('success');
              durum.chkBoxSelected=[];
            }, 1000);
         
          }
        });

    }
  else{

    swal.fire({
      icon: "warning",
      title: 'Seçim Yapmanız Gerekmektedir!',
      confirmButtonText: 'Tamam',
      text: 'Silme işlemi için kayıtları seçmeniz gerekmektedir.',
      customClass: {
        confirmButton: 'btn btn-warning'
      }
    });
}
 

  }

  ngOnInit() {


    for (let key in this.data) {

      let child = this.data[key];
      this.formbasligi=this.data['title'];
      this.columnsGelen = this.data['columns'];
      var formuid = this.data['formid'];
      this.formid = this.data['formid'];
      this.p1 = this.data['parameter'];

console.log(this.columnsGelen);
console.log(formuid);

if(this.columnsGelen==undefined && formuid!=undefined){
  this.tablolugoster=false;
  this.excelsecimli=true;
}
if(this.columnsGelen!=undefined && formuid==undefined){
  this.tablolugoster=true;
  this.excelsecimli=false;
}



if(this.data['formid']!='' && this.data['formid']!='401' ){

  this.formbasligi=this.data['formtanimi'];
  
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid="+formuid;
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.columns=data;
    });
      
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+formuid+"&parametor="+this.p1+"&donem="+localStorage.getItem('donem');
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.rows=data;
    });
  
}
else if(this.data['formid']=='401'){
  this.formbasligi="Stok Rezervasyonları";
  var sipid = this.data['title'];

this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=622";

this.http.get<any>(this.SERVER_URL).subscribe(data => {
this.columns=data;
});

this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=622&siparisid="+sipid+"&donem="+localStorage.getItem('donem');
this.http.get<any>(this.SERVER_URL).subscribe(data => {
this.rows=data;
});
}
  



    }




    // this.buildItemForm(this.data);
  }


}
