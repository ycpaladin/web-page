import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-base-column',
  template: `
    <form nz-form [formGroup]="cyFormGroup" nzLayout="horizontal">
      <nz-form-item>
        <nz-form-label nzSpan="8" nzRequired> 字段标题 </nz-form-label>
        <nz-form-control nzSpan="16">
          <input nz-input formControlName="title" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzSpan="8" [nzRequired]="cyFormGroup.get('fieldName')?.enabled"> 绑定数据字段 </nz-form-label>
        <nz-form-control nzSpan="16">
          <input nz-input formControlName="fieldName" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label nzSpan="8"> 默认值 </nz-form-label>
        <nz-form-control nzSpan="16">
          <input nz-input formControlName="defaultValue" />
        </nz-form-control>
      </nz-form-item>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseFieldComponent implements OnInit {
  @Input() cyFormGroup!: FormGroup;

  constructor() {
    // this.cyFormGroup.get('fieldName')?.enabled
  }

  ngOnInit(): void {}
}
