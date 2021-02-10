import { FormGroup } from '@angular/forms';
import { FormBase } from './form-base';
import { Directive, Input, OnInit } from '@angular/core';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class PageEditorBase<TPageProperties = any> implements OnInit {

  @Input() configData!: TPageProperties;

  formGroup!: FormGroup;

  constructor(public service: FormBase<TPageProperties>) {
  }
  ngOnInit(): void {
    this.formGroup = this.service.createForm(this.configData);
  }
}
