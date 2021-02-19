import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBase } from '../../core/base/form-base';
import { EditorBase } from '../../core/base/editor-base';
import { CY_FIELD_TYPE } from '../../core/consts/field';
import { CY_FIELD_TYPE_LIST } from '../../core/consts/token';
import { FieldType } from '../../interfaces/field';
import { DataTableEditorService } from '../../core/services/data-table-editor.service';
import { ListPageConfigData } from '../../interfaces/list_page';

@Component({
  template: `
    <form [formGroup]="cyFormGroup">
      <div nz-row nzGutter="8" formArrayName="fields">
        <div nz-col nzSpan="24">
          <a nz-dropdown [nzDropdownMenu]="menu">
            添加字段
            <i nz-icon nzType="down"></i>
          </a>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul nz-menu nzSelectable>
              <li
                nz-menu-item
                (click)="addField(f.key)"
                *ngFor="let f of FIELD_TYPES | keyvalue"
              >
                {{ f.value }}
              </li>
            </ul>
          </nz-dropdown-menu>
        </div>
        <div
          nz-col
          nzSpan="24"
          *ngFor="let item of fields.controls; let index = index"
          [formGroupName]="index"
        >
          <app-field
            [cyFormGroup]="item"
          ></app-field>
        </div>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DataTableEditorService,
    {
      provide: CY_FIELD_TYPE_LIST,
      useFactory: () => CY_FIELD_TYPE,
    },
    { provide: FormBase, useExisting: DataTableEditorService },
  ],
})
export class DataTableEditorComponent
  extends EditorBase<ListPageConfigData>
  implements OnInit {
  get fields(): FormArray {
    return this.cyFormGroup.get('fields') as FormArray;
  }

  addField(type: FieldType): void {
    const column = this.service.createColumn(type);
    this.fields.push(column);
  }

  constructor(
    @Inject(CY_FIELD_TYPE_LIST) public FIELD_TYPES: Map<FieldType, string>,
    public service: DataTableEditorService
  ) {
    super(service);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
