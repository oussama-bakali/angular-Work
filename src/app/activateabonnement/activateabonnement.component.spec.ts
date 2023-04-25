import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateabonnementComponent } from './activateabonnement.component';

describe('ActivateabonnementComponent', () => {
  let component: ActivateabonnementComponent;
  let fixture: ComponentFixture<ActivateabonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateabonnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateabonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
