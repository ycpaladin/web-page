import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { CY_FIELD_REGISTRY } from '../../core/consts/field';

@Component({
  selector: 'app-field',
  template: ` <ng-template #control></ng-template>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent implements OnInit {
  @Input() cyFormGroup!: FormGroup;

  @ViewChild('control', { read: ViewContainerRef, static: true })
  view!: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const fieldType = this.cyFormGroup.get('fieldType')?.value;
    const type = CY_FIELD_REGISTRY.get(fieldType);
    if (type) {
      const componentFactory = this.resolver.resolveComponentFactory(type);
      const componentRef = this.view.createComponent(componentFactory);
      componentRef.instance.cyFormGroup = this.cyFormGroup;
    }
  }
}
