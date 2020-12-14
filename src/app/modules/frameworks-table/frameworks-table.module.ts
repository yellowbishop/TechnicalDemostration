import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FrameworksTableRoutingModule } from './frameworks-table-routins.module';
import { DocumentationComponent } from './components/documentation/documentation.component';



@NgModule({
  declarations: [TableComponent, DocumentationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FrameworksTableRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FrameworksTableModule { }
