export interface IDataItem {
  id: number;
  [key: string]: any;
}

export type IData = (
  data: IDataItem,
  index: number,
  array: IDataItem[]
) => string;

export type FieldType = 'text' | 'number' | 'date' | 'url' | 'any';

export interface IDataTableColumn {
  title: string;
  fieldName: string | IData;
  fieldType?: FieldType;
}

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

export interface Option {
  label: string;
  value: string;
}

export type FieldTypeOptionCollection = { label: string, value: FieldType }[];
