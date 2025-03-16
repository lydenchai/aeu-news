import { Routes } from '@angular/router';
import { TabsPage } from './components/tabs/tabs.page';

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
        path: 'home',
        loadComponent: () =>
          import('./pages/news/components/news-list/news-list.page').then(
            (m) => m.NewsListPage
          ),
      },
      {
        path: 'news/:id',
        loadComponent: () =>
          import('./pages/news/components/news-detail/news-detail.page').then(
            (m) => m.NewsDetailPage
          ),
      },
      {
        path: 'discover',
        loadComponent: () =>
          import('./pages/discover/discover.page').then((m) => m.DiscoverPage),
      },
      {
        path: 'save',
        loadComponent: () =>
          import('./pages/save/save.page').then((m) => m.SavePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/components/profile/profile.page').then(
            (m) => m.ProfilePage
          ),
      },
      {
        path: 'my-profile',
        loadComponent: () =>
          import('./pages/profile/components/my-profile/my-profile.page').then(
            (m) => m.MyProfilePage
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.page').then(
        (m) => m.NotFoundPage
      ),
  },
];
