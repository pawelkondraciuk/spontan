import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentPairsComponent } from './tournament-pairs.component';

describe('TournamentPairsComponent', () => {
  let component: TournamentPairsComponent;
  let fixture: ComponentFixture<TournamentPairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentPairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
