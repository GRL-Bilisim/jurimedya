import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UPKRoutingModule } from "./upk-routing.module";
import { ScrollbarHelper,DimensionsHelper, ColumnChangesService } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UPKComponent } from './upk.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        UPKRoutingModule,
        NgxDatatableModule,
        PipeModule,
        FormsModule

    ],
    providers:[
      ScrollbarHelper,DimensionsHelper, ColumnChangesService
    ],
    declarations: [
      UPKComponent
    ],
    exports: [UPKComponent]

})
export class UPKModule { }
