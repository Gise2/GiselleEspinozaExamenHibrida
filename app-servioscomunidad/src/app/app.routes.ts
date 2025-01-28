import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'publications',
    loadComponent: () => import('./page/publications/publications.page').then((m) => m.PublicationsPage),
  },
  {
    path: 'form',
    loadComponent: () => import('./publication/form/form.page').then((m) => m.PublicationFormPage),
  },
];

