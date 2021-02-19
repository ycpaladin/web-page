import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { TextFieldComponent } from './components/fields/text-field.component';
import { BaseFieldComponent } from './components/fields/base-field.component';
import { DataTableComponent } from './components/data-table.component';
import { DataTableEditorComponent } from './components/editor/data-table-editor.component';
import { PartWrapComponent } from './components/part-wrap.component';
import { ListPageComponent } from './pages/list-page.component';
import { FieldComponent } from './components/fields/field.component';
import { CellDataPipe } from './core/pipes/cell-data.pipe';
import { EditableLayoutComponent } from './components/layout/editable-layout.component';

@NgModule({
  declarations: [
    CellDataPipe,
    TextFieldComponent,
    BaseFieldComponent,
    DataTableComponent,
    PartWrapComponent,
    DataTableEditorComponent,
    ListPageComponent,
    FieldComponent,
    EditableLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzTableModule,
    NzModalModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule,
    NzDropDownModule,
  ],
  exports: [ListPageComponent],
})
export class XModule {}
