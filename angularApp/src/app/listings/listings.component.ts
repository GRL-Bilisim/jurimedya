import { Component, OnInit, ViewEncapsulation,ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { DatatableData } from './data/datatables.data';
import {Router, ActivatedRoute} from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NewrecordrowComponent } from '../newrecordrow/newrecordrow.component';
import { DeviceDetectorService } from 'ngx-device-detector';
declare var $: any; 
import swal from 'sweetalert2';
import { DragulaService } from 'ng2-dragula';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UPKComponent } from 'app/uretimplanlama/upk.component';
import { formatDate } from '@angular/common';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { BarcodeFormComponent } from 'app/barcodeform/barcodeform.component';
import { gridLayout } from '@swimlane/ngx-charts';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-datatables',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss', '../../assets/sass/libs/datatables.scss',],
  encapsulation: ViewEncapsulation.None
})
export class DataTablesComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  swal =  swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;
  cihazmobilmi:any;

  haftalar: { id: string; name: string; }[]=[{"id":"0","name":"Bu Hafta"},{"id":"1","name":"Hafta (-1)"},{"id":"2","name":"Hafta (-2)"},{"id":"3","name":"Hafta (-3)"},{"id":"4","name":"Hafta (-4)"},{"id":"5","name":"Hafta (-5)"},{"id":"6","name":"Hafta (-6)"},{"id":"7","name":"Hafta (-7)"},{"id":"8","name":"Hafta (-8)"},{"id":"9","name":"Hafta (-9)"},{"id":"10","name":"Hafta (-10)"},{"id":"11","name":"Hafta (-11)"},{"id":"12","name":"Hafta (-12)"},{"id":"13","name":"Hafta (-13)"},{"id":"14","name":"Hafta (-14)"},{"id":"15","name":"Hafta (-15)"},{"id":"16","name":"Hafta (-16)"},{"id":"17","name":"Hafta (-17)"},{"id":"18","name":"Hafta (-18)"},{"id":"19","name":"Hafta (-19)"},{"id":"20","name":"Hafta (-20)"},{"id":"21","name":"Hafta (-21)"},{"id":"22","name":"Hafta (-22)"},{"id":"23","name":"Hafta (-23)"},{"id":"24","name":"Hafta (-24)"},{"id":"25","name":"Hafta (-25)"},{"id":"26","name":"Hafta (-26)"},{"id":"27","name":"Hafta (-27)"},{"id":"28","name":"Hafta (-28)"},{"id":"29","name":"Hafta (-29)"},{"id":"30","name":"Hafta (-30)"},{"id":"31","name":"Hafta (-31)"},{"id":"32","name":"Hafta (-32)"},{"id":"33","name":"Hafta (-33)"},{"id":"34","name":"Hafta (-34)"},{"id":"35","name":"Hafta (-35)"},{"id":"36","name":"Hafta (-36)"},{"id":"37","name":"Hafta (-37)"},{"id":"38","name":"Hafta (-38)"},{"id":"39","name":"Hafta (-39)"},{"id":"40","name":"Hafta (-40)"},{"id":"41","name":"Hafta (-41)"},{"id":"42","name":"Hafta (-42)"},{"id":"43","name":"Hafta (-43)"},{"id":"44","name":"Hafta (-44)"},{"id":"45","name":"Hafta (-45)"},{"id":"46","name":"Hafta (-46)"},{"id":"47","name":"Hafta (-47)"},{"id":"48","name":"Hafta (-48)"},{"id":"49","name":"Hafta (-49)"},{"id":"50","name":"Hafta (-50)"},{"id":"51","name":"Hafta (-51)"},{"id":"52","name":"Hafta (-52)"},{"id":"53","name":"Hafta (-53)"}]
