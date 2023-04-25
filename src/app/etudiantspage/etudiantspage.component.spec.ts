import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantspageComponent } from './etudiantspage.component';

describe('EtudiantspageComponent', () => {
  let component: EtudiantspageComponent;
  let fixture: ComponentFixture<EtudiantspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
