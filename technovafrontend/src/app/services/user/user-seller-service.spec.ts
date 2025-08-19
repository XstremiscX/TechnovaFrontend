import { TestBed } from '@angular/core/testing';

import { UserSellerService } from './user-seller-service';

describe('UserSellerService', () => {
  let service: UserSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
