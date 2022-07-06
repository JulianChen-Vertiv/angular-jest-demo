import { Routes } from "@angular/router";
import { AuthGuard } from "./services/auth/auth.guard";

export const GUARD_ROUTES: Routes = [

    {
        path: 'detail/:id',
        canActivate: [ AuthGuard ],
        loadComponent: () => import('./pages/hero-detail/hero-detail.component')
            .then((m) => m.HeroDetailComponent) 
    },
    { 
        path: 'heroes',
        canActivate: [ AuthGuard ],
        loadComponent: () => import('./pages/heroes/heroes.component')
            .then((m) => m.HeroesComponent)
     }
]