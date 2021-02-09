import { EditTemplateComponent } from './edit-template/edit-template.component';
import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  Injector,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NzDescriptionsItemComponent } from 'ng-zorro-antd/descriptions';
import { ControllerService } from './controller.service';

@Directive({
  selector: 'nz-descriptions-item',
})
export class DescriptionEditButtonDirective implements OnInit, AfterViewInit {
  @Input() data: any;

  constructor(
    public x: NzDescriptionsItemComponent,
    public renderer: Renderer2,
    public resolver: ComponentFactoryResolver,
    public injector: Injector
  ) {}
  ngOnInit(): void {
    console.log(this.data);
    const factory = this.resolver.resolveComponentFactory(
      EditTemplateComponent
    );
    const { instance } = factory.create(this.injector);
    instance.innerTemplateWrap = this.x.content;
    this.x.content = instance.template;
    // console.log('1111111', this.x, this.x.content.elementRef.nativeElement);
    // this.service.edit$.subscribe((v) => {
    //   this.editMode();
    // });
  }
  ngAfterViewInit(): void {
    // console.log('1111111', this.x, this.x.content.elementRef.nativeElement);
    // // this.renderer.
    // // console.log(this.renderer.listen(this.x.content.elementRef.nativeElement));
    // this.renderer.appendChild(
    //   this.x.content.elementRef.nativeElement,
    //   this.renderer.createElement('div')
    // );
  }

  editMode(): void {}
}
