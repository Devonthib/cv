import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { Title } from '@angular/platform-browser';

const Routing: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),

  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),

  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),

  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then((m) => m.ResumeModule),

  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),

  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
