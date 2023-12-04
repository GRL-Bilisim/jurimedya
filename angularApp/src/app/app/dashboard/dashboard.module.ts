import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { ColumnChangesService, DimensionsHelper, NgxDatatableModule, ScrollbarHelper } from '@swimlane/ngx-datatable';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgSelectModule,
        NgxDatatableModule,
        NgbModule,
        Ng2SearchPipeModule,
        MatchHeightModule,
        NgApexchartsModule,
        AngularResizedEventModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        Dashboard1Component,
        Dashboard2Component,
        CrudModalComponent
    ],
    providers: [ScrollbarHelper,DimensionsHelper, ColumnChangesService],
})
export class DashboardModule { }
