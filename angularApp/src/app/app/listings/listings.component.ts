import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { DatatableData } from './data/datatables.data';
import { Router, ActivatedRoute } from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NewrecordrowComponent } from '../newrecordrow/newrecordrow.component';
declare var $: any;
import swal from 'sweetalert2';
import { DragulaService } from 'ng2-dragula';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UPKComponent } from 'app/uretimplanlama/upk.component';
import { formatDate } from '@angular/common';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { AltComponent } from 'app/alttable/alt.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BarcodeFormComponent } from 'app/barcodeform/barcodeform.component';
import { ToastrService } from 'ngx-toastr';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-datatables',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTablesComponent implements OnInit {



  swal = swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;
  secilenfirma:any;
  aylikfilt = true;
  gunlukfilt = true;
  haftalikfilt = true;

  public filteredRows;
  secilenuretim:any;
  closeResult: string;
  bolgeayrimi:any;
  TermArama:any;
  secilenform: any;
  formtanimi: any;
  formbilgileri: any[];
  formid: any;
  sutunlar: any;
  leN: any="yok";
  filterTerm: any;
  yilsecimi:any;
  ucaysecimi:any;
  aysecimi:any;
  // column header
  columns = [
    { Name:'',name: 'Name', prop: 'full_name' },
    { Name:'',name: 'Email', prop: 'email' },
    { Name:'',name: 'Age', prop: 'age' },
    { Name:'',name: 'Salary', prop: 'salary' }
  ];

  // multi Purpose datatable Row data
  public multiPurposeRows = DatatableData;

  public ColumnMode = ColumnMode;

  SERVER_URL = localStorage.getItem('url');

  userroles = localStorage.getItem('unvani');
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @ViewChild('tableResponsive') tableResponsive: any;
  @ViewChild(UPKComponent) child: UPKComponent;
  @ViewChild(AltComponent) childalt: AltComponent;

  public expanded: any = {};
  firmalistesi: { id: string; name: string; }[];

  public editing = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;

  // server side row data
  public serverSideRowData;

  // private
  private tempData = [];
  private multiPurposeTemp = [];
  tabloSecililer: any = [];
  listefiltresi: any;
  alanSelected: any;
  cihazmobilmi: any;
  uretimlistesi: { id: string; name: string; }[];
  haftalar: { id: string; name: string; }[]=[{"id":"0","name":"Bu Hafta"},{"id":"1","name":"Hafta (-1)"},{"id":"2","name":"Hafta (-2)"},{"id":"3","name":"Hafta (-3)"},{"id":"4","name":"Hafta (-4)"},{"id":"5","name":"Hafta (-5)"},{"id":"6","name":"Hafta (-6)"},{"id":"7","name":"Hafta (-7)"},{"id":"8","name":"Hafta (-8)"},{"id":"9","name":"Hafta (-9)"},{"id":"10","name":"Hafta (-10)"},{"id":"11","name":"Hafta (-11)"},{"id":"12","name":"Hafta (-12)"},{"id":"13","name":"Hafta (-13)"},{"id":"14","name":"Hafta (-14)"},{"id":"15","name":"Hafta (-15)"},{"id":"16","name":"Hafta (-16)"},{"id":"17","name":"Hafta (-17)"},{"id":"18","name":"Hafta (-18)"},{"id":"19","name":"Hafta (-19)"},{"id":"20","name":"Hafta (-20)"},{"id":"21","name":"Hafta (-21)"},{"id":"22","name":"Hafta (-22)"},{"id":"23","name":"Hafta (-23)"},{"id":"24","name":"Hafta (-24)"},{"id":"25","name":"Hafta (-25)"},{"id":"26","name":"Hafta (-26)"},{"id":"27","name":"Hafta (-27)"},{"id":"28","name":"Hafta (-28)"},{"id":"29","name":"Hafta (-29)"},{"id":"30","name":"Hafta (-30)"},{"id":"31","name":"Hafta (-31)"},{"id":"32","name":"Hafta (-32)"},{"id":"33","name":"Hafta (-33)"},{"id":"34","name":"Hafta (-34)"},{"id":"35","name":"Hafta (-35)"},{"id":"36","name":"Hafta (-36)"},{"id":"37","name":"Hafta (-37)"},{"id":"38","name":"Hafta (-38)"},{"id":"39","name":"Hafta (-39)"},{"id":"40","name":"Hafta (-40)"},{"id":"41","name":"Hafta (-41)"},{"id":"42","name":"Hafta (-42)"},{"id":"43","name":"Hafta (-43)"},{"id":"44","name":"Hafta (-44)"},{"id":"45","name":"Hafta (-45)"},{"id":"46","name":"Hafta (-46)"},{"id":"47","name":"Hafta (-47)"},{"id":"48","name":"Hafta (-48)"},{"id":"49","name":"Hafta (-49)"},{"id":"50","name":"Hafta (-50)"},{"id":"51","name":"Hafta (-51)"},{"id":"52","name":"Hafta (-52)"},{"id":"53","name":"Hafta (-53)"}]
  yillar: { id: string; name: string; }[]=[{"id":"2022","name":"2022"},{"id":"2021","name":"2021"},{"id":"2020","name":"2020"}];
  ucaylar: { id: string; name: string; }[]=[{"id":"0","name":"Oca-Şub-Mar"},{"id":"1","name":"Nisan-May-Hazirn"},{"id":"2","name":"Temmuz-Ağsts-Eylül"},{"id":"3","name":"Ekim-Kasım-Aralık"}];
  aylar: { id: string; name: string; }[]=[{"id":"1","name":"Ocak"},{"id":"2","name":"Şubat"},{"id":"3","name":"Mart"},{"id":"4","name":"Nisan"},{"id":"5","name":"Mayıs"},{"id":"6","name":"Haziran"},{"id":"7","name":"Temmuz"},{"id":"8","name":"Ağustos"},{"id":"9","name":"Eylül"},{"id":"10","name":"Ekim"},{"id":"11","name":"Kasım"},{"id":"12","name":"Aralık"},];
  blokalanlari: any;
  secilenhamur: any;
  hamurlistesi: { id: string; name: string; }[];
  tarihfiltre: any="";
  rowsalt: any;
  columnsalt: any;
  bloklar_y: any;
  sutunlars: any;
  formverileri: any;
  satirlar: any;
  formid_alt: any;
  altformdata: any;
  altformsutunlar: { id: string; name: string; }[];
  rowCanBeBeExpanded: boolean=true;
  rowdetaildata: any;

  /**
   * inlineEditingUpdate
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdate(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
  }

  barkodyazdir(id)
  {
   window.open("https://www.jurimedya.com/maratonerpservices/barkodyazdir.php?tipi=uretimbarkodu&malzemeid="+id, '_blank');
    
  }

  toplubarkodyazdir(){

    if(this.tabloSecililer.length>0){
      
        var durum=this;
        var malzemeler="";
            
                for (let i = 0; i < durum.tabloSecililer.length; i++) {
                  if (malzemeler=='')
                  {
                    malzemeler='index_malzemeler|'+durum.tabloSecililer[i].id;
  
                  }
                  else
                  {
                    malzemeler=malzemeler+" or index_malzemeler|"+durum.tabloSecililer[i].id;
   
                  }
  
                }
  
                window.open("https://www.jurimedya.com/maratonerpservices/barkodyazdir.php?tipi=toplubarkodyazdir&sorgu="+malzemeler, '_blank');
       
              
         
      
      this.chkBoxSelected=[];
  
    }
  else{
  
    swal.fire({
      icon: "warning",
      title: 'Seçim Yapmanız Gerekmektedir!',
      confirmButtonText: 'Tamam',
      text: 'Barkod işlemi için kayıtları seçmeniz gerekmektedir.',
      customClass: {
        confirmButton: 'btn btn-warning'
      }
    });
  }
  
  
  }

  paletbarkodyazdir(id)
  {
   window.open("https://www.jurimedya.com/maratonerpservices/barkodyazdir.php?tipi=paletbarkodu&id="+id, '_blank');
    
  }
  

  /**
   * filterUpdate
   *
   * @param code
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rows.filter(function (d) {

      return d.key.toLowerCase().indexOf(val) !== -1 || !val;

    });

    // update the rows

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }



  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    
    this.tableRowDetails.rowDetail.toggleExpandRow(row);

  }
  TypeInfo(message, header, id) {
    this.toastr.info(message, header, {"progressBar":true, "timeOut": 2000, "extendedTimeOut": 2000 })
   

}
  /**
   * toggleExpandRowResponsive
   *
   * @param row
   */
  toggleExpandRowResponsive(row) {
    this.tableResponsive.rowDetail.toggleExpandRow(row);
  }

  /**
   * customChkboxOnSelect
   *
   * @param { selected }
   */
  customChkboxOnSelect(e) {

    this.tabloSecililer = e.selected;


    if(this.leN=='var'){
      this.childalt.blokgetir(this.formid);
      this.childalt.seciliRec(e.selected,'707',this.formid);
    }


    
  
    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }

firmaterminyazdir(id){

    window.open("https://www.jurimedya.com/maratonerpservices/firmaterminyazdir.php?sipid=" + id, '_blank');
  
}

formulyazdir(id){
  window.open("https://www.jurimedya.com/maratonerpservices/formulyazdir.php?id=" + id, '_blank');

}


