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

import { TextFieldComponent } from './components/field/forms/text-field.component';
import { IndexFieldComponent } from './components/field/forms/index-field.component';
import { BaseFieldComponent } from './components/field/base-field.component';
import { DataTableComponent } from './components/data-table.component';
import { DataTableEditorComponent } from './components/editor/data-table-editor.component';
import { PartWrapComponent } from './components/part-wrap.component';
import { ListPageComponent } from './pages/list-page.component';
import { FieldComponent } from './components/field/field.component';
import { EditableLayoutComponent } from './components/layout/editable-layout.component';
import { TextFieldRenderComponent } from './components/field/render/text-field-render.component';
import { IndexFieldRenderComponent } from './components/field/render/index-field-render.component';
import { FieldRenderPipe } from './core/pipes/field-render.pipe';
import { FieldRenderInjectorPipe } from './core/pipes/field-render-injector.pipe';

@NgModule({
  declarations: [
    TextFieldComponent,
    BaseFieldComponent,
    DataTableComponent,
    PartWrapComponent,
    DataTableEditorComponent,
    ListPageComponent,
    FieldComponent,
    EditableLayoutComponent,
    IndexFieldComponent,
    TextFieldRenderComponent,
    IndexFieldRenderComponent,
    FieldRenderPipe,
    FieldRenderInjectorPipe,
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
