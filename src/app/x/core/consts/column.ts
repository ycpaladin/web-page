import { Type } from '@angular/core';
import { isString } from 'lodash';
import { DataTableColumn } from '../../interfaces/data_table';
import { FieldFormCreater, IColumnRender, FieldType } from '../../interfaces/field';
import { ColumnControlBase } from '../base/column_base';
import { DEFAULT_FIELD } from './default_column';

export const CY_FIELD_REGISTRY = new Map<FieldType, Type<ColumnControlBase>>();

export const CY_FIELD_TYPE = new Map<FieldType, string>();

export const CY_FIEID_FORM_CREATER = new Map<
  FieldType,
  FieldFormCreater<any>
>();

export const CY_FIELD_RENDER = new Map<FieldType, Type<IColumnRender<any>>>();

export const createFieldFormFunc = (fieldTypeOrFieldColumn: FieldType | DataTableColumn) => {
  const nextFieldType = isString(fieldTypeOrFieldColumn) ? fieldTypeOrFieldColumn : fieldTypeOrFieldColumn.fieldType;
  const func = CY_FIEID_FORM_CREATER.get(nextFieldType);
  if (!func) {
    throw Error(`fieldFormFunc is ${func}`);
  }
  const def = isString(fieldTypeOrFieldColumn) ? DEFAULT_FIELD[nextFieldType] : fieldTypeOrFieldColumn;
  return func(def);
};
