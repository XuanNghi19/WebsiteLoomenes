import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichNewComponent } from './lich-new.component';

describe('LichNewComponent', () => {
  let component: LichNewComponent;
  let fixture: ComponentFixture<LichNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LichNewComponent]
    });
    fixture = TestBed.createComponent(LichNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
