import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichPage3Component } from './lich-page3.component';

describe('LichPage3Component', () => {
  let component: LichPage3Component;
  let fixture: ComponentFixture<LichPage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LichPage3Component]
    });
    fixture = TestBed.createComponent(LichPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
