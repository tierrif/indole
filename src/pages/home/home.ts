import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'ind-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {}
