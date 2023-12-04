import { NgModule, Component, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
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
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { NewrecordrowComponent } from 'app/newrecordrow/newrecordrow.component';
import Swal from 'sweetalert2';


declare var require: any;

const data: any = require('../../shared/data/chartist.json');

export interface Chart {
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
  styleUrls: [ '../../../assets/sass/libs/datatables.scss','./dashboard1.component.scss'],
  encapsulation: ViewEncapsulation.None

})

export class Dashboard1Component {
  mainmenuBox = JSON.parse(localStorage.getItem('kullanicimenusu'));
  newSubMenuForMainMenu: Array<string> = [];
  kullanicirolleriUrl: string;
  rollerTanimi: any;
  ismerkezi: any;
  ismerkezleri: any;
  selectedMer: any;
  selectedIs: any;
  isIstasyon: boolean = true;
  isistasyonlari: Array<{ id: string, name: string }> = [];
  isEmriGor: boolean = true;
  isEmirleri: any;
  isemriAyrinti: boolean=true;
  favoriMenuleri: any;
  SERVER_URL: string;
  columns: any;
  formbilgileri: any;
  formtanimi: any;
  sutunlar: any;
  bolgeayrimi: any;
  formid: any;
  rows: any;
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public ColumnMode = ColumnMode;
  editing = {};
  disab: string;
  uretimbitirbutton: boolean=true;
  uretimbaslatbutton: boolean=false;
  personeldata: string;


  constructor(private modalService: NgbModal,private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {
    


   var tandash =  localStorage.getItem('dashboard');
    if(tandash=='1'){
      this.disab="true";
      this.active=10;
    }else{
      
    }

    var favourl=localStorage.getItem('url') +"angular/dataservis.php?page_id=pdo_favoriler&userid="+localStorage.getItem("userid");
  
    this.http.get<any>(favourl).subscribe(data =>{

        this.favoriMenuleri=data;
        this.cdr.markForCheck();

    });
    
    this.ismerkezi = localStorage.getItem('ismerkezi');
    this.ismerkezi = this.ismerkezi.split(",");
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


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=778";

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.columns = data;
    });




  }
  vActive = 'top'; // Vertical Pills
  active = 1; // Basic Navs
  kActive = 1; // Keep content
  sActive; // Selecing Navs
  disabled = true;
  dActive; // Dynamic Navs








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


  isistasyonGetir(e) {
this.selectedIs="";
    const dataIsIstasyon = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=235&ismerkezi=" + e;
console.log(dataIsIstasyon);
    this.http.get<any>(dataIsIstasyon).subscribe(data => {
      this.isistasyonlari = [];
      for (var j = 0; j < data.length; j++) {
        this.isistasyonlari.push({ id: data[j].id, name: data[j].is_istasyon_adi });
      }
    });

    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=778&isemrimerkezi=" + e;
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if(data.length>0){
        for (var i = 0; i < data.length; i++) {
          this.rows = data;
          this.cdr.markForCheck();
        }
      }else{
        this.rows=[];
        this.cdr.markForCheck();

      }
   

    });

    this.isIstasyon = false;

  }

  isistasyonSec(e) {
    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=778&isemriistasyonu=" + e;
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if(data.length>0){
        for (var i = 0; i < data.length; i++) {
          this.isEmirleri = data;
          this.rows = data;
          this.isEmriGor = false;
          this.cdr.markForCheck();
        }
      }else{
        this.isEmriGor = true;
      }
   

    });

    console.log(e);

  }


  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  satirekle(formids,id) {



    // localStorage.setItem('rowformid', formids);
    // localStorage.setItem('rowrecordid', "");

      var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


      modalSat.componentInstance.Modaldata = { mastervalue: id, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };

      modalSat.result.then((result) => {

        if (result == 'Yenile') {
        }

      }, (reason) => {
      });





  }
  uretimeBaslat(id){

    var durum = this;

    Swal.fire({
      title: 'Üretim Başlatılsın Mı?',
      text: "Üretim başlatılacaktır.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Başlat',
      cancelButtonText: 'İptal',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {
        const uretimOlustur = localStorage.getItem('url') +"angular/dataservis.php?page_id=uretimebasla&baslat=E&isemriid=" +id+"&userid="+localStorage.getItem('userid');
        durum.http.get<any>(uretimOlustur).subscribe(data => {
          
            if(data[0].isdurumu=='H' ){
            }
        });




        setTimeout(function () {
          Swal.close();
        }, 1000);
      }
    });

  }

  uretimeDurdur(id,ismerkez){

    var durum = this;

    this.personeldata="";


    var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=819&sutunlar=&merkezbirim="+ismerkez;

    this.http.get<any>(url).subscribe(data => {
for (var i = 0; i < data.length; i++) {

this.personeldata =this.personeldata+'<option value="'+data[i].index_personel_ozluk_bilgileri+'">'+data[i].birlesik+'</option> ';

if(data.length==i+1){

  
  Swal.fire({
    title: 'Gerçekleşen Baskı ?',
    text: "Gerçekleşen baskı sayısı giriniz!",
    icon: 'question',
    html: `<select type="text" id="personel" class="swal2-input" placeholder="personel seçiniz">
      <option value="">Personel Seçiniz</option>
      `+durum.personeldata+`
    </select> 
    <input type="tel" id="miktar" class="swal2-input" placeholder="Baskı Giriniz">`,
    showCancelButton: true,
    confirmButtonColor: '#2F8BE6',
    cancelButtonColor: '#F55252',
    confirmButtonText: 'Gir',
    cancelButtonText: 'İptal',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1',
      validationMessage: 'my-validation-message'

    },
    buttonsStyling: false,
    preConfirm: () => {
      const personel = (document.getElementById('personel')  as HTMLInputElement).value;
      const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
      if (!personel || !miktar) {
        Swal.showValidationMessage(`Personel Ve Miktar Giriniz!!!`)
      }
      return { personel: personel, miktar: miktar }
    },
  }).then(function (result) {
    if (result.isConfirmed == true) {
      const uretimDurdur = localStorage.getItem('url') +"angular/dataservis.php?page_id=uretimebasla&bitir=E&isemriid="+id+"&userid="+localStorage.getItem('userid')+"&uretimmiktari="+result.value.miktar+"&personelid="+result.value.personel;
      durum.http.get<any>(uretimDurdur).subscribe(data => {
          if(data[0].isdurumu=='E'){

            durum.cdr.markForCheck();

            Swal.fire({
              icon: "success",
              title: 'Üretim Bitirildi!',
              text: 'Üretim bitirildi.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });

          }    
      });

      setTimeout(function () {
        Swal.close();
      }, 4000);
    }
  });
}

}


});

  }
  isEmriDetay(e) {
    console.log(e.target);
    this.isemriAyrinti=false;
  }
  redirectToForm(path){

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([path]));
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
  lineArea: Chart = {
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
  Stackbarchart: Chart = {
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
  lineArea2: Chart = {
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
  lineChart: Chart = {
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
  DonutChart: Chart = {
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
  BarChart: Chart = {
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
  WidgetlineChart: Chart = {
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
  WidgetlineChart1: Chart = {
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
  WidgetlineChart2: Chart = {
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
  WidgetlineChart3: Chart = {
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
