import { Component,ViewChild,ChangeDetectorRef,EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import { HttpClient } from '@angular/common/http';
import HighchartsMore from 'highcharts/highcharts-more.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import * as Highcharts from 'highcharts';
import { GoogleChartsModule,GoogleChartComponent } from 'angular-google-charts';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css'; // optional for styling
import {Router, ActivatedRoute} from '@angular/router';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { debounceTime, distinctUntilChanged, switchMap ,delay} from 'rxjs/operators';
import swal from 'sweetalert2';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexLegend,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";


declare var require: any;

import { createDecoder } from '@zxing/library/esm/core/oned/rss/expanded/decoders/AbstractExpandedDecoderComplement';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { of } from 'rxjs';



export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  colors: string[],
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[],
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels,
  stroke: ApexStroke,
  grid: ApexGrid,
  legend?: ApexLegend,
  tooltip?: ApexTooltip,
  plotOptions?: ApexPlotOptions,
  labels?: string[],
  fill: ApexFill,
  markers?: ApexMarkers,
  theme: ApexTheme,
  responsive: ApexResponsive[]
};

var $info = "#2F8BE6",
$info_light = "#ACE0FC"
var themeColors = [$info, $info_light];

var datam={"series":[{"name":"done","className":"ct-done","value":100},{"name":"outstanding","className":"ct-outstanding","value":70}]};



@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss','../../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None

})

export class Dashboard2Component {

  public chkBoxSelected = [];
  public rows;

  TermL:any="";
  secilidepkod: any="";
  public SelectionType = SelectionType;
  public ColumnMode = ColumnMode;
  tasks:any[];
  active = 1; // Basic Navs
  model: NgbDateStruct;
  date: {year: number, month: number};
  serverSideFilterItems = [];
  public contentHeader: object;
  peopleTypeahead = new EventEmitter<string>();
  selectedPeople;
  bekleyenhastalar:any[];
  adisyonlar:any[];
  iptaller:any[];
  hiddendepart:boolean=true;
  dashboard:any='';
  selectdep:any;
  resources: Array<{ id: string, title: string,sirasi:string }> = [];
  resourcesCheckbox: Array<{ id: string, title: string,sirasi:string }> = [];
 calendarOptions: CalendarOptions = {
  schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
  allDaySlot:false,
  firstDay:1,
  slotMinTime: '09:00:00', 
  slotMaxTime: '20:00:00', 
  expandRows: true,
    height: 'auto',
    slotDuration: '00:15:00',
  timeZone: 'local', // varsayılan bugün seçili geliyor
  locale:"tr",
  buttonText:  {
    today:'Bugün',
    resourceTimeGridDay:'Tüm Birimler',
    month:'Ay',
    week:'Hafta',
    day:'Gün',
    list:  'Ajanda'
},

  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'resourceTimeGridDay,dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  },
  slotLabelFormat:
  {
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: false,
    hour12: false
  },
dayHeaderFormat:{
   weekday: 'short' 

},
  initialView: 'resourceTimeGridDay',
  initialEvents: "", // alternatively, use the `events` setting to fetch from a feed
  weekends: true,
  editable: false,
  selectable: true,
  selectMirror: true,

  eventDidMount: function(info) {


    info.el.addEventListener("contextmenu", (jsEvent)=>{
      jsEvent.preventDefault();
      document.getElementById('contmenu').click();
      document.getElementById('randevuidsitit').title = info.event.id;      
    
  })

    tippy(info.el, {
      content: info.event.extendedProps.description,
      arrow: true,
      animation: 'scale-extreme',
      theme: 'tomato'

      })
    },
    
  viewDidMount: (arg)=> {
    console.log('viewDidMount', arg.view.type);
    if(arg.view.type=='timeGridWeek'){
      this.hiddendepart=false;
    }else{
      this.hiddendepart=true;
      this.selectdep='';
      this.secilidepkod='';
      this.takvimyenile();

    }
  },

  dayMaxEvents: false,
  select: this.handleDateSelect.bind(this),
  eventClick: this.handleEventClick.bind(this),
  resourceOrder: 'sirasi',
  eventSources: [

    // your event source
    {
      url: localStorage.getItem('urlx')+'feed1.php',
      method: 'POST',
   extraParams: {
        salonid: ''
        
      },
      failure: function() {
        alert('there was an error while fetching events!');
      },
      textColor: 'black' // a non-ajax option
    }

    // any other sources...

  ]
   
 /* you can update a remote database when these fire:
  eventAdd:
  eventChange:
  eventRemove:
  */
};
  it: { id: string; title: string; sirasi: string; }[];
  initview: string;
  initialized=true;
  cihazmobilmi: boolean;
  musterisec: any;