yillar: { id: string; name: string; }[]=[{"id":"2023","name":"2023"},{"id":"2022","name":"2022"},{"id":"2021","name":"2021"},{"id":"2020","name":"2020"}];
ucaylar: { id: string; name: string; }[]=[{"id":"0","name":"Oca-Şub-Mar"},{"id":"1","name":"Nisan-May-Hazirn"},{"id":"2","name":"Temmuz-Ağsts-Eylül"},{"id":"3","name":"Ekim-Kasım-Aralık"}];
aylar: { id: string; name: string; }[]=[{"id":"1","name":"Ocak"},{"id":"2","name":"Şubat"},{"id":"3","name":"Mart"},{"id":"4","name":"Nisan"},{"id":"5","name":"Mayıs"},{"id":"6","name":"Haziran"},{"id":"7","name":"Temmuz"},{"id":"8","name":"Ağustos"},{"id":"9","name":"Eylül"},{"id":"10","name":"Ekim"},{"id":"11","name":"Kasım"},{"id":"12","name":"Aralık"},];


  aylikfilt = true;
  gunlukfilt = true;
  haftalikfilt = true;
  public filteredRows;
  closeResult: string;
  TermL:any="";
  secilenform:any;
  formtanimi:any;
  formturu:any;
  toplamalani:any;
  formbilgileri:any[];
  formid:any;
  sutunlar:any;
filterTerm:any;
ilktarih:any;
tarihfiltre:any;
sontarih:any;
  // column header
  columns = [
    { name: 'Name', prop: 'full_name',header:'',dataKey:'' },
    { name: 'Email', prop: 'email',header:'',dataKey:''  },
    { name: 'Age', prop: 'age',header:'',dataKey:''  },
    { name: 'Salary', prop: 'salary',header:'',dataKey:''  }
  ];

  // multi Purpose datatable Row data
  public multiPurposeRows = DatatableData;

  public ColumnMode = ColumnMode;

  SERVER_URL = localStorage.getItem('url');

  userroles = localStorage.getItem('unvani');
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @ViewChild('tableResponsive') tableResponsive: any;
  @ViewChild(UPKComponent) child:UPKComponent;
  public expanded: any = {};

  public editing = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;

  // server side row data
  public serverSideRowData;

  // private
  private tempData = [];
  private multiPurposeTemp = [];
  tabloSecililer: any=[];
  listefiltresi: any;
  tarihalani: any;

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

    this.tabloSecililer=e.selected;

    if(this.secilenform=='planlama-tablosu'){
      this.child.seciliPlan(e.selected);

    }else{
      
    }

    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }


  

  openPDF(columns) {
 
    const doc = new jsPDF('l','pt','A4');


 
    
    autoTable(doc, {
      margin: { top: 40 },
      columns:this.columns,
      body: this.rows,
      
      didDrawPage: (dataArg) => { 
       doc.text('Sales', dataArg.settings.margin.left, 30);
       doc.setFont('PTSans');
doc.setFontSize(10);
      }
 }); 
    doc.save('sales.pdf');
}


