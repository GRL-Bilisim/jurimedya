import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditrecordrowComponent } from './editrecordrow.component';



const routes: Routes = [
  {
    path: '',
    component: EditrecordrowComponent,
    data: {
      title: 'Edit Record Form'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditrecordrowRoutingModule { }
