import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { Sidenav } from './sidenav/sidenav';


@Component({
  selector: 'ind-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Sidenav,
    MatSidenavModule,
    MatToolbarModule,
    RouterOutlet
  ]
})
export class Dashboard {}
