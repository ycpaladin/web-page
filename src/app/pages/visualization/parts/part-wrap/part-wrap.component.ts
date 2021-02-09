import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ContentChild,
  Inject,
} from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IEditComponent, IEditView } from '../../interfaces/visualization';

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
  ) {}

  openEditFormModal(): void {
    this.modalService.create<IEditComponent>({
      nzTitle: '编辑',
      nzContent: this.parent.editContent,
    });
  }

  ngOnInit(): void {}
}
