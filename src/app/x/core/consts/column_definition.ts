import { Validators, FormBuilder } from '@angular/forms';
import { DateColumn, FieldBase, IFieldMetadata, IndexColumn, TextColumn } from '../../interfaces/field';
import { DEFAULT_TEXT_FIELD, DEFAULT_INDEX_FIELD, DEFAULT_DATE_FIELD } from './default_column';
import { IndexFieldRenderComponent } from '../../components/column/render/index-column-render.component';
import { TextFieldRenderComponent } from '../../components/column/render/text-column-render.component';
import { DateColumnRenderComponent } from '../../components/column/render/date-column-render.component';



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
  render: TextFieldRenderComponent
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
  render: IndexFieldRenderComponent
};


export const DATE_COLUMN_METADATA: IFieldMetadata<DateColumn> = {
  fieldType: 'date',
  displayName: '日期',
  formCreater: (data) => (fb) => {
    const {
      fieldType, fieldName, defaultValue,
      metadata: { format },
    } = data || DEFAULT_DATE_FIELD;
    return fieldFormCreater(fb, data)(
      {
        fieldType: [fieldType],
        fieldName: [fieldName],
        defaultValue: [defaultValue],
        metadata: fb.group({
          format: [format],
        }),
      }
    );
  },
  render: DateColumnRenderComponent
};
