import { VisualizationService } from './../../visualization.service';
import { Component, forwardRef, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IDataItem,
  IDataTableColumn,
  ListPageQueryParams,
  ResponsePageData,
} from '../../interfaces/data-table';
import { mergeMap, map, shareReplay } from 'rxjs/operators';
import { DataTableEditorComponent } from '../data-table-editor/data-table-editor.component';
import { IEditView } from '../../interfaces/visualization';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less'],
  providers: [
    { provide: IEditView, useExisting: forwardRef(() => ListPageComponent) },
  ],
})
export class ListPageComponent implements OnInit, IEditView {
  data$!: Observable<ResponsePageData>;

  tableColumnConfig$!: Observable<IDataTableColumn>;

  editContent = DataTableEditorComponent;

  queryParams$ = new BehaviorSubject<ListPageQueryParams>({
    page: 1,
    results: 10,
  });

  constructor(public service: VisualizationService) {
    this.data$ = this.queryParams$.pipe(
      mergeMap((queryParams) => this.service.getData(queryParams)),
      shareReplay(1)
    );
    this.tableColumnConfig$ = this.service.getPageConfig();
  }

  ngOnInit(): void {}
}
