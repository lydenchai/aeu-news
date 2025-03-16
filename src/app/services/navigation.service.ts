import { Injectable, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private previousUrl = signal<string | null>(null);
  private currentUrl = signal<string | null>(null);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl.set(event.url);
      }
    });
  }

  getPreviousUrl(): string | null {
    return this.previousUrl();
  }
}
