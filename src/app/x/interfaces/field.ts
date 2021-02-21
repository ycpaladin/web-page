import { Type } from '@angular/core';
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

export type FieldType = 'index' | 'text' | 'number' | 'date' | 'url';

export interface FieldBase {
  id: string;
  title: string;
  fieldName: string;
  defaultValue: string;
  visable: boolean;
}


export interface IDataTableColumn<TField = any> extends FieldBase {
  fieldType: FieldType;
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

export interface UrlField { }

export type UrlColumn = IDataTableColumn<UrlField>;

export interface NumberField {
  max?: number;
  min?: number;
  precision?: number;
  format?: string;
}

export type NumberColumn = IDataTableColumn<NumberField>;

export interface IndexField {
  /**
   * 每一页索引的计数方式 restart:重新开始，accumulation:累加
   */
  count: 'restart' | 'accumulation';
}

export type IndexColumn = IDataTableColumn<IndexField>;


export type FieldFormCreater<T> = (
  data: T
) => (fb: FormBuilder) => FormGroup;

// export type FieldRender<T> = (data: IDataItem, config: T, index: number) => string;

export interface IFieldRenderInjectData<C = any> {
  data: IDataItem;
  config: C;
  array: IDataItem[];
  index: number;
}


export interface IFieldRender<T> {
  injectData: IFieldRenderInjectData<T>;
}


export interface IFieldMetadata<T = any> {
  fieldType: FieldType;
  displayName: string;
  formCreater: FieldFormCreater<T>;
  render: Type<IFieldRender<T>>;
}
