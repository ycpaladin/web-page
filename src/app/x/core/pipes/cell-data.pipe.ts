import { Pipe, PipeTransform } from '@angular/core';
import { isFunction } from 'lodash';
import { IData, IDataItem } from '../../interfaces/field';

@Pipe({
  name: 'cellData'
})
export class CellDataPipe implements PipeTransform {

  transform(data: IDataItem, fieldNameOrFunc: string | IData, index: number, array: IDataItem[]): unknown {
    if (isFunction(fieldNameOrFunc)) {
      return fieldNameOrFunc(data, index, array);
    }
    return data[fieldNameOrFunc];
  }

}
