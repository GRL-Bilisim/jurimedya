import { Component, OnInit, ViewEncapsulation,ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NewrecordrowComponent } from '../newrecordrow/newrecordrow.component';
declare var $: any; 
import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CrudModalComponent } from './crud-modal/crud-modal.component';

@Component({
  selector: 'app-alt',
  templateUrl: './alt.component.html',
  styleUrls: ['./alt.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltComponent implements OnInit {
  element: HTMLElement;

  swal =  swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;
  public rowsPl;
  public rowsUer;
  public filteredRows;
  closeResult: string;
  TermArama : any;
  secilenform:any;
  formtanimi:any;
  formbilgileri:any[];
  formid:any;
  sutunlar:any;
filterTerm:any;
  // column header
  columns = [
    { name: 'Name', prop: 'full_name' },
    { name: 'Email', prop: 'email' },
    { name: 'Age', prop: 'age' },
    { name: 'Salary', prop: 'salary' }
  ];
  columnsPl = [
    { name: 'Name', prop: 'full_name' },
    { name: 'Email', prop: 'email' },
    { name: 'Age', prop: 'age' },
    { name: 'Salary', prop: 'salary' }
  ];

  columnsUer = [
    { name: 'Name', prop: 'full_name' },
    { name: 'Email', prop: 'email' },
    { name: 'Age', prop: 'age' },
    { name: 'Salary', prop: 'salary' }
  ];
  // multi Purpose datatable Row data

  public ColumnMode = ColumnMode;


  

  SERVER_URL = localStorage.getItem('url');

  userroles = localStorage.getItem('unvani');

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @ViewChild('tableResponsive') tableResponsive: any;

  public expanded: any = {};

  public editing = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;

  // server side row data
  public serverSideRowData;


  tabs :any = [];

  active =12;

  // private
  private tempData = [];
  private multiPurposeTemp = [];
  tabloSecililer: any=[];
  secilisi: any;
  bolgeayrimi: any;
  urecid: any;
  chkodu: any;
  anasipno: any;
  secilengrup:any;
  secilengrupalternative:any;
  anfrom: any;
  kod_urun: any;
  altsipid: any;
  mid: any;
  uretimyontemleriopt: any;
dizidata = [];

  filteredRowsPl: any;
  tabloSecililerPL: any;
  gozadedi: any;
  siparismiktari: any;
  fabrikatolerans: any;
  gantsecilenmakine: any;
  pbitistarihi: any;
  pbitissaat: any;

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
   constructor(private host: ElementRef,private modalService: NgbModal,private cdr :ChangeDetectorRef,private router: Router, private http: HttpClient,private route:ActivatedRoute,private http2: HttpClient,) {
 
  }


  

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

 /**
   * customChkboxOnSelect
   *
   * @param { selected }
   */
  customChkboxOnSelect(e) {

    this.tabloSecililer = e.selected;

    
  
    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }
  customChkboxOnSelect2(e) {

    this.tabloSecililerPL = e.selected;

    
  
    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }
  tablogetir(formid,recordid,param){

  
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + formid;
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.columns = data;
  
  
  
    });
  
  
  
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + formid;
  
  
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.formbilgileri = data;
  
      if (this.formbilgileri.length > 0) {
  
  
  
        for (var i = 0; i < this.formbilgileri.length; i++) {
  
          this.formtanimi = this.formbilgileri[i].formtanimi;
          this.sutunlar = this.formbilgileri[i].sutunlar;
     
  
          //formdatası alınıyor
  
  
          this.formid = this.formbilgileri[i].form_index;
          this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&"+param+"="+recordid+"&formid=" + this.formbilgileri[i].form_index + "&sutunlar=" + this.formbilgileri[i].sutunlar+"&donem="+localStorage.getItem('donem');
  
          console.log(this.SERVER_URL);
            
  
          this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {
       
              this.rows = data2;
  
              this.filteredRows = data2;
        
              this.cdr.markForCheck();
  
  
          });
  
  
  
  
  
  
  
        }
  
      }
  
  
  
    });
  
 
}
tablogetirPl(){

  var formid = '624';
  var recordid = this.altsipid;
  var param="tablosiparisid";
  
  var cv = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + formid;

  this.http.get<any>(cv).subscribe(data => {
    this.columnsPl = data;

console.log(this.columnsPl);

  });



 var hb = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + formid;



  this.http.get<any>(hb).subscribe(data => {
   

    if (data.length > 0) {



      for (var i = 0; i < data.length; i++) {

        var gg = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&"+param+"="+recordid+"&formid=" + data[i].form_index + "&sutunlar=" + data[i].sutunlar+"&donem="+localStorage.getItem('donem');

        this.http2.get<any>(gg).subscribe(data2 => {
     
            this.rowsPl = data2;
            this.filteredRowsPl = data2;
console.log(this.rowsPl);
      
            this.cdr.markForCheck();


        });







      }

    }



  });


}
// tablogetirUer(){

//   var formid = '624';
//   var recordid = this.mid;
//   var param="malzemereceteid";
  
//   var cv = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + formid;

//   this.http.get<any>(cv).subscribe(data => {
//     this.columnsUer = data;

// console.log(this.columnsPl);

//   });



//  var hb = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + formid;



//   this.http.get<any>(hb).subscribe(data => {
   

//     if (data.length > 0) {



//       for (var i = 0; i < data.length; i++) {

//         var gg = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&"+param+"="+recordid+"&formid=" + data[i].form_index + "&sutunlar=" + data[i].sutunlar+"&donem="+localStorage.getItem('donem');

//         this.http2.get<any>(gg).subscribe(data2 => {
     
//             this.rowsUer = data2;
      
//             this.cdr.markForCheck();


//         });







//       }

//     }



//   });


// } 
dbleditrow(e,formids) {



    this.editrecord(e[0].id, formids);
  
  }

  blokgetir(formid){


    this.tabs=[];
    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid=" + formid;
     this.http.get<any>(this.SERVER_URL).subscribe(data => {
   
       for (let i = 1; i < data.length; i++) {
       if(data[i].turu=='Tabs'){
         this.tabs.push(data[i]);
         console.log(this.active);
          }
         
       }

    setTimeout(()=>{
      // console.log(  document
      //   .querySelectorAll<HTMLElement>('ul.nav-tabs li a.varsayilanaktif')
      //   .forEach(node => console.log(node)));
  
      document
      .querySelectorAll<HTMLElement>('ul.nav-tabs li a.varsayilanaktif')
      .forEach(node => node.click())
    },1000);



   });
  //   console.log(this.tabs);
  //  console.log(this.tabs.find(x => x.sirasi));

 
 }

 toggleDisabled() {
    this.active = 1;

}
seciliRec(e,formu,anaform){

this.tabloSecililer=[];

this.anfrom = anaform;

console.log(e);

this.secilisi =e[0].mid;

this.chkodu =e[0].ch_kodu;
this.anasipno = e[0].sip_id;

this.altsipid = e[0].siparis_izleme_id;

this.mid = e[0].mid;

this.siparismiktari = e[0].kesme_isemri_gelecek_miktar;


this.urecid = e[0].id;
this.kod_urun = e[0].kod_urun;

if(anaform=='562'){
  localStorage.setItem('yurticisipiz',e[0].malzemekodus);

  this.tablogetirPl();
  // this.tablogetirUer();
}
else
{
  localStorage.setItem('yurticisipiz',this.kod_urun);

}
const iskartatolerans = localStorage.getItem('url') +"angular/dataservis.php?page_id=fabrikaiskartaoran&userid="+localStorage.getItem('userid')+"&mid="+this.mid;
this.http.get<any>(iskartatolerans).subscribe(data => {
  this.fabrikatolerans = data[0].tolerans;
});

this.route.params.subscribe(val => {
  this.secilenform = this.route.snapshot.params['id'];

  this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid=" + formu;

  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.columns = data;



  });



  this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=" + formu;



  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formbilgileri = data;

    if (this.formbilgileri.length > 0) {



      for (var i = 0; i < this.formbilgileri.length; i++) {

        this.formtanimi = this.formbilgileri[i].formtanimi;
        this.sutunlar = this.formbilgileri[i].sutunlar;
   

        //formdatası alınıyor


        this.formid = this.formbilgileri[i].form_index;
        this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&tablosiparisid="+e[0].id+"&formid=" + this.formbilgileri[i].form_index + "&sutunlar=" + this.formbilgileri[i].sutunlar+"&donem="+localStorage.getItem('donem');



        this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {
     
            this.rows = data2;

            this.filteredRows = data2;
      
            this.cdr.markForCheck();


        });







      }

    }



  });


});




}


