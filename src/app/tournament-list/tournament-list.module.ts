import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentListComponent } from './tournament-list.component';
import { TournamentListRoutingModule } from './tournament-list-routing.module';

@NgModule({
  declarations: [TournamentListComponent],
  imports: [
    CommonModule,
    TournamentListRoutingModule
  ]
})
export class TournamentListModule { }
