import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DatatableData } from './data/datatables.data';
import { Router, ActivatedRoute } from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';



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
import { NewrecordrowProsesComponent } from 'app/newrecordrow_proses/newrecordrow_proses.component';
import { formatDate } from '@angular/common';

import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { BarcodeFormComponent } from 'app/barcodeform/barcodeform.component';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-newrecordform',
  templateUrl: './newrecordform.component.html',
  styleUrls: ['./newrecordform.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewrecordformComponent implements OnInit {



  closeResult: string;

  swal = swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;
  activeTab = "general";
  donenveri: any;
  vActive = 'top'; // Vertical Pills
  active = 1; // Basic Navs
  kActive = 1; // Keep content
  sActive; // Selecing Navs
  disabled = true;
  dActive; // Dynamic Navs

  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  validatingForm: FormGroup;
  secilenform: any;
  formbilgileri: any[];
  formverileri: any[];
  gelenveriler: any[];
  verikumeler: any[];
  verialanlari: any[];
  bolgeayrimi: any;
  grupbasliklari: Array<{ id: string, name: string }> = [];

  formid_alt: any;

  recordid: any;

  cities: Array<{ id: string, name: string, field: string }>[] = [];
  sutunlars: Array<{ id: string, name: string }>[] = [];
  satirlar: Array<{ id: string, karsilikkodu: string, yetisenkodu: string }>[] = [];
  sutunlar: string;

  tokenid: string;


  cities2 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];

  bloklar: any[];
  blokalanlari: any[];


  // column header
  columns = [
    { name: 'Name', prop: 'full_name' },
    { name: 'Email', prop: 'email' },
    { name: 'Age', prop: 'age' },
    { name: 'Salary', prop: 'salary' }
  ];

  // multi Purpose datatable Row data
  public multiPurposeRows = DatatableData;

  public ColumnMode = ColumnMode;

  SERVER_URL = localStorage.getItem('url');


  public donusturulenToken = this.route.snapshot.paramMap.get('token');
  public formid = this.route.snapshot.paramMap.get('formid');
  public formtanimi = this.route.snapshot.paramMap.get('formtanimi');


  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @ViewChild('tableResponsive') tableResponsive: any;

  public expanded: any = {};

  public editing = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;

  // server side row data
  public serverSideRowData;

  // private
  private tempData = [];
  private multiPurposeTemp = [];
  checkoutForm: any;
  formWorkout: any;
  setInxerval: any;
  editfieldicon: boolean = true;
  userroles = localStorage.getItem('unvani');
  mobilkeypad: boolean = true;
  tabloSecililer: any = [];
  child: any;




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
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(private location: Location, public toastr: ToastrService, private cdr: ChangeDetectorRef, private modalService: NgbModal, private router: Router, private http: HttpClient, private route: ActivatedRoute, private http2: HttpClient,) {




  }

  dbleditrow(e, formids, blokids) {

    console.log(e, formids, blokids);

    this.editrecord(e[0].id, formids, blokids);
  }
  customChkboxOnSelect(e) {

    this.tabloSecililer = e.selected;


    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }
  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }


  public baslikkontrol(grupadi) {

    if (grupadi == '') {
      return 'Genel Bilgiler';
    }
    if (grupadi != '') {
      return grupadi;
    }
  }



  setActiveTab(tab) {
    this.activeTab = tab;
  }

  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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




  islemyap(formid, alanadi) {

    if(formid=='277' && alanadi=='kdv_tutar'){
      this.formverileri[0].genel_toplam=Number(this.formverileri[0].toplam_tutar)+Number(this.formverileri[0].kdv_tutar)+Number(this.formverileri[0].sigorta)+Number(this.formverileri[0].navlun);
    }


    if(formid=='277' && alanadi=='sigorta'){
      this.formverileri[0].genel_toplam=Number(this.formverileri[0].toplam_tutar)+Number(this.formverileri[0].sigorta)+Number(this.formverileri[0].navlun);
    }

    if(formid=='277' && alanadi=='navlun'){
      this.formverileri[0].genel_toplam=Number(this.formverileri[0].toplam_tutar)+Number(this.formverileri[0].navlun)+Number(this.formverileri[0].sigorta);
    }
  
    
    if(formid=='277' && alanadi=='kur_tipi'){  
  
      var kurtipi:any;
   
       var formverisi:any[];
   
       this.formverileri.forEach(function(item) {
         Object.keys(item).forEach(function(key) {
   
           if (key=='kur_tipi')
           {
             kurtipi=item[key];
           }
           
         });
       });
   
   
         
       this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=guncelkurgetir&kur="+kurtipi;
   
       this.http.get<any>(this.SERVER_URL).subscribe(data => {
   
  
        this.formverileri[0].kur = data[0].satisfiyat;
 
   
        this.cdr.markForCheck();
       });
   
   
     
   }

    if(formid=='748' && alanadi=='tur'){
      var turu:any;
   
      this.formverileri.forEach(function(item) {
        Object.keys(item).forEach(function(key) {
  
          if (key=='tur')
          {
            turu=item[key];
          }
          
        });
      });

      if(turu=='Palet'){
        this.formverileri[0].no = this.formverileri[0].no.replace('KL','PLT');
      }else{
        this.formverileri[0].no = this.formverileri[0].no.replace('PLT','KL');
      }
    }

    if(formid=='461' && alanadi=='kur_tipi'){  
  
      var kurtipi:any;
   
       var formverisi:any[];
   
       this.formverileri.forEach(function(item) {
         Object.keys(item).forEach(function(key) {
   
           if (key=='kur_tipi')
           {
             kurtipi=item[key];
           }
           
         });
       });
   
   
         
       this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=guncelkurgetir&kur="+kurtipi;
   
       this.http.get<any>(this.SERVER_URL).subscribe(data => {
   
  
        this.formverileri[0].kur = data[0].satisfiyat;
 
   
       });
   
   
     
   }
   
    //yurtiçi teklifler formunda firma seçildiğinde ilgili kişi gelmesi
    if (formid == 282 && alanadi == 'ch_adi') {


      var firmaid = "";

      var formverisi: any[];

      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {


          if (key == 'ch_adi') {
            firmaid = item[key];
          }


        });
      });

      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;

      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        formverisi = data;

        for (var i = 0; i <= formverisi.length - 1; i++) {
          this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
        }

      });


    }


    // firma seçildiğinde o firmaya ait karşılık no gelmesi
    if(formid=='710' && alanadi=='firmaadi'){

      var firmaid = "";

      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {

          if (key == 'firmaadi') {
            firmaid = item[key];
          }

        });
      });


      var firmaKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=fiyatlistesifirkarsilik&firmaid=" + firmaid;
      this.http.get<any>(firmaKar).subscribe(data => {

        var cities_psh: Array<{ id: string, name: string, field: string }> = [];

        for (var k = 0; k < data.length; k++) {
          cities_psh.push({ id: data[k].index_firma_karsiliklari, name: data[k].karsilik_no, field: this.blokalanlari['8'].alanadi });
        }
        this.cities['11134'] = cities_psh;

      });


    }

    if (formid == '445' && alanadi == 'ismerkezi') {

      var ismerkezi = "";

      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {

          if (key == 'ismerkezi') {
            ismerkezi = item[key];
          }

        });
        
      });

      var presKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=isistasyonfiltreli&ismerkez=" + ismerkezi;
      this.http.get<any>(presKar).subscribe(data => {

        var cities_psh: Array<{ id: string, name: string, field: string }> = [];

        for (var k = 0; k < data.length; k++) {
          cities_psh.push({ id: data[k].isistasyonu, name: data[k].isistasyonu, field: this.blokalanlari['12'].alanadi });
        }
        this.cities['7304'] = cities_psh;

      });


    }
    if (formid == 624 && alanadi == 'uretimyontemi') {

      var planpres = "";
      var malzemeid = "";
      var formverisi: any[];

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
      this.http.get<any>(presKar).subscribe(data => {

        var cities_psh: Array<{ id: string, name: string, field: string }> = [];

        for (var k = 0; k < data.length; k++) {
          cities_psh.push({ id: data[k].kalip_no, name: data[k].kalip_no, field: this.blokalanlari['5'].alanadi });
        }
        this.cities['9853'] = cities_psh;

      });
    }

    // mamul kartlarında ürün kodu girildiğinde alanların doldurulması
    if (formid == 254 && alanadi == 'malzemekodu') {

      var malzemekodu = "";

      var formverisi: any[];

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

      var formverisi: any[];

      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {


          if (key == 'firma') {
            firmaid = item[key];
          }


        });
      });




      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;



      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        formverisi = data;

        for (var i = 0; i <= formverisi.length - 1; i++) {
          this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
        }

      });


    }

    //Satınalma formunda firma seçildiğinde ilgili kişi gelmesi
    if (formid == 459 && alanadi == 'ch_adi') {


      var firmaid = "";

      var formverisi: any[];

      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {


          if (key == 'ch_adi') {
            firmaid = item[key];
          }


        });
      });




      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;



      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        formverisi = data;

        for (var i = 0; i <= formverisi.length - 1; i++) {
          this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
        }

      });


    }
    if (formid == 277 && alanadi == 'ch_adi') {


      var firmaid = "";

      var formverisi: any[];

      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {


          if (key == 'ch_adi') {
            firmaid = item[key];
          }


        });
      });


      // ilgili kişinin getirilmesi 

      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;

      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        formverisi = data;

        for (var i = 0; i <= formverisi.length - 1; i++) {
          this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
        }


      });



      //sipariş fişleri sevk kararının getirilmesi 

      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=musterisevkgetir&cariid=" + firmaid;

      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        formverisi = data;

        for (var i = 0; i <= formverisi.length - 1; i++) {
          this.formverileri[0].sevkkarari = formverisi[i].sevkizni;
        }

      });


    }
    if (formid == 231 && alanadi == 'musteri_adi') {


      var firmaid = "";

      var formverisi: any[];

      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {


          if (key == 'musteri_adi') {
            firmaid = item[key];
          }


        });
      });




      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;

      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        formverisi = data;

        for (var i = 0; i <= formverisi.length - 1; i++) {
          this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
        }

      });


    }




  }

  evetsil(id, formids) {



    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + formids + "&recordid=" + id;
    console.log(this.SERVER_URL);

    this.http.get<any>(this.SERVER_URL).subscribe(data => {



    });
  }

  secilileriSil(formids, blokid) {

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
            console.log(durum.tabloSecililer[i].id);
            durum.evetsil(durum.tabloSecililer[i].id, formids);
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
            durum.tabloyenile(formids, blokid);


            if (formids == '496') {



              durum.tabloyenile('705', '1650');
              this.tabloyenile('496', '1089');


            }

          }, 1000);
        }
      });



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


  editrecord(id, formids, blokid) {

    // localStorage.setItem('rowformid',formids);
    // localStorage.setItem('rowrecordid', id);

    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formids, rowrecordid: id, formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {
        this.tabloyenile(formids, blokid);

        if (formids == "496") {
          this.tabloyenile('705', '1650');
        }
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }

  tabloyenile(formids, blokid) {

    if (this.formid == '419') {

      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=faturatoplamhesapla&token=" + this.tokenid + "&kayitid=" + this.recordid;

      this.http.get<any>(this.SERVER_URL).subscribe(data => {

      });

    }


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.bloklar = data;
      console.log(data);
      for (var i = 0; i < this.bloklar.length; i++) {

        if (this.bloklar[i].bokindex == blokid) {


          var masterfield = "";
          var detailfield = "";
          var blokindex = "";
          var blogum: any;
          if (this.bloklar[i].turu == 'Liste') {
            blogum = this.bloklar[i];
            blokindex = this.bloklar[i].bokindex;
            masterfield = blogum[masterfield];
            detailfield = blogum[detailfield];


            //tablo alanları çekilip diziye aktarılıyor
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + blogum.bagliformindex + "&turu=sorgu";


            this.http.get<any>(this.SERVER_URL).subscribe(data2 => {
              this.verialanlari = data2;



              var cities_psh2: Array<{ id: string, name: string }> = [];
              cities_psh2 = [];

              for (var j = 0; j < this.verialanlari.length; j++) {


                cities_psh2.push({ id: this.verialanlari[j].Name, name: this.verialanlari[j].prop });
              }


              this.sutunlars[blogum.bokindex] = cities_psh2;




              this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + blogum.bagliformindex + "&turu=sorgu";


              this.http.get<any>(this.SERVER_URL).subscribe(data => {
                this.formbilgileri = data;

                if (this.formbilgileri.length > 0) {



                  for (var t = 0; t < this.formbilgileri.length; t++) {

                    this.sutunlar = this.formbilgileri[t].sutunlar;



                    //formdatası alınıyor

                    var mastervalue = "";
                    var deger: any;
                    for (var r = 0; r < this.formverileri.length; r++) {
                      deger = this.formverileri[0];

                      mastervalue = deger[masterfield];

                      this.formid_alt = blogum.bagliformindex;

                      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + blogum.bagliformindex + "&sutunlar=" + this.formbilgileri[t].sutunlar + "&blokindex=" + blogum.bokindex + "&recordid=" + this.recordid + "&kayitformid=" + this.formid + "&tokenid=" + this.tokenid;
                      console.log(this.SERVER_URL);

                      this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {



                        

                        if(blogum.bagliformindex == '462'){
                          var toplamtutar  =0;
                          var toplammiktar =0;

                          for (let i = 0; i < data2.length; i++) {
                            toplammiktar = (Number(toplammiktar)+Number(data2[i].siparismiktari));
                            toplamtutar = (Number(toplamtutar)+Number(data2[i].birimfiyat));
                            
                          }

                          this.formverileri[0].toplam_tutar = toplamtutar;
                          this.formverileri[0].toplam_miktar = toplammiktar;
                          this.formverileri[0].genel_toplam = toplamtutar;
                     
                        }
                            if(blogum.bagliformindex == '278'){
                          var toplamtutar  =0;
                          var toplammiktar =0;

                          for (let i = 0; i < data2.length; i++) {
                            toplammiktar = (Number(toplammiktar)+Number(data2[i].kesme_isemri_gelecek_miktar));
                            toplamtutar = (Number(data2[i].kesme_isemri_gelecek_miktar)*Number(data2[i].fiyat)+Number(toplamtutar));
                            
                          }

                          if(this.formverileri[0].dis_ic_tic=='Dış Ticaret'){
                            this.formverileri[0].kdv_tutar ="0";
                            this.formverileri[0].genel_toplam = (toplamtutar+Number(this.formverileri[0].navlun)+Number(this.formverileri[0].sigorta));

                          }else{
                            this.formverileri[0].kdv_tutar = (toplamtutar*18)/100;
                            this.formverileri[0].genel_toplam = (toplamtutar+((toplamtutar*18)/100));

                          }

                          this.formverileri[0].toplam_tutar = toplamtutar;
                          this.formverileri[0].toplam_miktar = toplammiktar;
                          


                          
                     
                        }
                        this.satirlar[blogum.bokindex] = data2;
                        console.log(this.satirlar[blogum.bokindex]);

                        this.cdr.markForCheck();




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
      this.tabloyenile(formids, '1214')

    }

    if (blokid == '1635') {
      this.tabloyenile(formids, '1639')

    }
    this.cdr.markForCheck();

  }
  getFilter(formindex, alanadi, degeri) {

    console.log(formindex + 'CCC' + alanadi + 'CCC' + degeri + 'VVV' + this.formid_alt);

    var masterfield = "";
    var detailfield = "";
    var blogumblokindex = "";
    for (let i = 0; i < this.bloklar.length; i++) {
      if (this.bloklar[i].turu == 'Liste')

        masterfield = this.bloklar[i].masterfield;
      detailfield = this.bloklar[i].detailfield;
      blogumblokindex = this.bloklar[i].bokindex;
    }

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=pdo_gelismisfiltreleme&formid=" + formindex + "&alanadi=" + alanadi + "&degeri=" + degeri;
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      if (data.length > 0) {
        this.formverileri = data;


        var mastervalue = "";
        var deger: any;
        for (var r = 0; r < this.formverileri.length; r++) {
          deger = this.formverileri[0];

          mastervalue = deger[masterfield];


          this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + this.formid_alt + "&sutunlar=&blokindex=" + blogumblokindex + "&recordid=" + deger.index_siparis_fisleri + "&kayitformid=" + this.formid;


          this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {


            this.satirlar[blogumblokindex] = data2;






          });

          //tablo verileri çekilip diziye aktarılıyor



        }


        this.cdr.markForCheck();
      } else {
        swal.fire({
          icon: "warning",
          title: 'Kayıt Bulunamadı.',
          text: 'Aradağınız özelliklerde bir kayıt bulunamadı.',
          customClass: {
            confirmButton: 'btn btn-warning'
          },
        });
      }

    });



  }

  formalanlariyenile() {
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid + '&bolge=' + this.bolgeayrimi;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.blokalanlari = data;

      for (var i = 0; i < this.formverileri.length; i++) {

        for (var x = 0; x < this.blokalanlari.length; x++) {

          if (this.blokalanlari[x].alanturu == 'Dosya') {

            this.formverileri[i][this.blokalanlari[x].alanadi] = this.degistir(this.formverileri[i][this.blokalanlari[x].alanadi],this.blokalanlari[x].verigiristuru);
          }

        }


      }

      for (var i = 0; i < this.blokalanlari.length; i++) {


        if (this.blokalanlari[i].verigiristuru == 'Secimli') {

          var splitted = this.blokalanlari[i].degerleri.split(";");
          var splitted2 = this.blokalanlari[i].etiketleri.split(";");

          var cities_psh: Array<{ id: string, name: string, field: string }> = [];

          for (var k = 0; k < splitted2.length; k++) {
            cities_psh.push({ id: splitted[k], name: splitted2[k], field: this.blokalanlari[i].alanadi });
          }
          this.cities[this.blokalanlari[i].alan_index] = cities_psh;

          var verisi = this.formverileri[0][this.blokalanlari[i].alanadi];


          if (verisi != '') {
            var strArr = verisi.toString().split(",");

            this.formverileri[0][this.blokalanlari[i].alanadi] = strArr;
          }


        }
        if (this.blokalanlari[i].verigiristuru == 'Radiobutton' || this.blokalanlari[i].verigiristuru == 'FixList' || this.blokalanlari[i].verigiristuru == 'Combobox') {

          var splitted;
          var splitted2;

          if (this.blokalanlari[i].alan_index != '1994') {
            splitted = this.blokalanlari[i].degerleri.split(";");

            splitted2 = this.blokalanlari[i].etiketleri.split(";");

          }


          if (this.blokalanlari[i].alan_index == '1994') {
            splitted = this.blokalanlari[i].degerleri.split("|");

            splitted2 = this.blokalanlari[i].etiketleri.split("|");

          }
    
          var cities_psh: Array<{ id: string, name: string, field: string }> = [];

          for (var k = 0; k < splitted2.length; k++) {
            cities_psh.push({ id: splitted[k], name: splitted2[k], field: this.blokalanlari[i].alanadi });
          }



          this.cities[this.blokalanlari[i].alan_index] = cities_psh;

        }

      }

      this.cdr.markForCheck();



    });

  }

  showEditIcon() {
    if (this.editfieldicon == true) {
      this.editfieldicon = false;
    } else {
      this.editfieldicon = true;
    }
  }
  tasarla(id) {

    this.router.navigate(['/design/' + id]);


  }
  TabloModalAc(recordid, title, formid, formtanimi, p1) {
    const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
    modalRef.componentInstance.id = recordid; // should be the id
    modalRef.componentInstance.data = { title: title, formid: formid, formtanimi: formtanimi, parameter: p1 }; // should be the data
    modalRef.result.then((result) => {



      if (this.formid == '502') {
        this.tabloyenile('496', '1089');
        this.tabloyenile('705', '1650');

      }



    }).catch((error) => {
      console.log(error);
    });


  }


  siparistencek(id) {
    // localStorage.setItem('rowformid', formis);
    // localStorage.setItem('rowrecordid', id);



    var firmaid = "";



    this.formverileri.forEach(function (item) {
      Object.keys(item).forEach(function (key) {


        if (key == 'firma') {
          firmaid = item[key];
        }


      });
    });
    if (firmaid == undefined || firmaid == '') {
      swal.fire({
        icon: 'warning',
        title: 'Firma Seçmelisiniz!',
        text: 'Firma seçimi yapmak zorundasınız!',
        confirmButtonText: `Tamam`,

      });
    } else {
      var result = this.TabloModalAc(this.tokenid, 'Sipariş Kalemleri', '401', 'Sipariş Kalemleri', firmaid);
    }
  }


  formModal(id, formis) {
    // localStorage.setItem('rowformid', formis);
    // localStorage.setItem('rowrecordid', id);
    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });

    modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formis, rowrecordid: id, formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {

      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });



  }
  AlanOzellikleri(alanindex, formid) {


    // localStorage.setItem('subformid',formid);
    // localStorage.setItem('rowrecordid',alanindex);
    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formid, rowrecordid: alanindex, formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {
        this.formalanlariyenile();
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }

  otomatikdoldur(formids, masterfield, blokid) {


    // localStorage.setItem('rowformid', formids);
    // localStorage.setItem('rowrecordid', "");

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield + "&tokenid=" + this.tokenid;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.donenveri = data;
      for (var i = 0; i < this.donenveri.length; i++) {
        // localStorage.setItem('mastervalue',this.donenveri[i].mastervalue);


        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=otomatikdoldur&formid=" + this.formid + "&recordid=" + this.tokenid + "&mastervalue=" + this.donenveri[i].mastervalue + '&blokid=' + blokid + '&ilktarih=' + this.formverileri[0].baslamatarih + '&sontarih=' + this.formverileri[0].bitistarihi;

        this.http.get<any>(this.SERVER_URL).subscribe(data2 => {


        });

      }

      this.tabloyenile(formids, blokid);


    });




  }

  satirekle(formids, masterfield, blokid) {

    var firmaid = "";

    this.formverileri.forEach(function (item) {
      Object.keys(item).forEach(function (key) {


        if (key == 'ch_adi') {
          firmaid = item[key];
        }


      });
    });

    // localStorage.setItem('rowformid', formids);
    // localStorage.setItem('rowrecordid', "");
    console.log(formids, blokid);
    // localStorage.setItem('mastervalue',this.tokenid);
    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue: this.tokenid, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {
        this.tabloyenile(formids, blokid);

        if (formids == '496') {

          this.tabloyenile('705', '1650');

        }
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });




  }







  deleterecord(id, formids, blokid) {
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


        durum.evetsil(id, formids);



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
          durum.tabloyenile(formids, blokid);
          if (formids == '496') {

            durum.tabloyenile('705', '1650');
            this.tabloyenile('496', '1089');

          }
        }, 1000);
      }
    });



  }

  public vazgec() {
    this.location.back();
    // this.router.navigate(['/listings/'+this.secilenform]);
  }

  public ayniblokmu(s1: any, s2: any) {

    if (s1 === s2) {
      return true;
    }
    else {
      return false;
    }


  }

  public degistir(filename,verigiristuru) {
  
    if (filename != '' ) {
      return localStorage.getItem('url') + filename;
    }
    else {
      return localStorage.getItem('url') + 'no-photo-available.png';
    }

  }
  movecolumnFields(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  teklifkalemikopyala(id,formids,blokid){
    
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=satinalmakalemkopyala&recordid="+id;
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      if(data[0].status=='success'){
        this.tabloyenile(formids, blokid);
        this.cdr.markForCheck();

      }
    });

  }

  ngOnInit() {


    this.bolgeayrimi = localStorage.getItem('bolgeayrimi');
    this.secilenform = localStorage.getItem('secilenform');
    // this.formtanimi=localStorage.getItem('formtanimi');
    // this.formid=localStorage.getItem('formid');
    // this.recordid=localStorage.getItem('recordid');


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formverileri&formid=" + this.formid + "&kayitid=&userid=" + localStorage.getItem('userid');

    // alert(this.SERVER_URL);

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.formverileri = data;


      if (this.donusturulenToken != undefined && this.donusturulenToken != '') {


        this.tokenid = this.donusturulenToken;
        var ch_adi = localStorage.getItem('aktarilanCh');
        var termin = localStorage.getItem('aktarilanTermin');
        var gelissekli = localStorage.getItem('GelisSekli');
        if(this.formid=='461'){
        

            this.formverileri[0].beklenenteslim = termin;
  
        }else{
                 if (this.formverileri[0].ch_adi == '') {


          this.formverileri[0].ch_adi = ch_adi;
          this.formverileri[0].termin = termin;
          this.formverileri[0].siparis_gelis_sekli = gelissekli;

          var firmaid = "";
          var formverisi: any[];
          this.formverileri.forEach(function (item) {
            Object.keys(item).forEach(function (key) {
              if (key == 'ch_adi') {
                firmaid = item[key];
              }
            });
          });

          this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;
          this.http.get<any>(this.SERVER_URL).subscribe(data => {
            formverisi = data;
            for (var i = 0; i <= formverisi.length - 1; i++) {
              this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
            }
          });

        } 
        }


      } else {
        this.tokenid = this.getRandomString(6);
      }

    });


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid + '&bolge=' + this.bolgeayrimi;


    // alert(this.SERVER_URL);


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.blokalanlari = data;

      for (var i = 0; i < this.formverileri.length; i++) {

        for (var x = 0; x < this.blokalanlari.length; x++) {

          if (this.blokalanlari[x].alanturu == 'Dosya') {

            this.formverileri[i][this.blokalanlari[x].alanadi] = this.degistir(this.formverileri[i][this.blokalanlari[x].alanadi],this.blokalanlari[x].verigiristuru);
          }

        }


      }
      for (var i = 0; i < this.blokalanlari.length; i++) {

        if (this.blokalanlari[i].verigiristuru == 'Secimli') {

          var splitted = this.blokalanlari[i].degerleri.split(";");

          var splitted2 = this.blokalanlari[i].etiketleri.split(";");


          var cities_psh: Array<{ id: string, name: string, field: string }> = [];

          for (var k = 0; k < splitted2.length; k++) {
            cities_psh.push({ id: splitted[k], name: splitted2[k], field: this.blokalanlari[i].alanadi });
          }
          this.cities[this.blokalanlari[i].alan_index] = cities_psh;

          var verisi = this.formverileri[0][this.blokalanlari[i].alanadi];


          if (verisi != '') {
            var strArr = verisi.toString().split(",");

            this.formverileri[0][this.blokalanlari[i].alanadi] = strArr;
          }
        }

        if (this.blokalanlari[i].verigiristuru == 'Radiobutton' || this.blokalanlari[i].verigiristuru == 'FixList' || this.blokalanlari[i].verigiristuru == 'Combobox') {

          var splitted;
          var splitted2;

          if (this.blokalanlari[i].alan_index != '1994') {
            splitted = this.blokalanlari[i].degerleri.split(";");

            splitted2 = this.blokalanlari[i].etiketleri.split(";");

          }

          if (this.blokalanlari[i].alan_index == '1994') {
            splitted = this.blokalanlari[i].degerleri.split("|");

            splitted2 = this.blokalanlari[i].etiketleri.split("|");

          }

      
          var cities_psh: Array<{ id: string, name: string, field: string }> = [];

          for (var k = 0; k < splitted2.length; k++) {
            cities_psh.push({ id: splitted[k], name: splitted2[k], field: this.blokalanlari[i].alanadi });
          }



          this.cities[this.blokalanlari[i].alan_index] = cities_psh;
        }

      }
      this.cdr.markForCheck();


    });


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.bloklar = data;


      var songrup;
      var artim = 0;

      this.grupbasliklari = [];


      for (var i = 0; i < this.bloklar.length; i++) {

        var masterfield = "";
        var detailfield = "";
        var blokindex = "";
        var blogum: any;


        if (songrup != this.bloklar[i].grupadi) {

          if (artim == 0) {
            this.activeTab = this.bloklar[i].grupadi;
          }

          this.grupbasliklari.push({ id: 'blok' + artim, name: this.bloklar[i].grupadi });


          songrup = this.bloklar[i].grupadi;
          artim++;

        }
        if (this.bloklar[i].turu == 'Liste') {
          this.tabloyenile(this.formid, this.bloklar[i].bokindex);
        }



      }




      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid + '&bolge=' + this.bolgeayrimi;




      this.http.get<any>(this.SERVER_URL).subscribe(data => {
        this.blokalanlari = data;

        for (var i = 0; i < this.blokalanlari.length; i++) {
          if (this.blokalanlari[i].verigiristuru == 'Radiobutton' || this.blokalanlari[i].verigiristuru == 'FixList' || this.blokalanlari[i].verigiristuru == 'Combobox') {

            var splitted;
            var splitted2;

            if (this.blokalanlari[i].alan_index != '1994') {
              splitted = this.blokalanlari[i].degerleri.split(";");

              splitted2 = this.blokalanlari[i].etiketleri.split(";");

            }

            if (this.blokalanlari[i].alan_index == '1994') {
              splitted = this.blokalanlari[i].degerleri.split("|");

              splitted2 = this.blokalanlari[i].etiketleri.split("|");

            }
          
            var cities_psh: Array<{ id: string, name: string, field: string }> = [];

            for (var k = 0; k < splitted2.length; k++) {
              cities_psh.push({ id: splitted[k], name: splitted2[k], field: this.blokalanlari[i].alanadi });
            }



            this.cities[this.blokalanlari[i].alan_index] = cities_psh;

          }

        }



      });
      this.cdr.markForCheck();

    });

  }


  pdfdosyayukle($event: any,alanadi) {
    var data = $event.target.files;


    for (var i = 0; i < this.blokalanlari.length; i++) {

      if (this.blokalanlari[i].verigiristuru == 'File(PDF)' && this.blokalanlari[i].alanadi == alanadi) {

        if (data.length > 0) {

          const file = data[0];

          this.blokalanlari[i].name = file.name;
          this.blokalanlari[i].dosya = file;
        }
      }
    }

  }
  exceldosyayukle($event: any,alanadi) {
    var data = $event.target.files;
    for (var i = 0; i < this.blokalanlari.length; i++) {

      if (this.blokalanlari[i].verigiristuru == 'File(XLSX)' && this.blokalanlari[i].alanadi == alanadi) {

        if (data.length > 0) {

          const file = data[0];
          this.blokalanlari[i].name = file.name;
          this.blokalanlari[i].dosya = file;
        }
      }
    }

  }
  public dosyayukle(filename, alanadi) {

    const fileList: FileList = filename.target.files;

    var reader = new FileReader();

    reader.readAsDataURL(filename.target.files[0]); // read file as data url


    for (var i = 0; i < this.blokalanlari.length; i++) {


      if (this.blokalanlari[i].verigiristuru == 'File(JPG)' && this.blokalanlari[i].alanadi == alanadi) {

        if (fileList.length > 0) {

          const file = fileList[0];

          this.blokalanlari[i].name = file.name;
          this.blokalanlari[i].dosya = file;
        }
      }
    }

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.formverileri[0][alanadi] = event.target.result;

      this.cdr.markForCheck();

    }


  }


  parametreler(formids, masterfield, blokid) {
    localStorage.setItem('prosesid', formids);

    this.tabloyenile(this.formid, blokid);

    localStorage.setItem('rowformid', formids);
    localStorage.setItem('rowrecordid', "");

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.donenveri = data;
      for (var i = 0; i < this.donenveri.length; i++) {
        localStorage.setItem('mastervalue', this.donenveri[i].mastervalue);


      }
      this.modalService.open(NewrecordrowProsesComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true }).result.then((result) => {

        if (result == 'Yenile') {
          this.tabloyenile(formids, blokid);
        }

      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });


    });




  }

  alanSiralariGuncelle(col, formid, blokid) {

    console.log(col);
    var yenisira = "";
    for (let i = 0; i < col.length; i++) {
      yenisira = yenisira + ";" + col[i].id + "-" + i;
    }
    console.log(yenisira);
    const alanSiraAp = localStorage.getItem('url') + "angular/dataservis.php?page_id=listesirasiniguncelle&turu=sorgu&formid=" + formid + "&guncelliste=" + yenisira;
    console.log(alanSiraAp);

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
        this.tabloyenile(formid, blokid);

      }
    });

  }

  alanSiralaVazgec(formid, blokid) {
    this.modalService.dismissAll();
    this.tabloyenile(formid, blokid);
  }

  excelModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    var mastervalc = this.tokenid;
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

        url: localStorage.getItem('url') + 'angular/excelimport_genel.php?menu_id=' + menuid + '&masteralan=' + detailfield + '&mastervalue=' + mastervalc + '&firmaid=' + firmaid,

        type: 'POST',

        data: new FormData(this),

        processData: false,

        contentType: false,

        success: function (data) {

          if (data == 'success') {



            
            if (menuid == '278') {
              durum.tabloyenile('278', '537');

            }

            if (menuid == '496') {
              durum.tabloyenile('496', '1089');
              durum.tabloyenile('705', '1650');

            }


            if (menuid == '513') {
              durum.tabloyenile('513', '1125');

            }

            swal.fire({
              icon: "success",
              title: 'Excel import işlemi başarılı!',
              text: 'Seçilen excel dosyası verileri içeri aktarıldı.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });




            setTimeout(() => {

              if (menuid == '496') {
                var yetisenkodlari = "";

                for (let i = 0; i < durum.satirlar[1089].length; i++) {

                  yetisenkodlari = yetisenkodlari + ";" + durum.satirlar[1089][i].yetisenkodu;

                }
                const yetKodSor = localStorage.getItem('url') + "angular/dataservis.php?page_id=yetisenkodlarisorgula&yetisenkodlari=" + yetisenkodlari;
                durum.http.get<any>(yetKodSor).subscribe(data => {

                  if (data[0].status == 'success') {

                    swal.fire({
                      icon: "warning",
                      title: 'Malzeme Kartı olmayanlar var!',
                      confirmButtonText: 'Tamam',

                      html:
                        'Aktarılan excel kalemlerinin içinde malzeme kartı olmayan mamul kodları var.Malzeme kartı oluşturuldu. <br><br><b>' + data[0].malzemekartsiz + '</b>',
                      customClass: {
                        confirmButton: 'btn btn-success'
                      },
                    });
                  }


                });

              }
              else if (menuid == '513') {


                var karsilikkodlari = "";
                for (let i = 0; i < durum.satirlar[1125].length; i++) {

                  karsilikkodlari = karsilikkodlari + ";" + durum.satirlar[1125][i].karsilikkodu;

                }

                const karKodSor = localStorage.getItem('url') + "angular/dataservis.php?page_id=karsilikkodlarisorgula&karsilikkodlari=" + karsilikkodlari;

                durum.http.get<any>(karKodSor).subscribe(data => {

                  if (data[0].karsiliksiz != 'yok') {

                    swal.fire({
                      icon: "warning",
                      title: 'Karşılık kodu olmayanlar var!',
                      html:
                        'Aktarılan excel kalemlerinin içinde karşılık kodları olmayanlar var. <br><br><b>' + data[0].karsiliksiz + '</b>',
                      customClass: {
                        confirmButton: 'btn btn-success'
                      },
                    });
                  }


                });

                setTimeout(function () {
                  swal.close();
                }, 3000);
              }
            }, 2000);







          } else {

          }



        }

      });
      e.preventDefault();

    });

  }
  barkodOkut(id) {
    const modalRef = this.modalService.open(BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
    modalRef.componentInstance.id = id; // should be the id 
    modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma', mastervalue: this.recordid }; // should be the data  
    modalRef.result.then((result) => {
      return result;
    }).catch((error) => {
      console.log(error);
    });
  }
  barkodyazdir(id) {
    window.open("https://www.jurimedya.com/maratonerpservices/barkodyazdir.php?tipi=sayimbarkodu&malzemeid=" + id, '_blank');
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
  TypeWarning(message, header) {
    this.toastr.warning(message, header).onTap.subscribe(() => {
    });
  }
  kaydet() {


    var szort = "";
    const sesult = this.blokalanlari.filter( x => x.zorunlu == 'True' );
    for (let i = 0; i < sesult.length; i++) {
      console.log($('#' + sesult[i].alanadi).hasClass('is-invalid'));
      if ($('#' + sesult[i].alanadi).hasClass('is-invalid') != true) {
        szort = szort+"_degil";
      }else{
        szort="Var";
      }  
    }

    if (szort!="Var") {



      var durum = this;

      var blokalan = this.blokalanlari;
      var secilen = this.secilenform;
      const postUrl = localStorage.getItem('url') + "angular/sender.php?form_id=" + this.formid + "&userid=" + localStorage.getItem('userid') + "&recordid=&tokenid=" + this.tokenid;
      console.log(postUrl);
      let postData = new FormData();


      this.formverileri.forEach(function (item) {
        Object.keys(item).forEach(function (key) {

          for (var i = 0; i < blokalan.length; i++) {
            if (blokalan[i].verigiristuru != 'File(JPG)' && blokalan[i].alanadi == key) {
              postData.append(key, item[key]);
            }

            if (blokalan[i].verigiristuru == 'File(JPG)' && blokalan[i].alanadi == key && blokalan[i].dosya != null) {
              postData.append(key, blokalan[i].dosya, blokalan[i].alanadi);
            }

            if (blokalan[i].verigiristuru == 'File(PDF)' && blokalan[i].alanadi == key && blokalan[i].dosya != null) {
              postData.append(key, blokalan[i].dosya, blokalan[i].alanadi);
            }
            if (blokalan[i].verigiristuru == 'File(XLSX)' && blokalan[i].alanadi == key && blokalan[i].dosya != null) {
              postData.append(key, blokalan[i].dosya, blokalan[i].alanadi);
            }
          }



        });
      });

      this.http.post(postUrl, postData, { responseType: 'text' }).subscribe({
        next: data => {

          swal.fire({
            icon: "success",
            title: 'Kayıt Ekleme başarılı!',
            text: 'Kayıt Eklendi',
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
        error: error => {
          console.error('There was an error!', error);
        }


      })

    } else {
      this.TypeWarning('Zorunlu alanları doldurmadan formu kaydedemezsiniz.', 'Zorunlu Alan!');

    }

  }

} 
