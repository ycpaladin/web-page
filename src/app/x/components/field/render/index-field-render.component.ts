import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CY_TABLE_FIELD_RENDER_DATA } from '../../../core/consts/token';
import {
  IFieldRender,
  IFieldRenderInjectData,
  IndexColumn,
} from '../../../interfaces/field';
import { DataTableComponent } from '../../data-table.component';

@Component({
  template: ` {{ value$ | async }} `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexFieldRenderComponent
  implements OnInit, IFieldRender<IndexColumn> {
  value$ = new ReplaySubject<number>(1);

  constructor(
    @Inject(CY_TABLE_FIELD_RENDER_DATA)
    public injectData: IFieldRenderInjectData<IndexColumn>,
    public table: DataTableComponent
  ) {
    const {
      config: {
        metadata: { count },
      },
      index,
    } = injectData;
    if (count === 'restart') {
      this.value$.next(index + 1);
    } else {
      // combineLatest([
      //   this.table.cyPageIndexChange,
      //   this.table.cyPageSizeChange
      // ]).subscribe(([pageIndex, pageSize]) => {
      //   this.value$.next((pageIndex * pageSize) + index + 1);
      // });
      // this.table.cyPageIndexChange.subscribe(console.log);
      const { cyPageIndex, cyPageSize } = table;
      this.value$.next((cyPageIndex - 1) * cyPageSize + index + 1);
    }
  }

  ngOnInit(): void {}
}
