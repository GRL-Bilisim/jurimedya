import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableData } from './data/datatables.data';
import { Router, ActivatedRoute } from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

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
  grupbasliklari: Array<{ id: string, name: string }> = [];

  formid_alt: any;

  recordid: any;
  tip1: any = "";
  tip2: any = "";
  tip3: any = "";
  tip4: any = "";

  cities: Array<{ id: string, name: string, field: string }>[] = [];
  sutunlars: Array<{ id: string, name: string }>[] = [];
  satirlar: Array<{ id: string }>[] = [];
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
  constructor(public toastr: ToastrService, private cdr: ChangeDetectorRef, private modalService: NgbModal, private router: Router, private http: HttpClient, private route: ActivatedRoute, private http2: HttpClient,) {




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


  pdfdosyayukle($event: any, alanadi) {
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
  islemyap(formid, alanadi) {

    if (formid == 197 && alanadi == 'menutanimi') {

      var menutanimi = document.getElementById('menutanimi').getAttribute('ng-reflect-model');


      const trChars = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
      };
      for (const key of Object.keys(trChars)) {
        menutanimi = menutanimi.replace(new RegExp('[' + key + ']', 'g'), trChars[key]);
      }

      var menu_seo = menutanimi.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text

      this.formverileri[0].menu_seo = menu_seo;

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




      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=ilgilikisigetir&cariid=" + firmaid;

      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        formverisi = data;

        for (var i = 0; i <= formverisi.length - 1; i++) {
          this.formverileri[0].ilgili = formverisi[i].ilgili_kisi;
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



  editrecord(id, formids, blokid) {

    // localStorage.setItem('rowformid',formids);
    // localStorage.setItem('rowrecordid', id);

    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formids, rowrecordid: id, formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {
        this.tabloyenile(formids, blokid);
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


                      this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {


                        this.satirlar[blogum.bokindex] = data2;

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
      this.tabloyenile(formids, '1214');

    }

    if (blokid == '870') {
      this.tabloyenile(formids, '1721');

    }


    if (blokid == '1726') {
      this.tabloyenile(formids, '1728');
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


  TypeWarning(message, header) {
    this.toastr.warning(message, header).onTap.subscribe(() => {
    });
  }

  barkodOkut(id) {
    const modalRef = this.modalService.open(BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
    modalRef.componentInstance.id = id; // should be the id 
    modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma', mastervalue: this.tokenid }; // should be the data  
    modalRef.result.then((result) => {
      return result;
    }).catch((error) => {
      console.log(error);
    });
  }
  formalanlariyenile() {
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.blokalanlari = data;

      for (var i = 0; i < this.formverileri.length; i++) {

        for (var x = 0; x < this.blokalanlari.length; x++) {

          if (this.blokalanlari[x].alanturu == 'Dosya') {

            this.formverileri[i][this.blokalanlari[x].alanadi] = this.degistir(this.formverileri[i][this.blokalanlari[x].alanadi]);
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

          if (this.blokalanlari[i].alan_index != '1994' && this.blokalanlari[i].alan_index != '10009') {
            splitted = this.blokalanlari[i].degerleri.split(";");

            splitted2 = this.blokalanlari[i].etiketleri.split(";");

          }


          if (this.blokalanlari[i].alan_index == '1994' && this.blokalanlari[i].alan_index != '10009') {
            splitted = this.blokalanlari[i].degerleri.split("|");

            splitted2 = this.blokalanlari[i].etiketleri.split("|");

          }
          if (this.blokalanlari[i].alan_index == '10009') {

            splitted = this.blokalanlari[i].degerleri.split(";");

            splitted2 = this.blokalanlari[i].etiketleri.split(";");

          }
          if (this.blokalanlari[i].keyfield == 'index_malzemeler' && this.blokalanlari[i].alan_index != '10009') {
            splitted = localStorage.getItem('degerleri').split(";");

            splitted2 = localStorage.getItem('etiketleri').split(";");

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

  satirekle(formids, masterfield, blokid) {
    // localStorage.setItem('rowformid', formids);
    // localStorage.setItem('rowrecordid', "");

    // localStorage.setItem('mastervalue',this.tokenid);
    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue: this.tokenid, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {
        this.tabloyenile(formids, blokid);
      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });



  }




  yenikayit(formids) {

    localStorage.setItem('formid', this.secilenform);
    localStorage.setItem('formtanimi', this.formtanimi);
    localStorage.setItem('recordid', "");

    this.router.navigate(['/forms/newrecord']);

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

        durum.tabloyenile(formids, blokid);


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

  public vazgec() {
    this.router.navigate(['/listings/' + this.secilenform]);
  }

  public ayniblokmu(s1: any, s2: any) {

    if (s1 === s2) {
      return true;
    }
    else {
      return false;
    }


  }

  public degistir(filename) {
    if (filename != '') {
      return localStorage.getItem('url') + filename;
    }
    else {
      return localStorage.getItem('url') + 'no-photo-available.png';
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

  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  getir(id) {

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=toplamkilo&kayitid=" + this.recordid + "&blok=" + id;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {




    });

  }


  kartinagit(id) {

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=malzemeturugetir&kayitid=" + id;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {

      if (data[0].malzemeturu == 'Hammadde') {
        this.hammaddeyegit(data[0].index_malzemeler);
      }

      if (data[0].malzemeturu == 'Yarımamul') {
        this.yarimamulegit(data[0].index_malzemeler);
      }

    });


  }



  hammaddeyegit(id) {
    window.open("https://192.168.1.201:81/#/editrecordform/" + id + "/304/Hammaddeler", '_blank');
  }

  yarimamulegit(id) {
    window.open("https://192.168.1.201:81/#/editrecordform/" + id + "/301/Yar%C4%B1mamul%20Kartlar%C4%B1", '_blank');
  }


  ngOnInit() {


    this.getir(610);
    this.getir(614);
    this.getir(616);
    this.getir(618);



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
        var ch_adi = sessionStorage.getItem('aktarilanCh');
        var termin = sessionStorage.getItem('aktarilanTermin');
        var gelissekli = sessionStorage.getItem('GelisSekli');
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

      } else {
        this.tokenid = this.getRandomString(6);
      }

    });


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid;


    // alert(this.SERVER_URL);


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.blokalanlari = data;

      for (var i = 0; i < this.formverileri.length; i++) {

        for (var x = 0; x < this.blokalanlari.length; x++) {

          if (this.blokalanlari[x].alanturu == 'Dosya') {

            this.formverileri[i][this.blokalanlari[x].alanadi] = this.degistir(this.formverileri[i][this.blokalanlari[x].alanadi]);
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

          if (this.blokalanlari[i].alan_index != '1994' && this.blokalanlari[i].alan_index != '10009') {
            splitted = this.blokalanlari[i].degerleri.split(";");

            splitted2 = this.blokalanlari[i].etiketleri.split(";");

          }


          if (this.blokalanlari[i].alan_index == '1994' && this.blokalanlari[i].alan_index != '10009') {
            splitted = this.blokalanlari[i].degerleri.split("|");

            splitted2 = this.blokalanlari[i].etiketleri.split("|");

          }
          if (this.blokalanlari[i].alan_index == '10009') {

            splitted = this.blokalanlari[i].degerleri.split(";");

            splitted2 = this.blokalanlari[i].etiketleri.split(";");

          }
          if (this.blokalanlari[i].keyfield == 'index_malzemeler' && this.blokalanlari[i].alan_index != '10009') {
            splitted = localStorage.getItem('degerleri').split(";");

            splitted2 = localStorage.getItem('etiketleri').split(";");

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




      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid=" + this.formid;




      this.http.get<any>(this.SERVER_URL).subscribe(data => {
        this.blokalanlari = data;

        for (var i = 0; i < this.blokalanlari.length; i++) {
          if (this.blokalanlari[i].verigiristuru == 'Radiobutton' || this.blokalanlari[i].verigiristuru == 'FixList' || this.blokalanlari[i].verigiristuru == 'Combobox') {

            var splitted;
            var splitted2;

            if (this.blokalanlari[i].alan_index != '1994' && this.blokalanlari[i].alan_index != '10009') {
              splitted = this.blokalanlari[i].degerleri.split(";");

              splitted2 = this.blokalanlari[i].etiketleri.split(";");

            }


            if (this.blokalanlari[i].alan_index == '1994' && this.blokalanlari[i].alan_index != '10009') {
              splitted = this.blokalanlari[i].degerleri.split("|");

              splitted2 = this.blokalanlari[i].etiketleri.split("|");

            }
            if (this.blokalanlari[i].alan_index == '10009') {

              splitted = this.blokalanlari[i].degerleri.split(";");

              splitted2 = this.blokalanlari[i].etiketleri.split(";");

            }
            if (this.blokalanlari[i].keyfield == 'index_malzemeler' && this.blokalanlari[i].alan_index != '10009') {
              splitted = localStorage.getItem('degerleri').split(";");

              splitted2 = localStorage.getItem('etiketleri').split(";");

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
  paletbarkodPrintSor(id) {
    var bid = id;
    swal.fire({
      icon: "success",
      title: 'Palet Barkod',
      text: 'Palet Barkod Yazdırılsın Mı ?',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Evet',
      cancelButtonText: 'İptal',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(function (result) {
      if (result.value) {

        window.open(localStorage.getItem('url') + "maratonservices/barkodyazdir.php?tipi=paletbarkodu&id=" + bid, '_blank');


      }
    });
  }
  kaydet() {

    var szort = "";
    const sesult = this.blokalanlari.filter(x => x.zorunlu == 'True');
    for (let i = 0; i < sesult.length; i++) {
      console.log($('#' + sesult[i].alanadi).hasClass('is-invalid'));
      if ($('#' + sesult[i].alanadi).hasClass('is-invalid') != true) {
        szort = szort + "_degil";
      } else {
        szort = "Var";
      }
    }

    if (szort != "Var") {


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
          }



        });
      });

      this.http.post(postUrl, postData, { responseType: 'text' }).subscribe({
        next: data => {


          var onayso = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + this.formid;

          this.http.get<any>(onayso).subscribe(data => {

            if (data.length > 0) {
              if (data[0].otolisteyedon == 'true') {


                swal.fire({
                  icon: "success",
                  title: 'Kayıt Güncelleme başarılı!',
                  text: 'Kayıt Güncellendi',
                  confirmButtonText: 'Listeye Dön',

                  customClass: {
                    confirmButton: 'btn btn-success'
                  },
                }).then(function (result) {

                  durum.router.navigate(['/listings/' + durum.secilenform]);
                });

              } else {

                swal.fire({
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
              }
            }

          });


          setTimeout(function () {
            swal.close();
            if (durum.formid == '642') {
              var paletid = "";
              durum.formverileri.forEach(function (item) {
                Object.keys(item).forEach(function (key) {
                  paletid = item['paletno'];
                });
              });
              durum.paletbarkodPrintSor(paletid);
            }
          }, 2000);

        },
        error: error => {
          console.error('There was an error!', error);
        }


      })


    }
    else {
      this.TypeWarning('Zorunlu alanları doldurmadan formu kaydedemezsiniz.', 'Zorunlu Alan!');

    }

  }
  newrecordrowS() {
    localStorage.setItem('subformid', this.formid_alt);
    localStorage.setItem('formtanimi', this.formtanimi);
    localStorage.setItem('rowformid', this.formid);
    localStorage.setItem('rowrecordid', '');

    this.router.navigate(['/newrecordrow']);
  }
} 
