import { FormGroup, FormBuilder } from '@angular/forms';
import { DataTableColumn } from './data_table';

export interface IDataItem {
  id: number;
  [key: string]: any;
}

export type IData = (
  data: IDataItem,
  index: number,
  array: IDataItem[]
) => string;

export type FieldType = 'text' | 'number' | 'date' | 'url' | 'any';

export interface IDataTableColumn<TField = any> {
  id: string;
  title: string;
  fieldName: string | IData;
  fieldType: FieldType;
  defaultValue: string;
  metadata: TField;
}

export interface TextField {
  format: boolean;
}

export type TextColumn = IDataTableColumn<TextField>;

export interface DateField {
  format: string;
}

export type DateColumn = IDataTableColumn<DateField>;

export interface UrlField {}

export type UrlColumn = IDataTableColumn<UrlField>;

export interface NumberField {
  max: number;
  min: number;
  precision: number;
  format: string;
}

export type NumberColumn = IDataTableColumn<NumberField>;

export type FieldFormCreater<T> = (
  data: T
) => (fb: FormBuilder) => FormGroup;

export interface IFieldMetadata<T = any> {
  fieldType: FieldType;
  displayName: string;
  formCreater: FieldFormCreater<T>;
}
