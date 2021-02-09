import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Type,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FieldSort, IDataTableColumn } from '../../interfaces/data-table';
import { ResponsePageData } from './../../interfaces/data-table';
import { NzModalService } from 'ng-zorro-antd/modal';

const defaultTableData: ResponsePageData = {
  info: {
    page: 1,
    results: 10,
    total: 0,
  },
  data: [],
  result: '',
};

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit {
  @Input() cyTableConfig!: IDataTableColumn[];
  @Input() cyTableData!: ResponsePageData;
  @Output() cyPageIndexChange = new EventEmitter<number>();
  @Output() cyPageSizeChange = new EventEmitter<number>();
  @Output() cyFieldSortChange = new EventEmitter<FieldSort>();

  constructor(public modalService: NzModalService) {}

  ngOnInit(): void {}
}
