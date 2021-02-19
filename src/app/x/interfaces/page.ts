import { Observable } from 'rxjs';

export abstract class PageDataService<
  TQueryParams = any,
  TData = any,
  TConfigData = any
> {
  abstract getPageData(queryParams: TQueryParams): Observable<TData>;

  abstract getPageConfigData(id: string): Observable<TConfigData>;

  abstract savePageConfigData(data: TConfigData): Observable<TConfigData>;
}
