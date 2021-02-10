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

export interface IDataTableColumn<TField = any> {
  title: string;
  fieldName: string | IData;
  fieldType?: FieldType;
  metadata: TField;
}

export interface TextField{
  format: boolean;
}

export type TextColumn = IDataTableColumn<TextField>;

export interface DateField {
  format: string;
}

export type DateColumn = IDataTableColumn<DateField>;

export interface UrlField  {}

export type UrlColumn = IDataTableColumn<UrlField>;

export interface NumberField{
  max: number;
  min: number;
  precision: number;
  format: string;
}

export type NumberColumn = IDataTableColumn<NumberField>;

export type DataTableColumn = TextColumn | DateColumn | NumberColumn | NumberColumn;


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

export type FieldTypeOptionCollection = { label: string; value: FieldType }[];
