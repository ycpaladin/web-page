import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzRadioModule } from 'ng-zorro-antd/radio';
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

import { TextColumnComponent } from './components/column/forms/text-column.component';
import { IndexColumnComponent } from './components/column/forms/index-column.component';
import { BaseFieldComponent } from './components/column/base-column.component';
import { DataTableComponent } from './components/data-table.component';
import { DataTableEditorComponent } from './components/editor/data-table-editor.component';
import { PartWrapComponent } from './components/part-wrap.component';
import { ListPageComponent } from './pages/list-page.component';
import { FieldComponent } from './components/column/column.component';
import { EditableLayoutComponent } from './components/layout/editable-layout.component';
import { TextFieldRenderComponent } from './components/column/render/text-column-render.component';
import { IndexFieldRenderComponent } from './components/column/render/index-column-render.component';
import { FieldRenderPipe } from './core/pipes/field-render.pipe';
import { FieldRenderInjectorPipe } from './core/pipes/field-render-injector.pipe';
import { DateColumnComponent } from './components/column/forms/date-column.component';
import { DateColumnRenderComponent } from './components/column/render/date-column-render.component';

@NgModule({
  declarations: [
    TextColumnComponent,
    BaseFieldComponent,
    DataTableComponent,
    PartWrapComponent,
    DataTableEditorComponent,
    ListPageComponent,
    FieldComponent,
    EditableLayoutComponent,
    IndexColumnComponent,
    TextFieldRenderComponent,
    IndexFieldRenderComponent,
    FieldRenderPipe,
    FieldRenderInjectorPipe,
    DateColumnComponent,
    DateColumnRenderComponent,
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
    NzRadioModule,
    NzDropDownModule,
  ],
  exports: [ListPageComponent],
})
export class XModule {}
