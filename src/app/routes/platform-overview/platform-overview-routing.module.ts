import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformOverviewIndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: PlatformOverviewIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformOverviewRoutingModule { }
