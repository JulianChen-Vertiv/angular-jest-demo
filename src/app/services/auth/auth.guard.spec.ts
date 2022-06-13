import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let routerMock = { navigate: jest.fn() }

  beforeEach(async () => {
    void await TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: routerMock }
      ],
      imports: [
        RouterTestingModule
      ]
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should canActivate return true', () => {
    const mockRouteSnapshot: ActivatedRouteSnapshot = {
      data: {
        role: 'ROLE_ADMIN'
      }
    } as unknown as ActivatedRouteSnapshot;

    localStorage.setItem('LOGIN', 'true');

    jest.spyOn(authService, 'getRole').mockReturnValue('ROLE_ADMIN');

    expect(guard.canActivate(mockRouteSnapshot, {} as RouterStateSnapshot)).toBeTruthy();
  })

  it('should canActivate return false', () => {
    let mockRouteSnapshot: ActivatedRouteSnapshot = {
      data: {
        role: 'ROLE_ADMIN'
      }
    } as unknown as ActivatedRouteSnapshot;

    localStorage.setItem('LOGIN', 'false');

    expect(guard.canActivate(mockRouteSnapshot, {} as RouterStateSnapshot)).toBeFalsy();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);

    mockRouteSnapshot = {
      data: {
        role: 'ROLE_USER'
      }
    } as unknown as ActivatedRouteSnapshot;

    localStorage.setItem('LOGIN', 'true');

    expect(guard.canActivate(mockRouteSnapshot, {} as RouterStateSnapshot)).toBeFalsy();
  })
});
