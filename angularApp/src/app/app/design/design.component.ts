import { Component, OnInit, ViewEncapsulation,ChangeDetectorRef, ViewChild } from '@angular/core';
import { DatatableData } from './data/datatables.data';
import {Router, ActivatedRoute} from '@angular/router';
import * as swalFunctions from '../shared/data/sweet-alerts';
import { NewrecordrowComponent } from '../newrecordrow/newrecordrow.component';

import swal from 'sweetalert2';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datatables',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DesignComponent implements OnInit {

  swal =  swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;
  public filteredRows;
  closeResult: string;
  silinecekformid:any=";"
  secilenblok:any='';
  secilenform:any;
  formtanimi:any;
  formbilgileri:any[];
  bloklar:any[];
  formalanlari:any[];
  blokalanlari:any[];
  formid:any;
  sutunlar:any;
  termA:any;
  termB:any;
  termC:any;
filterTerm:any;
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
  tabloSecililer: any=[];

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
   * filterUpdate
   *
   * @param code
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rows.filter(function (d) {
     
      return d.key.toLowerCase().indexOf(val) !== -1 || !val;

    });

    // update the rows

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  
  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * toggleExpandRowResponsive
   *
   * @param row
   */
  toggleExpandRowResponsive(row) {
    this.tableResponsive.rowDetail.toggleExpandRow(row);
  }

  /**
   * customChkboxOnSelect
   *
   * @param { selected }
   */
  customChkboxOnSelect(e) {
    console.log(e.selected);

    this.tabloSecililer=e.selected;

    // this.chkBoxSelected.splice(0, this.chkBoxSelected.length);

  }


  secilileriSil(){

    if(this.tabloSecililer.length>0){
      
        var durum=this;
        
            swal.fire({
              title: 'Seçilen Kayıtlar Silinsin mi?',
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
                for (let i = 0; i < durum.tabloSecililer.length; i++) {
                  durum.evetsil(durum.tabloSecililer[i].id);
                }
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
         
            this.tabloyenile();

      this.chkBoxSelected=[];

    }
  else{

    swal.fire({
      icon: "warning",
      title: 'Seçim Yapmanız Gerekmektedir!',
      confirmButtonText: 'Tamam',
      text: 'Silme işlemi için kayıtları seçmeniz gerekmektedir.',
      customClass: {
        confirmButton: 'btn btn-warning'
      }
    });
}
 

  }
  /**
   * serverSideSetPage
   *
   * @param event
   */
  serverSideSetPage(event) {
    this.http
      .get('assets/data/datatable-data.json')
      .pipe(map((data) => data as Array<any>))
      .subscribe((data) => {
        this.serverSideRowData = data;
      });
  }



  /**
   * MultiPurposeFilterUpdate
   *
   * @param event
   */
  MultiPurposeFilterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.multiPurposeTemp.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(private modalService: NgbModal,private cdr :ChangeDetectorRef,private router: Router, private http: HttpClient,private route:ActivatedRoute,private http2: HttpClient,) {




    route.params.subscribe(val => {
    this.secilenform=route.snapshot.params['id'];



    
  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink="+route.snapshot.params['id'];
console.log(this.SERVER_URL);

  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.columns=data;

  

  });


  
  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid="+this.route.snapshot.params['id'];

  console.log(this.SERVER_URL);


  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formbilgileri=data;

    if (this.formbilgileri.length>0)
    {

     

      for(var i=0;i<this.formbilgileri.length;i++)
      {

        this.formtanimi=this.formbilgileri[i].formtanimi;
        this.sutunlar=this.formbilgileri[i].sutunlar;



//formdatası alınıyor


this.formid=this.formbilgileri[i].form_index;
this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formbilgileri[i].form_index+"&sutunlar="+this.formbilgileri[i].sutunlar;



  this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {

    this.rows=data2;
    this.filteredRows=data2;

 
    this.cdr.markForCheck();


  });







      }

    }

  

  });

});


  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  evetsil(id)
  {
    var durum=this;
    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=deleterecord&formid="+this.silinecekformid+"&recordid="+id+"&userid="+localStorage.getItem('userid');

console.log(this.SERVER_URL);
    this.http.get<any>(this.SERVER_URL).subscribe(data => {
 
      if(durum.silinecekformid==200)
      {
        durum.blokyenile();
      }
      
      if(durum.silinecekformid==199)
      {
        durum.alanyenile(); 
      }
      
      
      if(durum.silinecekformid==266)
      {
        durum.alanlistesiyenile(durum.secilenblok);
      }
     
  
    });
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

  tabloyenile()
  {


    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&menulink="+this.secilenform;


  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.columns=data;

  

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


  editrecord(id)
  {

    localStorage.setItem('secilenform', this.secilenform);
    
    localStorage.setItem('formid', this.formid);
    localStorage.setItem('formtanimi', this.formtanimi);
    localStorage.setItem('recordid', id);
 
    this.router.navigate(['/editrecordform']);
  
  }


  yenikayit()
  {
    localStorage.setItem('secilenform', this.secilenform);

    localStorage.setItem('formid', this.formid);
    localStorage.setItem('formtanimi', this.formtanimi);
    localStorage.setItem('recordid', "");
 
    this.router.navigate(['/newrecordform']);
  
  }


 deleterecord(id,formid)
 {
   var idZ = id;
var durum=this;

this.silinecekformid=formid;

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


        if(durum.silinecekformid==200)
        {
          durum.blokyenile();
        }
        
        if(durum.silinecekformid==199)
        {
          durum.alanyenile(); 
        }
        
        
        if(durum.silinecekformid==266)
        {
          durum.alanlistesiyenile(durum.secilenblok);
        }
  
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

 alanlistesiyenile(secilenblok)
 {

  this.secilenblok=secilenblok;
  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=blokalanlari&formid="+this.formid+"&blokid="+secilenblok+"&turu=design";


 
  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.blokalanlari=data;


    this.cdr.markForCheck();
  
});

 }


 blokyenile()
 {


  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid="+this.formid+"&turu=design";



this.http.get<any>(this.SERVER_URL).subscribe(datam => {
this.bloklar=datam;

this.cdr.markForCheck();

for(var x=0;x<this.bloklar.length;x++)
      {

        if (this.secilenblok==''&&x==0)
        {
          this.secilenblok=this.bloklar[x].bokindex;
        
          this.alanlistesiyenile(this.bloklar[x].bokindex);

        }
        else
        if (this.secilenblok!=''&&x==0)
        {
          this.alanlistesiyenile(this.secilenblok);
        }


      }



});




 }

 alanyenile()
 {
   
  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=tumalanlar&formid="+this.formid;


  this.http.get<any>(this.SERVER_URL).subscribe(datam => {
  this.formalanlari=datam;
  
  this.cdr.markForCheck();

  });
  

 }


 bloksil(blokid)
{

  this.deleterecord(blokid,'200');

}


alansil(blokid)
{

  this.deleterecord(blokid,'199');

}

blokalansil(blokalanid)
{

  this.deleterecord(blokalanid,'266');

}






 blokekle()
{

  //this.tabloyenile(this.formid,blokid);

  // localStorage.setItem('rowformid', '200');
  // localStorage.setItem('rowrecordid', "");


  //     localStorage.setItem('mastervalue',this.formid);

  
      var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

      modalSat.componentInstance.Modaldata = {mastervalue:this.formid,rowformid:'200',rowrecordid:'',formtanimi:'',subformid:''};
      
      modalSat.result.then((result) => {
        
        if (result=='Yenile')
        {
          this.blokyenile();
        }
   
     }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
  

  

}


alanduzelt(id)
{

  // localStorage.setItem('rowformid','199');
  // localStorage.setItem('rowrecordid', id);

  var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

  modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'199',rowrecordid:id,formtanimi:'',subformid:''};
  
  modalSat.result.then((result) => {
    
    if (result=='Yenile')
    {
      this.alanyenile();
    }

 }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });


}


alanaktar(id)
{


  var durum=this;
  this.SERVER_URL=localStorage.getItem('url') +"aktarimyap.php?id="+id+"&blokid="+this.secilenblok+"&userid="+localStorage.getItem('userid');

  this.http.get<any>(this.SERVER_URL).subscribe(data => {

 
    
    
     

  });

  durum.alanlistesiyenile(durum.secilenblok);
    


}


tumunuaktar()
{

  var durum=this;
  this.SERVER_URL=localStorage.getItem('url') +"aktarimyap.php?blokid="+this.secilenblok+"designid="+this.formid+"&userid="+localStorage.getItem('userid');

console.log(this.SERVER_URL);
  this.http.get<any>(this.SERVER_URL).subscribe(data => {

 
    
    
      durum.alanlistesiyenile(this.secilenblok);
    

  });

}


blokduzelt(id)
{

  // localStorage.setItem('rowformid','200');
  // localStorage.setItem('rowrecordid', id);


  var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

  modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'200',rowrecordid:id,formtanimi:'',subformid:''};
  
  modalSat.result.then((result) => {
    
    if (result=='Yenile')
    {
      this.blokyenile();
    }

 }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });


}


blokalanduzelt(id)
{

  // localStorage.setItem('rowformid','266');
  // localStorage.setItem('rowrecordid', id);


  var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

  modalSat.componentInstance.Modaldata = {mastervalue:'',rowformid:'266',rowrecordid:id,formtanimi:'',subformid:''};
  
  modalSat.result.then((result) => {
    
    if (result=='Yenile')
    {
      this.alanlistesiyenile(this.secilenblok);
    }

 }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 });


}

alanekle()
{

  //this.tabloyenile(this.formid,blokid);

  // localStorage.setItem('rowformid', '199');
  // localStorage.setItem('rowrecordid', "");


  //     localStorage.setItem('mastervalue',this.formid);

      var modalSat  = this.modalService.open(NewrecordrowComponent, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
   

      modalSat.componentInstance.Modaldata = {mastervalue:this.formid,rowformid:'199',rowrecordid:'',formtanimi:'',subformid:''};
      
      modalSat.result.then((result) => {
        
        if (result=='Yenile')
        {
          this.alanyenile();
        }
    
     }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     });
    
  

  

}



  ngOnInit() {

    this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid="+this.route.snapshot.params['id'];


  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formbilgileri=data;

    if (this.formbilgileri.length>0)
    {

//bloklar alınıyor






//formalanları alınıyor


//blok alanları alınıyor


     

      for(var i=0;i<this.formbilgileri.length;i++)
      {

       

        this.formtanimi=this.formbilgileri[i].formtanimi;
        this.sutunlar=this.formbilgileri[i].sutunlar;



//formdatası alınıyor


this.formid=this.formbilgileri[i].form_index;


this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=bloklar&formid="+this.formbilgileri[i].form_index+"&turu=design";

console.log(this.SERVER_URL);

this.http.get<any>(this.SERVER_URL).subscribe(datam => {
this.bloklar=datam;

for(var x=0;x<this.bloklar.length;x++)
      {

        if (this.secilenblok==''&&x==0)
        {
          this.secilenblok=this.bloklar[x].bokindex;
        
          this.alanlistesiyenile(this.bloklar[x].bokindex);

        }
        else
        if (this.secilenblok!=''&&x==0)
        {
          this.alanlistesiyenile(this.secilenblok);
        }


      }



});



this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=tumalanlar&formid="+this.formbilgileri[i].form_index;


this.http.get<any>(this.SERVER_URL).subscribe(datam => {
this.formalanlari=datam;

});






this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formgetir&formid="+this.formbilgileri[i].form_index+"&sutunlar="+this.formbilgileri[i].sutunlar;



  this.http2.get<any>(this.SERVER_URL).subscribe(data2 => {

    this.rows=data2;
 


  });







      }

    }

  

  });



   




    this.cdr.markForCheck();


    // Initially load first page
    this.serverSideSetPage({ offset: 0 });

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
