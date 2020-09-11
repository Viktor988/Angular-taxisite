import { TestBed } from '@angular/core/testing';

import { KategorijeAutaService } from './kategorije-auta.service';

describe('KategorijeAutaService', () => {
  let service: KategorijeAutaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KategorijeAutaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
