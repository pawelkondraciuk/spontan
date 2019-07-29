import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTournamentComponent } from './create-tournament.component';
import { CreateTournamentRoutingModule } from './create-tournament-routing.module';
import { AddPlayerComponent } from './add-player/add-player.component';

@NgModule({
  declarations: [CreateTournamentComponent, AddPlayerComponent],
  imports: [
    CommonModule,
    CreateTournamentRoutingModule
  ]
})
export class CreateTournamentModule { }
