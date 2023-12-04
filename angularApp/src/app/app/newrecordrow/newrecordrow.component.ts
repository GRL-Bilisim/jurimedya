import { Component, OnInit,ChangeDetectorRef,HostListener, Input,ViewEncapsulation, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { DatatableData } from './data/datatables.data';
import {Router, ActivatedRoute} from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule , Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any; 
import { ToastrService } from 'ngx-toastr';

import { EditrecordrowComponent } from '../editrecordrow/editrecordrow.component';
import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { count, map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-newrecordrow',
  templateUrl: './newrecordrow.component.html',
  styleUrls: ['./newrecordrow.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None,
  

})
export class NewrecordrowComponent implements OnInit {

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


  @ViewChild('myselect') myselect;
  closeResult: string;
  heroForm: FormGroup;
  swal =  swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;
  activeTab = "general";
  vActive = 'top'; // Vertical Pills
  active = 1; // Basic Navs
  kActive = 1; // Keep content
  sActive; // Selecing Navs
  disabled = true;
  dActive; // Dynamic Navs

  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  validatingForm: FormGroup;
  secilenform:any;
  formtanimi:any;
  formbilgileri:any[];
  formverileri:any[];
  gelenveriler:any[];
  verikumeler:any[];
  verialanlari:any[]; 
  grupbasliklari:Array<{id: string,name: string}>= []; 

   formid:any;
   formid_alt:any;

recordid:any;
turu:any;

cities:Array<{id: string, name: string,field:string}>[] = []; 
sutunlars:Array<{id: string, name: string}>[] = []; 
satirlar:Array<{id: string}>[] = []; 
sutunlar:string;




cities2 = [
  { id: 1, name: 'Vilnius' },
  { id: 2, name: 'Kaunas' },
  { id: 3, name: 'Pavilnys', disabled: true },
  { id: 4, name: 'Pabradė' },
  { id: 5, name: 'Klaipėda' }
];
  
  bloklar:any[];
  blokalanlari:any[];


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

  public editing = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;

  // server side row data
  public serverSideRowData;

  // private
  private tempData = [];
  private multiPurposeTemp = [];
  viewInterval:any="";
  bloklar_y: any;
  donenveri: any;
  setInxerval: any;
  editfieldicon: boolean=true;
  userroles = localStorage.getItem('unvani');
  topMastervalue: any;




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

 

Modaldata: any;

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(public toastr: ToastrService,private cdr:ChangeDetectorRef,private modalService: NgbModal,public activeModal: NgbActiveModal,private router: Router, private http: HttpClient,private route:ActivatedRoute,private http2: HttpClient,) {



  }

  ngAfterViewChecked(){
    // Error: NG0100: ExpressionChangedAfterItHasBeenCheckedErro hatası için eklendi
    this.cdr.detectChanges();
 }

  public baslikkontrol(grupadi)
{

if (grupadi=='')
{
  return 'Genel Bilgiler';
}
if (grupadi!='')
{
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



evetsil(id,formids)
{

  

  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid="+formids+"&recordid="+id;
console.log(this.SERVER_URL);

  this.http.get<any>(this.SERVER_URL).subscribe(data => {
   


  });
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
eksikAlanlar(id){

  const cd=localStorage.getItem('url') + "eksikalanolustur.php?formid="+id+"&userid="+localStorage.getItem('userid');
  
      this.http.get<any>(cd).subscribe(data => {
       
      if(data[0].status=='OK'){
        swal.fire({
          icon: 'success',
          title: 'Başarılı',
          text: 'Eksik Alanlar Oluşturuldu',
          confirmButtonText: `Tamam`,
        
        });
      }

    
      });

}

  formalanlariyenile(){
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid="+this.formid;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;


    for (var i = 0; i < this.formverileri.length; i++) {

      for (var x = 0; x < this.blokalanlari.length; x++) {

        if (this.blokalanlari[x].alanturu == 'Dosya') {

          this.formverileri[i][this.blokalanlari[x].alanadi] = this.degistir(this.formverileri[i][this.blokalanlari[x].alanadi],this.blokalanlari[x].verigiristuru);
        }

      }


    }
    for(var i=0;i<this.blokalanlari.length;i++)
    {

  

      if ( this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox')
      {
       
       

        var splitted;
        var splitted2;
       
        if (this.blokalanlari[i].alan_index!='1994')
        {
          splitted = this.blokalanlari[i].degerleri.split(";"); 

          splitted2 = this.blokalanlari[i].etiketleri.split(";"); 
          
        }

        if (this.blokalanlari[i].alan_index=='1994')
        {
          splitted = this.blokalanlari[i].degerleri.split("|"); 

         splitted2 = this.blokalanlari[i].etiketleri.split("|"); 
          
        }
     
        var cities_psh:Array<{id: string, name: string,field:string}> = []; 

        for(var k=0;k<splitted2.length;k++)
        {  
          cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
        }



        this.cities[this.blokalanlari[i].alan_index]=cities_psh;

      }

      if (this.blokalanlari[i].verigiristuru=='Secimli')
      {
       
        var splitted = this.blokalanlari[i].degerleri.split(";"); 
        var splitted2 = this.blokalanlari[i].etiketleri.split(";"); 

       
       

        var cities_psh:Array<{id: string, name: string,field:string}> = []; 

        for(var k=0;k<splitted2.length;k++)
        {  
          cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
        }



        this.cities[this.blokalanlari[i].alan_index]=cities_psh;






        var verisi=this.formverileri[0][this.blokalanlari[i].alanadi];
        var deger:string;

        if (verisi!='')
        {
          var strArrs=verisi.toString().split(",");
          var alanim=this.blokalanlari[i].alanadi;

          this.formverileri[0][alanim]=strArrs;
        }
       

   

      }

    }


  
    });

   }

  showEditIcon(){
    if(this.editfieldicon==true){
      this.editfieldicon=false;
    }else{
      this.editfieldicon=true;
    }
  }

  AlanOzellikleri(alanindex,formid){

    // localStorage.setItem('rowformid',formid);
    // localStorage.setItem('rowrecordid', alanindex);

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

  satirekle(formids, masterfield, blokid) {

    this.tabloyenile(this.formid, blokid);

    // localStorage.setItem('rowformid', formids);
    // localStorage.setItem('rowrecordid', "");


    this.SERVER_URL = localStorage.getItem('url') + "angular/dataservis.php?page_id=mastervaluegetir&formid=" + this.formid + "&recordid=" + this.recordid + "&masterfield=" + masterfield;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
      this.donenveri = data;
      for (var i = 0; i < this.donenveri.length; i++) {
        // localStorage.setItem('mastervalue',this.donenveri[i].mastervalue);
        var msv = this.donenveri[i].mastervalue;

      }


      var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


      modalSat.componentInstance.Modaldata = { mastervalue: msv, rowformid: formids, rowrecordid: '', formtanimi: '', subformid: '' };

      modalSat.result.then((result) => {

        if (result == 'Yenile') {
          this.tabloyenile(formids, blokid);
        }

      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });


    });



  }


pdfegit(veri){
if(this.recordid!='' && this.recordid>0){
  window.open(veri,'_blank');
}
}
exceldosyayukle($event: any,alanadi) {
  var data = $event.target.files;
  for (var i = 0; i < this.blokalanlari.length; i++) {

    if (this.blokalanlari[i].verigiristuru == 'File(XLSX)' && this.blokalanlari[i].alanadi == alanadi) {

      if (data.length > 0) {

        const file = data[0];
        this.blokalanlari[i].name = file.name;
        this.blokalanlari[i].dosya = file;
      }
    }
  }

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

  public dosyayukle(filename,alanadi)
  {
  
    const fileList: FileList = filename.target.files;
  
    var reader = new FileReader();
  
    reader.readAsDataURL(filename.target.files[0]); // read file as data url
  
  
    for (var i=0;i<this.blokalanlari.length;i++)
    {
   
  
      if (this.blokalanlari[i].verigiristuru=='File(JPG)'&&this.blokalanlari[i].alanadi==alanadi)
      {
  
        if (fileList.length > 0) {
  
          const file = fileList[0];
  
        this.blokalanlari[i].name=file.name;
        this.blokalanlari[i].dosya=file;
        }
      }
    }
  
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.formverileri[0][alanadi]= event.target.result;
  
      this.cdr.markForCheck();
  
    }
  
   
  }
  deleterecord(id,formids,blokid)
  {
 var durum=this;
 
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
   
   
         durum.evetsil(id,formids);
         
         durum.tabloyenile(formids,blokid);
     
   
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

 public vazgec()
 {
  this.router.navigate(['/listings/'+this.secilenform]);
 }

 public ayniblokmu(s1:any,s2:any)
 {
 if (s1===s2)
 {
  return true;
 }
 else
 {
  return false;
 }


 }

 public degistir(filename,verigiristuru)
{
  if (filename!='')
  {
    return localStorage.getItem('url')+filename;
  }
  else
  {
    return localStorage.getItem('url')+'/no-photo-available.png';
  }

}
islemyap(formid,alanadi)
{

  console.log(formid,alanadi);
  if(formid=='457' && alanadi=='talepturu'){
    var kaelmtur = this.formverileri[0].talepturu;

    if(kaelmtur=='Hizmet' || kaelmtur=='Kırtasiye' || kaelmtur=='Stoksuz Sarf Malzeme'){


        for (let i = 0; i < this.blokalanlari.length; i++) {
          if(this.blokalanlari[i].alanadi=='talepedilen'){
            this.blokalanlari[i].verigiristuru='Edit';
            this.cdr.markForCheck();
          }else if(this.blokalanlari[i].alanadi=='uretici_kodu'){
            this.blokalanlari[i].verigiristuru='Hidden';
            this.cdr.markForCheck();
          }else{
        
          }
          
        }

    }else{
      for (let i = 0; i < this.blokalanlari.length; i++) {
        if(this.blokalanlari[i].alanadi=='talepedilen'){
          this.blokalanlari[i].verigiristuru='Combobox';
          this.cdr.markForCheck();
        }else if(this.blokalanlari[i].alanadi=='uretici_kodu'){
          this.blokalanlari[i].verigiristuru='Secimli';
          this.cdr.markForCheck();
        }else{
      
        }
        
      }
    }
  }
  if(formid=='462' && alanadi=='siparisturu'){

    
  }
  if(formid=='765' && alanadi=='kalemturu'){

    var kaelmtur = this.formverileri[0].kalemturu;

    if(kaelmtur=='Hizmet' || kaelmtur=='Stoksuz Sarf Malzeme' ){


        for (let i = 0; i < this.blokalanlari.length; i++) {
          if(this.blokalanlari[i].alanadi=='ch_kodu'){
            this.blokalanlari[i].verigiristuru='Edit';
            this.cdr.markForCheck();
          }else{
        
          }
          
        }

    }else{
      for (let i = 0; i < this.blokalanlari.length; i++) {
        if(this.blokalanlari[i].alanadi=='ch_kodu'){
          this.blokalanlari[i].verigiristuru='Combobox';
          this.cdr.markForCheck();
        }else{
      
        }
        
      }
    }

  }

  if(formid='780' && alanadi=='uygunmiktar'){

    var isemriid="";
    var uygunmiktar="";
    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {

        if (key=='isemriid')
        {
          isemriid=item[key];
        }
        if (key=='uygunmiktar')
        {
          uygunmiktar=item[key];
        }
      });
    });



    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=uygunmiktarkontrol&isemriid="+isemriid+"&miktar="+uygunmiktar;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {


    });

  }

  if (formid=='278' && alanadi=='ch_kodu')
  {

    var ureticikodu="";

    var firmaid= document.getElementById('ch_adi').getAttribute('ng-reflect-model');

    var formverisi:any[];

    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {

        if (key=='ch_kodu')
        {
          ureticikodu=item[key];
        }

      });
    });


   
   
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=firmakarsilik&firma="+firmaid+"&ureticikodu="+ureticikodu;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {

    formverisi=data;

    for (var i=0;i<=formverisi.length-1;i++)
    {
      this.formverileri[0].kod_urun=formverisi[i].malzemekodu;
    }

    });


  }

  else if(formid=='713' && alanadi =='stoktermin'){
    var stokterm :any;
    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
        if (key=='stoktermin')
        {
          stokterm=item[key];
        }
     
      });
    });


    this.formverileri[0].satis = stokterm;
    console.log(stokterm);
        // var dd  = new Date();
        // dd.setDate(dd.getDate() + 3);
        // const formattedDate = formatDate(dd, 'yyyy-MM-dd','en-US');
        this.formverileri[0].firmatermin = stokterm;


  }

  else if(formid=='705' && alanadi=='birimfiyati'){

    var brfiyat : any;
    var topadet : any;
    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
        if (key=='birimfiyati')
        {
          brfiyat=item[key];
        }
        if (key=='geneltoplamadet')
        {
          topadet=item[key];
        }
      });
    });

    brfiyat = brfiyat.replace(',','.');

    var toplamfiyat = brfiyat * topadet;
    this.formverileri[0].toplamfiyat=toplamfiyat;

  }
  else if(formid=='496' && alanadi=='adetgramaj'){

    var adetgramaj : any;
    var topadet : any;
    var standartkutuadetii:any;
    var standartkutudarasi:any;
    var standartkututoplamadet:any;

    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
        if (key=='adetgramaj')
        {
          adetgramaj=item[key];
        }
        if(key=='standartkutuadetii'){
          standartkutuadetii = item[key];
        }
        if(key=='standartkutudarasi'){
          standartkutudarasi = item[key];
        }
        if(key=='standartkututoplamadet'){
          standartkututoplamadet = item[key];
        }
      });
    });

    var topnetagirlik = adetgramaj ;
    adetgramaj = adetgramaj.replace(',','.');

    var topbrutagirlik = ((standartkutuadetii*standartkutudarasi)+(adetgramaj*standartkututoplamadet))/1000; 
    console.log((standartkutuadetii*standartkutudarasi));
    console.log((adetgramaj*standartkututoplamadet));
    
