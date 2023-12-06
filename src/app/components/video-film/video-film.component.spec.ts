import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFilmComponent } from './video-film.component';

describe('VideoFilmComponent', () => {
  let component: VideoFilmComponent;
  let fixture: ComponentFixture<VideoFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoFilmComponent]
    });
    fixture = TestBed.createComponent(VideoFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
