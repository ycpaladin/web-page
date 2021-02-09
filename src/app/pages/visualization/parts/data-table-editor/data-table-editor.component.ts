import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IEditComponent } from '../../interfaces/visualization';

@Component({
  selector: 'app-data-table-editor',
  templateUrl: './data-table-editor.component.html',
  styleUrls: ['./data-table-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableEditorComponent implements OnInit, IEditComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