teklifeAktar(){
  if(this.tabloSecililer.length>0){
    var durum=this;
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
        var secililer='';
        for (let i = 0; i < durum.tabloSecililer.length; i++) {
          secililer=durum.tabloSecililer[i].id+','+secililer;
        }
        var urlTeklifAktar=localStorage.getItem('url') +"angular/dataservis.php?page_id=teklifedonustur&secililer="+secililer;
        durum.http.get<any>(urlTeklifAktar).subscribe(data => {
          console.log(data);
          if(data!=''){

            localStorage.setItem('secilenform',   data[0].SecilenForm);

            localStorage.setItem('formid', data[0].FormId);
            localStorage.setItem('formtanimi', data[0].Formtanimi);
            localStorage.setItem('recordid', "");
            sessionStorage.setItem('aktarilanCh', data[0].FirmaAdi);
            sessionStorage.setItem('aktarilanTermin',data[0].TerminTarihi);
            durum.router.navigate(['/newrecordform/'+data[0].TeklifId]);

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

this.chkBoxSelected=[];
  }
}

sipariseAktar(){
  if(this.tabloSecililer.length>0){
      var durum=this;
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
          var secililer='';
          for (let i = 0; i < durum.tabloSecililer.length; i++) {
            secililer=durum.tabloSecililer[i].id+','+secililer;
          }
          var urlTeklifAktar=localStorage.getItem('url') +"angular/dataservis.php?page_id=siparisedonustur&secililer="+secililer;
          durum.http.get<any>(urlTeklifAktar).subscribe(data => {
            console.log(data);
            if(data!=''){
  
              localStorage.setItem('secilenform',   data[0].SecilenForm);
  
              localStorage.setItem('formid', data[0].FormId);
              localStorage.setItem('formtanimi', data[0].Formtanimi);
              localStorage.setItem('recordid', "");
              sessionStorage.setItem('aktarilanCh', data[0].FirmaAdi);
              sessionStorage.setItem('aktarilanTermin',data[0].TerminTarihi);
              sessionStorage.setItem('GelisSekli',data[0].GelisSekli);
              durum.router.navigate(['/newrecordform/'+data[0].TeklifId]);
  
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
  
  this.chkBoxSelected=[];
    
  }
}

  secilileriSil(){

    if(this.tabloSecililer.length>0){
      
        var durum=this;
        
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
  constructor(private dragulaService: DragulaService,private modalService: NgbModal,private deviceService: DeviceDetectorService,private cdr :ChangeDetectorRef,private router: Router, private http: HttpClient,private route:ActivatedRoute,private http2: HttpClient,) {

    // dragulaService.createGroup("HANDLES", {
    //   moves: (el, container, handle) => {
    //     return handle.className === 'handle draggable-move';
      
    //   }
    // });


    route.params.subscribe(val => {

    this.secilenform=route.snapshot.params['id'];
    this.listefiltresi = route.snapshot.params['filter'];

    // dragulaService.createGroup("HANDLES", {
     //  moves: (el, container, handle) => {
      //   return handle.className === 'handle draggable-move';
      
      // }
   //  });
    
  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink="+route.snapshot.params['id'];

  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.columns=data;

   

  });


  
  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&menulink="+this.route.snapshot.params['id'];



  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formbilgileri=data;

    if (this.formbilgileri.length>0)
    {

     

      for(var i=0;i<this.formbilgileri.length;i++)
      {

        this.formtanimi=this.formbilgileri[i].formtanimi;
        this.formturu=this.formbilgileri[i].formturu;
        this.sutunlar=this.formbilgileri[i].sutunlar;
        this.tarihalani = this.formbilgileri[i].tarihalani;
        this.tarihfiltre = this.formbilgileri[i].tarihalani;
        this.toplamalani= this.formbilgileri[i].toplamalani;



//formdatası alınıyor


this.formid=this.formbilgileri[i].form_index;
this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formbilgileri[i].form_index+"&sutunlar="+this.formbilgileri[i].sutunlar;



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


  manuelcikis(rowid,formid,miktar){
    var formum=formid;
    var  kaydim=rowid;
var miktar = miktar;
var durum = this;
    swal.fire({
      title: "Manuel Çıkış Miktarı",
      text: "Manuel çıkış yapmak için miktar giriniz.",
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Sevk Et',
      cancelButtonText: 'Vazgeç'        
  }).then((result) => {
    
  const dataManuelYap = localStorage.getItem('url') +"angular/dataservis.php?page_id=manuelcikisyap&kayitid="+kaydim+'&cikismiktar='+result.value+'&miktar='+miktar+'&userid='+localStorage.getItem('userid');
  this.http.get<any>(dataManuelYap).subscribe(data => {
    if(data[0].status=='Success'){
      durum.tabloyenile();
      swal.fire({
        icon: 'success',
        title: 'Başarılı',
        text: 'Manuel çıkış yapıldı.',
        confirmButtonText: `Tamam`,
        });
    }
    else if(data[0].status=='Error'){
      swal.fire({
        icon: 'error',
        title: 'Çıkış Yapılamadı.',
        text: 'Girdiğiniz miktar paletteki miktardan fazla olamaz. ',
        confirmButtonText: `Tamam`,
        });
    }
    });
  
        
  
      });
      
  }

   rezervEt(rowid,formid){

   
    var formum=formid;
    var  kaydim=rowid;
    
    console.log(kaydim);
    swal.fire({
   title: 'Rezerv İşlemi',
   icon: 'question',
   text: "Lütfen yapmak istediğiniz işlemi seçiniz? ",
   showCancelButton: true,
   showDenyButton:true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   denyButtonColor:'#40C057',
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
   
   
   
   
     const dataRezervYap = localStorage.getItem('url') +"angular/dataservis.php?page_id=rezervyap&turu=yap&kayitid="+kaydim+'&miktar='+result.value;
     
   
     this.http.get<any>(dataRezervYap).subscribe(data => {
   
   
       if(data[0].status=='NO'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sipariş rezerv edilemedi,  fiili stok miktarı belirtilen miktarı karşılamamaktadır.',
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
     
   
     const dataRezervYap = localStorage.getItem('url') +"angular/dataservis.php?page_id=rezervyap&turu=yap&kayitid="+kaydim;
     this.http.get<any>(dataRezervYap).subscribe(data => {
   
   
       if(data[0].status=='NO'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sipariş rezerv edilemedi,  fiili stok miktarı sipariş miktarını karşılamamaktadır.',
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
           title: 'Rezerve Edildi',
           text: 'Sipariş rezerve edildi, Kayda ait stok rezervi yapıldı.',
           confirmButtonText: `Tamam`,
           });
       }
   
     });
   
   
   }
   })
   
   }

   barkodyazdir(id)
   {
    window.open(localStorage.getItem('url')+"maratonservices/barkodyazdir.php?tipi=uretimbarkodu&malzemeid="+id, '_blank');
     
   }

   isemriformu(id){
    
    window.open(localStorage.getItem('url')+"maratonservices/isemriformu.php?isemrino="+id, '_blank');
      }
      kalitekontrolformu(id){
        window.open(localStorage.getItem('url')+"maratonservices/kalitekontrolformu.php?isemrino="+id, '_blank');
    
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


       maasalacaklandir(rowid,formid){

        swal.fire({
          title: 'Alacaklandırma Yapılsın mı?',
          text: "Otomatik maaş alacaklandırma yapılıp yansıtılacaktır.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#2F8BE6',
          cancelButtonColor: '#F55252',
          confirmButtonText: 'Evet Gerçekleştir',
          cancelButtonText: 'Vazgeç',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
          },
          buttonsStyling: false,
        }).then(function (result) {
          if (result.value) {


          }
        });
      


       }
    
   uretimemriolustur(rowid,formid){

   
    var formum=formid;
    var  kaydim=rowid;
    
    console.log(kaydim);
    swal.fire({
   title: 'Üretim Emri İşlemi',
   icon: 'question',
   text: "Lütfen yapmak istediğiniz işlemi seçiniz? ",
   showCancelButton: true,
   showDenyButton:true,
   confirmButtonColor: '#3085d6',
   cancelButtonColor: '#d33',
   denyButtonColor:'#40C057',
   denyButtonText: 'Miktar Girerek Oluştur',
   confirmButtonText: 'Net İhtiyaç Miktarında Oluştur',
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
   
   
   
   
     const dataRezervYap = localStorage.getItem('url') +"angular/dataservis.php?page_id=uretimemriolustur&turu=yap&kayitid="+kaydim+'&miktar='+result.value;
     
   
     this.http.get<any>(dataRezervYap).subscribe(data => {
   
   
       if(data[0].status=='NO'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Üretim emri oluşturulamadı',
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
     
   
     const dataRezervYap = localStorage.getItem('url') +"angular/dataservis.php?page_id=uretimemriolustur&miktar=0&turu=yap&kayitid="+kaydim;
     this.http.get<any>(dataRezervYap).subscribe(data => {
   
   
       if(data[0].status=='NO'){
         swal.fire({
           icon: 'error',
           title: 'Uyarı',
           text: 'Sipariş rezerv edilemedi,  fiili stok miktarı sipariş miktarını karşılamamaktadır.',
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
           title: 'Rezerve Edildi',
           text: 'Sipariş rezerve edildi, Kayda ait stok rezervi yapıldı.',
           confirmButtonText: `Tamam`,
           });
       }
   
     });
   
   
   }
   })
   
   }

   rezervlerdencek(ed,forid){
console.log(ed,forid);
    const modalRef = this.modalService.open(CrudModalComponent,{backdrop: 'static',size: 'xl', keyboard: false, centered: false});
    modalRef.componentInstance.id = ed.id; // should be the id
    modalRef.componentInstance.data = { title: ed.id,formid:forid}; // should be the data
    modalRef.result.then((result) => {
  if(result == 'OK'){
  
  }else{
    
  }
    }).catch((error) => {
      console.log(error);
    });
  }
  paletekle(ed,forid){

    // localStorage.setItem('rowformid', '621');
    // localStorage.setItem('rowrecordid',ed);
  
        // localStorage.setItem('mastervalue',ed);
        var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
        modalSat.componentInstance.Modaldata = {mastervalue:ed,rowformid:'621',rowrecordid:ed,formtanimi:'',subformid:''};

       
        modalSat.result.then((result) => {
  
        if (result=='Yenile')
        {
        
        }
   
     }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
  
  
  }

  tasarla(id)
  {

    this.router.navigate(['/design/'+id]);


  }
  dbleditrow(e){

    

    localStorage.setItem('secilenform', this.secilenform);
    
    // localStorage.setItem('formid', this.formid);
    // localStorage.setItem('formtanimi', this.formtanimi);
    // localStorage.setItem('recordid', e[0].id);

    this.router.navigate(['/editrecordform/'+e[0].id+'/'+this.formid+'/'+this.formtanimi+'/']);

    }
  formModal(id,formis)
  {
    // localStorage.setItem('rowformid',formis);
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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    var durum=this;

    $( '#frmExcelImport_genel' ).submit( function( e ) {


      swal.fire({
        title: 'Excelden Aktarılıyor... ',
        allowEscapeKey: false,
        allowOutsideClick: false,
        background: '#fafaff',
        timerProgressBar: true,
        showConfirmButton: false,
        onOpen: ()=>{
          swal.showLoading();
          durum.modalService.dismissAll();
        }    
    });

       var menuid= $('#menu_id').val();
      var detailfield = $('#detailfield').val();
        var firmaid="";
    
        if(menuid=='277'){
         firmaid =$('#ch_adi').val();
  
        }
        $.ajax( {
  
        url: localStorage.getItem('url')+'angular/excelimport_genel.php?menu_id='+menuid+'&masteralan=&mastervalue=&firmaid=',
    
         type: 'POST',
    
        data:new FormData(this),
    
        processData: false,
    
        contentType: false,
    
       success: function(data)
    
             { 
              if(data!=''){  

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
              }else{
                
              }
  
  
             }
    
        } );
        e.preventDefault();
    
    });
  }

movecolumnFields(content){
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });}

  exportExcelColumns(columns,rows,formtanimi){
    
  const modalRef = this.modalService.open(CrudModalComponent,{backdrop: 'static',size: 'lg', keyboard: false, centered: false});
  modalRef.componentInstance.id = this.secilenform; // should be the id
  modalRef.componentInstance.data = { title: formtanimi,columns:columns}; // should be the data
  modalRef.result.then((result) => {

if(result!=''){
  const vExcelrl=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formid+"&sutunlar="+result.checkArray.toString();

  this.http2.get<any>(vExcelrl).subscribe(data2 => {
    this.exportAsExcelFile(data2,formtanimi);
  });
}else{
  
}
  }).catch((error) => {
    console.log(error);
  });
  }

  public exportAsExcelFile(rows: any[], excelFileName: string): void {
    if (rows.length > 0) {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows);
      const workbook: XLSX.WorkBook = {Sheets: {'Compte-rendu': worksheet}, SheetNames: ['Compte-rendu']};
      const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
      this.saveAsExcelFile(excelBuffer, excelFileName);
    }else{
         swal.fire({
      icon: 'warning',
      title: 'Uyarı',
      text: 'Dışa Aktarılacak Satır Yok.',
      confirmButtonText: `Tamam`,
      });    }
  }
  private saveAsExcelFile(buffer: any, baseFileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, baseFileName + '_' + this.getDateFormat(new Date())  + EXCEL_EXTENSION);
  }

  private getDateFormat(date: Date): string {
    return formatDate(date, 'yyyyMMdd_HHmmss', 'en-US');
  }

  alanSiralariGuncelle(col){
    console.log(col);
var yenisira = "";
    for (let i = 0; i < col.length; i++) {
      yenisira=yenisira+";"+col[i].Name+"-"+i;      
    }
console.log(yenisira);
const alanSiraAp=localStorage.getItem('url') +"angular/dataservis.php?page_id=listesirasiniguncelle&formid="+this.formid+"&guncelliste="+yenisira;
this.http.get<any>(alanSiraAp).subscribe(data => {
  if(data[0].status=='OK'){
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


  adisyonagit(id,caritanimi,adisyon)
{
  localStorage.setItem('secilenhasta',id);
  localStorage.setItem('secilenhastaadi',caritanimi);
  localStorage.setItem('secilenadisyon',adisyon);
  this.router.navigate(['/tedaviplanlama/']);
}

  alanSiralaVazgec(){
    this.modalService.dismissAll();
    this.tabloyenile();
  }

formkopyala(cid,forid){
 var durum=this;
  this.modalService.open(cid, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });

  $( '#frmkopyala' ).submit( function( e ) {

    
    var kaynakdb = $('#kaynakveritabani').val();
    var hedefdb = $('#hedefveritabani').val();
    var menuid = $('#menuId').val();


    const vC=localStorage.getItem('url') +"kopyala.php?menu_id="+menuid+"&recordid="+forid+"&kaynak="+kaynakdb+"&hedef="+hedefdb;
        durum.http.get<any>(vC).subscribe(data => {
          if(data[0].status=='OK'){
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

evetreceteonayla(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=receteonayla&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}


mixhazir(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=mixhazir&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');


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
evetsevkonayla(id,idZ)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=sevkonayla&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&belgeno="+idZ;



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}

evetsiparisonayla(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=siparisonayla&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}

evetbsiparisonayla(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=bekleyensiparisonayla&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}

evetkaliteonayla(id)
{
  this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=kaliteonayla&formid="+this.formid+"&recordid="+id+"&userid="+localStorage.getItem('userid');



  this.http.get<any>(this.SERVER_URL).subscribe(data => {


    this.tabloyenile();

  });
}


receteonayla(id)
{


  var idZ = id;
var durum=this;

    swal.fire({
      title: 'Reçete Onaylansın mı?',
      text: "Reçeteyi onaylıyor musunuz?",
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
  
        durum.evetreceteonayla(idZ);

durum.tabloyenile();
        
  
  
        swal.fire({
          icon: "success",
          title: 'Onaylama İşlemi Başarılı!',
          text: 'Seçilen reçete onaylandı',
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


mixtamamla(id)
{


  var idZ = id;
var durum=this;


    swal.fire({
      title: 'Mix Hazır Mı?',
      text: "Mix üretimi tamamlansın mı?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Evet Hazır',
      cancelButtonText: 'Vazgeç',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
  
        durum.mixhazir(idZ);

durum.tabloyenile();
        
  
  
        swal.fire({
          icon: "success",
          title: 'Mix başarıyla İşlendi!',
          text: 'Seçilen mix hazır olarak işaretlendi',
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
kaliteonayla(id)
{


  var idZ = id;
var durum=this;

    swal.fire({
      title: 'Kalite Onaylansın mı?',
      text: "Kalite onayı verilecektir!",
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
  
        durum.evetkaliteonayla(idZ);

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
kalitereddet(id)
{

  var idZ = id;
  var durum=this;

  swal.fire({
    title: "Kalite Reddet",
    text: "Kalite Reddetme Nedeni Giriniz:",
    input: 'text',
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
     
  
      durum.evetkalitereddet(idZ,result.value);

      durum.tabloyenile();
              
        
        
              swal.fire({
                icon: "success",
                title: 'Reddetme İşlemi Başarılı!',
                text: 'Seçilen kayıt kalite onayı verilmedi.',
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
ssiparisonayla(id)
{


  var idZ = id;
var durum=this;

    swal.fire({
      title: 'Sipariş Onaylansın mı?',
      text: "Siparişi onaylıyor musunuz?",
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
  
        durum.evetsiparisonayla(idZ);

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



bsiparisonayla(id)
{


  var idZ = id;
var durum=this;

    swal.fire({
      title: 'Sipariş Onaylansın mı?',
      text: "Siparişi onaylıyor musunuz?",
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
  
        durum.evetbsiparisonayla(idZ);

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
evetkalitereddet(id,rednedeni)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=kalitereddet&formid="+this.formid+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;



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
  evetsevkreddet(id,rednedeni)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=sevkreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 

      this.tabloyenile();
  
    });
  }


  evetsiparisreddet(id,rednedeni)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=siparisreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 

      this.tabloyenile();
  
    });
  }

  evetbsiparisreddet(id,rednedeni)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=bekleyensiparisreddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 

      this.tabloyenile();
  
    });
  }

evetrecetereddet(id,rednedeni)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=recetereddet&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&rednedeni="+rednedeni;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 

      this.tabloyenile();
  
    });
  }

recetereddet(id)
{

  var idZ = id;
  var durum=this;

  swal.fire({
    title: "Reçeteyi Reddet",
    text: "Reçete Reddetme Nedeni Giriniz:",
    input: 'text',
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
     
  
      durum.evetrecetereddet(idZ,result.value);

      durum.tabloyenile();
              
        
        
              swal.fire({
                icon: "success",
                title: 'Reddetme İşlemi Başarılı!',
                text: 'Seçilen reçete reddedildi',
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

var idZ = id;
var durum=this;

swal.fire({
  title: "Sevk İzni Ver",
  text: "İrsaliye/Fatura No:",
  input: 'text',
  showCancelButton: true        
}).then((result) => {
  if (result.value) {
   

    durum.evetsevkonayla(idZ,result.value);

    durum.tabloyenile();
            
      
      
            swal.fire({
              icon: "success",
              title: 'Sevk İzni İşlemi Başarılı!',
              text: 'Seçilen sevk izni verildi',
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


paletbarkodyazdir(id)
{
 window.open(localStorage.getItem('url')+"maratonservices/barkodyazdir.php?tipi=paletbarkodu&id="+id, '_blank');
  
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



ssiparisreddet(id)
{

  var idZ = id;
  var durum=this;

  swal.fire({
    title: "Siparişi Reddet",
    text: "Sipariş Reddetme Nedeni Giriniz:",
    input: 'text',
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
     
  
      durum.evetsiparisreddet(idZ,result.value);

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

bsiparisreddet(id)
{

  var idZ = id;
  var durum=this;

  swal.fire({
    title: "Siparişi Reddet",
    text: "Sipariş Reddetme Nedeni Giriniz:",
    input: 'text',
    showCancelButton: true        
}).then((result) => {
    if (result.value) {
     
  
      durum.evetbsiparisreddet(idZ,result.value);

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

  evetsil(id)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=deleterecord&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 

      this.tabloyenile();
  
    });
  }


  evetgonder(id)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=kvkkgonder&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 
      var guvenlikkodu=data[0].guvenlikkodu;



      var durum = this;
    swal.fire({
      title: "KVKK Onam Kodu",
      text: "Müşteriden kendisine gönderilen KVKK onam kodunu alarak, giriniz",
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'KVKK Onayla',
      cancelButtonText: 'Vazgeç'        
  }).then((result) => {
    
    if (guvenlikkodu==result.value)
    {

      swal.fire({
        icon: "success",
        title: 'KVKK Onamı Alında!',
        text: 'Güvenlik doğrulaması başarılı',
        customClass: {
          confirmButton: 'btn btn-success'
        },
      });

      setTimeout(function () {
        swal.close();


        durum.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=kvkkonaylandi&formid="+this.secilenform+"&recordid="+id+"&userid="+localStorage.getItem('userid');

        durum.http.get<any>(this.SERVER_URL).subscribe(data => {

        durum.tabloyenile();

        });

    }, 1000);

    } 
    else
    {


      swal.fire({
        icon: "error",
        title: 'KVKK Onam alınamadı',
        text: 'Doğrulama kodu yanlış girildi',
        customClass: {
          confirmButton: 'btn btn-danger'
        },
      });

      setTimeout(function () {
        swal.close();

    }, 1000);

    }       
  
      });



      //
  
    });
  }


  
// filters results
filterDatatable(event){
  // get the value of the key pressed and make it lowercase
  let val = event.target.value.toLowerCase();
  if(event.keyCode!='8'){

      // get the amount of columns in the table
  let colsAmt = this.columns.length;
  // get the key names of each column in the dataset
  let keys = Object.keys(this.rows[0]);
  // assign filtered matches to the active datatable
  this.rows = this.rows.filter(function(item){
    // iterate through each row's column data
    for (let i=0; i<colsAmt; i++){
      // check for a match
      if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
        // found match, return true to add to result set
        return true;
      }
      
    }
  });
  
}else{
   this.rows=this.filteredRows;
  }

  // whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}

  tabloyenile()
  {


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink="+this.secilenform;


  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.columns=data;

  

  });


  
  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&menulink="+this.route.snapshot.params['id'];



  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formbilgileri=data;

    if (this.formbilgileri.length>0)
    {

     

      for(var i=0;i<this.formbilgileri.length;i++)
      {

        this.formtanimi=this.formbilgileri[i].formtanimi;
        this.sutunlar=this.formbilgileri[i].sutunlar;



//formdatası alınıyor


this.formid=this.formbilgileri[i].form_index;
this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formbilgileri[i].form_index+"&sutunlar="+this.formbilgileri[i].sutunlar;



  this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {

    this.rows=data2;
 
this.cdr.markForCheck();

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



  barkodOkut2(id,kayitids) {
  
    const modalRef = this.modalService.open(BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
    modalRef.componentInstance.id = id; // should be the id 
    modalRef.componentInstance.kayitid = kayitids; // should be the id 
  
    modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma',kayitid:kayitids }; // should be the data  
    modalRef.result.then((result) => {
     window.location.reload();
      this.tabloyenile();
      this.cdr.markForCheck();
      return result;
    }).catch((error) => {
      console.log(error);
    });
  }
  favorilereEkle(fid){


    const postUrl=localStorage.getItem('url') + "angular/sender.php?form_id=619&userid="+localStorage.getItem('userid')+"&recordid=";
    let postData = new FormData();
    postData.append('userid',localStorage.getItem('userid'));
    postData.append('formurl',this.router.url);
    postData.append('formadi',this.formtanimi);

    this.http.post(postUrl,postData,{ responseType: 'text' }).subscribe({
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

  editrecord(id)
  {

    localStorage.setItem('secilenform', this.secilenform);
    
    // localStorage.setItem('formid', this.formid);
    // localStorage.setItem('formtanimi', this.formtanimi);
    // localStorage.setItem('recordid', id);
 

    this.router.navigate(['/editrecordform/'+id+'/'+this.formid+'/'+this.formtanimi+'/']);
  }


  yenikayit()
  {
    localStorage.setItem('secilenform', this.secilenform);

    // localStorage.setItem('formid', this.formid);
    // localStorage.setItem('formtanimi', this.formtanimi);
    // localStorage.setItem('recordid', "");
 

    this.router.navigate(['/newrecordform/'+this.formid+'/'+ this.formtanimi+'/']);

  
  }


 deleterecord(id)
 {
   var idZ = id;
var durum=this;

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



 kvkkgonder(id)
 {
   var idZ = id;
var durum=this;

    swal.fire({
      title: 'KVKK Onam Alımı',
      text: "Müşteriye KVKK Onam form ve kodu gönderilsin mi?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Evet Gönder',
      cancelButtonText: 'İptal',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
  
        durum.evetgonder(idZ);


        
  
  

      }
    });
 


 }

aramayap(ilk,son){

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
