import { TestBed, inject } from '@angular/core/testing';

import { DoctorApiService } from './doctor-api.service';

describe('DoctorApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorApiService]
    });
  });

  it('should be created', inject([DoctorApiService], (service: DoctorApiService) => {
    expect(service).toBeTruthy();
  }));
});
