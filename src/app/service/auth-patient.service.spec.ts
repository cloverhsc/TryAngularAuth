import { TestBed, inject } from '@angular/core/testing';

import { AuthPatientService } from './auth-patient.service';

describe('AuthPatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthPatientService]
    });
  });

  it('should be created', inject([AuthPatientService], (service: AuthPatientService) => {
    expect(service).toBeTruthy();
  }));
});
