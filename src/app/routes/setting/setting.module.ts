import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {SettingRoutingModule} from './setting-routing.module';
import {NzNoAnimationModule, NzTreeModule} from "ng-zorro-antd";
import {SettingComponent} from "./pages/setting.component";
import {NodeSettingCardComponent} from "./components/node-setting-card.component";
import {NodeEditFormComponent} from "./components/node-edit-form.component";

const COMPONENTS = [
  SettingComponent
];

const COMPONENTS_NO_ROUTE = [
  NodeSettingCardComponent,
  NodeEditFormComponent,
];

@NgModule({
  imports: [SharedModule, SettingRoutingModule, MonacoEditorModule.forRoot(), NzTreeModule, NzNoAnimationModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NO_ROUTE],
  entryComponents: COMPONENTS_NO_ROUTE,
})
export class SettingModule {
}
