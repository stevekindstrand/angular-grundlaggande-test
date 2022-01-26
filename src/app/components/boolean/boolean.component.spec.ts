import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanComponent } from './boolean.component';

describe('BooleanComponent', () => {
  let component: BooleanComponent;
  let fixture: ComponentFixture<BooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooleanComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testar ifall booleanChange ändrar booleanValue från true till false
  it('should change boolean value', () => {
    expect(component.booleanValue).toBeTrue();

    component.booleanChange();

    fixture.detectChanges();

    expect(component.booleanValue).toBeFalse();
  });
});