import { Component, Output, HostListener,EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import * as swalFunctions from '../../shared/data/sweet-alerts';


const data: any = require('../../shared/data/chartist.json');
import * as chartsData from '../../shared/data/chartjs';

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

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
  // plugins?: any;
}

@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.scss']
})


export class CrudModalComponent implements OnInit {

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
var durum = this;
      swal.fire({
        title: 'Form Kapatılacaktır ?',
        text: "Form kapatılacaktır. Emin misiniz ? ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Evet',
        cancelButtonText: 'İptal',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {

          durum.activeModal.close();
          setTimeout(function () {
            swal.close();
  
        }, 1000);
        }
    });
  }
}
  swal = swalFunctions;
  @Input() id: number;
  @Input() data: any;
  myForms: FormGroup;
  modalBaslik: string;
  isEmriAnalizi: boolean = true;
  isEmriKalite: boolean = true;
  uretimVerileri: boolean = true;
  operasyonNo: any;
  term:any;
  projeKodu: any;
  isIstasyonu: any;
  planlananUretim: any;
  hatasizUretim: any;
  hataliUretim: number;
  islemSuresi: any;
  aktifOperator: any;
  kontrolNe: any = 'N1';
  UrunOlculeri: any;
  eId: any;
  durusGruplari: any;
  divGizle: boolean = false;
  DurusGizle: boolean = true;
  durusAltGruplari: any;
  DurusAltGizle: boolean = true;
  perId: any;
  uretimbaslatarihi:any;
  baslamazamani: string = "00:00:00";
  durusbaslatbutton: boolean = false;
  durusbitirbutton: boolean = true;
  fireGizle: boolean = true;
  fireNedenleriData: any;
  uretdurdur: boolean=true;
  uretbaslat: boolean=true;
  uretilenmiktar: any;
  firemiktar: any;
  uretimsuresi: any;
  IsemriNo: any;
  MamulKodu: any;
  constructor(
    private http: HttpClient,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {

  }


  // Donut chart configuration Starts
  DonutChart4: Chart = {
    type: 'Pie',
    data: data['DashboardDonut'],
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 0,
      chartPadding: 25,
      labelInterpolationFnc: function (value) {
        return '\ue8dd';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };
  // Donut chart configuration Starts
  DonutChart1: Chart = {
    type: 'Pie',
    data: data['DashboardDonut'],
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 0,
      chartPadding: 25,
      labelInterpolationFnc: function (value) {
        return '\ue8dd';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };
  // Donut chart configuration Ends

  // Donut chart configuration Starts
  DonutChart2: Chart = {
    type: 'Pie',
    data: data['DashboardDonut'],
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 90,
      chartPadding: 25,
      labelInterpolationFnc: function (value) {
        return '\ue8f8';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };
  // Donut chart configuration Ends

  // Donut chart configuration Starts
  DonutChart3: Chart = {
    type: 'Pie',
    data: data['DashboardDonut'],
    options: {
      donut: true,
      donutWidth: 3,
      startAngle: 270,
      chartPadding: 25,
      labelInterpolationFnc: function (value) {
        return '\ue879';
      }
    },
    events: {
      draw(data: any): void {
        if (data.type === 'label') {
          if (data.index === 0) {
            data.element.attr({
              dx: data.element.root().width() / 2,
              dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
              class: 'ct-label',
              'font-family': 'feather'
            });
          } else {
            data.element.remove();
          }
        }
      }
    }
  };
  // Donut chart configuration Ends



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


  isEmriAnalizF(isEmriId) {

    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=isemrianaliz&isemriindex=" + isEmriId;
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          this.operasyonNo = data[i].operasyonno;
          this.IsemriNo = data[i].isemrino;
          this.projeKodu = data[i].projekodu;
          this.isIstasyonu = data[i].isistasyonu;
          this.planlananUretim = data[i].partimiktari;
          this.hatasizUretim = data[i].gerceklesenislempartisi;
          this.hataliUretim = (data[i].partimiktari - data[i].gerceklesenislempartisi);
          this.islemSuresi = data[i].islemsuresi;
          this.aktifOperator = data[i].operatoraktif;
          this.perId = data[i].perid;
        }
      }


    });




  }


  isEmriKaliteF(isEmriId) {

    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=isemrianaliz&isemriindex=" + isEmriId;
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          this.operasyonNo = data[i].operasyonno;
          this.IsemriNo = data[i].isemrino;
          this.MamulKodu = data[i].mamulkodu;
          this.projeKodu = data[i].projekodu;
          this.isIstasyonu = data[i].isistasyonu;
          this.planlananUretim = data[i].partimiktari;
          this.hatasizUretim = data[i].gerceklesenislempartisi;
          this.hataliUretim = (data[i].partimiktari - data[i].gerceklesenislempartisi);
          this.islemSuresi = data[i].islemsuresi;
          this.aktifOperator = data[i].operatoraktif;
          this.perId = data[i].perid;
        }

        const dataUrunOlculeri = localStorage.getItem('url') +"angular/dataservis.php?page_id=formgetir&formid=589&isemrimamulkodu="+this.MamulKodu;
        this.http.get<any>(dataUrunOlculeri).subscribe(data => {
          this.UrunOlculeri = data;
        });
    

      }


    });




  }

  isEmriUretimF(isEmriId) {

    const dataIsEmirleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=isemrianaliz&isemriindex=" + isEmriId;
    this.http.get<any>(dataIsEmirleri).subscribe(data => {
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          this.operasyonNo = data[i].operasyonno;
          this.IsemriNo = data[i].isemrino;
          this.projeKodu = data[i].projekodu;
          this.isIstasyonu = data[i].isistasyonu;
          this.planlananUretim = data[i].partimiktari;
          this.hatasizUretim = data[i].gerceklesenislempartisi;
          this.hataliUretim = (data[i].partimiktari - data[i].gerceklesenislempartisi);
          this.islemSuresi = data[i].islemsuresi;
          this.aktifOperator = data[i].operatoraktif;
          this.perId = data[i].perid;
        }
      }


    });




  }

  kontrolPlaniEkle(value: any,) {

    for (let key in value) {

      let olcu = value[key];
      var st = key.split('_');
      let kodu = value['turu_' + st[1]];

      if (st[0] == 'olcu') {
        const dataUrunOlculeri = localStorage.getItem('url') +"angular/dataservis.php?page_id=isemrikalite&userid=" + localStorage.getItem('userid') + "&isemriid=" + this.eId + "&olcuturu=" + kodu + "&asama=" + this.kontrolNe + "&olcu=" + olcu;
        this.http.get<any>(dataUrunOlculeri).subscribe(data => {
          if (data[0].status == 'OK') {

            if (data[0].asama == 'ilk') {
              this.kontrolNe = 'N2';
            } else {
              this.kontrolNe = data[0].asama;
            }

          }
        });

      } else {

      }

    }

  }

  asamaKontrolEt(asamasi) {

    this.kontrolNe = asamasi;

    if (asamasi == 'N1') {
      asamasi = 'ilkonay';
    } else {
      asamasi = asamasi;
    }


    const dataAsamaNe = localStorage.getItem('url') +"angular/dataservis.php?page_id=isemriasamane&userid=" + localStorage.getItem('userid') + "&isemriid=" + this.eId + "&asamasi=" + asamasi;
    this.http.get<any>(dataAsamaNe).subscribe(data => {

      for (let i = 0; i < data.length; i++) {

        if (data[i].kriterkodu == 'İç Çap') {
          for (let key in data[i]) {
            if (key == asamasi.toLowerCase()) {
              // console.log("      key:", key, "value:", data[i][key]);
              (<HTMLInputElement>document.getElementById('olcu_1')).value = data[i][key];
            }
          }
        }

        else if (data[i].kriterkodu == 'Dış Çap') {
          for (let key in data[i]) {
            if (key == asamasi.toLowerCase()) {
              // console.log("      key:", key, "value:", data[i][key]);
              (<HTMLInputElement>document.getElementById('olcu_4')).value = data[i][key];
            }
          }
        }
      }
    });



  }

  durusBaslat(id) {

    this.divGizle = true;
    this.DurusGizle = false;
    this.DurusAltGizle = true;

    const duruGruplari = localStorage.getItem('url') +"angular/dataservis.php?page_id=durustanimlaricek";
    this.http.get<any>(duruGruplari).subscribe(data => {

      this.durusGruplari = data;

    });

  }


  durusAltGrup(id) {

    this.divGizle = true;
    this.DurusGizle = true;
    this.DurusAltGizle = false;

    const durusAltGruplari = localStorage.getItem('url') +"angular/dataservis.php?page_id=durusgrupalt&durusgrupkodu=" + id;
    this.http.get<any>(durusAltGruplari).subscribe(data => {

      this.durusAltGruplari = data;

    });

  }

  durusOlustur(id) {

    var ad = localStorage.getItem('personelozlukid');

    var durum = this;

    swal.fire({
      title: 'Duruş Başlatılsın Mı?',
      text: "Duruş başlatılacaktır.",
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
        const durusOlustur = localStorage.getItem('url') +"angular/dataservis.php?page_id=durusbaslat&baslat=E&isemriid=" + durum.eId + "&duruskodu=" + id + "&personelid=" + ad;
        durum.http.get<any>(durusOlustur).subscribe(data => {
          if (data[0].status == 'OK') {
            durum.divGizle = false;
            durum.DurusGizle = true;
            durum.DurusAltGizle = true;

            durum.baslamazamani = data[0].baslamazamani;
            durum.durusbaslatbutton = true;
            durum.durusbitirbutton = false;
          }
        });



        swal.fire({
          icon: "success",
          title: 'Duruş Başlatıldı!',
          text: 'Seçilen emir başlatıldı',
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


  durusBitir(id) {


    var durum = this;

    swal.fire({
      title: 'Duruş Bitirilsin Mı?',
      text: "Duruş bitirilecektir.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#2F8BE6',
      cancelButtonColor: '#F55252',
      confirmButtonText: 'Bitir',
      cancelButtonText: 'İptal',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      },
      buttonsStyling: false,
    }).then(function (result) {
      if (result.value) {

        const durusOlustur = localStorage.getItem('url') +"angular/dataservis.php?page_id=durusbaslat&bitir=E&isemriid=" + durum.eId + "&duruskodu=" + id + "&personelid=" + durum.perId;
        durum.http.get<any>(durusOlustur).subscribe(data => {
          if (data[0].status == 'OK') {
            durum.divGizle = false;
            durum.DurusGizle = true;
            durum.DurusAltGizle = true;

            durum.durusbaslatbutton = false;
            durum.durusbitirbutton = true;

          }
        });


        swal.fire({
          icon: "success",
          title: 'Duruş Bitirildi!',
          text: 'Seçilen duruş bitirildi.',
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

  durusVazgec(e) {
    if (e == 'altgrup') {
      this.DurusGizle = false;
      this.divGizle = true;
      this.DurusAltGizle = true;
    }
    if (e == 'fireGizle') {
      this.fireGizle = true;
      this.divGizle = false;
    }
    if (e == 'durusgizle') {

      this.DurusGizle = true;
      this.divGizle = false;
      this.DurusAltGizle = true;

    }
  }

  fireGir() {

    this.divGizle = true;
    this.fireGizle = false;


    const fireNedenleri = localStorage.getItem('url') +"angular/dataservis.php?page_id=fireturlericek";
    this.http.get<any>(fireNedenleri).subscribe(data => {

      this.fireNedenleriData = data;

    });


  }

  fireOlustur(e) {

    var durum = this;

    swal.fire({
      title: 'Fire Girilsin Mi?',
      text: "Fire miktarını giriniz!",
      icon: 'question',
      input: 'text',
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
      preConfirm: (value) => {
        if (!value) {
          swal.showValidationMessage(
            'Miktar Girmek Zorundasınız.'
          )
        }
      },
    }).then(function (result) {
      if (result.isConfirmed == true) {
        const fireGir = localStorage.getItem('url') +"angular/dataservis.php?page_id=fireolustur&isemriid=" + durum.eId+"&firemiktari="+result.value+"&secilenhata="+e;
        durum.http.get<any>(fireGir).subscribe(data => {
          if(data[0].status=='ROWERR'){

            swal.fire({
              icon: "warning",
              title: 'Üretim Emri Bulunamadı!',
              text: 'Seçilen üretim emrine ait bir kayıt bulunamadı. Fire girilemedi.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });

          }
          else if (data[0].status=='OK'){

            swal.fire({
              icon: "success",
              title: 'Fire Girildi !',
              text: 'Seçilen kayıta ait fire oluşturuldu.',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });

          }
          else if (data[0].status=='ERR'){

            swal.fire({
              icon: "warning",
              title: 'Fire Oluşturulamadı !',
              text: 'Fire kaydı oluşturulurken bir sorunla karşılaşıldı. Sistem Yöneticisine başvurun!',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });

          }
          else if (data[0].status=='FIRERR'){

            swal.fire({
              icon: "warning",
              title: 'Fire Oluşturulamadı!',
              text: 'Çok fazla fire kaydı oluşturdunuz.Sistem Yöneticisine başvurun!',
              customClass: {
                confirmButton: 'btn btn-success'
              },
            });

          }
        });

       

        setTimeout(function () {
          swal.close();

        }, 4000);
      }
    });
  }


  uretimeBaslat(e){
    console.log(e);

    var durum = this;

    swal.fire({
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
        const uretimOlustur = localStorage.getItem('url') +"angular/dataservis.php?page_id=uretimebasla&baslat=E&isemriid=" +durum.eId+"&userid="+durum.perId;
       console.log(uretimOlustur);
        durum.http.get<any>(uretimOlustur).subscribe(data => {
          
            if(data[0].isdurumu=='H' ){
              durum.uretimbaslatarihi = data[0].bitistarihi;
              durum.uretdurdur=false;
              durum.uretbaslat=true;
            }

        });



        swal.fire({
          icon: "success",
          title: 'Duruş Başlatıldı!',
          text: 'Seçilen emir başlatıldı',
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

  ngOnInit() {

    


  


    for (let key in this.data) {

      let child = this.data[key];
      this.eId = this.data['title'];
console.log(child);
      if (child == 'isemrianalizi') {
        this.modalBaslik = 'İş Emri Analizi';
        this.isEmriAnalizF(this.eId);
        this.isEmriAnalizi = false;
        this.isEmriKalite = true;
        this.uretimVerileri = true;
      }
      if (child == 'isemrikalite') {
        this.modalBaslik = 'İş Emri Kalite';
        this.isEmriKaliteF(this.eId);
        this.isEmriAnalizi = true;
        this.isEmriKalite = false;
        this.uretimVerileri = true;
      }
      if (child == 'uretimverileri') {
        this.modalBaslik = 'Üretim Verileri';
        this.isEmriUretimF(this.eId);
        this.isEmriAnalizi = true;
        this.isEmriKalite = true;
        this.uretimVerileri = false;

      }



    }

    const uretimOlustur = localStorage.getItem('url') +"angular/dataservis.php?page_id=uretimebasla&isemriid="+this.eId+"&userid="+this.perId;
    this.http.get<any>(uretimOlustur).subscribe(data => {
      
        if(data[0].isdurumu=='H' ){
         this.uretimbaslatarihi = data[0].bitistarihi;
         this.uretilenmiktar = data[0].uretilenmiktar;
         this.firemiktar = data[0].firemiktar;
         this.uretdurdur=false;
         this.uretbaslat=true;
        }
        if(data[0].isdurumu=='E' || data[0].isdurumu==''){
          this.uretimbaslatarihi = data[0].bitistarihi;
          this.uretilenmiktar = data[0].uretilenmiktar;
          this.firemiktar = data[0].firemiktar;
          this.uretimsuresi = data[0].toplamsure;
          this.uretdurdur=true;
          this.uretbaslat=false;
         }

    });

    const dataDurusSorgula = localStorage.getItem('url') +"angular/dataservis.php?page_id=durussorgula&isemriid=" + this.eId;
    this.http.get<any>(dataDurusSorgula).subscribe(data => {

      if (data[0].status == 'OK') {
        this.baslamazamani = data[0].saat;
        this.durusbaslatbutton = true;
        this.durusbitirbutton = false;
      } if (data[0].status == 'ERR') {
        this.durusbaslatbutton = false;
        this.durusbitirbutton = true;

      }

    });

    // this.buildItemForm(this.data);
  }


  uretimeDurdur(e){
    var durum = this;

    swal.fire({
      title: 'Üretilen Miktar ?',
      text: "Üretilen miktarı giriniz!",
      icon: 'question',
      input: 'text',
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
      preConfirm: (value) => {
        if (!value) {
          swal.showValidationMessage(
            'Miktar Girmek Zorundasınız.'
          )
        }
      },
    }).then(function (result) {
      if (result.isConfirmed == true) {
        const uretimDurdur = localStorage.getItem('url') +"angular/dataservis.php?page_id=uretimebasla&bitir=E&isemriid="+durum.eId+"&userid="+durum.perId+"&uretimmiktari="+result.value;
        durum.http.get<any>(uretimDurdur).subscribe(data => {
            if(data[0].isdurumu=='E'){

              durum.uretimbaslatarihi = data[0].bitistarihi;
              durum.uretilenmiktar = data[0].uretilenmiktar;
              durum.uretimsuresi = data[0].toplamsure;

              durum.uretdurdur=true;
              durum.uretbaslat=false;

              swal.fire({
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
          swal.close();
        }, 4000);
      }
    });
  }
}
