import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newrecord',
  templateUrl: './newrecord.component.html',
  styleUrls: ['./newrecord.component.scss']
})
export class LayoutComponent implements OnInit {

  formtanimi:any;
  constructor() { }

  ngOnInit() {
    this.formtanimi=localStorage.getItem('formtanimi');
  }

}
