import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDettaglioComponent } from './film-dettaglio.component';

describe('FilmDettaglioComponent', () => {
  let component: FilmDettaglioComponent;
  let fixture: ComponentFixture<FilmDettaglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDettaglioComponent]
    });
    fixture = TestBed.createComponent(FilmDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