toplureddetsecililier(){
  if (this.tabloSecililer.length > 0) {
    var durum = this;
    swal.fire({
      title: "Seçilileri toplu reddet",
      text: "Finans satınalma teklif reddi verilsin mi ? Nedenini Giriniz !",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
        var secililer = '';
        for (let i = 0; i < durum.tabloSecililer.length; i++) {
          secililer = durum.tabloSecililer[i].index_satinalma_teklif_icerigi + ',' + secililer;
        }
        var urlTeklifAktar = localStorage.getItem('url') + "angular/dataservis.php?page_id=finanstekliftoplureddet&secililer=" + secililer+"&rednedeni="+result.value+"&userid="+localStorage.getItem('userid');
        durum.http.get<any>(urlTeklifAktar).subscribe(data => {

        });

        swal.fire({
          icon: "success",
          title: 'Reddetme işlemi başarılı!',
          text: 'Seçilen kayıtlar reddedildi',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        });

        setTimeout(function () {
          swal.close();

        }, 1000);
      }
    });

    this.tabloyenile();

    this.chkBoxSelected = [];
  }
}

  teklifeAktar() {
    if (this.tabloSecililer.length > 0) {
      var durum = this;
      swal.fire({
        title: 'Teklife Dönüştürülsün mü ?',
        text: "Seçitiğiniz kayıtlar teklife dönüştürülecektir. geri alınamayacaktır!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Dönüştür',
        cancelButtonText: 'İptal',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {
          var secililer = '';
          for (let i = 0; i < durum.tabloSecililer.length; i++) {
            secililer = durum.tabloSecililer[i].id + ',' + secililer;
          }
          var urlTeklifAktar = localStorage.getItem('url') + "angular/dataservis.php?page_id=teklifedonustur&secililer=" + secililer;
          durum.http.get<any>(urlTeklifAktar).subscribe(data => {
            console.log(data);
            if (data != '') {

              localStorage.setItem('secilenform', data[0].SecilenForm);

              // localStorage.setItem('formid', data[0].FormId);
              // localStorage.setItem('formtanimi', data[0].Formtanimi);
              // localStorage.setItem('recordid', "");
              localStorage.setItem('aktarilanCh', data[0].FirmaAdi);
              localStorage.setItem('aktarilanTermin', data[0].TerminTarihi);
              // durum.router.navigate(['/newrecordform/' + data[0].TeklifId]);

              durum.router.navigate(['/newrecordform/'+data[0].FormId+'/'+data[0].Formtanimi+'/'+data[0].TeklifId]);


            }

          });




          swal.fire({
            icon: "success",
            title: 'Aktarma işlemi başarılı!',
            text: 'Seçilen kayıtlar dönüştürüldü',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });

          setTimeout(function () {
            swal.close();

          }, 1000);
        }
      });

      this.tabloyenile();

      this.chkBoxSelected = [];
    }
  }
  isemirleriolustur(id){
    var durum = this;
  
  
    swal.fire({
      title: 'Seçilen tarihler için plan kesinleştirme',
      text: "Seçilen tarihler için plana göre iş emirleri oluşturulsun mu!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Evet Kesinleştir',
      cancelButtonText: 'Vazgeç',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
  
        durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=isemirleriolustur&rowid="+id+"&userid="+localStorage.getItem('userid');
    console.log(durum.SERVER_URL);
    durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
  
      if(data[0].status=='success'){
        swal.fire({
          icon: "success",
          title: 'İşlem Başarılı!',
          text: 'Kesinleştirme işlemi başarılı!',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        });
  
        setTimeout(function () {
          swal.close();
  
        }, 1000);
        durum.tabloyenile();
  
      }
  
    });
  }
    });
  }

  TabloModalAc(recordid, title, formid, formtanimi, p1) {
    const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
    modalRef.componentInstance.id = recordid; // should be the id
    modalRef.componentInstance.data = { title: title, formid: formid, formtanimi: formtanimi, parameter: p1 }; // should be the data
    modalRef.result.then((result) => {


    }).catch((error) => {
      console.log(error);
    });
  }
  
  makinetakvimiolustur(ilktarih,sontarih,makineler){

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=makinetakvimolustur&ilktarih=" + ilktarih + "&sontarih=" + sontarih + "&makineler=" + makineler+"&userid="+localStorage.getItem('userid');
    console.log(this.SERVER_URL);
    this.http.get<any>(this.SERVER_URL).subscribe(data => {

    });
  }

  TakvimOlustur(ilktarih,sontarih){

    if (this.tabloSecililer.length > 0 && ilktarih!=''  &&  sontarih!=''    ) {

      var durum = this;

      swal.fire({
        title: 'Seçilen Makinelere Mesai Takvimi Oluşturulacak ?',
        text: "Seçtiğiniz makinelere girdiğiniz tarihler arasında mesai takvimi oluşturulacaktır. Geri alınamayacaktır!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Evet, Oluştur',
        cancelButtonText: 'İptal',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {
          var makineler = "";
          for (let i = 0; i < durum.tabloSecililer.length; i++) {
            if(makineler==''){
              makineler = durum.tabloSecililer[i].id;
             }else{
              makineler = makineler+';'+durum.tabloSecililer[i].id;
             } 
          }
          durum.makinetakvimiolustur(ilktarih,sontarih,makineler);


          swal.fire({
            icon: "success",
            title: 'İşlem Başarılı!',
            text: 'Mesai takvimi oluşturma işlemi başarılı!',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });

          setTimeout(function () {
            swal.close();

          }, 1000);
        }
      });

      this.tabloyenile();

      this.chkBoxSelected = [];

    }
    else {

      swal.fire({
        icon: "warning",
        title: 'Gerekli Alanları Giriniz!',
        confirmButtonText: 'Tamam',
        text: 'Oluşturma işlemleri için tarih aralığı ve makine seçimlerini yapınız.',
        customClass: {
          confirmButton: 'btn btn-warning'
        }
      });
    }
  }

  VardiyaAta(){
    if (this.tabloSecililer.length > 0) {
  
      var makineler = "";
      for (let i = 0; i < this.tabloSecililer.length; i++) {
        if(makineler==''){
          makineler = this.tabloSecililer[i].id;
         }else{
          makineler = makineler+';'+this.tabloSecililer[i].id;
         } 
      }
      var result = this.TabloModalAc('', 'Vardiyalar', '206', 'Vardiyalar', makineler);


      this.tabloyenile();

      this.chkBoxSelected = [];

    }
    else{

    }

  }


  sipariseAktar() {
    if (this.tabloSecililer.length > 0) {
      var durum = this;
      swal.fire({
        title: 'Siparişe Dönüştürülsün mü ?',
        text: "Seçitiğiniz kayıtlar siparişe dönüştürülecektir. geri alınamayacaktır!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Dönüştür',
        cancelButtonText: 'İptal',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {
          var secililer = '';
          for (let i = 0; i < durum.tabloSecililer.length; i++) {
            secililer = durum.tabloSecililer[i].id + ',' + secililer;
          }
          var urlTeklifAktar = localStorage.getItem('url') + "angular/dataservis.php?page_id=siparisedonustur&secililer=" + secililer;
          durum.http.get<any>(urlTeklifAktar).subscribe(data => {
            console.log(data);
            if (data != '') {

              localStorage.setItem('secilenform', data[0].SecilenForm);

              localStorage.setItem('formid', data[0].FormId);
              localStorage.setItem('formtanimi', data[0].Formtanimi);
              localStorage.setItem('recordid', "");
              localStorage.setItem('aktarilanCh', data[0].FirmaAdi);
              localStorage.setItem('aktarilanTermin', data[0].TerminTarihi);
              localStorage.setItem('GelisSekli', data[0].GelisSekli);
              durum.router.navigate(['/newrecordform/' + data[0].TeklifId]);

            }

          });




          swal.fire({
            icon: "success",
            title: 'Aktarma işlemi başarılı!',
            text: 'Seçilen kayıtlar dönüştürüldü',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });

          setTimeout(function () {
            swal.close();

          }, 1000);
        }
      });

      this.tabloyenile();

      this.chkBoxSelected = [];

    }
  }


  secilisiparisedonustur(){
    if (this.tabloSecililer.length > 0) {

      const distinctThings = this.tabloSecililer.filter((thing, i, arr) => {
        // arr.find(t => console.log(t.ch_kodus+'----'+thing.ch_kodus));
        return arr.indexOf(arr.find(t => t.ch_kodus == thing.ch_kodus));
      });
      var durum = this;
//console.log(distinctThings);
      if(distinctThings.length>0){
        swal.fire({
          icon: "warning",
          title: 'Farklı Kalemler Seçemezsiniz!',
          confirmButtonText: 'Tamam',
          text: 'Dönüştürme işlemi için aynı ürün-hizmet kalemleri seçmeniz gerekmektedir.',
          customClass: {
            confirmButton: 'btn btn-warning'
          }
        });
        
        this.chkBoxSelected = [];
      }else{

        swal.fire({
          title: 'Seçilen Kalemler Siparişe Dönüştürülecek ?',
          text: "Değişiklik geri alınamayacaktır!",
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
            var kalemler = "";
            for (let i = 0; i < durum.tabloSecililer.length; i++) {
              if(kalemler!=''){
                kalemler = kalemler+';'+durum.tabloSecililer[i].index_satinalma_teklif_icerigi;
              }else{
                kalemler = durum.tabloSecililer[i].index_satinalma_teklif_icerigi;
              }
            }
  
             durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=kalemlersiparisedonustur&kalemler="+kalemler+"&userid="+localStorage.getItem('userid');
          
              durum.http.get<any>(durum.SERVER_URL).subscribe(data => {      
              if(data[0].insertedId!='')
              {
                durum.router.navigate(['/editrecordform/'+data[0].insertedId+'/461//Satınalma Siparişleri']) .then(() => {
                  window.location.reload();
                });           
              }
            });
  
            setTimeout(function () {
              swal.close();
  
            }, 1000);
          }
        });
  
        this.tabloyenile();
  
        this.chkBoxSelected = [];
      }



    }
    else {

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

  secilileriSil() {

    if (this.tabloSecililer.length > 0) {

      var durum = this;

      swal.fire({
        title: 'Seçilen Kayıtlar Silinsin mi?',
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
          for (let i = 0; i < durum.tabloSecililer.length; i++) {
            durum.evetsil(durum.tabloSecililer[i].id);
          }
          swal.fire({
            icon: "success",
            title: 'Silme işlemi başarılı!',
            text: 'Seçilen kayıt silindi',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });

          setTimeout(function () {
            swal.close();

          }, 1000);
        }
      });

      this.tabloyenile();

      this.chkBoxSelected = [];

    }
    else {

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

  jobTask(){
    if (this.tabloSecililer.length > 0) {
      console.log(this.tabloSecililer);
      const distinctThings = this.tabloSecililer.filter((thing, i, arr) => {
        return arr.indexOf(arr.find(t => t.ismerkezi === thing.ismerkezi)) === i;
      });

      console.log(distinctThings);

      if(distinctThings.length>1){
        var durum = this;

        swal.fire({
          title: 'Farklı İş Merkezleri Var !',
          text: "Seçtiğiniz kayıtlarda birbirinden farklı iş merkezleri var. İşleme devam edilmeyecektir!!",
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
          if(result.isConfirmed){
            swal.close();            
              durum.chkBoxSelected = [];

          }else{
            swal.close();            
              durum.chkBoxSelected = [];
          }
        });
      }else{
  
        var issecililer = "";

        for (let i = 0; i < this.tabloSecililer.length; i++) {
          
          issecililer=this.tabloSecililer[i].id+';'+issecililer;

        }

        if(this.tabloSecililer.length=='1'){

         var CemoUrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=formverileri&formid=445&kayitid="+this.tabloSecililer[0].id;
          this.http.get<any>(CemoUrl).subscribe(data => {
       
            var planlanansoktak = data[0].planlanansoktak;
            var planlananhazirlik = data[0].planlananhazirlik;
            var planlanancevrim = data[0].planlanancevrim;
            var partimiktari = data[0].partimiktari;
            var pislemsuresi = data[0].islemsuresi;

            var bloc:Array<{planlanansoktak:string,planlananhazirlik:string,planlanancevrim: string,partimiktari:string,pislemsuresi:string}> = []; 

              bloc.push({planlanansoktak:planlanansoktak,planlanancevrim:planlanancevrim,planlananhazirlik:planlananhazirlik,partimiktari:partimiktari,pislemsuresi:pislemsuresi});
              
           localStorage.setItem('isemrijson',JSON.stringify(bloc));
    
        
          });

          

        }


        // localStorage.setItem('rowformid', '647');
        // localStorage.setItem('rowrecordid', "");
        localStorage.setItem('isemrisecililer', issecililer);

        var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});

        modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'647',rowrecordid:'',formtanimi:'',subformid:''};
        
        modalSat.result.then((result) => {
          
          if (result=='Yenile')
          {
          
          }
     
       }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
    
      
     
      }


    }
  
  }
  /**
   * serverSideSetPage
   *
   * @param event
   */
  serverSideSetPage(event) {
    this.http
      .get('assets/data/datatable-data.json')
      .pipe(map((data) => data as Array<any>))
      .subscribe((data) => {
        this.serverSideRowData = data;
      });
  }



  /**
   * MultiPurposeFilterUpdate
   *
   * @param event
   */
  MultiPurposeFilterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.multiPurposeTemp.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */

  constructor(public toastr: ToastrService,private deviceService: DeviceDetectorService,private dragulaService: DragulaService, private modalService: NgbModal, private cdr: ChangeDetectorRef, private router: Router, private http: HttpClient, private route: ActivatedRoute, private http2: HttpClient,) {




    route.params.subscribe(val => {
      this.secilenform = route.snapshot.params['id'];

      this.listefiltresi = route.snapshot.params['filter'];


      if (this.secilenform==='perakende-satis' || this.secilenform==='stok-hareketleri' || this.secilenform==='hammadde-giris')
      {
        
      this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=230";
  
      this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.blokalanlari=data;
      
  
      for(var i=0;i<this.blokalanlari.length;i++)
      {
      
       var cities_psh2: Array<{ id: string, name: string }> = [];
      cities_psh2 = [];
  
      for (var j = 0; j < this.blokalanlari.length; j++) {
        cities_psh2.push({ id: this.blokalanlari[j].id, name: this.blokalanlari[j].firma_adi });
    
      }
  
  
      this.firmalistesi = cities_psh2;
  
      }
  
  
    
      });
      }

      
      if (this.secilenform==='hamur-sevk' )
      {
        
      this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=263";
  
      this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.blokalanlari=data;
      
  
      for(var i=0;i<this.blokalanlari.length;i++)
      {
      
       var cities_psh2: Array<{ id: string, name: string }> = [];
      cities_psh2 = [];
  
      for (var j = 0; j < this.blokalanlari.length; j++) {
        cities_psh2.push({ id: this.blokalanlari[j].id, name: this.blokalanlari[j].hamurtanim });
    
      }
  
  
      this.uretimlistesi = cities_psh2;
  
      }
  
  
    
      });
      }


      if (this.secilenform==='hamur-iade' )
      {
        
      this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=263";
  
      this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.blokalanlari=data;
      
  
      for(var i=0;i<this.blokalanlari.length;i++)
      {
      
       var cities_psh2: Array<{ id: string, name: string }> = [];
      cities_psh2 = [];
  
      for (var j = 0; j < this.blokalanlari.length; j++) {
        cities_psh2.push({ id: this.blokalanlari[j].id, name: this.blokalanlari[j].hamurtanim });
    
      }
  
  
      this.hamurlistesi = cities_psh2;
  
      }
  
  
    
      });
      }

      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink=" + route.snapshot.params['id'];

      this.http.get<any>(this.SERVER_URL).subscribe(data => {
        this.columns = data;



      });



      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&menulink=" + this.route.snapshot.params['id'];



      this.http.get<any>(this.SERVER_URL).subscribe(data => {
        this.formbilgileri = data;

        if (this.formbilgileri.length > 0) {



          for (var i = 0; i < this.formbilgileri.length; i++) {

            this.formtanimi = this.formbilgileri[i].formtanimi;
            this.sutunlar = this.formbilgileri[i].sutunlar;
            this.bolgeayrimi=this.formbilgileri[i].bolge;
            this.tarihfiltre = this.formbilgileri[i].tarihalani;

            localStorage.setItem('bolgeayrimi',this.bolgeayrimi);
           


            //formdatası alınıyor


            this.formid = this.formbilgileri[i].form_index;


            

            
      var sUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;
      this.http.get<any>(sUrl).subscribe(data => {  
   
        for (let i = 1; i < data.length; i++) {

            if(data[i].turu=='Tabs'){
                this.leN =  "var";
              }else{
                this.leN="yok";
              }
            }
        });

            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + this.formbilgileri[i].form_index + "&sutunlar=" + this.formbilgileri[i].sutunlar+"&bolge="+this.bolgeayrimi+"&userid="+localStorage.getItem('userid');



            this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {
              if (this.listefiltresi != '' && this.listefiltresi != undefined) {

                if (this.listefiltresi == 'komponay') {
                  this.rows = data2.filter(function (d) {
                    return d.ismerkezi.toLocaleLowerCase().indexOf('komp') !== -1;
                  });
                }
                else if (this.listefiltresi == 'kompemri') {
                  this.rows = data2.filter(function (d) {
                    return d.ismerkezi.toLocaleLowerCase().indexOf('komp') !== -1;
                  });
                }
                else if (this.listefiltresi == 'plansizemri') {
                  this.rows = data2.filter(function (d) {
                    return d.isistasyonu.toLocaleLowerCase() == '';
                  });
                }
                else if (this.listefiltresi == 'baslanmamisemri') {
                  this.rows = data2.filter(function (d) {
                    return d.isistasyonu.toLocaleLowerCase() !== '' && d.baslamatarihi == '' && d.baslamasaati == '';
                  });
                }
                else if (this.listefiltresi == 'surenemri') {
                  this.rows = data2.filter(function (d) {
                    return d.isistasyonu.toLocaleLowerCase() !== '' && d.baslamatarihi !== '' && d.baslamasaati !== '' && d.bitistarihi == '' && d.bitissaati == '';
                  });
                }
                else if (this.listefiltresi == 'hamuremri') {
                  this.rows = data2.filter(function (d) {
                    return d.ismerkezi.toLocaleLowerCase().indexOf('hamur') !== -1;
                  });
                }
                else if (this.listefiltresi == 'azotemri') {
                  this.rows = data2.filter(function (d) {
                    return d.ismerkezi.toLocaleLowerCase().indexOf('azot') !== -1;
                  });
                }
                else if (this.listefiltresi == 'tesviyeemri') {
                  this.rows = data2.filter(function (d) {
                    return d.ismerkezi.toLocaleLowerCase().indexOf('tesviye') !== -1;
                  });
                }
                else if (this.listefiltresi == 'dofemri') {
                  this.rows = data2.filter(function (d) {
                    return d.isemrituru.toLocaleLowerCase().indexOf('dof') !== -1;
                  });
                }



              } else {

                this.rows = data2;

                this.filteredRows = data2;
              }




              this.cdr.markForCheck();


            });







          }

        }



      });

    });


  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


   barkodOkut4(id) {



    if (this.secilenfirma==undefined||this.secilenfirma=='')
    {
      swal.fire({
        icon: 'error',
        title: 'Hata',
        text: 'Firma seçmeden çıkış yapamazsınız',
        confirmButtonText: `Tamam`,
        });
    }
    else
    {

    const modalRef = this.modalService.open(BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
    modalRef.componentInstance.id = id; // should be the id 
    modalRef.componentInstance.kayitid = ""; // should be the id 

    modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma',kayitid:'',cikisfirmasi:this.secilenfirma }; // should be the data  
    modalRef.result.then((result) => {

      if(result=='Onaylandı' || result=='Onaylandi'){

        swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Çıkış yapıldı.',
          confirmButtonText: `Tamam`,
          });
      }

     //window.location.reload();
      this.tabloyenile();
      this.cdr.markForCheck();
      return result;
    }).catch((error) => {
      console.log(error);
    });
  }
  }


   barkodOkut3(id) {



    if (this.secilenuretim==undefined||this.secilenuretim=='')
    {
      swal.fire({
        icon: 'error',
        title: 'Hata',
        text: 'Üretim seçmeden sevk yapamazsınız',
        confirmButtonText: `Tamam`,
        });
    }
    else
    {
  
    const modalRef = this.modalService.open(BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
    modalRef.componentInstance.id = id; // should be the id 
    modalRef.componentInstance.kayitid = ""; // should be the id 
  
    modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma',kayitid:'',secilenuretim:this.secilenuretim }; // should be the data  
    modalRef.result.then((result) => {

      if(result=='Onaylandı'){

        swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Çıkış yapıldı.',
          confirmButtonText: `Tamam`,
          });
      }

     //window.location.reload();
      this.tabloyenile();
      this.cdr.markForCheck();
      return result;
    }).catch((error) => {
      console.log(error);
    });
  }
  }

  barkodOkutiade(id) {



    if (this.secilenhamur==undefined||this.secilenhamur=='')
    {
      swal.fire({
        icon: 'error',
        title: 'Hata',
        text: 'hamur seçmeden iade yapamazsınız',
        confirmButtonText: `Tamam`,
        });
    }
    else
    {
  
    const modalRef = this.modalService.open(BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
    modalRef.componentInstance.id = id; // should be the id 
    modalRef.componentInstance.kayitid = ""; // should be the id 
  
    modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma',kayitid:'',secilenhamur:this.secilenhamur }; // should be the data  
    modalRef.result.then((result) => {

      if(result=='Onaylandı'){

        swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Çıkış yapıldı.',
          confirmButtonText: `Tamam`,
          });
      }

     //window.location.reload();
      this.tabloyenile();
      this.cdr.markForCheck();
      return result;
    }).catch((error) => {
      console.log(error);
    });
  }
  }

  rezervEt(rowid, formid) {


    var formum = formid;
    var kaydim = rowid;

    console.log(kaydim);
    swal.fire({
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
    }).then((result) => {
      if (result.isDenied) {


        swal.fire({
          title: "Rezerv Miktarı",
          text: "Fiili stoğun hepsi için 0 girin",
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Rezerve Et',
          cancelButtonText: 'Vazgeç'
        }).then((result) => {
          if (result.value) {




            const dataRezervYap = localStorage.getItem('url') + "angular/dataservis.php?page_id=rezervyap&turu=yap&kayitid=" + kaydim + '&miktar=' + result.value;


            this.http.get<any>(dataRezervYap).subscribe(data => {


              if (data[0].status == 'NO') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş rezerv edilemedi,  fiili stok miktarı belirtilen miktarı karşılamamaktadır.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'STOKERR') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'SIPERR') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'SUCREZ') {
                swal.fire({
                  icon: 'success',
                  title: 'Rezerve Edildi',
                  text: 'Sipariş rezerve edildi, Kayda ait stok rezervi yapıldı.',
                  confirmButtonText: `Tamam`,
                });
              }

            });


          }
        });


      }
      if (result.isConfirmed) {


        const dataRezervYap = localStorage.getItem('url') + "angular/dataservis.php?page_id=rezervyap&turu=yap&kayitid=" + kaydim;
        this.http.get<any>(dataRezervYap).subscribe(data => {


          if (data[0].status == 'NO') {
            swal.fire({
              icon: 'error',
              title: 'Uyarı',
              text: 'Sipariş rezerv edilemedi,  fiili stok miktarı sipariş miktarını karşılamamaktadır.',
              confirmButtonText: `Tamam`,
            });
          }
          else if (data[0].status == 'STOKERR') {
            swal.fire({
              icon: 'error',
              title: 'Uyarı',
              text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
              confirmButtonText: `Tamam`,
            });
          }
          else if (data[0].status == 'SIPERR') {
            swal.fire({
              icon: 'error',
              title: 'Uyarı',
              text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
              confirmButtonText: `Tamam`,
            });
          }
          else if (data[0].status == 'SUCREZ') {
            swal.fire({
              icon: 'success',
              title: 'Rezerve Edildi',
              text: 'Sipariş rezerve edildi, Kayda ait stok rezervi yapıldı.',
              confirmButtonText: `Tamam`,
            });
          }

        });


      }
    })

  }


  uretimemriolustur(rowid, formid) {


    var formum = formid;
    var kaydim = rowid;

    console.log(kaydim);
    swal.fire({
      title: 'Üretim Emri İşlemi',
      icon: 'question',
      text: "Lütfen yapmak istediğiniz işlemi seçiniz? ",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      denyButtonColor: '#40C057',
      denyButtonText: 'Miktar Girerek Oluştur',
      confirmButtonText: 'Iskarta Oranı Girerek Oluştur',
      cancelButtonText: 'Vazgeç'
    }).then((result) => {
      if (result.isDenied) {


        swal.fire({
          title: "Üretim Miktarı",
          text: "Sipariş miktarı kadarı için 0 girin",
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Üretim Emri Oluştur',
          cancelButtonText: 'Vazgeç'
        }).then((result) => {
          if (result.value) {




            const dataRezervYap = localStorage.getItem('url') + "angular/dataservis.php?page_id=uretimemriolustur&turu=yap&kayitid=" + kaydim + '&miktar=' + result.value;


            this.http.get<any>(dataRezervYap).subscribe(data => {


              if (data[0].status == 'NO') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Üretim emri oluşturulamadı',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'STOKERR') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'SIPERR') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'SUCREZ') {
                swal.fire({
                  icon: 'success',
                  title: 'Üretim Emri Oluştu',
                  text: 'Sipariş için üretim emri oluşturuldu',
                  confirmButtonText: `Tamam`,
                });
              }

            });


          }
        });


      }
      if (result.isConfirmed) {

        swal.fire({
          title: "Iskarta Oranı",
          text: "Iskarta oranını giriniz. (%)",
          input: 'text',
          showCancelButton: true,
          confirmButtonText: 'Üretim Emri Oluştur',
          cancelButtonText: 'Vazgeç'
        }).then((result) => {
          if (result.value) {
            const dataRezervYap = localStorage.getItem('url') + "angular/dataservis.php?page_id=uretimemriolustur&turu=yap&kayitid=" + kaydim + "&miktar=0&iskartaorani=" + result.value;

            console.log(dataRezervYap);
            this.http.get<any>(dataRezervYap).subscribe(data => {


              if (data[0].status == 'NO') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş rezerv edilemedi,  fiili stok miktarı sipariş miktarını karşılamamaktadır.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'STOKERR') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'SIPERR') {
                swal.fire({
                  icon: 'error',
                  title: 'Uyarı',
                  text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
                  confirmButtonText: `Tamam`,
                });
              }
              else if (data[0].status == 'SUCREZ') {
                swal.fire({
                  icon: 'success',
                  title: 'Rezerve Edildi',
                  text: 'Sipariş rezerve edildi, Kayda ait stok rezervi yapıldı.',
                  confirmButtonText: `Tamam`,
                });
              }

            });

          }
        });




      }
    })

  }

  uretimgir(id,vardiya,ueno,goz,borucontaadet){

      var durum=this;


      var presKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=450";
      this.http.get<any>(presKar).subscribe(data => {
    
    var hatatipleri:any;
        for (var k = 0; k < data.length; k++) {
    
          hatatipleri =hatatipleri+'<option value="'+data[k].firetanimi+'">'+data[k].firetanimi+'</option> ';
    
          if(data.length==k+1){

         

swal.fire({
title: 'Üretim Gir',
html: `
    <div class="row">
    <div class="col-md-12">
    <label>Lot No</label>
    <input type="text" id="lotno" class="swal2-input" value="`+vardiya+"-"+ueno+`" placeholder="">
    </div>          
    <div class="col-md-6">
      <label>Hatasız Baskı</label>
      <input type="number" id="tamamlananbaski" class="swal2-input" value="" placeholder="">
      </div>
      <div class="col-md-6">
      <label>Tamamlanan Adet</label>
      <input type="text" id="tamamlananadet" class="swal2-input" value="" placeholder="">
      </div>
      <div class="col-md-6">
      <label>Hatalı Baskı</label>
      <input type="number" id="hatalibaski" class="swal2-input" value="" >
      </div>  
      
      <div class="col-md-6">
      <label>Hata Tipi</label>
      <select type="text" id="hatatipi" class="swal2-input" >
            <option value="">Hata Tipi Seçiniz</option>
             `+hatatipleri+`
         </select> 
      </div>

      <div class="col-md-6">
      <label>Başlama Tarih</label>
      <input type="date" id="baslamatarih" value="" class="swal2-input" >
      </div>    
      <div class="col-md-6">
      <label>Başlama Saat</label>
      <input type="time" id="baslamasaat" value="" class="swal2-input" >
      </div>  

      <div class="col-md-6">
      <label>Bitiş Tarih</label>
      <input type="date" id="bitistarih" value="" class="swal2-input" >
      </div>    
      <div class="col-md-6">
      <label>Bitiş Saat</label>
      <input type="time" id="bitissaat" value="" class="swal2-input" >
      </div> 
    </div>

   
    `,
confirmButtonText: 'Üretim Gir',
focusConfirm: false,
didOpen:()=>{

const inputNumber = swal.getHtmlContainer().querySelector('#tamamlananbaski');
// sync input[type=range] with input[type=number]
inputNumber.addEventListener('keyup', () => {
 
  var baskiadetguncel:any = (document.getElementById('tamamlananbaski')  as HTMLInputElement).value;
  var miktarguncel:any =   baskiadetguncel*goz*borucontaadet;

  (document.getElementById('tamamlananadet')  as HTMLInputElement).value=miktarguncel;
})

},
preConfirm: () => {

const tamamlananbaski = (document.getElementById('tamamlananbaski')  as HTMLInputElement).value;
const lotno = (document.getElementById('lotno')  as HTMLInputElement).value;
const tamamlananadet = (document.getElementById('tamamlananadet')  as HTMLInputElement).value;
const hatalibaski = (document.getElementById('hatalibaski')  as HTMLInputElement).value;
const baslamatarih = (document.getElementById('baslamatarih')  as HTMLInputElement).value;
const hatatipi = (document.getElementById('hatatipi')  as HTMLInputElement).value;
const baslamasaat = (document.getElementById('baslamasaat')  as HTMLInputElement).value;
const bitistarih = (document.getElementById('bitistarih')  as HTMLInputElement).value;
const bitissaat = (document.getElementById('bitissaat')  as HTMLInputElement).value;
if (!tamamlananbaski && !tamamlananadet && !hatalibaski) {
  swal.showValidationMessage(`zorunlu alanları doldurunuz.`);
}
return { lotno:lotno,tamamlananbaski: tamamlananbaski,tamamlananadet:tamamlananadet,hatalibaski:hatalibaski,hatatipi:hatatipi,baslamatarih:baslamatarih,baslamasaat:baslamasaat,bitistarih:bitistarih,bitissaat:bitissaat }
}
}).then((result) => {

if(result.isConfirmed){
  var uretimgir = localStorage.getItem('url') + "angular/dataservis.php?page_id=kompizlemeuretimgir&recid="+id+"&tamamlananbaski="+result.value.tamamlananbaski+"&tamamlananadet="+result.value.tamamlananadet+"&hatalibaski="+result.value.hatalibaski+"&hatakodu="+result.value.hatatipi+"&baslamatarih="+result.value.baslamatarih+"&baslamasaat="+result.value.baslamasaat+"&bitistarih="+result.value.bitistarih+"&bitissaat="+result.value.bitissaat+"&durumu=Kısmen Üretildi&lotno="+result.value.lotno;
  durum.http.get<any>(uretimgir).subscribe(data => {
    durum.tabloyenile();
    durum.TypeInfo("Seçili üretim girişi yapıldı.",'Üretim Eklendi','');
  });


}

})
    
}
}

});
    
  } 

  uretimgirkapat(id,vardiya,ueno,goz,borucontaadet){


      var durum=this;


      var presKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=450";
      this.http.get<any>(presKar).subscribe(data => {
    
    var hatatipleri:any;
        for (var k = 0; k < data.length; k++) {
    
          hatatipleri =hatatipleri+'<option value="'+data[k].firetanimi+'">'+data[k].firetanimi+'</option> ';
    
          if(data.length==k+1){

         

swal.fire({
title: 'Üretim Gir',
html: `
    <div class="row">
    <div class="col-md-12">
    <label>Lot No</label>
    <input type="text" id="lotno" class="swal2-input" value="`+vardiya+"-"+ueno+`" placeholder="">
    </div>          
    <div class="col-md-6">
      <label>Hatasız Baskı</label>
      <input type="number" id="tamamlananbaski" class="swal2-input" value="" placeholder="">
      </div>
      <div class="col-md-6">
      <label>Tamamlanan Adet</label>
      <input type="text" id="tamamlananadet" class="swal2-input" value="" placeholder="">
      </div>
      <div class="col-md-6">
      <label>Hatalı Baskı</label>
      <input type="number" id="hatalibaski" class="swal2-input" value="" >
      </div>  
      
      <div class="col-md-6">
      <label>Hata Tipi</label>
      <select type="text" id="hatatipi" class="swal2-input" >
            <option value="">Hata Tipi Seçiniz</option>
             `+hatatipleri+`
         </select> 
      </div>

      <div class="col-md-6">
      <label>Başlama Tarih</label>
      <input type="date" id="baslamatarih" value="" class="swal2-input" >
      </div>    
      <div class="col-md-6">
      <label>Başlama Saat</label>
      <input type="time" id="baslamasaat" value="" class="swal2-input" >
      </div>  

      <div class="col-md-6">
      <label>Bitiş Tarih</label>
      <input type="date" id="bitistarih" value="" class="swal2-input" >
      </div>    
      <div class="col-md-6">
      <label>Bitiş Saat</label>
      <input type="time" id="bitissaat" value="" class="swal2-input" >
      </div> 
    </div>

   
    `,
confirmButtonText: 'Üretim Gir',
focusConfirm: false,
didOpen:()=>{

const inputNumber = swal.getHtmlContainer().querySelector('#tamamlananbaski');
// sync input[type=range] with input[type=number]
inputNumber.addEventListener('keyup', () => {
 
  var baskiadetguncel:any = (document.getElementById('tamamlananbaski')  as HTMLInputElement).value;
  var miktarguncel:any =   baskiadetguncel*goz*borucontaadet;

  (document.getElementById('tamamlananadet')  as HTMLInputElement).value=miktarguncel;
})

},
preConfirm: () => {

const tamamlananbaski = (document.getElementById('tamamlananbaski')  as HTMLInputElement).value;
const tamamlananadet = (document.getElementById('tamamlananadet')  as HTMLInputElement).value;
const lotno = (document.getElementById('lotno')  as HTMLInputElement).value;
const hatalibaski = (document.getElementById('hatalibaski')  as HTMLInputElement).value;
const baslamatarih = (document.getElementById('baslamatarih')  as HTMLInputElement).value;
const hatatipi = (document.getElementById('hatatipi')  as HTMLInputElement).value;
const baslamasaat = (document.getElementById('baslamasaat')  as HTMLInputElement).value;
const bitistarih = (document.getElementById('bitistarih')  as HTMLInputElement).value;
const bitissaat = (document.getElementById('bitissaat')  as HTMLInputElement).value;
if (!tamamlananbaski && !tamamlananadet && !hatalibaski) {
  swal.showValidationMessage(`zorunlu alanları doldurunuz.`);
}
return { lotno:lotno,tamamlananbaski: tamamlananbaski,tamamlananadet:tamamlananadet,hatalibaski:hatalibaski,hatatipi:hatatipi,baslamatarih:baslamatarih,baslamasaat:baslamasaat,bitistarih:bitistarih,bitissaat:bitissaat }
}
}).then((result) => {

if(result.isConfirmed){
  var uretimgir = localStorage.getItem('url') + "angular/dataservis.php?page_id=kompizlemeuretimgir&recid="+id+"&tamamlananbaski="+result.value.tamamlananbaski+"&tamamlananadet="+result.value.tamamlananadet+"&hatalibaski="+result.value.hatalibaski+"&hatakodu="+result.value.hatatipi+"&baslamatarih="+result.value.baslamatarih+"&baslamasaat="+result.value.baslamasaat+"&bitistarih="+result.value.bitistarih+"&bitissaat="+result.value.bitissaat+"&durumu=Tamamlandı&lotno="+result.value.lotno;
  durum.http.get<any>(uretimgir).subscribe(data => {

      durum.tabloyenile();
      // this.childalt.seciliRec(params.node.data,'799',this.formid);
      durum.TypeInfo("Seçili üretim girişi yapıldı.",'Üretim Eklendi','');

  });


}

})
    
}
}

});
 
  }

  sevkemriolustur(rowid,formid){

   
    var formum=formid;
    var  kaydim=rowid;
    
    console.log(kaydim);
    swal.fire({
   title: 'Sevk Emri İşlemi',
   icon: 'question',
   text: "Lütfen yapmak istediğiniz işlemi seçiniz? ",
   showCancelButton: true,
   showDenyButton:true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   denyButtonColor:'#40C057',
   denyButtonText: 'Miktar Girerek Oluştur',
   confirmButtonText: 'Kalan Miktarından Oluştur',
   cancelButtonText: 'Vazgeç'
   }).then((result) => {
     if (result.isDenied) {
   
   
       swal.fire({
         title: "Sevk Miktarı",
         text: "Sevk miktarı Giriniz",
         input: 'text',
         showCancelButton: true,
         confirmButtonText: 'Sevk Emri Oluştur',
         cancelButtonText: 'Vazgeç'        
     }).then((result) => {
         if (result.value) {
   
   
   
   
     const dataRezervYap = localStorage.getItem('url') +"angular/dataservis.php?page_id=sevkemriolustur&turu=yap&kayitid="+kaydim+'&miktar='+result.value;
     
   
     this.http.get<any>(dataRezervYap).subscribe(data => {
   
   
       if(data[0].status=='NO'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sevk emri oluşturulamadı',
           confirmButtonText: `Tamam`,
           });
       }
       else if(data[0].status=='STOKERR'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
           confirmButtonText: `Tamam`,
           });
       }
       else if(data[0].status=='SIPERR'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
           confirmButtonText: `Tamam`,
           });
       }
       else if(data[0].status=='SUCREZ'){
         swal.fire({
           icon: 'success',
           title: 'Sevk Emri Oluştu',
           text: 'Sipariş için sevk emri oluşturuldu',
           confirmButtonText: `Tamam`,
           });
       }
   
     });
   
   
         }
     });
   
   
     }
   if (result.isConfirmed) {
     
   
     const dataRezervYap = localStorage.getItem('url') +"angular/dataservis.php?page_id=sevkemriolustur&turu=yap&miktar=0&kayitid="+kaydim;
     this.http.get<any>(dataRezervYap).subscribe(data => {
   
   
       if(data[0].status=='NO'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sevk emri oluşturulamadı.',
           confirmButtonText: `Tamam`,
           });
       }
       else if(data[0].status=='STOKERR'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sipariş Stok Bulunamadı, Kayda ait stok hareketi bulunamadı.',
           confirmButtonText: `Tamam`,
           });
       }
       else if(data[0].status=='SIPERR'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sipariş Kalemi Bulunamadı, Kayda ait sipariş kalemi bulunamadı.',
           confirmButtonText: `Tamam`,
           });
       }
       else if(data[0].status=='SUCREZ'){
         swal.fire({
           icon: 'success',
           title: 'Sevk Emri Oluşturuldu',
           text: 'Sipariş sevk edildi, Kayda ait sipariş sevki yapıldı.',
           confirmButtonText: `Tamam`,
           });
       }
   
     });
   
   
   }
   })
   
   }


   evetyonetimreddet(id,rednedeni)
   {
     this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=satinalmayonetimreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;
 
 
 
     this.http.get<any>(this.SERVER_URL).subscribe(data => {
  
 
       this.tabloyenile();
   
     });
   }
 
   evetyonetimonayla(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=satinalmayonetimonayla&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}

   evetfinansreddet(id,rednedeni)
   {
     this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=satinalmafinansreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;
 
 
 
     this.http.get<any>(this.SERVER_URL).subscribe(data => {
  
 
       this.tabloyenile();
   
     });
   }
 
   evetfinansonayla(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=satinalmafinansonay&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}

   evetsevkreddet(id,rednedeni)
   {
     this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=sevkreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;
 
 
 
     this.http.get<any>(this.SERVER_URL).subscribe(data => {
  
 
       this.tabloyenile();
   
     });
   }
 
   evetsevkonayla(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=sevkonayla&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}
