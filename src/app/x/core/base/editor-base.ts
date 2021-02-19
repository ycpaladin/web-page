import { FormGroup } from '@angular/forms';
import { FormBase } from './form-base';
import { Directive, Input, OnInit } from '@angular/core';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class EditorBase<T = any> implements OnInit {

  @Input() cyData!: T;

  cyFormGroup!: FormGroup;

  constructor(public service: FormBase<T>) {
  }
  ngOnInit(): void {
    this.cyFormGroup = this.service.createForm(this.cyData);
  }
}
