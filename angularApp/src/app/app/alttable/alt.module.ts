import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AltRoutingModule } from "./alt-routing.module";
import { ScrollbarHelper,DimensionsHelper, ColumnChangesService } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AltComponent } from './alt.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CrudModalComponent } from './crud-modal/crud-modal.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        AltRoutingModule,
        NgxDatatableModule,
        PipeModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
    providers:[
      ScrollbarHelper,DimensionsHelper, ColumnChangesService
    ],
    declarations: [
      AltComponent,
      CrudModalComponent
    ],
    exports: [AltComponent]

})
export class AltModule { }
