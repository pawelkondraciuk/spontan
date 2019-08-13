import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameStartComponent } from './game-start.component';

const routes: Routes = [{
  path: '',
  component: GameStartComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameStartRoutingModule { }
