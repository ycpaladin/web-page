import { FieldType } from './../../interfaces/data-table';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PageEditorBase } from '../../base/page-editor-base';
import { FormBase } from '../../base/form-base';
import { DataTableColumn } from '../../interfaces/data-table';
import { ListPagePropertiesService } from '../../services/list-page-properties.service';

@Component({
  selector: 'app-data-table-editor',
  templateUrl: './data-table-editor.component.html',
  styleUrls: ['./data-table-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: FormBase, useClass: ListPagePropertiesService }],
})
export class DataTableEditorComponent
  extends PageEditorBase<DataTableColumn[]>
  implements OnInit {
  get configAray(): FormArray {
    return this.formGroup.get('configs') as FormArray;
  }

  addField(type: FieldType): void {
    const column = this.service.createColumn(type);
    this.configAray.push(column);
  }

  constructor(public service: ListPagePropertiesService) {
    super(service);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
