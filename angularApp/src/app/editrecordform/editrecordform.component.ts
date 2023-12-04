import { Component, HostListener, OnInit, ChangeDetectorRef, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DatatableData } from './data/datatables.data';
import { Router, ActivatedRoute } from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NgbModal, NgbTooltip, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SwiperDirective, SwiperConfigInterface} from 'ngx-swiper-wrapper';

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
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { formatDate } from '@angular/common';
import { BarcodeFormComponent } from 'app/barcodeform/barcodeform.component';
import { isThisTypeNode } from 'typescript';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-editrecordform',
  templateUrl: './editrecordform.component.html',
  styleUrls: ['./editrecordform.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditrecordformComponent implements OnInit {



 






  closeResult: string;
  swal = swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;

  avatar: any = "";
  activeTab = "general";
  generalFormSubmitted = false;
  changePasswordFormSubmitted = false;
  infoFormSubmitted = false;
  alertVisible = true;

  termC: any = "";
  vActive = 'top'; // Vertical Pills
  active = 1; // Basic Navs
  kActive = 1; // Keep content
  sActive; // Selecing Navs
  disabled = true;
  dActive; // Dynamic Navs
  tip1:any='';
  tip2:any='';
  tip3:any='';
  tip4:any='';

  tip1_y:any='';
  tip2_y:any='';
  tip3_y:any='';
  tip4_y:any='';




  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  validatingForm: FormGroup;
  secilenform: any;
  formbilgileri: any[];
  bloklar_y: any[];
  formverileri: any[];
  gelenveriler: any[];
  verikumeler: any[];

  formid_alt: any;

  donenveri: any[];

  cities: Array<{ id: string, name: string, field: string }>[] = [];
  sutunlars: Array<{ id: string, name: string }>[] = [];
  satirlar: Array<{ id: string }>[] = [];
  sutunlar: string;
  grupbasliklari: Array<{ id: string, name: string }> = [];

toplammaliyet=0;
birimmaliyet=0;



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



  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @ViewChild('tableResponsive') tableResponsive: any;
  public expanded: any = {};



   @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;


  // default
  public swiperDefaultConfig: SwiperConfigInterface = {};

  // navigation
  public swiperNavigationConfig: SwiperConfigInterface = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  // pagination
  public swiperPaginationConfig: SwiperConfigInterface = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  // progress
  public swiperProgressConfig: SwiperConfigInterface = {
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
  public swiperMultipleConfig: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  // multi row
  public swiperMultiRowConfig: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  // centered slides option-1
  public swiperCenterOpt1Config: SwiperConfigInterface = {
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
  public swiperCenterOpt2Config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
  };

  // fade effect
  public swiperFadeEffectConfig: SwiperConfigInterface = {
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
  public swiperCubeEffectConfig: SwiperConfigInterface = {
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
  public swiperCoverflowEffectConfig: SwiperConfigInterface = {
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
  public swiperAutoplayConfig: SwiperConfigInterface = {
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
  public swiperParallaxConfig: SwiperConfigInterface = {
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
  public swiperLazyLoadingConfig: SwiperConfigInterface = {
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
  public swiperResponsiveBreakpointsConfig: SwiperConfigInterface = {
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


  public editing = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;

  // server side row data
  public serverSideRowData;

  // private
  private tempData = [];
  private multiPurposeTemp = [];
  setInxerval: any;
  editfieldicon: boolean = true;
  userroles = localStorage.getItem('unvani');


  public formid = this.route.snapshot.paramMap.get('formid');
  public recordid = this.route.snapshot.paramMap.get('recordid');
  public formtanimi = this.route.snapshot.paramMap.get('formtanimi');
  


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
  constructor( public toastr: ToastrService, private cdr: ChangeDetectorRef, private modalService: NgbModal, private router: Router, private http: HttpClient, private route: ActivatedRoute, private http2: HttpClient,) {




  }

  barkodOkut(id) {
    const modalRef = this.modalService.open(BarcodeFormComponent, { backdrop: 'static', size: 'md', keyboard: false, centered: false });
    modalRef.componentInstance.id = id; // should be the id 
    modalRef.componentInstance.data = { title: 'Barkod', formid: id, formtanimi: 'Barkod Okutma',mastervalue:this.recordid  }; // should be the data  
    modalRef.result.then((result) => {
      return result;
    }).catch((error) => {
      console.log(error);
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

  setActiveTab(tab) {


    this.activeTab = tab;

    this.cdr.markForCheck();
 

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

  public baslikkontrol(grupadi) {
    if (grupadi == '') {
      return 'Genel Bilgiler';
    }
    if (grupadi != '') {
      return grupadi;
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
  uretimYontemGit(e, c) {
    // localStorage.setItem('recordid', e);
    // localStorage.setItem('formid', c);
    // localStorage.setItem('formtanimi', 'Üretim Yöntemleri');
    this.router.navigate(['/editrecordform/'+e+'/'+c+'/Üretim Yöntemleri/']);
    window.location.reload();
  }

  paletbarkodyazdir(id) {
    window.open(localStorage.getItem('url')+"maratonservices/barkodyazdir.php?tipi=paletbarkodu&id=" + id, '_blank');

  }
  barkodyazdir(id) {
    window.open(localStorage.getItem('url')+"maratonservices/barkodyazdir.php?tipi=sayimbarkodu&malzemeid=" + id, '_blank');
  }

  kartinagit(id)
  {

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=malzemeturugetir&kayitid="+id;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {

      if (data[0].malzemeturu=='Hammadde')
      {
this.hammaddeyegit(data[0].index_malzemeler);
      }

      if (data[0].malzemeturu=='Yarımamul')
      {
       this.yarimamulegit(data[0].index_malzemeler); 
      }

    });
  

  }





  toplammaliyethesapla(id)
  {

 

  }


  yuzdeyenile(id,rednedeni,blokid)
  {
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=yuzdeyenile&formid="+this.formid+"&recordid="+id+"&userid="+localStorage.getItem('userid')+"&yeniyuzde="+rednedeni+"&malzemeid="+this.recordid;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 
      this.tabloyenile(this.formid,blokid);

      this.cdr.markForCheck();

      
  
    });
  }


  yuzdegir(id,blokid,yuzdepayi)
  {
  
    var idZ = id;
    var durum=this;
  
    swal.fire({
      title: "Yüzde Değiştir",
      text: "Yeni yüzde oranı:",
      input: 'text',
      inputValue: yuzdepayi,
      showCancelButton: true        
  }).then((result) => {
      if (result.value) {
       
    
        durum.yuzdeyenile(idZ,result.value,blokid);
  
           
          
          
                swal.fire({
                  icon: "success",
                  title: 'Yüzde yenileme İşlemi Başarılı!',
                  text: 'Seçilen reçete güncellendi',
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

  getir(id)
  {

   

  }



  hammaddeyegit(id) {
    window.open("https://192.168.1.201:81/#/editrecordform/"+id+"/304/Hammaddeler", '_blank');
  }

  yarimamulegit(id) {
    window.open("https://192.168.1.201:81/#/editrecordform/"+id+"/301/Yar%C4%B1mamul%20Kartlar%C4%B1", '_blank');
  }

  sarjformuyazdir(id) {
    window.open(localStorage.getItem('url')+"maratonservices/uretimtalepformu.php?id=" + id + "&sarid=" + this.recordid, '_blank');

  }
  mixsarjformuyazdir(id) {
    window.open(localStorage.getItem('url')+"maratonservices/uretimtalepformu.php?id=" + id + "&mixsarid=" + this.recordid, '_blank');

  }
  tasarla(id) {

    this.router.navigate(['/design/' + id]);


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
  formlaraGit(id, formid, gidilecekform, baglanacak, baglanacak2) {

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formyonlendirmeyap&baglanacak=" + baglanacak + "&baglanacak2=" + baglanacak2 + "&recordid=" + id + "&formu=" + formid + "&gidecegiform=" + gidilecekform;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {

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
      for (let obj of data) {
        // console.log("object:", obj);
        for (let key in obj) {
          if (obj[key] != '') {

            console.log(obj[key]);
            //   localStorage.setItem('recordid', obj[key]);
            //   localStorage.setItem('formid',formCid);
            //   localStorage.setItem('formtanimi', ftanm);
            //  this.router.navigate(['/editrecordform']);
            //  window.location.reload();
          } else {
            console.log('yok böyle bir kayıt');
          }

          //  console.log("      key:", key, "value:", obj[key]);
        }
      }




    });


  }


  sipariseDonustur(recordid) {
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



  }

  evetsil(id, d) {
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + d + "&recordid=" + id + "&userid=" + localStorage.getItem('userid');
    console.log(this.SERVER_URL);

    this.http.get<any>(this.SERVER_URL).subscribe(data => {



    });
  }

  isemriformu(id) {

    window.open(localStorage.getItem('url')+"maratonservices/isemriformu.php?isemrino=" + id, '_blank');
  }
  kalitekontrolformu(id) {
    window.open(localStorage.getItem('url')+"maratonservices/kalitekontrolformu.php?isemrino=" + id, '_blank');

  }
  editrecord(id, formids, blokid) {
    // localStorage.setItem('rowformid',formids);
    // localStorage.setItem('rowrecordid', id);

    var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

    modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:formids,rowrecordid:id,formtanimi:'',subformid:''};
    
    modalSat.result.then((result) => {
      
      if (result=='Yenile')
      {
        this.tabloyenile(formids,blokid);
      }
 
   }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
  pdfegit(veri){
    window.open(veri,'_blank');
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
  
  islemyap(formid, alanadi) {

    if (formid==197&&alanadi=='menutanimi')
    {
  
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
  
      var menu_seo =  menutanimi.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
  
        this.formverileri[0].menu_seo=menu_seo;
  
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


      this.http.get<any>(presKar).subscribe(data => {
        if(data[0].status == 'Success'){

          this.tabloyenile(formid, '1442');

        }
        this.cdr.markForCheck();

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
      console.log(presKar);
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


  tabloyenile(formids, blokid) {

    var verialanlari: any[];
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + this.formid;



    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.bloklar_y = data;

      for (var i = 0; i < this.bloklar_y.length; i++) {

        if (this.bloklar_y[i].bokindex == blokid || blokid == '') {



          var masterfield = "";
          var detailfield = "";
          var blokindex = "";
          var blogum: any;
          if (this.bloklar_y[i].turu == 'Liste') {
            blogum = this.bloklar_y[i];
            blokindex = this.bloklar_y[i].bokindex;
            masterfield = blogum[masterfield];
            detailfield = blogum[detailfield];




            //tablo alanları çekilip diziye aktarılıyor
            this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + blogum.bagliformindex + "&turu=sorgu";
  

            this.http.get<any>(this.SERVER_URL).subscribe(data2 => {
              verialanlari = data2;



              var cities_psh2: Array<{ id: string, name: string }> = [];
              cities_psh2 = [];

              for (var j = 0; j < verialanlari.length; j++) {


                cities_psh2.push({ id: verialanlari[j].Name, name: verialanlari[j].prop });
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

                      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=" + blogum.bagliformindex + "&sutunlar=" + this.formbilgileri[t].sutunlar + "&blokindex=" + blogum.bokindex + "&recordid=" + this.recordid + "&kayitformid=" + this.formid;


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
      this.tabloyenile(formids, '1214')

    }



if (blokid=='870')
{
  this.tabloyenile(formids,'1721');

}

if (blokid=='1726')
{
  this.tabloyenile(formids,'1728');
}

    this.cdr.markForCheck();
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
        if (this.blokalanlari[i].verigiristuru=='Radiobutton' || this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox')
        {
         
          var splitted;
          var splitted2;
         
          if (this.blokalanlari[i].alan_index!='1994' && this.blokalanlari[i].alan_index!='10009')
          {
            splitted = this.blokalanlari[i].degerleri.split(";"); 
  
            splitted2 = this.blokalanlari[i].etiketleri.split(";"); 
            
          }
          
  
          if (this.blokalanlari[i].alan_index=='1994' && this.blokalanlari[i].alan_index!='10009')
          {
            splitted = this.blokalanlari[i].degerleri.split("|"); 
  
           splitted2 = this.blokalanlari[i].etiketleri.split("|"); 
            
          }
          if (this.blokalanlari[i].alan_index=='10009')
          {
            
            splitted = this.blokalanlari[i].degerleri.split(";"); 
  
           splitted2 = this.blokalanlari[i].etiketleri.split(";"); 
  
  } 
          if (this.blokalanlari[i].keyfield=='index_malzemeler' && this.blokalanlari[i].alan_index!='10009')
          {
            splitted = localStorage.getItem('degerleri').split(";"); 
  
           splitted2 = localStorage.getItem('etiketleri').split(";"); 
  
          }  
          var cities_psh:Array<{id: string, name: string,field:string}> = []; 
  
          for(var k=0;k<splitted2.length;k++)
          {  
            cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
          }
  
  
  
          this.cities[this.blokalanlari[i].alan_index]=cities_psh;
  
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


  // localStorage.setItem('rowformid',formid);
    // localStorage.setItem('rowrecordid',alanindex);


    var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

    modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:formid,rowrecordid:alanindex,formtanimi:'',subformid:''};
    
    modalSat.result.then((result) => {
      
      if (result=='Yenile')
      {
        this.formalanlariyenile();
      }
 
   }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   });

  }

  sarjdoldur(formids, masterfield, blokid) {

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


    this.http.get<any>(mg).subscribe(data => {
      this.donenveri = data;
      for (var i = 0; i < this.donenveri.length; i++) {
        localStorage.setItem('mastervalue', this.donenveri[i].mastervalue);


        var sgs = localStorage.getItem('url') + "angular/dataservis.php?page_id=sarjdoldur&recordid=" + this.recordid + "&mastervalue=" + this.donenveri[i].mastervalue + '&blokid=' + blokid + '&planmiktar=' + planmiktar + '&sarjmiktar=' + sarjmiktar + '&torbakg=' + torbakg;

        this.http.get<any>(sgs).subscribe(data2 => {
          this.tabloyenile(formids, blokid);

          if (data2[0].status == 'OK') {

            swal.fire({
              icon: "success",
              title: 'Sarj işlemi başarılı!',
              text: 'Sarj kayıtları oluşturuldu.',
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



    });




  }
  otomatikdoldur(formids, masterfield, blokid) {


    localStorage.setItem('rowformid', formids);
    localStorage.setItem('rowrecordid', "");

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.donenveri = data;
      for (var i = 0; i < this.donenveri.length; i++) {
        localStorage.setItem('mastervalue', this.donenveri[i].mastervalue);


        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=otomatikdoldur&formid=" + this.formid + "&recordid=" + this.recordid + "&mastervalue=" + this.donenveri[i].mastervalue + '&blokid=' + blokid + '&ilktarih=' + this.formverileri[0].baslamatarih + '&sontarih=' + this.formverileri[0].bitistarihi;

        this.http.get<any>(this.SERVER_URL).subscribe(data2 => {


        });

      }

      this.tabloyenile(formids, blokid);


    });




  }

  sarjgirdisionayla(idz,formid,blokid){
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=sarjgirdisionayla&formid="+this.secilenform+"&recordid="+idz+"&userid="+localStorage.getItem('userid');

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      if(data[0].status == 'success'){

        this.tabloyenile(formid,blokid);
  
      }
    });
  }
  sarjbittionay(id){
    var idZ = id;
    var durum=this;
    
        swal.fire({
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
      
            durum.sarjgirdisionayla(idZ,durum.formid,'1530');
            
      
            swal.fire({
              icon: "success",
              title: 'Onaylama İşlemi Başarılı!',
              text: 'Seçilen şarj girdisi onaylandı',
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
  satirekle(formids, masterfield, blokid) {


    this.tabloyenile(this.formid, blokid);

    // localStorage.setItem('rowformid', formids);
    // localStorage.setItem('rowrecordid', "");

    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.donenveri = data;
      for (var i = 0; i < this.donenveri.length; i++) {
        // localStorage.setItem('mastervalue', this.donenveri[i].mastervalue);
        var msv =this.donenveri[i].mastervalue;


      }
    
      var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

      modalSat.componentInstance.Modaldata = {mastervalue:msv,rowformid:formids,rowrecordid:'',formtanimi:'',subformid:''};
      
      modalSat.result.then((result) => {
        
        if (result=='Yenile')
        {
          this.tabloyenile(formids,blokid);
        }
   
     }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
  
    
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



  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  
    if (this.formid == '445' && this.formtanimi == 'İş Emirleri') {

      this.setInxerval = setTimeout(() => {
        var ismerkezi = document.getElementById('ismerkezi').getAttribute('ng-reflect-model');;

        var presKar = localStorage.getItem('url') + "angular/dataservis.php?page_id=isistasyonfiltreli&ismerkez=" + ismerkezi;
        this.http.get<any>(presKar).subscribe(data => {

          var cities_psh: Array<{ id: string, name: string, field: string }> = [];

          for (var k = 0; k < data.length; k++) {
            cities_psh.push({ id: data[k].isistasyonu, name: data[k].isistasyonu, field: this.blokalanlari['12'].alanadi });
          }
          this.cities['7304'] = cities_psh;

        });



        clearInterval(this.setInxerval);

      }, 3000);



    }


  }


  maliyethesapla(tur)
  {

    var miktar =  "1";
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

    if (tur=='Satınalma')
    {

      this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=satinalmamaliyetleri&formid=" + this.formid + "&kayitid=" + this.recordid+"&miktar="+miktar+"&tip="+tip+"&blokid=1530";
      console.log(this.SERVER_URL);

     
      this.http.get<any>(this.SERVER_URL).subscribe(data => {

        this.tabloyenile(this.formid, '1575');

      });


    }
   

  }

  getirs(id)
  {

    if (id=='610')
    {
return this.tip1;
    }
    if (id=='614')
    {
      return this.tip2;  
    }
    if (id=='616')
    {
      return this.tip3;
    }
    if (id=='618')
    {
      return this.tip4;
    }

  }

  getirs_2(id)
  {

    if (id=='610')
    {
return this.tip1_y;
    }
    if (id=='614')
    {
      return this.tip2_y;  
    }
    if (id=='616')
    {
      return this.tip3_y;
    }
    if (id=='618')
    {
      return this.tip4_y;
    }

  }


  ngOnInit() {


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

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.formverileri = data;


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

    });


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
        if (this.blokalanlari[i].verigiristuru=='Radiobutton' || this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox')
        {
         
          var splitted;
          var splitted2;
         
          if (this.blokalanlari[i].alan_index!='1994' && this.blokalanlari[i].alan_index!='10009')
          {
          
            splitted = this.blokalanlari[i].degerleri.split(";"); 
  
            splitted2 = this.blokalanlari[i].etiketleri.split(";"); 
            
          }
          
  
          if (this.blokalanlari[i].alan_index=='1994' && this.blokalanlari[i].alan_index!='10009')
          {
            splitted = this.blokalanlari[i].degerleri.split("|"); 
  
           splitted2 = this.blokalanlari[i].etiketleri.split("|"); 
            
          }
          if (this.blokalanlari[i].alan_index=='10009')
          {
            
            splitted = this.blokalanlari[i].degerleri.split(";"); 
  
           splitted2 = this.blokalanlari[i].etiketleri.split(";"); 
  
  } 
          if (this.blokalanlari[i].keyfield=='index_malzemeler' && this.blokalanlari[i].alan_index!='10009')
          {
            splitted = localStorage.getItem('degerleri').split(";"); 
  
           splitted2 = localStorage.getItem('etiketleri').split(";"); 
  
          }  
          var cities_psh:Array<{id: string, name: string,field:string}> = []; 
  
          for(var k=0;k<splitted2.length;k++)
          {  
            cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
          }
  
  
  
          this.cities[this.blokalanlari[i].alan_index]=cities_psh;
  
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

      var verialanlari: any[];

      for (var i = 0; i < this.bloklar.length; i++) {
        if (songrup != this.bloklar[i].grupadi) {

          if (artim == 0) {
            this.activeTab = this.bloklar[i].grupadi;
          }

          this.grupbasliklari.push({ id: 'blok' + artim, name: this.bloklar[i].grupadi });

          songrup = this.bloklar[i].grupadi;
          artim++;

        }



        var masterfield = "";
        var detailfield = "";
        var blokindex = "";
        var blogum: any;
        if (this.bloklar[i].turu == 'Liste') {
          this.tabloyenile(this.formid, this.bloklar[i].bokindex);
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




      this.toplammaliyethesapla('');
    
   
    });


    var durum = this;



    //  eğer bunu kapatırsan edit record dediğinde alt tablo olanların verileri ve liste alanları gelmiyor.
    setTimeout(function () {
      for (var i = 0; i < durum.bloklar.length; i++) {

        //  durum.tabloyenile(this.formid,durum.bloklar[i].bokindex);
      }


    }, 1000);



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
      var mastervalue = $('#recordid').val();
      var firmaid = "";

      if (menuid == '277') {
        firmaid = $('#ch_adi').val();
      }

      var tm: any = "";
      var b: any = "";
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

  TabloModalAc(recordid, title, formid, formtanimi) {
    const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
    modalRef.componentInstance.id = recordid; // should be the id
    modalRef.componentInstance.data = { title: title, formid: formid, formtanimi: formtanimi }; // should be the data
    modalRef.result.then((result) => {

      return result;


    }).catch((error) => {
      console.log(error);
    });
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


  control(veri) {
    if (veri == 'true') {
      return "<input type='checkbox'  class='form-control' disabled value='true'>";
    }
    else if (veri == 'false') {
      return '<input type="checkbox"  class="form-control" disabled value=false">';

    } else {
      return veri;

    }
  }


  vdfkarsiligivar(ved, forid, tit) {

    var result = this.TabloModalAc(this.recordid, ved.no, forid, tit);
    console.log(result);



  }
  urunkarsiligivar(veu, forid, tit) {
    var result = this.TabloModalAc(this.recordid, veu.no, forid, tit);
    console.log(result);

  }

  bekleyensiparisler(ed) {

    const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
    modalRef.componentInstance.id = this.recordid; // should be the id
    modalRef.componentInstance.data = { title: this.recordid, firmakodu: ed.firma_kodu }; // should be the data
    modalRef.result.then((result) => {



      if (result == 'OK') {
        this.tabloyenile('605', '1354');
      } else {

      }

    }).catch((error) => {
      console.log(error);
    });
  }


  rezervlerdencek(ed, forid) {

    const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
    modalRef.componentInstance.id = this.recordid; // should be the id
    modalRef.componentInstance.data = { title: ed.siparis_no, formid: forid }; // should be the data
    modalRef.result.then((result) => {



      if (result == 'OK') {
        this.tabloyenile('278', '537');


      } else {

      }

    }).catch((error) => {
      console.log(error);
    });
  }
  eksikAlanlar(id) {

    const cd = localStorage.getItem('url') + "eksikalanolustur.php?formid=" + id + "&userid=" + localStorage.getItem('userid');

    this.http.get<any>(cd).subscribe(data => {

      if (data[0].status == 'OK') {
        swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Eksik Alanlar Oluşturuldu',
          confirmButtonText: `Tamam`,

        });
      }


    });

  }

  tabloOlustur(id) {

    const cd = localStorage.getItem('url') + "tabloolustur.php?formid=" + id + "&userid=" + localStorage.getItem('userid');

    this.http.get<any>(cd).subscribe(data => {

      if (data[0].status == 'OK') {
        swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Tablo Oluşturuldu',
          confirmButtonText: `Tamam`,

        });
      }


    });

  }
  TypeWarning(message, header) {
    this.toastr.warning(message, header).onTap.subscribe(() => {
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
    const postUrl = localStorage.getItem('url') + "angular/sender.php?form_id=" + this.formid + "&userid=" + localStorage.getItem('userid') + "&recordid=" + this.recordid;
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

} 