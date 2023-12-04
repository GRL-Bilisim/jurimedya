import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesRoutingModule } from "./listings-routing.module";
import { ScrollbarHelper,DimensionsHelper, ColumnChangesService } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DataTablesComponent } from './listings.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { UPKModule } from 'app/uretimplanlama/upk.module';
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { DragulaModule } from 'ng2-dragula';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AltModule } from 'app/alttable/alt.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        DataTablesRoutingModule,
        NgxDatatableModule,
        PipeModule,
        FormsModule,
        UPKModule,
        NgSelectModule,
        AltModule,
        NgbModule,
        DragulaModule.forRoot(),
        ReactiveFormsModule,
        Ng2SearchPipeModule

    ],
    providers:[
      ScrollbarHelper,DimensionsHelper, ColumnChangesService
    ],
    declarations: [
      DataTablesComponent,
      CrudModalComponent
        ]
})
export class DataTablesModule { }
