import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.html',
  styleUrl: './impact.css',
})
export class Impact {
  readonly highlights = portfolio.highlights;
}
