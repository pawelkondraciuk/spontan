import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentQuestionsChoiceRoutingModule } from './tournament-questions-choice-routing.module';
import { TournamentQuestionsChoiceComponent } from './tournament-questions-choice.component';

@NgModule({
  declarations: [TournamentQuestionsChoiceComponent],
  imports: [
    CommonModule,
    TournamentQuestionsChoiceRoutingModule
  ],
  exports: [TournamentQuestionsChoiceComponent]
})
export class TournamentQuestionsChoiceModule { }
