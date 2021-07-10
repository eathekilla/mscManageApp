import { TestBed } from '@angular/core/testing';

import { MagicianService } from './magician.service';

describe('MagicianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicianService = TestBed.get(MagicianService);
    expect(service).toBeTruthy();
  });
});
