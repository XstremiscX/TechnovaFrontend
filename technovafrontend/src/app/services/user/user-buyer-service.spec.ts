import { TestBed } from '@angular/core/testing';

import { UserBuyerService } from './user-buyer-service';

describe('UserBuyerService', () => {
  let service: UserBuyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBuyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
