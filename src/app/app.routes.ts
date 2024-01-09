import { Routes } from '@angular/router';

export const routes: Routes = [  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'form',
    loadComponent: () => import('./paginas/form/form.page').then( m => m.FormPage)
  },
];
