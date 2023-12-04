import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KBCategory } from '../knowledge-base.model';
import { KnowledgeBaseService } from '../knowledge-base.service';

@Component({
  selector: 'app-knowledge-categories',
  templateUrl: './knowledge-categories.component.html',
  styleUrls: ['./knowledge-categories.component.scss']
})
export class KnowledgeCategoriesComponent  {
  kbCategories: KBCategory[] = [];
  searchQuery: string = '';
  page = 1;
  isShowCategory = false;
  constructor(private router: Router, kbService: KnowledgeBaseService) {

var retrievedObject = localStorage.getItem('level2submenu');

    this.kbCategories = JSON.parse(retrievedObject);
  }

  viewQuestions(category: any) {
    console.log(category);
    this.router.navigate([category]);
  }

}
