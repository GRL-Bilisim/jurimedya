import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewrecordrowComponent } from './newrecordrow.component';



const routes: Routes = [
  {
    path: '',
    component: NewrecordrowComponent,
    data: {
      title: 'New Record Row'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewrecordrowRoutingModule { }
