import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PageEditorBase } from '../../base/page-editor-base';
import { IEditView } from '../../interfaces/visualization';

@Component({
  selector: 'app-part-wrap',
  templateUrl: './part-wrap.component.html',
  styleUrls: ['./part-wrap.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartWrapComponent implements OnInit {
  // @ViewChild('content', { static: true }) content!: IEditView;

  constructor(
    @Inject(IEditView) public parent: IEditView,
    public modalService: NzModalService
  ) { }

  openEditFormModal(): void {
    const sub$ = this.parent.config$.subscribe(configData => {
      const modalRef = this.modalService.create<PageEditorBase>({
        nzTitle: '编辑',
        nzContent: this.parent.editContent,
        nzComponentParams: {
          configData
        },
        nzMaskClosable: false,
        nzFooter: [
          {
            label: '取消', onClick: () => {
              modalRef.close();
            }
          },
          {
            label: '保存',
            disabled: (instance) => instance?.formGroup.invalid || true,
            onClick: instance => {

            }
          }
        ]
      });
      Promise.resolve().then(() => {
        sub$.unsubscribe();
      });
    });

  }

  ngOnInit(): void { }
}
