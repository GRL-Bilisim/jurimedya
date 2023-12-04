import { NgModule, Component, ChangeDetectorRef, ViewEncapsulation,ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { FormsModule } from '@angular/forms';

import { ChartType, ChartEvent } from "ng-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import { NgbNavChangeEvent, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { forEach } from 'core-js/core/array';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { CrudModalComponent } from '../crud-modal/crud-modal.component';
import * as Highcharts from 'highcharts';
import { Chart } from 'highcharts';
import { GoogleChartsModule,GoogleChartComponent } from 'angular-google-charts';

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

var $primary = "#975AFF",
  $success = "#40C057",
  $info = "#2F8BE6",
  $warning = "#F77E17",
  $danger = "#F55252",
  $label_color_light = "#E6EAEE";
var themeColors = [$primary, $warning, $success, $danger, $info];

declare var require: any;

const data: any = require('../../shared/data/chartist.json');

import HighchartsMore from 'highcharts/highcharts-more.src';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import Integer from '@zxing/library/esm/core/util/Integer';


export interface Charts {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
  // plugins?: any;
}

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component {
  Highcharts: typeof Highcharts = Highcharts;
  
  @ViewChild('googlechart')
  googlechart: GoogleChartComponent;
  chart = {
    type: 'Gauge',
    data: [
      ['Adblue 1', 50],
      ['Adblue 2', 99]
    ],
    options: {
      width: 400,
      height: 120,
      greenFrom: 0,
      greenTo: 75,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5
    }
  };


  mainmenuBox = JSON.parse(localStorage.getItem('kullanicimenusu'));
  newSubMenuForMainMenu: Array<string> = [];
  kullanicirolleriUrl: string;
  rollerTanimi: any;
  ismerkezi: any;
  ismerkezleri: any;

  xaxis_dizi:Array<{categories: any[], tickAmount: Integer}> = []; 
  series_dizi:Array<{data: any[]}> = []; 
  degerlerim:any[];
  etiketlerim:any[];

  widgets:any[];
  widgets_alti:any[];
  selectedMer: any;
  selectedIs: any;
  isIstasyon: boolean = true;
  isistasyonlari: Array<{ id: string, name: string }> = [];
  isEmriGor: boolean = true;
  isEmirleri: any;
  isemriAyrinti: boolean=true;
  favoriMenuleri: any;
  gauge: Chart;
  chartoptions:any[];
  barChartOptions : Partial<ChartOptions>;
  pieChartOptions : Partial<ChartOptions>;
  lineChartOptions : Partial<ChartOptions>;
  barchart:any[];
  constructor(private modalService: NgbModal,private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {
    

    this.lineChartOptions = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      colors: themeColors,
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      }],
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#F5F5F5', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yaxis: {
        tickAmount: 5,
      }
    }

    this.pieChartOptions = {
      chart: {
        type: 'pie',
        height: 320
      },
      colors: themeColors,
      labels: ['Team A', 'Team B', 'Team C', 'Team D'],
      series: [44, 55, 13, 43],
      legend: {
        itemMargin: {
          horizontal: 2
        },
      },
      responsive: [{
        breakpoint: 576,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }

    this.barChartOptions = {
      chart: {
        height: 350,
        type: 'bar',
      },
      colors: themeColors,
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
        tickAmount: 5
      }
    }
    
    
    


  
   
    var favourl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_favoriler&userid="+localStorage.getItem("userid");
  
    this.http.get<any>(favourl).subscribe(data =>{

        this.favoriMenuleri=data;
        this.cdr.markForCheck();

    });

    this.ismerkezi = localStorage.getItem('ismerkezi');
    this.ismerkezi = this.ismerkezi.split(";")
    var cities_psh2: Array<{ id: string, name: string }> = [];
    cities_psh2 = [];

    for (var j = 0; j < this.ismerkezi.length; j++) {
      cities_psh2.push({ id: this.ismerkezi[j], name: this.ismerkezi[j] });
    }


    this.ismerkezleri = cities_psh2;

    this.kullanicirolleriUrl = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=365&roluserid=" + localStorage.getItem('userid');
    this.http.get<any>(this.kullanicirolleriUrl).subscribe(data => {

      this.rollerTanimi = data;
      this.cdr.markForCheck();
    });



    const result = this.mainmenuBox.filter(a => a.submenu.find(d => d != ''))
      .map(
        a => a.submenu

      );

    console.log(result);

    for (let i = 0; i < result.length; i++) {
      result[i].forEach(element => {
        this.newSubMenuForMainMenu.push(element);

      });

    }

    this.mainmenuBox = this.newSubMenuForMainMenu;

  }
  vActive = 'top'; // Vertical Pills
  active = 1; // Basic Navs
  kActive = 1; // Keep content
  sActive; // Selecing Navs
  disabled = true;
  dActive; // Dynamic Navs




  



  widgetyenile()
  {
  
    var serurl=localStorage.getItem('url') + "angular/dataservis.php?page_id=widgetbaslik";
  
    this.http.get<any>(serurl).subscribe(data => {
  
      this.widgets=data;
  
    });
  
    var serurl=localStorage.getItem('url') + "angular/dataservis.php?page_id=widgetalti";
  
    this.http.get<any>(serurl).subscribe(data => {
  
      this.widgets_alti=data;

      this.degerlerim=[];
      this.etiketlerim=[];

      this.xaxis_dizi=[];
      this.series_dizi=[];
      this.chartoptions=[];

     

      for (var i=0;i<this.widgets_alti.length;i++)
      {
       
        if (this.widgets_alti[i].turu!='Veri Seti')
        {
       

          this.chartoptions.push(this.barChartOptions);
        }
        if (this.widgets_alti[i].turu=='Veri Seti')
        {

          var splitted=(this.widgets_alti[i].degerler.split(';'));
 
          var degerlerimiz:number[];
          degerlerimiz=[];

          for (var y=0;y<splitted.length;y++)
          {
            degerlerimiz.push(splitted[y]*1);
          }
          
   
         var splitted2=this.widgets_alti[i].etiketler.split(';')




         if (this.widgets_alti[i].tipi=='Çizgi Grafiği')
         {
         this.lineChartOptions = {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          colors: themeColors,
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          series: [{
            name: "Değer",
            data: degerlerimiz,
          }],
          title: {
            text: this.widgets_alti[i].etiket,
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#F5F5F5', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: splitted2,
          },
          yaxis: {
            tickAmount: 5,
          }
        }

        this.chartoptions.push(this.lineChartOptions);

      }

         if (this.widgets_alti[i].tipi=='Pasta Grafiği')
        {
    

          this.pieChartOptions = {
            chart: {
              type: 'pie',
              height: 480
            },
            colors: themeColors,
            labels: splitted2,
            series: degerlerimiz,
            legend: {
              itemMargin: {
                horizontal: 2
              },
            },
            responsive: [{
              breakpoint: 576,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: 'top'
                }
              }
            }]
          }


            this.chartoptions.push(this.pieChartOptions);
          }
         
       
         if (this.widgets_alti[i].tipi=='Sutun Grafik')
        {

            this.barChartOptions = {
              chart: {
                height: 350,
                type: 'bar',
              },
              colors: themeColors,
              plotOptions: {
                bar: {
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              series: [{
                data: splitted
              }],
              xaxis: {
                categories: splitted2,
                tickAmount: 5
              }
            }


            this.chartoptions.push(this.barChartOptions);
          }


          

        }
      }
  
    });
  
  
  }
  


  public knowledgeBase = [
    {
      kbId: "1",
      name: "My Account",
      content: "But students more often neglect fact it is much more",
      icon: "ft-user"
    },
    {
      kbId: "2",
      name: "Connect",
      content: "But students more often neglect fact it is much more",
      icon: "ft-link"
    },
    {
      kbId: "3",
      name: "Charges & Refunds",
      content: "But students more often neglect fact it is much more",
      icon: "ft-dollar-sign"
    },
    {
      kbId: "4",
      name: "International",
      content: "But students more often neglect fact it is much more",
      icon: "ft-globe"
    },
    {
      kbId: "5",
      name: "Payouts",
      content: "But students more often neglect fact it is much more",
      icon: "ft-smartphone"
    },
    {
      kbId: "6",
      name: "Disputes & Fraud",
      content: "But students more often neglect fact it is much more",
      icon: "ft-alert-circle"
    },
  ]

  redirectToForm(path){

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([path]));
  }
  isistasyonGetir(e) {
this.selectedIs="";
    const dataIsIstasyon = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=235&ismerkezi=" + e;

    this.http.get<any>(dataIsIstasyon).subscribe(data => {
      this.isistasyonlari = [];
      for (var j = 0; j < data.length; j++) {
        this.isistasyonlari.push({ id: data[j].id, name: data[j].is_istasyon_adi });
      }
    });

    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=445&isemrimerkezi=" + e;
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if(data.length>0){
        for (var i = 0; i < data.length; i++) {
          this.isEmirleri = data;
          this.isEmriGor = false;
          this.cdr.markForCheck();
        }
      }else{
        this.isEmriGor = true;
      }
   

    });

    this.isIstasyon = false;

  }

  isistasyonSec(e) {
    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=445&isemriistasyonu=" + e;
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if(data.length>0){
        for (var i = 0; i < data.length; i++) {
          this.isEmirleri = data;
          this.isEmriGor = false;
          this.cdr.markForCheck();
        }
      }else{
        this.isEmriGor = true;
      }
   

    });

    console.log(e);

  }

  isEmriDetay(e) {
    console.log(e.target);
    this.isemriAyrinti=false;
  }

  modalAc(idX,butonturu){
    if(butonturu=='isemrikalite'){
      var sizes='lg';
    }
    if(butonturu=='isemrianalizi'){
      var sizes='xl';
    }
    if(butonturu=='uretimverileri'){
      var sizes='lg';
    }
    const modalRef = this.modalService.open(CrudModalComponent,{backdrop: 'static',size: sizes, keyboard: false, centered: false});
    modalRef.componentInstance.id = idX; // should be the id
    modalRef.componentInstance.data = { title: idX, butonturu: butonturu }; // should be the data
console.log(idX);
    modalRef.result.then((result) => {

 console.log(result);



    }).catch((error) => {
      console.log(error);
    });
  }


  
  // Line area chart configuration Starts
  lineArea: Charts = {
    type: 'Line',
    data: data['lineAreaDashboard'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true,
      onlyInteger: true,
      axisY: {
        low: 0,
        scaleMinSpace: 50,
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          pointClass: 'ct-point-regular'
        })
      ],
      axisX: {
        showGrid: false
      }
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(0, 201, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(146, 254, 157, 1)'
        });

        defs.elem('linearGradient', {
          id: 'gradient1',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(132, 60, 247, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(56, 184, 242, 1)'
        });
      },
      draw(data: any): void {
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: 4,
            'ct:value': data.value.y,
            'ct:meta': data.meta,
            style: 'pointer-events: all !important',
            class: 'ct-point-regular'
          });
          data.element.replace(circle);
        }
      }
    },
  };
  // Line area chart configuration Ends

  // Stacked Bar chart configuration Starts
  Stackbarchart: Charts = {
    type: 'Bar',
    data: data['Stackbarchart'],
    options: {
      stackBars: true,
      fullWidth: true,
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      chartPadding: 30
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'linear',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': '#7441DB'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': '#C89CFF'
        });
      },
      draw(data: any): void {
        if (data.type === 'bar') {
          data.element.attr({
            style: 'stroke-width: 5px',
            x1: data.x1 + 0.001
          });

        }
        else if (data.type === 'label') {
          data.element.attr({
            y: 270
          })
        }
      }
    },
  };
  // Stacked Bar chart configuration Ends

  // Line area chart 2 configuration Starts
  lineArea2: Charts = {
    type: 'Line',
    data: data['lineArea2'],
    options: {
      showArea: true,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.none(),
      axisX: {
        showGrid: false,
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          pointClass: 'ct-point-circle'
        })
      ],
    },
    responsiveOptions: [
      ['screen and (max-width: 640px) and (min-width: 381px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }],
      ['screen and (max-width: 380px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient2',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-opacity': '0.2',
          'stop-color': 'transparent'
        }).parent().elem('stop', {
          offset: 1,
          'stop-opacity': '0.2',
          'stop-color': '#60AFF0'
        });

        defs.elem('linearGradient', {
          id: 'gradient3',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0.3,
          'stop-opacity': '0.2',
          'stop-color': 'transparent'
        }).parent().elem('stop', {
          offset: 1,
          'stop-opacity': '0.2',
          'stop-color': '#6CD975'
        });
      },
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === 'point') {

          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            'ct:value': data.value.y,
            'ct:meta': data.meta,
            style: 'pointer-events: all !important',
            class: 'ct-point-circle'
          });
          data.element.replace(circle);
        }
        else if (data.type === 'label') {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width)
          data.element.attr({ x: data.element.attr('x') - dX })
        }
      }
    },
  };
  // Line area chart 2 configuration Ends

  // Line chart configuration Starts
  lineChart: Charts = {
    type: 'Line', data: data['LineDashboard'],
    options: {
      axisX: {
        showGrid: false
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        low: 0,
        high: 100,
        offset: 0,
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          currency: '$',
          pointClass: 'ct-point-circle'
        })
      ],
      fullWidth: true,
      offset: 0,
    },
    events: {
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            'ct:value': data.value.y,
            'ct:meta': data.meta,
            style: 'pointer-events: all !important',
            class: 'ct-point-circle'
          });

          data.element.replace(circle);
        }
        else if (data.type === 'label') {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width)
          data.element.attr({ x: data.element.attr('x') - dX })
        }
      }
    },

  };
  // Line chart configuration Ends

  // Donut chart configuration Starts
  DonutChart: Charts = {
    type: 'Pie',
    data: data['donutDashboard'],
    options: {
      donut: true,
      startAngle: 0,
      labelInterpolationFnc: function (value) {
        var total = data['donutDashboard'].series.reduce(function (prev, series) {
          return prev + series.value;
        }, 0);
        return total + '%';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: data.element.root().height() / 2
            });
          } else {
            data.element.remove();
          }
        }

      }
    }
  };
  // Donut chart configuration Ends

  //  Bar chart configuration Starts
  BarChart: Charts = {
    type: 'Bar', data: data['DashboardBar'], options: {
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      low: 0,
      high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    },
    responsiveOptions: [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient4',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': '#8E1A38'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': '#FAA750'
        });
        defs.elem('linearGradient', {
          id: 'gradient5',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': '#1750A5'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': '#40C057'
        });

        defs.elem('linearGradient', {
          id: 'gradient6',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': '#3B1C93'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': '#60AFF0'
        });
        defs.elem('linearGradient', {
          id: 'gradient7',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': '#562DB7'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': '#F55252'
        });

      },
      draw(data: any): void {
        var barHorizontalCenter, barVerticalCenter, label, value;
        if (data.type === 'bar') {

          data.element.attr({
            y1: 195,
            x1: data.x1 + 0.001
          });

        }
      }
    },

  };
  // Bar chart configuration Ends

  // line chart configuration Starts
  WidgetlineChart: Charts = {
    type: 'Line', data: data['Dashboard1_WidgetlineChart'],
    options: {
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisY: {
        showGrid: false,
        low: 40,
        showLabel: false,
        offset: 0
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          currency: '$',
          pointClass: 'ct-point-regular'
        })
      ],
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      fullWidth: true
    },
    events: {
      draw(data: any): void {
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: 4,
            'ct:value': data.value.y,
            'ct:meta': data.meta,
            style: 'pointer-events: all !important',
            class: 'ct-point-regular'
          });
          data.element.replace(circle);
        }
      }
    }
  };
  // Line chart configuration Ends

  // line chart configuration Starts
  WidgetlineChart1: Charts = {
    type: 'Line', data: data['Dashboard1_WidgetlineChart1'],
    options: {
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisY: {
        showGrid: false,
        low: 40,
        showLabel: false,
        offset: 0
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          currency: '$',
          pointClass: 'ct-point-regular'
        })
      ],
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      fullWidth: true
    },
    events: {
      draw(data: any): void {
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: 4,
            'ct:value': data.value.y,
            'ct:meta': data.meta,
            style: 'pointer-events: all !important',
            class: 'ct-point-regular'
          });
          data.element.replace(circle);
        }
      }
    }
  };
  // Line chart configuration Ends

  // line chart configuration Starts
  WidgetlineChart2: Charts = {
    type: 'Line', data: data['Dashboard1_WidgetlineChart2'],
    options: {
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisY: {
        showGrid: false,
        low: 40,
        showLabel: false,
        offset: 0
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          currency: '$',
          pointClass: 'ct-point-regular'
        })
      ],
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      fullWidth: true
    },
    events: {
      draw(data: any): void {
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: 4,
            'ct:value': data.value.y,
            'ct:meta': data.meta,
            style: 'pointer-events: all !important',
            class: 'ct-point-regular'
          });
          data.element.replace(circle);
        }
      }
    }
  };
  // Line chart configuration Ends

  // line chart configuration Starts
  WidgetlineChart3: Charts = {
    type: 'Line', data: data['Dashboard1_WidgetlineChart3'],
    options: {
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0
      },
      axisY: {
        showGrid: false,
        low: 40,
        showLabel: false,
        offset: 0
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          currency: '$',
          pointClass: 'ct-point-regular'
        })
      ],
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      fullWidth: true
    },
    events: {
      draw(data: any): void {
        if (data.type === 'point') {
          var circle = new Chartist.Svg('circle', {
            cx: data.x,
            cy: data.y,
            r: 4,
            'ct:value': data.value.y,
            'ct:meta': data.meta,
            style: 'pointer-events: all !important',
            class: 'ct-point-regular'
          });
          data.element.replace(circle);
        }
      }
    }
  };
  // Line chart configuration Ends



  ngOnInit() {
    this.widgetyenile();


  
  }
  
  


  onResized(event: any) {



    setTimeout(() => {
      this.fireRefreshEventOnWindow();
    }, 300);
  }

  fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("resize", true, false);
    window.dispatchEvent(evt);
  };

  viewCategories(kb: any) {

    console.log(kb);
    localStorage.setItem('level2submenu', JSON.stringify(kb));
    this.router.navigate(['/pages/kb/categories']);
  }
}
