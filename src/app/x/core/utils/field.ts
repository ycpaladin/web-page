import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldFormCreater, TextColumn } from '../../interfaces/field';


// export type FieldFormCreater = (data: DataTableColumn) => (fb: FormBuilder) => FormGroup;


export const createTextFieldForm: FieldFormCreater<TextColumn> = (field: TextColumn) => (
  fb: FormBuilder
): FormGroup => {
  // const { format } = field;
  // return fb.group({
  //   format: [format],
  // });
  return fb.group({});
};
