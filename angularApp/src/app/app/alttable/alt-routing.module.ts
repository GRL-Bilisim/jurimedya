import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltComponent } from './alt.component';



const routes: Routes = [
  {
    path: '',
    component: AltComponent,
    data: {
      title: 'DataTable'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltRoutingModule { }
