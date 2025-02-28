import { Component, OnDestroy, OnInit } from '@angular/core';
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
  showTabs: boolean = true;
  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const segments = event.url.split('/');
        const lastSegment = segments.pop();
        this.showTabs = isNaN(Number(lastSegment));
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
