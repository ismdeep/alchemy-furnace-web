import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {TaskListComponent} from "./list/list.component";
import {TaskEditComponent} from './list/edit/edit.component';
import {TaskRoutingModule} from './task-routing.module';
import {NzNoAnimationModule, NzTreeModule} from "ng-zorro-antd";
import {TaskDetailComponent} from "./detail/detail.component";
import {RunDetailComponent} from "./run_detail/detail.component";

const COMPONENTS = [
  TaskListComponent,
  TaskDetailComponent,
  RunDetailComponent,
];

const COMPONENTS_NO_ROUTE = [
  TaskEditComponent,
];

@NgModule({
  imports: [SharedModule, TaskRoutingModule, MonacoEditorModule.forRoot(), NzTreeModule, NzNoAnimationModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NO_ROUTE],
  entryComponents: COMPONENTS_NO_ROUTE,
})
export class TaskModule {
}
