import { Validators } from '@angular/forms';
import { IFieldMetadata, TextColumn } from './../../interfaces/field';
import { DEFAULT_TEXT_FIELD } from './default_field';

export const TEXT_FIELD_METADATA: IFieldMetadata<TextColumn> = {
  fieldType: 'text',
  displayName: '文本',
  formCreater: (data) => (fb) => {
    const {
      title,
      fieldName,
      fieldType,
      defaultValue,
      metadata: { format },
    } = data || DEFAULT_TEXT_FIELD;
    return fb.group({
      title: [title || '', [Validators.required]],
      fieldName: [fieldName || '', [Validators.required]],
      fieldType: [fieldType],
      defaultValue: [defaultValue],
      metadata: fb.group({
        format: [format],
      }),
    });
  },
};
