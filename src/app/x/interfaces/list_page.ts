import { DataTableColumn, ResponsePageData } from './data_table';
import { IDataItem } from './field';

export interface ListPageQueryParams {
  pageIndex: number;
  pageSize: number;
}

export type ListPageData = ResponsePageData<IDataItem>;

export interface ListPageConfigData {
  id: string;
  title: string;
  fields: DataTableColumn[];
}