console.log(topbrutagirlik);


    this.formverileri[0].geneltoplamnetagirlik=topnetagirlik;
    this.formverileri[0].geneltoplambrutagirlik=topbrutagirlik;

  }
  else if(formid=='457' && alanadi=='talepedilen'){

    var secilen = "";

    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
        if (key=='talepedilen')
        {
          secilen=item[key];
        }
      });
    });

    var cok=localStorage.getItem('url') + "angular/dataservis.php?page_id=ureticikodufiltre&talepedilen="+secilen;
    this.http.get<any>(cok).subscribe(data => {
        
        var cities_psh:Array<{id: string, name: string,field:string}> = []; 
  
        for(var k=0;k<data.length;k++)
        {  
          cities_psh.push({ id: data[k].ureticikodu, name: data[k].ureticikodu,field:'uretici_kodu' });
        }
      
    this.cities[9083]=cities_psh;
  
      });

  }
 
  else if(formid=='412' && alanadi=='ch_kodu'){  
    console.log('DDD');
        var ureticikodu="";
    
        var firmaid= document.getElementById('ch_adi').getAttribute('ng-reflect-model');
    
        var formverisi:any[];
    
        this.formverileri.forEach(function(item) {
          Object.keys(item).forEach(function(key) {
    
            if (key=='ch_kodu')
            {
              ureticikodu=item[key];
            }
    
          });
        });
    
    
       
  
        this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=firmakarsilik&firma="+firmaid+"&ureticikodu="+ureticikodu;
    console.log(this.SERVER_URL);
        this.http.get<any>(this.SERVER_URL).subscribe(data => {
    
    
        formverisi=data;
    
        for (var i=0;i<=formverisi.length-1;i++)
        {
          this.formverileri[0].kod_urun=formverisi[i].malzemekodu;

          this.cdr.markForCheck();
        }
    
        });
    
    
      
  }  
  
  else  if(formid=='445' && alanadi=='ismerkezi' ){
  
var ismerkezi ="";  

      this.formverileri.forEach(function(item) {
        Object.keys(item).forEach(function(key) {
  
          if (key=='ismerkezi')
          {
            ismerkezi=item[key];
          }
  
        });
      });

    var presKar=localStorage.getItem('url') + "angular/dataservis.php?page_id=isistasyonfiltreli&ismerkez="+ismerkezi;
    this.http.get<any>(presKar).subscribe(data => {
        
        var cities_psh:Array<{id: string, name: string,field:string}> = []; 
  
        for(var k=0;k<data.length;k++)
        {  
          cities_psh.push({ id: data[k].isistasyonu, name: data[k].isistasyonu,field:this.blokalanlari['12'].alanadi });
        }
        this.cities['7304']=cities_psh;
  
      });
  

  }

  else if(formid=='256' && alanadi=='kriterkodu'){

 var inter = setTimeout(() => {
  var ozellik= document.getElementById('kriterkodu').getAttribute('ng-reflect-model');

  const uo=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid=589&sutunlar=olcuturu,hedefdeger,tolerans_arti,tolerans_eksi&blokindex=1321&recordid="+this.topMastervalue+"&kayitformid=254";
  
  this.http.get<any>(uo).subscribe(data => {
    for (let i = 0; i < data.length; i++) {

      if(data[i].olcuturu==ozellik){
        this.formverileri[0].nominaldeger=data[i].hedefdeger;
        this.formverileri[0].toleransust=data[i].tolerans_arti;
        this.formverileri[0].tolerans=data[i].tolerans_eksi;
      }

    }
  });
clearInterval(inter);
}, 500);




  }

  else  if (formid=='460' && alanadi=='baglantilitalep')
  {


    var ureticikodu="";

    var firmaid= document.getElementById('ch_adi').getAttribute('ng-reflect-model');

    var formverisi:any[];

    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {

        if (key=='baglantilitalep')
        {
          ureticikodu=item[key];
        }

      });
    });


   
   
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=tedarikcifirmakarsilik&firma="+firmaid+"&ureticikodu="+ureticikodu;

    this.http.get<any>(this.SERVER_URL).subscribe(data => {

    formverisi=data;

    for (var i=0;i<=formverisi.length-1;i++)
    {
      this.formverileri[0].ch_kodu=formverisi[i].urunadi;
    }

    });


  }




}


