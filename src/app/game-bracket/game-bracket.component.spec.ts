import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBracketComponent } from './game-bracket.component';

describe('GameBracketComponent', () => {
  let component: GameBracketComponent;
  let fixture: ComponentFixture<GameBracketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBracketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
