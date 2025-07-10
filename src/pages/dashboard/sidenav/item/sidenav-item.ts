import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ind-sidenav-item',
  templateUrl: './sidenav-item.html',
  styleUrl: './sidenav-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItem {}
