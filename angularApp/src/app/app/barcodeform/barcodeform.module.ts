import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BarcodeFormRoutingModule } from "./barcodeform-routing.module";
import { ZXingScannerModule } from '../../../node_modules/@zxing/ngx-scanner';

import { BarcodeFormComponent } from './barcodeform.component';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ZXingScannerModule,
        BarcodeFormRoutingModule,
        NgxDatatableModule,
        PipeModule,
        NgSelectModule, FormsModule
    ],
    declarations: [
      BarcodeFormComponent
    ]
})
export class BarcodeFormModule { }
