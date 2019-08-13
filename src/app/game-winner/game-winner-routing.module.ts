import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameWinnerComponent } from './game-winner.component';

const routes: Routes = [{
  path: '',
  component: GameWinnerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameWinnerRoutingModule { }
