import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy, Renderer2, Inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ChatService } from './musterihesapkarti.service';
import { Chat, UsersChat } from './musterihesapkarti.model';
import { DOCUMENT } from '@angular/common';
import { ConfigService } from 'app/shared/services/config.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

import { DeviceDetectorService } from 'ngx-device-detector';
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
  selector: 'app-musterihesapkarti',
  templateUrl: './musterihesapkarti.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./musterihesapkarti.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  closeResult: string;
  swal = swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;

  avatar: any = "";
  hastasecildi:any="";
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
  cihazmobilmi:boolean=false;
  tedaviler:any[];
  bakiyeler:any[];
  fiyatgrubu:any;

  tip1_y:any='';
  tip2_y:any='';
  tip3_y:any='';
  tip4_y:any='';
  secilendis:any='';
  tedavigruplari:any[];
  dishekimleri:any[];
  secilenhasta:any="";


formid:any=812;
islemtarihi:string;

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
  secilengrup:any;
  secilentedavi:any;

  donenveri: any[];

  cities: Array<{ id: string, name: string, field: string }>[] = [];
  sutunlars: Array<{ id: string, name: string }>[] = [];
  satirlar: Array<{ id: string }>[] = [];
  sutunlar: string;
  grupbasliklari: Array<{ id: string, name: string }> = [];

toplammaliyet=0;
birimmaliyet=0;

coklusecim:boolean=true;
brfiyatcarp:boolean=true;

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


  public ColumnMode = ColumnMode;

  SERVER_URL = localStorage.getItem('url');


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


  
  userroles = localStorage.getItem('unvani');



  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @ViewChild('tableResponsive') tableResponsive: any;
  public expanded: any = {};
