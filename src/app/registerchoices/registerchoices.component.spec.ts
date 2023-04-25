import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterchoicesComponent } from './registerchoices.component';

describe('RegisterchoicesComponent', () => {
  let component: RegisterchoicesComponent;
  let fixture: ComponentFixture<RegisterchoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterchoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterchoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
