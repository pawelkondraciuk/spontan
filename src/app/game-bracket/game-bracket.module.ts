import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBracketRoutingModule } from './game-bracket-routing.module';
import { GameBracketComponent } from './game-bracket.component';

@NgModule({
  declarations: [GameBracketComponent],
  imports: [
    CommonModule,
    GameBracketRoutingModule
  ],
  exports: [GameBracketComponent]
})
export class GameBracketModule { }
