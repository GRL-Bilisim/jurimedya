import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
  resourceTimeGridPlugin
])


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

import { HighchartsChartModule } from "highcharts-angular";
import { GoogleChartsModule } from 'angular-google-charts';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ScrollbarHelper,DimensionsHelper, ColumnChangesService } from '@swimlane/ngx-datatable';
@NgModule({
    imports: [
        CommonModule,
        GoogleChartsModule,
        DashboardRoutingModule,
        ChartistModule,
        NgSelectModule,
        NgbModule,
        HighchartsChartModule,
        Ng2SearchPipeModule,
        NgxDatatableModule,
        MatchHeightModule,
        FullCalendarModule,
        NgApexchartsModule,
        AngularResizedEventModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        Dashboard1Component,
        Dashboard2Component,
        CrudModalComponent,
    ],
    providers: [     ScrollbarHelper,DimensionsHelper, ColumnChangesService],
})
export class DashboardModule { }
