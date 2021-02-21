import { Injector, Pipe, PipeTransform } from '@angular/core';
import { DataTableColumn } from '../../interfaces/data_table';
import { IDataItem } from '../../interfaces/field';
import { CY_TABLE_FIELD_RENDER_DATA } from '../consts/token';

@Pipe({
  name: 'fieldRenderInjector'
})
export class FieldRenderInjectorPipe implements PipeTransform {

  constructor(public injector: Injector) { }

  transform(config: DataTableColumn, data: IDataItem, index: number, array: IDataItem[]): unknown {
    return Injector.create({
      providers: [{
        provide: CY_TABLE_FIELD_RENDER_DATA,
        useValue: {
          config,
          data,
          index,
          array
        }
      }],
      parent: this.injector
    });
  }

}
