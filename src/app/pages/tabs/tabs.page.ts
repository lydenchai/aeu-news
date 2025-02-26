import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
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
        const lastSegment = segments.pop(); // Get the last segment
        this.showTabs = isNaN(Number(lastSegment)); // Hide tabs if the last segment is a number
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
