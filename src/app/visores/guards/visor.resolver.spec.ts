import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { visorResolver } from './visor.resolver';

describe('visorResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => visorResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
