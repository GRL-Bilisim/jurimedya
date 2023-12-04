import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DesignRoutingModule } from "./design-routing.module";

import { DesignComponent } from './design.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        DesignRoutingModule,
        NgxDatatableModule,
        PipeModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ],
    declarations: [
      DesignComponent
    ]
})
export class DesignModule { }