siparisyonetimkalemgor(id){
  const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
  modalRef.componentInstance.id = id; // should be the id
  modalRef.componentInstance.data = { title: id, formid: '814' ,parameter:id}; // should be the data
  modalRef.result.then((result) => {
    if (result == 'OK') {


    } else {

    }
  }).catch((error) => {
    console.log(error);
  });
}

yonetimsiparisonay(id){
  var idZ = id;
  var durum=this;
      swal.fire({
        title: 'Yönetim Satış Sipariş Onayla',
        html: "Yönetim satış sipariş onayı verilsin mi ?",
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
         durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=yonetimsatisonayver&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');
         durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
           durum.tabloyenile();
         });
          swal.fire({
            icon: "success",
            title: 'Onaylama İşlemi Başarılı!',
            text: 'Seçilen sipariş onaylandı',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
          setTimeout(function () {
            swal.close();
            durum.tabloyenile();

        }, 1000);
        }
      });
  
  
}
yonetimsiparisreddet(id){
  var idZ = id;
  var durum=this;
  swal.fire({
    title: "Yönetim Satış Sipariş Reddet",
    text: "Yönetim satış sipariş reddi verilsin mi ? Nedenini Giriniz !",
    input: 'text',
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
          durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=yonetimsatisreddet&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+result.value;
          durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
            durum.tabloyenile();
          });
              swal.fire({
                icon: "success",
                title: 'Reddetme İşlemi Başarılı!',
                text: 'Seçilen sipariş reddedildi',
                customClass: {
                  confirmButton: 'btn btn-success'
                },
              });
              setTimeout(function () {
                swal.close();
                durum.tabloyenile();

            }, 1000);

    }
});

}
sipariskalemgor(id){
  const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
  modalRef.componentInstance.id = id; // should be the id
  modalRef.componentInstance.data = { title: id, formid: '812' ,parameter:id}; // should be the data
  modalRef.result.then((result) => {
    if (result == 'OK') {


    } else {

    }
  }).catch((error) => {
    console.log(error);
  });
}

