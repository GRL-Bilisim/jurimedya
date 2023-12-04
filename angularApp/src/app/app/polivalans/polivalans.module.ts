import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { polivalansRoutingModule } from "./polivalans-routing.module";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { polivalansComponent } from "./polivalans.component";
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
    imports: [
        CommonModule,
        polivalansRoutingModule,
        DragulaModule.forRoot(),
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        NgbModule,
        Ng2SearchPipeModule
    ],
    declarations: [
        polivalansComponent,
        CrudModalComponent
    ]
})
export class polivalansModule { }
