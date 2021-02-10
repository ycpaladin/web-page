import { FieldType, DataTableColumn } from './../interfaces/data-table';
import { TextColumn, DateColumn } from '../interfaces/data-table';

export const DEFAULT_TEXT_FIELD: TextColumn = {
  title: '',
  fieldName: '',
  fieldType: 'text',
  metadata: {
    format: false,
  },
};

export const DEFAULT_DATE_FIELD: DateColumn = {
  title: '',
  fieldName: '',
  fieldType: 'text',
  metadata: {
    format: 'yyyy-MM-dd HH:mm:ss',
  },
};

export const DEFAULT_FIELD: { [key in FieldType]?: DataTableColumn } = {
  text: DEFAULT_TEXT_FIELD,
  date: DEFAULT_DATE_FIELD,
};
