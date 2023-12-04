import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ScrollbarHelper,DimensionsHelper, ColumnChangesService,NgxDatatableModule } from '@swimlane/ngx-datatable';
import { urunagaciRoutingModule } from "./urunagaci-routing.module";

import { urunagaciComponent } from './urunagaci.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        urunagaciRoutingModule,
        NgxDatatableModule,
        PipeModule,
        DragulaModule.forRoot(),
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ],
    providers:[
      ScrollbarHelper,DimensionsHelper, ColumnChangesService
    ],
    declarations: [
      urunagaciComponent,
    ]
})
export class urunagaciModule { }
