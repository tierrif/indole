import { InjectionToken } from '@angular/core';
import { SidenavItemEntry } from './types';


const DEFAULT_DASHBOARD_SIDENAV_ITEMS: SidenavItemEntry[] = [
  {
    name: 'editor',
    displayName: 'Editor',
    url: 'editor',
    icon: 'matArticle'
  }
];

export const DASHBOARD_SIDENAV_ITEMS = new InjectionToken<SidenavItemEntry[]>(
  'dashboard-sidenav-items',
  {
    factory: () => DEFAULT_DASHBOARD_SIDENAV_ITEMS,
    providedIn: 'root'
  }
);
