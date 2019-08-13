import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsBaseComponent } from './questions-base.component';
import { QuestionsBaseRoutingModule } from './questions-base-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
  declarations: [QuestionsBaseComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    QuestionsBaseRoutingModule
  ]
})
export class QuestionsBaseModule { }
