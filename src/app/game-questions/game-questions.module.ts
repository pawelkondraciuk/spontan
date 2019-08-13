import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameQuestionsRoutingModule } from './game-questions-routing.module';
import { GameQuestionsComponent } from './game-questions.component';

@NgModule({
  declarations: [GameQuestionsComponent],
  imports: [
    CommonModule,
    GameQuestionsRoutingModule
  ],
  exports: [GameQuestionsComponent]
})
export class GameQuestionsModule { }
