import { InjectionToken } from "@angular/core";
import { FieldType } from "../../interfaces/field";


export const CY_FIELD_TYPE_LIST = new InjectionToken<Map<FieldType, string>>('CY_FIELD_TYPE_LIST');
