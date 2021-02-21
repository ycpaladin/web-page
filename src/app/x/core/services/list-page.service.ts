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
        { id: 3, title: 'ccw1' },
        { id: 4, title: '2ccw' },
        { id: 5, title: '3ccw' },
        { id: 6, title: '4ccw' },
        { id: 7, title: '5ccw' },
        { id: 8, title: '6ccw' },
        { id: 9, title: '7ccw' },
        { id: 10, title: '8ccw' },
        { id: 11, title: '9ccw' },
        { id: 12, title: '10ccw' },
        { id: 13, title: '11ccw' },
        { id: 14, title: '12ccw' },
        { id: 15, title: '13ccw' },
        { id: 16, title: '14ccw' },
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
