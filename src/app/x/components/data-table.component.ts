import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FieldSort, ResponsePageData } from '../interfaces/data_table';
import { ListPageConfigData } from '../interfaces/list_page';

@Component({
  selector: 'app-data-table',
  template: `
    <app-part-wrap>
      <nz-table #basicTable [nzData]="cyTableData.data">
        <thead>
          <tr>
            <th *ngFor="let conf of cyTableConfig.fields">{{ conf.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of basicTable.data; let index = index">
            <td *ngFor="let conf of cyTableConfig.fields">
              {{ item | cellData: conf.fieldName:index:cyTableData.data }}
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
  @Output() cyPageIndexChange = new EventEmitter<number>();
  @Output() cyPageSizeChange = new EventEmitter<number>();
  @Output() cyFieldSortChange = new EventEmitter<FieldSort>();

  constructor(public modalService: NzModalService) {}

  ngOnInit(): void {}
}
