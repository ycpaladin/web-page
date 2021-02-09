import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagePropertiesFormBase } from '../base/properties-form-base';
import { IDataTableColumn } from '../interfaces/data-table';

@Injectable()
export class ListPagePropertiesService implements PagePropertiesFormBase<IDataTableColumn[]> {

  constructor(private fb: FormBuilder) { }
  createForm(data: IDataTableColumn[]): FormGroup {
    return this.fb.group({
      configs: this.fb.array(data.map(({ title, fieldName = '', fieldType = 'any'}) => (this.fb.group({
        title: [title, [Validators.required]],
        fieldName: [fieldName, [Validators.required]],
        fieldType: [fieldType, [Validators.required]],
      }))))
    });
  }
}
