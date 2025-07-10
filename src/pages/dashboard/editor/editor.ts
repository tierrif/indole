import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'ind-editor',
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Editor {}
