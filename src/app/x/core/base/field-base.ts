import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class FieldControlBase {
  // @Input() cyConfig!: F;
  @Input() cyFormGroup!: FormGroup;
}


