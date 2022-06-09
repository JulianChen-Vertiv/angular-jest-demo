import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login return success and role', () => {
    service.login('ROLE_ADMIN').subscribe((result) => {
      expect(localStorage.getItem('LOGIN')).toBe('true');
      expect(localStorage.getItem('ROLE')).toBe('ROLE_ADMIN');
      expect(result.success).toBeTruthy();

      expect(service.isLoggedIn()).toBeTruthy();
      expect(service.getRole()).toBe('ROLE_ADMIN');
    });
  });

  it('should logout return success and role', () => {
    service.logout().subscribe((result) => {
      expect(localStorage.getItem('LOGIN')).toBe('false');
      expect(result.success).toBeTruthy();
    });
  });
});
