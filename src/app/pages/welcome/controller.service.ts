import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ControllerService {
  edit$ = new BehaviorSubject<boolean>(false);

  switchMode(): void {
    this.edit$.next(true);
  }

  displayMode(): void {
    this.edit$.next(false);
  }

  constructor() {}
}
