import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  readonly portfolio = portfolio;
  lightMode = true;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  toggleTheme(): void {
    this.lightMode = !this.lightMode;
    this.document.documentElement.classList.toggle('theme-dark', !this.lightMode);
  }
}
