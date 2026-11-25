import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  readonly portfolio = portfolio;
  readonly currentYear = new Date().getFullYear();
  showBackToTop = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.updateBackToTopVisibility();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateBackToTopVisibility();
  }

  private updateBackToTopVisibility(): void {
    const scrollPosition =
      this.document.documentElement.scrollTop || this.document.defaultView?.scrollY || 0;
    this.showBackToTop = scrollPosition > 320;
  }
}
