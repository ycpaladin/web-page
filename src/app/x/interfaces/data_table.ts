import { DateColumn, IDataItem, IndexColumn, NumberColumn, TextColumn } from './field';

export type DataTableColumn = IndexColumn | TextColumn | DateColumn | NumberColumn | NumberColumn;


export interface ListPageInfo {
  page: number;
  results: number;
  total: number;
}



export interface ResponseData<TData = IDataItem> {
  data: TData;
  result: string;
}

export type ResponsePageData<TData = IDataItem> = ResponseData<TData[]> & {
  info: ListPageInfo;
};

export interface ListPageQueryParams {
  page: number;
  results: number;
  sortField?: string;
  sortOrder?: SortOrder;
  [key: string]: any;
}

export interface FieldSort {
  [key: string]: SortOrder;
}

export type SortOrder = 'asc' | 'desc';