finanssiparisonay(id){
  var idZ = id;
  var durum=this;
      swal.fire({
        title: 'Finans Satış Sipariş Onayla',
        html: "Finans satış sipariş onayı verilsin mi ?",
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
         durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=finanssatisonayver&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');
         durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
           durum.tabloyenile();
         });
          swal.fire({
            icon: "success",
            title: 'Onaylama İşlemi Başarılı!',
            text: 'Seçilen sipariş onaylandı',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
          setTimeout(function () {
            swal.close();
            durum.tabloyenile();

        }, 1000);
        }
      });
  
  
}
finanssiparisreddet(id){
  var idZ = id;
  var durum=this;
  swal.fire({
    title: "Finans Satış Sipariş Reddet",
    text: "Finans satış sipariş reddi verilsin mi ? Nedenini Giriniz !",
    input: 'text',
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
          durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=finanssatisreddet&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+result.value;
          durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
            durum.tabloyenile();
          });
              swal.fire({
                icon: "success",
                title: 'Reddetme İşlemi Başarılı!',
                text: 'Seçilen sipariş reddedildi',
                customClass: {
                  confirmButton: 'btn btn-success'
                },
              });
              setTimeout(function () {
                swal.close();
                durum.tabloyenile();

            }, 1000);

    }
});

}


