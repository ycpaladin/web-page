import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ColumnControlBase } from '../../../core/base/column_base';
import { TEXT_FIELD_METADATA } from '../../../core/consts/column_definition';
import { ColumnDefinition } from '../../../core/decorators/column';

@ColumnDefinition(TEXT_FIELD_METADATA)
@Component({
  template: `
    <app-base-column [cyFormGroup]="cyFormGroup"></app-base-column>
    <ng-container [formGroup]="cyFormGroup.get('metadata')">
      <nz-form-item>
        <nz-form-label nzSpan="8">格式化</nz-form-label>
        <nz-form-control nzSpan="16">
          <label nz-checkbox formControlName="format"></label>
        </nz-form-control>
      </nz-form-item>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextColumnComponent extends ColumnControlBase implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
