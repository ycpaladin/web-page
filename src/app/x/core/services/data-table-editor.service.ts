import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataTableColumn } from '../../interfaces/data_table';
import { FieldType } from '../../interfaces/field';
import { ListPageConfigData } from '../../interfaces/list_page';
import { FormBase } from '../base/form-base';
import { createFieldFormFunc } from '../consts/field';

@Injectable()
export class DataTableEditorService implements FormBase<ListPageConfigData> {
  constructor(private fb: FormBuilder) {}
  createForm(data: ListPageConfigData): FormGroup {
    const { id, title, fields } = data;
    return this.fb.group({
      id: [id],
      title: [title],
      fields: this.fb.array(fields.map((conf) => this.createColumn(conf))),
    });
  }

  createColumn(fieldType: FieldType | DataTableColumn): FormGroup {
    const func = createFieldFormFunc(fieldType);
    const formGroup = func(this.fb);
    return formGroup;
  }
}
