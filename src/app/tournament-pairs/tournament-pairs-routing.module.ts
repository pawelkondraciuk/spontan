import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentPairsComponent } from './tournament-pairs.component';

const routes: Routes = [{
  path: '',
  component: TournamentPairsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentPairsRoutingModule { }
