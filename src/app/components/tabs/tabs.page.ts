import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTabButton,
    IonTabBar,
    IonLabel,
    RouterLink,
    RouterLinkActive,
  ],
})
export class TabsPage implements OnInit, OnDestroy {
  showTabs = signal<boolean>(true);
  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    const hiddenRoutes = ['my-profile'];
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const segments = event.url.split('/');
        const lastSegment = segments.pop() || ''; // Ensure it's a string
        const secondLastSegment = segments.pop() || ''; // Get the second last segment

        // Check if the route is 'my-profile' or 'news/:id'
        const isNewsDetail =
          secondLastSegment === 'news' && !isNaN(Number(lastSegment));
        this.showTabs.set(!hiddenRoutes.includes(lastSegment) && !isNewsDetail);
      }
    });
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
