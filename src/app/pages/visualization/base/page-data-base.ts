import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { indexOf, isFunction } from 'lodash';
import { dealData } from '../utils/func';
import { IDataItem, IDataTableColumn, ResponseData } from './../interfaces/data-table';

export abstract class PageDataServiceBase<
  TDataParams,
  TDataReturn,
  TDataConfig
> {
  constructor(public injector: Injector, public http: HttpClient) {}

  getPageConfig(): Observable<TDataConfig> {
    const { data } = this.injector.get(ActivatedRoute);
    return data.pipe(
      map((d) => d.pageId),
      mergeMap((pageId) => {
        const localConfig = sessionStorage.getItem(pageId);
        if (localConfig) {
          return of<TDataConfig>(
            JSON.parse(localConfig, (key, value) => {
              if (
                typeof value === 'string' &&
                (value.indexOf('function ') === 0 || value.indexOf('=>') !== -1)
              ) {
                const functionTemplate = `(${value})`;
                // tslint:disable-next-line: no-eval
                return eval(functionTemplate);
              }
              return value;
            }) as TDataConfig
          );
        }
        //  this.http
        //   .get<ResponseData<TDataConfig>>('', {
        //     params: {
        //       pageId,
        //     },
        //   })
        return of<ResponseData<TDataConfig>>({
          data: [
            { title: 'id', fieldName: 'id' },
            {
              title: '用户名',
              fieldName: (item: IDataItem, index: number, array: IDataItem[]) => `Hello, ${item.name}_${index}_${array.length}`,
            },
            {
              title: '日期',
              fieldName: (item: IDataItem, index: number, array: IDataItem[]) => `Hello, ${item.name}_${index}_${array.length}`,
            },
          ] as any,
          result: 'ok',
        }).pipe(
          map((d) => d.data),
          tap((d) => {
            // const nextJson = dealData(d);
            sessionStorage.setItem(
              pageId,
              JSON.stringify(
                d,
                (key, value) => {
                  if (isFunction(value)) {
                    return value.toString();
                  }
                  return value;
                },
                2
              )
            );
          })
        );
      })
    );
  }
  abstract getData(params: TDataParams): Observable<TDataReturn>;
}
