import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsGucuBoardComponent } from './isgucuboard.component';

const routes: Routes = [
  {
    path: '',
     component: IsGucuBoardComponent,
    data: {
      title: 'İş Gücü'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsGucuBoardRoutingModule { }