import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular with Jest';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.isLogin;
  }

  login(val: string) {
    this.authService.login(val)
      .subscribe(res => {
        void this.router.navigate(['/heroes']);
        console.log(res);
      });
  }

  logout() {
    this.authService.logout().
      subscribe(res => {
      void this.router.navigate(['/dashboard']);
        console.log(res);
      });
  }
}
