import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NewrecordrowRoutingModule } from "./newrecordrow-routing.module";

import { NewrecordrowComponent } from './newrecordrow.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        NewrecordrowRoutingModule,
        NgxDatatableModule,
        PipeModule,
        NgSelectModule,
        Ng2SearchPipeModule,
        FormsModule
    ],
    declarations: [
      NewrecordrowComponent
    ]
})
export class NewrecordrowModule { }
