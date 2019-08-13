import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBracketComponent } from './game-bracket.component';

const routes: Routes = [{
  path: '',
  component: GameBracketComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameBracketRoutingModule { }
