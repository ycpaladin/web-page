import { Type } from '@angular/core';
import { IFieldMetadata } from '../../interfaces/field';
import { CY_FIEID_FORM_CREATER, CY_FIELD_REGISTRY, CY_FIELD_TYPE } from '../consts/field';

export const FieldDefinition = <T>(metadata: IFieldMetadata<T>) => (
  constructor: Type<any>
) => {
  const { fieldType, displayName, formCreater } = metadata;
  if (CY_FIELD_REGISTRY.has(fieldType)) {
    throw Error(`${fieldType} is exist!`);
  }
  CY_FIELD_TYPE.set(fieldType, displayName);
  CY_FIELD_REGISTRY.set(fieldType, constructor);
  CY_FIEID_FORM_CREATER.set(fieldType, formCreater);
};
