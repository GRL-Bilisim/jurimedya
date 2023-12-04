import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ChatComponent } from './musterihesapkarti.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChatRoutingModule } from "./musterihesapkarti-routing.module";
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ScrollbarHelper,DimensionsHelper, ColumnChangesService } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { PipeModule } from 'app/shared/pipes/pipe.module';
import { UPKModule } from 'app/uretimplanlama/upk.module';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { DragulaModule } from 'ng2-dragula';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        ChatRoutingModule,
        NgbModule,
        NgxDatatableModule,
        FormsModule,
        PerfectScrollbarModule,
        PipeModule,
        SwiperModule
    ],
    declarations: [
        ChatComponent,
        CrudModalComponent,
        SwiperComponent
    ] 
})
export class ChatModule { }
     