import { TestBed, inject } from '@angular/core/testing';

import { OrganizationalUnitService } from './organizational-unit.service';

describe('OrganizationUnitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationalUnitService]
    });
  });

  it('should ...', inject([OrganizationalUnitService], (service: OrganizationalUnitService) => {
    expect(service).toBeTruthy();
  }));
});
