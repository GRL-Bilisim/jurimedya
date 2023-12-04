import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarcodeFormComponent } from './barcodeform.component';



const routes: Routes = [
  {
    path: '',
    component: BarcodeFormComponent,
    data: {
      title: 'New Record Row'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodeFormRoutingModule { }
