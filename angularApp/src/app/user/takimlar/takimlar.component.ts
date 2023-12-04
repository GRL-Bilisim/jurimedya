import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-takimlar',
  templateUrl: './takimlar.component.html',
  styleUrls: ['./takimlar.component.scss']
})
export class TakimlarComponent implements OnInit {
  // @ViewChildren('searchableSelect') searchableSelects: QueryList<any>;
  // @ViewChildren('searchInput') searchInputs: QueryList<any>;
  // @ViewChildren('option') options: QueryList<any>;



  constructor() { }

  ngOnInit(): void {
  }

  // method1(event: any) {
  //   this.searchableSelects.forEach((select: any) => {
  //     const selectOptions = select.children.item(1);
  //     if (selectOptions.style.display === 'none' && !event.target.closest('.option')) {
  //       this.searchableSelects.forEach(function (select) {
  //         select.children.item(1).style.display = 'none';
  //       });
  //       select.firstElementChild.focus();
  //       selectOptions.style.display = 'block';
  //     }
  //   });
  // }
}