  columns = [
    { name: 'Name', prop: 'full_name',header:'',dataKey:'' },
    { name: 'Email', prop: 'email',header:'',dataKey:''  },
    { name: 'Age', prop: 'age',header:'',dataKey:''  },
    { name: 'Salary', prop: 'salary',header:'',dataKey:''  }
  ];

  @ViewChild('tableResponsive') tableResponsive: any;


  constructor(private deviceService: DeviceDetectorService,private router: Router, private httpClient: HttpClient,private cdr: ChangeDetectorRef,private modalService: NgbModal) {

    this.active=1;

    var colURL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink=musteri-kayitlari";

    this.httpClient.get<any>(colURL).subscribe(data => {
      this.columns=data;
  
     
  
    });

    var sd_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=714&sutunlar=cariindex,caritanimi,tckimlikno,dogumgunu,cinsiyet,dishekimi,durumu,yetkiligsm,subesi,cariindex,epostaizni,smsizni,ulke,plasiyerkodu,segment,kayittarihi,dosyano,olusturan,kvkk";



    this.httpClient.get<any>(sd_URL).subscribe(data2 => {
 
  
        this.rows = data2;
  
      this.cdr.markForCheck();
  
  
    });

    this.cihazmobilmi = this.deviceService.isMobile();
 

    var serurl=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=700";

    this.httpClient.get<any>(serurl).subscribe(data => {

    for(var i=0;i<data.length;i++)
    {
          this.resources.push({ id: data[i].id, title: data[i].tanimi,sirasi:data[i].sirasi });
          this.resourcesCheckbox.push({ id: data[i].id, title: data[i].tanimi,sirasi:data[i].sirasi });
      
    }
    this.calendarOptions.resources= this.resources;

      var dd = this.resourcesCheckbox;
      dd.push({ id: '99', title: 'TÜM BİRİMLER',sirasi:'99' });
      this.it =dd;
      this.cdr.markForCheck();
  }
    );
}


opencontext(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' ,size: 'md', keyboard: false, centered: true}).result.then((result) => {
  }, (reason) => {
  });


}
getPeople(term: string = null){
  let items =this.musterisec;
  if (term) {
      items = items.filter(x => x.caritanimi.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
  }
  return of(items).pipe(delay(500));
}
private serverSideSearch() {
  this.peopleTypeahead.pipe(
      distinctUntilChanged(),
      debounceTime(400),
      switchMap(term => this.getPeople(term))
  ).subscribe(x => {
      this.serverSideFilterItems = x;
  }, (err) => {
      console.log(err);
      this.serverSideFilterItems = [];
  });
}

bugunsec(){
  

  var currentDate = new Date();
  this.calendarOptions.initialDate=currentDate;
this.model=null;
  this.takvimyenile();

}

manueltarihsec(){
var ym:any = "";

  if(this.model.month>9){
     ym = this.model.month;
  }else{
     ym = '0'+this.model.month;
  }


  var yd:any="";

  if(this.model.day>9){
    yd = this.model.day;
 }else{
  yd = '0'+this.model.day;
 }
  var yt = this.model.year+"-"+ym+"-"+yd;

  this.calendarOptions.initialDate=yt;

  this.takvimyenile();
}

takvimyenile(){
  if(this.selectdep!=null && this.selectdep!='' && this.selectdep!='undefined' && this.secilidepkod!=null && this.secilidepkod!='' && this.secilidepkod!='undefined'  ){
    this.initialized = false; // I added this to stop fullcalender component rendering

    this.calendarOptions.eventSources= [
  
      // your event source
      {
        url: localStorage.getItem('urlx')+'feed1.php',
        method: 'POST',
     extraParams: {
          salonid: this.secilidepkod
          
        },
        failure: function() {
          alert('there was an error while fetching events!');
        },
        textColor: 'black' // a non-ajax option
      }
  
      // any other sources...
  
    ];
    this.calendarOptions.initialView='timeGridWeek';

    setTimeout(() => {
      this.initialized = true; // I added this to stop fullcalender component rendering
      this.cdr.markForCheck();
  
    }, 100);
    }else{
      this.initialized = false; // I added this to stop fullcalender component rendering
      if (this.cihazmobilmi==false)
      {
        this.calendarOptions.initialView='resourceTimeGridDay';
      }
    else
    {
      this.calendarOptions.initialView='timeGridWeek';
    }
      this.calendarOptions.eventSources= [
    
        // your event source
        {
          url: localStorage.getItem('urlx')+'feed1.php',
          method: 'POST',
       extraParams: {
            salonid: ''
            
          },
          failure: function() {
            alert('there was an error while fetching events!');
          },
          textColor: 'black' // a non-ajax option
        }
    
        // any other sources...
    
      ];
      setTimeout(() => {
        this.initialized = true; // I added this to stop fullcalender component rendering
        this.cdr.markForCheck();
    
      }, 100);
    }
 

}

randevularfiltrele(e){
  if(e.id=='99'){
    this.secilidepkod='';
    this.initialized = false; // I added this to stop fullcalender component rendering
    this.calendarOptions.initialView='resourceTimeGridDay';
    this.calendarOptions.eventSources= [
  
      // your event source
      {
        url: localStorage.getItem('urlx')+'feed1.php',
        method: 'POST',
     extraParams: {
          salonid: ''
          
        },
        failure: function() {
          alert('there was an error while fetching events!');
        },
        textColor: 'black' // a non-ajax option
      }
  
      // any other sources...
  
    ];
    setTimeout(() => {
      this.initialized = true; // I added this to stop fullcalender component rendering
      this.cdr.markForCheck();
  
    }, 100);
  }else{
    this.secilidepkod=e.id;


    this.initialized = false; // I added this to stop fullcalender component rendering

    this.calendarOptions.eventSources= [
  
      // your event source
      {
        url: localStorage.getItem('urlx')+'feed1.php',
        method: 'POST',
     extraParams: {
          salonid: e.id
          
        },
        failure: function() {
          alert('there was an error while fetching events!');
        },
        textColor: 'black' // a non-ajax option
      }
  
      // any other sources...
  
    ];
    this.calendarOptions.initialView='timeGridWeek';

    setTimeout(() => {
      this.initialized = true; // I added this to stop fullcalender component rendering
      this.cdr.markForCheck();
  
    }, 100);
  }


}

satirduzelt(id)
{



  var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
 
  modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'381',rowrecordid:id,formtanimi:'',subformid:'',exparam:''};
  
  modalSat.result.then((result) => {
    
    if (result=='Yenile')
    {
      this.yenile();
    }

 }, (reason) => {
 });

}


