import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DizilerComponent } from './diziler/diziler.component';
import { OyuncularComponent } from './oyuncular/oyuncular.component';
import { SetEkibiComponent } from './set-ekibi/set-ekibi.component';
import { TakimlarComponent } from './takimlar/takimlar.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DiziDetaylariComponent } from './dizi-detaylari/dizi-detaylari.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'diziler',
        component: DizilerComponent,
      },
      {
        path: 'dizi-detaylari',
        component: DiziDetaylariComponent,
      },
      {
        path: 'oyuncular',
        component: OyuncularComponent,
      },
      {
        path: 'set-ekibi',
        component: SetEkibiComponent,
      },
      {
        path: 'takimlar',
        component: TakimlarComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
      },
      {
        path: '',
        redirectTo: 'diziler',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'pages/error'
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
