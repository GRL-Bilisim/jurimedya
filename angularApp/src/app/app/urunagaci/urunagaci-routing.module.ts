import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { urunagaciComponent } from './urunagaci.component';



const routes: Routes = [
  {
    path: '',
    component: urunagaciComponent,
    data: {
      title: 'urun agaci'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class urunagaciRoutingModule { }
