import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorBase } from '../core/base/editor-base';

export abstract class IEditView<TPageProperties = any> {
  abstract cyEditContent: Type<EditorBase>;
  abstract cyConfig$: Observable<TPageProperties>;
  abstract refreshPage(): void;
}
