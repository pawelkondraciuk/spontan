import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentPairsRoutingModule } from './tournament-pairs-routing.module';
import { TournamentPairsComponent } from './tournament-pairs.component';

@NgModule({
  declarations: [TournamentPairsComponent],
  imports: [
    CommonModule,
    TournamentPairsRoutingModule
  ],
  exports: [TournamentPairsComponent]
})
export class TournamentPairsModule { }
