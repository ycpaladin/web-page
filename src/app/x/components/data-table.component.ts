import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  Injector,
  ReflectiveInjector,
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FieldSort, ResponsePageData } from '../interfaces/data_table';
import { ListPageConfigData } from '../interfaces/list_page';

@Component({
  selector: 'app-data-table',
  template: `
    <app-part-wrap>
      <nz-table #basicTable [nzData]="cyTableData.data" [(nzPageIndex)]="cyPageIndex" [(nzPageSize)]="cyPageSize" (nzPageIndexChange)="pageIndexChange($event)" (nzPageSizeChange)="pageSizeChange($event)">
        <thead>
          <tr>
            <th *ngFor="let conf of cyTableConfig.fields">{{ conf.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of basicTable.data; let index = index">
            <td *ngFor="let conf of cyTableConfig.fields">
              <!-- {{ item | cellData: conf:index:cyTableData.data }} -->
              <ng-container [ngComponentOutlet]="conf | fieldRender" [ngComponentOutletInjector]="conf | fieldRenderInjector: item: index:cyTableData.data"></ng-container>

            </td>
          </tr>
        </tbody>
      </nz-table>
    </app-part-wrap>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit {
  @Input() cyTableConfig!: ListPageConfigData;
  @Input() cyTableData!: ResponsePageData;
  @Input() cyPageIndex = 1;
  @Input() cyPageSize = 10;
  @Output() cyPageIndexChange = new EventEmitter<number>();
  @Output() cyPageSizeChange = new EventEmitter<number>();
  @Output() cyFieldSortChange = new EventEmitter<FieldSort>();


  pageIndexChange(pageIndex: number): void {
    this.cyPageIndexChange.emit(pageIndex);
  }

  pageSizeChange(pageSize: number): void {
    this.cyPageIndexChange.emit(pageSize);
  }

  constructor(public modalService: NzModalService) {
  }

  ngOnInit(): void {
    this.pageIndexChange(this.cyPageIndex);
    this.pageSizeChange(this.cyPageSize);
  }
}
