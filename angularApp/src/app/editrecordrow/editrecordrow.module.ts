import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditrecordrowRoutingModule } from "./editrecordrow-routing.module";

import { EditrecordrowComponent } from './editrecordrow.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        EditrecordrowRoutingModule,
        NgxDatatableModule,
        PipeModule,
        NgSelectModule, FormsModule
    ],
    declarations: [
      EditrecordrowComponent
    ]
})
export class EditrecordrowModule { }
