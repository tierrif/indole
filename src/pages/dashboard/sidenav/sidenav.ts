import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { DASHBOARD_SIDENAV_ITEMS } from './config';
import { SidenavItem } from './item/sidenav-item';


@Component({
  selector: 'ind-sidenav',
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidenavItem]
})
export class Sidenav {
  readonly items = inject(DASHBOARD_SIDENAV_ITEMS);
}
