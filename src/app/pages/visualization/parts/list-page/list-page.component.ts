import { VisualizationService } from './../../visualization.service';
import { Component, forwardRef, OnInit, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  DataTableColumn,
  ListPageQueryParams,
  ResponsePageData,
} from '../../interfaces/data-table';
import { mergeMap, map, shareReplay } from 'rxjs/operators';
import { DataTableEditorComponent } from '../../editor/data-table-editor/data-table-editor.component';
import { IEditView } from '../../interfaces/visualization';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less'],
  providers: [
    { provide: IEditView, useExisting: forwardRef(() => ListPageComponent) },
  ],
})
export class ListPageComponent implements OnInit, IEditView<DataTableColumn[]> {
  data$!: Observable<ResponsePageData>;
  config$: Observable<DataTableColumn[]>;

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
    this.config$ = this.service.getPageConfig().pipe(
      shareReplay(1)
    );
  }

  ngOnInit(): void { }
}
