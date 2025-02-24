import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {
  IonContent,
  IonRouterOutlet,
  IonTabs,
  IonTabButton,
  IonIcon,
  IonTabBar,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, 
    IonContent,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonRouterOutlet,
    IonTabs,
    IonTabButton,
    IonIcon,
    IonTabBar,
    IonLabel,
    IonMenu,
    IonMenuButton,
    IonHeader,
    IonButton,
    IonItem, 
  ],
})
export class RootContainerComponent implements OnInit {
  currentUrl?: string;
  isNotFound: boolean = false;
  showTabs = false;
  private allowedRoutes = ['/home', '/favorite', '/profile'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url.split('?')[0]; // Extract the path without query params
        this.isNotFound = !this.isRouteValid(this.currentUrl);
        this.showTabs = this.allowedRoutes.includes(this.currentUrl);
      }
    });
  }

  private isRouteValid(url?: string): boolean {
    if (!url) return false;
    const registeredRoutes = this.router.config.map((route) => route.path);
    return registeredRoutes.includes(url.replace(/^\//, '')); // Remove leading `/`
  }
}