secilentutar:any;
secilenbirim:any;
  chats: Chat[] = [];
  cet: any = [];
  disler:any=[];
  disler2:any=[];
  activeChat: UsersChat;
  usersChat: UsersChat[] = [];
  activeChatUser: string;
  activeChatUserImg: string;
  loggedInUserImg: string;
  newMessage = "";
  searchQuery: string = '';
  placement = "bottom-right";
  isContentOverlay = false;
  userid: any = localStorage.getItem('userid');
  clasim:any='chat-sidebar';
  public config: any = {};
  layoutSub: Subscription;

  public urlid = this.route.snapshot.paramMap.get('id');
  messages = new Array();
  item: number = 0;
  users: string;
  dataV: any;
  aliciid: any;
  mesajcek: string;
  recordid:any;
  blokid:any;
  formids:any;
  leftChat: boolean = false;
  activeChatSenderUserImg: string;
  viewInterval:any;
  dataCount: any;
  constructor(private http: HttpClient,private http2: HttpClient,private modalService: NgbModal,private deviceService: DeviceDetectorService,  private elRef: ElementRef,private router: Router,  private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private configService: ConfigService, private cdr: ChangeDetectorRef,
    private chatService: ChatService, private route: ActivatedRoute) {



    this.users = localStorage.getItem('url') +"angular/dataservis.php?page_id=hastalarigetir&userindeks=" + this.userid;

    this.http.get<any>(this.users).subscribe(data => {
      this.usersChat = data;

      if (this.urlid != null) {
        var filterData = data.filter(a => a.cariindex == this.urlid);
        this.viewChat(filterData, this.urlid);
        this.activeChatUser = filterData[0].caritanimi;
        this.activeChatUserImg = filterData[0].profilresim;


      }


    });


    this.config = this.configService.templateConf;
    this.activeChat = chatService.usersChat.find(_ => _.isActiveChat);
    this.activeChatUser = this.activeChat.name;
    this.activeChatUserImg = this.activeChat.avatar;
    this.loggedInUserImg = "assets/img/portrait/small/avatar-s-1.png"
    this.renderer.addClass(this.document.body, "chat-application");
    //this.usersChat.find(o => o.user_indeks === 10);

  }


  tedavilerigetir(tedavigrubu)
  {
this.secilengrup=tedavigrubu;
this.secilentedavi='';



var periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=692&tedavigrubu="+tedavigrubu+'&fiyatgrubu='+this.fiyatgrubu;
this.http.get<any>(periocek).subscribe(data => {





});


  }

  ngOnInit() {

    this.cihazmobilmi=this.deviceService.isMobile();

    if (this.cihazmobilmi==true)
    {
      this.clasim='';
    }


    this.islemtarihi = moment().format("Y-M-d");

  
    var periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=737";
    this.http.get<any>(periocek).subscribe(data => {
  

   
  
    });


    var periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=698";
    this.http.get<any>(periocek).subscribe(data => {
  
  
      this.dishekimleri = data;
   
  
    });



    this.users = localStorage.getItem('url') +"angular/dataservis.php?page_id=hastalarigetir&userindeks=" + this.userid;

    this.http.get<any>(this.users).subscribe(data => {
      this.usersChat = data;
      this.cdr.markForCheck();





    });

    if (localStorage.getItem('secilenhasta')!=='')
    {
      var id=localStorage.getItem('secilenhasta');


      
    periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=bakiyecek&saticiid="+id+"&type=Alt";
    this.http.get<any>(periocek).subscribe(data => {
  
  
      this.bakiyeler = data;

      for (var i=0;i<this.bakiyeler.length;i++)
      {
        this.bakiyeler[i].bakiyesi=this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1;

        if (this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1<0)
        {
          this.bakiyeler[i].durumum='Borçlu'; 
        }

        if (this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1>0)
        {
          this.bakiyeler[i].durumum='Alacaklı'; 
        }
        if (this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1===0)
        {
          this.bakiyeler[i].durumum='Temiz'; 
        }
      }

      
   
  
    });
      this.hastasecildi=id;

this.secilenhasta=localStorage.getItem('secilenhastaadi');
this.fiyatgrubu='TDB';

    var periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=perio&hastaid="+id+"&type=Üst";
    this.http.get<any>(periocek).subscribe(data => {
  
  
      this.disler = data;
   
  
    });

      periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=perio&hastaid="+id+"&type=Alt";
    this.http.get<any>(periocek).subscribe(data => {
  
  
      this.disler2 = data;
   
  
    });


    localStorage.setItem('secilenform','hasta-hesap-karti');
    this.searchQuery='';

    this.hesapkarti(id);


    this.secilenform = localStorage.getItem('secilenform');





          this.aliciid = id;
       
    }

   


  }

  ngOnDestroy() {
clearInterval(this.viewInterval);
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }

    this.renderer.removeClass(this.document.body, "chat-application");
  }




  //send button function calls
  onAddMessage() {
    if (this.newMessage != "") {

      console.log(this.aliciid);

      const postUrl = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_mesajgonder";

      let postData = new FormData();

      postData.append('gonderenid', localStorage.getItem('userid'));
      postData.append('aliciid', this.aliciid);
      postData.append('mesaj', this.newMessage);

      this.http.post(postUrl, postData).subscribe(data => {
        this.mesajcek = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + this.aliciid + "&userid=" + localStorage.getItem('userid');

        this.http.get<any>(this.mesajcek).subscribe(data => {

          this.chats = data;

          this.cdr.markForCheck();


        });

      },
        err => {
          console.log('Error: ' + err.error);
        });

      // this.activeChat.chats.push({
      //   isReceived: false,
      //   time: "",
      //   messages: [this.newMessage],
      //   messageType: 'text'
      // })
      this.newMessage = "";
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

  hastaara()
  {

if (this.searchQuery.length>=3)
{
    this.users = localStorage.getItem('url') +"angular/dataservis.php?page_id=hastalarigetir&userindeks=" + this.userid+"&filtre="+this.searchQuery;

    this.http.get<any>(this.users).subscribe(data => {
      this.usersChat = data;
      this.cdr.markForCheck();





    });
  }

  }

  public baslikkontrol(grupadi) {
    if (grupadi == '') {
      return 'Genel Bilgiler';
    }
    if (grupadi != '') {
      return grupadi;
    }
  }


  public ayniblokmu(s1: any, s2: any) {

    if (s1 === s2) {
      return true;
    }
    else {
      return false;
    }


  }


  hesapkarti(id) {

   

this.formid='812';
    localStorage.setItem('recordid',id);
    this.recordid=id;
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




   
    });




    var durum = this;



    //  eğer bunu kapatırsan edit record dediğinde alt tablo olanların verileri ve liste alanları gelmiyor.
    setTimeout(function () {
      for (var i = 0; i < durum.bloklar.length; i++) {

        //  durum.tabloyenile(this.formid,durum.bloklar[i].bokindex);
      }


    }, 1000);



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

    this.cdr.markForCheck();
  }

  public degistir(filename) {
    if (filename != '') {
      return localStorage.getItem('url') + filename;
    }
    else {
      return localStorage.getItem('url') + 'no-photo-available.png';
    }

  }

  


  setActiveTab(tab) {


    this.activeTab = tab;

    this.cdr.markForCheck();
 

  }


  hastakarti()
  {
    localStorage.setItem('secilenform', 'musteri-firmalar');
  this.router.navigate(['/editrecordform/'+this.recordid+'/714/Müşteri Firmalar/']);
  }


  randevuver()
  {
    localStorage.setItem('secilenrandevuhastasi',this.recordid);
  this.router.navigate(['/dashboard/dashboard2']);
  }

  yenihasta()
  {
    localStorage.setItem('secilenform', 'hasta-kayitlari');
  this.router.navigate(['/newrecordform/714/Müşteri Kayıtları/']);
  }
  

  listeyedon()
  {
    this.recordid=null;
    this.secilengrup=null;

  }


  doktorsec(id)
  {


    var secilidisler='';
    var dissayisi=0;

   

    if (this.secilentedavi=='')
    {

      swal.fire({
        icon: "error",
        title: 'İşlem seçimi yapılmadı',
        text: 'İşlem atayabilmek için sol menüden yapılacak işlemin seçilmiş olması gereklidir',
        customClass: {
          confirmButton: 'btn btn-danger'
        },
      });

      setTimeout(function () {
        swal.close();

      }, 2000);

    }
    else
    {

var islemtanimi=this.secilentedavi;
var tutar=0;


localStorage.setItem('secilentedavi',this.secilentedavi);
localStorage.setItem('islemiyapan',id);

this.satirekle('723','cariindex','1668');
  }
  }


  onecikar_gerial(id)
  {

var durum=this;

      swal.fire({
        title: 'Öne Çıkar Geri Al',
        text: "Tedavi normal sırasına konulsun mu?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Evet Öne Çıkarma',
        cancelButtonText: 'Vazgeç',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {

              
    durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=onecikar_gerial&id=" + id;


    durum.http.get<any>(durum.SERVER_URL).subscribe(data => {


    


    });


        }

      });
   



  }

  
  onecikar(id)
  {

var durum=this;

      swal.fire({
        title: 'Öne Çıkarma',
        text: "Tedavi öne çıkarılsın mı?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Evet Öne Çıkar',
        cancelButtonText: 'Vazgeç',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {

              
    durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=onecikar&id=" + id;


    durum.http.get<any>(durum.SERVER_URL).subscribe(data => {

   

    });


        }

      });
   



  }

  secimitemizle()
  {



  
   

    for(var i=0;i<this.disler.length;i++)
    {
      this.disler[i].isActiveChat=false;
    }

    for(var i=0;i<this.disler2.length;i++)
    {
      this.disler2[i].isActiveChat=false;
    }


  }


  dissec(chats,disno)
  {



    if (this.coklusecim!=true)
    {

   

    for(var i=0;i<this.disler.length;i++)
    {
      this.disler[i].isActiveChat=false;
    }

    for(var i=0;i<this.disler2.length;i++)
    {
      this.disler2[i].isActiveChat=false;
    }
  }


  if (chats.isActiveChat==true)
  {
    chats.isActiveChat = false; 
  }
  else
  {
    chats.isActiveChat = true; 
  }
     

  }


  
  editrecord(id,formids,blokid)
  {

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



  evetsil(id, d) {
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + d + "&recordid=" + id + "&userid=" + localStorage.getItem('userid');
    console.log(this.SERVER_URL);

    this.http.get<any>(this.SERVER_URL).subscribe(data => {



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

  tedavisec(chats,id)
  {

    for(var i=0;i<this.tedaviler.length;i++)
    {
      this.tedaviler[i].isActiveChat=false;
    }
    this.secilentedavi=chats.hizmettanimi;
 
        chats.isActiveChat = true; 
        this.secilentutar=chats.fiyat;
        this.secilenbirim=chats.fiyatbirimi;
     

  }
  viewChat(chats, id) {

this.hastasecildi=id;

this.secilenhasta=chats.caritanimi;
this.fiyatgrubu=chats.fiyatgrubu;

    var periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=perio&hastaid="+id+"&type=Üst";
    this.http.get<any>(periocek).subscribe(data => {
  
  
      this.disler = data;
   
  
    });

      periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=perio&hastaid="+id+"&type=Alt";
    this.http.get<any>(periocek).subscribe(data => {
  
  
      this.disler2 = data;
   
  
    });


    
    periocek = localStorage.getItem('url') +"angular/dataservis.php?page_id=bakiyecek&saticiid="+id+"&type=Alt";
    this.http.get<any>(periocek).subscribe(data => {
  
  
      this.bakiyeler = data;

      for (var i=0;i<this.bakiyeler.length;i++)
      {
        this.bakiyeler[i].bakiyesi=this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1;

        if (this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1<0)
        {
          this.bakiyeler[i].durumum='Borçlu'; 
        }

        if (this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1>0)
        {
          this.bakiyeler[i].durumum='Alacaklı'; 
        }
        if (this.bakiyeler[i].odemetoplami*1-this.bakiyeler[i].islemtoplami*1===0)
        {
          this.bakiyeler[i].durumum='Temiz'; 
        }
      }
   
  
    });


    localStorage.setItem('secilenform','hasta-hesap-karti');
    this.searchQuery='';

    this.hesapkarti(id);


    this.secilenform = localStorage.getItem('secilenform');





    this.usersChat.forEach(chat => {
      if (chats.user_indeks == chats.cariindex) {

        if (id == "") {
          this.aliciid = chats.cariindex;
        }

        else {
          this.aliciid = id;
        }

        chat.isActiveChat = false;


      }
    })


    for(var i=0;i<this.usersChat.length;i++)
    {
      this.usersChat[i].isActiveChat=false;
    }
 
        chats.isActiveChat = true; 


this.viewInterval = setInterval(()=>{
  this.mesajcek = localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_mesajcek&mesajlasilan=" + this.aliciid + "&userid=" + localStorage.getItem('userid');
  this.http.get<any>(this.mesajcek).subscribe(data => {


    this.chats = data;
    this.cdr.markForCheck();
    this.urlid = null;

  });
 
},2000);
this.activeChat = chats;
this.activeChat.isActiveChat = true;
this.activeChatUser = chats.caritanimi;
this.activeChatUserImg = chats.profilresim;
this.activeChatSenderUserImg = localStorage.getItem('profilresim');

this.isContentOverlay = false;
  }


  onSidebarToggle() {
    this.isContentOverlay = true;
  }

  onContentOverlay() {
    this.isContentOverlay = false;

  }

}
