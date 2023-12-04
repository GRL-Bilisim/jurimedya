import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewrecordformComponent } from './newrecordform.component';



const routes: Routes = [
  {
    path: '',
    component: NewrecordformComponent,
    data: {
      title: 'New Record Form'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewrecordformRoutingModule { }
