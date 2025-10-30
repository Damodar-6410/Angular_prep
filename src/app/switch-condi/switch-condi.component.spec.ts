import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCondiComponent } from './switch-condi.component';

describe('SwitchCondiComponent', () => {
  let component: SwitchCondiComponent;
  let fixture: ComponentFixture<SwitchCondiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCondiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCondiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
