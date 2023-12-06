import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopriDiPiuComponent } from './scopri-di-piu.component';

describe('ScopriDiPiuComponent', () => {
  let component: ScopriDiPiuComponent;
  let fixture: ComponentFixture<ScopriDiPiuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScopriDiPiuComponent]
    });
    fixture = TestBed.createComponent(ScopriDiPiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
