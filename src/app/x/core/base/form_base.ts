import { FormGroup } from '@angular/forms';


export abstract class FormBase<TData = any> {
  abstract createForm(data: TData): FormGroup;
}
