import { Pipe, PipeTransform } from '@angular/core';
import { IDataItem, IData } from './../interfaces/data-table';
import { isFunction } from 'lodash';

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
