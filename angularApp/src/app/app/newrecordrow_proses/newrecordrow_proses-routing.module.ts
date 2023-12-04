import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewrecordrowProsesComponent } from './newrecordrow_proses.component';
import { CommonModule } from "@angular/common";



const routes: Routes = [
  {
    path: '',
    component: NewrecordrowProsesComponent,
    data: {
      title: 'New Record Row'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class NewrecordrowProsesRoutingModule { }
  