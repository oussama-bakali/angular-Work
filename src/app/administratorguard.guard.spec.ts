import { TestBed } from '@angular/core/testing';

import { AdministratorguardGuard } from './administratorguard.guard';

describe('AdministratorguardGuard', () => {
  let guard: AdministratorguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdministratorguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
