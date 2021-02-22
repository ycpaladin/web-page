import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class ColumnControlBase {
  // @Input() cyConfig!: F;
  @Input() cyFormGroup!: FormGroup;
}


