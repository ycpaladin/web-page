import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VisualizationComponent } from './visualization.component';
import { Part1Component } from './parts/part1/part1.component';
import { Part2Component } from './parts/part2/part2.component';
import { PartWrapComponent } from './parts/part-wrap/part-wrap.component';
import { DataTableComponent } from './parts/data-table/data-table.component';
import { CellDataPipe } from './pipes/cell-data.pipe';
import { DataTableEditorComponent } from './parts/data-table-editor/data-table-editor.component';
import { ListPageComponent } from './parts/list-page/list-page.component';

@NgModule({
  declarations: [
    VisualizationComponent,
    Part1Component,
    Part2Component,
    PartWrapComponent,
    DataTableComponent,
    CellDataPipe,
    DataTableEditorComponent,
    ListPageComponent,
  ],
  imports: [
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzGridModule,
    NzDropDownModule,
    NzIconModule,
    NzTableModule,
    NzModalModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    VisualizationRoutingModule,
  ],
})
export class VisualizationModule {}
