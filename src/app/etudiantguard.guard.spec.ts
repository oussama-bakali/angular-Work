import { TestBed } from '@angular/core/testing';

import { EtudiantguardGuard } from './etudiantguard.guard';

describe('EtudiantguardGuard', () => {
  let guard: EtudiantguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EtudiantguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
