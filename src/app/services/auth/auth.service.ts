import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;

  roleAs = '';

  constructor() { }

  login(value: string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('LOGIN', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('LOGIN', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('LOGIN');
    this.isLogin = loggedIn == 'true';
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE') as string;
    return this.roleAs;
  }

}