import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogParticularComponent } from './blog-particular.component';

describe('BlogParticularComponent', () => {
  let component: BlogParticularComponent;
  let fixture: ComponentFixture<BlogParticularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogParticularComponent]
    });
    fixture = TestBed.createComponent(BlogParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
