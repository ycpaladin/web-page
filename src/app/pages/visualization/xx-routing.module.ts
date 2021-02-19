import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from 'src/app/x/pages/list-page.component';
// import { XxComponent } from './xx.component';

const routes: Routes = [{ path: '', component: ListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XxRoutingModule { }
