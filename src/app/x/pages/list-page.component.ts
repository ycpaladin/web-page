import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  ReplaySubject,
  combineLatest,
  of,
} from 'rxjs';
import { mergeMap, shareReplay, tap } from 'rxjs/operators';
import { DataTableEditorComponent } from '../components/editor/data-table-editor.component';
import { ListPageService } from '../core/services/list-page.service';
import {
  ListPageQueryParams,
  ResponsePageData,
} from '../interfaces/data_table';
import { IEditView } from '../interfaces/edit_view';
import { ListPageConfigData } from '../interfaces/list_page';
import { PageDataService } from '../interfaces/page';

@Component({
  template: `
    <app-editable-layout>
      <app-data-table
        [cyTableData]="cyData$ | async"
        [cyTableConfig]="cyConfig$ | async"
      >
      </app-data-table>
    </app-editable-layout>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ListPageService,
    { provide: IEditView, useExisting: forwardRef(() => ListPageComponent) },
    { provide: PageDataService, useExisting: ListPageService },
  ],
})
export class ListPageComponent
  implements OnInit, IEditView<ListPageConfigData> {
  cyData$!: Observable<ResponsePageData>;
  refresh$ = new ReplaySubject<string>(1);
  cyConfig$!: Observable<ListPageConfigData>;

  cyEditContent = DataTableEditorComponent;

  queryParams$ = new BehaviorSubject<ListPageQueryParams>({
    page: 1,
    results: 10,
  });

  constructor(public service: ListPageService) {
    this.cyConfig$ = combineLatest([of('1'), this.refresh$]).pipe(
      tap((d) => console.log('===>', d)),
      mergeMap(([id]) => this.service.getPageConfigData(id)),
      shareReplay(1)
    );
    this.cyData$ = this.queryParams$.pipe(
      mergeMap((queryParams) => this.service.getPageData(queryParams)),
      shareReplay(1)
    );
    this.refreshPage();
  }

  refreshPage(): void {
    this.refresh$.next();
  }

  ngOnInit(): void {}
}