uretimEkle(){

  this.gozadedi = this.tabloSecililer[0].goz_adedi;
  const gantsecimkay = localStorage.getItem('url') +"angular/dataservis.php?page_id=gantsecimigetir&userid="+localStorage.getItem('userid');

  this.http.get<any>(gantsecimkay).subscribe(data => {

   this.gantsecilenmakine = data[0].secim;

  var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=makinagrub&kaynakadi="+this.gantsecilenmakine;

  this.http.get<any>(url).subscribe(data => {


   var gruplar=data[0].makinagrub.split("-",2);

   if (gruplar.length>1)
   {
     this.secilengrup=gruplar[0];
     this.secilengrupalternative=gruplar[1];
   }
   else
   {
     this.secilengrup=data[0].makinagrub;
     this.secilengrupalternative=null;
   }




   
  
  if(this.tabloSecililer[0].yontemno!=''){


 

    var yontemno = this.tabloSecililer[0].yontemno;
    var borucontaadedi = this.tabloSecililer[0].boru_conta_adedi;

    var baskisayisi = Math.round(this.siparismiktari/(this.gozadedi*borucontaadedi));

    var miktarvars = this.gozadedi*borucontaadedi*baskisayisi;


 
var uretimyontemimakinegrubu=this.tabloSecililer[0].makina_grup;
var dd = uretimyontemimakinegrubu.split("-",2);
if (dd.length>1)
{
uretimyontemimakinegrubu=dd[0];
}
if (uretimyontemimakinegrubu!==this.secilengrup&&uretimyontemimakinegrubu!==this.secilengrupalternative)
{


  swal.fire({
    icon: "warning",
    title: 'Kaynak Grubu Uyuşmazlığı',
    confirmButtonText: 'Tamam',
    text: 'Seçilen kaynak ile yöntemde seçilen kaynak grubu uyumsuz. Ya kaynağı yeniden seçin ya da farklı bir üretim yöntemi seçerek devam ediniz.',
    customClass: {
      confirmButton: 'btn btn-warning'
    }
  });
}
else
    if (this.gantsecilenmakine==null||this.gantsecilenmakine=="")
    {
      swal.fire({
        icon: "warning",
        title: 'Planlama için Kaynak Seçilmedi',
        confirmButtonText: 'Tamam',
        text: 'Makine Seçimi Yapmadan üretim yöntemi seçemezsiniz.!',
        customClass: {
          confirmButton: 'btn btn-warning'
        }
      });
    }
   else
    if (this.gantsecilenmakine!=null&&this.gantsecilenmakine!="")
    {

    var yontemno = this.tabloSecililer[0].id;



var durum=this;
swal.fire({
  title: 'Üretim Oluştur',
  html: `
        <div class="row">,
          <div class="col-md-12">
          <label>Baskı Adedi</label>
          <br>
          <input type="number" id="baskiadedi" class="swal2-input" value="`+baskisayisi+`" placeholder="Baskı Adedi Giriniz">
          </div>
          <div class="col-md-6">
          <label>Miktar</label>
          <input type="text" id="miktar" class="swal2-input" value="`+miktarvars+`" placeholder="Miktar Giriniz">
          </div>  
          <div class="col-md-6">
          <label>Başlama Tarih</label>
          <input type="date" id="plantarih" value="`+durum.pbitistarihi+`" class="swal2-input" >
          </div>    
          <div class="col-md-6">
          <label>Başlama Saat</label>
          <input type="time" id="plansaat" value="`+durum.pbitissaat+`" class="swal2-input" >
          </div>  

        </div>
 
       
        `,
  confirmButtonText: 'Üretim Hedef Oluştur',
  focusConfirm: false,
  didOpen: () => {
    

    const pbs = localStorage.getItem('url') +"angular/dataservis.php?page_id=pbitistsgetir&makine="+durum.gantsecilenmakine+"&kalipid="+yontemno+"&miktar="+miktarvars;

    durum.http.get<any>(pbs).subscribe(datacx => {
 
       (document.getElementById('plantarih')  as HTMLInputElement).value=datacx[0].pbitistarih;
       (document.getElementById('plansaat')  as HTMLInputElement).value=datacx[0].pbitissaati;
 
    });

    const inputNumber = swal.getHtmlContainer().querySelector('#baskiadedi');
    const inputTolerans = swal.getHtmlContainer().querySelector('#iskartaoran');



    // sync input[type=range] with input[type=number]
    inputNumber.addEventListener('change', () => {
      var baskiadetguncel:any = (document.getElementById('baskiadedi')  as HTMLInputElement).value;
      var miktarguncel:any =   baskiadetguncel*durum.gozadedi*borucontaadedi;
      (document.getElementById('miktar')  as HTMLInputElement).value=miktarguncel;


    })
  },
  preConfirm: () => {

    const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
    const baskiadedi = (document.getElementById('baskiadedi')  as HTMLInputElement).value;
    const plantarih = (document.getElementById('plantarih')  as HTMLInputElement).value;
    const plansaat = (document.getElementById('plansaat')  as HTMLInputElement).value;
    if (!miktar && !baskiadedi ) {
      swal.showValidationMessage(` Miktar, Baskı Sayısı Giriniz!!!`);
    }
    return { miktar: miktar,baskiadedi:baskiadedi,plantarih:plantarih,plansaat:plansaat }
  }
}).then((result) => {
  if(result.value.miktar>'0'){

    var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=planuretimolustur&siparisid="+durum.altsipid+"&miktar="+result.value.miktar+"&kalipid="+yontemno+"&baskiadedi="+result.value.baskiadedi+"&makine="+durum.gantsecilenmakine+"&ptarih="+result.value.plantarih+"&psaat="+result.value.plansaat;
    // alert(url);
    durum.tablogetirPl();
    durum.http.get<any>(url).subscribe(data => {
      durum.tablogetirPl();
    });
  }
 

})
  }
  }
  else{
    swal.fire({
      icon: "warning",
      title: 'Seçim Yapmanız Gerekmektedir!',
      confirmButtonText: 'Tamam',
      text: 'Ekleme için kayıt seçmeniz gerekmektedir.',
      customClass: {
        confirmButton: 'btn btn-warning'
      }
    });
  }
  // var title = "Üretim Ekle";
  // var formid = "250";
  // var formtanimi = "Üretim Yöntemleri";


// var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=250&sutunlar=yontemno,kalip_no,hamur_konf_no_1,makina_grup&planmalzemeid="+this.secilisi;

// this.http.get<any>(url).subscribe(data => {
//   this.dizidata = data;
//   for (var i = 0; i < this.dizidata.length; i++) {
   
//     this.uretimyontemleriopt =this.uretimyontemleriopt+'<option value="'+this.dizidata[i].yontemno+'">'+this.dizidata[i].yontemno+'('+this.dizidata[i].kalip_no+' - '+this.dizidata[i].hamur_konf_no_1+'-  '+data[i].makina_grup+')</option> ';

//       if(data.length==i+1){
      
//         var durum=this;
//         swal.fire({
//           title: 'Üretim Oluştur',
//           html: `<select type="text" id="kalipid" class="swal2-input" placeholder="Üretim Yöntemi Seçiniz">
//                   <option value="">Üretim Yöntemi Seçiniz</option>
//                   `+durum.uretimyontemleriopt+`
//                 </select>
//           <input type="text" id="miktar" class="swal2-input" placeholder="Miktar Giriniz">`,
//           confirmButtonText: 'Üretim Oluştur',
//           focusConfirm: false,
//           preConfirm: () => {
//             const kalipid = (document.getElementById('kalipid')  as HTMLInputElement).value;
//             const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
//             if (!kalipid || !miktar) {
//               swal.showValidationMessage(`Üretim Yöntemi Ve Miktar Giriniz!!!`)
//             }
//             return { kalipid: kalipid, miktar: miktar }
//           }
//         }).then((result) => {
//           console.log(result);
          
//           var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=planuretimolustur&siparisid="+durum.altsipid+"&miktar="+result.value.miktar+"&kalipid="+result.value.kalipid;
//           durum.tablogetir('624',durum.altsipid,'tablosiparisid');
//           durum.http.get<any>(url).subscribe(data => {
         

          
//           });

//         })
//       }

//   }

 
// });

// const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
// modalRef.componentInstance.id = this.urecid; // should be the id
// modalRef.componentInstance.data = { title: title, formid: formid, formtanimi: formtanimi, parameter: this.secilisi }; // should be the data
// modalRef.result.then((result) => {

//   if(result=='success'){
//       this.tablogetirPl();
// }

// }).catch((error) => {
//   console.log(error);
// });




});
});


}



