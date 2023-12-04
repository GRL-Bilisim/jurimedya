import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IsGucuBoardRoutingModule } from "./isgucuboard-routing.module";

import { IsGucuBoardComponent } from "./isgucuboard.component";
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
    imports: [
        CommonModule,
        Ng2SearchPipeModule,
        IsGucuBoardRoutingModule,
        DragulaModule.forRoot(),
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [
        IsGucuBoardComponent,
        CrudModalComponent
    ]
})
export class IsGucuBoardModule { }
