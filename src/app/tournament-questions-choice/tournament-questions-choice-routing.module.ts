import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentQuestionsChoiceComponent } from './tournament-questions-choice.component';

const routes: Routes = [{
  path: '',
  component: TournamentQuestionsChoiceComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentQuestionsChoiceRoutingModule { }
