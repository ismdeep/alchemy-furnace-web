import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesResourcesViewComponent } from './resources-view/resources-view.component';

const COMPONENTS = [ResourcesResourcesViewComponent];
const COMPONENTS_NO_ROUTE = [];

@NgModule({
  imports: [
    SharedModule,
    ResourcesRoutingModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NO_ROUTE],
})
export class ResourcesModule {}
