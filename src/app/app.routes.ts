import { Routes } from '@angular/router';

export const routes: Routes = [  
  {
    path: '',
    redirectTo: 'categorias',
    pathMatch: 'full',
  },  
  {
    path: 'categorias',
    loadComponent: () => import('./paginas/categorias/categorias.page').then( m => m.CategoriasPage)
  },
  {
    path: 'cocteles/:categoria',
    loadComponent: () => import('./paginas/cocteles/cocteles.page').then( m => m.CoctelesPage)
  },
];
