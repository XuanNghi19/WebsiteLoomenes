import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCustomerPageComponent } from './info-customer-page.component';

describe('InfoCustomerPageComponent', () => {
  let component: InfoCustomerPageComponent;
  let fixture: ComponentFixture<InfoCustomerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCustomerPageComponent]
    });
    fixture = TestBed.createComponent(InfoCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
