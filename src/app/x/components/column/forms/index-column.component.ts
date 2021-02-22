import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ColumnControlBase } from '../../../core/base/column_base';
import { INDEX_FIELD_METADATA } from '../../../core/consts/column_definition';
import { ColumnDefinition } from '../../../core/decorators/column';

@ColumnDefinition(INDEX_FIELD_METADATA)
@Component({
  template: `
    <app-base-column [cyFormGroup]="cyFormGroup"></app-base-column>
    <ng-container [formGroup]="cyFormGroup.get('metadata')">
      <nz-form-item>
        <nz-form-label nzSpan="8">序号计数方式</nz-form-label>
        <nz-form-control nzSpan="16">
          <nz-radio-group formControlName="count">
            <label nz-radio nzValue="restart">每页重新开始</label>
            <label nz-radio nzValue="accumulation">从上一页累加</label>
          </nz-radio-group>
        </nz-form-control>
      </nz-form-item>
    </ng-container>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexColumnComponent extends ColumnControlBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
