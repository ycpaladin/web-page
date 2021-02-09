import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-edit-template',
  template: `
    <ng-template #template>
      <div [class.edit-mode]="service.edit$ | async">
        <ng-container [ngTemplateOutlet]="innerTemplateWrap"></ng-container>
        <span (click)="onEdit(editForm)">编辑</span>
      </div>
    </ng-template>
    <ng-template #editForm> </ng-template>
  `,
  styleUrls: ['./edit-template.component.less'],
})
export class EditTemplateComponent implements OnInit {
  @ViewChild('template', { static: true }) template!: TemplateRef<any>;

  innerTemplateWrap!: TemplateRef<void>;

  onEdit(
    editForm: TemplateRef<{ $implicit: {}; drawerRef: NzDrawerRef<any, any> }>
  ): void {
    // this.drawerService.create({
    //   nzTitle: '',
    //   nzContent: editForm,
    //   nzFooter:
    // });
  }

  constructor(
    public service: ControllerService,
    public drawerService: NzDrawerService
  ) {}

  ngOnInit(): void {}
}
