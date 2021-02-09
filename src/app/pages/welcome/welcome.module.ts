import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
// import { DescriptionEditButtonDirective } from './description-edit-button.directive';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';


@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule, CommonModule, NzDrawerModule],
  declarations: [WelcomeComponent, EditTemplateComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule { }
