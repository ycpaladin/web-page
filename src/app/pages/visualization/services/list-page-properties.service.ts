import { FieldType } from './../interfaces/data-table';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBase } from '../base/form-base';
import { fieldFormFactory } from '../field-type/field-editor-factory';
import { DataTableColumn } from '../interfaces/data-table';
import { DEFAULT_FIELD } from '../consts/default-field';

@Injectable()
export class ListPagePropertiesService implements FormBase<DataTableColumn[]> {
  constructor(private fb: FormBuilder) {}
  createForm(data: DataTableColumn[]): FormGroup {
    return this.fb.group({
      configs: this.fb.array(
        data.map((conf) =>
          this.fb.group({
            title: [conf.title || '', [Validators.required]],
            fieldName: [conf.fieldName || '', [Validators.required]],
            fieldType: [conf.fieldType || 'text', [Validators.required]],
            config: fieldFormFactory(conf, this.fb),
          })
        )
      ),
    });
  }

  createColumn(fieldType: FieldType): FormGroup {
    const column = DEFAULT_FIELD[fieldType];
    return this.fb.group({
      title: [column?.title || '', [Validators.required]],
      fieldName: [column?.fieldName || '', [Validators.required]],
      fieldType: [fieldType || 'text', [Validators.required]],
      config: fieldFormFactory(column as any, this.fb),
    });
  }
}