satinkalemgor(id){
  const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
  modalRef.componentInstance.id = id; // should be the id
  modalRef.componentInstance.data = { title: id, formid: '462' ,parameter:id}; // should be the data
  modalRef.result.then((result) => {
    if (result == 'OK') {


    } else {

    }
  }).catch((error) => {
    console.log(error);
  });
}


  rezervlerdencek(ed, forid) {

    const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
    modalRef.componentInstance.id = ed.id; // should be the id
    modalRef.componentInstance.data = { title: ed.id, formid: forid }; // should be the data
    modalRef.result.then((result) => {
      if (result == 'OK') {


      } else {

      }
    }).catch((error) => {
      console.log(error);
    });
  }


  tasarla(id) {

    this.router.navigate(['/design/' + id]);


  }
  dbleditrow(e) {



    localStorage.setItem('secilenform', this.secilenform);

    // localStorage.setItem('formid', this.formid);
    // localStorage.setItem('formtanimi', this.formtanimi);
    // localStorage.setItem('recordid', e[0].id);


    this.router.navigate(['/editrecordform/'+e[0].id+'/'+this.formid+'/'+this.formtanimi+'/']);

  
  }


  formModal(id, formis) {
    // localStorage.setItem('rowformid', formis);
    // localStorage.setItem('rowrecordid', id);

    var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});

    modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:formis,rowrecordid:id,formtanimi:'',subformid:''};
    
    modalSat.result.then((result) => {
      
      if (result=='Yenile')
      {
      
      }
 
   }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });


  }



  excelModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    var durum = this;

    $('#frmExcelImport_genel').submit(function (e) {


      swal.fire({
        title: 'Excelden Aktarılıyor... ',
        allowEscapeKey: false,
        allowOutsideClick: false,
        background: '#fafaff',
        timerProgressBar: true,
        showConfirmButton: false,
        onOpen: () => {
          swal.showLoading();
          durum.modalService.dismissAll();
        }
      });

      var menuid = $('#menu_id').val();
      var detailfield = $('#detailfield').val();
      var firmaid = "";

      if (menuid == '277') {
        firmaid = $('#ch_adi').val();

      }
      $.ajax({

        url: localStorage.getItem('url') + 'angular/excelimport_genel.php?menu_id=' + menuid + '&masteralan=&mastervalue=&firmaid=',

        type: 'POST',

        data: new FormData(this),

        processData: false,

        contentType: false,

        success: function (data) {
          if (data == 'success') {

            durum.tabloyenile();

            swal.fire({
              icon: "success",
              title: 'Excel import işlemi başarılı!',
              text: 'Seçilen excel dosyası verileri içeri aktarıldı.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });

            setTimeout(function () {
              swal.close();
            }, 3000);
          } else {

          }


        }

      });
      e.preventDefault();

    });
  }

  movecolumnFields(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  exportExcelColumns(columns, rows, formtanimi) {

    const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: false });
    modalRef.componentInstance.id = this.secilenform; // should be the id
    modalRef.componentInstance.data = { title: formtanimi, columns: columns }; // should be the data
    modalRef.result.then((result) => {
      if (result != '') {
        const vExcelrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + this.formid + "&sutunlar=" + result.checkArray.toString();

        this.http2.get<any>(vExcelrl).subscribe(data2 => {
          this.exportAsExcelFile(data2, formtanimi);
        });
      } else {

      }
    }).catch((error) => {
      console.log(error);
    });
  }


  public secilileriexceleaktar(rows: any[], excelFileName: string): void {
    if (rows.length > 0) {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.tabloSecililer);
      const workbook: XLSX.WorkBook = { Sheets: { 'Compte-rendu': worksheet }, SheetNames: ['Compte-rendu'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
    } else {
      swal.fire({
        icon: 'warning',
        title: 'Uyarı',
        text: 'Dışa Aktarılacak Satır Yok.',
        confirmButtonText: `Tamam`,
      });
    }
  }

  public exportAsExcelFile(rows: any[], excelFileName: string): void {
    if (rows.length > 0) {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows);
      const workbook: XLSX.WorkBook = { Sheets: { 'Compte-rendu': worksheet }, SheetNames: ['Compte-rendu'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
    } else {
      swal.fire({
        icon: 'warning',
        title: 'Uyarı',
        text: 'Dışa Aktarılacak Satır Yok.',
        confirmButtonText: `Tamam`,
      });
    }
  }
  private saveAsExcelFile(buffer: any, baseFileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, baseFileName + '_' + this.getDateFormat(new Date()) + EXCEL_EXTENSION);
  }

  private getDateFormat(date: Date): string {
    return formatDate(date, 'yyyyMMdd_HHmmss', 'en-US');
  }

  alanSiralariGuncelle(col) {
    console.log(col);
    var yenisira = "";
    for (let i = 0; i < col.length; i++) {
      yenisira = yenisira + ";" + col[i].Name + "-" + i;
    }
    console.log(yenisira);
    const alanSiraAp = localStorage.getItem('url') + "angular/dataservis.php?page_id=listesirasiniguncelle&formid=" + this.formid + "&turu=liste&guncelliste=" + yenisira;
    this.http.get<any>(alanSiraAp).subscribe(data => {
      if (data[0].status == 'OK') {
        swal.fire({
          icon: "success",
          title: 'Sıralama işlemi başarılı!',
          text: 'Tablo alanları sıralaması güncellendi.',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        });

        this.modalService.dismissAll();
        this.tabloyenile();

      }
    });

  }

  alanSiralaVazgec() {
    this.modalService.dismissAll();
    this.tabloyenile();
    this.cdr.markForCheck();
  }
  formkopyala(cid, forid) {
    var durum = this;
    this.modalService.open(cid, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    $('#frmkopyala').submit(function (e) {


      var kaynakdb = $('#kaynakveritabani').val();
      var hedefdb = $('#hedefveritabani').val();
      var menuid = $('#menuId').val();


      const vC = localStorage.getItem('url') + "kopyala.php?menu_id=" + menuid + "&recordid=" + forid + "&kaynak=" + kaynakdb + "&hedef=" + hedefdb;
      durum.http.get<any>(vC).subscribe(data => {
        if (data[0].status == 'OK') {
          swal.fire({
            icon: "success",
            title: 'Kopyalama işlemi başarılı!',
            text: 'Seçilen form kopyalandı.',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
          setTimeout(function () {
            swal.close();
            this.modalService.dismissAll();
            this.tabloyenile();
        }, 1000);
        }
      });

      e.preventDefault();

    });



  }

  pdkstanimla(ro){


    
    var durum = this;
    swal.fire({
      title: 'İşlem Fabrikaya Yansıtılacaktır ?',
      text: "İşlem fabrikaya aktarılacaktır onaylıyor musunuz?",
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
 
        var fics = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdksyansit&userid="+ localStorage.getItem('userid');
        durum.http.get<any>(fics).subscribe(data => {
      
          if(data[0].status=='OK'){
            swal.fire({
              icon: "success",
              title: 'Aktarma İşlemi Başarılı!',
              text: 'Dosya başarıyla aktarıldı.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
          }else{
            swal.fire({
              icon: "success",
              title: 'Yansıtma İşlemi Hatalı!',
              text: 'Dosya yansıtılırken bir hata oluştu.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
          }

        });
  

    

        setTimeout(function () {
          swal.close();

      }, 1000);
      }
    });

 

  }



  mamulkopyala(id){


      var durum = this;
    swal.fire({
      title: 'Mamul kopyalansın mı?',
      text: "Mamul kopyalanacaktır. Onaylıyor Musunuz ?",
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
 
        var fics=localStorage.getItem('url') +"angular/dataservis.php?page_id=mamulkopyalama&mamulid="+id+"&userid="+localStorage.getItem('userid');
        durum.http.get<any>(fics).subscribe(data => {
      
          if(data[0].status=='OK'){
            swal.fire({
              icon: "success",
              title: 'Kopyalama İşlemi Başarılı!',
              text: 'Mamul kopyalama aktarıldı.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
          }else{
            swal.fire({
              icon: "error",
              title: 'Kopyalama İşlemi Hatalı!',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
          }

        });
  

    

        setTimeout(function () {
          swal.close();

      }, 1000);
      }
    });

 

  }

  pdksdoldur(ro){

    var file = ro.dosyayolu;

      var durum = this;
    swal.fire({
      title: 'İşlem Veritabanına Aktarılsın mı?',
      text: "İşlem veritabanına aktarılacaktır onaylıyor musunuz?",
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
 
        var fics = localStorage.getItem('url') + "angular/csvparse.php?dosyayolu="+file+"userid="+ localStorage.getItem('userid');
        durum.http.get<any>(fics).subscribe(data => {
      
          if(data[0].status=='OK'){
            swal.fire({
              icon: "success",
              title: 'Aktarma İşlemi Başarılı!',
              text: 'Dosya başarıyla aktarıldı.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
          }else{
            swal.fire({
              icon: "success",
              title: 'Yansıtma İşlemi Hatalı!',
              text: 'Dosya yansıtılırken bir hata oluştu.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
          }

        });
  

    

        setTimeout(function () {
          swal.close();

      }, 1000);
      }
    });

 

  }


  topluisemriciktisi(){
    console.log(this.tabloSecililer);
  }

  evetsil(id) {
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + this.secilenform + "&recordid=" + id + "&userid=" + localStorage.getItem('userid');

    this.http.get<any>(this.SERVER_URL).subscribe(data => {


      this.tabloyenile();

    });
  }

  evettaleponayla(id)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=taleponayla&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');
  
  
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
  
  
      this.tabloyenile();
  
    });
  }
  evettalepreddet(id,rednedeni)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=talepreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 

      this.tabloyenile();
  
    });
  }

  taleponayla(id)
  {
  
  
    var idZ = id;
  var durum=this;
  
      swal.fire({
        title: 'Talep Onaylansın mı?',
        text: "Talebi onaylıyor musunuz?",
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
    
          durum.evettaleponayla(idZ);
  
  durum.tabloyenile();
          
    
    
          swal.fire({
            icon: "success",
            title: 'Onaylama İşlemi Başarılı!',
            text: 'Seçilen talep onaylandı',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
  
          setTimeout(function () {
            swal.close();
  
        }, 1000);
        }
      });
  
  
  }
  talepreddet(id)
  {
  
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Talebi Reddet",
      text: "Talep Reddetme Nedeni Giriniz:",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
    
        durum.evettalepreddet(idZ,result.value);
  
        durum.tabloyenile();
                
          
          
                swal.fire({
                  icon: "success",
                  title: 'Reddetme İşlemi Başarılı!',
                  text: 'Seçilen talep reddedildi',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                });
        
                setTimeout(function () {
                  swal.close();
        
              }, 1000);
  
      }
  });
  
  
  
  
  
  }

  finansonayver(id){
    var idZ = id;
  var durum=this;
  
      swal.fire({
        title: 'Finans Onayı Verilsin Mi?',
        text: "Satınalma siparişinin finans onayı verilsin mi ? ",
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
    
          durum.evetfinansonayla(idZ);
  
          durum.tabloyenile();

    
          swal.fire({
            icon: "success",
            title: 'Onaylama İşlemi Başarılı!',
            text: 'Seçilen sipariş onaylandı',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
  
          setTimeout(function () {
            swal.close();
  
        }, 1000);
        }
      });
  
  
  }
  finansonayreddet(id){
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Satınalma Sipariş Reddet",
      text: "Satınalma sipariş finans reddi verilsin mi ? Nedenini Giriniz !",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
    
        durum.evetfinansreddet(idZ,result.value);
  
        durum.tabloyenile();
                
          
          
                swal.fire({
                  icon: "success",
                  title: 'Reddetme İşlemi Başarılı!',
                  text: 'Seçilen sipariş reddedildi',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                });
        
                setTimeout(function () {
                  swal.close();
        
              }, 1000);
  
      }
  });
  
  
  }


  yonetimonayver(id){
    var idZ = id;
  var durum=this;
  
      swal.fire({
        title: 'Yönetim Onayı Verilsin Mi?',
        text: "Satınalma siparişinin yönetim onayı verilsin mi ? ",
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
    
          durum.evetyonetimonayla(idZ);
  
          durum.tabloyenile();

    
          swal.fire({
            icon: "success",
            title: 'Onaylama İşlemi Başarılı!',
            text: 'Seçilen sipariş onaylandı',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
  
          setTimeout(function () {
            swal.close();
  
        }, 1000);
        }
      });
  
  
  }
  yonetimonayreddet(id){
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Satınalma Sipariş Reddet",
      text: "Satınalma sipariş reddi verilsin mi ? Nedenini Giriniz !",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
    
        durum.evetyonetimreddet(idZ,result.value);
  
        durum.tabloyenile();
                
          
          
                swal.fire({
                  icon: "success",
                  title: 'Reddetme İşlemi Başarılı!',
                  text: 'Seçilen sipariş reddedildi',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                });
        
                setTimeout(function () {
                  swal.close();
        
              }, 1000);
  
      }
  });
  
  
  }
  finansteklifonay(id){

    var sdsc=localStorage.getItem('url') +"angular/dataservis.php?page_id=stokmiktarsorgula&recordid="+id+"&userid="+localStorage.getItem('userid');

    this.http.get<any>(sdsc).subscribe(data => {
         
     
  

    var idZ = id;
    var durum=this;
    
        swal.fire({
          title: 'Finans Satınalma Teklif Onayla',
          html: "Finans satınalma teklif onayı verilsin mi ? <b>(Stok :"+data[0].sonmiktar+") </b>",
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
      
           durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=finansteklifonay&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');
         
           durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
         
         
             durum.tabloyenile();
         
           });
       
           
            swal.fire({
              icon: "success",
              title: 'Onaylama İşlemi Başarılı!',
              text: 'Seçilen teklif onaylandı',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
    
            setTimeout(function () {
              swal.close();
              durum.tabloyenile();
  
          }, 1000);
          }
        });
    
      });
    
  }
  finansteklifreddet(id){
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Finans Satınalma Teklif Reddet",
      text: "Finans satınalma teklif reddi verilsin mi ? Nedenini Giriniz !",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
            durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=finansteklifreddet&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+result.value;
        
            durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
         
              durum.tabloyenile();
          
            });
         
                swal.fire({
                  icon: "success",
                  title: 'Reddetme İşlemi Başarılı!',
                  text: 'Seçilen teklif reddedildi',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                });
        
                setTimeout(function () {
                  swal.close();
                  durum.tabloyenile();

              }, 1000);
  
      }
  });
  
  }
  yonetimictaleponay(id){

    var sdsc=localStorage.getItem('url') +"angular/dataservis.php?page_id=stokmiktarsorgula&recordid="+id+"&userid="+localStorage.getItem('userid');

    this.http.get<any>(sdsc).subscribe(data => {
         
     
  

    var idZ = id;
    var durum=this;
    
        swal.fire({
          title: 'Yönetim İç Talep Onayla',
          html: "Yönetim iç talep yönetim onayı verilsin mi ? <b>(Stok :"+data[0].sonmiktar+") </b>",
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
      
           durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=yonetimictaleponayver&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');
         
           durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
         
         
             durum.tabloyenile();
         
           });
       
           
            swal.fire({
              icon: "success",
              title: 'Onaylama İşlemi Başarılı!',
              text: 'Seçilen sipariş onaylandı',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
    
            setTimeout(function () {
              swal.close();
              durum.tabloyenile();
  
          }, 1000);
          }
        });
    
      });
    
  }
  yonetimictalepreddet(id){
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Yönetim İç Talep Reddet",
      text: "Yönetim iç talep reddi verilsin mi ? Nedenini Giriniz !",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
    
      
            durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=yonetimictaleponayreddet&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+result.value;
        
        
        
            durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
         
        
              durum.tabloyenile();
          
            });
         
          
                swal.fire({
                  icon: "success",
                  title: 'Reddetme İşlemi Başarılı!',
                  text: 'Seçilen sipariş reddedildi',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                });
        
                setTimeout(function () {
                  swal.close();
                  durum.tabloyenile();

              }, 1000);
  
      }
  });
  
  }
  ictaleponayver(id){
    var idZ = id;
  var durum=this;
  
      swal.fire({
        title: 'Satınalma İç Talep Onayla',
        text: "Satınalma iç talep yönetim onayı verilsin mi ? ",
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
    
         durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=ictaleponayver&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');
       
         durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
       
       
           durum.tabloyenile();
       
         });
     
         
          swal.fire({
            icon: "success",
            title: 'Onaylama İşlemi Başarılı!',
            text: 'Seçilen sipariş onaylandı',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
  
          setTimeout(function () {
            swal.close();
            durum.tabloyenile();

        }, 1000);
        }
      });
  
  
  }
  ictaleponayreddet(id){
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Satınalma İç Talep Reddet",
      text: "Satınalma iç talep reddi verilsin mi ? Nedenini Giriniz !",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
    
      
            durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=ictaleponayreddet&formid="+durum.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+result.value;
        
        
        
            durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
         
        
              durum.tabloyenile();
          
            });
         
          
                swal.fire({
                  icon: "success",
                  title: 'Reddetme İşlemi Başarılı!',
                  text: 'Seçilen sipariş reddedildi',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                });
        
                setTimeout(function () {
                  swal.close();
                  durum.tabloyenile();

              }, 1000);
  
      }
  });
  
  
  }

  reddedilenteklifgor(id,row){
    this.table.rowDetail.collapseAllRows();
    this.rowdetaildata=[];
    this.table.rowDetail.toggleExpandRow(row);
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=reddedilenteklifgor&recordid="+id+"&userid="+localStorage.getItem('userid');
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.rowdetaildata = data;
    this.cdr.markForCheck();
    });
  }

  evetonayver(id)
{
 this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=teklifkalemonay&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



 this.http.get<any>(this.SERVER_URL).subscribe(data => {


   this.tabloyenile();

 });
}

  teklifkalemonayver(id){
    var idZ = id;
    var durum=this;
    
        swal.fire({
          title: 'Kalem Onaylansın mı?',
          text: "Kalem teklifini onaylıyor musunuz?",
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
      
            durum.evetonayver(idZ);
    
            durum.tabloyenile();
            
      
      
            swal.fire({
              icon: "success",
              title: 'Onaylama İşlemi Başarılı!',
              text: 'Seçilen teklif kalemi onaylandı. Teklif Listesine Yönlendiriliyorsunuz....',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
    
            setTimeout(function () {
              swal.close();
              this.router.navigate(['/listings/satinalma-teklif-toplama']);

          }, 1000);
          }
        });
    
  }

//   toggleCollaspeRow() {
//     this.table.rowDetail.collapseAllRows();
//     this.rowCanBeBeExpanded = true;
// }

//   toggleExpandRow(row,altformid,blokindex) {
//     this.rowCanBeBeExpanded = false;

//     this.table.rowDetail.toggleExpandRow(row);


//     var verialanlari: any[];

//             //tablo alanları çekilip diziye aktarılıyor
//             this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + altformid+ "&turu=sorgu";

//             this.http.get<any>(this.SERVER_URL).subscribe(data2 => {
//               verialanlari = data2;
//               var cities_psh2: Array<{ id: string, name: string }> = [];
//               cities_psh2 = [];
//               for (var j = 0; j < verialanlari.length; j++) {
//                 cities_psh2.push({ id: verialanlari[j].Name, name: verialanlari[j].prop });
//               }

//               this.altformsutunlar = cities_psh2;

//               this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + altformid + "&turu=sorgu";


//               this.http.get<any>(this.SERVER_URL).subscribe(data => {
//                 this.formbilgileri = data;

//                     var deger: any;
//                       deger = row;
//                       this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + altformid + "&sutunlar=" + data[0].sutunlar + "&blokindex=" + blokindex + "&recordid=" + row.id + "&kayitformid=" + this.formid;

//                       this.http2.get<any>(this.SERVER_URL).subscribe(data3 => {

//                         this.altformdata = data3;
//                         this.cdr.markForCheck();
//                       });
//               });
//             });
//     this.cdr.markForCheck();

//   }

  onDetailToggle(event) {
   console.log('Detail Toggled', event);
  }


  evetonayred(id)
{
 this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=teklifkalemreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



 this.http.get<any>(this.SERVER_URL).subscribe(data => {


   this.tabloyenile();

 });
}
satissiparisformu(id){
  window.open("https://www.jurimedya.com/maratonerpservices/siparisform2.php?siparisid=" + id, '_blank');

}
dissatissiparisformu(id){
  window.open("https://www.jurimedya.com/maratonerpservices/dissiparisform.php?siparisid=" + id, '_blank');

}


satinalmasiparisformu(id){

  window.open("https://www.jurimedya.com/maratonerpservices/siparisformu.php?siparisid=" + id, '_blank');


}
  teklifkalemonayreddet(id){
    var idZ = id;
    var durum=this;
    
        swal.fire({
          title: 'Kalem Reddedilsin mi?',
          text: "Kalem teklifini kabul edilmedi olarak güncelleyeceksiniz ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#2F8BE6',
          cancelButtonColor: '#F55252',
          confirmButtonText: 'Tamam',
          cancelButtonText: 'Vazgeç',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
          },
          buttonsStyling: false,
        }).then(function (result) {
          if (result.value) {
      
            durum.evetonayred(idZ);
    
            durum.tabloyenile();
            
      
      
            swal.fire({
              icon: "success",
              title: 'Red İşlemi Başarılı!',
              text: 'Seçilen teklif kalemi kabul edilmedi',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });
    
            setTimeout(function () {
              swal.close();
    
          }, 1000);
          }
        });
    
  }
  
  sevkonayla(id)
  {
  
  
    var idZ = id;
  var durum=this;
  
      swal.fire({
        title: 'Sevk Onaylansın mı?',
        text: "Sevki onaylıyor musunuz?",
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
    
          durum.evetsevkonayla(idZ);
  
          durum.tabloyenile();
          
    
    
          swal.fire({
            icon: "success",
            title: 'Onaylama İşlemi Başarılı!',
            text: 'Seçilen talep onaylandı',
            customClass: {
              confirmButton: 'btn btn-success'
            },
          });
  
          setTimeout(function () {
            swal.close();
  
        }, 1000);
        }
      });
  
  
  }
  sevkreddet(id)
  {
  
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Sevk Reddet",
      text: "Sevk Reddetme Nedeni Giriniz:",
      input: 'text',
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
    
        durum.evetsevkreddet(idZ,result.value);
  
        durum.tabloyenile();
                
          
          
                swal.fire({
                  icon: "success",
                  title: 'Reddetme İşlemi Başarılı!',
                  text: 'Seçilen sevk reddedildi',
                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                });
        
                setTimeout(function () {
                  swal.close();
        
              }, 1000);
  
      }
  });
  
  
  
  
  
  }

