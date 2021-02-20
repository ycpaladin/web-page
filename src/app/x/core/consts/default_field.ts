import { DataTableColumn } from '../../interfaces/data_table';
import { DateColumn, FieldBase, FieldType, IndexColumn, NumberColumn, TextColumn, UrlColumn } from '../../interfaces/field';

const fieldBases: FieldBase = {
  id: '',
  title: '',
  fieldName: '',
  defaultValue: '',
  visable: true,
};

export const DEFAULT_TEXT_FIELD: TextColumn = {
  ...fieldBases,
  fieldType: 'text',
  metadata: {
    format: false,
  },
};

export const DEFAULT_DATE_FIELD: DateColumn = {
  ...fieldBases,
  fieldType: 'text',
  metadata: {
    format: 'yyyy-MM-dd HH:mm:ss',
  },
};

export const DEFAULT_INDEX_FIELD: IndexColumn = {
  ...fieldBases,
  fieldType: 'index',
  metadata: {
    count: 'restart'
  },
};

export const DEFAULT_NUMBER_FIELD: NumberColumn = {
  ...fieldBases,
  fieldType: 'number',
  metadata: {

  },
};

export const DEFAULT_URL_FIELD: UrlColumn = {
  ...fieldBases,
  fieldType: 'url',
  metadata: {

  },
};

export const DEFAULT_FIELD: { [key in FieldType]: DataTableColumn } = {
  text: DEFAULT_TEXT_FIELD,
  date: DEFAULT_DATE_FIELD,
  index: DEFAULT_INDEX_FIELD,
  number: DEFAULT_NUMBER_FIELD,
  url: DEFAULT_URL_FIELD
};
