import { NgModule } from '@angular/core';
import { DizilerComponent } from './diziler/diziler.component';
import { SharedModule } from 'app/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { UserPagesRoutingModule } from './user-pages-routing.module';
import { OyuncularComponent } from './oyuncular/oyuncular.component';
import { SetEkibiComponent } from './set-ekibi/set-ekibi.component';
import { TakimlarComponent } from './takimlar/takimlar.component';
import { ProfileComponent } from './profile/profile.component';
import { DiziDetaylariComponent } from './dizi-detaylari/dizi-detaylari.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DizilerComponent,
    OyuncularComponent,
    SetEkibiComponent,
    TakimlarComponent,
    DiziDetaylariComponent,
    ProfileComponent,
    AccountSettingsComponent
  ],
  imports: [
    SharedModule,
    UserPagesRoutingModule,
  ]
})
export class UserPagesModule { }
