import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookadderComponent } from './bookadder.component';

describe('BookadderComponent', () => {
  let component: BookadderComponent;
  let fixture: ComponentFixture<BookadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookadderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
