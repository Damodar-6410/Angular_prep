import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoop1Component } from './for-loop1.component';

describe('ForLoop1Component', () => {
  let component: ForLoop1Component;
  let fixture: ComponentFixture<ForLoop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoop1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
