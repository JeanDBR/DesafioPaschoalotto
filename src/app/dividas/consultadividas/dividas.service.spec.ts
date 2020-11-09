import { TestBed, inject } from '@angular/core/testing';

import { DividasService } from './dividas.service';

describe('DividasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DividasService]
    });
  });

  it('should be created', inject([DividasService], (service: DividasService) => {
    expect(service).toBeTruthy();
  }));
});
