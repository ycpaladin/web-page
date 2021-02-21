import { InjectionToken } from '@angular/core';
import { FieldType, IFieldRenderInjectData } from '../../interfaces/field';


export const CY_FIELD_TYPE_LIST = new InjectionToken<Map<FieldType, string>>('CY_FIELD_TYPE_LIST');


export const CY_TABLE_FIELD_RENDER_DATA = new InjectionToken<IFieldRenderInjectData>('CY_TABLE_FIELD_RENDER_DATA');
