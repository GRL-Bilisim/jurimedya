import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditrecordformComponent } from './editrecordform.component';



const routes: Routes = [
  {
    path: '',
    component: EditrecordformComponent,
    data: {
      title: 'Edit Record Form'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditrecordformRoutingModule { }
