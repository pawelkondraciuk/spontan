import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameWinnerRoutingModule } from './game-winner-routing.module';
import { GameWinnerComponent } from './game-winner.component';

@NgModule({
  declarations: [GameWinnerComponent],
  imports: [
    CommonModule,
    GameWinnerRoutingModule
  ],
  exports: [GameWinnerComponent]
})
export class GameWinnerModule { }
