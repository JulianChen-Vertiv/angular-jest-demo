import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { GUARD_ROUTES } from './guard-routes';
import { AuthService } from './services/auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
        .then((m) => m.DashboardComponent) 
  },
  {
    path: '',
    providers: [AuthService],
    children: GUARD_ROUTES
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