alansirasiSil(e){
console.log(e);

var durum = this;

swal.fire({
  title: 'Seçilen Alan Silinsin mi?',
  text: "Seçilen alanın liste görünürlüğü kaldırılacaktır. Geri alınamayacaktır!",
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
  

    var sq = localStorage.getItem('url') + "angular/dataservis.php?page_id=alansiralarisil&formid="+durum.formid+"&alanadi="+e;
    durum.http.get<any>(sq).subscribe(data => {
      if (data[0].status == 'OK') {
 
        var newColumn = durum.columns.filter(function (d) {
          return d.Name !== e;
        });
        
        durum.columns=newColumn;
      }
    });

    swal.fire({
      icon: "success",
      title: 'Silme işlemi başarılı!',
      text: 'Seçilen kayıt silindi',
      customClass: {
        confirmButton: 'btn btn-success'
      },
    });

    setTimeout(function () {
      swal.close();

    }, 1000);
  }
});







}
  // filters results
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    if (event.keyCode != '8') {

      // get the amount of columns in the table
      let colsAmt = this.columns.length;
      // get the key names of each column in the dataset
      let keys = Object.keys(this.rows[0]);
      // assign filtered matches to the active datatable
      this.rows = this.rows.filter(function (item) {
        // iterate through each row's column data
        for (let i = 0; i < colsAmt; i++) {
          // check for a match
          if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
            // found match, return true to add to result set
            return true;
          }

        }
      });

    } else {
      this.rows = this.filteredRows;
    }

    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }



  dofne(rowid, formid) {
    swal.fire({

      title: 'Döf İşlemi',
      icon: 'question',
      text: "Lütfen yapmak istediğiniz döf işlemini seçiniz? ",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      denyButtonColor: '#40C057',
      denyButtonText: 'Döf Oluştur ve Git',
      confirmButtonText: 'Döf Oluştur ve Kal',
      cancelButtonText: 'Vazgeç'
    }).then((result) => {
      if (result.isDenied) {
        console.log(rowid, formid);
        console.log('döfü oluştur git');

        var DofControl = localStorage.getItem('url') + "angular/dataservis.php?page_id=dofolusturma&formid=" + formid + "&recordid=" + rowid;

        this.http.get<any>(DofControl).subscribe(data => {
          if (data[0].recordid != '') {
            // localStorage.setItem('formid', '472');
            // localStorage.setItem('formtanimi', 'DÖF Formu');
            // localStorage.setItem('recordid', data[0].recordid);

          }    this.router.navigate(['/editrecordform/'+data[0].recordid+'/472'+'/DÖF Formu']);

        });


      }
      if (result.isConfirmed) {
        console.log(rowid, formid);

        console.log('döfü oluştur kal');

        var DofControl = localStorage.getItem('url') + "angular/dataservis.php?page_id=dofolusturma&formid=" + formid + "&recordid=" + rowid;

        this.http.get<any>(DofControl).subscribe(data => {

          if (data[0].recordid != '') {
            this.tabloyenile();

          }
        });

      }
    })

  }



  tabloyenile() {


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink=" + this.secilenform;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.columns = data;
      


    });



    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&menulink=" + this.route.snapshot.params['id'];



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.formbilgileri = data;

      if (this.formbilgileri.length > 0) {



        for (var i = 0; i < this.formbilgileri.length; i++) {

          this.formtanimi = this.formbilgileri[i].formtanimi;
          this.sutunlar = this.formbilgileri[i].sutunlar;
          this.bolgeayrimi=this.formbilgileri[i].bolge;
          this.tarihfiltre=this.formbilgileri[i].tarihalani;

          localStorage.setItem('bolgeayrimi',this.bolgeayrimi);
          //formdatası alınıyor


          this.formid = this.formbilgileri[i].form_index;
          this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + this.formbilgileri[i].form_index + "&sutunlar=" + this.formbilgileri[i].sutunlar+'&bolge='+this.bolgeayrimi+"&userid="+localStorage.getItem('userid');



          this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {

            this.rows = data2;



          });







        }

      }



    });


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
  favorilereEkle(fid) {


    const postUrl = localStorage.getItem('url') + "angular/sender.php?form_id=619&userid=" + localStorage.getItem('userid') + "&recordid=";
    let postData = new FormData();
    postData.append('userid', localStorage.getItem('userid'));
    postData.append('formurl', this.router.url);
    postData.append('formadi', this.formtanimi);

    this.http.post(postUrl, postData, { responseType: 'text' }).subscribe({
      next: data => {

        swal.fire({
          icon: "success",
          title: 'Favorilere Eklendi!',
          text: 'Form favorilere eklendi.',
          confirmButtonText: 'Tamam',

          customClass: {
            confirmButton: 'btn btn-success'
          },
        }).then(function (result) {

        });

      },
      error: error => {
        console.error('There was an error!', error);
      }


    })

  }

  editrecord(id) {

    localStorage.setItem('secilenform', this.secilenform);

    // localStorage.setItem('formid', this.formid);
    // localStorage.setItem('formtanimi', this.formtanimi);
    // localStorage.setItem('recordid', id);

    this.router.navigate(['/editrecordform/'+id+'/'+this.formid+'/'+this.formtanimi+'/']);

  }


  yenikayit() {
    localStorage.setItem('secilenform', this.secilenform);

    // localStorage.setItem('formid', this.formid);
    // localStorage.setItem('formtanimi', this.formtanimi);
    // localStorage.setItem('recordid', "");

    // this.router.navigate(['/newrecordform']);

    this.router.navigate(['/newrecordform/'+this.formid+'/'+ this.formtanimi+'/']);


  }


  deleterecord(id) {
    var idZ = id;
    var durum = this;

    swal.fire({
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

        durum.evetsil(idZ);

        durum.tabloyenile();



        swal.fire({
          icon: "success",
          title: 'Silme işlemi başarılı!',
          text: 'Seçilen kayıt silindi',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        });

        setTimeout(function () {
          swal.close();

        }, 1000);
      }
    });



  }
  filtreyitemizle(){
    this.tabloyenile();
  }
  filtrelemeyap(formid,yilsecimi,aysecimi,turu){

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&menulink=" + this.route.snapshot.params['id'];

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.formbilgileri = data;

      if (this.formbilgileri.length > 0) {

        for (var i = 0; i < this.formbilgileri.length; i++) {

          this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&"+"param1="+yilsecimi+"&param2="+aysecimi+"&filtreturu="+turu+"&formid=" + this.formbilgileri[i].form_index + "&sutunlar=" + this.formbilgileri[i].sutunlar+"&bolge="+this.formbilgileri[i].bolge+"&userid="+localStorage.getItem('userid');
          this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {
              this.rows = data2;
              this.filteredRows = data2;
              this.cdr.markForCheck();
          });

        }
      }
    });
  }

  getRowClass = (row) => {    
    if(this.secilenform=='hammadde-stok-takip'){
      if(row.kalan<row.emniyetstogu){
        console.log(row.malzemekodu+'-- sipariş geçilmesi lazım');
      }else if(row.kalan>row.emniyetstogu){
        console.log(row.malzemekodu+'-- elimizde var');
      }
      return {
        'row-color-red': Number(row.emniyetstogu) > Number(row.kalan),
        'row-color-yesil': Number(row.emniyetstogu)  < Number(row.kalan),
        'row-color-sari':Number(row.emniyetstogu)   == Number(row.kalan),
        'row-color-white':row.emniyetstogu =='',


      };
    }else if(this.secilenform=='planlama-tablosu'){
      return {
        'row-color-acil':row.acilsip   == 'EVET'

      };
    }

   }

  ngOnInit() {

    this.cihazmobilmi=this.deviceService.isMobile();


    this.cdr.markForCheck();


    // Initially load first page
    this.serverSideSetPage({ offset: 0 });

    // content header
    this.contentHeader = {
      headerTitle: 'Datatables',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '#'
          },
          {
            name: 'Forms & Tables',
            isLink: true,
            link: ''
          },
          {
            name: 'Datatables',
            isLink: false
          }
        ]
      }
    };
  }
}
