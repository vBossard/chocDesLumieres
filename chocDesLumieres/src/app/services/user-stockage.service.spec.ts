import { TestBed } from '@angular/core/testing';

import { UserStockageService } from './user-stockage.service';

describe('UserStockageService', () => {
  let service: UserStockageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStockageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
