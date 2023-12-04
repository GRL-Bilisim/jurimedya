import { Component, ViewEncapsulation, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as swalFunctions from '../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import {Router, ActivatedRoute} from '@angular/router';

import { ganttchartService } from './ganttchart.service';
import { Task } from './ganttchart.model';
import { DragulaService } from 'ng2-dragula';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from "highcharts/highcharts-gantt";
import { isThisSecond } from 'date-fns';

declare var $: any; 

@Component({
  selector: 'app-ganttchart',
  templateUrl: './ganttchart.component.html',
  styleUrls: ['./ganttchart.component.scss'],
  providers: [ganttchartService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ganttchartComponent {

  Highcharts: typeof Highcharts = Highcharts;

  isistasyonlari:any[]=null;
  isistasyonlari_id:any[]=null;
istasyonsayisi:number=2;

  chartOptions: Highcharts.Options = {

    chart: {
    
      events: {
	                click: function(event) {
	             
	                }
	                },
	                
         zoomType: 'x',
      panning: {
        enabled: true,
        type: 'x',
      },
      panKey: 'shift',
    
    },
    tooltip: {
      xDateFormat: '%a %b %d, %H:%M'
  },

    yAxis: {
      
      categories: ['B1','B2'],
      min: 0,
      max: this.istasyonsayisi-1    },

    title: {
      text: "Gantt Üretim Planı"
    },
    
    xAxis: {
      currentDateIndicator:true,
      min: Date.UTC(2014, 1, 17),
      max: Date.UTC(2014, 10, 30)
    },
    lang: {
      months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      shortWeekdays: ['Pz', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cts'],
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
    rangeSelector: {
      //allButtonsEnabled: true,
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
          text: '1m'
        },
        {
          type: 'month',
          count: 3,
          text: '3m'
        },
        {
          type: 'month',
          count: 6,
          text: '6m'
        },
        {
          type: 'year',
          count: 1,
          text: '1y'
        },
        {
          type: 'year',
          count: 2,
          text: '2y'
        },
        {
          type: 'year',
          count: 5,
          text: '5y'
        },
        {
          type: 'all',
          text: 'All'
        },
        {
          type: 'second',
          count: 1,
          text: 'Latest',
          events: {
            click: () => {
  
              alert('in real app I scroll to latest results');
  
              return false;
  
            }
          }
        }
      ]
    },
    series: [

      {
        type: "gantt",
        name: 'Ü.E.20006 - 0001',
        data: [ {
            start: Date.UTC(2014, 10, 18),
             end:  Date.UTC(2014, 10, 25),
           name: 'CNC-K1',
           id:'3',
                       y: 0,
             color:'Red'
        }]
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
  selectedPer:any;
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

  constructor(private router:Router,private dragulaService: DragulaService, private elRef: ElementRef,
     private taskBoardService: ganttchartService, private modalService: NgbModal,
     private ref: ChangeDetectorRef,private http: HttpClient,private cdr:ChangeDetectorRef) {
    

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

   

      const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407";

      this.http.get<any>(taskUrl).subscribe(data => {
        this.tasks=data;
        this.loadTasks();
      });
  
    dragulaService.drop(this.BAG)
      .subscribe(({ el, target }) => {
     
        this.updateTaskStatus(el.getAttribute('task-id'), target.id)
      });
  }

  guncelle()
  {


    var chartOptions2: Highcharts.Options = {

      chart: {
      height:200+this.isistasyonlari.length*50,
        events: {
                    click: function(event) {
                 
                    }
                    },
                    
           zoomType: 'x',
        panning: {
          enabled: true,
          type: 'x',
        },
        panKey: 'shift',
      
      },
      tooltip: {
        xDateFormat: '%a %b %d, %H:%M'
    },
  
      yAxis: {
        
        categories: this.isistasyonlari,
        min: 0,
        max: this.isistasyonlari.length-1    },
  
      title: {
        text: "Gantt Güncel Üretim Planı"
      },
      
      xAxis: {
        currentDateIndicator:true,
        min: Date.UTC(2014, 1, 17),
        max: Date.UTC(2014, 10, 30)
      },
      lang: {
        months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        shortWeekdays: ['Pz', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cts'],
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
        
        
  
        
      ]
    };

    this.chartOptions=chartOptions2;

    this.cdr.markForCheck();
  }


  isistasyonGetir(e) {
    
        const dataIsIstasyon = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=235&masrafmerkezi=" + e.name;

        this.http.get<any>(dataIsIstasyon).subscribe(data => {
          this.isistasyonlari = [];

          
          for (var j = 0; j < data.length; j++) {
            this.isistasyonlari.push(data[j].is_istasyon_adi);
         
           // this.isistasyonlari_id.push(data[j].index_is_istasyonlari);
                   
         
          }

          this.guncelle();

        });
    
       
    
      }

  yenidenyukle()
  {
  

    const taskUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=407";

    this.http.get<any>(taskUrl).subscribe(data => {
      this.tasks=data;
      this.loadTasks();
    });


  }


  loadTasks() {
    //  this.marketingTasks = this.tasks.filter((task: Task) => task.status === 'Atandı');
    this.ref.markForCheck();
  }

  

  ngOnInit() {

   
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=237";

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
      
   const departUrl = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=236&masrafmerkezi="+event.name;
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
