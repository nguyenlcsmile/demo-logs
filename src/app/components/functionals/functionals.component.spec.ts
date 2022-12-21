import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalsComponent } from './functionals.component';

describe('FunctionalsComponent', () => {
  let component: FunctionalsComponent;
  let fixture: ComponentFixture<FunctionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
