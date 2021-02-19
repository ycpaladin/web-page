import { DataTableColumn } from '../../interfaces/data_table';
import { DateColumn, FieldType, TextColumn } from '../../interfaces/field';

const fieldBases = {
  id: '',
  title: '',
  defaultValue: '',
};

export const DEFAULT_TEXT_FIELD: TextColumn = {
  ...fieldBases,
  fieldName: '',
  fieldType: 'text',
  metadata: {
    format: false,
  },
};

export const DEFAULT_DATE_FIELD: DateColumn = {
  ...fieldBases,
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