uretimEkles(){

  if(this.tabloSecililer[0].yontemno!=''){

    var yontemno = this.tabloSecililer[0].yontemno;
    var borucontaadedi = this.tabloSecililer[0].boru_conta_adedi;
    var baskisayisi = Math.round(this.siparismiktari/(this.gozadedi*borucontaadedi));

    var miktarvars = this.gozadedi*borucontaadedi*baskisayisi;
    var durum=this;
    swal.fire({
      title: 'Üretim Oluştur',
      html: `<label>Baskı Adedi</label>
              <br>
              <input type="number" id="baskiadedi" class="swal2-input" value="`+baskisayisi+`" placeholder="Baskı Adedi Giriniz">
              <br>
              <label>Miktar</label>
              <input type="text" id="miktar" class="swal2-input" value="`+miktarvars+`" placeholder="Miktar Giriniz">
            `,
      confirmButtonText: 'Üretim Oluştur',
      focusConfirm: false,
      didOpen: () => {
        
        const inputNumber = swal.getHtmlContainer().querySelector('#baskiadedi');

        // sync input[type=range] with input[type=number]
        inputNumber.addEventListener('change', () => {
          var baskiadetguncel:any = (document.getElementById('baskiadedi')  as HTMLInputElement).value;
          var miktarguncel:any =   baskiadetguncel*durum.gozadedi*borucontaadedi;
          (document.getElementById('miktar')  as HTMLInputElement).value=miktarguncel;
        })
      },
      preConfirm: () => {

        const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
        const baskiadedi = (document.getElementById('baskiadedi')  as HTMLInputElement).value;
        if (!miktar) {
          swal.showValidationMessage(` Miktar Giriniz!!!`);
        }
        return { miktar: miktar,baskiadedi:baskiadedi }
      }
    }).then((result) => {
      if(result.value.miktar>'0'){
   
        var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=planuretimolustur&siparisid="+durum.altsipid+"&miktar="+result.value.miktar+"&kalipid="+yontemno+"&baskiadedi="+result.value.baskiadedi+"&makine="+localStorage.getItem("secilenmakine");
       //alert(url);
        durum.tablogetirPl();
        durum.http.get<any>(url).subscribe(data => {
          durum.tablogetirPl();
  
        });
      }
     
  
    })
  }
  else{
    swal.fire({
      icon: "warning",
      title: 'Seçim Yapmanız Gerekmektedir!',
      confirmButtonText: 'Tamam',
      text: 'Ekleme için kayıt seçmeniz gerekmektedir.',
      customClass: {
        confirmButton: 'btn btn-warning'
      }
    });
  }
  // var title = "Üretim Ekle";
  // var formid = "250";
  // var formtanimi = "Üretim Yöntemleri";


// var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=250&sutunlar=yontemno,kalip_no,hamur_konf_no_1,makina_grup&planmalzemeid="+this.secilisi;

// this.http.get<any>(url).subscribe(data => {
//   this.dizidata = data;
//   for (var i = 0; i < this.dizidata.length; i++) {
   
//     this.uretimyontemleriopt =this.uretimyontemleriopt+'<option value="'+this.dizidata[i].yontemno+'">'+this.dizidata[i].yontemno+'('+this.dizidata[i].kalip_no+' - '+this.dizidata[i].hamur_konf_no_1+'-  '+data[i].makina_grup+')</option> ';

//       if(data.length==i+1){
      
//         var durum=this;
//         swal.fire({
//           title: 'Üretim Oluştur',
//           html: `<select type="text" id="kalipid" class="swal2-input" placeholder="Üretim Yöntemi Seçiniz">
//                   <option value="">Üretim Yöntemi Seçiniz</option>
//                   `+durum.uretimyontemleriopt+`
//                 </select>
//           <input type="text" id="miktar" class="swal2-input" placeholder="Miktar Giriniz">`,
//           confirmButtonText: 'Üretim Oluştur',
//           focusConfirm: false,
//           preConfirm: () => {
//             const kalipid = (document.getElementById('kalipid')  as HTMLInputElement).value;
//             const miktar = (document.getElementById('miktar')  as HTMLInputElement).value;
//             if (!kalipid || !miktar) {
//               swal.showValidationMessage(`Üretim Yöntemi Ve Miktar Giriniz!!!`)
//             }
//             return { kalipid: kalipid, miktar: miktar }
//           }
//         }).then((result) => {
//           console.log(result);
          
//           var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=planuretimolustur&siparisid="+durum.altsipid+"&miktar="+result.value.miktar+"&kalipid="+result.value.kalipid;
//           durum.tablogetir('624',durum.altsipid,'tablosiparisid');
//           durum.http.get<any>(url).subscribe(data => {
         

          
//           });

//         })
//       }

//   }

 
// });

// const modalRef = this.modalService.open(CrudModalComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: false });
// modalRef.componentInstance.id = this.urecid; // should be the id
// modalRef.componentInstance.data = { title: title, formid: formid, formtanimi: formtanimi, parameter: this.secilisi }; // should be the data
// modalRef.result.then((result) => {

//   if(result=='success'){
//       this.tablogetirPl();
// }

// }).catch((error) => {
//   console.log(error);
// });


}

MrpOlustur(formid,row){

   
  var durum=this;
        
  swal.fire({
    title: 'MRP Oluşturulsun Mu?',
    text: "Değişiklik geri alınamayacaktır!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2F8BE6',
    cancelButtonColor: '#F55252',
    confirmButtonText: 'Oluştur',
    cancelButtonText: 'İptal',
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1'
    },
    buttonsStyling: false,
  }).then(function (result) {
    if (result.value) { 
      durum.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mrpolustur&uretimid=" +row.id + "&userid=" + localStorage.getItem('userid');
 
      durum.http.get<any>(durum.SERVER_URL).subscribe(data => {
        if(data[0].status=='Success'){
          durum.tablogetir(formid,durum.altsipid,'tablosiparisid');
        }
  
      });

  
    }
  });

}
satirekle(formids, masterfield, blokid) {

  // localStorage.setItem('rowformid', formids);
  // localStorage.setItem('rowrecordid', "");
var masval = "";
  if(masterfield=='siparisid'){
masval = this.anasipno;
}else{
  masval = this.urecid;

}

    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'xl', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue: masval, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {
        if(formids=='709'){
          this.tablogetir(formids,this.chkodu+';'+this.anasipno,masterfield);
        }else{

          this.tablogetir(formids,this.urecid,masterfield);
        }
      }

    }, (reason) => {
     
    });





}

evetsil(id) {
  this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid=" + this.secilenform + "&recordid=" + id + "&userid=" + localStorage.getItem('userid');

  this.http.get<any>(this.SERVER_URL).subscribe(data => {



  });
}
deleterecord(id) {
  var idZ = id;
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

      durum.evetsil(idZ);




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
editrecord(id, formids) {

 
  var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


  modalSat.componentInstance.Modaldata = { mastervalue: '', rowformid: formids, rowrecordid: id, formtanimi: '', subformid: '' };

  modalSat.result.then((result) => {

    if (result == 'Yenile') {
        this.tablogetir(formids,this.urecid,'');
    }

  }, (reason) => {
  });



}
navChanged1(event,formi) {
  this.tabloSecililer=[];
 console.log(event);
    console.log(formi,event.nextId.bagliformindex,this.urecid,event.nextId.detailfield);
 
if(event.nextId.bagliformindex=='709'){
  this.tablogetir(event.nextId.bagliformindex,this.chkodu+';'+this.anasipno,event.nextId.detailfield);
}
else if(event.nextId.bagliformindex=='624'){
  this.tablogetir(event.nextId.bagliformindex,this.altsipid,event.nextId.detailfield);
}
else if(event.nextId.bagliformindex=='713'){
  this.tablogetir(event.nextId.bagliformindex,this.altsipid,event.nextId.detailfield);
}
else if(event.nextId.bagliformindex=='255'){
  this.tablogetir(event.nextId.bagliformindex,this.mid,event.nextId.detailfield);
}
else if(event.nextId.bagliformindex=='250'){
  this.tablogetir(event.nextId.bagliformindex,this.mid,event.nextId.detailfield);
}
else{
  this.tablogetir(event.nextId.bagliformindex,this.urecid,event.nextId.detailfield);
}
  
  

  
  

}

  
// filters results
filterDatatable(event){
  // get the value of the key pressed and make it lowercase
  let val = event.target.value.toLowerCase();
  if(event.keyCode!='8'){

      // get the amount of columns in the table
  let colsAmt = this.columns.length;
  // get the key names of each column in the dataset
  let keys = Object.keys(this.rows[0]);
  // assign filtered matches to the active datatable
  this.rows = this.rows.filter(function(item){
    // iterate through each row's column data
    for (let i=0; i<colsAmt; i++){
      // check for a match
      if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
        // found match, return true to add to result set
        return true;
      }
      
    }
  });
  
}else{
   this.rows=this.filteredRows;
  }

  // whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}



  ngOnInit() {

    var url = localStorage.getItem('url') + "angular/dataservis.php?page_id=makinagrub&kaynakadi="+localStorage.getItem('secilenmakine');
  

      
    
    this.http.get<any>(url).subscribe(data => {


     var gruplar=data[0].makinagrub.split("-",2);

     if (gruplar.length>1)
     {
       this.secilengrup=gruplar[0];
       this.secilengrupalternative=gruplar[1];
     }
     else
     {
       this.secilengrup=data[0].makinagrub;
       this.secilengrupalternative=null;
     }

 


    });

    this.cdr.markForCheck();


    // content header
    this.contentHeader = {
      headerTitle: 'Datatables',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '#'
          },
          {
            name: 'Forms & Tables',
            isLink: true,
            link: ''
          },
          {
            name: 'Datatables',
            isLink: false
          }
        ]
      }
    };
  }
}