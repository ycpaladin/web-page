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
  constructor(public http: HttpClient) { }
  getPageData(queryParams: ListPageQueryParams): Observable<ListPageData> {
    return of<ListPageData>({
      info: {
        total: 3,
        page: 1,
        results: 10,
      },
      data: [
        { id: 1, title: 'kevin', birday: '1986-09-17 22:22:22' },
        { id: 2, title: 'lxy', birday: '1986-09-17 22:22:22' },
        { id: 3, title: 'ccw1', birday: '1986-09-17 22:22:22' },
        { id: 4, title: '2ccw', birday: '1986-09-17 22:22:22' },
        { id: 5, title: '3ccw', birday: '1986-09-17 22:22:22' },
        { id: 6, title: '4ccw', birday: '1986-09-17 22:22:22' },
        { id: 7, title: '5ccw', birday: '1986-09-17 22:22:22' },
        { id: 8, title: '6ccw', birday: '1986-09-17 22:22:22' },
        { id: 9, title: '7ccw', birday: '1986-09-17 22:22:22' },
        { id: 10, title: '8ccw', birday: '1986-09-17 22:22:22' },
        { id: 11, title: '9ccw', birday: '1986-09-17 22:22:22' },
        { id: 12, title: '10ccw', birday: '1986-09-17 22:22:22' },
        { id: 13, title: '11ccw', birday: '1986-09-17 22:22:22' },
        { id: 14, title: '12ccw', birday: '1986-09-17 22:22:22' },
        { id: 15, title: '13ccw', birday: '1986-09-17 22:22:22' },
        { id: 16, title: '14ccw', birday: '1986-09-17 22:22:22' },
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
