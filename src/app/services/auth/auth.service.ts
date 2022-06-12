import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;

  roleAs = '';

  constructor() { }

  login(value: string): Observable<{ success: boolean, role: string }> {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('LOGIN', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout(): Observable<{ success: boolean, role: string }> {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('LOGIN', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem('LOGIN');
    this.isLogin = loggedIn == 'true';
    return this.isLogin;
  }

  getRole(): string {
    this.roleAs = localStorage.getItem('ROLE') as string;
    return this.roleAs;
  }

}
