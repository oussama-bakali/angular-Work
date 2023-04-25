import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantdashboardComponent } from './etudiantdashboard.component';

describe('EtudiantdashboardComponent', () => {
  let component: EtudiantdashboardComponent;
  let fixture: ComponentFixture<EtudiantdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
