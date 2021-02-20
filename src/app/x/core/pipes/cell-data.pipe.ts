import { Pipe, PipeTransform } from '@angular/core';
import { isFunction } from 'lodash';
import { DataTableColumn } from '../../interfaces/data_table';
import { IDataItem } from '../../interfaces/field';
import { CY_FIELD_RENDER } from '../consts/field';

@Pipe({
  name: 'cellData'
})
export class CellDataPipe implements PipeTransform {

  transform(data: IDataItem, columnConfig: DataTableColumn, index: number, array: IDataItem[]): string {
    // const {} =
    // if (isFunction(fieldNameOrFunc)) {
    //   return fieldNameOrFunc(data, index, array);
    // }
    // return data[fieldNameOrFunc];

    const { fieldType } = columnConfig;
    const render = CY_FIELD_RENDER.get(fieldType);
    if (isFunction(render)) {
      return render(data, columnConfig, index);
    }
    return '';
  }

}
