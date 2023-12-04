import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NewrecordrowProsesRoutingModule } from "./newrecordrow_proses-routing.module";

import { NewrecordrowProsesComponent } from './newrecordrow_proses.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NewrecordrowProsesRoutingModule,
        NgxDatatableModule,
        PipeModule,
        NgSelectModule, FormsModule
    ],
    declarations: [
      NewrecordrowProsesComponent
    ]
})
export class NewrecordrowProsesModule { }
