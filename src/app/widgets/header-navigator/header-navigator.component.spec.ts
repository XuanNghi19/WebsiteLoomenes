import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavigatorComponent } from './header-navigator.component';

describe('HeaderNavigatorComponent', () => {
  let component: HeaderNavigatorComponent;
  let fixture: ComponentFixture<HeaderNavigatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNavigatorComponent]
    });
    fixture = TestBed.createComponent(HeaderNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
