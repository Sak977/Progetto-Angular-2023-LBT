import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZPatternComponent } from './z-pattern.component';

describe('ZPatternComponent', () => {
  let component: ZPatternComponent;
  let fixture: ComponentFixture<ZPatternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZPatternComponent]
    });
    fixture = TestBed.createComponent(ZPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
