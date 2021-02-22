import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ColumnControlBase } from 'src/app/x/core/base/column_base';
import { ColumnDefinition } from './../../../core/decorators/column';
import { DATE_COLUMN_METADATA } from './../../../core/consts/column_definition';

@ColumnDefinition(DATE_COLUMN_METADATA)
@Component({
  template: `
   <app-base-column [cyFormGroup]="cyFormGroup"></app-base-column>
    <ng-container [formGroup]="cyFormGroup.get('metadata')">
      <nz-form-item>
        <nz-form-label nzSpan="8">格式化字符串</nz-form-label>
        <nz-form-control nzSpan="16">
          <input nz-input formControlName="format">
        </nz-form-control>
      </nz-form-item>
    </ng-container>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateColumnComponent extends ColumnControlBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
