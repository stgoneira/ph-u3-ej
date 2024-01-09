import { TestBed } from '@angular/core/testing';

import { CoctelRemoteDatasourceService } from './coctel-remote-datasource.service';

describe('CoctelRemoteDatasourceService', () => {
  let service: CoctelRemoteDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctelRemoteDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
