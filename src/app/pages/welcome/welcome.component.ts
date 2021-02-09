import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Compiler,
  Component,
  ComponentFactory,
  ComponentRef,
  // ModuleWithComponentFactories,
  NgModule,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ControllerService } from './controller.service';
import { DescriptionEditButtonDirective } from './description-edit-button.directive';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
  providers: [ControllerService],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  componentRef!: ComponentRef<any>;

  private createComponentFactorySync(
    compiler: Compiler,
    metadata: Component,
    componentClass: any
  ): ComponentFactory<any> {
    const cmpClass =
      componentClass ||
      class RuntimeComponent {
        name = 'Denys';
      };
    const decoratedCmp = Component(metadata)(cmpClass);

    const moduleClass = class RuntimeComponent {};
    const decoratedNgModule = NgModule({
      imports: [CommonModule, NzDescriptionsModule],
      declarations: [decoratedCmp, DescriptionEditButtonDirective],
    })(moduleClass);

    const module = compiler.compileModuleAndAllComponentsSync(
      decoratedNgModule
    );
    const result = module.componentFactories.find(
      (f) => f.componentType === decoratedCmp
    ) as any;

    return result || null;
  }

  public compileTemplate(template: string): void {
    const metadata: Component = {
      // selector: `runtime-component-sample`,
      template,
      changeDetection: ChangeDetectionStrategy.OnPush,
    };

    const factory = this.createComponentFactorySync(
      this.compiler,
      metadata,
      null
    );

    if (this.componentRef) {
      this.componentRef.destroy();
      // this.componentRef = undefined;
    }
    this.componentRef = this.container.createComponent(factory);
  }

  constructor(private compiler: Compiler, public service: ControllerService) {}

  create(): void {
    this.compileTemplate(`
      <nz-descriptions nzTitle="User Info">
        <nz-descriptions-item nzTitle="name" [data]="name"> {{name}} </nz-descriptions-item>
      </nz-descriptions>
    `);
  }

  editMode(): void {
    this.service.edit$.next(true);
  }

  ngOnInit(): void {}
}
