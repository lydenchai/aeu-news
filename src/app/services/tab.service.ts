import { Injectable } from '@angular/core';
import { Tab } from '../types/tab';
import { Observable, of } from 'rxjs';
import { BaseCrudService } from './base-crud.service';

@Injectable({
  providedIn: 'root',
})
export class TabService extends BaseCrudService<Tab> {
  private tabs: Tab[] = [
    {
      route: '/home',
      label: 'All news',
      activeIcon: 'home',
      inactiveIcon: 'home-outline',
    },
    {
      route: '/discover',
      label: 'Discover',
      activeIcon: 'compass',
      inactiveIcon: 'compass-outline',
    },
    {
      route: '/favorite',
      label: 'Favorite',
      activeIcon: 'bookmark',
      inactiveIcon: 'bookmark-outline',
    },
    {
      route: '/profile',
      label: 'Profile',
      activeIcon: 'person',
      inactiveIcon: 'person-outline',
    },
  ];

  constructor() {
    super();
  }

  // Get all tabs
  getList(): Observable<Tab[]> {
    return of(this.tabs);
  }
}
