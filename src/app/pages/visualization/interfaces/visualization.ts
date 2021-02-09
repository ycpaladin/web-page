import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEditorBase } from '../base/page-editor-base';
import { VisualizationService } from '../visualization.service';

export interface IVisualizationView {
  service: VisualizationService;
}



export abstract class IEditView<TPageProperties = any> {
  abstract editContent: Type<PageEditorBase>;
  abstract config$: Observable<TPageProperties>;
}
