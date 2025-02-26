import { Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/home/home.page').then((m) => m.HomePage),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/news-detail/news-detail.page').then(
                (m) => m.NewsDetailPage
              ),
          },
        ],
      },
      {
        path: 'favorite',
        loadComponent: () =>
          import('./pages/favorite/favorite.page').then((m) => m.FavoritePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.page').then((m) => m.ProfilePage),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
