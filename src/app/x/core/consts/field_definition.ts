import { Validators, FormBuilder } from '@angular/forms';
import { FieldBase, IFieldMetadata, IndexColumn, TextColumn } from './../../interfaces/field';
import { DEFAULT_TEXT_FIELD, DEFAULT_INDEX_FIELD } from './default_field';



const fieldFormCreater = (fb: FormBuilder, data: FieldBase) => {
  const {
    title,
    fieldName,
    defaultValue,
  } = data;
  return (formFields: { [key: string]: any }) => {
    const formGroup = fb.group({
      title: [title || '', [Validators.required]],
      fieldName: [fieldName || '', [Validators.required]],
      defaultValue: [defaultValue],
      ...formFields
    });
    return formGroup;
  };
};

export const TEXT_FIELD_METADATA: IFieldMetadata<TextColumn> = {
  fieldType: 'text',
  displayName: '文本',
  formCreater: (data) => (fb) => {
    const {
      fieldType,
      metadata: { format },
    } = data || DEFAULT_TEXT_FIELD;
    return fieldFormCreater(fb, data)(
      {
        fieldType: [fieldType],
        metadata: fb.group({
          format: [format],
        }),
      }
    );
  },
  render: (data, config) => {
    return data[config.fieldName];
  }
};



export const INDEX_FIELD_METADATA: IFieldMetadata<IndexColumn> = {
  fieldType: 'index',
  displayName: '序号',
  formCreater: (data) => (fb) => {
    const {
      fieldType,
      metadata: { count },
    } = data || DEFAULT_INDEX_FIELD;
    return fieldFormCreater(fb, data)(
      {
        fieldType: [fieldType],
        fieldName: [{ value: '', disabled: true }],
        defaultValue: [{ value: '', disabled: true }],
        metadata: fb.group({
          count: [count],
        }),
      }
    );
  },
  render: (data, config, index) => {
    const { metadata: { count } } = config;
    if (count === 'restart') {
      return (index + 1) + '';
    } else {
      return ''; // TODO 需要pageIndex
    }
  }
};
