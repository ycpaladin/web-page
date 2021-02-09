import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PageDataServiceBase } from './base/page-data-base';
import {
  IDataItem,
  IDataTableColumn,
  ListPageQueryParams,
  ResponsePageData,
} from './interfaces/data-table';

@Injectable()
export class VisualizationService extends PageDataServiceBase<
  ListPageQueryParams,
  ResponsePageData,
  IDataTableColumn[]
> {
  editMode$ = new BehaviorSubject<boolean>(false);

  constructor(public injector: Injector, public http: HttpClient) {
    super(injector, http);
  }

  getData(params: ListPageQueryParams): Observable<ResponsePageData> {
    const result$ = of<ResponsePageData>({
      info: { page: 1, results: 10, total: 4 },
      data: [
        { id: 1, name: 'kevin', date: new Date() },
        { id: 2, name: 'kevin1', date: new Date() },
        { id: 3, name: 'kevin2', date: new Date() },
        { id: 4, name: 'kevin3', date: new Date() },
      ],
      result: 'ok',
    });

    return result$;
  }

  switchEditMode(): void {
    this.editMode$.next(true);
  }

  switchViewMode(): void {
    this.editMode$.next(false);
  }

  save(): void {}
}
