import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FieldControlBase } from '../../../core/base/field-base';
import { TEXT_FIELD_METADATA } from '../../../core/consts/field_definition';
import { FieldDefinition } from '../../../core/decorators/field';

@FieldDefinition(TEXT_FIELD_METADATA)
@Component({
  template: `
    <app-base-field [cyFormGroup]="cyFormGroup"></app-base-field>
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
export class TextFieldComponent extends FieldControlBase implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
