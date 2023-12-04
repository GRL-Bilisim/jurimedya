import { Component, OnInit,ChangeDetectorRef, ViewEncapsulation, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule , Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any; 

import { EditrecordrowComponent } from '../editrecordrow/editrecordrow.component';
import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { count, map } from 'rxjs/operators';

@Component({
  selector: 'app-newrecordrowproses',
  templateUrl: './newrecordrow_proses.component.html',
  styleUrls: ['./newrecordrow_proses.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewrecordrowProsesComponent implements OnInit {

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
   prosesid:any;
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
  constructor(private cdr:ChangeDetectorRef,private modalService: NgbModal,public activeModal: NgbActiveModal,private router: Router, private http: HttpClient,private route:ActivatedRoute,private http2: HttpClient,) {




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



  evetsil(id)
  {
    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=deleterecord&formid="+this.secilenform+"&recordid="+id;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
     
    
  
    });
  }


  editrecord(id,formids)
  {

    localStorage.setItem('formid', this.formid);
    localStorage.setItem('formtanimi', this.formtanimi);
    localStorage.setItem('recordid', id);
 
    this.router.navigate(['/forms/editrecord']);
  
  }


satirekle(formids)
{

  this.modalService.open(EditrecordrowComponent, {centered: true});

}

  yenikayit(formids)
  {

    localStorage.setItem('formid', this.secilenform);
    localStorage.setItem('formtanimi', this.formtanimi);
    localStorage.setItem('recordid', "");
 
    this.router.navigate(['/forms/newrecord']);
  
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

 public degistir(filename)
{
  if (filename!='')
  {
    return localStorage.getItem('url')+filename;
  }
  else
  {
    return localStorage.getItem('url')+'no-photo-available.png';
  }

}
islemyap(formid,alanadi)
{

  if (formid==278&&alanadi=='ch_kodu')
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
  if (formid==460&&alanadi=='baglantilitalep')
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



ngAfterViewInit(){
 
  this.viewInterval = setInterval(()=>{

  
    
   
    clearInterval(this.viewInterval);
  },2000);

}

  ngOnInit() {


    this.prosesid=localStorage.getItem('prosesid');
this.secilenform=localStorage.getItem('subformid');
    this.formtanimi=localStorage.getItem('formtanimi');
    this.formid=localStorage.getItem('rowformid');
    this.recordid=localStorage.getItem('rowrecordid');
    this.turu='Satır Ekle';
    if (this.recordid!='')
    {
      this.turu='Satır Düzenle';
    }

    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=prosesverileri&prosesid="+this.prosesid+"&userid="+localStorage.getItem('userid');

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
   this.formverileri=data;



  
    });


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=prosesalanlari&prosesid="+this.prosesid;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;


    for(var i=0;i<this.blokalanlari.length;i++)
    {


      if (this.blokalanlari[i].verigiristuru=='Radiobutton' ||this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox')
      {
       
        var splitted = this.blokalanlari[i].degerleri.split(";"); 
        var splitted2 = this.blokalanlari[i].etiketleri.split(";"); 

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

    




   this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=prosesalanlari&prosesid="+this.prosesid;


 
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;

    for(var i=0;i<this.blokalanlari.length;i++)
    {


    
     
      
      if (this.blokalanlari[i].verigiristuru=='Radiobutton' ||this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox'|| this.blokalanlari[i].verigiristuru=='Secimli')
      {
       
        var splitted = this.blokalanlari[i].degerleri.split(";"); 
        var splitted2 = this.blokalanlari[i].etiketleri.split(";"); 

        var cities_psh:Array<{id: string, name: string,field:string}> = []; 

        for(var k=0;k<splitted2.length;k++)
        {  
          cities_psh.push({ id: splitted[k], name: splitted2[k],field:this.blokalanlari[i].alanadi });
        }



        this.cities[this.blokalanlari[i].alan_index]=cities_psh;

      }

    }


  
    });

    });

    var durum=this;


    setTimeout(function () {
  

//durum.formverileri[0]['sorumlusu']=["hazalacemoglu"];
    

  }, 1000);

    
  } 




  kaydet(){


    var modalim=this.activeModal;
    const postUrl=localStorage.getItem('url') + "angular/prosesverilerikaydet.php?prosesid="+this.prosesid+"&userid="+localStorage.getItem('userid')+"&recordid="+this.recordid;
   
   
    let postData = new FormData();
    
 
    this.formverileri.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
console.log(key,item[key]);

           postData.append(key, item[key]);


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


   
  }

} 