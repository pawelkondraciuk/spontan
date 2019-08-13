import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTournamentModule } from './create-tournament/create-tournament.module';

const routes: Routes = [{
  path: 'list',
  loadChildren: './tournament-list/tournament-list.module#TournamentListModule',
}, {
  path: 'create',
  loadChildren: './create-tournament/create-tournament.module#CreateTournamentModule',
}, {
  path: 'questions',
  loadChildren: './questions-base/questions-base.module#QuestionsBaseModule',
}, {
  path: 'choice',
  loadChildren: './tournament-questions-choice/tournament-questions-choice.module#TournamentQuestionsChoiceModule',
}, {
  path: 'pairs',
  loadChildren: './tournament-pairs/tournament-pairs.module#TournamentPairsModule',
}, {
  path: 'game_bracket',
  loadChildren: './game-bracket/game-bracket.module#GameBracketModule',
}, {
  path: 'game_start',
  loadChildren: './game-start/game-start.module#GameStartModule',
}, {
  path: 'game_questions',
  loadChildren: './game-questions/game-questions.module#GameQuestionsModule',
}, {
  path: 'game_winner',
  loadChildren: './game-winner/game-winner.module#GameWinnerModule',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
