import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ganttchartRoutingModule } from "./ganttchart-routing.module";

import { ganttchartComponent } from "./ganttchart.component";
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
    imports: [
        CommonModule,
        Ng2SearchPipeModule,
        ganttchartRoutingModule,
        DragulaModule.forRoot(),
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        NgbModule,
        HighchartsChartModule
    ],
    declarations: [
        ganttchartComponent,
        CrudModalComponent
    ]
})
export class ganttchartModule { }
