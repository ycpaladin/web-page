import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CY_TABLE_FIELD_RENDER_DATA } from 'src/app/x/core/consts/token';
import { IFieldRender, IFieldRenderInjectData, TextColumn } from 'src/app/x/interfaces/field';

@Component({
  template: `
    {{value$|async}}
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldRenderComponent implements OnInit, IFieldRender<TextColumn> {

  value$ = new ReplaySubject<string>(1);
  constructor(@Inject(CY_TABLE_FIELD_RENDER_DATA) public injectData: IFieldRenderInjectData<TextColumn>) {
    const { config: { metadata: {  }, fieldName }, data } = injectData;
    this.value$.next(data[fieldName]);
    // TODO... 如果有格式化的情况...
  }

  ngOnInit(): void {
  }

}
