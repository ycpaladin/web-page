import { TestBed } from '@angular/core/testing';

import { ListPagePropertiesService } from './list-page-properties.service';

describe('ListPagePropertiesService', () => {
  let service: ListPagePropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPagePropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
