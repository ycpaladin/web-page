import { Pipe, PipeTransform } from '@angular/core';
import { DataTableColumn } from '../../interfaces/data_table';
import { CY_FIELD_RENDER } from '../consts/field';

@Pipe({
  name: 'fieldRender'
})
export class FieldRenderPipe implements PipeTransform {

  transform(config: DataTableColumn): unknown {
    const renderComponent = CY_FIELD_RENDER.get(config.fieldType);
    return renderComponent;
  }

}
