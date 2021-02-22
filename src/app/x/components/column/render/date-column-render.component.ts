import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CY_TABLE_FIELD_RENDER_DATA } from 'src/app/x/core/consts/token';
import { DateColumn, IColumnRender, IFieldRenderInjectData } from 'src/app/x/interfaces/field';

@Component({
  template: `
    {{injectData.data[injectData.config.fieldName] | date: injectData.config.metadata.format}}
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateColumnRenderComponent implements OnInit, IColumnRender<DateColumn>  {

  constructor(
    @Inject(CY_TABLE_FIELD_RENDER_DATA)
    public injectData: IFieldRenderInjectData<DateColumn>,
  ) { }

  ngOnInit(): void {
  }

}
