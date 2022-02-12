import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesResourcesViewComponent } from './resources-view/resources-view.component';

const routes: Routes = [{ path: 'resources-view', component: ResourcesResourcesViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourcesRoutingModule {}
