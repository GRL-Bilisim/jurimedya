import { Component, OnInit, ViewEncapsulation,ChangeDetectorRef, ViewChild } from '@angular/core';
import { DatatableData } from './data/datatables.data';
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

@Component({
  selector: 'app-upk',
  templateUrl: './upk.component.html',
  styleUrls: ['./upk.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UPKComponent implements OnInit {

  swal =  swalFunctions;
  // public
  public contentHeader: object;

  // row data
  public rows;

  public filteredRows;
  closeResult: string;

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

  // multi Purpose datatable Row data
  public multiPurposeRows = DatatableData;

  public ColumnMode = ColumnMode;

  active = 1; // Basic Navs


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

  // private
  private tempData = [];
  private multiPurposeTemp = [];
  tabloSecililer: any=[];
  secilisi: any;

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





seciliPlan(e){
console.log(e);

this.secilisi =e[0].mid;
this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=listealanlari&page_id=listealanlari&formid=250";




  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.columns=data;

  this.cdr.markForCheck();

  });


  this.SERVER_URL=localStorage.getItem('url') + "angular/dataservis.php?page_id=formbilgisi&formid=250&turu=sorgu";



  this.http.get<any>(this.SERVER_URL).subscribe(data => {
    this.formbilgileri=data;

    if (this.formbilgileri.length>0)
    {

     

      for(var i=0;i<this.formbilgileri.length;i++)
      {

        this.formtanimi=this.formbilgileri[i].formtanimi;
        this.sutunlar=this.formbilgileri[i].sutunlar;

//formdatası alınıyor

var sr = "https://www.jurimedya.com/maratonerpservices/angular/dataservis.php?page_id=formgetir&formid=250&sutunlar=yontemno,kalip_no,goz_adedi,makina_grup,pres_doluluk_orani,hiz_dk,dis_cap,ic_cap,yukseklik,boru_conta_adedi,durum,baglanti_sekli,hiz_dk_eski,hizdegistiren&blokindex=1213&recordid="+e[0].mid+"&kayitformid=254"+"&donem="+localStorage.getItem('donem');

this.formid=this.formbilgileri[i].form_index;



  this.http2.get<any>(sr).subscribe(data2 => {

    this.rows=data2;
    this.filteredRows=data2;

    
    this.cdr.markForCheck();


  });







      }

    }

  

  });



}

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(private modalService: NgbModal,private cdr :ChangeDetectorRef,private router: Router, private http: HttpClient,private route:ActivatedRoute,private http2: HttpClient,) {




  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------



  
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
