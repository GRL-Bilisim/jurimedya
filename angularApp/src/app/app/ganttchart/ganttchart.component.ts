import { Component, ViewEncapsulation, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as swalFunctions from '../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import {Router, ActivatedRoute} from '@angular/router';
import customEvents from 'highcharts-custom-events';
customEvents(Highcharts);
import { ganttchartService } from './ganttchart.service';
import { Task } from './ganttchart.model';
import { DragulaService } from 'ng2-dragula';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from "highcharts/highcharts-gantt";
const Draggable = require("highcharts/modules/draggable-points.js");
Draggable(Highcharts);
const Exporting = require("highcharts/modules/exporting.js");
Exporting(Highcharts);
import { ToastrService } from 'ngx-toastr';

import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

import { isThisSecond } from 'date-fns';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';

declare var $: any; 
interface ExtendedYAxisLabelsOptions extends Highcharts.YAxisLabelsOptions {
  events: YAxisLabelsEvents
}
interface YAxisLabelsEvents {
  click(): void;
}
@Component({
  selector: 'app-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.scss'],
  providers: [ganttchartService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class ganttchartComponent  {

   dc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
   dx = new Date().getTime() + 86400000 + new Date().getTimezoneOffset() * 60000;
  Highcharts: typeof Highcharts = Highcharts;

  public donusturulenToken = this.route.snapshot.paramMap.get('planid');

   today = new Date();

  isler: Array<{ id: string, name: string,start:number,end:number,color:string,y:number }> = [];
  isistasyonlari:Array<{ group: string, machinename: string }> = [];

  y_axis:Array<{ name: string, categories:string[] }> = [];

  is_istasyonlari:any= [];
  altistasyonlar:any= [];
  isemirleri:any[]=null;
  isistasyonlari_id:any[]=null;
istasyonsayisi:number=2;
istatistikgizle: boolean=true;

  chartOptions: Highcharts.Options = {

    chart: {
   
     
    },
    title: {
      text: 'Gant Üretim Planı'
  },

  subtitle: {
      text: 'Sürükle bırak yaparak planı düzenleyebilirsiniz'
  },
    plotOptions: {
      series: {
        
          animation: false, // Do not animate dependency connectors
          dragDrop: {
              draggableX: true,
              draggableY: true,
              
              dragPrecisionX: 1000 * 60 * 60 * 24 / 3 // Snap to eight hours
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}',
              style: {
                  cursor: 'default',
                  pointerEvents: 'none'
              }
          },
          allowPointSelect: true,
          point: {
              events: {
                click:  (e) => {
                  var durum=this;
                  console.log(e.point);
                  console.log(e.point.options.id);

                    swal.fire({
                      title: 'Yapılacak İşlem Nedir? ',
                      text: "işlem seçimi yaparak devam edin ",
                      icon: 'warning',
                      showCancelButton: true,
                      showDenyButton:true,
                      denyButtonText: 'İş Emrini Gör',
                     denyButtonColor: '#2F8BE6',
                      confirmButtonColor: '#2F8BE6',
                      cancelButtonColor: '#F55252',
                      confirmButtonText: 'Güncelleme Yap',
                      cancelButtonText: 'İptal',
                      customClass: {
                        confirmButton: 'btn btn-primary',
                        cancelButton: 'btn btn-danger ml-1',
                        denyButton: 'btn btn-warning ml-1'
                      },
                      buttonsStyling: false,
                    }).then(function (result) {
                      if(result.isDenied){
                        durum.detaygit(e.point.options.id);
                      }
                      if (result.isConfirmed) {
                        durum.editrecord(e.point.options.id);
                      }else{
                     
                      }
                    });

                //  alert ('Clicked');
              }
              
              }
          }
      }
  },


    yAxis: {
      categories: ['İş Merkezi Seçiniz'],
      min: 0,
      max: this.istasyonsayisi-1   
    },

   
    
    xAxis: {
      currentDateIndicator:true,
      min: this.dc,
      max:this.dx,
      tickInterval: 3600 * 1000
    },
    lang: {
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      contextButtonTitle: 'Daha Fazla',
      decimalPoint: ',',
      thousandsSep: '.',
      downloadJPEG: 'JPEG olarak indir',
      downloadPDF: 'PDF olarak indir',
      downloadPNG: 'PNG olarak indir',
      downloadSVG: 'SVG İndir',
      printChart: 'Yazdır',
      rangeSelectorFrom: 'Başlama',
      rangeSelectorTo: 'Bitiş',
      rangeSelectorZoom: 'Zoom Yap',
      resetZoom: 'Normal',
      resetZoomTitle: 'Zoom 1:1',
    },
    rangeSelector: {
      allButtonsEnabled: true,
      enabled: true,
      inputEnabled: false,
      buttonPosition: {
        align: 'left'
      },
      labelStyle: {
        display: 'none'
      },
      buttons: [{
          type: 'month',
          count: 1,
          text: '1 ay'
        },
        {
          type: 'month',
          count: 3,
          text: '3 ay'
        },
        {
          type: 'month',
          count: 6,
          text: '6 ay'
        },
        {
          type: 'year',
          count: 1,
          text: '1 yıl'
        },
        {
          type: 'year',
          count: 2,
          text: '2 yıl'
        },
        {
          type: 'year',
          count: 5,
          text: '5 yıl'
        },
        {
          type: 'all',
          text: 'Hepsi'
        },
        {
          type: 'second',
          count: 600,
          text: 'Güncel',
          events: {
            click: () => {
  
  
              return false;
  
            }
          }
        }
      ]
    },
    series: [

      {
        type: "gantt"
       }
   

      
    ]
  };

  @ViewChild('marketingTitle') titleInputRef: ElementRef;
  @ViewChild('marketingMessage') messageInputRef: ElementRef;
  currentDate = new Date();

  swal =  swalFunctions;
term:any;
  BAG = "task-group";
  ismerkezleri = [];

SERVER_URL:any;

  tasks: Task[];
  adi:any=localStorage.getItem('adi');
  closeResult: string;
  ilgilidepartman:any[];
  selectedPer:any=2;
  selectedDate:any;
  cities:Array<{id: string, name: string,field:string}>[] = []; 
  blokalanlari: any;
  Merkezlistesi: { id: string; name: string; }[];
  ZamanListesi: { id: string; name: string; }[];
  
  viewInterval: any;
  plansizIsemri: any;
  baslanmamisIsemri: any;
  surenIsemri: any;
  kompresyonIsemri: any;
  hamurIsemri: any;
  azotIsemri: any;
  tesviyeIsemri: any;
  dofIsemri: any;
  aktifmakinaemirler: any;
  guncelistasyon: any;

  constructor( public toastr: ToastrService,private route: ActivatedRoute,private router:Router,private dragulaService: DragulaService, private elRef: ElementRef,
     private taskBoardService: ganttchartService, private modalService: NgbModal,
     private ref: ChangeDetectorRef,private http: HttpClient,private cdr:ChangeDetectorRef) {
      Highcharts.setOptions({
       
      scrollbar: {
          enabled: true
      },
  
    rangeSelector: {
        enabled: true,
    },
    xAxis: {
      currentDateIndicator:true,
      
      dateTimeLabelFormats: {
        week: {
          list: [ '%W. Hafta ', 'S%W' ]
        } as Highcharts.AxisDateTimeLabelFormatsOptionsObject
      }
      
      
    },
    lang: {
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      contextButtonTitle: 'Exportar gráfico',
      decimalPoint: ',',
      thousandsSep: '.',
      downloadJPEG: 'JPEG olarak indir',
      downloadPDF: 'PDF olarak indir',
      downloadPNG: 'PNG olarak indir',
      downloadSVG: 'SVG İndir',
      printChart: 'Yazdır',
      rangeSelectorFrom: 'Başlama',
      rangeSelectorTo: 'Bitiş',
      rangeSelectorZoom: 'Zoom Yap',
      resetZoom: 'Zoom Sıfırla',
      resetZoomTitle: 'Zoom 1:1',
    },
      });

      const gantIst = localStorage.getItem('url') + "angular/dataservis.php?page_id=gantistatistikler";

      this.http.get<any>(gantIst).subscribe(data => {
        
        this.plansizIsemri = data[0].plansizIsemri;
        this.baslanmamisIsemri = data[0].baslanmamisIsemri;
        this.surenIsemri = data[0].surenIsemri;
        this.kompresyonIsemri = data[0].kompresyonIsemri;
        this.hamurIsemri = data[0].hamurIsemri;
        this.azotIsemri= data[0].azotIsemri;
        this.tesviyeIsemri = data[0].tesviyeIsemri;
        this.dofIsemri = data[0].dofIsemri;

      });

   

      const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407"+"&donem="+localStorage.getItem('donem');

      this.http.get<any>(taskUrl).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });
  
    dragulaService.drop(this.BAG)
      .subscribe(({ el, target }) => {
     
        this.updateTaskStatus(el.getAttribute('task-id'), target.id)
      });
  }
  TypeInfo(message, header, id) {
    this.toastr.info(message, header, {"progressBar":true, "timeOut": 2000, "extendedTimeOut": 2000 })
   

}


editrecord(id) {

  var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


  modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: '817', rowrecordid: id, formtanimi: '', subformid: '' };

  modalSat.result.then((result) => {

    if (result == 'Yenile') {

  
    }

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


detaygit(id){

  var urldetay = localStorage.getItem('url') + "angular/dataservis.php?page_id=gantidgetir&uretimid="+id;
                      this.http.get<any>(urldetay).subscribe(data => {
                            if(data[0].isemriid>0){
                              window.open('https://www.jurimedya.com/#/editrecordform/'+data[0].isemriid+'/445/İş Emirleri','_blank');
                            }
                      });
  
}
  guncelle()
  {
    var durum=this;

    var chartOptions2: Highcharts.Options = {

      chart: {
        zoomType: 'xy',
        resetZoomButton: {
          position: {
             // align: 'right', // by default
              // verticalAlign: 'top', // by default
              x: -100,
              y: 10
          }
        },
      height: (9 / 16 * 100) + '%',
      
        events: { 
                    click: (event)=> {
                      const chart = this.Highcharts;

                    } 
                    
                    },
                    
         
      
      },
      title: {
        text: 'Gantt Şeması'
    },

    subtitle: {
        text: 'İşleri sürükle bırak yapabilirsiniz'
    },
    navigator: {  
      adaptToUpdatedData: false,
      enabled: true,   
  },
  scrollbar: {
      enabled: true
  },
  rangeSelector: {
    allButtonsEnabled: true,
  enabled: true,
  inputEnabled: true,
  buttonPosition: {

    align: 'right'
  },
  inputPosition: {
    align: 'left'
}
},
      exporting: {
        printMaxWidth:900,
        buttons: {
        },
        csv: {
          /* // Uncomment for custom column header formatter.
          // This function is called for each column header.
          columnHeaderFormatter: function (item, key) {
              if (!item || item instanceof Highcharts.Axis) {
                  return item.options.title.text;
              }
              // Item is not axis, now we are working with series.
              // Key is the property on the series we show in this column.
              return {
                  topLevelColumnTitle: 'Temperature',
                  columnTitle: key === 'y' ? 'avg' : key
              };
          },
          // */
          dateFormat: '%Y-%m-%d',
        },
      },
      plotOptions: {
        series: {
            animation: true, // Do not animate dependency connectors
            dragDrop: {
                draggableX: true,
                draggableY: true,
                dragMinY: 0,
                dragMaxY: 2,
                dragPrecisionX: 1000 * 60 * 60 * 24 / 3 // Snap to eight hours
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    cursor: 'default',
                    pointerEvents: 'none'
                }
            },
            allowPointSelect: true,
            point: {
                events: {
           
            
                drop: function(data){

                  swal.fire({
                    title: 'Seçilen üretim planlaması değişecektir ? ',
                    text: "seçilen üretimin tarih ve makine gibi değerlerli güncellenecektir ? Tekrar Plan Yapılacaktır! ",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#2F8BE6',
                    cancelButtonColor: '#F55252',
                    confirmButtonText: 'Onayla',
                    cancelButtonText: 'İptal',
                    customClass: {
                      confirmButton: 'btn btn-primary',
                      cancelButton: 'btn btn-danger ml-1'
                    },
                    buttonsStyling: false,
                  }).then(function (result) {
                    if (result.isConfirmed) {
                      
                      var urlTeklifAktar = localStorage.getItem('url') + "angular/dataservis.php?page_id=gantsirasidegisti&uretimid="+data.target['id']+"&newstart="+data.target['end']+"&makine="+data.target['yCategory'];
                      durum.http.get<any>(urlTeklifAktar).subscribe(data => {

                      });
            
                    }else{
                      durum.islerguncelle(durum.guncelistasyon);
                    }
                  });
            

                  // console.warn("data:", data);
                  // var start = data.target['start']; 
                  // console.warn("start:", start);
                  // var end = 	data.target['end'];
                  // console.warn("end:", end);
                  // var difference = end - start;
                  // console.warn("difference:", difference);
                
              }
                }
            }
        }
    },

  
      yAxis: {
        
        scrollbar: {
          enabled: true,
          showFull: false
      },
        margin:5,
        reversed: true,
        categories: this.is_istasyonlari,
        min: 1,
        max: 4 ,
        labels: {
          
          align:'center',
          events: {
            click:  (s) => {
           
              
              var c = this;
           
            

              s.target.innerHTML.replace("---", "");

          
               localStorage.setItem('secilenmakine',s.target.innerHTML.replace("---", ""));


               var str = s.target.innerHTML.replace("---", ""); 
                var splitted = str.split("-", 3); 
                            
                localStorage.setItem('secilenmakine_tablasiz',splitted[0]);


              const gantsecimkay = localStorage.getItem('url') +"angular/dataservis.php?page_id=gantsecimikaydet&secim="+str+"&userid="+localStorage.getItem('userid');

              this.http.get<any>(gantsecimkay).subscribe(datar => {
             
                this.TypeInfo("Üretim planlama için "+s.target.innerHTML.replace("---", "")+" kaynağı seçildi",'Makine Seçimi','');

              });


               console.log(s); 
              } 
          },
          "x":20,
        "y":0
          } as ExtendedYAxisLabelsOptions, 
      
      
      },
  
     
      
      xAxis: {
  
        currentDateIndicator:true,

        dateTimeLabelFormats: {
          week: {
            list: [ '%W. Hafta ', 'S%W' ]
          } as Highcharts.AxisDateTimeLabelFormatsOptionsObject
        }
        
        
      },
      lang: {
        months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        contextButtonTitle: 'Exportar gráfico',
        decimalPoint: ',',
        thousandsSep: '.',
        downloadJPEG: 'JPEG olarak indir',
        downloadPDF: 'PDF olarak indir',
        downloadPNG: 'PNG olarak indir',
        downloadSVG: 'SVG İndir',
        printChart: 'Yazdır',
        rangeSelectorFrom: 'Başlama',
        rangeSelectorTo: 'Bitiş',
        rangeSelectorZoom: 'Zoom Yap',
        resetZoom: 'Normal',
        resetZoomTitle: 'Zoom 1:1',
      },
      series: [
        {
          type: "gantt",
          data: this.isler,
        }
        
  
        
      ]
    };

    this.chartOptions=chartOptions2;

    this.cdr.markForCheck();

  }


  favorilereEkle(fid) {


    const postUrl = localStorage.getItem('url') + "angular/sender.php?form_id=619&userid=" + localStorage.getItem('userid') + "&recordid=";
    let postData = new FormData();
    postData.append('userid', localStorage.getItem('userid'));
    postData.append('formurl', this.router.url);
    postData.append('formadi', 'Gant Şeması');

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
  
  calculateDiff(date: string){
    let d2: Date = new Date();
    let d1 = Date.parse(date); //time in milliseconds
    var timeDiff = d1 - d2.getTime();
    var diff = timeDiff / (1000 * 3600 * 24);
    return Math.floor(diff);
}

  isistasyonGetir2(name) {

    const dataIsIstasyon = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=781&masrafmerkeziGant="+name+"&donem="+localStorage.getItem('donem');

    this.http.get<any>(dataIsIstasyon).subscribe(datar => {
      this.is_istasyonlari = [];

      this.altistasyonlar=[];
      var sondeger="";

      for (var j = 0; j < datar.length; j++) {
        if (sondeger!=datar[j].is_istasyon_adi)
        {

          this.is_istasyonlari.push(datar[j].is_istasyon_adi );
          this.isistasyonlari.push({ group: "", machinename: datar[j].is_istasyon_adi });
          this.y_axis.push({ name: datar[j].is_istasyon_adi, categories: this.altistasyonlar });
          this.altistasyonlar=[];
          sondeger=datar[j].is_istasyon_adi;
        }
    
        this.is_istasyonlari.push("---"+datar[j].makinatext );

        this.altistasyonlar.push(datar[j].makinatext );

        this.isistasyonlari.push({ group: datar[j].is_istasyon_adi, machinename: datar[j].makinatext });

       // this.isistasyonlari_id.push(data[j].index_is_istasyonlari);
             
     
      }


      const aktifisemirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=778"+"&donem="+localStorage.getItem('donem');
      this.http.get<any>(aktifisemirleri).subscribe(datam => {
this.isemirleri=datam;
     

      const dataIsIstasyonisler = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=624&masrafmerkeziGant=" + name+"&donem="+localStorage.getItem('donem')+"&gant=E";

      this.http.get<any>(dataIsIstasyonisler).subscribe(data => {
        this.isler=[];
         var veri:string="";
         for (var i = 0; i < data.length; i++) {
           var etiketi="";
        
           if(data[i].pbaslamatarihi!=''){
           //hangi makinede olduğunu buluyoruz
        
            for (var m=0;m<this.is_istasyonlari.length;m++)
            {
              if (this.is_istasyonlari[m]==data[i].makine)
              {
               
               etiketi = data[i].uretimemrino;
 
 var dateString = data[i].pbaslamatarihi;
 var tarihim = dateString.split('-');
 
 var timeString = data[i].pbaslamasaati;
 var saatim = timeString.split(':');
 
 var dateString2 = data[i].pbitistarihi;
 var tarihim2 = dateString2.split('-');
 
 var timeString2 = data[i].pbitissaati;
 var saatim2 = timeString2.split(':');
 
 
 
 console.log({ id: data[i].id, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });
               this.isler.push({ id: data[i].id, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });
               this.guncelle();
 
             }
 
             
           }
          
           this.guncelle();
           }else{
 
           }
 
 
 
         }
 
       });

    });
    this.guncelle();

    });


   


  }

islerguncelle(macname){

  

  const dataIsIstasyonisler = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=624&masrafmerkeziGant=" +macname+"&donem="+localStorage.getItem('donem')+"&gant=E";

  this.http.get<any>(dataIsIstasyonisler).subscribe(data => {
   this.isler=[];
    var veri:string="";
    for (var i = 0; i < data.length; i++) {
      var etiketi="";
   
      if(data[i].pbaslamatarihi!=''){
      //hangi makinede olduğunu buluyoruz
      for (var m=0;m<this.is_istasyonlari.length;m++)
      {
        if ((this.is_istasyonlari[m]==data[i].makine))
        {
          
          etiketi = data[i].uretimemrino+"<br>"+data[i].malzemekodu+"<br>"+data[i].kaliplar;

            var dateString = data[i].pbaslamatarihi;
            var tarihim = dateString.split('-');

            var timeString = data[i].pbaslamasaati;
            var saatim = timeString.split(':');

            var dateString2 = data[i].pbitistarihi;
            var tarihim2 = dateString2.split('-');

            var timeString2 = data[i].pbitissaati;
            var saatim2 = timeString2.split(':');


            console.log({ id: data[i].id, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });


            var dif = this.calculateDiff(data[i].termintarihi);
// console.log(dif);
            if(dif<=0){
            data[i].gantrenk='#CD5C5C'; //kırmızı
            // console.log('termin geldi');
            }else if(dif>=1 && dif<3){
              data[i].gantrenk='#FFDB58'; //sarı
              // console.log('termin yaklaşıyor');
            }else if(dif>=2){
              data[i].gantrenk='#00A86B'; //yeşil
              // console.log('termin çok var');
            }else{
              data[i].gantrenk='#000000';
            }
            this.isler.push({ id: data[i].id, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });
                          this.guncelle();
        } 
      }
      this.guncelle();
      }else{

      }
    }
  });
}
  isistasyonGetir(e) {
    
  this.guncelistasyon = e.name;
    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=624&masrafmerkeziGant=" + e.name+"&gant=E";
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if(data.length>0){
        this.aktifmakinaemirler=data;
        this.cdr.markForCheck();
      }else{
        this.aktifmakinaemirler=[];
        this.cdr.markForCheck();
      }
   this.cdr.markForCheck();
    })

    const dataIsIstasyon = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=781&masrafmerkeziGant="+e.name+"&donem="+localStorage.getItem('donem');

    this.http.get<any>(dataIsIstasyon).subscribe(datar => {
      this.is_istasyonlari = [];
      this.altistasyonlar=[];
      var sondeger="";

      for (var j = 0; j < datar.length; j++) {
        if (sondeger!=datar[j].is_istasyon_adi)
        {

          this.is_istasyonlari.push(datar[j].is_istasyon_adi );
          this.isistasyonlari.push({ group: "", machinename: datar[j].is_istasyon_adi });

          sondeger=datar[j].is_istasyon_adi;
        }

        this.isistasyonlari.push({ group: datar[j].is_istasyon_adi, machinename: datar[j].makinatext });

       // this.isistasyonlari_id.push(data[j].index_is_istasyonlari);
               
     
      }





      const dataIsIstasyonisler = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=624&masrafmerkeziGant=" + e.name+"&donem="+localStorage.getItem('donem')+"&gant=E";

      this.http.get<any>(dataIsIstasyonisler).subscribe(data => {
       this.isler=[];
        var veri:string="";
        for (var i = 0; i < data.length; i++) {
          var etiketi="";
          //hangi makinede olduğunu buluyoruz
          for (var m=0;m<this.is_istasyonlari.length;m++)
          {
           
            // if(data[i].pbaslamatarihi!='')  yüzünden boş makineleri de getirmiyordu.
            if ((this.is_istasyonlari[m]==data[i].makine))
            {
              
              etiketi = data[i].uretimemrino+"<br>"+data[i].malzemekodu+"<br>"+data[i].kaliplar;

                var dateString = data[i].pbaslamatarihi;
                var tarihim = dateString.split('-');

                var timeString = data[i].pbaslamasaati;
                var saatim = timeString.split(':');

                var dateString2 = data[i].pbitistarihi;
                var tarihim2 = dateString2.split('-');

                var timeString2 = data[i].pbitissaati;
                var saatim2 = timeString2.split(':');


                console.log({ id: data[i].index_uretimemirleri, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });


                var dif = this.calculateDiff(data[i].termintarihi);
  // console.log(dif);
                if(dif<=0){
                data[i].gantrenk='#CD5C5C'; //kırmızı
                // console.log('termin geldi');
                }else if(dif>=1 && dif<3){
                  data[i].gantrenk='#FFDB58'; //sarı
                  // console.log('termin yaklaşıyor');
                }else if(dif>=2){
                  data[i].gantrenk='#00A86B'; //yeşil
                  // console.log('termin çok var');
                }else{
                  data[i].gantrenk='#000000';
                }
                this.isler.push({ id: data[i].index_uretimemirleri, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });
                              this.guncelle();
            }
          }
          this.guncelle();
          }
        
      });


 

    });
  }


  hepsinigetir() {

    this.selectedPer='';

    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=624&masrafmerkeziGant=hepsi&gant=E";
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if(data.length>0){
        this.aktifmakinaemirler=data;
        this.cdr.markForCheck();
      }else{
        this.aktifmakinaemirler=[];
        this.cdr.markForCheck();
      }
   
    })

    const dataIsIstasyon = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=781&masrafmerkeziGant=hepsi&donem="+localStorage.getItem('donem');

    this.http.get<any>(dataIsIstasyon).subscribe(datar => {
      this.is_istasyonlari = [];

      this.altistasyonlar=[];
      var sondeger="";

      for (var j = 0; j < datar.length; j++) {
        if (sondeger!=datar[j].is_istasyon_adi)
        {

          this.is_istasyonlari.push(datar[j].is_istasyon_adi );
          this.isistasyonlari.push({ group: "", machinename: datar[j].is_istasyon_adi });

          sondeger=datar[j].is_istasyon_adi;
        }

        this.isistasyonlari.push({ group: datar[j].is_istasyon_adi, machinename: datar[j].makinatext });

       // this.isistasyonlari_id.push(data[j].index_is_istasyonlari);
               
     
      }





      const dataIsIstasyonisler = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=624&masrafmerkeziGant=hepsi&donem="+localStorage.getItem('donem')+"&gant=E";

      this.http.get<any>(dataIsIstasyonisler).subscribe(data => {
       this.isler=[];
        var veri:string="";
        for (var i = 0; i < data.length; i++) {
          var etiketi="";
       
          if(data[i].pbaslamatarihi!=''){
          //hangi makinede olduğunu buluyoruz
          for (var m=0;m<this.is_istasyonlari.length;m++)
          {
            if ((this.is_istasyonlari[m]==data[i].makine))
            {
              
              etiketi = data[i].uretimemrino+"<br>"+data[i].malzemekodu+"<br>"+data[i].kaliplar;

                var dateString = data[i].pbaslamatarihi;
                var tarihim = dateString.split('-');

                var timeString = data[i].pbaslamasaati;
                var saatim = timeString.split(':');

                var dateString2 = data[i].pbitistarihi;
                var tarihim2 = dateString2.split('-');

                var timeString2 = data[i].pbitissaati;
                var saatim2 = timeString2.split(':');


               // console.log({ id: data[i].id, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });


                var dif = this.calculateDiff(data[i].termintarihi);
  // console.log(dif);
                if(dif<=0){
                data[i].gantrenk='#CD5C5C'; //kırmızı
                // console.log('termin geldi');
                }else if(dif>=1 && dif<3){
                  data[i].gantrenk='#FFDB58'; //sarı
                  // console.log('termin yaklaşıyor');
                }else if(dif>=2){
                  data[i].gantrenk='#00A86B'; //yeşil
                  // console.log('termin çok var');
                }else{
                  data[i].gantrenk='#000000';
                }
                this.isler.push({ id: data[i].id, name: etiketi,color:data[i].gantrenk,start:Date.UTC(tarihim[0],tarihim[1]-1,tarihim[2],saatim[0],saatim[1],saatim[2]),end:Date.UTC(tarihim2[0],tarihim2[1]-1,tarihim2[2],saatim2[0],saatim2[1],saatim2[2]),y:m });
                              this.guncelle();
            }
          }
          this.guncelle();
          }else{

          }
        }
      });


 

  this.guncelle();
    });
  }

  yenidenyukle()
  {
  

    const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407"+"&donem="+localStorage.getItem('donem');

    this.http.get<any>(taskUrl).subscribe(data => {
      this.tasks=data;
      this.loadTasks();
    });


  }

  istatistikGor(){
    if(this.istatistikgizle==true){
      this.istatistikgizle=false;

    }else{
      this.istatistikgizle=true;

    }
  }
  loadTasks() {
    //  this.marketingTasks = this.tasks.filter((task: Task) => task.status === 'Atandı');
    this.ref.markForCheck();
  }

  ganttagor(s){
    
  }

  ngOnInit() {


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=237"+"&donem="+localStorage.getItem('donem');

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;

    for(var i=0;i<this.blokalanlari.length;i++)
    {
    
     var cities_psh2: Array<{ id: string, name: string }> = [];
    cities_psh2 = [];

    for (var j = 0; j < this.blokalanlari.length; j++) {
      cities_psh2.push({ id: this.blokalanlari[j].id, name: this.blokalanlari[j].masraf_merkezi_adi });
    }


    this.Merkezlistesi = cities_psh2;

    }

    
    var cities_psh3: Array<{ id: string, name: string }> = [];
    cities_psh3 = [];

    cities_psh3.push({ id: 'bugün', name: 'Bugün' });
    
      cities_psh3.push({ id: 'buhafta', name: 'Bu Hafta' });
    
      cities_psh3.push({ id: 'gelecekhafta', name: 'Gelecek Hafta' });
    
      cities_psh3.push({ id: 'gecenhafta', name: 'Geçen Hafta' });
    
      cities_psh3.push({ id: 'tarihsec', name: 'Tarih Seç' });
    
      cities_psh3.push({ id: 'buay', name: 'Bu Ay' });

      cities_psh3.push({ id: 'gelecekay', name: 'Gelecek Ay' });
    
      this.ZamanListesi = cities_psh3;

    
  
    });




  
  
  
  }

  onChange(event){
      
   const departUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=236&masrafmerkeziGant="+event.name+"&donem="+localStorage.getItem('donem');
   this.http.get<any>(departUrl).subscribe(data => {
     this.ismerkezleri=data;
     this.ref.markForCheck();

   });
    }

 
    ayrintiliGor(filter){
      this.router.navigate(['/listings/aktif-is-emirleri/'+filter]);

    }


  updateTaskStatus(id: string, merkez: string, task?: Task) {

    let currentTask: Task;

    if (task) {
      currentTask = task;
    }
    else {
      currentTask = this.tasks.find(x => x.id == +id);
     console.log(currentTask);
    }


    // dizinin kaçıncı elemanı olduğunu alıyor
    let index = this.tasks.indexOf(currentTask);
    this.tasks.splice(index, 1, currentTask);
    

    const isistasyonGuncelle=localStorage.getItem('url') + "angular/dataservis.php?page_id=perMerkezGuncelle&personelid="+currentTask.id+"&isistasyonu="+merkez;
    
    console.log(isistasyonGuncelle);
    this.http.get<any>(isistasyonGuncelle).subscribe(data=>{
      if(data[0].status=='OK'){
        swal.fire({
          icon: "success",
          title: 'İş İstasyonu Değiştirildi',
          text: 'Personelin çalıştığı iş istasyonu değiştirildi.',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        });
        this.yenidenyukle();
      }else{
        swal.fire({
          icon: "warning",
          title: 'İş İstasyonu Değiştirilemedi',
          text: 'Personelin çalıştığı iş istasyonu değiştirilemedi.',
          customClass: {
            confirmButton: 'btn btn-warning'
          },
        });
        this.yenidenyukle();
      }
    });


    this.loadTasks();
  }





  

}
