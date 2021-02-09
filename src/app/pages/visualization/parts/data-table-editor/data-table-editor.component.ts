import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PageEditorBase } from '../../base/page-editor-base';
import { PagePropertiesFormBase } from '../../base/properties-form-base';
import { IDataTableColumn } from '../../interfaces/data-table';
import { ListPagePropertiesService } from '../../services/list-page-properties.service';

@Component({
  selector: 'app-data-table-editor',
  templateUrl: './data-table-editor.component.html',
  styleUrls: ['./data-table-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: PagePropertiesFormBase, useClass: ListPagePropertiesService }
  ]
})
export class DataTableEditorComponent extends PageEditorBase<IDataTableColumn[]> implements OnInit {

  get configAray(): FormArray {
    return this.formGroup.get('configs') as FormArray;
  }

  constructor(public service: PagePropertiesFormBase) {
    super(service);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