oncekifiyat(){
  var firmaadi= document.getElementById('ch_adi').getAttribute('ng-reflect-model');
  var kodurun= document.getElementById('kod_urun').getAttribute('ng-reflect-model');

        var presKar=localStorage.getItem('url') + "angular/dataservis.php?page_id=satissiparisfiyat&firma="+firmaadi+"&urun="+kodurun;
        this.http.get<any>(presKar).subscribe(data => {
          this.formverileri[0].fiyat = data[0].oncekifiyat;
        });
}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    



    if (this.formid=='278')
    {
      this.setInxerval = setTimeout(() => {
        var firmaadi= document.getElementById('ch_adi').getAttribute('ng-reflect-model');

        var presKar=localStorage.getItem('url') + "angular/dataservis.php?page_id=firmaurunkarsilik&firma="+firmaadi;
    
        this.http.get<any>(presKar).subscribe(data => {
          var cities_psh:Array<{id: string, name: string,field:string}> = []; 

          for(var k=0;k<data.length;k++)
          {  
            cities_psh.push({ id: data[k].karsilik_no, name: data[k].karsilik_no,field:'ch_kodu' });
          }
          this.cities['5057']=cities_psh;

          });

      },1000);

    }

    if(this.formid=='445' ){

    this.setInxerval = setTimeout(() => {
      var ismerkezi= document.getElementById('ismerkezi').getAttribute('ng-reflect-model');
  
    var presKar=localStorage.getItem('url') + "angular/dataservis.php?page_id=isistasyonfiltreli&ismerkez="+ismerkezi;
    this.http.get<any>(presKar).subscribe(data => {
        
        var cities_psh:Array<{id: string, name: string,field:string}> = []; 
  
        for(var k=0;k<data.length;k++)
        {  
          cities_psh.push({ id: data[k].isistasyonu, name: data[k].isistasyonu,field:this.blokalanlari['12'].alanadi });
        }
        this.cities['7304']=cities_psh;
  
      });
  
  
  
      clearInterval(this.setInxerval);
  
    }, 3000);
  
  
  
    }
    
  
  }
  
  degerhizliekle(){


    // localStorage.setItem('mastervalue',this.tokenid);
    var modalSat = this.modalService.open(NewrecordrowComponent, { backdrop: 'static', size: 'lg', keyboard: false, centered: true });


    modalSat.componentInstance.Modaldata = { mastervalue:'', rowformid: '228', rowrecordid: '', formtanimi: '', subformid: '' };

    modalSat.result.then((result) => {

      if (result == 'Yenile') {

      }

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  ngOnInit() {

    

    for (let key in this.Modaldata) {

      let child = this.Modaldata[key];

      this.secilenform=this.Modaldata['subformid'];
      this.formtanimi=this.Modaldata['formtanimi'];
      this.formid=this.Modaldata['rowformid'];
      this.recordid=this.Modaldata['rowrecordid'];
      this.topMastervalue = this.Modaldata['mastervalue'];
      console.log(child);
    };

  

    // this.secilenform=localStorage.getItem('subformid');
    // this.formtanimi=localStorage.getItem('formtanimi');
    // this.formid=localStorage.getItem('rowformid');
    // this.recordid=localStorage.getItem('rowrecordid');
    this.turu='Satır Ekle';
    if (this.recordid!='')
    {
      this.turu='Satır Düzenle';
    }

    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formverileri&formid="+this.formid+"&kayitid="+this.recordid+"&mastervalue="+this.topMastervalue+"&userid="+localStorage.getItem('userid');
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formverileri=data;

    if(this.formid=='713'){
      var yurticisipiz = localStorage.getItem('yurticisipiz');
      this.formverileri[0].urun=yurticisipiz;


    }


    if(this.formid=='780'){
      var ad = localStorage.getItem('personelozlukid');
      this.formverileri[0].operator=ad;
    }

    if(this.formid=='647'){
      var issecililer =localStorage.getItem('isemrisecililer');
      var isemrijson =JSON.parse(localStorage.getItem('isemrijson'));;
      
      data[0].secililer=issecililer;

      for (let i = 0; i < isemrijson.length; i++) {
        data[0].planlanansoktak = isemrijson[i].planlanansoktak;
        data[0].pislemsuresi = isemrijson[i].pislemsuresi;
        data[0].planlanancevrim=isemrijson[i].planlanancevrim;
        data[0].partimiktari = isemrijson[i].partimiktari;
        data[0].planlananhazirlik = isemrijson[i].planlananhazirlik;
   

      }
           
      localStorage.removeItem('isemrisecililer');
      localStorage.removeItem('isemrijson');
    }


  
    });
    if(document.getElementById('ch_adi')!=null){
      var firmaadi= document.getElementById('ch_adi').getAttribute('ng-reflect-model');
    }else{
      var firmaadi = "";
    }
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid="+this.formid+"&firmaid="+firmaadi;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;


    for (var i = 0; i < this.formverileri.length; i++) {

      for (var x = 0; x < this.blokalanlari.length; x++) {

        if (this.blokalanlari[x].alanturu == 'Dosya') {

          this.formverileri[i][this.blokalanlari[x].alanadi] = this.degistir(this.formverileri[i][this.blokalanlari[x].alanadi],this.blokalanlari[x].verigiristuru);
        }

      }


    }

    for(var i=0;i<this.blokalanlari.length;i++)
    {

  

      if ( this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox')
      {
       
       

        var splitted;
        var splitted2;
       
        if (this.blokalanlari[i].alan_index!='1994')
        {
          splitted = this.blokalanlari[i].degerleri.split(";"); 

          splitted2 = this.blokalanlari[i].etiketleri.split(";"); 
          
        }

        if (this.blokalanlari[i].alan_index=='1994')
        {
          splitted = this.blokalanlari[i].degerleri.split("|"); 

         splitted2 = this.blokalanlari[i].etiketleri.split("|"); 
          
        }
      
   
        var cities_psh:Array<{id: string, name: string,field:string}> = []; 

        for(var k=0;k<splitted2.length;k++)
        {  
          cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
        }



        this.cities[this.blokalanlari[i].alan_index]=cities_psh;

      }

      if (this.blokalanlari[i].verigiristuru=='Secimli')
      {
       
        var splitted = this.blokalanlari[i].degerleri.split(";"); 
        var splitted2 = this.blokalanlari[i].etiketleri.split(";"); 

       
       

        var cities_psh:Array<{id: string, name: string,field:string}> = []; 

        for(var k=0;k<splitted2.length;k++)
        {  
          cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
        }



        this.cities[this.blokalanlari[i].alan_index]=cities_psh;






        var verisi=this.formverileri[0][this.blokalanlari[i].alanadi];
        var deger:string;

        if (verisi!='')
        {
          var strArrs=verisi.toString().split(",");
          var alanim=this.blokalanlari[i].alanadi;

          this.formverileri[0][alanim]=strArrs;
        }
       

   

      }

    }


  
    });


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid="+this.formid;
  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.bloklar=data;

    
    var songrup;
    var artim=0;

    this.grupbasliklari=[];


    for (var i=0;this.bloklar.length;i++)
    {

      var masterfield="";
      var detailfield="";
      var blokindex="";
      var blogum:any;

      blogum=this.bloklar[i];
      if (this.bloklar[i].turu=='Liste'){
        this.tabloyenile(this.formid,this.bloklar[i].bokindex);
      }


      

}




   this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid="+this.formid;


 
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;

    for(var i=0;i<this.blokalanlari.length;i++)
    {


    
     
      
      if (this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox'|| this.blokalanlari[i].verigiristuru=='Secimli')
      {
       
    
        var splitted;
        var splitted2;
       
        if (this.blokalanlari[i].alan_index!='1994')
        {
          splitted = this.blokalanlari[i].degerleri.split(";"); 

          splitted2 = this.blokalanlari[i].etiketleri.split(";"); 
          
        }

        if (this.blokalanlari[i].alan_index=='1994')
        {
          splitted = this.blokalanlari[i].degerleri.split("|"); 

         splitted2 = this.blokalanlari[i].etiketleri.split("|"); 
          
        }
   
        var cities_psh:Array<{id: string, name: string,field:string}> = []; 

        for(var k=0;k<splitted2.length;k++)
        {  
          cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
        }



        this.cities[this.blokalanlari[i].alan_index]=cities_psh;

      }

    }


  
    });
