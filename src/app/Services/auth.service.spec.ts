import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = new AuthService();
  });

  afterEach(() => {
    service = null
    localStorage.removeItem('token')
  })

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('Debería retornar valor true desde isAuthenticated cuando hay un token', () => {
    localStorage.setItem('token', '1234')
    expect(service.isAuthenticated()).toBeTruthy();
  })

  it('Debería retornar valor false dese isAuthenticated cuando no hay token', () => {
    expect(service.isAuthenticated()).toBeFalsy()
  })

});
