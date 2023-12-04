import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-editrecord',
  templateUrl: './editrecord.component.html',
  styleUrls: ['./editrecord.component.scss']
})
export class LayoutComponent_edit implements OnInit {

  formtanimi:any;
  secilenform: string;
  SERVER_URL: string;
  formfields: any;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.formtanimi=localStorage.getItem('formtanimi');
    this.secilenform = localStorage.getItem('formid');

    this.SERVER_URL=localStorage.getItem('url') +"angular/dataservis.php?page_id=formalanlari&formid="+this.secilenform;



  this.http.get<any>(this.SERVER_URL).subscribe(data2 => {

    this.formfields=data2;
    console.log(this.formfields);

 


  });

 }

}
