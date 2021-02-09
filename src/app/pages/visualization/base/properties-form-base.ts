import { FormGroup } from '@angular/forms';


export abstract class PagePropertiesFormBase<TProperties = any> {
  abstract createForm(data: TProperties): FormGroup;
}
