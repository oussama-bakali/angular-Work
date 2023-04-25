import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginchoicesComponent } from './loginchoices.component';

describe('LoginchoicesComponent', () => {
  let component: LoginchoicesComponent;
  let fixture: ComponentFixture<LoginchoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginchoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginchoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
