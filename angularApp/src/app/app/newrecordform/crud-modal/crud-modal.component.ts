import { Component, Output,HostListener, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
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
  title: any;

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
              
                if (durum.formid=='401') 
                {
                  
                  for (let i = 0; i < durum.tabloSecililer.length; i++) {
                    var ch_kodu = durum.tabloSecililer[i].ch_kodu;
                    var kalemid = durum.tabloSecililer[i].kalemid;
                    var firma_siparis_no = durum.tabloSecililer[i].firma_siparis_no;
                    var sip_id = durum.tabloSecililer[i].sip_id;
                    var koli_ici_adet = durum.tabloSecililer[i].koli_ici_adet;
                    var ambalaj_adi = durum.tabloSecililer[i].ambalaj_adi;
                    var kalanmiktars = durum.tabloSecililer[i].kalanmiktars;
                    var kod_urun = durum.tabloSecililer[i].kod_urun;
                   var master = durum.id;

                    const girdikal=localStorage.getItem('url') + "angular/dataservis.php?page_id=cekisiparisekle&ch_kodu="+ch_kodu+"&kod_urun="+kod_urun+"&kalemid="+kalemid+"&firma_siparis_no="+firma_siparis_no+"&sip_id="+sip_id+"&koli_ici_adet="+koli_ici_adet+"&ambalaj_adi="+ambalaj_adi+"&kalanmiktars="+kalanmiktars+"&mastervalue="+master+"&userid="+localStorage.getItem('userid');
                    durum.http.get<any>(girdikal).subscribe(data => {
              
                        if(data[0].status=='OK'){
                          durum.activeModal.close('OK');

                      swal.fire({
                        icon: "success",
                        title: 'Ekleme Başarılı',
                        text: 'Çeki listesi ekleme başarılı.',
                        customClass: {
                          confirmButton: 'btn btn-warning'
                        },
                      });
                                      }


                    });


  
                  }  
                  
                }
                else{
                     for (let i = 0; i < durum.tabloSecililer.length; i++) {
                  var imt = durum.tabloSecililer[i].index_malzemetedarikcileri;
                  var satinalmano = durum.tabloSecililer[i].satinalmano;
                  var adet = durum.tabloSecililer[i].siparismiktari;
                  var sipariskg = durum.tabloSecililer[i].sipariskg;
                  var master = durum.id;
                  var insatinalma = durum.tabloSecililer[i].index_satinalma;
                      

                  const girdikal=localStorage.getItem('url') + "angular/dataservis.php?page_id=girdikabulicerik&imt="+imt+"&satinalno="+satinalmano+"&adet="+adet+"&sipariskg="+sipariskg+"&mastervalue="+master+"&userid="+localStorage.getItem('userid')+"&indexsa="+insatinalma;
                    durum.http.get<any>(girdikal).subscribe(data => {
              
                        if(data[0].status=='OK'){
                          durum.activeModal.close('OK');

                      swal.fire({
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
                }
             
                setTimeout(function () {
                  swal.close();
        
              }, 1000);
              }
            });
         


      this.chkBoxSelected=[];

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


  

  secilileriSil(){

    if(this.tabloSecililer.length>0){
      
        var durum=this;
        
            swal.fire({
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
              
                for (let i = 0; i < durum.tabloSecililer.length; i++) {
                 var index_stokhareketleri = durum.tabloSecililer[i].index_stokhareketleri;
                  const stoksil=localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=394&recordid="+index_stokhareketleri+"&userid="+localStorage.getItem('userid');
                    durum.http.get<any>(stoksil).subscribe(data => {
              
                        if(data[0].status=='OK'){
                          durum.activeModal.close('OK');

        swal.fire({
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
                  swal.close();
        
              }, 1000);
              }
            });
         


      this.chkBoxSelected=[];

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
this.recordid = this.data['recordid'];
this.title = this.data['title'];
this.formid = this.data['formid'];
this.p1 = this.data['parameter'];



if(this.data['formid']!='' && this.data['formid']!='278' ){

  this.formbasligi=this.data['formtanimi'];
  
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid="+this.formid;
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.columns=data;
    });
      
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formid+"&parametor="+this.p1;
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.rows=data;
    });
  
}
else if(this.data['formid']=='278'){
 
  this.formbasligi='Stok Hareketleri';
  
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=622";
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.columns=data;
    });
      
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=622&siparisid="+this.data['title'];
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.rows=data;
    });
    
  
  
  }

else if(this.data['firmakodu']!=''){

  this.formbasligi='Kalemler';

  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink=bekleyen-siparisler";

  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.columns=data;

  });


  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=608&firmaid="+this.data['firmakodu'];


  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.rows=data;
  
  });
  
}



 



    }




    // this.buildItemForm(this.data);
  }


}
