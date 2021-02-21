import { Validators, FormBuilder } from '@angular/forms';
import { FieldBase, IFieldMetadata, IndexColumn, TextColumn } from './../../interfaces/field';
import { DEFAULT_TEXT_FIELD, DEFAULT_INDEX_FIELD } from './default_field';
import { IndexFieldRenderComponent } from './../../components/field/render/index-field-render.component';
import { TextFieldRenderComponent } from './../../components/field/render/text-field-render.component';



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
