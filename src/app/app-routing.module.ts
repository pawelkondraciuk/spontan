import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTournamentModule } from './create-tournament/create-tournament.module';

const routes: Routes = [{
  path: '',
  loadChildren: './tournament-list/tournament-list.module#TournamentListModule',
}, {
  path: 'create',
  loadChildren: './create-tournament/create-tournament.module#CreateTournamentModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
