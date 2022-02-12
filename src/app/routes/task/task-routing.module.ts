import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from "./list/list.component";
import {TaskDetailComponent} from "./detail/detail.component";

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: ':id', component: TaskDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {
}
