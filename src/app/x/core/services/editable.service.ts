import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditableService {
  editMode$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  switchEditMode(): void {
    this.editMode$.next(true);
  }

  switchViewMode(): void {
    this.editMode$.next(false);
  }

}
