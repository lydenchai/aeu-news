import { Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'all-news',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/news-list/news-list.page').then(
                (m) => m.NewsListPage
              ),
          },
          {
            path: 'search',
            loadComponent: () =>
              import('./pages/search/search.page').then((m) => m.SearchPage),
          },
        ],
      },
      {
        path: 'news/:id',
        loadComponent: () =>
          import('./pages/news-detail/news-detail.page').then(
            (m) => m.NewsDetailPage
          ),
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
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
