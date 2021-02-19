import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EditableService } from '../../core/services/editable.service';

@Component({
  selector: 'app-editable-layout',
  template: `
    <nz-card nzTitle="title" [nzExtra]="extra">
      <ng-template #extra>
        <button
          nz-button
          (click)="service.switchEditMode()"
          nzType="primary"
          *ngIf="(service.editMode$ | async) === false; else editMode"
        >
          编辑
        </button>
        <ng-template #editMode>
          <div nz-row [nzGutter]="24">
            <div nz-col nzSpan="12">
              <button nz-button (click)="service.save()" nzType="primary">
                保存
              </button>
            </div>
            <div nz-col nzSpan="12">
              <button nz-button (click)="service.switchViewMode()">取消</button>
            </div>
          </div>
        </ng-template>
      </ng-template>

      <ng-content></ng-content>
    </nz-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    EditableService
  ]
})
export class EditableLayoutComponent implements OnInit {
  constructor(public service: EditableService) {}

  ngOnInit(): void {}
}
