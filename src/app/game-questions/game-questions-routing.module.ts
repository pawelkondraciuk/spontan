import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameQuestionsComponent } from './game-questions.component';

const routes: Routes = [{
  path: '',
  component: GameQuestionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameQuestionsRoutingModule { }
