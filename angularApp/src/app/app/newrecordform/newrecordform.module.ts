import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NewrecordformRoutingModule } from "./newrecordform-routing.module";

import { NewrecordformComponent } from './newrecordform.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule} from 'ng2-dragula';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CrudModalComponent } from './crud-modal/crud-modal.component';


@NgModule({
    imports: [
        CommonModule,
        NewrecordformRoutingModule,
        NgxDatatableModule,
        PipeModule,
        DragulaModule.forRoot(),
        NgSelectModule, 
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        FormsModule
    ],
    declarations: [
      NewrecordformComponent,
      CrudModalComponent
    ]
})
export class NewrecordformModule { }
