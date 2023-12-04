import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UPKComponent } from './upk.component';



const routes: Routes = [
  {
    path: '',
    component: UPKComponent,
    data: {
      title: 'DataTable'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UPKRoutingModule { }
