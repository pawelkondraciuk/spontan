import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentQuestionsChoiceComponent } from './tournament-questions-choice.component';

describe('TournamentQuestionsChoiceComponent', () => {
  let component: TournamentQuestionsChoiceComponent;
  let fixture: ComponentFixture<TournamentQuestionsChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentQuestionsChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentQuestionsChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
