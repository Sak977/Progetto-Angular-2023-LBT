import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloAcquistiFilmComponent } from './carrello-acquisti-film.component';

describe('CarrelloAcquistiFilmComponent', () => {
  let component: CarrelloAcquistiFilmComponent;
  let fixture: ComponentFixture<CarrelloAcquistiFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrelloAcquistiFilmComponent]
    });
    fixture = TestBed.createComponent(CarrelloAcquistiFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
