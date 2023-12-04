import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NewrecordformRoutingModule } from "./newrecordform-routing.module";

import { NewrecordformComponent } from './newrecordform.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        NewrecordformRoutingModule,
        NgxDatatableModule,
        PipeModule,
        NgSelectModule, 
        Ng2SearchPipeModule,
        FormsModule
    ],
    declarations: [
      NewrecordformComponent
    ]
})
export class NewrecordformModule { }
