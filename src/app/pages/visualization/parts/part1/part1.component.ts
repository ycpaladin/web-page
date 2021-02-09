import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Part1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
