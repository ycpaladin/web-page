import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListPageQueryParams } from '../../interfaces/data_table';
import { ListPageData, ListPageConfigData } from '../../interfaces/list_page';
import { PageDataService } from '../../interfaces/page';

@Injectable()
export class ListPageService
  implements
    PageDataService<ListPageQueryParams, ListPageData, ListPageConfigData> {
  constructor(public http: HttpClient) {}
  getPageData(queryParams: ListPageQueryParams): Observable<ListPageData> {
    return of<ListPageData>({
      info: {
        total: 3,
        page: 1,
        results: 10,
      },
      data: [
        { id: 1, title: 'kevin' },
        { id: 2, title: 'lxy' },
        { id: 1, title: 'ccw' },
      ],
      result: 'ok',
    });
  }
  getPageConfigData(id: string): Observable<ListPageConfigData> {
    const config = sessionStorage.getItem(id);
    if (config) {
      return of(JSON.parse(config));
    }
    return of({
      id,
      title: 'xxxx',
      fields: [],
    });
  }
  savePageConfigData(data: ListPageConfigData): Observable<ListPageConfigData> {
    sessionStorage.setItem(data.id, JSON.stringify(data));
    return of(data);
  }
}
