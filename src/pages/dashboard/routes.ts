import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';


export default [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/editor'
      },
      {
        path: 'editor',
        loadComponent: () => import('./editor/editor').then(m => m.Editor)
      }
    ]
  }
] satisfies Routes;
