import { Component, OnInit } from '@angular/core';
import { IVisualizationView } from './interfaces/visualization';
import { VisualizationService } from './visualization.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.less'],
  providers: [
    VisualizationService
  ]
})
export class VisualizationComponent implements OnInit, IVisualizationView {
  constructor(public service: VisualizationService) {}

  ngOnInit(): void {}
}
