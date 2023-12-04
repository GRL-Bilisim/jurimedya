import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ScrollbarHelper,DimensionsHelper, ColumnChangesService,NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditrecordformRoutingModule } from "./editrecordform-routing.module";
import { SwiperComponent } from './swiper/swiper.component';
import { EditrecordformComponent } from './editrecordform.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        SwiperModule,
        EditrecordformRoutingModule,
        NgxDatatableModule,
        PipeModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ],
    providers:[
      ScrollbarHelper,DimensionsHelper, ColumnChangesService
    ],
    declarations: [
      EditrecordformComponent,
      CrudModalComponent,SwiperComponent
    ]
})
export class EditrecordformModule { }
