import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteretudiantComponent } from './registeretudiant.component';

describe('RegisteretudiantComponent', () => {
  let component: RegisteretudiantComponent;
  let fixture: ComponentFixture<RegisteretudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteretudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteretudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
