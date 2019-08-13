import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsBaseComponent } from './questions-base.component';

const routes: Routes = [{
  path: '',
  component: QuestionsBaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsBaseRoutingModule { }
