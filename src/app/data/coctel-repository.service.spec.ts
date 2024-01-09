import { TestBed } from '@angular/core/testing';

import { CoctelRepositoryService } from './coctel-repository.service';

describe('CoctelRepositoryService', () => {
  let service: CoctelRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctelRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
