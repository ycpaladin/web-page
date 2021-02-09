import { Type } from '@angular/core';
import { VisualizationService } from '../visualization.service';

export interface IVisualizationView {
  service: VisualizationService;
}

export interface IEditComponent {}

export abstract class IEditView {
  abstract editContent: Type<IEditComponent>;
}
