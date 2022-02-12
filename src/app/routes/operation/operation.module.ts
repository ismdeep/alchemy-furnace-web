import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {OperationRoutingModule} from './operation-routing.module';
import {SystemSettingsComponent} from "./system-settings/system-settings.component";

const COMPONENTS = [
  SystemSettingsComponent,
];

const COMPONENTS_NO_ROUTE = [
];


@NgModule({
  imports: [SharedModule, OperationRoutingModule, MonacoEditorModule.forRoot()],
  declarations: [...COMPONENTS, ...COMPONENTS_NO_ROUTE],
})
export class OperationModule {
}
