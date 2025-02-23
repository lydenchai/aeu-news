import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonTabBar,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss'],
  imports: [
    IonRouterOutlet,
    IonTabs,
    IonTabButton,
    IonIcon,
    IonTabBar,
    IonLabel,
  ],
})
export class RootContainerComponent implements OnInit {
  currentUrl?: string;
  isNotFound: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url.split('?').reverse().pop();
        this.checkIfRouteExists(this.currentUrl);
      }
    });
  }

  private checkIfRouteExists(url?: string) {
    if (!url) return;
    const registeredRoutes = this.router.config.map((route) => route.path);
    this.isNotFound = !registeredRoutes.includes(url.replace(/^\//, '')); // Remove leading `/`
  }

  ngOnInit() {}
}