evetcikisyap(id)
{
  var SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=deleterecord&formid=738&recordid="+id+"&userid="+localStorage.getItem('userid');

  this.httpClient.get<any>(SERVER_URL).subscribe(data => {


    this.yenile();

  });
}


evetrandevusil(id)
{
  var SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=deleterecord&formid=712&recordid="+id+"&userid="+localStorage.getItem('userid');

  this.httpClient.get<any>(SERVER_URL).subscribe(data => {

    this.takvimyenile();
    this.yenile();

  });
}



cikisyap(id)
{
  var idZ = id;
var durum=this;

   swal.fire({
     title: 'Müşteri çıkış yapılsın mı?',
     text: "Değişiklik geri alınamayacaktır!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#2F8BE6',
     cancelButtonColor: '#F55252',
     confirmButtonText: 'Evet Çıkış Yap',
     cancelButtonText: 'Vazgeç',
     customClass: {
       confirmButton: 'btn btn-primary',
       cancelButton: 'btn btn-danger ml-1'
     },
     buttonsStyling: false,
   }).then(function (result) {
     if (result.value) {
 
       durum.evetcikisyap(idZ);

durum.yenile();
       
 
 
       swal.fire({
         icon: "success",
         title: 'Çıkış başarılı!',
         text: 'Seçilen müşteri çıkış yaptı',
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




randevusil(id)
{
  var idZ = id;
var durum=this;

   swal.fire({
     title: 'Randevu iptal edilsin mi?',
     text: "Değişiklik geri alınamayacaktır!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#2F8BE6',
     cancelButtonColor: '#F55252',
     confirmButtonText: 'Evet İptal Et',
     cancelButtonText: 'Vazgeç',
     customClass: {
       confirmButton: 'btn btn-primary',
       cancelButton: 'btn btn-danger ml-1'
     },
     buttonsStyling: false,
   }).then(function (result) {
     if (result.value) {
 
       durum.evetrandevusil(idZ);

durum.yenile();
       
 
 
       swal.fire({
         icon: "success",
         title: 'Randevu İptal!',
         text: 'Seçilen randevu iptal edilmiştir.',
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

adisyonagit(id,caritanimi,adisyon)
{
  localStorage.setItem('secilenhasta',id);
  localStorage.setItem('secilenhastaadi',caritanimi);
  localStorage.setItem('secilenadisyon',adisyon);
  this.router.navigate(['/tedaviplanlama/']);
}

randevuduzelt(id)
{



  var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
 
  modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'712',rowrecordid:id,formtanimi:'',subformid:'',exparam:''};
  
  modalSat.result.then((result) => {
    
    if (result=='Yenile')
    {
      this.yenile();
    }

 }, (reason) => {
 });

}

satirekle(formids,masterfield,blokid,params)
{
 // localStorage.setItem('rowformid', formids);
  // localStorage.setItem('rowrecordid', "");

      // localStorage.setItem('mastervalue',this.tokenid);
      var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   
      modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:formids,rowrecordid:'',formtanimi:'',subformid:'',exparam:params};
      
      modalSat.result.then((result) => {

        if (result=='Yenile')
        {
          this.takvimyenile();
          this.yenile();
        }
   
     }, (reason) => {
     });

  

}

yenigorev()
{
  this.satirekle('381','','1652','');

}

yeniadisyon()
{
  this.satirekle('738','','1652','');

}

yeniproje()
{
  this.satirekle('809','','1652','');

}

hatirlatmayap()
{
  this.satirekle('744','','1652','');

}

yenile()
{
  const taskUrl2 = localStorage.getItem('url') + "angular/dataservis.php?page_id=todopage&userid="+localStorage.getItem('userid');

   
  this.tasks=[];
        this.httpClient.get<any>(taskUrl2).subscribe(data => {
          this.tasks=data;
    
        });


        const taskUrl3 = localStorage.getItem('url') + "angular/dataservis.php?page_id=bekleyenlerigetir&userid="+localStorage.getItem('userid');

   
        this.bekleyenhastalar=[];
              this.httpClient.get<any>(taskUrl3).subscribe(data => {
                this.bekleyenhastalar=data;
          
              });



              const taskUrl3s = localStorage.getItem('url') + "angular/dataservis.php?page_id=adisyongetir&userid="+localStorage.getItem('userid');

   
              this.adisyonlar=[];
                    this.httpClient.get<any>(taskUrl3s).subscribe(data => {
                      this.adisyonlar=data;
                
                    });

              const taskUrl4 = localStorage.getItem('url') + "angular/dataservis.php?page_id=iptallerigetir&userid="+localStorage.getItem('userid');

   
              this.iptaller=[];
                    this.httpClient.get<any>(taskUrl4).subscribe(data => {
                      this.iptaller=data;
                
                    });

}

handleDateSelect(selectInfo: DateSelectArg) {

  const calendarApi = selectInfo.view.calendar;
  console.log(selectInfo);
console.log(selectInfo.startStr);
console.log(selectInfo.endStr);

var secilidepartman='';
var sdepkod = '';

if(this.selectdep!=null && this.selectdep!='' && this.selectdep!='undefined' && this.secilidepkod!=null && this.secilidepkod!='' && this.secilidepkod!='undefined'  ){
secilidepartman=this.selectdep;
sdepkod = this.secilidepkod;
}else{
  secilidepartman = selectInfo.resource._resource.title;
  sdepkod = selectInfo.resource._resource.id;
}
this.satirekle('712','','1652',selectInfo.startStr+'|'+selectInfo.endStr+'|'+secilidepartman+'|'+sdepkod);

}

handleEventClick(clickInfo: EventClickArg) {
 console.log(clickInfo.event.startStr);
    var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   
    modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'712',rowrecordid:clickInfo.event._def.publicId,formtanimi:'',subformid:'',exparam:clickInfo.event.startStr+'|'+clickInfo.event.endStr};
    
    modalSat.result.then((result) => {
      
      if (result=='Yenile')
      {
        this.takvimyenile();
      }
 
   }, (reason) => {
   });

  
}


hastayagit(){
  var dd = this.selectedPeople;
  localStorage.setItem('secilenhasta',dd);
  localStorage.setItem('secilenhastaadi',"");
  this.router.navigate(['/tedaviplanlama/']);

}


randevuislemiyap(turu){
  var randid =  document.getElementById('randevuidsitit').title;

  var ranedvudetay = localStorage.getItem('url')+"angular/dataservis.php?page_id=formverileri&formid=712&kayitid="+randid;
  this.httpClient.get<any>(ranedvudetay).subscribe(data=>{
    
    var randevulukod=data[0].musteri_kodu;
    var randevuluadi=data[0].musteri_adi;
  
  if(turu=='geldi'){
    var durumurl = localStorage.getItem('url')+"angular/dataservis.php?page_id=randevuyuguncelle&durumu=Geldi&randevuid="+randid;
    this.httpClient.get<any>(durumurl).subscribe(data=>{

    });
  }else if(turu=='iptal'){
    var durumurl = localStorage.getItem('url')+"angular/dataservis.php?page_id=randevuyuguncelle&durumu=İptal Edildi&randevuid="+randid;
    this.httpClient.get<any>(durumurl).subscribe(data=>{

    });
  }else if(turu=='sil'){
    this.randevusil(randid);
  }else if(turu=='hastadetay'){
 
    this.router.navigate(['editrecordform/'+randevulukod+'/714/Müşteri Kayıtları']);

  }else if(turu=='hesapkarti'){
    localStorage.setItem('secilenhasta',randevulukod);
    localStorage.setItem('secilenhastaadi',randevuluadi);
    this.router.navigate(['/tedaviplanlama/']);
  }
});
this.modalService.dismissAll();
} 

ngOnInit() {
  const now = new Date();
  this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

 
 // this.yenile();
  //this.serverSideSearch();

}

dbleditrow(e){

    
  
  // localStorage.setItem('formid', this.formid);
  // localStorage.setItem('formtanimi', this.formtanimi);
  // localStorage.setItem('recordid', e[0].id);


  localStorage.setItem('secilenhasta',e[0].id);
  localStorage.setItem('secilenhastaadi',e[0].caritanimi);
  this.router.navigate(['/tedaviplanlama/']);

  }

  editrecord(id)
  {

    localStorage.setItem('secilenform', "musteri-kayitlari");
    
    // localStorage.setItem('formid', this.formid);
    // localStorage.setItem('formtanimi', this.formtanimi);
    // localStorage.setItem('recordid', id);
 

    this.router.navigate(['/editrecordform/'+id+'/714/Müşteri Kayıtları/']);
  }

}
