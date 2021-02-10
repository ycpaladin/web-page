import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  TextField,
  DateField,
  UrlField,
  NumberField,
  DataTableColumn,
} from './../interfaces/data-table';
import { DEFAULT_TEXT_FIELD, DEFAULT_DATE_FIELD } from '../consts/default-field';

const createTextFieldForm = (field: TextField = DEFAULT_TEXT_FIELD.metadata) => (
  fb: FormBuilder
): FormGroup => {
  const { format } = field;
  return fb.group({
    format: [format],
  });
};

const createDateFieldForm = (field: DateField = DEFAULT_DATE_FIELD.metadata) => (
  fb: FormBuilder
): FormGroup => {
  const { format } = field;
  return fb.group({
    format: [format, [Validators.required]],
  });
};

const createUrlFieldForm = (field: UrlField) => (
  fb: FormBuilder
): FormGroup => {
  return fb.group({});
};

const createNumberFieldForm = (field: NumberField) => (
  fb: FormBuilder
): FormGroup => {
  return fb.group({});
};

export const fieldFormFactory = (
  config: DataTableColumn,
  fb: FormBuilder
): FormGroup => {
  const { fieldType, metadata } = config;
  let formCreater!: (fb: FormBuilder) => FormGroup;
  switch (fieldType) {
    case 'number':
      formCreater = createNumberFieldForm(metadata as NumberField);
      break;
    case 'url':
      formCreater = createUrlFieldForm(metadata as UrlField);
      break;
    case 'date':
      formCreater = createDateFieldForm(metadata as DateField);
      break;
    case 'any':
    case 'text':
    case undefined:
    default:
      formCreater = createTextFieldForm(metadata as TextField);
      break;
  }
  return formCreater(fb);
};
