import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ganttchartComponent } from './ganttchart.component';

const routes: Routes = [
  {
    path: '',
     component: ganttchartComponent,
    data: {
      title: 'Gantt Chart'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ganttchartRoutingModule { }