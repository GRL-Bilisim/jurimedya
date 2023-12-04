import { Component, OnInit, ViewEncapsulation, ViewChild,ChangeDetectorRef } from '@angular/core';
import { DatatableData } from './data/datatables.data';
import {Router, ActivatedRoute} from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule , Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { count, map } from 'rxjs/operators';

@Component({
  selector: 'app-editrecordrow',
  templateUrl: './editrecordrow.component.html',
  styleUrls: ['./editrecordrow.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditrecordrowComponent implements OnInit {
  closeResult: string;

  swal =  swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;

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
  
   formid:any;
   formid_alt:any;

recordid:any;

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
  constructor(private cdr: ChangeDetectorRef,private modalService: NgbModal,private router: Router, private http: HttpClient,private route:ActivatedRoute,private http2: HttpClient,) {




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


  yenikayit(formids,masterfield)
  {

    localStorage.setItem('formid', formids);
    localStorage.setItem('formtanimi', this.formtanimi);
    localStorage.setItem('recordid', "");


  
    this.router.navigate(['/forms/newrecordform']);
  
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
 deleterecord(id,formids)
 {

 this.evetsil(id);
        
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
  
  

       
  
  
        swal.fire({
          icon: "success",
          title: 'Silme işlemi başarılı!',
          text: 'Seçilen kayıt silindi',
          customClass: {
            confirmButton: 'btn btn-success'
          },
        })
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



  ngOnInit() {
  
  

this.secilenform=localStorage.getItem('secilenform');
    this.formtanimi=localStorage.getItem('formtanimi');
    this.formid=localStorage.getItem('formid');
    this.recordid=localStorage.getItem('recordid');


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formverileri&formid="+this.formid+"&kayitid="+this.recordid;


    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formverileri=data;


  
    });


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid="+this.formid;


  
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.bloklar=data;

    for (var i=0;this.bloklar.length;i++)
    {

      var masterfield="";
      var detailfield="";
      var blokindex="";
      var blogum:any;
      if (this.bloklar[i].turu=='Liste')
      {
        blogum=this.bloklar[i];
       blokindex=this.bloklar[i].bokindex;
        masterfield=blogum[masterfield];
        detailfield=blogum[detailfield];
        




        //tablo alanları çekilip diziye aktarılıyor
        this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&formid="+blogum.bagliformindex+"&turu=sorgu";

     
        this.http.get<any>(this.SERVER_URL).subscribe(data2 => {
this.verialanlari=data2;


          var cities_psh2:Array<{id: string, name: string}> = []; 
          cities_psh2=[];
     
          for(var j=0;j<this.verialanlari.length;j++)
          {

          
            cities_psh2.push({ id: this.verialanlari[j].Name, name: this.verialanlari[j].prop });
          }
      

      
        this.sutunlars[blogum.bokindex]=cities_psh2;




        this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid="+blogum.bagliformindex+"&turu=sorgu";

       
        this.http.get<any>(this.SERVER_URL).subscribe(data => {
          this.formbilgileri=data;
      
          if (this.formbilgileri.length>0)
          {
      
           
      
            for(var t=0;t<this.formbilgileri.length;t++)
            {
      
              this.formtanimi=this.formbilgileri[t].formtanimi;
              this.sutunlar=this.formbilgileri[t].sutunlar;
      
      
      
      //formdatası alınıyor
      
    var mastervalue="";
    var deger:any;
      for (var r=0;r<this.formverileri.length;r++)
      {
        deger=this.formverileri[0];
  
        mastervalue=deger[masterfield];
       
        this.formid_alt=blogum.bagliformindex;
   
this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formbilgileri[t].form_index+"&sutunlar="+this.formbilgileri[t].sutunlar+"&blokindex="+blogum.bokindex+"&recordid="+this.recordid+"&kayitformid="+this.formid;


  this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {


    this.satirlar[blogum.bokindex]=data2;



 


  });
      
        //tablo verileri çekilip diziye aktarılıyor



      }

    }


  }

  
    });


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formalanlari&formid="+this.formid;


  

    this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;

    for(var i=0;i<this.blokalanlari.length;i++)
    {
      if (this.blokalanlari[i].verigiristuru=='FixList' || this.blokalanlari[i].verigiristuru=='Combobox' || this.blokalanlari[i].verigiristuru=='Secimli')
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
        if (this.blokalanlari[i].keyfield=='index_malzemeler')
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


  
    });



  });
  

      }

}

    });
  } 

} 