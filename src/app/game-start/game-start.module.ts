import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameStartRoutingModule } from './game-start-routing.module';
import { GameStartComponent } from './game-start.component';

@NgModule({
  declarations: [GameStartComponent],
  imports: [
    CommonModule,
    GameStartRoutingModule
  ],
  exports: [GameStartComponent]
})
export class GameStartModule { }
