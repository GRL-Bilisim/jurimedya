import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { polivalansComponent } from './polivalans.component';

const routes: Routes = [
  {
    path: '',
     component: polivalansComponent,
    data: {
      title: 'polivalans'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class polivalansRoutingModule { }