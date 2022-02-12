import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {SystemSettingsComponent} from "./system-settings/system-settings.component";

const routes: Routes = [
  {path: 'system-settings', component: SystemSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), NzTreeModule],
  exports: [RouterModule, NzTreeModule],
})
export class OperationRoutingModule {
}