this.cdr.markForCheck();
    });

    var durum=this;


    setTimeout(function () {
  

//durum.formverileri[0]['sorumlusu']=["hazalacemoglu"];
    

  }, 1000);

  } 
  TypeWarning(message,header) {
    this.toastr.warning(message,header).onTap.subscribe(()=>{                      
    });
  }
  kaydet(){

    var szort = "";
    const sesult = this.blokalanlari.filter( x => x.zorunlu == 'True' );
    for (let i = 0; i < sesult.length; i++) {
      console.log($('#' + sesult[i].alanadi).hasClass('is-invalid'));
      if ($('#' + sesult[i].alanadi).hasClass('is-invalid') != true) {
        szort = szort+"_degil";
      }else{
        szort="Var";
      }  
    }

    if (szort!="Var") {
      
    var blokalan = this.blokalanlari;
    var modalim=this.activeModal;
    const postUrl=localStorage.getItem('url') + "angular/sender.php?form_id="+this.formid+"&userid="+localStorage.getItem('userid')+"&recordid="+this.recordid;
   
   
    let postData = new FormData();

 

    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
        for (var i = 0; i < blokalan.length; i++) {
          if (blokalan[i].verigiristuru != 'File(JPG)' && blokalan[i].alanadi == key) {
            postData.append(key, item[key]);
          }

          if (blokalan[i].verigiristuru == 'File(JPG)' && blokalan[i].alanadi == key && blokalan[i].dosya != null) {
            postData.append(key, blokalan[i].dosya, blokalan[i].alanadi);
          }

          if (blokalan[i].verigiristuru == 'File(PDF)' && blokalan[i].alanadi == key && blokalan[i].dosya != null) {
            postData.append(key, blokalan[i].dosya, blokalan[i].alanadi);
          }
          if (blokalan[i].verigiristuru == 'File(XLSX)' && blokalan[i].alanadi == key && blokalan[i].dosya != null) {
            postData.append(key, blokalan[i].dosya, blokalan[i].alanadi);
          }
        }
      });
    });
 
    this.http.post(postUrl,postData,{ responseType: 'text' }).subscribe({
      next: data => {

        swal.fire({
          icon: "success",
          title: 'Kayıt işlemi başarılı!',
          text: 'Bekleyiniz...',
          
          customClass: {
            confirmButton: 'btn btn-success'
          },
        }).then(function (result) {
          if (result.value) {
           

          }
        });

        setTimeout(function () {
          swal.close();

          modalim.close('Yenile');

      }, 2000);


      },
      error: error => {
          console.error('There was an error!', error);
      }


  })

    }else{
      this.TypeWarning('Zorunlu alanları doldurmadan formu kaydedemezsiniz.','Zorunlu Alan!');
    }
   
  }

} 