import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ScrollbarHelper,DimensionsHelper, ColumnChangesService,NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditrecordformRoutingModule } from "./editrecordform-routing.module";

import { EditrecordformComponent } from './editrecordform.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { DragulaModule } from 'ng2-dragula';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        EditrecordformRoutingModule,
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
      EditrecordformComponent,
      CrudModalComponent
    ]
})
export class EditrecordformModule { }
