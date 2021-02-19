import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EditorBase } from '../core/base/editor-base';
import { EditableService } from '../core/services/editable.service';
import { IEditView } from '../interfaces/edit_view';
import { PageDataService } from '../interfaces/page';

@Component({
  selector: 'app-part-wrap',
  template: `
    <nz-card nzTitle="" [nzExtra]="extra">
      <ng-template #extra>
        <ng-container *ngIf="editableService.editMode$ | async">
          <a nz-dropdown [nzDropdownMenu]="menu">
            <i nz-icon nzType="down"></i>
          </a>
          <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul nz-menu nzSelectable>
              <li nz-menu-item (click)="openEditFormModal()">编辑组件</li>
            </ul>
          </nz-dropdown-menu>
        </ng-container>
      </ng-template>
      <ng-content #content> </ng-content>
    </nz-card>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartWrapComponent implements OnInit {
  constructor(
    @Inject(IEditView) public parent: IEditView,
    public pageService: PageDataService,
    public editableService: EditableService,
    public modalService: NzModalService
  ) {}

  openEditFormModal(): void {
    const sub$ = this.parent.cyConfig$.subscribe((cyData) => {
      const modalRef = this.modalService.create<EditorBase>({
        nzTitle: '编辑',
        nzContent: this.parent.cyEditContent,
        nzComponentParams: {
          cyData,
        },
        nzMaskClosable: false,
        nzFooter: [
          {
            label: '取消',
            onClick: () => {
              modalRef.close();
            },
          },
          {
            label: '保存',
            type: 'primary',
            disabled: (instance) => {
              if (instance) {
                return instance.cyFormGroup.invalid;
              }
              return true;
            },
            onClick: (instance) => {
              this.pageService.savePageConfigData(instance?.cyFormGroup.value);
              this.parent.refreshPage();
              modalRef.close();
            },
          },
        ],
      });
      Promise.resolve().then(() => {
        sub$.unsubscribe();
      });
    });
  }

  ngOnInit(): void {}
}
